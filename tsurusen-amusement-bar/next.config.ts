import type { NextConfig } from "next";
import path from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = path.dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  turbopack: {
    root: projectRoot,
  },
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [390, 430, 768, 834, 1024, 1280, 1440, 1920],
    imageSizes: [96, 160, 240, 320, 480, 640],
  },
};

export default nextConfig;
