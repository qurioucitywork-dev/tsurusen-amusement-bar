import type { Metadata } from "next";
import { TsurusenSystemPixelPage } from "@/components/TsurusenSystemPixelPage";

export const metadata: Metadata = {
  title: "PRICE SYSTEM",
  description: "TSURUSENの料金・システムページです。",
};

export default function PricingPage() {
  return <TsurusenSystemPixelPage />;
}
