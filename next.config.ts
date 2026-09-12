import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Hides the Next.js dev-mode corner badge (build-activity indicator).
  // It never appears in production builds either way.
  devIndicators: false,
};

export default nextConfig;
