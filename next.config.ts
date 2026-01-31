import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Allow placeholder images from these domains during development
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'placehold.co',
      },
    ],
    // Use unoptimized images for missing local files during development
    unoptimized: process.env.NODE_ENV === 'development',
  },
};

export default nextConfig;
