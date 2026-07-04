import Image from "next/image";
import Link from "next/link";
import { CalendarClock, MapPin, Phone } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

export function Hero() {
  return (
    <section className="relative min-h-dvh overflow-hidden pt-[72px]">
      <Image
        src={siteConfig.images.hero}
        alt="ダーツとバーカウンターがネオンに照らされた店内"
        fill
        priority
        sizes="100vw"
        className="scale-[1.08] object-cover object-center opacity-78 animate-[hero-image_1700ms_var(--ease-signature)_forwards]"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(16,17,22,0.96)_0%,rgba(16,17,22,0.72)_42%,rgba(16,17,22,0.28)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-obsidian to-transparent" />
      <div className="site-container relative z-10 grid min-h-[calc(100dvh-72px)] content-center py-16">
        <div className="max-w-5xl">
          <p className="hero-reveal font-display text-xs font-extrabold uppercase tracking-[0.24em] text-cyan">
            Darts / Karaoke / Bar in Tokyo 23 wards
          </p>
          <h1 className="hero-title hero-reveal hero-reveal-delay-1 mt-7 max-w-4xl text-ink">
            PLAY THE NIGHT,
            <span className="block text-transparent [-webkit-text-stroke:1px_rgba(244,241,234,0.72)]">
              STAY IN STYLE.
            </span>
          </h1>
          <p className="hero-reveal hero-reveal-delay-2 mt-7 max-w-2xl text-base leading-9 text-mist md:text-lg">
            {siteConfig.conceptLine}
            <br />
            東京23区で、ダーツもカラオケも一杯も、ひとつの夜に。
          </p>
          <div className="hero-reveal hero-reveal-delay-2 mt-9 flex flex-col gap-3 sm:flex-row">
            <Link href="/reservation" className="button-primary">
              <CalendarClock size={18} aria-hidden="true" />
              {siteConfig.ctas.primary}
            </Link>
            <a href={`tel:${siteConfig.phone}`} className="button-secondary">
              <Phone size={18} aria-hidden="true" />
              {siteConfig.ctas.secondary}
            </a>
            <Link href="/access" className="button-ghost">
              <MapPin size={18} aria-hidden="true" />
              {siteConfig.ctas.map}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
