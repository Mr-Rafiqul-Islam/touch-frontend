import type { NextConfig } from "next";

const MyApi = process.env.NEXT_PUBLIC_API_URL;
const nextConfig: NextConfig = {
  /* config options here */
  async rewrites() {
    return [
      {
        source: "/api/:path*", // Frontend API route
        destination: `${MyApi}/api/:path*`, // Backend API
      },
    ];
  },
}; 
export default nextConfig;
