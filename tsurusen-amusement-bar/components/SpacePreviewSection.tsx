import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import { RevealOnScroll } from "./RevealOnScroll";
import { SectionHeading } from "./SectionHeading";

const gallery = [
  { image: siteConfig.images.darts, alt: "ダーツレーン", title: "Darts Lane" },
  { image: siteConfig.images.karaoke, alt: "カラオケラウンジ", title: "Karaoke Lounge" },
  { image: siteConfig.images.cocktails, alt: "バーカウンターのカクテル", title: "Bar Counter" },
  { image: siteConfig.images.cta, alt: "夜のバーカウンター", title: "Counter Seat" },
];

export function SpacePreviewSection() {
  return (
    <section className="section-pad overflow-hidden bg-white">
      <div className="site-container">
        <SectionHeading
          eyebrow="Space"
          title="店内を見て選ぶ"
          copy="DoKomiの横長フォトギャラリーのように、席・設備・雰囲気を大きな写真で確認できます。"
        />
      </div>
      <div className="mt-14 flex gap-5 overflow-x-auto px-4 pb-6 md:px-8">
        {gallery.map((item, index) => (
          <RevealOnScroll key={item.title} className="min-w-[78vw] md:min-w-[42vw] xl:min-w-[32vw]">
            <div className={index % 2 ? "pt-10" : ""}>
              <div className="dokomi-card relative aspect-[4/5] overflow-hidden bg-white p-3 md:aspect-[4/3]">
                <div className="relative h-full overflow-hidden rounded-[30px]">
                  <Image src={item.image} alt={item.alt} fill sizes="(min-width: 1280px) 32vw, (min-width: 768px) 42vw, 78vw" className="object-cover" />
                </div>
                <p className="absolute bottom-7 left-7 rounded-full border-2 border-ink bg-coral px-5 py-3 font-display text-xl font-black tracking-[0] text-white">
                  {item.title}
                </p>
              </div>
            </div>
          </RevealOnScroll>
        ))}
      </div>
      <div className="site-container mt-8">
        <Link href="/space" className="line-link">
          店内紹介へ <ArrowUpRight size={16} aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}
