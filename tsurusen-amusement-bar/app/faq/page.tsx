import type { Metadata } from "next";
import { TsurusenFaqPage } from "@/components/TsurusenFaqPage";

export const metadata: Metadata = {
  title: "FAQ",
  description: "TSURUSENの予約、料金、設備、アクセスに関するよくある質問をまとめたFAQページです。",
};

export default function FaqPage() {
  return <TsurusenFaqPage />;
}
