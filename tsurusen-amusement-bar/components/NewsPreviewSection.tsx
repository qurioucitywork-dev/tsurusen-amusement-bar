import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import { SectionHeading } from "./SectionHeading";

export function NewsPreviewSection({ all = false }: { all?: boolean }) {
  const items = all ? siteConfig.news : siteConfig.news.slice(0, 3);
  return (
    <section className="section-pad bg-white">
      <div className="site-container">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="News"
            title="更新情報を見る"
            copy="イベント、貸切受付、ドリンク情報など、来店のきっかけになる情報をカードで掲載します。"
          />
          {!all ? (
            <Link href="/news" className="line-link">
              お知らせ一覧へ <ArrowUpRight size={16} aria-hidden="true" />
            </Link>
          ) : null}
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {items.map((news, index) => (
            <article key={news.title} className={`dokomi-card group overflow-hidden ${index % 2 ? "bg-cyan" : "bg-amber"}`}>
              <div className="relative aspect-[4/3] overflow-hidden rounded-t-[30px] border-b-2 border-ink">
                <Image src={news.image} alt={`${news.title}のイメージ`} fill sizes="(min-width: 1024px) 33vw, 100vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="p-6">
                <p className="pill-tag bg-white">
                  {news.date} / {news.category}
                </p>
                <h2 className="mt-5 text-2xl font-black leading-tight tracking-[0] text-ink">
                  {news.title}
                </h2>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
