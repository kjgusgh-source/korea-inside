#!/usr/bin/env python3
"""HAEMIL Daily Performance report (GitHub Actions edition).

Read-only port of the Cowork scheduled skill
`haemil-daily-performance-report-remote`. Fetches a lightweight Search
Console + GA4 snapshot and writes one row to the existing Notion
"HAEMIL Daily Performance" database (queried/created via its data source,
Notion API version 2025-09-03). This script never mutates the website,
GitHub, or Vercel, and never calls any Google *write* API.

Safety constraints (keep in sync with the accompanying workflow's
`permissions:` block and secret scopes):
  - Only ever calls read-only Search Console / GA4 endpoints
    (searchanalytics().query(), properties.runReport()).
  - Never calls sitemap submission, URL inspection/indexing, GSC
    settings, or any other Google *write* endpoint.
  - Never calls git/GitHub/Vercel APIs.
  - Only touches the Notion "HAEMIL Daily Performance" data source: a
    dedup query (read) and, in --mode write, a single page create.
    Never updates or deletes existing Notion content, and never
    touches the Content Pipeline (Proposals/Research/Production)
    database.
  - In --mode dry-run, the Notion write step is skipped entirely; the
    script only prints the computed summary (including all top pages)
    to stdout.
"""

from __future__ import annotations

import argparse
import json
import os
import sys
from datetime import date, datetime, timedelta, timezone
from typing import Any

import requests
from google.analytics.data_v1beta import BetaAnalyticsDataClient
from google.analytics.data_v1beta.types import DateRange, Metric, RunReportRequest
from google.oauth2 import service_account
from googleapiclient.discovery import build

GSC_SCOPES = ["https://www.googleapis.com/auth/webmasters.readonly"]
GA4_SCOPES = ["https://www.googleapis.com/auth/analytics.readonly"]

NOTION_VERSION = "2025-09-03"
NOTION_API_BASE = "https://api.notion.com/v1"

KST = timezone(timedelta(hours=9))


def load_credentials(scopes: list[str]) -> service_account.Credentials:
    raw = os.environ.get("GOOGLE_SERVICE_ACCOUNT_JSON")
    if not raw:
        raise RuntimeError("GOOGLE_SERVICE_ACCOUNT_JSON environment variable is missing.")
    info = json.loads(raw)
    return service_account.Credentials.from_service_account_info(info, scopes=scopes)


def gsc_query(service: Any, site_url: str, body: dict[str, Any]) -> dict[str, Any]:
    return service.searchanalytics().query(siteUrl=site_url, body=body).execute()


def fetch_metadata_first_incomplete_date(
    service: Any, site_url: str, range_start: str, range_end: str
) -> str | None:
    """dataState="all" + dimensions=["date"] 조회의 metadata에서
    firstIncompleteDate(아직 집계/처리 중인 첫 날짜)를 읽는다.

    Google 공식 문서(Search Analytics: query)의 응답 스키마 설명 텍스트는
    필드명을 `first_incomplete_date`(snake_case)로 표기하지만, discovery
    기반 파이썬 클라이언트는 실제 JSON 키를 그대로 돌려주며 Google API는
    보통 camelCase(`firstIncompleteDate`)를 사용하므로 두 표기를 모두
    확인한다. 이 필드는 dataState="all" + dimensions=["date"]이고 조회
    범위 안에 미확정 데이터가 있을 때만 채워진다(공식 문서 명시).
    """
    resp = gsc_query(
        service,
        site_url,
        {
            "startDate": range_start,
            "endDate": range_end,
            "dimensions": ["date"],
            "dataState": "all",
            "rowLimit": 25,
        },
    )
    metadata = resp.get("metadata", {}) or {}
    return metadata.get("firstIncompleteDate") or metadata.get("first_incomplete_date")


