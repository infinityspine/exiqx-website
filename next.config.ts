import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Allow higher quality images globally
    quality: 85,

    // Recommended formats (faster + better compression)
    formats: ['image/webp', 'image/avif'],
  },

  // (Keep all your existing config below this line)
};

export default nextConfig;
