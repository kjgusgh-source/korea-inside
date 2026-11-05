import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        // The site moved from korea-inside.vercel.app to haemilkorea.com on
        // 2026-07-01. Send requests for that old production hostname only to
        // the same path (query strings pass through) on the official domain.
        // The host match is exact, so haemilkorea.com itself, Preview URLs
        // and deployment-specific *.vercel.app URLs are not redirected.
        source: "/:path*",
        has: [{ type: "host", value: "korea-inside\\.vercel\\.app" }],
        destination: "https://haemilkorea.com/:path*",
        statusCode: 301,
      },
    ];
  },
};

export default nextConfig;