def fetch_single_day_metrics(service: Any, site_url: str, day: str) -> dict[str, Any]:
    """지정한 하루의 Clicks/Impressions/CTR/Average Position을 조회한다.

    Search Console 공식 문서: "When date is one of the dimensions, any
    days without data are omitted from the result list." — 즉 해당
    날짜에 클릭·노출이 전혀 없으면 rows 자체가 비어 있을 수 있다. 이는
    오류가 아니라 0-impression인 정상적인 하루이므로, row가 없으면
    수치를 추정하지 않고 그대로 0으로 채운다.
    """
    resp = gsc_query(
        service,
        site_url,
        {
            "startDate": day,
            "endDate": day,
            "dimensions": ["date"],
            "dataState": "final",
            "rowLimit": 1,
        },
    )
    rows = resp.get("rows", [])
    if rows:
        r = rows[0]
        return {
            "clicks": r.get("clicks", 0),
            "impressions": r.get("impressions", 0),
            "ctr": r.get("ctr", 0),
            "position": r.get("position", 0),
        }
    return {"clicks": 0, "impressions": 0, "ctr": 0, "position": 0}


def fetch_search_console(site_url: str) -> dict[str, Any]:
    """Search Console 확정 최신일 + 핵심 지표 + 상위 페이지를 조회한다 (읽기 전용).

    확정 최신일 계산: dataState="all"로 조회한
    metadata.firstIncompleteDate(아직 수집/처리 중인 첫 날짜)를 기준으로,
    그 하루 전날을 "확정 최신 날짜"로 사용한다.

    (이전 버전은 dataState="final" 조회에서 반환된 rows의 마지막 날짜를
    확정일로 삼았는데, 노출이 0인 날짜는 rows에서 통째로 생략되므로
    실제 확정일보다 앞당겨질 수 있는 문제가 있었다. 이번 수정으로 해결.)
    """
    result: dict[str, Any] = {"status": "ok", "errors": []}
    try:
        creds = load_credentials(GSC_SCOPES)
        service = build("searchconsole", "v1", credentials=creds, cache_discovery=False)
    except Exception as exc:  # noqa: BLE001 - never crash the run, report instead
        result["status"] = "failed"
        result["errors"].append(f"GSC 인증 실패: {exc}")
        return result

    # GitHub Actions 러너는 UTC로 동작한다. UTC 기준 date.today()를 쓰면 KST
    # 00:00~08:59 사이 수동 workflow_dispatch 실행 시 "오늘" 날짜가 하루
    # 어긋날 수 있으므로, HAEMIL 기준시(KST)로 오늘 날짜를 계산한다.
    today = datetime.now(KST).date()
    range_start = (today - timedelta(days=10)).isoformat()
    range_end = today.isoformat()

    try:
        first_incomplete = fetch_metadata_first_incomplete_date(
            service, site_url, range_start, range_end
        )
    except Exception as exc:  # noqa: BLE001
        result["status"] = "failed"
        result["errors"].append(f"metadata(firstIncompleteDate) 조회 실패: {exc}")
        return result

    if first_incomplete:
        confirmed_date = (date.fromisoformat(first_incomplete) - timedelta(days=1)).isoformat()
    else:
        # metadata에 firstIncompleteDate가 없는 경우는 공식 문서상 "조회 범위 안에
        # 미확정 데이터가 없을 때"만 발생하는 예외적인 상황이다. 값을 추정하지
        # 않고 Data Status를 partial로 남긴 채 today-1을 임시값으로 사용한다.
        confirmed_date = (today - timedelta(days=1)).isoformat()
        result["status"] = "partial"
        result["errors"].append(
            "GSC 응답에 metadata.firstIncompleteDate가 없어 확정일을 today-1로 "
            "대체했습니다(정상적으로는 거의 발생하지 않음, 별도 확인 필요)."
        )

    result["confirmed_date"] = confirmed_date

    try:
        result["latest_day"] = fetch_single_day_metrics(service, site_url, confirmed_date)
    except Exception as exc:  # noqa: BLE001
        result["status"] = "failed"
        result["errors"].append(f"확정일 단일일 지표 조회 실패: {exc}")
        return result

    # 비교 대상(직전) 날짜: "확정일 하루 전날"을 고정 기준으로 사용한다.
    #
    # 원본 SKILL.md(월/수/금 주 3회 실행)의 "직전 조회일" 개념(보통 2~3일 전 =
    # 사실상 "지난 실행 회차의 확정일")과 정확히 같은 정의는 아니다. 이 자동화를
    # 매일 실행(daily cadence)으로 전환하면서, Notion에서 직전 리포트를 추가로
    # 조회해 정확히 재현하는 방식 대신 confirmed_date-1 고정 비교를 그대로
    # 유지하기로 결정했다(2026-08-23, 현호님 확인) — 일일 실행 전환에 따른
    # 의도적인 최소 변경이며, 향후 다시 논의될 수 있다.
    try:
        previous_date = (date.fromisoformat(confirmed_date) - timedelta(days=1)).isoformat()
        previous_metrics = fetch_single_day_metrics(service, site_url, previous_date)
        result["previous_day"] = {
            "date": previous_date,
            "clicks": previous_metrics["clicks"],
            "impressions": previous_metrics["impressions"],
        }
    except Exception as exc:  # noqa: BLE001
        if result["status"] == "ok":
            result["status"] = "partial"
        result["errors"].append(f"비교 대상 날짜 조회 실패: {exc}")
        result["previous_day"] = None

    try:
        by_page = gsc_query(
            service,
            site_url,
            {
                "startDate": confirmed_date,
                "endDate": confirmed_date,
                "dimensions": ["page"],
                "dataState": "final",
                "rowLimit": 5,
            },
        )
        pages = sorted(
            by_page.get("rows", []),
            key=lambda r: (r.get("clicks", 0), r.get("impressions", 0)),
            reverse=True,
        )[:5]
        result["top_pages"] = [
            {
                "page": p["keys"][0],
                "clicks": p.get("clicks", 0),
                "impressions": p.get("impressions", 0),
            }
            for p in pages
        ]
    except Exception as exc:  # noqa: BLE001
        if result["status"] == "ok":
            result["status"] = "partial"
        result["errors"].append(f"page 조회 실패: {exc}")
        result["top_pages"] = []

    return result


