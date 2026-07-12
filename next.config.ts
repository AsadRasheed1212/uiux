import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },

  experimental: {
    optimizePackageImports: [
      "react-icons",
      "framer-motion",
    ],
  },

  compress: true,

  poweredByHeader: false,
};

export default nextConfig;