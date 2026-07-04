import Link from "next/link";
import { Camera, Music2 } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

export function Footer() {
  return (
    <footer className="border-t-2 border-white bg-graphite pb-28 pt-12 md:pb-10">
      <div className="site-container grid gap-8 lg:grid-cols-[1.05fr_1fr_1fr]">
        <div>
          <p className="font-display text-5xl font-black leading-none tracking-[0] text-ink">TSURUSEN</p>
          <p className="mt-2 text-xs font-black tracking-[0.24em] text-cyan">KABUKICHO PLAY BAR</p>
          <p className="body-copy mt-5 max-w-md">{siteConfig.description}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            <a href={siteConfig.instagramUrl} className="button-secondary" aria-label="Instagram">
              <Camera size={16} aria-hidden="true" />
              Instagram
            </a>
            <a href={siteConfig.tiktokUrl} className="button-secondary" aria-label="TikTok">
              <Music2 size={16} aria-hidden="true" />
              TikTok
            </a>
          </div>
        </div>
        <nav className="grid grid-cols-2 gap-2" aria-label="フッターナビゲーション">
          {siteConfig.nav.map((item, index) => (
            <Link
              key={item.href}
              href={item.href}
              className={`border-2 border-white px-3 py-3 text-sm font-black ${
                index % 3 === 0 ? "bg-cyan text-graphite" : index % 3 === 1 ? "bg-coral text-white" : "bg-amber text-graphite"
              }`}
            >
              {item.ja}
            </Link>
          ))}
          <Link href="/faq" className="border-2 border-white bg-graphite px-3 py-3 text-sm font-black text-ink">
            FAQ
          </Link>
          <Link href="/contact" className="border-2 border-white bg-graphite px-3 py-3 text-sm font-black text-ink">
            お問い合わせ
          </Link>
        </nav>
        <div className="grove-panel p-5">
          <p className="eyebrow">SHOP INFO</p>
          <p className="mt-3 text-xl font-black text-ink">{siteConfig.name}</p>
          <div className="mt-4 space-y-2 text-sm font-bold leading-7 text-mist">
            <p>{siteConfig.address}</p>
            <p>{siteConfig.phone}</p>
            <p>{siteConfig.nearestStation}</p>
            <p>定休日：{siteConfig.closed}</p>
          </div>
          <p className="mt-5 font-display text-xs uppercase tracking-[0.16em] text-mist/80">
            © {new Date().getFullYear()} {siteConfig.name}
          </p>
        </div>
      </div>
    </footer>
  );
}
