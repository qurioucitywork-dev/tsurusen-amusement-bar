import type { Metadata } from "next";
import { TsurusenCampaignPixelPage } from "@/components/TsurusenCampaignPixelPage";

export const metadata: Metadata = {
  title: "CAMPAIGNS",
  description: "TSURUSEN campaigns page.",
};

export default function CampaignsPage() {
  return <TsurusenCampaignPixelPage />;
}
