#!/usr/bin/env python3
"""HAEMIL Daily Performance report (GitHub Actions edition).

Read-only port of the Cowork scheduled skill
`haemil-daily-performance-report-remote`. Fetches a lightweight Search
Console + GA4 snapshot and writes one row to the existing Notion
"HAEMIL Daily Performance" database. This script never mutates the
website, GitHub, or Vercel, and never calls any Google *write* API.

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
    script only prints the computed summary to stdout.
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

NOTION_VERSION = "2022-06-28"
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


def fetch_search_console(site_url: str) -> dict[str, Any]:
    """Replicates SKILL steps 1-3 with the raw, read-only GSC API.

    The "confirmed latest date" is the most recent date present when
    querying with dataState="final" -- GSC only returns rows for
    finalized days there, so this is equivalent to what the Cowork
    skill derives from Composio's firstIncompleteDate helper.
    """
    result: dict[str, Any] = {"status": "ok", "errors": []}
    try:
        creds = load_credentials(GSC_SCOPES)
        service = build("searchconsole", "v1", credentials=creds, cache_discovery=False)
    except Exception as exc:  # noqa: BLE001 - never crash the run, report instead
        result["status"] = "failed"
        result["errors"].append(f"GSC 인증 실패: {exc}")
        return result

    today = date.today()
    range_start = (today - timedelta(days=7)).isoformat()
    range_end = today.isoformat()

    try:
        by_date = gsc_query(
            service,
            site_url,
            {
                "startDate": range_start,
                "endDate": range_end,
                "dimensions": ["date"],
                "dataState": "final",
                "rowLimit": 10,
            },
        )
        rows = sorted(by_date.get("rows", []), key=lambda r: r["keys"][0])
        if not rows:
            result["status"] = "failed"
            result["errors"].append("dataState=final 조회에 행이 없음")
            return result
        latest_row = rows[-1]
        confirmed_date = latest_row["keys"][0]
        prev_row = rows[-2] if len(rows) >= 2 else None
        result["confirmed_date"] = confirmed_date
        result["latest_day"] = {
            "clicks": latest_row.get("clicks", 0),
            "impressions": latest_row.get("impressions", 0),
            "ctr": latest_row.get("ctr", 0),
            "position": latest_row.get("position", 0),
        }
        result["previous_day"] = (
            {
                "date": prev_row["keys"][0],
                "clicks": prev_row.get("clicks", 0),
                "impressions": prev_row.get("impressions", 0),
            }
            if prev_row
            else None
        )
    except Exception as exc:  # noqa: BLE001
        result["status"] = "failed"
        result["errors"].append(f"date 조회 실패: {exc}")
        return result

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
    """Replicates SKILL step 6 (>=20% change, or a drop to 0, is notable)."""
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


def already_reported_today(database_id: str, report_date: str) -> bool:
    resp = requests.post(
        f"{NOTION_API_BASE}/databases/{database_id}/query",
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
    database_id: str,
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
            "parent": {"database_id": database_id},
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
    database_id = os.environ.get("NOTION_DATABASE_ID", "b7c8f793-2576-4f5c-b3db-62774a824693")

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

    if args.mode == "dry-run":
        print("[haemil-performance] dry-run 모드 — Notion에는 기록하지 않습니다.")
        return 0

    if already_reported_today(database_id, report_date):
        print(f"[haemil-performance] {report_date} 항목이 이미 존재합니다. 생성을 생략합니다.")
        return 0

    page_id = create_notion_page(database_id, report_date, gsc, ga4, trend, attention, summary)
    print(f"[haemil-performance] Notion 페이지 생성 완료: {page_id}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
