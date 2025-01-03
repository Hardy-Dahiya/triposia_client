import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: [
      'c84.travelpayouts.com',
      'c1.travelpayouts.com',
      'c130.travelpayouts.com',
      'aerocloud.s3.amazonaws.com',
      'pix8.agoda.net',
    ], // Add the relevant domains here
  },
  output: 'standalone',
};

export default nextConfig;
