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
        // Exception: the Search Console HTML verification file for the old
        // host (public/google5bd3c689c78bbd73.html) stays reachable there so
        // ownership of https://korea-inside.vercel.app/ can be verified and
        // kept verified.
        source: "/:path((?!google5bd3c689c78bbd73\\.html$).*)",
        has: [{ type: "host", value: "korea-inside\\.vercel\\.app" }],
        destination: "https://haemilkorea.com/:path",
        statusCode: 301,
      },
    ];
  },
};

export default nextConfig;
