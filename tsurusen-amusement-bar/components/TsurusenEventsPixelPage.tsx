/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { TsurusenTopHeader } from "./TsurusenTopHeader";
import {
  Cake,
  Camera,
  CalendarDays,
  ChevronDown,
  ChevronRight,
  MessageCircle,
  MicVocal,
  Music2,
  Phone,
  PlayCircle,
  Star,
  Target,
  Ticket,
  Users,
  Video,
} from "lucide-react";

const assetBase = "/assets/events";

const heroButtons = [
  { label: "イベント一覧", sub: "EVENT LIST", href: "#upcoming", className: "gold", icon: CalendarDays },
  { label: "参加予約", sub: "JOIN NOW", href: "/reservation", className: "blue", icon: Ticket },
  { label: "イベントカレンダー", sub: "CALENDAR", href: "#calendar", className: "pink", icon: CalendarDays },
] as const;

const upcomingEvents = [
  { date: "6.01", tag: "DJ", title: "SATURDAY DJ NIGHT", time: "22:00 - 5:00", fee: "DOOR ¥2,500", people: "120 PEOPLE", image: "upcoming-card-01.png" },
  { date: "6.07", tag: "DARTS", title: "DARTS TOURNAMENT", time: "22:00 - 2:00", fee: "DOOR ¥2,000", people: "64 PEOPLE", image: "upcoming-card-02.png" },
  { date: "6.14", tag: "KARAOKE", title: "KARAOKE BATTLE", time: "21:00 - 3:00", fee: "DOOR ¥2,000", people: "80 PEOPLE", image: "upcoming-card-03.png" },
  { date: "6.21", tag: "GIRLS", title: "LADIES NIGHT", time: "22:00 - 5:00", fee: "DOOR ¥1,500", people: "150 PEOPLE", image: "upcoming-card-04.png" },
  { date: "6.28", tag: "BIRTHDAY", title: "BIRTHDAY PARTY", time: "21:00 - 5:00", fee: "DOOR ¥2,000", people: "100 PEOPLE", image: "upcoming-card-05.png" },
  { date: "6.30", tag: "INTERNATIONAL", title: "INTERNATIONAL NIGHT", time: "22:00 - 4:00", fee: "DOOR ¥2,500", people: "90 PEOPLE", image: "upcoming-card-06.png" },
] as const;

const categories = [
  { title: "DJ NIGHT", image: "category-card-01.png", icon: Music2 },
  { title: "DARTS TOURNAMENT", image: "category-card-02.png", icon: Target },
  { title: "KARAOKE NIGHT", image: "category-card-03.png", icon: MicVocal },
  { title: "BIRTHDAY EVENT", image: "category-card-04.png", icon: Cake },
  { title: "SEASON EVENT", image: "category-card-05.png", icon: CalendarDays },
  { title: "PRIVATE EVENT", image: "category-card-06.png", icon: Ticket },
] as const;

const momentVideos = [
  { title: "DJ NIGHT HIGHLIGHTS", image: "moments-card-01.png", time: "0:25" },
  { title: "DARTS TOURNAMENT", image: "moments-card-02.png", time: "0:30" },
  { title: "KARAOKE STAGE", image: "moments-card-03.png", time: "0:20" },
  { title: "BIRTHDAY SURPRISE", image: "moments-card-04.png", time: "0:20" },
  { title: "CROWD MOMENTS", image: "moments-card-05.png", time: "0:51" },
] as const;

const pastEvents = [
  { month: "MAY 2024", title: "GOLDEN WEEK PARTY", meta: "参加人数 118名", image: "past-card-01.png" },
  { month: "APR 2024", title: "SAKURA PARTY", meta: "参加人数 126名", image: "past-card-02.png" },
  { month: "MAR 2024", title: "WHITE DAY EVENT", meta: "参加人数 80名", image: "past-card-03.png" },
  { month: "FEB 2024", title: "VALENTINE PARTY", meta: "参加人数 128名", image: "past-card-04.png" },
  { month: "JAN 2024", title: "NEW YEAR PARTY", meta: "参加人数 102名", image: "past-card-05.png" },
  { month: "DEC 2023", title: "CHRISTMAS PARTY", meta: "参加人数 118名", image: "past-card-06.png" },
] as const;

const voices = [
  { name: "20代 男性", text: "初めてでもすぐに仲良くなれました！" },
  { name: "30代 女性", text: "毎月の楽しみです！イベント最高！" },
  { name: "20代 社会人", text: "外国人の友達もできました！" },
  { name: "30代 男性", text: "雰囲気の良い店にぴったりでした！" },
] as const;

const hosts = [
  { name: "DJ KENTA", role: "RESIDENT DJ", image: "host-card-01.png" },
  { name: "MC LISA", role: "EVENT MC", image: "host-card-02.png" },
  { name: "BARTENDER HIRO", role: "HEAD BARTENDER", image: "host-card-03.png" },
  { name: "PLANNER AOI", role: "EVENT PLANNER", image: "host-card-04.png" },
] as const;

const faqItems = [
  ["イベントの予約方法は？", "WEB予約・LINE予約・お電話で受け付けています。"],
  ["途中参加はできますか？", "空席がある場合は途中参加も可能です。"],
  ["途中退席は可能ですか？", "可能です。再入場はイベント内容により異なります。"],
  ["キャンセルについて", "前日までにご連絡ください。"],
  ["年齢制限はありますか？", "20歳未満の方はご利用いただけません。"],
] as const;

