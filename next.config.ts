import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: false,
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
  experimental: {
    allowedDevOrigins: [
      'https://*.replit.dev',
      'https://*.repl.co',
    ],
  },
};

export default nextConfig;
