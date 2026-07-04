import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import { RevealOnScroll } from "./RevealOnScroll";
import { SectionHeading } from "./SectionHeading";

const colors = ["bg-white", "bg-amber", "bg-cyan"];

export function HomeGatewaySection() {
  return (
    <section className="section-pad bg-white">
      <div className="site-container">
        <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
          <SectionHeading
            eyebrow="Gateway"
            title="目的からページを選ぶ"
            copy="メニュー、空間、コース、予約。必要な情報へ短く移動できる入口を用意しています。"
          />
          <p className="max-w-xl text-sm font-bold leading-8 text-mist lg:justify-self-end">
            トップページでは世界観と主要導線だけを見せ、料金やFAQなどの詳細は下層ページで確認できます。
          </p>
        </div>
        <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {siteConfig.gateways.map((item, index) => (
            <RevealOnScroll key={item.href} className={index % 3 === 1 ? "xl:mt-12" : ""}>
              <Link
                href={item.href}
                className={`dokomi-card group block overflow-hidden ${colors[index % colors.length]}`}
              >
                <div className="image-zoom relative aspect-[4/3] overflow-hidden rounded-t-[30px] border-b-2 border-ink">
                  <Image
                    src={item.image}
                    alt={`${item.title}のイメージ`}
                    fill
                    sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover"
                  />
                  <span className="absolute left-5 top-5 rounded-full border-2 border-ink bg-white px-4 py-2 font-display text-xs font-black uppercase tracking-[0.08em] text-ink">
                    {item.label}
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-2xl font-black tracking-[0] text-ink">{item.title}</h3>
                    <ArrowUpRight
                      className="shrink-0 text-coral transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                      size={22}
                      aria-hidden="true"
                    />
                  </div>
                  <p className="mt-4 text-sm font-bold leading-7 text-mist">{item.copy}</p>
                </div>
              </Link>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
