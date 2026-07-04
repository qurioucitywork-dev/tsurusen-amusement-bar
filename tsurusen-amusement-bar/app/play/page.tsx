import type { Metadata } from "next";
import { TsurusenEntertainmentPixelPage } from "@/components/TsurusenEntertainmentPixelPage";

export const metadata: Metadata = {
  title: "ENTERTAINMENT",
  description: "TSURUSENのエンターテインメントページです。",
};

export default function PlayPage() {
  return <TsurusenEntertainmentPixelPage />;
}
