/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { TsurusenTopHeader } from "./TsurusenTopHeader";
import {
  CalendarDays,
  Camera,
  Check,
  CircleDot,
  Dice5,
  GlassWater,
  MessageCircle,
  MicVocal,
  Phone,
  Target,
  Wine,
} from "lucide-react";

const assetBase = "/assets/entertainment";

const menuCards = [
  { title: "DARTS", jp: "ダーツ", href: "#darts", image: "menu-darts.png", icon: Target },
  { title: "KARAOKE", jp: "カラオケ", href: "#karaoke", image: "menu-karaoke.png", icon: MicVocal },
  { title: "BOARD GAME", jp: "ボードゲーム", href: "#board-game", image: "menu-board-game.png", icon: Dice5 },
  { title: "LOUNGE", jp: "ラウンジ", href: "#lounge", image: "menu-lounge.png", icon: Wine },
] as const;

const dartsChecks = [
  "最新ダーツマシン完備",
  "カウントアップ・ランキング対応",
  "パーティーモード搭載",
  "初心者でも安心のサポート",
];

const karaokeChecks = ["最新カラオケ機種導入", "大型モニター・高音質サウンド", "歌い放題プラン", "最大20名までOK"];

const boardCards = [
  { title: "CLASSIC", jp: "トランプ・UNO・ジェンガなど", image: "board-classic.png" },
  { title: "PARTY GAME", jp: "みんなで盛り上がるパーティーゲーム", image: "board-party.png" },
  { title: "STRATEGY", jp: "じっくり楽しめる戦略ゲームも", image: "board-strategy.png" },
] as const;

const perfectFor = [
  { label: "会社帰り", image: "perfect-gokon.png" },
  { label: "女子会", image: "perfect-girls.png" },
  { label: "誕生日", image: "perfect-birthday.png" },
  { label: "貸切パーティー", image: "perfect-private.png" },
  { label: "二次会", image: "perfect-afterparty.png" },
  { label: "海外旅行客", image: "perfect-visitor.png" },
] as const;

const timeline = [
  { label: "乾杯", icon: GlassWater },
  { label: "ダーツ", icon: Target },
  { label: "カラオケ", icon: MicVocal },
  { label: "ゲーム", icon: Dice5 },
  { label: "乾杯", icon: Wine },
  { label: "記念撮影", icon: Camera },
] as const;

const floorGuide = [
  "ダーツエリア",
  "カラオケルーム",
  "ラウンジエリア",
  "VIPエリア",
  "カウンター",
  "受付",
  "トイレ",
];

const nightMoments = ["night-moment-01.png", "night-moment-02.png", "night-moment-03.png", "night-moment-04.png"];

function Header() {
  return <TsurusenTopHeader active="ENTERTAINMENT" />;
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return <h2 className="ent-section-title">{children}</h2>;
}

function ReserveButtons({ compact = false }: { compact?: boolean }) {
  return (
    <div className={compact ? "ent-cta-buttons compact" : "ent-cta-buttons"}>
      <Link className="gold" href="/reservation">
        <CalendarDays size={compact ? 18 : 28} aria-hidden="true" />
        <span>
          WEB予約
          <small>RESERVE</small>
        </span>
      </Link>
      <Link className="green" href="https://line.me/R/ti/p/@tsurusen">
        <MessageCircle size={compact ? 18 : 28} aria-hidden="true" />
        <span>
          LINE予約
          <small>LINE</small>
        </span>
      </Link>
      <Link className="pink" href="tel:03-XXXX-XXXX">
        <Phone size={compact ? 18 : 28} aria-hidden="true" />
        <span>
          電話予約
          <small>CALL</small>
        </span>
      </Link>
    </div>
  );
}

