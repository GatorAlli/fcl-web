import type { NextConfig } from "next";

const cpanelExport = process.env.FCL_CPANEL_EXPORT === "1";

const nextConfig: NextConfig = {
  distDir: cpanelExport ? ".next" : (process.env.FCL_DIST_DIR ?? ".next"),
  output: cpanelExport ? "export" : undefined,
  trailingSlash: cpanelExport,
  images: { qualities: [75, 90], unoptimized: cpanelExport },
  experimental: {
    agentFeedback: true,
    agentUpgrade: "security",
    ...(cpanelExport ? { cpus: 2 } : {}),
  },
  cacheComponents: !cpanelExport,
  partialPrefetching: !cpanelExport,
};

export default nextConfig;
