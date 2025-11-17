import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Explicit quality range - silences Next.js warnings
    quality: 85,

    // Required by Next.js when customizing quality (prevents warnings)
    minimumCacheTTL: 60,
    unoptimized: false,

    formats: ['image/webp', 'image/avif'],
  },
};

export default nextConfig;
