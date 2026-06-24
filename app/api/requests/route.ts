import { NextResponse } from "next/server";
import { supabaseServer } from "../../../lib/supabaseServer";

const VALID_VIDEO_TYPES = new Set([
  "Facecam",
  "Group stage",
  "Member fancam",
  "Ending fairy",
  "Funny moment",
  "Viral clip",
  "Dance practice",
  "Fan chant",
  "Korean expression",
  "Other",
]);

function cleanText(value: unknown, maxLength: number) {
  if (typeof value !== "string") {
    return null;
  }

  const trimmed = value.trim();

  if (!trimmed) {
    return null;
  }

  return trimmed.slice(0, maxLength);
}

function isValidUrl(value: string | null) {
  if (!value) {
    return true;
  }

  try {
    const url = new URL(value);
    return url.protocol === "http:" || url.protocol === "https:";
  } catch {
    return false;
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const groupName = cleanText(body.groupName, 100);
    const memberName = cleanText(body.memberName, 100);
    const videoType = cleanText(body.videoType, 50) ?? "Other";
    const youtubeUrl = cleanText(body.youtubeUrl, 300);
    const country = cleanText(body.country, 80);
    const message = cleanText(body.requestMessage, 1000);

    if (!VALID_VIDEO_TYPES.has(videoType)) {
      return NextResponse.json(
        { error: "Invalid video type." },
        { status: 400 }
      );
    }

    if (!isValidUrl(youtubeUrl)) {
      return NextResponse.json(
        { error: "Please enter a valid URL." },
        { status: 400 }
      );
    }

    if (!groupName && !memberName && !youtubeUrl && !message) {
      return NextResponse.json(
        { error: "Please tell us what you want to request." },
        { status: 400 }
      );
    }

    const { error } = await supabaseServer.from("content_requests").insert({
      group_name: groupName,
      member_name: memberName,
      video_type: videoType,
      youtube_url: youtubeUrl,
      country,
      message,
      status: "pending",
    });

    if (error) {
      console.error("Supabase insert error:", error);

      return NextResponse.json(
        { error: "Failed to save request." },
        { status: 500 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Request API error:", error);

    return NextResponse.json(
      { error: "Something went wrong." },
      { status: 500 }
    );
  }
}