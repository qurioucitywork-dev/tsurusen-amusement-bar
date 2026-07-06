import Image from "next/image";
import Link from "next/link";
import { CalendarClock, Camera, MessageCircle, Phone } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

export function FinalCTA() {
  return (
    <section className="bg-coral py-16 md:py-24">
      <div className="site-container grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-center">
        <div>
          <p className="diagonal-word text-[clamp(3.2rem,10vw,8rem)] text-white">READY?</p>
          <h2 className="mt-4 max-w-2xl text-3xl font-black leading-tight tracking-[0.04em] text-white md:text-5xl">
            今夜の予定、ここで決めよう。
          </h2>
          <p className="mt-5 max-w-2xl text-sm font-bold leading-8 text-white md:text-base">
            人数、時間、遊びたい内容が決まっていなくても大丈夫。Web予約・LINE予約・電話予約・Instagram DMで気軽にどうぞ。
          </p>
          <div className="mt-7 flex flex-col gap-2 sm:flex-row sm:flex-wrap">
            <Link href="/#reserve" className="button-primary">
              <CalendarClock size={18} aria-hidden="true" />
              WEB予約
            </Link>
            <a href={siteConfig.lineUrl} className="button-secondary">
              <MessageCircle size={18} aria-hidden="true" />
              LINE
            </a>
            <a href={`tel:${siteConfig.phone}`} className="button-secondary">
              <Phone size={18} aria-hidden="true" />
              TEL
            </a>
            <a href={siteConfig.instagramUrl} className="button-secondary">
              <Camera size={18} aria-hidden="true" />
              DM
            </a>
          </div>
        </div>
        <div className="grove-frame relative aspect-[4/3] overflow-hidden">
          <Image
            src={siteConfig.images.nightLounge}
            alt="歌舞伎町 鶴千の店内"
            fill
            sizes="(min-width: 1024px) 40vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
