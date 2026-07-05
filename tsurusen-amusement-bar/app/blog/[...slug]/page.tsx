import type { Metadata } from "next";
import { TsurusenBlogArticlePixelPage } from "@/components/TsurusenBlogArticlePixelPage";

const articleSlugs = [
  ["kabukicho-night-guide"],
  ["editors-pick"],
  ["darts-beginner-guide"],
  ["original-cocktail"],
  ["kabukicho-spots"],
  ["trending-01"],
  ["trending-02"],
  ["trending-03"],
  ["trending-04"],
  ["trending-05"],
  ["trending-06"],
  ["summer-dj-night-report"],
  ["new-food-menu"],
  ["business-hours-update"],
  ["series", "kabukicho-guide"],
  ["series", "darts"],
  ["series", "cocktail"],
  ["drink-guide"],
  ["karaoke-night"],
  ["birthday-surprise"],
  ["second-party"],
  ["kabukicho-gourmet"],
  ["second-party-guide"],
];

export const dynamicParams = false;

export function generateStaticParams() {
  return articleSlugs.map((slug) => ({ slug }));
}

export const metadata: Metadata = {
  title: "KABUKICHO NIGHT GUIDE",
  description: "TSURUSENのブログ記事ページです。",
};

export default function BlogArticlePage() {
  return <TsurusenBlogArticlePixelPage />;
}
