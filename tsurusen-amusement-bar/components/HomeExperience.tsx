import Image from "next/image";
import Link from "next/link";
import {
  CalendarClock,
  Camera,
  ChevronRight,
  MapPin,
  MessageCircle,
  Phone,
  Sparkles,
  TicketCheck,
} from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import { HomeEffects } from "./HomeEffects";

const heroPhotos = [
  {
    image: siteConfig.images.hero,
    alt: "歌舞伎町 鶴千のバーカウンター",
    label: "BAR LOUNGE",
    className: "home-sticker-main",
    parallax: "-42",
  },
  {
    image: siteConfig.images.darts,
    alt: "鶴千のダーツ設備",
    label: "DARTS",
    className: "home-sticker-darts",
    parallax: "28",
  },
  {
    image: siteConfig.images.cocktails,
    alt: "鶴千のカクテルとフード",
    label: "DRINK",
    className: "home-sticker-drink",
    parallax: "-22",
  },
];

const featureImages = [
  { image: siteConfig.images.lounge, alt: "ラウンジ席", label: "LOUNGE" },
  { image: siteConfig.images.karaoke, alt: "カラオケとモニター席", label: "KARAOKE" },
  { image: siteConfig.images.aquarium, alt: "水槽のある席", label: "MOOD" },
  { image: siteConfig.images.wideFloor, alt: "貸切向けの広い店内", label: "PARTY" },
];

const stats = [
  { label: "AREA", value: "KABUKICHO", text: "西武新宿駅から徒歩3分" },
  { label: "OPEN", value: "19:00", text: "翌朝まで使える夜遊び拠点" },
  { label: "STYLE", value: "4WAYS", text: "ダーツ / カラオケ / バー / 貸切" },
  { label: "RESERVE", value: "WEB", text: "LINE・電話・DMにも対応" },
];

const gallery = [
  { image: siteConfig.images.entrance, alt: "鶴千の入口" },
  { image: siteConfig.images.dartsBoard, alt: "ダーツボード" },
  { image: siteConfig.images.bottleShelf, alt: "ボトル棚" },
  { image: siteConfig.images.food, alt: "フードとドリンク" },
  { image: siteConfig.images.party, alt: "パーティー利用の雰囲気" },
  { image: siteConfig.images.nightLounge, alt: "夜のラウンジ" },
];

function ActionButtons({ compact = false }: { compact?: boolean }) {
  const base = compact ? "grid gap-2 sm:grid-cols-2" : "grid gap-2 sm:grid-cols-2 lg:flex lg:flex-wrap";

  return (
    <div className={base}>
      <Link href="/#reserve" className="button-primary">
        <CalendarClock size={18} aria-hidden="true" />
        Web予約
      </Link>
      <a href={siteConfig.lineUrl} className="button-secondary">
        <MessageCircle size={18} aria-hidden="true" />
        LINE予約
      </a>
      <a href={`tel:${siteConfig.phone}`} className="button-secondary">
        <Phone size={18} aria-hidden="true" />
        電話
      </a>
      <a href={siteConfig.instagramUrl} className="button-ghost">
        <Camera size={18} aria-hidden="true" />
        Instagram
      </a>
    </div>
  );
}

function SectionLabel({ label, title, copy }: { label: string; title: string; copy: string }) {
  return (
    <div className="max-w-3xl">
      <p className="eyebrow">{label}</p>
      <h2 className="mt-4 text-4xl font-black leading-tight text-ink md:text-5xl xl:text-6xl">{title}</h2>
      <p className="body-copy mt-5 max-w-2xl">{copy}</p>
    </div>
  );
}

