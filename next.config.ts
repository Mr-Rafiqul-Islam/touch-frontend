import type { NextConfig } from "next";

const MyApi = process.env.NEXT_PUBLIC_API_URL;
const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https", // or "http" if the image source is not secure
        hostname: "touch.bytecareltd.com",
        pathname: "/**", // This allows all paths under the domain
      },
    ],
  },
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