def fetch_ga4(property_id: str) -> dict[str, Any]:
    """Replicates SKILL step 4: yesterday's Users/Sessions/Views only."""
    result: dict[str, Any] = {"status": "ok", "errors": []}
    try:
        creds = load_credentials(GA4_SCOPES)
        client = BetaAnalyticsDataClient(credentials=creds)
        request = RunReportRequest(
            property=property_id,
            date_ranges=[DateRange(start_date="yesterday", end_date="yesterday")],
            metrics=[
                Metric(name="activeUsers"),
                Metric(name="sessions"),
                Metric(name="screenPageViews"),
            ],
        )
        response = client.run_report(request)
        if response.rows:
            values = response.rows[0].metric_values
            result["users"] = int(float(values[0].value))
            result["sessions"] = int(float(values[1].value))
            result["views"] = int(float(values[2].value))
        else:
            result["users"] = result["sessions"] = result["views"] = 0
    except Exception as exc:  # noqa: BLE001
        result["status"] = "failed"
        result["errors"].append(f"GA4 조회 실패: {exc}")
    return result


def judge_trend(gsc: dict[str, Any]) -> tuple[str, bool]:
    """Replicates SKILL step 6 (>=20% change, or a drop to 0, is notable).

    비교 기준일(previous_day = confirmed_date-1)은 일일 실행 전환에 따른
    의도적인 최소 변경이다 — fetch_search_console()의 주석 참고.
    """
    if gsc.get("status") == "failed" or not gsc.get("previous_day"):
        return "Insufficient Data", False

    latest_clicks = gsc["latest_day"]["clicks"]
    latest_impr = gsc["latest_day"]["impressions"]
    prev_clicks = gsc["previous_day"]["clicks"]
    prev_impr = gsc["previous_day"]["impressions"]

    def pct_change(new: float, old: float) -> float | None:
        if old == 0:
            return None
        return (new - old) / old

    click_change = pct_change(latest_clicks, prev_clicks)
    impr_change = pct_change(latest_impr, prev_impr)

    dropped_to_zero = (prev_clicks > 0 and latest_clicks == 0) or (
        prev_impr > 0 and latest_impr == 0
    )
    notable = dropped_to_zero or any(
        c is not None and abs(c) >= 0.20 for c in (click_change, impr_change)
    )

    if (
        dropped_to_zero
        or (click_change is not None and click_change <= -0.20)
        or (impr_change is not None and impr_change <= -0.20)
    ):
        trend = "Down"
    elif (click_change is not None and click_change >= 0.20) or (
        impr_change is not None and impr_change >= 0.20
    ):
        trend = "Up"
    else:
        trend = "Stable"

    return trend, notable


