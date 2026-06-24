import { NextResponse } from "next/server";
import { supabaseServer } from "../../../../../lib/supabaseServer";

const VALID_STATUSES = new Set(["pending", "approved", "done", "rejected"]);

function getBearerToken(request: Request) {
  const authorization = request.headers.get("authorization");

  if (!authorization?.startsWith("Bearer ")) {
    return null;
  }

  return authorization.replace("Bearer ", "").trim();
}

type RouteContext = {
  params: Promise<{
    id: string;
  }>;
};

export async function PATCH(request: Request, context: RouteContext) {
  const adminToken = process.env.ADMIN_REQUEST_TOKEN;
  const requestToken = getBearerToken(request);
  const { id } = await context.params;

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

  const body = await request.json();
  const status = typeof body.status === "string" ? body.status : "";

  if (!VALID_STATUSES.has(status)) {
    return NextResponse.json(
      { error: "Invalid status." },
      { status: 400 }
    );
  }

  const { data, error } = await supabaseServer
    .from("content_requests")
    .update({ status })
    .eq("id", id)
    .select(
      "id, group_name, member_name, video_type, youtube_url, country, message, status, created_at"
    )
    .single();

  if (error) {
    console.error("Admin request update error:", error);

    return NextResponse.json(
      { error: "Failed to update request." },
      { status: 500 }
    );
  }

  return NextResponse.json({ request: data });
}