const ctaButtons = [
  { label: "イベント予約", sub: "JOIN EVENT", href: "/reservation", className: "gold", icon: CalendarDays },
  { label: "WEB予約", sub: "RESERVE", href: "/reservation", className: "blue", icon: Ticket },
  { label: "LINEで予約", sub: "LINE", href: "https://line.me/R/ti/p/@tsurusen", className: "green", icon: MessageCircle },
  { label: "電話で予約", sub: "CALL", href: "tel:03-XXXX-XXXX", className: "pink", icon: Phone },
] as const;

function Header() {
  return <TsurusenTopHeader active="EVENTS" />;
}

function SectionTitle({ children, sub }: { children: string; sub?: string }) {
  return (
    <div className="events-section-title">
      <h2>{children}</h2>
      {sub ? <span>{sub}</span> : null}
    </div>
  );
}

function CtaButtons({ compact = false }: { compact?: boolean }) {
  return (
    <div className={compact ? "events-cta-buttons compact" : "events-cta-buttons"}>
      {ctaButtons.map((button) => {
        const Icon = button.icon;
        return (
          <Link key={button.label} className={button.className} href={button.href}>
            <Icon size={compact ? 18 : 28} aria-hidden="true" />
            <span>
              <b>{button.label}</b>
              <small>{button.sub}</small>
            </span>
          </Link>
        );
      })}
    </div>
  );
}

function Stars() {
  return (
    <span className="events-stars" aria-label="5 star rating">
      {Array.from({ length: 5 }).map((_, index) => (
        <Star key={index} size={13} fill="currentColor" aria-hidden="true" />
      ))}
    </span>
  );
}

