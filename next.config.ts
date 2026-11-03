import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  distDir: process.env.FCL_DIST_DIR ?? ".next",
  images: { qualities: [75, 90] },
  experimental: {
    agentFeedback: true,
  },
  cacheComponents: true,
  partialPrefetching: true,
};

export default nextConfig;
