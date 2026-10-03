import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
      },
    ],
  },
  experimental: {
    // Turbopack's on-disk cache relies on atomic rename(), which the WSL DrvFs
    // mount backing /mnt/d rejects with EACCES. The result is a corrupt cache
    // that fails module resolution at runtime ("Cannot find module
    // next/dist/compiled/...") even though the files are present on disk.
    // Compiling from scratch each run is slower but correct here.
    turbopackFileSystemCacheForDev: false,
  },
};

export default nextConfig;