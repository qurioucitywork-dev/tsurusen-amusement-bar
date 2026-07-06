import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";
import { RevealOnScroll } from "./RevealOnScroll";
import { SectionHeading } from "./SectionHeading";

export function HomeHighlightsSection() {
  return (
    <section className="section-pad bg-cyan">
      <div className="site-container grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <RevealOnScroll>
          <div className="relative">
            <div className="dokomi-hero-mask relative aspect-[5/4] bg-white shadow-[10px_10px_0_#050506]">
              <Image
                src={siteConfig.images.friends}
                alt="ダーツとドリンクを楽しむ利用シーン"
                fill
                sizes="(min-width: 1024px) 52vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="dokomi-card absolute -bottom-8 right-4 max-w-[260px] bg-amber p-5 md:right-10">
              <p className="font-display text-xs font-black uppercase tracking-[0.12em] text-ink">
                Capacity
              </p>
              <p className="mt-2 bubble-logo text-6xl text-coral">2-40</p>
              <p className="mt-2 text-sm font-bold leading-7 text-ink">
                少人数から貸切相談まで、夜の目的に合わせて調整。
              </p>
            </div>
          </div>
        </RevealOnScroll>
        <RevealOnScroll className="pt-8 lg:pt-0">
          <SectionHeading
            eyebrow="Commitment"
            title="はじめてでも、置いていかない。"
            copy="料金説明、ゲーム選び、席の距離感。遊び始める前の小さな不安を消してから、夜を楽しく動かします。"
          />
          <div className="mt-9 grid gap-4">
            {siteConfig.commitments.map((item, index) => (
              <div
                key={item.label}
                className={`dokomi-card p-5 ${index % 2 ? "bg-white" : "bg-amber"}`}
              >
                <p className="font-display text-xs font-black uppercase tracking-[0.12em] text-coral">
                  {item.label}
                </p>
                <h3 className="mt-2 text-xl font-black tracking-[0] text-ink">{item.title}</h3>
                <p className="mt-3 text-sm font-bold leading-7 text-mist">{item.body}</p>
              </div>
            ))}
          </div>
          <Link href="/#about" className="button-secondary mt-8 bg-white">
            こだわりを詳しく見る
          </Link>
        </RevealOnScroll>
      </div>
    </section>
  );
}
