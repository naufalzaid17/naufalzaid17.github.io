import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // GitHub Pages configuration
  basePath: process.env.NODE_ENV === 'production' ? '/naufalzaid17.github.io' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/naufalzaid17.github.io/' : '',
  
  // Export static HTML for GitHub Pages
  output: 'export',
  
  // Disable server-side features not supported on GitHub Pages
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
