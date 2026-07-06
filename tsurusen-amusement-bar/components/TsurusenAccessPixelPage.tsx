import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import { TsurusenTopHeader } from "./TsurusenTopHeader";
import {
  CalendarDays,
  Car,
  ChevronRight,
  ChevronUp,
  Clock,
  Footprints,
  HelpCircle,
  MapPin,
  MessageCircle,
  Phone,
  Train,
} from "lucide-react";

const assetBase = "/assets/tsurusen-access/png";
const cleanBase = "/assets/tsurusen-access/dom-clean";

const quickInfo = [
  { icon: Train, label: "最寄駅", title: "新宿駅 東口", value: "徒歩5分", id: "station" },
  { icon: Footprints, label: "アクセス", title: "西武新宿駅", value: "徒歩3分", id: "walk" },
  { icon: Clock, label: "営業時間", title: "18:00 - 5:00", value: "(L.O. 4:30)", id: "hours" },
  { icon: CalendarDays, label: "定休日", title: "年中無休", value: "", id: "holiday" },
];

const routeSteps = [
  { no: "1", title: "新宿駅 東口", body: "東口を出て広場へ進みます。", time: "徒歩5分", image: "route-01.png" },
  { no: "2", title: "歌舞伎町一番街", body: "アーチをくぐって直進します。", time: "徒歩3分", image: "route-02.png" },
  { no: "3", title: "ビックレモンビル", body: "右手に見えるビルが目印。", time: "徒歩1分", image: "route-03.png" },
  { no: "4", title: "地下2階 鶴千", body: "階段またはエレベーターでB2Fへ。", time: "到着！", image: "route-04.png" },
];

const photoNav = [
  ["新宿駅 東口", "東口改札を出ます"],
  ["横断歩道を渡る", "信号を渡って直進"],
  ["歌舞伎町の街並", "大きな看板が目印"],
  ["歌舞伎町一番街", "アーチをくぐります"],
  ["ビックレモンビル", "右手のビルへ"],
  ["ビル入口", "こちらの入口から"],
  ["地下2階へ", "階段またはEVでB2Fへ"],
  ["鶴千 店舗入口", "到着です！"],
].map(([title, body], index) => ({ title, body, image: `photo-${String(index + 1).padStart(2, "0")}.png` }));

const transportRows = [
  { icon: Train, label: "JR", value: "新宿駅 東口 徒歩5分" },
  { icon: Train, label: "西武新宿線", value: "西武新宿駅 徒歩3分" },
  { icon: Train, label: "地下鉄", value: "新宿三丁目駅 徒歩7分" },
  { icon: Car, label: "タクシー", value: "新宿駅から約700円（約5分）" },
  { icon: Footprints, label: "徒歩", value: "新宿駅から約5分" },
  { icon: MapPin, label: "駐車場情報", value: "近隣の駐車場は公式サイトをご確認ください" },
];

const nearbySpots = [
  ["歌舞伎町一番街", "徒歩2分"],
  ["TOHOシネマズ新宿", "徒歩3分"],
  ["ゴジラヘッド", "徒歩4分"],
  ["ドン・キホーテ新宿店", "徒歩5分"],
  ["新宿プリンスホテル", "徒歩6分"],
  ["思い出横丁", "徒歩7分"],
].map(([title, time], index) => ({ title, time, image: `nearby-${String(index + 1).padStart(2, "0")}.png` }));

const faqItems = [
  ["道に迷った場合は？", "お電話またはLINEで現在地をお知らせください。スタッフが分かりやすくご案内します。"],
  ["喫煙席はありますか？", "店内状況によりご案内できる場合があります。ご予約時にお問い合わせください。"],
  ["タクシーの料金は？", "新宿駅周辺からは目安として約700円、所要時間は約5分です。"],
  ["駐車場はありますか？", "専用駐車場はありません。近隣のコインパーキングをご利用ください。"],
  ["団体は何名まで？", "最大100名様規模まで対応できます。貸切は事前にご相談ください。"],
  ["外国人でも利用できますか？", "英語・中国語・韓国語メニューに対応しています。海外ゲストも歓迎です。"],
];

function SectionTitle({ label, sub }: { label: string; sub?: string }) {
  return (
    <header className="access-section-title">
      <h2>{label}</h2>
      {sub ? <p>{sub}</p> : null}
    </header>
  );
}

function GoldButton({
  href,
  children,
  tone = "gold",
}: {
  href: string;
  children: ReactNode;
  tone?: "gold" | "blue" | "green" | "purple";
}) {
  return (
    <a className={`access-button access-button--${tone}`} href={href}>
      {children}
      <ChevronRight aria-hidden="true" />
    </a>
  );
}