export function TsurusenEventsPixelPage() {
  return (
    <div className="events-page">
      <style>{eventsCss}</style>
      <Header />

      <section className="events-hero" id="top">
        <div className="events-hero-inner">
          <h1>EVENTS</h1>
          <p>
            Every Night
            <br />
            Has Something New
          </p>
          <div className="events-hero-buttons">
            {heroButtons.map((button) => {
              const Icon = button.icon;
              return (
                <Link key={button.label} className={button.className} href={button.href}>
                  <Icon size={20} aria-hidden="true" />
                  <span>
                    <b>{button.label}</b>
                    <small>{button.sub}</small>
                  </span>
                </Link>
              );
            })}
          </div>
          <span className="events-scroll">SCROLL</span>
        </div>
      </section>

      <main className="events-main">
        <section className="events-featured panel" id="featured">
          <div className="featured-info">
            <SectionTitle>FEATURED EVENT</SectionTitle>
            <dl>
              <div>
                <dt>2024</dt>
                <dd>7.27</dd>
                <small>SATURDAY</small>
              </div>
              <div>
                <dt>TIME</dt>
                <dd>22:00 - 5:00</dd>
              </div>
              <div>
                <dt>DOOR</dt>
                <dd>¥3,500</dd>
              </div>
              <div>
                <dt>CAPACITY</dt>
                <dd>200 PEOPLE</dd>
              </div>
            </dl>
            <Link href="/reservation">参加する</Link>
          </div>
          <div className="featured-stage">
            <div>
              <span>THIS MONTH&apos;S BIGGEST EVENT</span>
              <h2>
                TSURUSEN
                <br />
                DJ Night
              </h2>
              <strong>SPECIAL EDITION</strong>
              <p>光と音に包まれる特別な一夜。ダーツもカラオケも楽しめる、鶴千の大型ナイトイベント。</p>
              <div className="countdown">
                {["05 DAYS", "12 HOURS", "48 MINUTES", "33 SECONDS"].map((item) => {
                  const [number, label] = item.split(" ");
                  return (
                    <span key={item}>
                      <b>{number}</b>
                      <small>{label}</small>
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="panel" id="upcoming">
          <SectionTitle sub="すべてのイベントを見る">UPCOMING EVENTS</SectionTitle>
          <div className="upcoming-grid">
            {upcomingEvents.map((event) => (
              <Link href={`/events/${event.title.toLowerCase().replaceAll(" ", "-")}`} className="event-card" key={event.title}>
                <img src={`${assetBase}/${event.image}`} alt="" />
                <div>
                  <span>{event.date}</span>
                  <small>{event.tag}</small>
                </div>
                <h3>{event.title}</h3>
                <p>{event.time} / {event.fee}</p>
                <em>
                  <Users size={14} aria-hidden="true" />
                  {event.people}
                </em>
              </Link>
            ))}
          </div>
        </section>

        <section className="events-two-col">
          <div className="panel calendar-panel" id="calendar">
            <SectionTitle>EVENT CALENDAR</SectionTitle>
            <div className="calendar-header">
              <span>2024 JUNE</span>
              <ChevronRight size={18} aria-hidden="true" />
            </div>
            <div className="calendar-grid" aria-label="Event calendar">
              {["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT", ...Array.from({ length: 30 }, (_, index) => String(index + 1))].map((day) => (
                <span key={day} className={["1", "7", "14", "21", "28", "30"].includes(day) ? "hot" : undefined}>
                  {day}
                </span>
              ))}
            </div>
          </div>

          <div className="panel" id="categories">
            <SectionTitle>EVENT CATEGORIES</SectionTitle>
            <div className="category-grid">
              {categories.map((category) => {
                const Icon = category.icon;
                return (
                  <Link href={`/events#${category.title.toLowerCase().replaceAll(" ", "-")}`} key={category.title}>
                    <img src={`${assetBase}/${category.image}`} alt="" />
                    <Icon size={24} aria-hidden="true" />
                    <span>{category.title}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        <section className="events-two-col gallery-row">
          <div className="panel gallery-panel" id="gallery">
            <SectionTitle sub="ALL / PARTY / DARTS / KARAOKE / DJ">EVENT GALLERY</SectionTitle>
            <div className="gallery-mosaic">
              {["upcoming-card-01.png", "past-card-02.png", "past-card-03.png", "upcoming-card-04.png", "past-card-05.png", "upcoming-card-03.png"].map((image) => (
                <img key={image} src={`${assetBase}/${image}`} alt="イベントギャラリー" />
              ))}
            </div>
          </div>

          <div className="panel" id="moments">
            <SectionTitle sub="ショート動画で見るイベントの様子">EVENT MOMENTS</SectionTitle>
            <div className="moments-grid">
              {momentVideos.map((video) => (
                <Link href={`/events#${video.title.toLowerCase().replaceAll(" ", "-")}`} key={video.title}>
                  <img src={`${assetBase}/${video.image}`} alt="" />
                  <PlayCircle size={30} aria-hidden="true" />
                  <span>{video.title}</span>
                  <small>{video.time}</small>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="panel" id="past">
          <SectionTitle sub="これまでのイベント実績">PAST EVENTS</SectionTitle>
          <div className="past-grid">
            {pastEvents.map((event) => (
              <article key={event.title}>
                <img src={`${assetBase}/${event.image}`} alt="" />
                <span>{event.month}</span>
                <h3>{event.title}</h3>
                <p>{event.meta}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="events-two-col community-row">
          <div className="panel community-panel" id="community">
            <h2>
              MEET NEW FRIENDS.
              <br />
              PLAY TOGETHER.
              <br />
              <span>DRINK TOGETHER.</span>
            </h2>
            <p>音楽、ダーツ、カラオケで自然に会話が生まれるイベント空間。</p>
            <Link href="/reservation">コミュニティに参加する</Link>
          </div>

          <div className="panel" id="reviews">
            <SectionTitle sub="参加者の声">GUEST VOICES</SectionTitle>
            <div className="voice-grid">
              {voices.map((voice) => (
                <article key={voice.text}>
                  <Stars />
                  <p>{voice.text}</p>
                  <small>{voice.name}</small>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="events-three-col">
          <div className="panel" id="host">
            <SectionTitle sub="イベントを支えるスタッフ">HOST TEAM</SectionTitle>
            <div className="host-grid">
              {hosts.map((host) => (
                <article key={host.name}>
                  <img src={`${assetBase}/${host.image}`} alt="" />
                  <h3>{host.name}</h3>
                  <span>{host.role}</span>
                </article>
              ))}
            </div>
          </div>

          <div className="panel" id="sns">
            <SectionTitle sub="最新のイベント情報">SNS</SectionTitle>
            <div className="sns-grid">
              <Link href="https://www.instagram.com/">
                <Camera size={36} aria-hidden="true" />
                <b>INSTAGRAM</b>
                <span>フォローする</span>
              </Link>
              <Link href="https://www.tiktok.com/">
                <Video size={36} aria-hidden="true" />
                <b>TIKTOK</b>
                <span>フォローする</span>
              </Link>
              <Link href="https://www.youtube.com/">
                <PlayCircle size={36} aria-hidden="true" />
                <b>YOUTUBE</b>
                <span>チャンネル登録</span>
              </Link>
            </div>
          </div>

          <div className="panel" id="faq">
            <SectionTitle sub="よくあるご質問">FAQ</SectionTitle>
            <div className="faq-list">
              {faqItems.map(([question, answer]) => (
                <details key={question}>
                  <summary>
                    <span>{question}</span>
                    <ChevronDown size={18} aria-hidden="true" />
                  </summary>
                  <p>{answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>

      <section className="events-bottom-cta" id="reserve">
        <div>
          <h2>
            JOIN <span>THE NEXT EVENT</span>
          </h2>
          <CtaButtons />
        </div>
      </section>

      <aside className="events-floating" aria-label="Quick reservation">
        <Link className="gold" href="/reservation">
          <CalendarDays size={25} aria-hidden="true" />
          <span>イベント予約</span>
        </Link>
        <Link className="green" href="https://line.me/R/ti/p/@tsurusen">
          <MessageCircle size={25} aria-hidden="true" />
          <span>LINE予約</span>
        </Link>
        <Link className="pink" href="tel:03-XXXX-XXXX">
          <Phone size={25} aria-hidden="true" />
          <span>電話予約</span>
        </Link>
      </aside>
    </div>
  );
}

const eventsCss = `
html {
  scroll-behavior: smooth;
}

body:has(.events-page) {
  min-width: 0;
  background: #050505;
}

body:has(.events-page) > header,
body:has(.events-page) > footer,
body:has(.events-page) > .mobile-sticky-cta,
body:has(.events-page) > .skip-link {
  display: none;
}

body:has(.events-page) > main#main {
  width: 100%;
  min-width: 0;
  max-width: 100%;
  padding-bottom: 0;
}

.events-page {
  --gold: #d8b15a;
  --gold-strong: #f1ca63;
  --panel: rgba(9, 9, 9, 0.9);
  --line: rgba(216, 177, 90, 0.46);
  --white: #f8f3e8;
  width: 100%;
  max-width: 100%;
  min-height: 100svh;
  background:
    radial-gradient(circle at 50% 0%, rgba(148, 40, 176, 0.16), transparent 34rem),
    linear-gradient(180deg, #050505 0%, #080706 42%, #030303 100%);
  color: var(--white);
  font-family: var(--font-noto-sans-jp), system-ui, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: geometricPrecision;
  font-feature-settings: "kern", "liga";
}

.events-page *,
.events-page *::before,
.events-page *::after {
  box-sizing: border-box;
}

.events-page img {
  display: block;
  max-width: 100%;
}

.events-page a {
  color: inherit;
  text-decoration: none;
}

.events-header {
  position: sticky;
  top: 0;
  z-index: 50;
  display: grid;
  grid-template-columns: 140px 1fr auto;
  align-items: center;
  gap: clamp(14px, 2vw, 32px);
  width: 100%;
  padding: clamp(14px, 1.4vw, 22px) clamp(20px, 3vw, 48px);
  border-bottom: 1px solid rgba(216, 177, 90, 0.16);
  background:
    linear-gradient(90deg, rgba(0, 0, 0, 0.98), rgba(9, 8, 7, 0.82), rgba(0, 0, 0, 0.98)),
    url("${assetBase}/section-01-hero.png") center / cover;
  backdrop-filter: blur(14px);
}

.events-logo img {
  width: 126px;
  height: auto;
}

.events-nav {
  display: flex;
  justify-content: center;
  align-items: stretch;
  gap: clamp(10px, 1.45vw, 28px);
  min-width: 0;
}

.events-nav a,
.events-reserve {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 0;
  min-height: 42px;
  color: #fff8eb;
  font-family: var(--font-oswald), var(--font-bebas), sans-serif;
  font-size: clamp(10px, 0.72vw, 14px);
  font-weight: 800;
  letter-spacing: 0.1em;
  white-space: nowrap;
  text-transform: uppercase;
}

.events-nav a.active {
  color: var(--gold-strong);
  border-bottom: 2px solid var(--gold-strong);
  text-shadow: 0 0 18px rgba(216, 177, 90, 0.62);
}

.events-reserve {
  min-width: 86px;
  padding-inline: 20px;
  border: 1px solid rgba(216, 177, 90, 0.8);
  border-radius: 10px;
  box-shadow: inset 0 0 20px rgba(216, 177, 90, 0.1), 0 0 16px rgba(216, 177, 90, 0.15);
}

.events-hero {
  position: relative;
  isolation: isolate;
  overflow: hidden;
  min-height: clamp(520px, 72svh, 760px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: clamp(82px, 8vh, 140px) clamp(20px, 4vw, 64px);
  background:
    linear-gradient(180deg, rgba(0, 0, 0, 0.12) 0%, rgba(0, 0, 0, 0.45) 58%, rgba(0, 0, 0, 0.88) 100%),
    radial-gradient(circle at 18% 35%, rgba(58, 98, 255, 0.36), transparent 24rem),
    radial-gradient(circle at 80% 32%, rgba(255, 57, 220, 0.38), transparent 25rem),
    radial-gradient(circle at 50% 48%, rgba(0, 0, 0, 0.74), rgba(0, 0, 0, 0.24) 28%, rgba(0, 0, 0, 0.7) 72%),
    url("${assetBase}/section-01-hero.png") center / cover no-repeat;
}

.events-hero::before {
  content: "";
  position: absolute;
  inset: 0;
  z-index: 0;
  pointer-events: none;
  background:
    linear-gradient(90deg, rgba(0, 0, 0, 0.24) 0%, transparent 24%, transparent 76%, rgba(0, 0, 0, 0.24) 100%),
    radial-gradient(ellipse 78% 70% at 50% 50%, rgba(0, 0, 0, 0.96) 0%, rgba(0, 0, 0, 0.9) 48%, rgba(0, 0, 0, 0.58) 72%, rgba(0, 0, 0, 0.14) 92%, transparent 100%);
}

.events-hero::after {
  content: "";
  position: absolute;
  inset: clamp(84px, 12vh, 148px) max(14px, 12vw) clamp(82px, 13vh, 142px);
  z-index: 1;
  pointer-events: none;
  background:
    radial-gradient(ellipse at center, rgba(0, 0, 0, 0.84), rgba(0, 0, 0, 0.56) 58%, rgba(0, 0, 0, 0) 83%),
    linear-gradient(90deg, transparent, rgba(255, 85, 220, 0.1) 50%, transparent);
  filter: blur(8px);
}

.events-hero-inner {
  position: relative;
  z-index: 2;
  width: min(960px, 100%);
  display: grid;
  justify-items: center;
  text-align: center;
}

.events-hero h1 {
  margin: 0;
  font-family: var(--font-bebas), var(--font-oswald), sans-serif;
  font-size: clamp(72px, 10vw, 168px);
  font-weight: 900;
  line-height: 0.92;
  letter-spacing: 0.07em;
  color: #fff8ee;
  text-shadow: 0 0 32px rgba(255, 255, 255, 0.22), 0 14px 36px rgba(0, 0, 0, 0.8);
}

.events-hero p {
  margin: clamp(10px, 1.6vw, 22px) 0 0;
  color: var(--gold-strong);
  font-family: "Times New Roman", serif;
  font-size: clamp(31px, 4.8vw, 76px);
  font-style: italic;
  line-height: 0.92;
  letter-spacing: 0.02em;
  text-shadow: 0 0 20px rgba(216, 177, 90, 0.4);
}

.events-hero-buttons,
.events-cta-buttons {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: clamp(14px, 2vw, 28px);
  margin-top: clamp(28px, 4vh, 48px);
}

.events-hero-buttons a,
.events-cta-buttons a,
.events-floating a {
  --cta: var(--gold);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 14px;
  min-width: clamp(180px, 16vw, 250px);
  min-height: clamp(58px, 7vh, 74px);
  border: 1px solid var(--cta);
  border-radius: 10px;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.06), rgba(0, 0, 0, 0.62));
  box-shadow: 0 0 18px color-mix(in srgb, var(--cta), transparent 72%), inset 0 0 26px color-mix(in srgb, var(--cta), transparent 84%);
  color: #fff;
  transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
}

.events-hero-buttons a:hover,
.events-cta-buttons a:hover,
.events-floating a:hover {
  transform: translateY(-4px) scale(1.02);
  box-shadow: 0 0 28px color-mix(in srgb, var(--cta), transparent 54%), inset 0 0 30px color-mix(in srgb, var(--cta), transparent 78%);
}

.events-hero-buttons .blue,
.events-cta-buttons .blue {
  --cta: #4ca9ff;
}

.events-hero-buttons .pink,
.events-cta-buttons .pink,
.events-floating .pink {
  --cta: #f253c5;
}

.events-cta-buttons .green,
.events-floating .green {
  --cta: #20e866;
}

.events-hero-buttons svg,
.events-cta-buttons svg,
.events-floating svg {
  color: var(--cta);
  filter: drop-shadow(0 0 8px color-mix(in srgb, var(--cta), transparent 35%));
}

.events-hero-buttons span,
.events-cta-buttons span {
  display: grid;
  gap: 2px;
}

.events-hero-buttons b,
.events-cta-buttons b {
  font-size: clamp(14px, 1.1vw, 19px);
  font-weight: 900;
  letter-spacing: 0.08em;
}

.events-hero-buttons small,
.events-cta-buttons small {
  color: var(--cta);
  font-family: var(--font-oswald), sans-serif;
  font-size: 10px;
  font-weight: 900;
  letter-spacing: 0.16em;
}

.events-scroll {
  margin-top: clamp(18px, 3vh, 34px);
  color: #d8c7a0;
  font-family: var(--font-oswald), sans-serif;
  font-size: 10px;
  letter-spacing: 0.18em;
}

.events-main {
  width: min(1500px, calc(100% - clamp(24px, 5vw, 96px)));
  margin-inline: auto;
  display: grid;
  gap: clamp(22px, 3vw, 46px);
  padding-block: clamp(30px, 5vh, 78px);
}

.panel {
  border: 1px solid var(--line);
  border-radius: 14px;
  background:
    radial-gradient(circle at 50% 0%, rgba(216, 177, 90, 0.08), transparent 18rem),
    linear-gradient(180deg, rgba(15, 15, 15, 0.92), rgba(5, 5, 5, 0.9));
  box-shadow: 0 0 28px rgba(0, 0, 0, 0.5), inset 0 0 24px rgba(216, 177, 90, 0.04);
  padding: clamp(18px, 2.2vw, 34px);
}

.events-section-title {
  display: flex;
  align-items: flex-end;
  gap: 18px;
  min-width: 0;
  margin-bottom: clamp(16px, 2vw, 28px);
}

.events-section-title h2 {
  margin: 0;
  color: var(--gold-strong);
  font-family: var(--font-bebas), var(--font-oswald), sans-serif;
  font-size: clamp(28px, 3vw, 54px);
  font-weight: 900;
  font-style: italic;
  letter-spacing: 0.08em;
  line-height: 1;
  text-shadow: 0 0 18px rgba(216, 177, 90, 0.25);
}

.events-section-title span {
  color: rgba(248, 243, 232, 0.72);
  font-size: clamp(12px, 1vw, 16px);
  font-weight: 800;
  line-height: 1.2;
}

.events-featured {
  display: grid;
  grid-template-columns: 210px minmax(0, 1fr);
  gap: clamp(20px, 3vw, 42px);
  align-items: stretch;
}

.featured-info {
  display: grid;
  align-content: space-between;
  gap: 20px;
}

.featured-info dl {
  display: grid;
  gap: 15px;
  margin: 0;
}

.featured-info dt {
  color: var(--gold);
  font-family: var(--font-oswald), sans-serif;
  font-size: 12px;
  font-weight: 900;
  letter-spacing: 0.12em;
}

.featured-info dd {
  margin: 2px 0 0;
  color: #fff;
  font-size: clamp(18px, 1.6vw, 28px);
  font-weight: 900;
  line-height: 1.15;
}

.featured-info small {
  color: #d8c7a0;
  font-family: var(--font-oswald), sans-serif;
  letter-spacing: 0.1em;
}

.featured-info > a,
.community-panel > a {
  min-height: 54px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(216, 177, 90, 0.82);
  border-radius: 10px;
  color: #fff8ec;
  font-weight: 900;
  letter-spacing: 0.08em;
  background: rgba(216, 177, 90, 0.08);
}

.featured-stage {
  min-height: clamp(280px, 33vw, 460px);
  display: flex;
  align-items: center;
  padding: clamp(26px, 4vw, 64px);
  border: 1px solid rgba(216, 177, 90, 0.42);
  border-radius: 12px;
  background:
    linear-gradient(90deg, rgba(0, 0, 0, 0.86), rgba(0, 0, 0, 0.44) 42%, rgba(0, 0, 0, 0.14)),
    url("${assetBase}/featured-dj-night.png") center / cover no-repeat;
}

.featured-stage > div {
  width: min(520px, 100%);
  display: grid;
  gap: 12px;
}

.featured-stage span,
.featured-stage strong {
  color: var(--gold-strong);
  font-family: var(--font-oswald), sans-serif;
  font-weight: 900;
  letter-spacing: 0.16em;
}

.featured-stage h2 {
  margin: 0;
  color: #fff8ea;
  font-family: var(--font-bebas), var(--font-oswald), sans-serif;
  font-size: clamp(48px, 6vw, 100px);
  font-weight: 900;
  line-height: 0.9;
  letter-spacing: 0.04em;
}

.featured-stage p {
  max-width: 440px;
  margin: 0;
  color: rgba(255, 255, 255, 0.76);
  font-size: clamp(13px, 1vw, 16px);
  line-height: 1.8;
  font-weight: 700;
}

.countdown {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 10px;
  margin-top: 10px;
  max-width: 390px;
}

.countdown span {
  display: grid;
  justify-items: center;
  gap: 4px;
  padding: 12px 8px;
  border: 1px solid rgba(216, 177, 90, 0.4);
  border-radius: 6px;
  background: rgba(0, 0, 0, 0.45);
}

.countdown b {
  color: var(--gold-strong);
  font-size: clamp(25px, 2.4vw, 42px);
  line-height: 1;
}

.countdown small {
  color: #fff;
  font-size: 9px;
}

.upcoming-grid,
.past-grid {
  display: grid;
  grid-template-columns: repeat(6, minmax(0, 1fr));
  gap: clamp(12px, 1.4vw, 22px);
}

.event-card,
.past-grid article,
.category-grid a,
.moments-grid a,
.host-grid article,
.sns-grid a,
.voice-grid article {
  min-width: 0;
  border: 1px solid rgba(216, 177, 90, 0.44);
  border-radius: 10px;
  background: rgba(0, 0, 0, 0.46);
  transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
}

.event-card:hover,
.past-grid article:hover,
.category-grid a:hover,
.moments-grid a:hover,
.host-grid article:hover,
.sns-grid a:hover,
.voice-grid article:hover {
  transform: translateY(-5px);
  border-color: rgba(241, 202, 99, 0.86);
  box-shadow: 0 0 28px rgba(216, 177, 90, 0.25);
}

.event-card {
  display: grid;
  gap: 10px;
  padding: 10px;
}

.event-card img {
  width: 100%;
  aspect-ratio: 1 / 1.08;
  border-radius: 8px;
  object-fit: cover;
  object-position: top;
}

.event-card > div {
  display: flex;
  justify-content: space-between;
  gap: 10px;
}

.event-card span {
  color: var(--gold-strong);
  font-family: var(--font-bebas), var(--font-oswald), sans-serif;
  font-size: clamp(24px, 2vw, 42px);
  line-height: 1;
}

.event-card small {
  align-self: start;
  border: 1px solid rgba(216, 177, 90, 0.48);
  border-radius: 999px;
  padding: 3px 8px;
  color: var(--gold-strong);
  font-family: var(--font-oswald), sans-serif;
  font-size: 9px;
  font-weight: 900;
  letter-spacing: 0.1em;
}

.event-card h3,
.past-grid h3,
.host-grid h3 {
  margin: 0;
  color: #fff;
  font-family: var(--font-oswald), sans-serif;
  font-size: clamp(15px, 1.1vw, 22px);
  font-weight: 900;
  letter-spacing: 0.08em;
  line-height: 1.25;
}

.event-card p,
.event-card em,
.past-grid p {
  margin: 0;
  color: rgba(255, 255, 255, 0.76);
  font-size: clamp(11px, 0.85vw, 14px);
  line-height: 1.6;
  font-style: normal;
  font-weight: 700;
}

.event-card em {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  color: var(--gold);
}

.events-two-col {
  display: grid;
  grid-template-columns: minmax(260px, 0.68fr) minmax(0, 1.6fr);
  gap: clamp(22px, 3vw, 40px);
  align-items: stretch;
}

.calendar-panel {
  min-height: 100%;
}

.calendar-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: var(--gold-strong);
  font-family: var(--font-oswald), sans-serif;
  font-weight: 900;
  letter-spacing: 0.12em;
}

.calendar-grid {
  display: grid;
  grid-template-columns: repeat(7, minmax(0, 1fr));
  gap: 9px;
  margin-top: 22px;
}

.calendar-grid span {
  min-height: 28px;
  display: grid;
  place-items: center;
  color: rgba(255, 255, 255, 0.72);
  font-family: var(--font-oswald), sans-serif;
  font-size: clamp(10px, 0.82vw, 13px);
  font-weight: 800;
}

.calendar-grid .hot {
  border: 1px solid var(--gold);
  border-radius: 999px;
  color: var(--gold-strong);
  box-shadow: 0 0 14px rgba(216, 177, 90, 0.18);
}

.category-grid {
  display: grid;
  grid-template-columns: repeat(6, minmax(0, 1fr));
  gap: clamp(12px, 1.5vw, 20px);
}

.category-grid a {
  display: grid;
  align-content: end;
  justify-items: center;
  gap: 8px;
  min-height: clamp(170px, 16vw, 242px);
  padding: 12px;
  text-align: center;
  background:
    linear-gradient(180deg, rgba(0, 0, 0, 0.08), rgba(0, 0, 0, 0.88)),
    var(--img) center / cover;
}

.category-grid img {
  width: 100%;
  aspect-ratio: 1 / 1.05;
  border-radius: 8px;
  object-fit: cover;
  object-position: top;
}

.category-grid svg {
  color: var(--gold-strong);
  filter: drop-shadow(0 0 8px rgba(216, 177, 90, 0.5));
}

.category-grid span {
  color: #fff8e8;
  font-family: var(--font-oswald), sans-serif;
  font-weight: 900;
  font-size: clamp(12px, 0.95vw, 16px);
  letter-spacing: 0.08em;
  line-height: 1.25;
}

.gallery-row {
  grid-template-columns: 0.95fr 1.25fr;
}

.gallery-mosaic {
  display: grid;
  grid-template-columns: 1.35fr 1fr 1fr;
  gap: 10px;
}

.gallery-mosaic img {
  width: 100%;
  aspect-ratio: 1.3 / 1;
  border: 1px solid rgba(216, 177, 90, 0.28);
  border-radius: 8px;
  object-fit: cover;
}

.gallery-mosaic img:first-child {
  grid-row: span 2;
  height: 100%;
}

.moments-grid {
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: clamp(12px, 1.4vw, 18px);
}

.moments-grid a {
  display: grid;
  gap: 9px;
  padding: 9px;
}

.moments-grid img {
  width: 100%;
  aspect-ratio: 0.55 / 1;
  border-radius: 7px;
  object-fit: cover;
  object-position: top;
}

.moments-grid svg {
  justify-self: center;
  color: var(--gold-strong);
  margin-top: -44px;
  filter: drop-shadow(0 0 12px rgba(0, 0, 0, 0.9));
}

.moments-grid span {
  color: #fff;
  font-family: var(--font-oswald), sans-serif;
  font-size: clamp(11px, 0.86vw, 14px);
  font-weight: 900;
  letter-spacing: 0.06em;
}

.moments-grid small {
  color: var(--gold);
  font-size: 11px;
}

.past-grid article {
  display: grid;
  gap: 9px;
  padding: 10px;
}

.past-grid img {
  width: 100%;
  aspect-ratio: 1.5 / 1;
  border-radius: 7px;
  object-fit: cover;
  object-position: top;
}

.past-grid span {
  color: var(--gold-strong);
  font-family: var(--font-oswald), sans-serif;
  font-size: 11px;
  font-weight: 900;
  letter-spacing: 0.1em;
}

.community-row {
  grid-template-columns: 0.78fr 1.22fr;
}

.community-panel {
  display: grid;
  align-content: center;
  gap: 18px;
  min-height: clamp(260px, 24vw, 360px);
  background:
    linear-gradient(90deg, rgba(0, 0, 0, 0.82), rgba(0, 0, 0, 0.42)),
    url("${assetBase}/community-panel.png") center / cover no-repeat;
}

.community-panel h2 {
  margin: 0;
  color: #fff8eb;
  font-family: var(--font-bebas), var(--font-oswald), sans-serif;
  font-size: clamp(35px, 4vw, 72px);
  font-weight: 900;
  line-height: 1.05;
  letter-spacing: 0.08em;
}

.community-panel h2 span {
  color: #ff58ea;
  text-shadow: 0 0 18px rgba(255, 82, 234, 0.42);
}

.community-panel p {
  max-width: 460px;
  margin: 0;
  color: rgba(255, 255, 255, 0.78);
  font-size: clamp(13px, 1vw, 17px);
  line-height: 1.8;
  font-weight: 700;
}

.community-panel > a {
  width: min(260px, 100%);
}

.voice-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: clamp(12px, 1.6vw, 22px);
}

.voice-grid article {
  display: grid;
  align-content: space-between;
  gap: 16px;
  min-height: clamp(150px, 13vw, 220px);
  padding: clamp(16px, 1.8vw, 24px);
}

.events-stars {
  display: inline-flex;
  gap: 3px;
  color: var(--gold-strong);
}

.voice-grid p {
  margin: 0;
  color: #fff;
  font-size: clamp(13px, 1vw, 16px);
  font-weight: 800;
  line-height: 1.8;
}

.voice-grid small,
.host-grid span,
.sns-grid span {
  color: rgba(255, 255, 255, 0.62);
  font-size: 12px;
  font-weight: 800;
}

.events-three-col {
  display: grid;
  grid-template-columns: 1.1fr 0.85fr 1fr;
  gap: clamp(22px, 3vw, 40px);
  align-items: stretch;
}

.host-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 12px;
}

.host-grid article {
  display: grid;
  gap: 8px;
  padding: 8px;
}

.host-grid img {
  width: 100%;
  aspect-ratio: 0.64 / 1;
  border-radius: 7px;
  object-fit: cover;
  object-position: top;
}

.host-grid h3 {
  font-size: clamp(11px, 0.8vw, 14px);
}

.sns-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 14px;
}

.sns-grid a {
  display: grid;
  justify-items: center;
  align-content: center;
  gap: 11px;
  min-height: 170px;
  padding: 16px;
  text-align: center;
}

.sns-grid svg {
  color: var(--gold-strong);
}

.sns-grid b {
  color: #fff;
  font-family: var(--font-oswald), sans-serif;
  letter-spacing: 0.08em;
}

.faq-list {
  display: grid;
  gap: 10px;
}

.faq-list details {
  border: 1px solid rgba(216, 177, 90, 0.36);
  border-radius: 9px;
  background: rgba(0, 0, 0, 0.34);
}

.faq-list summary {
  min-height: 48px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 14px;
  padding: 10px 16px;
  cursor: pointer;
  color: #fff;
  font-size: clamp(13px, 1vw, 16px);
  font-weight: 900;
  line-height: 1.4;
  list-style: none;
}

.faq-list summary::-webkit-details-marker {
  display: none;
}

.faq-list details[open] svg {
  transform: rotate(180deg);
}

.faq-list p {
  margin: 0;
  padding: 0 16px 16px;
  color: rgba(255, 255, 255, 0.7);
  font-size: 13px;
  line-height: 1.8;
}

.events-bottom-cta {
  position: relative;
  isolation: isolate;
  overflow: visible;
  width: 100%;
  height: auto;
  max-height: none;
  min-height: clamp(280px, 32svh, 480px);
  display: grid;
  place-items: center;
  padding: clamp(52px, 7vh, 110px) clamp(16px, 4vw, 64px) clamp(82px, 9vh, 138px);
  background:
    linear-gradient(180deg, rgba(0, 0, 0, 0.06) 0%, rgba(0, 0, 0, 0.4) 48%, rgba(0, 0, 0, 0.9) 100%),
    radial-gradient(circle at 18% 16%, rgba(59, 126, 255, 0.36), transparent 22rem),
    radial-gradient(circle at 82% 18%, rgba(255, 57, 220, 0.4), transparent 24rem),
    radial-gradient(circle at 50% 56%, rgba(216, 177, 90, 0.12), transparent 34rem),
    url("${assetBase}/cta-background.png") center / cover no-repeat;
  text-align: center;
}

.events-bottom-cta::before {
  content: "";
  position: absolute;
  inset: 0;
  z-index: 0;
  pointer-events: none;
  background:
    radial-gradient(circle at 22% 28%, rgba(63, 130, 255, 0.2), transparent 18rem),
    radial-gradient(circle at 78% 28%, rgba(255, 57, 220, 0.22), transparent 18rem),
    linear-gradient(90deg, rgba(0, 0, 0, 0.24) 0%, rgba(0, 0, 0, 0.76) 24%, rgba(0, 0, 0, 0.9) 50%, rgba(0, 0, 0, 0.76) 76%, rgba(0, 0, 0, 0.24) 100%),
    radial-gradient(ellipse 78% 80% at 50% 56%, rgba(0, 0, 0, 0.82), rgba(0, 0, 0, 0.62) 60%, rgba(0, 0, 0, 0.14) 92%, transparent 100%);
}

.events-bottom-cta::after {
  content: "";
  position: absolute;
  inset: auto 0 0;
  z-index: 1;
  height: 42%;
  pointer-events: none;
  background:
    linear-gradient(180deg, transparent 0%, rgba(0, 0, 0, 0.72) 56%, rgba(0, 0, 0, 0.98) 100%),
    radial-gradient(ellipse at 50% 98%, rgba(216, 177, 90, 0.16), transparent 52%);
}

.events-bottom-cta > div {
  position: relative;
  z-index: 2;
  width: min(1120px, calc(100% - clamp(24px, 4vw, 48px)));
  display: grid;
  justify-items: center;
}

.events-bottom-cta h2 {
  margin: 0;
  color: #fff6e2;
  font-family: var(--font-bebas), var(--font-oswald), sans-serif;
  font-size: clamp(58px, 7.5vw, 132px);
  font-weight: 900;
  line-height: 0.95;
  letter-spacing: 0.1em;
  text-shadow: 0 0 28px rgba(255, 255, 255, 0.22);
}

.events-bottom-cta h2 span {
  color: #58c8ff;
  text-shadow: 0 0 22px rgba(88, 200, 255, 0.48), 0 0 36px rgba(239, 57, 255, 0.36);
}

.events-floating {
  position: fixed;
  right: clamp(12px, 2vw, 28px);
  bottom: clamp(16px, 4vh, 42px);
  z-index: 60;
  display: grid;
  gap: 10px;
}

.events-floating a {
  min-width: 74px;
  min-height: 76px;
  display: grid;
  gap: 6px;
  justify-items: center;
  padding: 10px 8px;
  border-radius: 14px;
  text-align: center;
}

.events-floating span {
  font-size: 10px;
  font-weight: 900;
  line-height: 1.25;
}

@media (max-width: 1220px) {
  .events-header {
    grid-template-columns: 128px 1fr auto;
  }

  .events-nav {
    gap: 10px;
  }

  .events-nav a {
    font-size: 10px;
    letter-spacing: 0.07em;
  }

  .upcoming-grid,
  .past-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .events-three-col {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 900px) {
  .events-header {
    grid-template-columns: 1fr auto;
    gap: 12px;
  }

  .events-logo img {
    width: 118px;
  }

  .events-nav {
    grid-column: 1 / -1;
    justify-content: flex-start;
    flex-wrap: wrap;
    order: 3;
  }

  .events-reserve {
    min-height: 36px;
  }

  .events-featured,
  .events-two-col,
  .gallery-row,
  .community-row {
    grid-template-columns: 1fr;
  }

  .category-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .moments-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .voice-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 620px) {
  .events-header {
    position: static;
    padding: 12px;
  }

  .events-nav {
    gap: 8px;
  }

  .events-nav a {
    font-size: 9px;
  }

  .events-reserve {
    padding-inline: 12px;
    font-size: 10px;
  }

  .events-hero {
    min-height: clamp(440px, 78svh, 580px);
    padding-block: 66px;
  }

  .events-main {
    width: min(100% - 8px, 1500px);
  }

  .panel {
    padding: 16px;
  }

  .events-section-title {
    align-items: flex-start;
    flex-direction: column;
    gap: 8px;
  }

  .upcoming-grid,
  .past-grid,
  .category-grid,
  .moments-grid,
  .voice-grid,
  .host-grid,
  .sns-grid {
    grid-template-columns: 1fr;
  }

  .featured-stage {
    padding: 22px;
  }

  .countdown {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .gallery-mosaic {
    grid-template-columns: 1fr;
  }

  .events-bottom-cta h2 {
    font-size: clamp(46px, 14vw, 72px);
    line-height: 1;
  }

  .events-bottom-cta {
    min-height: auto;
    padding-block: clamp(58px, 14vw, 82px) max(clamp(118px, 28vw, 156px), calc(env(safe-area-inset-bottom) + 112px));
  }

  .events-cta-buttons {
    width: min(100%, 288px);
    flex-direction: column;
    align-items: center;
  }

  .events-cta-buttons a {
    width: 100%;
    min-width: 0;
  }

  .events-floating {
    position: sticky;
    right: auto;
    bottom: 0;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 0;
    width: 100%;
    padding-bottom: env(safe-area-inset-bottom);
    background: rgba(0, 0, 0, 0.9);
    border-top: 1px solid rgba(216, 177, 90, 0.32);
  }

  .events-floating a {
    min-width: 0;
    min-height: 58px;
    border-radius: 0;
    border-left: 0;
    border-right: 0;
  }
}
`;
