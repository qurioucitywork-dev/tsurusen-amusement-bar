import type { Metadata } from "next";
import { TsurusenCampaignPage } from "@/components/TsurusenCampaignPage";

export const metadata: Metadata = {
  title: "CAMPAIGNS",
  description: "TSURUSEN campaigns page.",
};

export default function CampaignPage() {
  return <TsurusenCampaignPage />;
}
