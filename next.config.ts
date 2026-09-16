import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Fully static export: the whole site is pre-rendered to HTML at build
  // time. No server runtime is required, so it can be hosted on Vercel
  // (or any static host) with zero configuration.
  output: "export",
  images: {
    // next/image's default loader requires a server; with a static export
    // we pre-optimise nothing server-side, but we still keep next/image
    // for its markup/lazy-loading/CLS benefits.
    unoptimized: true,
  },
  trailingSlash: false,
  reactStrictMode: true,
};

export default nextConfig;
