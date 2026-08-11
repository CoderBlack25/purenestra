import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // react-icons is optimized by Next.js out of the box; phosphor is not,
    // so its barrel file would otherwise pull the whole icon set into the graph.
    optimizePackageImports: ["@phosphor-icons/react"],
  },
};

export default nextConfig;
