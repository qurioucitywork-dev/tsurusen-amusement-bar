import type { Metadata } from "next";
import { TsurusenAccessPixelPage } from "@/components/TsurusenAccessPixelPage";

export const metadata: Metadata = {
  title: "ACCESS",
  description: "TSURUSEN access page.",
};

export default function AccessPage() {
  return <TsurusenAccessPixelPage />;
}