function InfoRow({ icon: Icon, label, value }: { icon: LucideIcon; label: string; value: string }) {
  return (
    <div className="access-info-row">
      <Icon aria-hidden="true" />
      <strong>{label}</strong>
      <span>{value}</span>
    </div>
  );
}

function MiniMap({ compact = false }: { compact?: boolean }) {
  return (
    <div className={compact ? "access-mini-map access-mini-map--compact" : "access-mini-map"}>
      <div className="map-road map-road--main" />
      <div className="map-road map-road--cross" />
      <div className="map-road map-road--curve" />
      <span className="map-label map-label--station">新宿駅</span>
      <span className="map-label map-label--gate">東口</span>
      <span className="map-label map-label--cinema">TOHOシネマズ</span>
      <span className="map-label map-label--street">歌舞伎町一番街</span>
      <span className="map-label map-label--store">
        <MapPin aria-hidden="true" />
        TSURUSEN
        <small>B2F</small>
      </span>
    </div>
  );
}

export function TsurusenAccessPixelPage() {
  return (
    <div className="tsurusen-access-dom-page" id="top">
      <style>{accessCss}</style>

      <TsurusenTopHeader active="ACCESS" />

      <section className="access-hero">
        <div className="access-hero-copy">
          <h1>
            FIND YOUR WAY
            <span>TO TSURUCHI</span>
          </h1>
          <p>
            Located in the Heart
            <br />
            of Kabukicho.
          </p>
          <span className="access-scroll">SCROLL</span>
        </div>
        <figure className="access-hero-visual">
          <Image
            src={`${assetBase}/hero-building-sign.png`}
            alt="TSURUSEN building signage in Kabukicho"
            width={1120}
            height={720}
            priority
          />
        </figure>
      </section>

      <main className="access-main">
        <section className="access-location-grid" aria-labelledby="location-overview">
          <article className="access-card access-location-card">
            <SectionTitle label="LOCATION OVERVIEW" sub="ダーツ＆カラオケ アミューズメントバー 鶴千" />
            <h3 id="location-overview">TSURUSEN</h3>
            <div className="access-info-list">
              <InfoRow icon={MapPin} label="住所" value="〒160-0021 東京都新宿区歌舞伎町1-2-3 レモンビル B2F" />
              <InfoRow icon={Clock} label="営業時間" value="18:00 - 5:00 / 年中無休" />
              <InfoRow icon={Phone} label="電話番号" value="03-1234-5678" />
              <InfoRow icon={Train} label="最寄駅" value="JR新宿駅 東口 徒歩5分 / 西武新宿駅 徒歩3分" />
            </div>
            <GoldButton href="https://maps.google.com/?q=Kabukicho+Shinjuku">Google Mapsで開く</GoldButton>
          </article>

          <article className="access-card access-map-card" aria-label="TSURUSEN map">
            <MiniMap />
          </article>
        </section>

        <section className="access-quick-grid" aria-label="Quick information">
          {quickInfo.map((item) => {
            const Icon = item.icon;
            return (
              <article className="access-card access-quick-card" id={item.id} key={item.label}>
                <Icon aria-hidden="true" />
                <div>
                  <p>{item.label}</p>
                  <h3>{item.title}</h3>
                  {item.value ? <span>{item.value}</span> : null}
                </div>
              </article>
            );
          })}
        </section>

        <section className="access-panel" id="route" aria-labelledby="route-title">
          <SectionTitle label="ROUTE GUIDE" sub="新宿駅から店舗までの道順" />
          <div className="access-route-grid">
            {routeSteps.map((item) => (
              <article className="access-card access-route-card" key={item.no}>
                <div className="route-head">
                  <span>{item.no}</span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.body}</p>
                  </div>
                </div>
                <Image
                  src={`${cleanBase}/${item.image}`}
                  alt={`${item.title} route view`}
                  width={360}
                  height={180}
                  loading="eager"
                />
                <strong>{item.time}</strong>
              </article>
            ))}
          </div>
        </section>

        <section className="access-panel" aria-labelledby="photo-title">
          <SectionTitle label="PHOTO NAVIGATION" sub="写真で見る道案内" />
          <div className="access-photo-grid">
            {photoNav.map((item) => (
              <article className="access-photo-card" key={item.title}>
                <Image src={`${cleanBase}/${item.image}`} alt={item.title} width={240} height={130} loading="eager" />
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="access-map-transport">
          <article className="access-card">
            <SectionTitle label="ILLUSTRATED MAP" sub="現在地と店舗位置" />
            <MiniMap compact />
          </article>
          <article className="access-card">
            <SectionTitle label="TRANSPORTATION" sub="交通手段" />
            <div className="transport-list">
              {transportRows.map((row) => {
                const Icon = row.icon;
                return (
                  <div className="transport-row" key={row.label}>
                    <Icon aria-hidden="true" />
                    <strong>{row.label}</strong>
                    <span>{row.value}</span>
                  </div>
                );
              })}
            </div>
          </article>
        </section>

        <section className="access-panel" aria-labelledby="nearby-title">
          <SectionTitle label="NEARBY SPOTS" sub="近隣スポット" />
          <div className="access-nearby-grid">
            {nearbySpots.map((spot) => (
              <article className="access-nearby-card" key={spot.title}>
                <Image src={`${cleanBase}/${spot.image}`} alt={spot.title} width={260} height={130} loading="eager" />
                <h3>{spot.title}</h3>
                <p>{spot.time}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="access-support-grid">
          <article className="access-card access-international-card">
            <SectionTitle label="FOR INTERNATIONAL GUESTS" sub="海外ゲスト向け案内" />
            <div className="international-content">
              <Image
                src={`${cleanBase}/international.png`}
                alt="International guests in Kabukicho"
                width={260}
                height={180}
                loading="eager"
              />
              <div>
                <h3>We welcome guests from around the world.</h3>
                <p>英語・中国語・韓国語メニュー対応。スタッフが丁寧にご案内します。</p>
              </div>
            </div>
            <div className="language-tags">
              <span>ENGLISH</span>
              <span>中文</span>
              <span>한국어</span>
            </div>
            <div className="support-actions">
              <GoldButton href="https://maps.google.com/?q=Kabukicho+Shinjuku">Google Maps</GoldButton>
              <GoldButton href="/access#translation">Translation</GoldButton>
            </div>
          </article>

          <article className="access-card access-parking-card" id="parking">
            <SectionTitle label="PARKING" sub="近隣駐車場" />
            <div className="parking-list">
              <div>
                <Image src={`${cleanBase}/parking-01.png`} alt="Nearby parking one" width={180} height={90} loading="eager" />
                <p>タイムズ歌舞伎町第5</p>
                <span>徒歩3分 / 20分 300円</span>
              </div>
              <div>
                <Image src={`${cleanBase}/parking-02.png`} alt="Nearby parking two" width={180} height={90} loading="eager" />
                <p>歌舞伎町パーキング</p>
                <span>徒歩5分 / 30分 400円</span>
              </div>
            </div>
            <GoldButton href="/access#parking">もっと見る</GoldButton>
          </article>

          <article className="access-card access-faq-card">
            <SectionTitle label="FAQ" sub="よくあるご質問" />
            <div className="faq-list">
              {faqItems.map(([summary, answer]) => (
                <details key={summary}>
                  <summary>
                    <span>{summary}</span>
                    <HelpCircle aria-hidden="true" />
                  </summary>
                  <p>{answer}</p>
                </details>
              ))}
            </div>
          </article>
        </section>

        <section className="access-final-cta" id="street-view">
          <article className="access-card street-card">
            <SectionTitle label="STREET VIEW" sub="店舗周辺の雰囲気" />
            <Image
              src={`${cleanBase}/street-view.png`}
              alt="Street view around TSURUSEN"
              width={650}
              height={280}
              loading="eager"
            />
          </article>
          <article className="access-night-card">
            <Image
              src={`${cleanBase}/final-building.png`}
              alt="TSURUSEN building at night"
              width={650}
              height={280}
              loading="eager"
            />
            <div>
              <h2>YOUR NIGHT STARTS HERE</h2>
              <p>最高の夜を、ここから。</p>
              <div className="cta-buttons">
                <GoldButton href="/#reserve">WEB予約</GoldButton>
                <GoldButton href="https://line.me/R/ti/p/@tsurusen" tone="green">
                  LINE予約
                </GoldButton>
                <GoldButton href="tel:03-1234-5678" tone="purple">
                  電話する
                </GoldButton>
              </div>
            </div>
          </article>
        </section>
      </main>

      <nav className="access-fixed-cta" aria-label="Quick access actions">
        <a href="https://maps.google.com/?q=Kabukicho+Shinjuku">
          <MapPin aria-hidden="true" />
          Google Maps
        </a>
        <Link href="/#reserve">
          <CalendarDays aria-hidden="true" />
          WEB予約
        </Link>
        <a href="https://line.me/R/ti/p/@tsurusen">
          <MessageCircle aria-hidden="true" />
          LINE予約
        </a>
        <a href="tel:03-1234-5678">
          <Phone aria-hidden="true" />
          電話する
        </a>
        <a href="#top">
          <ChevronUp aria-hidden="true" />
          TOP
        </a>
      </nav>
    </div>
  );
}

const accessCss = `
body:has(.tsurusen-access-dom-page) > header,
body:has(.tsurusen-access-dom-page) > footer,
body:has(.tsurusen-access-dom-page) > .mobile-sticky-cta,
body:has(.tsurusen-access-dom-page) > .skip-link {
  display: none;
}

body:has(.tsurusen-access-dom-page) {
  min-width: 0;
}

body:has(.tsurusen-access-dom-page) main {
  padding-bottom: 0;
  min-width: 0;
}

.tsurusen-access-dom-page,
.tsurusen-access-dom-page * {
  box-sizing: border-box;
}

.tsurusen-access-dom-page {
  --gold: #d8b15a;
  --gold-soft: #f2c94c;
  --border: rgba(212, 176, 83, 0.55);
  --panel: #0b0b0b;
  --paper: #f8efe2;
  --muted: rgba(248, 239, 226, 0.74);
  width: 100%;
  min-height: 100svh;
  background:
    radial-gradient(circle at 12% 8%, rgba(212, 176, 83, 0.11), transparent 28rem),
    radial-gradient(circle at 80% 22%, rgba(15, 105, 180, 0.14), transparent 30rem),
    #050505;
  color: var(--paper);
  font-family: "Noto Sans JP", "Yu Gothic", "Yu Gothic UI", "Meiryo", system-ui, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: geometricPrecision;
  font-feature-settings: "kern";
}

.access-header {
  display: grid;
  grid-template-columns: minmax(190px, 250px) 1fr auto;
  gap: clamp(16px, 2vw, 32px);
  align-items: center;
  width: min(calc(100% - clamp(24px, 4vw, 64px)), 1800px);
  margin: 0 auto;
  padding: clamp(18px, 2.6vw, 34px) clamp(16px, 2.8vw, 42px);
  border-bottom: 1px solid rgba(212, 176, 83, 0.26);
  background:
    linear-gradient(90deg, rgba(5, 5, 5, 0.98), rgba(12, 12, 12, 0.9)),
    radial-gradient(circle at 50% 0%, rgba(216, 177, 90, 0.1), transparent 36rem);
}

.access-logo {
  display: inline-flex;
  align-items: center;
  gap: 14px;
  color: var(--gold);
  text-decoration: none;
  min-width: 0;
}

.access-logo img {
  width: clamp(42px, 4.4vw, 64px);
  height: auto;
  object-fit: contain;
}

.access-logo span {
  display: grid;
  gap: 3px;
  font-family: var(--font-oswald), "Oswald", sans-serif;
  font-size: clamp(24px, 2.2vw, 40px);
  font-weight: 800;
  letter-spacing: 0.12em;
  line-height: 1;
}

.access-logo small {
  font-size: clamp(8px, 0.78vw, 12px);
  letter-spacing: 0.24em;
}

.access-nav {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: clamp(12px, 1.4vw, 24px);
}

.access-nav a,
.access-reserve {
  color: var(--paper);
  font-family: var(--font-oswald), "Oswald", sans-serif;
  font-size: clamp(12px, 0.78vw, 15px);
  font-weight: 900;
  letter-spacing: 0.08em;
  text-decoration: none;
  white-space: nowrap;
}

.access-nav a.active {
  color: var(--gold-soft);
  text-shadow: 0 0 18px rgba(242, 201, 76, 0.45);
  border-bottom: 2px solid var(--gold-soft);
  padding-bottom: 8px;
}

.access-reserve {
  display: inline-flex;
  min-height: 48px;
  align-items: center;
  justify-content: center;
  padding: 0 24px;
  border: 1px solid var(--border);
  border-radius: 10px;
  background: rgba(5, 5, 5, 0.6);
}

.access-hero {
  display: grid;
  grid-template-columns: minmax(0, 1.06fr) minmax(320px, 1fr);
  align-items: center;
  gap: clamp(28px, 4vw, 72px);
  width: min(calc(100% - clamp(24px, 4vw, 64px)), 1800px);
  min-height: clamp(520px, 72svh, 760px);
  margin: 0 auto;
  padding: clamp(80px, 8vh, 140px) clamp(20px, 3vw, 56px);
  background:
    linear-gradient(90deg, rgba(5, 5, 5, 0.96) 0%, rgba(5, 5, 5, 0.78) 38%, rgba(5, 5, 5, 0.38) 100%),
    radial-gradient(circle at 72% 40%, rgba(212, 176, 83, 0.12), transparent 30rem);
}

.access-hero-copy h1 {
  margin: 0;
  color: #fffaf2;
  font-family: "Playfair Display", "Noto Serif JP", serif;
  font-size: clamp(46px, 4.9vw, 120px);
  font-weight: 500;
  letter-spacing: 0.02em;
  line-height: 1.05;
}

.access-hero-copy,
.access-hero-visual {
  min-width: 0;
}

.access-hero-copy h1 span {
  display: block;
  color: var(--gold);
}

.access-hero-copy p {
  margin: clamp(24px, 3vw, 44px) 0 0;
  color: var(--gold);
  font-family: "Playfair Display", "Noto Serif JP", serif;
  font-size: clamp(24px, 2.6vw, 44px);
  line-height: 1.28;
}

.access-scroll {
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  margin-top: clamp(32px, 4vw, 54px);
  color: var(--paper);
  font-family: var(--font-oswald), "Oswald", sans-serif;
  font-size: 12px;
  font-weight: 900;
  letter-spacing: 0.16em;
}

.access-scroll::after {
  content: "";
  width: 16px;
  height: 34px;
  border: 2px solid var(--gold);
  border-radius: 999px;
}

.access-hero-visual {
  margin: 0;
}

.access-hero-visual img {
  display: block;
  width: 100%;
  min-height: clamp(320px, 48vh, 560px);
  object-fit: cover;
  object-position: center;
  border: 1px solid rgba(212, 176, 83, 0.36);
  box-shadow: 0 0 48px rgba(0, 0, 0, 0.45);
}

.access-main {
  display: flex;
  flex-direction: column;
  gap: clamp(32px, 4vw, 56px);
  width: min(calc(100% - clamp(24px, 6vw, 96px)), 1500px);
  margin: 0 auto;
  padding: clamp(48px, 6vh, 96px) 0;
}

.access-card,
.access-panel {
  border: 1px solid var(--border);
  border-radius: 18px;
  background:
    radial-gradient(circle at 15% 10%, rgba(212, 176, 83, 0.08), transparent 18rem),
    linear-gradient(180deg, rgba(15, 15, 15, 0.96), rgba(7, 7, 7, 0.98));
  box-shadow: inset 0 0 28px rgba(212, 176, 83, 0.035);
}

.access-card {
  padding: clamp(22px, 2.4vw, 34px);
}

.access-panel {
  padding: clamp(20px, 2.4vw, 34px);
}

.access-section-title {
  display: grid;
  gap: 6px;
  margin-bottom: clamp(18px, 2vw, 28px);
}

.access-section-title h2 {
  margin: 0;
  color: var(--gold);
  font-family: var(--font-bebas), "Bebas Neue", var(--font-oswald), sans-serif;
  font-size: clamp(28px, 3vw, 50px);
  font-weight: 900;
  letter-spacing: 0.08em;
  line-height: 1;
}

.access-section-title p {
  margin: 0;
  color: var(--muted);
  font-size: clamp(14px, 1.1vw, 18px);
  font-weight: 700;
  line-height: 1.6;
}

.access-location-grid {
  display: grid;
  grid-template-columns: 0.85fr 1.6fr;
  gap: 32px;
  align-items: stretch;
}

.access-location-card h3 {
  margin: 0 0 clamp(20px, 2vw, 30px);
  color: #fffaf2;
  font-family: "Playfair Display", "Noto Serif JP", serif;
  font-size: clamp(42px, 4vw, 68px);
  font-weight: 500;
  line-height: 1;
}

.access-info-list {
  display: grid;
  gap: 18px;
  margin-bottom: 28px;
}

.access-info-row {
  display: grid;
  grid-template-columns: 28px auto 1fr;
  gap: 14px;
  align-items: start;
  color: var(--paper);
  font-size: clamp(14px, 1vw, 17px);
  line-height: 1.65;
}

.access-info-row svg {
  width: 22px;
  height: 22px;
  color: var(--gold-soft);
}

.access-info-row strong {
  color: var(--gold);
  white-space: nowrap;
}

.access-button {
  display: inline-flex;
  min-height: 52px;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 0 22px;
  border: 1px solid rgba(212, 176, 83, 0.78);
  border-radius: 12px;
  color: var(--paper);
  background: rgba(5, 5, 5, 0.62);
  font-weight: 900;
  text-decoration: none;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.access-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 0 26px rgba(212, 176, 83, 0.34);
}

.access-button--green {
  border-color: rgba(30, 210, 80, 0.78);
}

.access-button--blue {
  border-color: rgba(52, 145, 255, 0.78);
}

.access-button--purple {
  border-color: rgba(229, 73, 210, 0.78);
}

.access-map-card {
  min-height: clamp(360px, 42vh, 560px);
  padding: 0;
}

.access-mini-map {
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(6, 1fr);
  gap: 8px;
  min-height: clamp(360px, 42vh, 560px);
  padding: clamp(20px, 2.2vw, 34px);
  border-radius: 18px;
  background:
    linear-gradient(33deg, transparent 46%, rgba(212, 176, 83, 0.28) 47%, rgba(212, 176, 83, 0.28) 49%, transparent 50%),
    linear-gradient(120deg, transparent 44%, rgba(255, 255, 255, 0.12) 45%, rgba(255, 255, 255, 0.12) 46%, transparent 47%),
    repeating-linear-gradient(0deg, rgba(255, 255, 255, 0.06) 0 1px, transparent 1px 46px),
    repeating-linear-gradient(90deg, rgba(255, 255, 255, 0.05) 0 1px, transparent 1px 52px),
    #101317;
}

.access-mini-map--compact {
  min-height: 320px;
}

.map-road {
  min-height: 8px;
  border-radius: 999px;
  background: rgba(212, 176, 83, 0.45);
}

.map-road--main {
  grid-column: 2 / 8;
  grid-row: 4;
}

.map-road--cross {
  grid-column: 4;
  grid-row: 1 / 7;
}

.map-road--curve {
  grid-column: 1 / 5;
  grid-row: 2;
}

.map-label {
  display: inline-flex;
  min-height: 42px;
  align-items: center;
  justify-content: center;
  padding: 8px 14px;
  border: 1px solid rgba(212, 176, 83, 0.55);
  border-radius: 10px;
  background: rgba(5, 5, 5, 0.78);
  color: var(--paper);
  font-size: clamp(13px, 1vw, 16px);
  font-weight: 800;
  line-height: 1.25;
  text-align: center;
}

.map-label--station {
  grid-column: 1 / 3;
  grid-row: 5;
  color: var(--gold-soft);
}

.map-label--gate {
  grid-column: 2 / 3;
  grid-row: 4;
}

.map-label--cinema {
  grid-column: 2 / 4;
  grid-row: 2;
}

.map-label--street {
  grid-column: 4 / 7;
  grid-row: 3;
  color: var(--gold-soft);
}

.map-label--store {
  grid-column: 5 / 8;
  grid-row: 4 / 6;
  display: grid;
  gap: 4px;
  color: var(--gold-soft);
  font-size: clamp(18px, 1.7vw, 28px);
}

.map-label--store svg {
  margin: 0 auto;
}

.map-label--store small {
  color: var(--paper);
  font-size: 0.56em;
}

.access-quick-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 20px;
}

.access-quick-card {
  display: flex;
  min-height: 120px;
  align-items: center;
  gap: 20px;
}

.access-quick-card svg {
  width: 38px;
  height: 38px;
  color: var(--gold-soft);
  flex: 0 0 auto;
}

.access-quick-card p,
.access-quick-card h3,
.access-quick-card span {
  margin: 0;
}

.access-quick-card p {
  color: var(--gold);
  font-weight: 900;
}

.access-quick-card h3 {
  margin-top: 4px;
  color: var(--paper);
  font-size: clamp(18px, 1.4vw, 24px);
}

.access-quick-card span {
  display: block;
  margin-top: 4px;
  color: var(--paper);
  font-size: clamp(15px, 1.1vw, 18px);
}

.access-route-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 22px;
}

.access-route-card {
  display: grid;
  gap: 16px;
  padding: clamp(16px, 1.6vw, 24px);
}

.route-head {
  display: grid;
  grid-template-columns: 44px 1fr;
  gap: 14px;
  align-items: start;
}

.route-head > span {
  display: inline-grid;
  width: 44px;
  height: 44px;
  place-items: center;
  border: 1px solid var(--gold);
  border-radius: 999px;
  color: var(--gold-soft);
  font-family: var(--font-oswald), sans-serif;
  font-size: 22px;
  font-weight: 900;
}

.access-route-card h3,
.access-route-card p,
.access-route-card strong {
  margin: 0;
}

.access-route-card h3 {
  font-size: clamp(18px, 1.3vw, 24px);
}

.access-route-card p {
  margin-top: 5px;
  color: var(--muted);
  font-size: clamp(13px, 0.98vw, 16px);
  line-height: 1.65;
}

.access-route-card img,
.access-photo-card img,
.access-nearby-card img,
.street-card img,
.access-night-card img {
  display: block;
  width: 100%;
  object-fit: cover;
  object-position: center;
  border-radius: 12px;
}

.access-route-card img {
  aspect-ratio: 16 / 8.5;
}

.access-route-card strong {
  color: var(--paper);
  font-size: 18px;
  text-align: center;
}

.access-photo-grid {
  display: grid;
  grid-template-columns: repeat(8, minmax(0, 1fr));
  gap: 14px;
}

.access-photo-card,
.access-nearby-card {
  display: grid;
  gap: 10px;
  padding: 12px;
  border: 1px solid rgba(212, 176, 83, 0.42);
  border-radius: 12px;
  background: rgba(8, 8, 8, 0.86);
}

.access-photo-card img {
  aspect-ratio: 4 / 2.3;
}

.access-photo-card h3,
.access-photo-card p,
.access-nearby-card h3,
.access-nearby-card p {
  margin: 0;
}

.access-photo-card h3,
.access-nearby-card h3 {
  color: var(--paper);
  font-size: clamp(13px, 0.95vw, 16px);
  line-height: 1.35;
}

.access-photo-card p,
.access-nearby-card p {
  color: var(--muted);
  font-size: clamp(12px, 0.88vw, 14px);
  line-height: 1.55;
}

.access-map-transport {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 28px;
}

.transport-list {
  display: grid;
  gap: 14px;
}

.transport-row {
  display: grid;
  grid-template-columns: 28px minmax(86px, 0.42fr) 1fr;
  gap: 14px;
  align-items: center;
  padding-bottom: 13px;
  border-bottom: 1px solid rgba(212, 176, 83, 0.24);
}

.transport-row svg {
  color: var(--gold-soft);
}

.transport-row strong {
  color: var(--gold);
}

.transport-row span {
  line-height: 1.55;
}

.access-nearby-grid {
  display: grid;
  grid-template-columns: repeat(6, minmax(0, 1fr));
  gap: 16px;
}

.access-nearby-card img {
  aspect-ratio: 16 / 8;
}

.access-support-grid {
  display: grid;
  grid-template-columns: 1.05fr 0.95fr 1fr;
  gap: 24px;
}

.international-content {
  display: grid;
  grid-template-columns: 120px 1fr;
  gap: 16px;
  align-items: center;
}

.international-content img,
.parking-list img {
  display: block;
  width: 100%;
  border-radius: 12px;
  object-fit: cover;
}

.international-content h3,
.international-content p {
  margin: 0;
}

.international-content h3 {
  color: var(--paper);
  font-size: clamp(20px, 1.6vw, 28px);
  line-height: 1.3;
}

.international-content p {
  margin-top: 12px;
  color: var(--muted);
  font-size: clamp(14px, 1vw, 16px);
  line-height: 1.7;
}

.language-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 18px;
}

.language-tags span {
  padding: 6px 12px;
  border: 1px solid rgba(212, 176, 83, 0.5);
  border-radius: 999px;
  color: var(--gold-soft);
  font-weight: 900;
}

.support-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 20px;
}

.parking-list {
  display: grid;
  gap: 16px;
  margin-bottom: 20px;
}

.parking-list div {
  display: grid;
  grid-template-columns: 120px 1fr;
  gap: 14px;
  align-items: center;
}

.parking-list p,
.parking-list span {
  margin: 0;
  grid-column: 2;
}

.parking-list img {
  grid-row: span 2;
  aspect-ratio: 16 / 7;
}

.parking-list p {
  color: var(--paper);
  font-weight: 900;
}

.parking-list span {
  color: var(--muted);
  line-height: 1.6;
}

.faq-list {
  display: grid;
  gap: 10px;
}

.faq-list details {
  border: 1px solid rgba(212, 176, 83, 0.44);
  border-radius: 10px;
  background: rgba(5, 5, 5, 0.44);
}

.faq-list summary {
  display: flex;
  min-height: 54px;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 0 16px;
  color: var(--paper);
  cursor: pointer;
  font-weight: 800;
  list-style: none;
}

.faq-list summary::-webkit-details-marker {
  display: none;
}

.faq-list summary svg {
  color: var(--gold-soft);
  flex: 0 0 auto;
}

.faq-list details p {
  margin: 0;
  padding: 0 16px 16px;
  color: var(--muted);
  font-size: 14px;
  line-height: 1.75;
}

.access-final-cta {
  display: grid;
  grid-template-columns: 0.95fr 1.25fr;
  gap: 28px;
  align-items: stretch;
  height: auto;
  max-height: none;
  padding-bottom: clamp(36px, 5vw, 88px);
}

.street-card img {
  aspect-ratio: 16 / 5.4;
}

.access-night-card {
  display: grid;
  grid-template-columns: 0.9fr 1fr;
  gap: 26px;
  align-items: center;
  padding: clamp(22px, 2.4vw, 34px);
  border: 1px solid var(--border);
  border-radius: 18px;
  background:
    linear-gradient(90deg, rgba(5, 5, 5, 0.9), rgba(5, 5, 5, 0.72)),
    #0b0b0b;
}

.access-night-card img {
  aspect-ratio: 16 / 9;
}

.access-night-card h2 {
  margin: 0;
  color: #fffaf2;
  font-family: "Playfair Display", "Noto Serif JP", serif;
  font-size: clamp(42px, 4.3vw, 84px);
  font-weight: 500;
  line-height: 0.96;
}

.access-night-card p {
  margin: 18px 0 0;
  color: var(--gold);
  font-size: clamp(17px, 1.3vw, 24px);
  font-weight: 800;
}

.cta-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  margin-top: 26px;
}

.access-fixed-cta {
  display: grid;
  gap: 10px;
  position: fixed;
  right: clamp(12px, 2vw, 32px);
  bottom: 28px;
  z-index: 20;
}

.access-fixed-cta a {
  display: grid;
  width: 82px;
  min-height: 74px;
  place-items: center;
  gap: 4px;
  padding: 10px 8px;
  border: 1px solid rgba(212, 176, 83, 0.7);
  border-radius: 18px;
  background: rgba(5, 5, 5, 0.88);
  color: var(--paper);
  font-size: 11px;
  font-weight: 900;
  line-height: 1.2;
  text-align: center;
  text-decoration: none;
  box-shadow: 0 0 18px rgba(212, 176, 83, 0.18);
}

.access-fixed-cta svg {
  color: var(--gold-soft);
}

@media (max-width: 700px) {
  .access-fixed-cta {
    left: 12px;
    right: 12px;
    bottom: 10px;
    grid-template-columns: repeat(5, minmax(0, 1fr));
    gap: 8px;
  }

  .access-fixed-cta a {
    width: auto;
    min-height: 58px;
    border-radius: 14px;
  }

  .tsurusen-access-dom-page {
    padding-bottom: 78px;
  }
}

@media (max-width: 900px) {
  .access-header {
    grid-template-columns: 1fr auto;
  }

  .access-nav {
    grid-column: 1 / -1;
    order: 3;
    justify-content: flex-start;
  }

  .access-hero,
  .access-location-grid,
  .access-map-transport,
  .access-final-cta {
    grid-template-columns: 1fr;
    height: auto;
    max-height: none;
    padding-bottom: max(clamp(112px, 28vw, 152px), calc(env(safe-area-inset-bottom) + 112px));
  }

  .access-quick-grid,
  .access-route-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .access-photo-grid {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }

  .access-nearby-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .access-support-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 640px) {
  .access-header {
    width: calc(100% - 24px);
    grid-template-columns: 1fr;
    padding-inline: 14px;
  }

  .access-reserve {
    justify-self: start;
  }

  .access-hero {
    width: calc(100% - 24px);
    padding-inline: 16px;
    padding-block: clamp(56px, 8vh, 92px);
  }

  .access-main {
    width: calc(100% - 32px);
  }

  .access-quick-grid,
  .access-route-grid,
  .access-photo-grid,
  .access-nearby-grid {
    grid-template-columns: 1fr;
  }

  .access-card,
  .access-panel {
    border-radius: 14px;
    padding: 18px;
  }

  .access-info-row,
  .transport-row,
  .parking-list div,
  .international-content,
  .access-night-card {
    grid-template-columns: 1fr;
  }

  .access-info-row svg {
    margin-bottom: -6px;
  }

  .parking-list p,
  .parking-list span {
    grid-column: auto;
  }

  .map-label--store,
  .map-label--street,
  .map-label--cinema {
    grid-column: 2 / 8;
  }

  .cta-buttons,
  .support-actions {
    flex-direction: column;
  }

  .access-button {
    width: 100%;
  }

  .access-fixed-cta {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }

  .access-fixed-cta a:first-child {
    display: none;
  }
}

@media (max-width: 420px) {
  .access-header,
  .access-hero {
    width: calc(100% - 28px);
  }

  .access-main {
    width: calc(100% - 40px);
  }

  .access-nav {
    gap: 8px;
  }

  .access-nav a,
  .access-reserve {
    font-size: 11px;
    letter-spacing: 0.04em;
  }

  .access-logo span {
    font-size: 22px;
  }

  .access-hero-copy h1 {
    font-size: clamp(38px, 11vw, 46px);
  }

  .access-hero-copy p {
    font-size: clamp(19px, 6vw, 24px);
  }

  .access-fixed-cta {
    left: 8px;
    right: 8px;
  }
}
`;
