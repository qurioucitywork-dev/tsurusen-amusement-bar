import Image from "next/image";
import { Camera } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import { SectionHeading } from "./SectionHeading";

export function SnsPreviewSection({ all = false }: { all?: boolean }) {
  return (
    <section className="section-pad bg-cyan">
      <div className="site-container grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
        <div>
          <SectionHeading
            eyebrow="Social"
            title="写真で雰囲気を見る"
            copy="DoKomiのフォトスライダーのように、席・ドリンク・遊び方の雰囲気を短時間で伝えます。"
          />
          <a href={siteConfig.instagramUrl} className="button-secondary mt-8 bg-white">
            <Camera size={18} aria-hidden="true" />
            Instagramを見る
          </a>
        </div>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-2">
          {siteConfig.snsPosts.slice(0, all ? 4 : 4).map((post, index) => (
            <div key={post.alt} className={`relative aspect-square overflow-hidden rounded-[34px] border-2 border-ink bg-white shadow-[6px_6px_0_#050506] ${index % 2 ? "translate-y-6" : ""}`}>
              <Image src={post.image} alt={post.alt} fill sizes="(min-width: 1024px) 25vw, 50vw" className="object-cover" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
