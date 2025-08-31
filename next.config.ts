import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable static exports
  output: 'export',
  
  // Base path if your app is served from a subdirectory
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
  
  // Asset prefix for serving assets from a CDN
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH || '',
  
  // Enable static HTML export
  images: {
    unoptimized: true,
  },
  
  // Enable static optimization
  trailingSlash: true,
};

export default nextConfig;
