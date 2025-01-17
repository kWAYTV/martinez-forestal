import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    ppr: true
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'z5l0a09ijg.ufs.sh',
        port: '',
        pathname: '/f/**'
      }
    ]
  }
};

export default nextConfig;
