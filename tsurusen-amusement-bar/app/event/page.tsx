import type { Metadata } from "next";
import { TsurusenEventsPixelPage } from "@/components/TsurusenEventsPixelPage";

export const metadata: Metadata = {
  title: "EVENTS",
  description: "TSURUSEN events page.",
};

export default function EventPage() {
  return <TsurusenEventsPixelPage />;
}