def build_summary(gsc: dict[str, Any], ga4: dict[str, Any], trend: str, attention: bool) -> str:
    lines: list[str] = []
    if gsc.get("status") == "failed":
        lines.append(f"Search Console 조회 실패: {'; '.join(gsc.get('errors', []))}")
    else:
        latest = gsc["latest_day"]
        lines.append(
            f"확정 최신 날짜 {gsc['confirmed_date']} 클릭 {latest['clicks']} / "
            f"노출 {latest['impressions']} / 평균순위 {round(latest['position'], 1)}"
        )
        if gsc.get("top_pages"):
            top = gsc["top_pages"][0]
            lines.append(f"성과 1위 페이지: {top['page']} (클릭 {top['clicks']})")
    if ga4.get("status") == "failed":
        lines.append(f"GA4 조회 실패: {'; '.join(ga4.get('errors', []))}")
    else:
        lines.append(
            f"GA4 전일 사용자 {ga4.get('users', 0)} / 세션 {ga4.get('sessions', 0)} / "
            f"조회수 {ga4.get('views', 0)}"
        )
    lines.append(f"Trend: {trend}" + (" (주의 필요)" if attention else ", 특이사항 없음"))
    return "\n".join(lines)


def data_status(gsc: dict[str, Any], ga4: dict[str, Any]) -> str:
    if gsc.get("status") == "failed" and ga4.get("status") == "failed":
        return "Failed"
    if gsc.get("status") == "failed" or ga4.get("status") == "failed":
        return "Partial"
    if gsc.get("status") == "partial":
        return "Partial"
    return "Complete"


def notion_headers() -> dict[str, str]:
    api_key = os.environ.get("NOTION_API_KEY")
    if not api_key:
        raise RuntimeError("NOTION_API_KEY environment variable is missing.")
    return {
        "Authorization": f"Bearer {api_key}",
        "Notion-Version": NOTION_VERSION,
        "Content-Type": "application/json",
    }


def already_reported_today(data_source_id: str, report_date: str) -> bool:
    """Notion API 2025-09-03: 데이터베이스가 아니라 데이터 소스를 조회한다."""
    resp = requests.post(
        f"{NOTION_API_BASE}/data_sources/{data_source_id}/query",
        headers=notion_headers(),
        json={
            "filter": {"property": "Report Date", "date": {"equals": report_date}},
            "page_size": 1,
        },
        timeout=30,
    )
    resp.raise_for_status()
    return len(resp.json().get("results", [])) > 0