export function TsurusenEntertainmentPixelPage() {
  return (
    <div className="entertainment-page">
      <style>{entertainmentCss}</style>
      <Header />

      <section className="ent-hero" id="top" aria-labelledby="ent-hero-title">
        <div className="ent-hero-inner">
          <h1 id="ent-hero-title">
            PLAY
            <br />
            TOGETHER
          </h1>
          <p>Drink. Sing. Throw. Repeat.</p>
          <span className="ent-scroll">SCROLL</span>
        </div>
      </section>

      <main className="ent-main">
        <section className="ent-experience panel" id="experience">
          <img src={`${assetBase}/intro-lounge.png`} alt="夜景が見えるTSURUSENのラウンジ" />
          <div className="ent-copy">
            <SectionTitle>EXPERIENCE</SectionTitle>
            <h2>
              ここはただのバーではありません。
              <br />
              遊びとお酒が融合した
              <br />
              大人の遊び場。
            </h2>
            <p>
              ダーツ、カラオケ、ボードゲーム。そして心地よいラウンジ空間。
              エンターテインメントが詰まった特別な時間をお楽しみください。
            </p>
          </div>
        </section>

        <section className="panel ent-menu" id="menu" aria-labelledby="ent-menu-title">
          <SectionTitle>ENTERTAINMENT MENU</SectionTitle>
          <div className="ent-menu-grid">
            {menuCards.map((item) => {
              const Icon = item.icon;
              return (
                <Link className="ent-menu-card" href={item.href} key={item.title}>
                  <img src={`${assetBase}/${item.image}`} alt="" />
                  <span>
                    <Icon size={26} aria-hidden="true" />
                    <b>{item.title}</b>
                    <small>{item.jp}</small>
                  </span>
                </Link>
              );
            })}
          </div>
        </section>

        <section className="panel ent-darts" id="darts">
          <img src={`${assetBase}/darts-left.png`} alt="ダーツマシンで遊ぶ様子" />
          <div className="ent-copy">
            <SectionTitle>DARTS EXPERIENCE</SectionTitle>
            <h3>初心者から上級者まで楽しめる本格ダーツ体験。</h3>
            <ul>
              {dartsChecks.map((item) => (
                <li key={item}>
                  <Check size={16} aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <img src={`${assetBase}/darts-right.png`} alt="仲間とダーツを楽しむグループ" />
        </section>

        <section className="panel ent-karaoke" id="karaoke">
          <div className="ent-copy">
            <SectionTitle>KARAOKE EXPERIENCE</SectionTitle>
            <h3>最新機種で思いっきり歌おう！大人数でも盛り上がるカラオケ空間。</h3>
            <ul>
              {karaokeChecks.map((item) => (
                <li key={item}>
                  <Check size={16} aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <img src={`${assetBase}/karaoke-main.png`} alt="カラオケを楽しむ男女" />
        </section>

        <section className="panel ent-board" id="board-game">
          <SectionTitle>BOARD GAME LOUNGE</SectionTitle>
          <p>定番から話題のゲームまで多数ご用意。</p>
          <div className="ent-board-grid">
            {boardCards.map((item) => (
              <article className="ent-image-card" key={item.title}>
                <img src={`${assetBase}/${item.image}`} alt="" />
                <span>
                  <b>{item.title}</b>
                  <small>{item.jp}</small>
                </span>
              </article>
            ))}
          </div>
        </section>

        <section className="ent-split">
          <div className="panel ent-gallery" id="gallery">
            <SectionTitle>SPACE GALLERY</SectionTitle>
            <div className="ent-gallery-grid">
              <img className="large" src={`${assetBase}/space-gallery-large.png`} alt="ラウンジ内観" />
              <img src={`${assetBase}/space-gallery-collage.png`} alt="店内ギャラリー" />
            </div>
          </div>

          <div className="panel ent-floor" id="floor-guide">
            <SectionTitle>FLOOR GUIDE</SectionTitle>
            <div className="ent-floor-grid">
              <img src={`${assetBase}/floor-guide-map.png`} alt="TSURUSENのフロアガイド" />
              <ul>
                {floorGuide.map((item) => (
                  <li key={item}>
                    <CircleDot size={15} aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="ent-capacity-perfect">
          <div className="panel ent-capacity" id="capacity">
            <SectionTitle>CAPACITY</SectionTitle>
            <strong>100+</strong>
            <span>PEOPLE</span>
            <ul>
              {["団体歓迎", "貸切OK", "イベント対応", "会社利用OK"].map((item) => (
                <li key={item}>
                  <Check size={16} aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="panel ent-perfect">
            <SectionTitle>PERFECT FOR</SectionTitle>
            <div className="ent-perfect-grid">
              {perfectFor.map((item) => (
                <Link href={`/events#${item.label}`} key={item.label}>
                  <img src={`${assetBase}/${item.image}`} alt="" />
                  <span>{item.label}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="panel ent-timeline" id="timeline">
          <SectionTitle>ENTERTAINMENT TIMELINE</SectionTitle>
          <div className="ent-timeline-row">
            {timeline.map((item, index) => {
              const Icon = item.icon;
              return (
                <div className="ent-timeline-item" key={`${item.label}-${index}`}>
                  <span>
                    <Icon size={34} aria-hidden="true" />
                  </span>
                  <b>{item.label}</b>
                </div>
              );
            })}
          </div>
        </section>

        <section className="panel ent-moments" id="moments">
          <SectionTitle>NIGHT MOMENTS</SectionTitle>
          <div className="ent-moments-grid">
            {nightMoments.map((image, index) => (
              <img key={image} src={`${assetBase}/${image}`} alt={`TSURUSENの夜のシーン ${index + 1}`} />
            ))}
          </div>
        </section>
      </main>

      <section className="ent-bottom-cta" id="reserve">
        <div>
          <h2>
            LET&apos;S PLAY
            <br />
            TONIGHT
          </h2>
          <p>今夜は鶴千で最高の時間を。</p>
          <ReserveButtons compact />
        </div>
      </section>

      <aside className="ent-floating" aria-label="Quick reservation">
        <Link className="gold" href="/reservation">
          <CalendarDays size={23} aria-hidden="true" />
          <span>WEB予約</span>
        </Link>
        <Link className="green" href="https://line.me/R/ti/p/@tsurusen">
          <MessageCircle size={23} aria-hidden="true" />
          <span>LINE予約</span>
        </Link>
        <Link className="pink" href="tel:03-XXXX-XXXX">
          <Phone size={23} aria-hidden="true" />
          <span>電話予約</span>
        </Link>
      </aside>
    </div>
  );
}

const entertainmentCss = `
html {
  scroll-behavior: smooth;
}

body:has(.entertainment-page) {
  background: #050505;
  min-width: 0;
}

body:has(.entertainment-page) > main#main {
  width: 100%;
  min-width: 0;
  max-width: 100%;
  padding-bottom: 0;
}

.entertainment-page {
  --gold: #d8b15a;
  --gold-strong: #f1ca63;
  --panel: rgba(10, 10, 9, 0.9);
  --line: rgba(216, 177, 90, 0.44);
  --white: #f8f3e8;
  width: 100%;
  max-width: 100%;
  min-height: 100svh;
  background:
    radial-gradient(circle at 50% 0%, rgba(118, 82, 22, 0.18), transparent 34rem),
    linear-gradient(180deg, #050505 0%, #080706 46%, #030303 100%);
  color: var(--white);
  font-family: var(--font-noto-sans-jp), system-ui, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: geometricPrecision;
  font-feature-settings: "kern", "liga";
}

.entertainment-page *,
.entertainment-page *::before,
.entertainment-page *::after {
  box-sizing: border-box;
}

.entertainment-page img {
  display: block;
  max-width: 100%;
}

.ent-header {
  position: sticky;
  top: 0;
  z-index: 50;
  display: grid;
  grid-template-columns: minmax(132px, 170px) 1fr auto;
  align-items: center;
  gap: clamp(14px, 2vw, 32px);
  min-height: clamp(64px, 7vw, 86px);
  padding: 10px clamp(16px, 3vw, 48px);
  border-bottom: 1px solid rgba(216, 177, 90, 0.2);
  background:
    linear-gradient(90deg, rgba(0, 0, 0, 0.98), rgba(9, 8, 7, 0.82), rgba(0, 0, 0, 0.98)),
    url("${assetBase}/section-01-hero.png") center / cover;
  backdrop-filter: blur(12px);
}

.ent-logo {
  display: inline-flex;
  align-items: center;
  width: clamp(122px, 13vw, 160px);
}

.ent-nav {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: clamp(12px, 1.5vw, 28px);
}

.ent-nav a,
.ent-reserve {
  color: #f8f3e8;
  font-family: var(--font-oswald), sans-serif;
  font-size: clamp(11px, 0.8vw, 15px);
  font-weight: 700;
  letter-spacing: 0.1em;
  text-decoration: none;
  white-space: nowrap;
  transition: color 0.22s ease, text-shadow 0.22s ease, transform 0.22s ease;
}

.ent-nav a.active {
  color: var(--gold-strong);
  text-shadow: 0 0 18px rgba(216, 177, 90, 0.58);
  border-bottom: 2px solid var(--gold-strong);
  padding-bottom: 8px;
}

.ent-nav a:hover,
.ent-reserve:hover {
  color: var(--gold-strong);
  text-shadow: 0 0 14px rgba(216, 177, 90, 0.45);
  transform: translateY(-1px);
}

.ent-reserve {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 42px;
  padding: 0 20px;
  border: 1px solid var(--gold);
  border-radius: 8px;
  background: rgba(0, 0, 0, 0.38);
}

.ent-hero {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: clamp(520px, 72svh, 760px);
  padding: clamp(80px, 8vh, 140px) clamp(18px, 4vw, 56px);
  background:
    linear-gradient(90deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.18) 45%, rgba(0, 0, 0, 0.45)),
    radial-gradient(circle at 50% 46%, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.34) 30%, rgba(0, 0, 0, 0.75) 68%),
    url("${assetBase}/section-01-hero.png") center / cover no-repeat;
}

.ent-hero-inner {
  width: min(1180px, 94vw);
  display: grid;
  justify-items: center;
  text-align: center;
}

.ent-hero h1 {
  margin: 0;
  color: #fffdf4;
  font-family: var(--font-bebas), var(--font-oswald), sans-serif;
  font-size: clamp(72px, 8vw, 150px);
  font-weight: 900;
  line-height: 0.9;
  letter-spacing: 0.04em;
  text-shadow: 0 0 30px rgba(255, 255, 255, 0.24), 0 0 18px rgba(216, 177, 90, 0.26);
}

.ent-hero p {
  margin: clamp(18px, 2vw, 28px) 0 0;
  color: var(--gold-strong);
  font-size: clamp(16px, 1.4vw, 22px);
  font-weight: 800;
  letter-spacing: 0.04em;
}

.ent-scroll {
  display: inline-grid;
  gap: 8px;
  justify-items: center;
  margin-top: clamp(28px, 4vh, 48px);
  color: rgba(248, 243, 232, 0.78);
  font-family: var(--font-oswald), sans-serif;
  font-size: 11px;
  letter-spacing: 0.14em;
}

.ent-scroll::after {
  content: "";
  width: 15px;
  height: 32px;
  border: 2px solid var(--gold);
  border-radius: 999px;
  box-shadow: 0 0 16px rgba(216, 177, 90, 0.55);
}

.ent-main {
  width: min(96vw, 1600px);
  margin-inline: auto;
  display: grid;
  gap: clamp(18px, 2vw, 30px);
  padding: clamp(22px, 3vw, 48px) 0 clamp(44px, 6vw, 80px);
}

.panel {
  border: 1px solid var(--line);
  border-radius: 8px;
  background:
    radial-gradient(circle at 50% 0%, rgba(216, 177, 90, 0.08), transparent 22rem),
    linear-gradient(180deg, rgba(14, 14, 13, 0.96), rgba(6, 6, 5, 0.96));
  box-shadow: inset 0 0 40px rgba(216, 177, 90, 0.025);
}

.ent-section-title {
  margin: 0;
  color: var(--gold);
  font-family: var(--font-bebas), var(--font-oswald), sans-serif;
  font-size: clamp(26px, 2.1vw, 44px);
  font-weight: 900;
  line-height: 1;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  text-shadow: 0 0 18px rgba(216, 177, 90, 0.28);
}

.ent-copy {
  display: grid;
  align-content: center;
  gap: clamp(14px, 1.5vw, 24px);
  padding: clamp(24px, 4vw, 62px);
}

.ent-copy h2,
.ent-copy h3 {
  margin: 0;
  color: #fffdf5;
  font-size: clamp(24px, 2.4vw, 46px);
  font-weight: 900;
  line-height: 1.65;
  letter-spacing: 0.02em;
}

.ent-copy h3 {
  font-size: clamp(20px, 1.7vw, 32px);
  line-height: 1.6;
}

.ent-copy p,
.ent-board > p {
  margin: 0;
  color: rgba(248, 243, 232, 0.84);
  font-size: clamp(14px, 1.05vw, 18px);
  font-weight: 700;
  line-height: 1.9;
}

.ent-copy ul,
.ent-floor ul,
.ent-capacity ul {
  display: grid;
  gap: 10px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.ent-copy li,
.ent-floor li,
.ent-capacity li {
  display: flex;
  align-items: center;
  gap: 10px;
  color: rgba(248, 243, 232, 0.9);
  font-size: clamp(13px, 1vw, 16px);
  font-weight: 800;
  line-height: 1.45;
}

.ent-copy li svg,
.ent-floor li svg,
.ent-capacity li svg {
  flex: 0 0 auto;
  color: var(--gold-strong);
}

.ent-experience {
  display: grid;
  grid-template-columns: 1.05fr 0.95fr;
  align-items: stretch;
}

.ent-experience > img,
.ent-darts > img,
.ent-karaoke > img {
  width: 100%;
  height: 100%;
  min-height: clamp(260px, 24vw, 430px);
  object-fit: cover;
}

.ent-menu {
  display: grid;
  gap: 18px;
  padding: clamp(18px, 2vw, 30px);
}

.ent-menu > .ent-section-title,
.ent-timeline > .ent-section-title,
.ent-moments > .ent-section-title {
  text-align: center;
}

.ent-menu-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: clamp(12px, 1.5vw, 20px);
}

.ent-menu-card,
.ent-image-card {
  position: relative;
  display: grid;
  min-height: clamp(150px, 11vw, 210px);
  overflow: clip;
  border: 1px solid rgba(216, 177, 90, 0.42);
  border-radius: 8px;
  background: #090807;
  color: #fff7ea;
  text-decoration: none;
  transition: border-color 0.24s ease, box-shadow 0.24s ease, transform 0.24s ease;
}

.ent-menu-card:hover,
.ent-image-card:hover,
.ent-perfect a:hover {
  border-color: rgba(216, 177, 90, 0.86);
  box-shadow: 0 0 28px rgba(216, 177, 90, 0.28);
  transform: translateY(-4px);
}

.ent-menu-card img,
.ent-image-card img {
  width: 100%;
  height: 100%;
  min-height: inherit;
  object-fit: cover;
  filter: saturate(1.05) contrast(1.02);
}

.ent-menu-card span,
.ent-image-card span {
  position: relative;
  z-index: 1;
  display: grid;
  justify-items: center;
  align-self: end;
  gap: 2px;
  min-height: 68px;
  padding: 14px 12px 12px;
  margin-top: -74px;
  background: linear-gradient(180deg, transparent, rgba(0, 0, 0, 0.88) 28%, rgba(0, 0, 0, 0.98));
}

.ent-menu-card svg {
  color: var(--gold-strong);
  filter: drop-shadow(0 0 10px rgba(216, 177, 90, 0.45));
}

.ent-menu-card b,
.ent-image-card b {
  color: #f5d270;
  font-family: var(--font-bebas), var(--font-oswald), sans-serif;
  font-size: clamp(22px, 1.7vw, 34px);
  letter-spacing: 0.12em;
  line-height: 1;
}

.ent-menu-card small,
.ent-image-card small {
  color: #fff2df;
  font-size: clamp(12px, 0.9vw, 15px);
  font-weight: 900;
  line-height: 1.4;
}

.ent-darts {
  display: grid;
  grid-template-columns: 1fr 0.72fr 1.2fr;
}

.ent-karaoke {
  display: grid;
  grid-template-columns: 0.78fr 1.45fr;
}

.ent-board {
  display: grid;
  gap: 16px;
  padding: clamp(18px, 2vw, 30px);
}

.ent-board-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: clamp(14px, 1.6vw, 24px);
}

.ent-split,
.ent-capacity-perfect {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: clamp(18px, 2vw, 30px);
}

.ent-gallery,
.ent-floor {
  display: grid;
  gap: 18px;
  padding: clamp(18px, 2vw, 30px);
}

.ent-gallery-grid {
  display: grid;
  grid-template-columns: 1.05fr 1.2fr;
  gap: 12px;
}

.ent-gallery-grid img,
.ent-floor-grid img,
.ent-perfect img,
.ent-moments img {
  width: 100%;
  height: 100%;
  min-height: 150px;
  object-fit: cover;
  border: 1px solid rgba(216, 177, 90, 0.32);
  border-radius: 8px;
}

.ent-floor-grid {
  display: grid;
  grid-template-columns: 1.65fr 0.65fr;
  gap: 18px;
  align-items: center;
}

.ent-floor-grid img {
  object-fit: contain;
  background: #080807;
}

.ent-capacity {
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-areas:
    "title list"
    "number list"
    "people list";
  column-gap: clamp(24px, 4vw, 72px);
  row-gap: 8px;
  align-items: center;
  padding: clamp(22px, 3vw, 42px);
}

.ent-capacity .ent-section-title {
  grid-area: title;
}

.ent-capacity strong {
  grid-area: number;
  color: #f6d06d;
  font-family: var(--font-bebas), var(--font-oswald), sans-serif;
  font-size: clamp(76px, 8vw, 142px);
  font-weight: 900;
  line-height: 0.92;
  letter-spacing: 0.04em;
  text-shadow: 0 0 22px rgba(216, 177, 90, 0.3);
}

.ent-capacity span {
  grid-area: people;
  color: rgba(248, 243, 232, 0.88);
  font-family: var(--font-oswald), sans-serif;
  font-size: clamp(20px, 2vw, 34px);
  font-weight: 700;
  letter-spacing: 0.14em;
}

.ent-capacity ul {
  grid-area: list;
}

.ent-perfect {
  display: grid;
  gap: 16px;
  padding: clamp(18px, 2vw, 30px);
}

.ent-perfect-grid {
  display: grid;
  grid-template-columns: repeat(6, minmax(0, 1fr));
  gap: 10px;
}

.ent-perfect a {
  display: grid;
  gap: 8px;
  min-width: 0;
  color: #fff7ea;
  text-align: center;
  text-decoration: none;
  font-size: clamp(11px, 0.8vw, 14px);
  font-weight: 900;
  line-height: 1.3;
  transition: transform 0.24s ease, box-shadow 0.24s ease;
}

.ent-perfect img {
  min-height: 90px;
  aspect-ratio: 1 / 1.03;
}

.ent-timeline {
  display: grid;
  gap: 26px;
  padding: clamp(22px, 3vw, 38px);
}

.ent-timeline-row {
  display: grid;
  grid-template-columns: repeat(6, minmax(0, 1fr));
  align-items: center;
  gap: 14px;
}

.ent-timeline-item {
  position: relative;
  display: grid;
  justify-items: center;
  gap: 10px;
  color: #fff7ea;
  font-size: clamp(12px, 0.9vw, 15px);
  font-weight: 900;
}

.ent-timeline-item:not(:last-child)::after {
  content: "";
  position: absolute;
  top: 35px;
  left: calc(50% + 36px);
  width: calc(100% - 60px);
  height: 1px;
  background: linear-gradient(90deg, var(--gold), transparent);
}

.ent-timeline-item > span {
  display: grid;
  place-items: center;
  width: clamp(68px, 6vw, 96px);
  aspect-ratio: 1;
  border: 1px solid rgba(216, 177, 90, 0.42);
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.42);
  color: var(--gold-strong);
  box-shadow: inset 0 0 18px rgba(216, 177, 90, 0.08);
}

.ent-moments {
  display: grid;
  gap: 18px;
  padding: clamp(18px, 2vw, 30px);
}

.ent-moments-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 0;
}

.ent-moments img {
  min-height: clamp(160px, 13vw, 240px);
  border-radius: 0;
  border-color: rgba(216, 177, 90, 0.24);
}

.ent-bottom-cta {
  width: 100%;
  min-height: clamp(360px, 42svh, 620px);
  display: grid;
  place-items: center;
  padding: clamp(62px, 8vh, 118px) clamp(18px, 4vw, 56px);
  background:
    linear-gradient(180deg, rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.78)),
    radial-gradient(circle at 50% 42%, rgba(143, 51, 255, 0.42), transparent 30rem),
    url("${assetBase}/cta-background.png") center / cover no-repeat;
  text-align: center;
}

.ent-bottom-cta > div {
  width: min(980px, calc(100% - clamp(24px, 4vw, 48px)));
  display: grid;
  justify-items: center;
}

.ent-bottom-cta h2 {
  margin: 0;
  color: #d858ff;
  font-family: var(--font-bebas), var(--font-oswald), sans-serif;
  font-size: clamp(58px, 7vw, 132px);
  font-weight: 900;
  line-height: 0.92;
  letter-spacing: 0.12em;
  text-shadow: 0 0 22px rgba(216, 47, 255, 0.86), 0 0 34px rgba(84, 89, 255, 0.4);
}

.ent-bottom-cta p {
  margin: clamp(18px, 2vw, 28px) 0 0;
  color: #fff9ee;
  font-size: clamp(16px, 1.5vw, 24px);
  font-weight: 900;
}

.ent-cta-buttons {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: clamp(14px, 2vw, 24px);
  margin-top: clamp(24px, 4vh, 42px);
}

.ent-cta-buttons a,
.ent-floating a {
  --cta-color: var(--gold);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 14px;
  min-width: clamp(190px, 18vw, 250px);
  min-height: 62px;
  padding: 10px 22px;
  border: 1px solid var(--cta-color);
  border-radius: 8px;
  background: rgba(0, 0, 0, 0.66);
  color: #fff7ea;
  text-decoration: none;
  box-shadow: inset 0 0 22px color-mix(in srgb, var(--cta-color), transparent 78%);
  transition: transform 0.22s ease, box-shadow 0.22s ease;
}

.ent-cta-buttons.compact a {
  min-width: clamp(168px, 15vw, 230px);
  min-height: 48px;
}

.ent-cta-buttons a:hover,
.ent-floating a:hover {
  transform: translateY(-3px);
  box-shadow: 0 0 24px color-mix(in srgb, var(--cta-color), transparent 54%), inset 0 0 26px color-mix(in srgb, var(--cta-color), transparent 72%);
}

.ent-cta-buttons a.gold,
.ent-floating a.gold {
  --cta-color: var(--gold);
}

.ent-cta-buttons a.green,
.ent-floating a.green {
  --cta-color: #12df61;
}

.ent-cta-buttons a.pink,
.ent-floating a.pink {
  --cta-color: #f253c5;
}

.ent-cta-buttons svg,
.ent-floating svg {
  color: var(--cta-color);
  filter: drop-shadow(0 0 8px color-mix(in srgb, var(--cta-color), transparent 40%));
}

.ent-cta-buttons span,
.ent-floating span {
  display: grid;
  gap: 3px;
  color: #fff8ef;
  font-size: clamp(14px, 1.1vw, 18px);
  font-weight: 900;
  line-height: 1;
  letter-spacing: 0.08em;
  text-align: left;
  white-space: nowrap;
}

.ent-cta-buttons small {
  color: var(--cta-color);
  font-family: var(--font-oswald), sans-serif;
  font-size: 10px;
  letter-spacing: 0.12em;
}

.ent-floating {
  position: fixed;
  right: max(12px, env(safe-area-inset-right));
  bottom: max(22px, env(safe-area-inset-bottom));
  z-index: 60;
  display: grid;
  gap: 10px;
}

.ent-floating a {
  display: grid;
  justify-items: center;
  gap: 4px;
  min-width: 68px;
  min-height: 68px;
  padding: 8px 6px;
  border-radius: 16px;
}

.ent-floating span {
  font-size: 10px;
  text-align: center;
}

@media (max-width: 1180px) {
  .ent-header {
    grid-template-columns: 140px 1fr auto;
  }

  .ent-nav {
    gap: 10px;
  }

  .ent-nav a {
    font-size: 10px;
    letter-spacing: 0.07em;
  }

  .ent-menu-grid,
  .ent-moments-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .ent-darts {
    grid-template-columns: 1fr 1fr;
  }

  .ent-darts .ent-copy {
    grid-column: span 2;
    order: -1;
  }

  .ent-perfect-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

@media (max-width: 900px) {
  .ent-header {
    grid-template-columns: 1fr auto;
    gap: 12px;
  }

  .ent-nav {
    grid-column: 1 / -1;
    justify-content: flex-start;
    flex-wrap: wrap;
    order: 3;
  }

  .ent-reserve {
    min-height: 36px;
  }

  .ent-hero {
    background-position: center top;
  }

  .ent-experience,
  .ent-karaoke,
  .ent-split,
  .ent-capacity-perfect {
    grid-template-columns: 1fr;
  }

  .ent-darts {
    grid-template-columns: 1fr;
  }

  .ent-darts .ent-copy {
    grid-column: auto;
  }

  .ent-board-grid {
    grid-template-columns: 1fr;
  }

  .ent-floor-grid {
    grid-template-columns: 1fr;
  }

  .ent-capacity {
    grid-template-columns: 1fr;
    grid-template-areas:
      "title"
      "number"
      "people"
      "list";
    justify-items: start;
  }

  .ent-timeline-row {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .ent-timeline-item::after {
    display: none;
  }
}

@media (max-width: 620px) {
  .ent-header {
    position: static;
    padding: 12px;
  }

  .ent-logo {
    width: 126px;
  }

  .ent-nav {
    gap: 8px;
  }

  .ent-nav a {
    font-size: 9px;
  }

  .ent-reserve {
    padding-inline: 12px;
    font-size: 10px;
  }

  .ent-hero {
    min-height: clamp(420px, 76svh, 560px);
    padding-block: 64px;
  }

  .ent-menu-grid,
  .ent-moments-grid,
  .ent-perfect-grid,
  .ent-timeline-row {
    grid-template-columns: 1fr;
  }

  .ent-copy {
    padding: 22px;
  }

  .ent-gallery-grid {
    grid-template-columns: 1fr;
  }

  .ent-bottom-cta h2 {
    font-size: clamp(46px, 15vw, 68px);
    letter-spacing: 0.08em;
    line-height: 1;
  }

  .ent-cta-buttons {
    width: min(100%, 288px);
    flex-direction: column;
    align-items: center;
  }

  .ent-cta-buttons a {
    width: 100%;
    min-width: 0;
  }

  .ent-floating {
    position: sticky;
    right: auto;
    bottom: 0;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 0;
    width: 100%;
    padding-bottom: env(safe-area-inset-bottom);
    background: rgba(0, 0, 0, 0.88);
    border-top: 1px solid rgba(216, 177, 90, 0.32);
  }

  .ent-floating a {
    min-width: 0;
    min-height: 58px;
    border-radius: 0;
    border-left: 0;
    border-right: 0;
  }
}
`;
