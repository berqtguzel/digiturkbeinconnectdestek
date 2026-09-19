import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  poweredByHeader: false,
  compress: true,
  experimental: {
    inlineCss: true,
  },
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1280, 1440, 1920],
    qualities: [60, 70, 75, 85],
    minimumCacheTTL: 2_592_000,
  },
};

export default nextConfig;
