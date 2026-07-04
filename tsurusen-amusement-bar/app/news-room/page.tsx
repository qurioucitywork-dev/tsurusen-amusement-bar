import type { Metadata } from "next";
import { TsurusenNewsPixelPage } from "@/components/TsurusenNewsPixelPage";

export const metadata: Metadata = {
  title: "NEWS ROOM",
  description: "TSURUSEN NEWS ROOM page.",
};

export default function NewsRoomPage() {
  return <TsurusenNewsPixelPage />;
}
