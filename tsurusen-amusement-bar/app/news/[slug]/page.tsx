import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { TsurusenNewsArticlePage } from "@/components/TsurusenNewsArticlePage";
import { getAllNewsArticles, getNewsArticle } from "@/lib/newsArticles";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllNewsArticles().map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getNewsArticle(slug);

  if (!article) {
    return {
      title: "NEWS ARTICLE",
    };
  }

  return {
    title: article.title,
    description: article.subtitle,
    openGraph: {
      title: `${article.title} | TSURUSEN`,
      description: article.subtitle,
      images: [article.heroImage],
    },
  };
}

export default async function NewsArticleRoute({ params }: PageProps) {
  const { slug } = await params;
  const article = getNewsArticle(slug);

  if (!article) {
    notFound();
  }

  return <TsurusenNewsArticlePage article={article} />;
}
