import type { NextConfig } from "next";
import path from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = path.dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  devIndicators: false,
  turbopack: {
    root: projectRoot,
  },
  async redirects() {
    return [
      { source: "/about", destination: "/#about", permanent: false },
      { source: "/party", destination: "/#scene", permanent: false },
      { source: "/private-party", destination: "/#scene", permanent: false },
      { source: "/access", destination: "/#access", permanent: false },
      { source: "/sns", destination: "/#gallery", permanent: false },
      { source: "/social", destination: "/#gallery", permanent: false },
      { source: "/reviews", destination: "/#reviews", permanent: false },
      { source: "/reservation", destination: "/#reserve", permanent: false },
      { source: "/faq", destination: "/#faq", permanent: false },
      { source: "/food-drink", destination: "/food-menu", permanent: false },
      { source: "/menu", destination: "/food-menu", permanent: false },
      { source: "/space", destination: "/play#gallery", permanent: false },
      { source: "/commitment", destination: "/#about", permanent: false },
      { source: "/contact", destination: "/#reserve", permanent: false },
      { source: "/blog", destination: "/news", permanent: false },
      { source: "/recruit", destination: "/events", permanent: false },
      { source: "/staff", destination: "/events#host", permanent: false },
      { source: "/events/:slug+", destination: "/events", permanent: false },
      { source: "/campaigns/:slug+", destination: "/campaigns", permanent: false },
      { source: "/news/:slug+", destination: "/news", permanent: false },
    ];
  },
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [390, 430, 768, 834, 1024, 1280, 1440, 1920],
    imageSizes: [96, 160, 240, 320, 480, 640],
  },
};

export default nextConfig;
