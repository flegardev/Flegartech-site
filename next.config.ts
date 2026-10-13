import type { NextConfig } from "next";

// Vercel detects and configures Next.js directly. Keeping this intentionally
// minimal preserves the full platform feature set (ISR, image optimization,
// previews, and future server-side features) without deployment-specific paths.
const nextConfig: NextConfig = {
  async headers() {
    return [{
      source: "/(.*)",
      headers: [
        { key: "X-Content-Type-Options", value: "nosniff" },
        { key: "X-Frame-Options", value: "DENY" },
        { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
      ],
    }];
  },
};

export default nextConfig;
