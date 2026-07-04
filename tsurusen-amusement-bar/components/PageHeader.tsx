import Image from "next/image";
import { siteConfig } from "@/data/siteConfig";

export function PageHeader({
  label,
  title,
  copy,
  image = siteConfig.images.lounge,
}: {
  label: string;
  title: string;
  copy: string;
  image?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-graphite pb-14 pt-28 md:pb-20 md:pt-32">
      <div className="absolute right-[-12vw] top-16 hidden rotate-[-9deg] font-display text-[12vw] font-black leading-none text-coral md:block">
        {label}
      </div>
      <div className="site-container relative z-10 grid gap-8 lg:grid-cols-[0.9fr_0.62fr] lg:items-end">
        <div>
          <p className="eyebrow">{label}</p>
          <h1 className="lux-title mt-4 max-w-4xl break-keep text-[clamp(2.25rem,5.1vw,4.9rem)] text-ink">
            {title}
          </h1>
          <p className="body-copy mt-5 max-w-2xl">{copy}</p>
        </div>
        <div className="grove-frame overflow-hidden">
          <Image
            src={image}
            alt={`${siteConfig.name}の${title}イメージ`}
            width={900}
            height={680}
            sizes="(min-width: 1024px) 38vw, 100vw"
            priority
            className="aspect-[4/3] w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
