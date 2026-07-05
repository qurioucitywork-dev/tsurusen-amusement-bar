import type { Metadata } from "next";
import { TsurusenBlogPixelPage } from "@/components/TsurusenBlogPixelPage";

export const metadata: Metadata = {
  title: "BLOG",
  description: "TSURUSENのブログページです。",
};

export default function BlogPage() {
  return <TsurusenBlogPixelPage />;
}
