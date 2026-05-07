import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images:{
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'qkxzff813d.ufs.sh'
      }
    ]
  }
};

export default nextConfig;
