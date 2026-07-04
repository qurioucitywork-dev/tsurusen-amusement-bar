import type { Metadata } from "next";
import { TsurusenFoodPixelPage } from "@/components/TsurusenFoodPixelPage";

export const metadata: Metadata = {
  title: "FOOD MENU",
  description: "TSURUSENのフードメニューページです。",
};

export default function FoodPage() {
  return <TsurusenFoodPixelPage />;
}