export function HomeExperience() {
  return (
    <div className="ts-home overflow-hidden">
      <div className="loader-curtain" aria-hidden="true">
        <div className="loader-ticket">
          <Sparkles size={28} />
          <span>NOW OPENING ...</span>
        </div>
      </div>
      <HomeEffects />

      <section className="home-grid-bg relative isolate overflow-hidden pt-[76px]">
        <div className="site-container grid min-h-[calc(100dvh-128px)] gap-8 py-6 md:min-h-[calc(100dvh-116px)] md:py-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center xl:gap-12">
          <div className="relative z-10 order-2 lg:order-1">
            <div className="receipt-chip">
              <span>NO. TSU-2026</span>
              <span>SHINJUKU NIGHT</span>
            </div>
            <p className="eyebrow mt-6">
              Darts & Karaoke Amusement Bar
            </p>
            <h1 className="hero-title mt-4 text-5xl font-black leading-none text-ink md:text-7xl xl:text-8xl">
              TSURUSEN
              <span>歌舞伎町 鶴千</span>
            </h1>
            <p className="body-copy mt-6 max-w-xl">
              ダーツ、カラオケ、バータイム、貸切相談まで。歌舞伎町の夜を一軒で遊び切れる、大人のアミューズメントバーです。
            </p>
            <div className="mt-7">
              <ActionButtons />
            </div>
          </div>

          <div className="hero-collage order-1 lg:order-2">
            {heroPhotos.map((photo) => (
              <figure
                key={photo.label}
                className={`photo-sticker ${photo.className}`}
                data-parallax={photo.parallax}
              >
                <Image
                  src={photo.image}
                  alt={photo.alt}
                  fill
                  priority={photo.className === "home-sticker-main"}
                  sizes={
                    photo.className === "home-sticker-main"
                      ? "(min-width: 1280px) 48vw, (min-width: 768px) 68vw, 92vw"
                      : "(min-width: 1280px) 22vw, (min-width: 768px) 34vw, 45vw"
                  }
                  className="object-cover"
                />
                <figcaption>{photo.label}</figcaption>
              </figure>
            ))}
            <div className="scroll-badge" aria-hidden="true">
              <span>Scroll</span>
              <ChevronRight size={22} />
            </div>
          </div>
        </div>

        <div className="site-container pb-7">
          <div className="ticket-stats">
            {stats.map((item) => (
              <article key={item.label}>
                <p>{item.label}</p>
                <strong>{item.value}</strong>
                <span>{item.text}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="concept" className="section-pad bg-obsidian">
        <div className="site-container grid gap-10 lg:grid-cols-[0.84fr_1.16fr] lg:items-center">
          <div>
            <div>
              <SectionLabel
                label="Concept"
                title="夜の予定を、ひとつの場所で整える。"
                copy="二次会で軽く遊ぶ、デートで会話をつくる、仲間と朝まで盛り上がる。鶴千は、目的が違う人たちが同じテーブルで楽しめるよう、遊び・音・ドリンク・席の距離感を設計しています。"
              />
            </div>
            <div className="mt-7">
              <Link href="/#about" className="line-link">
                鶴千の楽しみ方を見る
                <ChevronRight size={16} aria-hidden="true" />
              </Link>
            </div>
          </div>

          <div className="feature-mosaic">
            {featureImages.map((item, index) => (
              <figure
                key={item.label}
                className="photo-card"
                data-parallax={index % 2 ? "-18" : "18"}
              >
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="(min-width: 1024px) 28vw, (min-width: 768px) 42vw, 100vw"
                  className="object-cover"
                />
                <figcaption>{item.label}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section id="play" className="section-pad bg-smoke">
        <div className="site-container">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionLabel
              label="Play Menu"
              title="席に着いた瞬間、遊び方が選べる。"
              copy="参考サイトのメニュー導線を、鶴千では利用目的別の大きなカードに置き換えました。スマホでは縦に読みやすく、タブレットでは2列、PCでは3列で比較できます。"
            />
            <Link href="/entertainment" className="button-secondary self-start">
              設備を見る
            </Link>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {siteConfig.playItems.map((item) => {
              const Icon = item.icon;
              return (
                <article
                  key={item.id}
                  className="experience-card group"
                >
                  <Link href="/entertainment" aria-label={`${item.title}の詳細を見る`}>
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={item.image}
                        alt={`${item.title}のイメージ`}
                        fill
                        sizes="(min-width: 1280px) 30vw, (min-width: 768px) 50vw, 100vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                      />
                      <span className="card-index">{item.label}</span>
                    </div>
                    <div className="p-5 md:p-6">
                      <Icon size={28} className="text-amber" aria-hidden="true" />
                      <h3 className="mt-4 text-2xl font-black text-ink">{item.title}</h3>
                      <p className="mt-2 font-display text-sm font-bold text-amber">{item.price}</p>
                      <p className="mt-4 text-sm font-bold leading-7 text-mist">{item.description}</p>
                      <div className="mt-5 flex flex-wrap gap-2">
                        {item.tags.map((tag) => (
                          <span key={tag} className="mini-tag">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="plans" className="section-pad bg-obsidian">
        <div className="site-container grid gap-10 lg:grid-cols-[0.76fr_1.24fr]">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionLabel
              label="Price / Party"
              title="通常利用から貸切まで、迷わず相談。"
              copy="料金は初回来店でも把握しやすい3プラン構成。正確な料金・空席・貸切条件は予約時に確認できる導線へ集約しています。"
            />
            <div className="mt-7">
              <ActionButtons compact />
            </div>
          </div>

          <div className="grid gap-4">
            {siteConfig.plans.map((plan, index) => (
              <article
                key={plan.name}
                className="price-ticket"
              >
                <div>
                  <p className="eyebrow">{index === 2 ? "Private" : "Plan"}</p>
                  <h3>{plan.name}</h3>
                  <p>{plan.summary}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {plan.includes.map((item) => (
                      <span key={item} className="mini-tag">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="price-block">
                  <strong>{plan.price}</strong>
                  <span>{plan.unit}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="section-pad bg-graphite">
        <div className="site-container">
          <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
            <SectionLabel
              label="Gallery"
              title="写真で伝わる、夜の空気。"
              copy="参考URLのステッカー密度は、鶴千では店内写真のリズムに変換。SNS投稿や動画サムネイルへ差し替えやすいグリッドにしています。"
            />
            <div className="receipt-note">
              <TicketCheck size={22} aria-hidden="true" />
              <span>Instagram / TikTok へ自然に遷移</span>
            </div>
          </div>

          <div className="gallery-grid mt-10">
            {gallery.map((item, index) => (
              <figure
                key={item.alt}
                className={index === 0 || index === 5 ? "gallery-item gallery-item-wide" : "gallery-item"}
              >
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="(min-width: 1280px) 32vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
              </figure>
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-2 sm:flex-row">
            <a href={siteConfig.instagramUrl} className="button-secondary">
              <Camera size={18} aria-hidden="true" />
              Instagram
            </a>
            <Link href="/events" className="button-ghost">
              イベントを見る
            </Link>
          </div>
        </div>
      </section>

      <section id="access" className="section-pad bg-obsidian">
        <div className="site-container grid gap-8 lg:grid-cols-[1.12fr_0.88fr] lg:items-stretch">
          <div className="map-frame">
            <iframe
              title="歌舞伎町 鶴千 Google Map"
              src={siteConfig.mapEmbedUrl}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="access-ticket">
            <p className="eyebrow">Access</p>
            <h2>新宿・歌舞伎町の夜へ、迷わず到着。</h2>
            <p>{siteConfig.nearestStation}</p>
            <dl>
              <div>
                <dt>住所</dt>
                <dd>{siteConfig.address}</dd>
              </div>
              <div>
                <dt>営業時間</dt>
                <dd>{siteConfig.hours.map((hour) => `${hour.day} ${hour.time}`).join(" / ")}</dd>
              </div>
              <div>
                <dt>利用シーン</dt>
                <dd>二次会、デート、観光、団体、貸切パーティー</dd>
              </div>
            </dl>
            <div className="mt-6 grid gap-2 sm:grid-cols-2">
              <a href={siteConfig.mapUrl} className="button-secondary">
                <MapPin size={18} aria-hidden="true" />
                MAP
              </a>
              <Link href="/#reserve" className="button-primary">
                空席確認
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-coral">
        <div className="site-container grid gap-8 lg:grid-cols-[0.86fr_1.14fr] lg:items-center">
          <div>
            <p className="eyebrow text-graphite">CTA</p>
            <h2 className="text-4xl font-black leading-tight text-graphite md:text-5xl xl:text-6xl">
              人数だけでも、今夜の相談は始められる。
            </h2>
            <p className="mt-5 max-w-2xl text-base font-bold leading-8 text-graphite">
              遊びたい内容が未定でも大丈夫です。Web予約、LINE、電話、Instagram DMから、来店時間と人数をお知らせください。
            </p>
            <div className="mt-7">
              <ActionButtons />
            </div>
          </div>
          <div className="cta-photo">
            <Image
              src={siteConfig.images.cta}
              alt="鶴千の予約向けラウンジ"
              fill
              sizes="(min-width: 1024px) 42vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
