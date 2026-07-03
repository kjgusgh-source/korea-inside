import { NextResponse } from "next/server";
import { supabaseServer } from "../../../../lib/supabaseServer";

function getBearerToken(request: Request) {
  const authorization = request.headers.get("authorization");

  if (!authorization?.startsWith("Bearer ")) {
    return null;
  }

  return authorization.replace("Bearer ", "").trim();
}

export async function GET(request: Request) {
  const adminToken = process.env.ADMIN_REQUEST_TOKEN;
  const requestToken = getBearerToken(request);

  if (!adminToken) {
    return NextResponse.json(
      { error: "Missing ADMIN_REQUEST_TOKEN." },
      { status: 500 }
    );
  }

  if (!requestToken || requestToken !== adminToken) {
    return NextResponse.json(
      { error: "Invalid admin token." },
      { status: 401 }
    );
  }

  const { data, error } = await supabaseServer
  .from("content_requests")
  .select(
    "id, request_type, topic_title, page_url, group_name, member_name, video_type, youtube_url, country, message, status, created_at"
  )
  .order("created_at", { ascending: false });

  if (error) {
    console.error("Admin requests fetch error:", error);

    return NextResponse.json(
      { error: "Failed to load requests." },
      { status: 500 }
    );
  }

  return NextResponse.json({ requests: data ?? [] });
}