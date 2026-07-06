import Link from "next/link";
import { Clock, MapPin, Train } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import { SectionHeading } from "./SectionHeading";

export function AccessSection() {
  return (
    <section className="section-pad bg-white">
      <div className="site-container grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
        <SectionHeading
          eyebrow="Access"
          title="合流しやすい夜へ"
          copy="東京23区内で、仕事帰りや二次会にも使いやすい立地を想定。詳細住所は公開準備中です。"
        />
        <div className="grid gap-5">
          <div className="dokomi-card bg-coral p-7 text-white">
            <MapPin aria-hidden="true" />
            <h2 className="mt-5 text-3xl font-black tracking-[0]">所在地</h2>
            <p className="mt-4 text-sm font-bold leading-8">{siteConfig.address}</p>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            <div className="dokomi-card bg-cyan p-7">
              <Train aria-hidden="true" />
              <h3 className="mt-5 text-2xl font-black tracking-[0] text-ink">最寄り</h3>
              <p className="mt-4 text-sm font-bold leading-8 text-ink">{siteConfig.nearestStation}</p>
            </div>
            <div className="dokomi-card bg-amber p-7">
              <Clock aria-hidden="true" />
              <h3 className="mt-5 text-2xl font-black tracking-[0] text-ink">営業時間</h3>
              <div className="mt-4 grid gap-2 text-sm font-bold text-ink">
                {siteConfig.hours.map((item) => (
                  <p key={item.day} className="flex justify-between gap-4">
                    <span>{item.day}</span>
                    <span>{item.time}</span>
                  </p>
                ))}
              </div>
            </div>
          </div>
          <Link href="/#reserve" className="button-primary justify-self-start">
            来店前に空席確認
          </Link>
        </div>
      </div>
    </section>
  );
}