def create_notion_page(
    data_source_id: str,
    report_date: str,
    gsc: dict[str, Any],
    ga4: dict[str, Any],
    trend: str,
    attention: bool,
    summary: str,
) -> str:
    status = data_status(gsc, ga4)
    props: dict[str, Any] = {
        "Report": {"title": [{"text": {"content": f"HAEMIL Daily Performance - {report_date}"}}]},
        "Report Date": {"date": {"start": report_date}},
        "Data Status": {"select": {"name": status}},
        "Trend": {"select": {"name": trend}},
        "Attention Needed": {"checkbox": attention},
        "Summary": {"rich_text": [{"text": {"content": summary[:2000]}}]},
    }
    if gsc.get("status") != "failed":
        props["Search Console Latest Date"] = {"date": {"start": gsc["confirmed_date"]}}
        props["Clicks"] = {"number": gsc["latest_day"]["clicks"]}
        props["Impressions"] = {"number": gsc["latest_day"]["impressions"]}
        props["Average Position"] = {"number": gsc["latest_day"]["position"]}
        props["CTR"] = {"number": gsc["latest_day"]["ctr"]}
    if ga4.get("status") != "failed":
        props["Users"] = {"number": ga4["users"]}
        props["Sessions"] = {"number": ga4["sessions"]}
        props["Views"] = {"number": ga4["views"]}

    children: list[dict[str, Any]] = [
        {
            "object": "block",
            "type": "heading_2",
            "heading_2": {"rich_text": [{"text": {"content": "핵심 클릭·노출"}}]},
        },
        {
            "object": "block",
            "type": "paragraph",
            "paragraph": {"rich_text": [{"text": {"content": summary}}]},
        },
    ]
    if gsc.get("top_pages"):
        children.append(
            {
                "object": "block",
                "type": "heading_2",
                "heading_2": {"rich_text": [{"text": {"content": "성과 좋은 페이지"}}]},
            }
        )
        for p in gsc["top_pages"]:
            children.append(
                {
                    "object": "block",
                    "type": "bulleted_list_item",
                    "bulleted_list_item": {
                        "rich_text": [
                            {
                                "text": {
                                    "content": (
                                        f"{p['page']} — 클릭 {p['clicks']} / "
                                        f"노출 {p['impressions']}"
                                    )
                                }
                            }
                        ]
                    },
                }
            )

    resp = requests.post(
        f"{NOTION_API_BASE}/pages",
        headers=notion_headers(),
        json={
            "parent": {"type": "data_source_id", "data_source_id": data_source_id},
            "properties": props,
            "children": children,
        },
        timeout=30,
    )
    resp.raise_for_status()
    return resp.json()["id"]


def main() -> int:
    parser = argparse.ArgumentParser(
        description="HAEMIL Daily Performance (read-only GSC/GA4 -> Notion)"
    )
    parser.add_argument("--mode", choices=["dry-run", "write"], default="dry-run")
    args = parser.parse_args()

    site_url = os.environ.get("GSC_SITE_URL", "sc-domain:haemilkorea.com")
    ga4_property = os.environ.get("GA4_PROPERTY_ID", "properties/543892649")
    data_source_id = os.environ.get(
        "NOTION_DATA_SOURCE_ID", "5d87509f-e039-4a1c-8430-a64df97052d0"
    )

    report_date = datetime.now(KST).date().isoformat()

    print(
        f"[haemil-performance] mode={args.mode} report_date={report_date} "
        f"site={site_url} ga4={ga4_property}"
    )

    gsc = fetch_search_console(site_url)
    ga4 = fetch_ga4(ga4_property)
    trend, attention = judge_trend(gsc)
    summary = build_summary(gsc, ga4, trend, attention)
    status = data_status(gsc, ga4)

    print("----- 요약 (dry-run, Notion 미기록) -----" if args.mode == "dry-run" else "----- 요약 -----")
    print(f"Report Date: {report_date}")
    print(f"Data Status: {status}")
    print(f"Trend: {trend} / Attention Needed: {attention}")
    print(summary)

    print("----- 성과 좋은 페이지 (상위 5개, URL / Clicks / Impressions) -----")
    if gsc.get("top_pages"):
        for i, p in enumerate(gsc["top_pages"], start=1):
            print(f"{i}. {p['page']} — Clicks {p['clicks']} / Impressions {p['impressions']}")
    else:
        print("(해당 없음: 확정일 기준 페이지별 클릭/노출 데이터 없음, 또는 조회 실패)")

    if args.mode == "dry-run":
        print("[haemil-performance] dry-run 모드 — Notion에는 기록하지 않습니다.")
        return 0

    if already_reported_today(data_source_id, report_date):
        print(f"[haemil-performance] {report_date} 항목이 이미 존재합니다. 생성을 생략합니다.")
        return 0

    page_id = create_notion_page(data_source_id, report_date, gsc, ga4, trend, attention, summary)
    print(f"[haemil-performance] Notion 페이지 생성 완료: {page_id}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
