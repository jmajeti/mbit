import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Strict mode for catching issues early
  reactStrictMode: true,

  // Image optimization — add mbitassociates.com if you serve images from there
  images: {
    remotePatterns: [],
  },

  // Security headers
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-XSS-Protection", value: "1; mode=block" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        ],
      },
    ];
  },
};

export default nextConfig;
