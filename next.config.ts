import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Optimize images for Vercel
  images: {
    unoptimized: true,
  },
  
  // Enable static optimization
  trailingSlash: true,
};

export default nextConfig;
