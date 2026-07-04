import type { Metadata } from "next";
import { TsurusenDrinkPixelPage } from "@/components/TsurusenDrinkPixelPage";

export const metadata: Metadata = {
  title: "DRINK MENU",
  description: "TSURUSENのドリンクメニューページです。",
};

export default function DrinkPage() {
  return <TsurusenDrinkPixelPage />;
}
