import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { TsurusenTopHeader } from "./TsurusenTopHeader";
import {
  ArrowRight,
  CalendarDays,
  Camera,
  ChevronUp,
  Gift,
  Grid2X2,
  Mail,
  MessageCircle,
  Mic2,
  Phone,
  PlayCircle,
  Search,
  Star,
  Target,
  Wine,
  Users,
} from "lucide-react";

const cleanBase = "/assets/tsurusen-blog/dom-clean";

const categories = ["ALL", "DARTS", "KARAOKE", "FOOD", "DRINK", "EVENT", "KABUKICHO", "GUIDE", "PARTY", "NEWS"];

const latestArticles = [
  {
    category: "EVENT",
    date: "2024.07.12",
    title: "SUMMER DJ NIGHT レポート！",
    text: "週末に開催されたDJ NIGHTの様子をレポート。音楽・照明・笑顔が一体となった最高の夜でした。",
    read: "5 min read",
    image: "latest-event.png",
    href: "/blog/summer-dj-night-report",
  },
  {
    category: "FOOD",
    date: "2024.07.11",
    title: "新作フードメニュー登場",
    text: "シェフこだわりの新メニューがスタート。見た目も香りも楽しい名品をぜひ。",
    read: "4 min read",
    image: "latest-food.png",
    href: "/blog/new-food-menu",
  },
  {
    category: "NEWS",
    date: "2024.07.09",
    title: "営業時間変更のお知らせ",
    text: "7月12日の営業時間が変更となります。詳しくはこちらをご確認ください。",
    read: "4 min read",
    image: "latest-news.png",
    href: "/blog/business-hours-update",
  },
];

const trending = [
  ["01", "朝までの楽しみ方10選", "12.5K views", "latest-event.png"],
  ["02", "初めてのダーツ完全ガイド", "9.8K views", "article-darts.png"],
  ["03", "女子会におすすめの理由", "8.7K views", "hero-party.png"],
  ["04", "誕生日サプライズのコツ", "7.6K views", "video-party.png"],
  ["05", "カラオケで盛り上がる曲", "6.9K views", "video-karaoke.png"],
  ["06", "深夜ダーツと楽しむ夜", "5.1K views", "article-cocktail.png"],
  ["07", "おすすめフードメニュー", "4.8K views", "latest-food.png"],
  ["08", "夜のパーティー成功の秘訣", "4.3K views", "hero-party.png"],
  ["09", "映えスポットおすすめ記事", "4.1K views", "hero-city-clean.png"],
  ["10", "鶴千で遊ぶ前に読む記事", "3.9K views", "editor-photo.png"],
].map(([rank, title, views, image]) => ({ rank, title, views, image }));

const topics = [
  { label: "歌舞伎町", icon: Camera },
  { label: "DARTS", icon: Target },
  { label: "KARAOKE", icon: Mic2 },
  { label: "女子会", icon: Users },
  { label: "誕生日", icon: Gift },
  { label: "貸切", icon: Grid2X2 },
  { label: "二次会", icon: Wine },
  { label: "観光", icon: Star },
];

const series = [
  { title: "歌舞伎町ガイド", count: "全12編", image: "series-guide.png" },
  { title: "初心者ダーツ講座", count: "全10編", image: "series-darts.png" },
  { title: "カクテル図鑑", count: "全8編", image: "series-cocktail.png" },
];

const videos = [
  { title: "DJ NIGHT 2024", time: "3:16", image: "video-dj.png" },
  { title: "ダーツトーナメント", time: "2:16", image: "video-darts.png" },
  { title: "バースデーサプライズ", time: "2:18", image: "video-party.png" },
  { title: "カラオケバトル", time: "2:15", image: "video-karaoke.png" },
];

const reviews = [
  ["ゆうたさん", "ローストビーフが絶品！お酒にも合うし最高です！"],
  ["Mikaさん", "チーズフォンデュが濃厚で美味しすぎる！"],
  ["Takuさん", "深夜でも美味しいご飯が食べられるのが嬉しい！"],
  ["Lisaさん", "料理のクオリティが高くていつも頼みます！"],
  ["ケンジさん", "ダーツの合間に食べる料理が最高の楽しみ！"],
];

const authors = [
  { name: "YUKA", role: "Writer / Writer", image: "author-yuka.png" },
  { name: "TAKU", role: "Reporter", image: "author-taku.png" },
  { name: "MIHO", role: "Event Planner", image: "author-miho.png" },
  { name: "KENJI", role: "Darts Player", image: "author-kenji.png" },
];

function SectionTitle({ children, action }: { children: ReactNode; action?: ReactNode }) {
  return (
    <header className="blog-section-title">
      <h2>{children}</h2>
      {action ? <div>{action}</div> : null}
    </header>
  );
}

function GoldButton({ href, children, tone = "gold" }: { href: string; children: ReactNode; tone?: "gold" | "green" | "purple" }) {
  return (
    <Link href={href} className={`blog-button blog-button--${tone}`}>
      {children}
      <ArrowRight aria-hidden="true" />
    </Link>
  );
}

function Tag({ children }: { children: ReactNode }) {
  return <span className="blog-tag">{children}</span>;
}

function ArticleCard({
  image,
  category,
  date,
  title,
  text,
  href,
  compact = false,
}: {
  image: string;
  category: string;
  date: string;
  title: string;
  text: string;
  href: string;
  compact?: boolean;
}) {
  return (
    <article className={compact ? "blog-card blog-card--compact" : "blog-card"}>
      <Link href={href} className="blog-card-image">
        <Image src={`${cleanBase}/${image}`} alt="" width={560} height={330} loading="eager" />
      </Link>
      <div className="blog-card-body">
        <p className="blog-meta">
          <Tag>{category}</Tag>
          <time>{date}</time>
        </p>
        <h3>{title}</h3>
        <p>{text}</p>
        <Link href={href} className="blog-read-more">
          READ MORE <ArrowRight aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}

export function TsurusenBlogPixelPage() {
  return (
    <div className="tsurusen-blog-dom-page" id="top">
      <style>{blogCss}</style>

      <TsurusenTopHeader active="BLOG" />

      <section className="blog-hero">
        <div className="blog-hero-copy">
          <h1>THE JOURNAL</h1>
          <p>
            Stories.
            <br />
            Guides.
            <br />
            Inspiration.
          </p>
          <span className="blog-scroll">SCROLL</span>
        </div>
        <div className="blog-hero-gallery">
          <Image src={`${cleanBase}/hero-city-clean.png`} alt="Kabukicho city lights" width={534} height={446} priority />
          <Image src={`${cleanBase}/hero-party.png`} alt="Guests enjoying drinks at TSURUSEN" width={790} height={446} priority />
        </div>
      </section>

      <main className="blog-main">
        <section className="blog-editor-grid" aria-labelledby="editor-title">
          <article className="blog-photo-card">
            <Image src={`${cleanBase}/editor-photo.png`} alt="Cocktails and food overlooking Kabukicho" width={824} height={402} loading="eager" />
          </article>
          <article className="blog-card blog-editor-card">
            <SectionTitle>EDITOR&apos;S PICK</SectionTitle>
            <p className="blog-meta">
              <time>2024.07.15</time>
              <Tag>EVENT</Tag>
            </p>
            <h2 id="editor-title">歌舞伎町の夜をもっと楽しむ、大人の遊び方ガイド</h2>
            <p>ダーツもカラオケも、ただ遊ぶだけじゃもったいない。鶴千だからこそ体験できる、ワンランク上の夜の楽しみ方を徹底ガイドします。</p>
            <Link href="/blog/kabukicho-night-guide" className="blog-read-more">
              READ MORE <ArrowRight aria-hidden="true" />
            </Link>
          </article>
        </section>

        <nav className="blog-categories" aria-label="Blog categories">
          {categories.map((category, index) => (
            <Link href={`/blog#${category.toLowerCase().replaceAll(" ", "-")}`} key={category} className={index === 0 ? "active" : undefined}>
              {category}
            </Link>
          ))}
          <Link href="/blog#articles" aria-label="Article grid">
            <Grid2X2 aria-hidden="true" />
          </Link>
        </nav>

        <section className="blog-content-grid" id="articles">
          <div className="blog-content-main">
            <section className="blog-feature-layout" aria-label="Featured articles">
              <ArticleCard
                image="article-darts.png"
                category="GUIDE"
                date="2024.07.12"
                title="ダーツ初心者でも楽しめる！勝つためのコツとおすすめゲーム紹介"
                text="フォームの基本から盛り上がるゲームまで、初めてでもすぐ楽しめるポイントをまとめました。"
                href="/blog/kabukicho-night-guide"
              />
              <div className="blog-side-stack">
                <ArticleCard
                  compact
                  image="article-cocktail.png"
                  category="DRINK"
                  date="2024.07.10"
                  title="バーテンダーが教える、夏に飲みたいオリジナルカクテル5選"
                  text="爽やかで写真映えする一杯を紹介。"
                  href="/blog/original-cocktail"
                />
                <ArticleCard
                  compact
                  image="article-kabukicho.png"
                  category="KABUKICHO"
                  date="2024.07.08"
                  title="歌舞伎町の最新スポットと絶景の楽しみ方"
                  text="夜の街を安心して歩くためのガイド。"
                  href="/blog/kabukicho-spots"
                />
              </div>
            </section>

            <section className="blog-panel" id="latest">
              <SectionTitle
                action={
                  <Link href="/blog#latest" className="blog-mini-link">
                    VIEW ALL <ArrowRight aria-hidden="true" />
                  </Link>
                }
              >
                LATEST ARTICLES
              </SectionTitle>
              <div className="blog-latest-grid">
                {latestArticles.map((article) => (
                  <ArticleCard key={article.title} {...article} compact />
                ))}
              </div>
            </section>

            <section className="blog-tools-grid">
              <article className="blog-panel" id="search">
                <SectionTitle>SEARCH ARTICLES</SectionTitle>
                <label className="blog-search-box">
                  <span>キーワードを入力してください</span>
                  <input type="search" aria-label="記事を検索" />
                  <Search aria-hidden="true" />
                </label>
                <h3>POPULAR KEYWORDS</h3>
                <div className="blog-keywords">
                  {["会員登録", "ダーツ", "グルメ", "飲み会", "女子会", "二次会", "誕生日", "イベント", "おしゃれ"].map((keyword) => (
                    <Link href={`/blog#${keyword}`} key={keyword}>
                      {keyword}
                    </Link>
                  ))}
                </div>
              </article>

              <article className="blog-panel" id="topics">
                <SectionTitle>TOPICS</SectionTitle>
                <div className="blog-topic-grid">
                  {topics.map((topic) => {
                    const Icon = topic.icon;
                    return (
                      <Link href={`/blog#${topic.label}`} key={topic.label}>
                        <Icon aria-hidden="true" />
                        <span>{topic.label}</span>
                      </Link>
                    );
                  })}
                </div>
              </article>
            </section>

            <section className="blog-split-grid">
              <article className="blog-panel" id="series">
                <SectionTitle>FEATURED SERIES</SectionTitle>
                <div className="blog-series-grid">
                  {series.map((item) => (
                    <Link href="/blog/series/kabukicho-guide" key={item.title} className="blog-series-card">
                      <Image src={`${cleanBase}/${item.image}`} alt="" width={220} height={110} loading="eager" />
                      <span>
                        <strong>{item.title}</strong>
                        <small>{item.count}</small>
                      </span>
                    </Link>
                  ))}
                </div>
              </article>

              <article className="blog-panel" id="instagram">
                <SectionTitle
                  action={
                    <Link href="https://www.instagram.com/" className="blog-mini-link">
                      VIEW ALL <ArrowRight aria-hidden="true" />
                    </Link>
                  }
                >
                  INSTAGRAM PICKS
                </SectionTitle>
                <Image src={`${cleanBase}/instagram-strip.png`} alt="Instagram picks from TSURUSEN" width={584} height={156} loading="eager" />
              </article>
            </section>

            <section className="blog-split-grid blog-split-grid--wide">
              <article className="blog-panel" id="videos">
                <SectionTitle>VIDEO STORIES</SectionTitle>
                <div className="blog-video-grid">
                  {videos.map((video) => (
                    <Link href="/blog#videos" className="blog-video-card" key={video.title}>
                      <Image src={`${cleanBase}/${video.image}`} alt="" width={230} height={126} loading="eager" />
                      <PlayCircle aria-hidden="true" />
                      <strong>{video.title}</strong>
                      <small>{video.time}</small>
                    </Link>
                  ))}
                </div>
              </article>
              <article className="blog-panel">
                <SectionTitle
                  action={
                    <Link href="/blog#lisa" className="blog-mini-link">
                      VIEW ALL <ArrowRight aria-hidden="true" />
                    </Link>
                  }
                >
                  LISA &amp; A.I.
                </SectionTitle>
                <Image src={`${cleanBase}/lisa-strip.png`} alt="Lisa and AI curated nightlife images" width={384} height={156} loading="eager" />
              </article>
            </section>

            <section className="blog-panel" id="reviews">
              <SectionTitle>CUSTOMER REVIEWS</SectionTitle>
              <div className="blog-review-grid">
                {reviews.map(([name, text]) => (
                  <article className="blog-review-card" key={name}>
                    <strong>{name}</strong>
                    <span>★★★★★</span>
                    <p>{text}</p>
                  </article>
                ))}
              </div>
            </section>

            <section className="blog-split-grid" id="newsletter">
              <article className="blog-panel">
                <SectionTitle>NEWSLETTER</SectionTitle>
                <p>最新情報やお得な情報をお届けします。</p>
                <form className="blog-newsletter">
                  <label>
                    <span>メールアドレスを入力</span>
                    <input type="email" autoComplete="email" />
                  </label>
                  <button type="submit">
                    登録する
                    <ArrowRight aria-hidden="true" />
                  </button>
                </form>
                <div className="blog-subscribe-links">
                  <Link href="https://line.me/R/ti/p/@tsurusen">
                    <Mail aria-hidden="true" />
                    LINEで受け取る
                  </Link>
                  <Link href="https://www.instagram.com/">
                    <Camera aria-hidden="true" />
                    Instagramフォロー
                  </Link>
                </div>
              </article>

              <article className="blog-panel" id="authors">
                <SectionTitle>AUTHOR</SectionTitle>
                <div className="blog-author-grid">
                  {authors.map((author) => (
                    <Link href={`/blog#author-${author.name.toLowerCase()}`} className="blog-author-card" key={author.name}>
                      <Image src={`${cleanBase}/${author.image}`} alt="" width={76} height={76} loading="eager" />
                      <strong>{author.name}</strong>
                      <small>{author.role}</small>
                    </Link>
                  ))}
                </div>
              </article>
            </section>
          </div>

          <aside className="blog-sidebar" aria-label="Trending articles">
            <section className="blog-panel blog-trending">
              <SectionTitle>TRENDING</SectionTitle>
              <div className="blog-trending-list">
                {trending.map((item) => (
                  <Link href="/blog/kabukicho-night-guide" key={`${item.rank}-${item.title}`}>
                    <strong>{item.rank}</strong>
                    <Image src={`${cleanBase}/${item.image}`} alt="" width={82} height={56} loading="eager" />
                    <span>
                      {item.title}
                      <small>{item.views}</small>
                    </span>
                  </Link>
                ))}
              </div>
            </section>
          </aside>
        </section>

        <section className="blog-bottom-cta" id="reserve">
          <Image src={`${cleanBase}/cta-left.png`} alt="" width={640} height={244} loading="eager" />
          <div>
            <h2>YOUR NIGHT STARTS HERE</h2>
            <p>最高の夜を、ここから。</p>
            <div className="blog-cta-buttons">
              <GoldButton href="/reservation">WEB予約</GoldButton>
              <GoldButton href="https://line.me/R/ti/p/@tsurusen" tone="green">
                LINE予約
              </GoldButton>
              <GoldButton href="tel:03-XXXX-XXXX" tone="purple">
                電話する
              </GoldButton>
            </div>
          </div>
          <Image src={`${cleanBase}/cta-right.png`} alt="" width={462} height={244} loading="eager" />
        </section>
      </main>

      <nav className="blog-fixed-cta" aria-label="Quick blog actions">
        <Link href="/reservation">
          <CalendarDays aria-hidden="true" />
          WEB予約
        </Link>
        <Link href="https://line.me/R/ti/p/@tsurusen">
          <MessageCircle aria-hidden="true" />
          LINE予約
        </Link>
        <Link href="tel:03-XXXX-XXXX">
          <Phone aria-hidden="true" />
          電話する
        </Link>
        <Link href="#search">
          <Search aria-hidden="true" />
          検索する
        </Link>
        <Link href="#top">
          <ChevronUp aria-hidden="true" />
          TOP
        </Link>
      </nav>
    </div>
  );
}

const blogCss = `
body:has(.tsurusen-blog-dom-page) > header,
body:has(.tsurusen-blog-dom-page) > footer,
body:has(.tsurusen-blog-dom-page) > .mobile-sticky-cta,
body:has(.tsurusen-blog-dom-page) > .skip-link {
  display: none;
}

body:has(.tsurusen-blog-dom-page) {
  min-width: 0;
}

body:has(.tsurusen-blog-dom-page) main {
  min-width: 0;
  padding-bottom: 0;
}

.tsurusen-blog-dom-page,
.tsurusen-blog-dom-page * {
  box-sizing: border-box;
}

.tsurusen-blog-dom-page {
  --gold: #d8b15a;
  --gold-soft: #f2c94c;
  --paper: #fff8ec;
  --muted: rgba(255, 248, 236, 0.72);
  --border: rgba(212, 176, 83, 0.55);
  --panel: #0b0b0b;
  min-height: 100svh;
  padding-bottom: 0;
  background:
    radial-gradient(circle at 18% 6%, rgba(140, 87, 25, 0.22), transparent 24rem),
    radial-gradient(circle at 80% 14%, rgba(96, 18, 138, 0.16), transparent 26rem),
    #050505;
  color: var(--paper);
  font-family: var(--font-noto-sans-jp), "Noto Sans JP", "Yu Gothic", "Meiryo", system-ui, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: geometricPrecision;
  font-feature-settings: "kern";
}

.blog-header {
  display: grid;
  grid-template-columns: minmax(230px, clamp(260px, 16vw, 310px)) 1fr auto;
  gap: clamp(16px, 2vw, 30px);
  align-items: center;
  width: min(calc(100% - clamp(24px, 4vw, 64px)), 1800px);
  margin: 0 auto;
  padding: clamp(18px, 2.4vw, 32px) clamp(16px, 2.8vw, 42px);
  border-bottom: 1px solid rgba(212, 176, 83, 0.25);
  background: linear-gradient(90deg, rgba(5, 5, 5, 0.98), rgba(12, 12, 12, 0.9));
}

.blog-logo {
  display: inline-flex;
  width: max-content;
  max-width: 100%;
  align-items: center;
  gap: 14px;
  color: var(--gold);
  text-decoration: none;
}

.blog-logo img {
  width: clamp(42px, 4.4vw, 64px);
  height: auto;
  object-fit: contain;
}

.blog-logo span {
  display: grid;
  gap: 3px;
  white-space: nowrap;
  font-family: var(--font-oswald), sans-serif;
  font-size: clamp(24px, 2.2vw, 40px);
  font-weight: 800;
  letter-spacing: 0.12em;
  line-height: 1;
}

.blog-logo small {
  font-size: clamp(8px, 0.78vw, 12px);
  letter-spacing: 0.24em;
}

.blog-nav {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: clamp(12px, 1.25vw, 22px);
  min-width: 0;
}

.blog-nav a,
.blog-reserve {
  color: var(--paper);
  font-family: var(--font-oswald), sans-serif;
  font-size: clamp(12px, 0.78vw, 15px);
  font-weight: 900;
  letter-spacing: 0.08em;
  text-decoration: none;
  white-space: nowrap;
}

.blog-nav a.active {
  color: var(--gold-soft);
  border-bottom: 2px solid var(--gold-soft);
  padding-bottom: 8px;
  text-shadow: 0 0 18px rgba(242, 201, 76, 0.45);
}

.blog-reserve {
  display: inline-flex;
  min-height: 48px;
  align-items: center;
  justify-content: center;
  padding: 0 24px;
  border: 1px solid var(--border);
  border-radius: 10px;
  background: rgba(5, 5, 5, 0.62);
}

.blog-hero {
  display: grid;
  grid-template-columns: minmax(360px, 0.75fr) minmax(0, 1.25fr);
  gap: clamp(28px, 4vw, 70px);
  align-items: center;
  width: min(calc(100% - clamp(24px, 4vw, 64px)), 1800px);
  min-height: clamp(520px, 72svh, 760px);
  margin: 0 auto;
  padding: clamp(80px, 8vh, 140px) clamp(20px, 3vw, 56px);
  background:
    linear-gradient(90deg, rgba(5, 5, 5, 0.96), rgba(5, 5, 5, 0.78) 42%, rgba(5, 5, 5, 0.32)),
    radial-gradient(circle at 76% 30%, rgba(212, 176, 83, 0.12), transparent 34rem);
}

.blog-hero-copy,
.blog-hero-gallery {
  min-width: 0;
}

.blog-hero h1 {
  margin: 0;
  color: #fffaf2;
  font-family: "Playfair Display", "Noto Serif JP", serif;
  font-size: clamp(56px, 5.9vw, 112px);
  font-weight: 500;
  letter-spacing: 0.02em;
  line-height: 1.05;
  white-space: pre-line;
}

.blog-hero-copy p {
  margin: clamp(24px, 3vw, 44px) 0 0;
  color: var(--gold);
  font-family: "Playfair Display", "Noto Serif JP", serif;
  font-size: clamp(24px, 2.5vw, 44px);
  line-height: 1.26;
}

.blog-scroll {
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  gap: 9px;
  margin-top: 34px;
  color: var(--paper);
  font-family: var(--font-oswald), sans-serif;
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.18em;
}

.blog-scroll::after {
  content: "";
  width: 16px;
  height: 34px;
  border: 2px solid var(--gold-soft);
  border-radius: 999px;
  box-shadow: 0 0 18px rgba(242, 201, 76, 0.35);
}

.blog-hero-gallery {
  display: grid;
  grid-template-columns: 0.82fr 1.18fr;
  gap: 0;
  align-items: stretch;
}

.blog-hero-gallery img {
  width: 100%;
  min-height: clamp(260px, 32vw, 460px);
  object-fit: cover;
  border: 1px solid rgba(212, 176, 83, 0.25);
}

.blog-main {
  display: flex;
  flex-direction: column;
  gap: clamp(32px, 4vw, 56px);
  width: min(calc(100% - clamp(24px, 6vw, 96px)), 1500px);
  margin: 0 auto;
  padding-block: clamp(48px, 6vh, 96px);
}

.blog-card,
.blog-panel,
.blog-photo-card {
  min-width: 0;
  border: 1px solid var(--border);
  border-radius: 14px;
  background: linear-gradient(180deg, rgba(18, 18, 18, 0.96), rgba(7, 7, 7, 0.96));
  box-shadow: 0 0 28px rgba(212, 176, 83, 0.08);
}

.blog-card,
.blog-panel {
  padding: clamp(18px, 2vw, 28px);
}

.blog-card img,
.blog-photo-card img,
.blog-panel img,
.blog-bottom-cta img {
  display: block;
  max-width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 10px;
}

.blog-editor-grid {
  display: grid;
  grid-template-columns: 1.08fr 0.92fr;
  gap: clamp(22px, 3vw, 34px);
  align-items: stretch;
}

.blog-photo-card img {
  width: 100%;
  height: 100%;
  min-height: 310px;
  object-fit: cover;
}

.blog-editor-card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 18px;
}

.blog-section-title {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  margin-bottom: 18px;
}

.blog-section-title h2 {
  margin: 0;
  color: var(--gold);
  font-family: var(--font-bebas), var(--font-oswald), sans-serif;
  font-size: clamp(28px, 2.8vw, 52px);
  font-weight: 900;
  letter-spacing: 0.08em;
  line-height: 0.95;
}

.blog-editor-card > h2 {
  margin: 0;
  color: var(--paper);
  font-family: "Noto Serif JP", serif;
  font-size: clamp(25px, 2.5vw, 44px);
  font-weight: 700;
  line-height: 1.48;
}

.blog-editor-card > p,
.blog-card-body > p,
.blog-panel > p,
.blog-review-card p {
  color: var(--muted);
  font-size: clamp(14px, 1.1vw, 18px);
  line-height: 1.8;
}

.blog-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  align-items: center;
  margin: 0;
  color: rgba(216, 177, 90, 0.84);
  font-family: var(--font-oswald), sans-serif;
  font-size: 13px;
  font-weight: 800;
  letter-spacing: 0.08em;
}

.blog-tag {
  display: inline-flex;
  align-items: center;
  min-height: 22px;
  padding: 3px 9px;
  border: 1px solid rgba(212, 176, 83, 0.65);
  border-radius: 6px;
  color: var(--gold-soft);
  font-size: 12px;
  line-height: 1;
}

.blog-read-more,
.blog-mini-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: var(--gold-soft);
  font-family: var(--font-oswald), sans-serif;
  font-size: 13px;
  font-weight: 900;
  letter-spacing: 0.1em;
  text-decoration: none;
}

.blog-categories {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  align-items: center;
}

.blog-categories a {
  display: inline-flex;
  min-width: 100px;
  min-height: 48px;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
  border: 1px solid rgba(212, 176, 83, 0.75);
  border-radius: 9px;
  background: rgba(9, 9, 9, 0.92);
  color: var(--paper);
  font-family: var(--font-oswald), sans-serif;
  font-size: clamp(13px, 1vw, 16px);
  font-weight: 900;
  letter-spacing: 0.08em;
  text-decoration: none;
}

.blog-categories a.active {
  color: #050505;
  background: linear-gradient(180deg, #ffe78d, #b98922);
  box-shadow: 0 0 24px rgba(212, 176, 83, 0.35);
}

.blog-content-grid {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(290px, 360px);
  gap: 32px;
  align-items: start;
}

.blog-content-main {
  display: flex;
  min-width: 0;
  flex-direction: column;
  gap: clamp(26px, 3vw, 42px);
}

.blog-feature-layout {
  display: grid;
  grid-template-columns: 0.92fr 1.08fr;
  gap: 24px;
}

.blog-side-stack {
  display: grid;
  gap: 24px;
}

.blog-card {
  display: grid;
  gap: 18px;
  transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;
}

.blog-card:hover,
.blog-panel:hover {
  border-color: rgba(242, 201, 76, 0.85);
  box-shadow: 0 0 30px rgba(212, 176, 83, 0.18);
}

.blog-card-image {
  display: block;
}

.blog-card-image img {
  width: 100%;
  aspect-ratio: 16 / 9;
  object-fit: cover;
}

.blog-card-body {
  display: grid;
  gap: 12px;
}

.blog-card-body h3 {
  margin: 0;
  color: var(--paper);
  font-size: clamp(20px, 1.8vw, 32px);
  font-weight: 900;
  line-height: 1.4;
}

.blog-card-body p {
  margin: 0;
}

.blog-card--compact {
  grid-template-columns: minmax(120px, 0.42fr) minmax(0, 1fr);
  align-items: center;
}

.blog-card--compact .blog-card-image img {
  aspect-ratio: 4 / 3;
}

.blog-latest-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 22px;
}

.blog-latest-grid .blog-card--compact {
  grid-template-columns: 1fr;
}

.blog-tools-grid,
.blog-split-grid {
  display: grid;
  grid-template-columns: 0.95fr 1.25fr;
  gap: 24px;
}

.blog-split-grid--wide {
  grid-template-columns: 1.35fr 0.65fr;
}

.blog-search-box {
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: 8px;
  align-items: center;
  padding: 10px 12px;
  border: 1px solid rgba(212, 176, 83, 0.38);
  border-radius: 8px;
  color: rgba(255, 248, 236, 0.55);
}

.blog-search-box span {
  grid-column: 1 / -1;
  font-size: 12px;
}

.blog-search-box input {
  min-width: 0;
  border: 0;
  outline: 0;
  background: transparent;
  color: var(--paper);
  font-size: 16px;
}

.blog-search-box svg,
.blog-topic-grid svg,
.blog-fixed-cta svg {
  color: var(--gold-soft);
}

.blog-panel h3 {
  margin: 22px 0 12px;
  color: var(--gold);
  font-family: var(--font-oswald), sans-serif;
  font-size: 16px;
  letter-spacing: 0.08em;
}

.blog-keywords {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.blog-keywords a {
  display: inline-flex;
  min-height: 32px;
  align-items: center;
  padding: 4px 12px;
  border: 1px solid rgba(212, 176, 83, 0.35);
  border-radius: 7px;
  color: var(--paper);
  font-size: 13px;
  text-decoration: none;
}

.blog-topic-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 14px;
}

.blog-topic-grid a {
  display: grid;
  min-height: 112px;
  place-items: center;
  gap: 8px;
  padding: 14px 8px;
  border: 1px solid rgba(212, 176, 83, 0.44);
  border-radius: 10px;
  color: var(--paper);
  font-size: 13px;
  font-weight: 800;
  text-align: center;
  text-decoration: none;
}

.blog-topic-grid svg {
  width: 30px;
  height: 30px;
}

.blog-series-grid,
.blog-video-grid,
.blog-review-grid,
.blog-author-grid {
  display: grid;
  gap: 16px;
}

.blog-series-grid {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.blog-series-card,
.blog-video-card,
.blog-author-card {
  display: grid;
  gap: 10px;
  min-width: 0;
  color: var(--paper);
  text-decoration: none;
}

.blog-series-card img,
.blog-video-card img {
  width: 100%;
  aspect-ratio: 16 / 8;
  object-fit: cover;
}

.blog-series-card strong,
.blog-video-card strong,
.blog-author-card strong {
  font-size: 14px;
  line-height: 1.4;
}

.blog-series-card small,
.blog-video-card small,
.blog-author-card small {
  color: var(--muted);
  font-size: 12px;
  line-height: 1.4;
}

.blog-panel > img {
  width: 100%;
  aspect-ratio: 16 / 5;
  object-fit: cover;
}

.blog-video-grid {
  grid-template-columns: repeat(4, minmax(0, 1fr));
}

.blog-video-card {
  position: relative;
}

.blog-video-card > svg {
  justify-self: center;
  color: var(--gold-soft);
}

.blog-review-grid {
  grid-template-columns: repeat(5, minmax(0, 1fr));
}

.blog-review-card {
  display: grid;
  gap: 8px;
  min-width: 0;
  padding: 16px;
  border: 1px solid rgba(212, 176, 83, 0.36);
  border-radius: 10px;
  background: rgba(5, 5, 5, 0.46);
}

.blog-review-card strong {
  font-size: 14px;
}

.blog-review-card span {
  color: var(--gold-soft);
  font-size: 14px;
}

.blog-review-card p {
  margin: 0;
  font-size: 14px;
}

.blog-newsletter {
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: 12px;
  margin-top: 18px;
}

.blog-newsletter label {
  display: grid;
  gap: 7px;
}

.blog-newsletter label span {
  color: rgba(255, 248, 236, 0.58);
  font-size: 12px;
}

.blog-newsletter input {
  width: 100%;
  min-height: 46px;
  border: 1px solid rgba(212, 176, 83, 0.4);
  border-radius: 8px;
  background: rgba(5, 5, 5, 0.62);
  color: var(--paper);
  padding: 0 14px;
}

.blog-newsletter button {
  display: inline-flex;
  min-height: 46px;
  align-items: center;
  gap: 8px;
  align-self: end;
  border: 1px solid rgba(212, 176, 83, 0.72);
  border-radius: 8px;
  background: linear-gradient(180deg, rgba(216, 177, 90, 0.85), rgba(96, 63, 10, 0.8));
  color: var(--paper);
  font-weight: 900;
  padding: 0 18px;
}

.blog-subscribe-links {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-top: 18px;
}

.blog-subscribe-links a {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: var(--muted);
  font-size: 13px;
  text-decoration: none;
}

.blog-author-grid {
  grid-template-columns: repeat(4, minmax(0, 1fr));
}

.blog-author-card {
  align-items: center;
  justify-items: center;
  padding: 14px 8px;
  border: 1px solid rgba(212, 176, 83, 0.35);
  border-radius: 10px;
  text-align: center;
}

.blog-author-card img {
  width: 58px;
  height: 58px;
  border-radius: 999px;
  object-fit: cover;
}

.blog-sidebar {
  min-width: 0;
}

.blog-trending {
  position: sticky;
  top: 24px;
}

.blog-trending-list {
  display: grid;
  gap: 14px;
}

.blog-trending-list a {
  display: grid;
  grid-template-columns: 34px 74px minmax(0, 1fr);
  gap: 12px;
  align-items: center;
  color: var(--paper);
  text-decoration: none;
}

.blog-trending-list strong {
  color: var(--gold-soft);
  font-family: var(--font-oswald), sans-serif;
  font-size: 22px;
}

.blog-trending-list img {
  width: 74px;
  height: 52px;
  object-fit: cover;
}

.blog-trending-list span {
  min-width: 0;
  font-size: 14px;
  font-weight: 800;
  line-height: 1.45;
}

.blog-trending-list small {
  display: block;
  color: var(--muted);
  font-size: 12px;
  font-weight: 600;
}

.blog-bottom-cta {
  display: grid;
  grid-template-columns: 0.7fr 1fr 0.55fr;
  gap: 26px;
  align-items: center;
  height: auto;
  max-height: none;
  padding: clamp(24px, 3vw, 42px) clamp(24px, 3vw, 42px) clamp(56px, 5vw, 92px);
  border: 1px solid var(--border);
  border-radius: 18px;
  background:
    linear-gradient(90deg, rgba(5, 5, 5, 0.86), rgba(5, 5, 5, 0.68)),
    #0b0b0b;
}

.blog-bottom-cta img {
  width: 100%;
  min-height: 140px;
  object-fit: cover;
}

.blog-bottom-cta h2 {
  margin: 0;
  color: #fffaf2;
  font-family: "Playfair Display", "Noto Serif JP", serif;
  font-size: clamp(34px, 3.6vw, 76px);
  font-weight: 500;
  line-height: 1.05;
}

.blog-bottom-cta p {
  margin: 12px 0 0;
  color: var(--gold);
  font-size: clamp(16px, 1.4vw, 24px);
  font-weight: 800;
}

.blog-cta-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  margin-top: 24px;
}

.blog-button {
  display: inline-flex;
  min-height: 54px;
  min-width: min(100%, 190px);
  align-items: center;
  justify-content: center;
  gap: 10px;
  border: 1px solid rgba(212, 176, 83, 0.72);
  border-radius: 12px;
  background: rgba(5, 5, 5, 0.72);
  color: var(--paper);
  font-family: var(--font-oswald), sans-serif;
  font-size: 15px;
  font-weight: 900;
  letter-spacing: 0.08em;
  text-decoration: none;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.blog-button:hover {
  transform: translateY(-3px) scale(1.02);
  box-shadow: 0 0 24px rgba(212, 176, 83, 0.35);
}

.blog-button--green {
  border-color: rgba(36, 220, 82, 0.72);
  box-shadow: 0 0 18px rgba(36, 220, 82, 0.16);
}

.blog-button--purple {
  border-color: rgba(230, 74, 218, 0.72);
  box-shadow: 0 0 18px rgba(230, 74, 218, 0.16);
}

.blog-fixed-cta {
  display: grid;
  gap: 10px;
  position: fixed;
  right: clamp(12px, 2vw, 32px);
  bottom: 28px;
  z-index: 20;
}

.blog-fixed-cta a {
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

@media (max-width: 1100px) {
  .blog-header {
    grid-template-columns: 1fr auto;
  }

  .blog-nav {
    grid-column: 1 / -1;
    justify-content: flex-start;
    order: 3;
  }

  .blog-hero,
  .blog-editor-grid,
  .blog-content-grid,
  .blog-bottom-cta {
    grid-template-columns: 1fr;
    height: auto;
    max-height: none;
    padding-bottom: max(clamp(112px, 26vw, 148px), calc(env(safe-area-inset-bottom) + 112px));
  }

  .blog-content-grid {
    gap: 28px;
  }

  .blog-sidebar {
    order: 2;
  }

  .blog-trending {
    position: static;
  }

  .blog-trending-list {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 900px) {
  .blog-feature-layout,
  .blog-tools-grid,
  .blog-split-grid,
  .blog-split-grid--wide {
    grid-template-columns: 1fr;
  }

  .blog-latest-grid,
  .blog-review-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .blog-video-grid,
  .blog-topic-grid,
  .blog-author-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .blog-fixed-cta {
    left: 12px;
    right: 12px;
    bottom: max(10px, env(safe-area-inset-bottom));
    grid-template-columns: repeat(5, minmax(0, 1fr));
    gap: 8px;
  }

  .blog-fixed-cta a {
    width: auto;
    min-height: 58px;
    border-radius: 14px;
  }

  .tsurusen-blog-dom-page {
    padding-bottom: 82px;
  }
}

@media (max-width: 640px) {
  .blog-header,
  .blog-hero {
    width: calc(100% - 28px);
    grid-template-columns: 1fr;
    padding-inline: 14px;
  }

  .blog-main {
    width: calc(100% - 34px);
  }

  .blog-reserve {
    justify-self: start;
  }

  .blog-nav {
    gap: 9px;
  }

  .blog-nav a,
  .blog-reserve {
    font-size: 11px;
    letter-spacing: 0.04em;
  }

  .blog-logo span {
    font-size: 22px;
  }

  .blog-hero {
    padding-block: clamp(56px, 8vh, 92px);
  }

  .blog-hero h1 {
    font-size: clamp(46px, 15vw, 68px);
  }

  .blog-hero-gallery,
  .blog-card--compact,
  .blog-newsletter {
    grid-template-columns: 1fr;
  }

  .blog-categories a {
    flex: 1 1 calc(50% - 10px);
    min-width: 0;
  }

  .blog-latest-grid,
  .blog-review-grid,
  .blog-trending-list,
  .blog-series-grid,
  .blog-video-grid,
  .blog-topic-grid,
  .blog-author-grid {
    grid-template-columns: 1fr;
  }

  .blog-trending-list a {
    grid-template-columns: 32px 68px minmax(0, 1fr);
  }

  .blog-bottom-cta img:last-child {
    display: none;
  }

  .blog-cta-buttons {
    flex-direction: column;
  }

  .blog-button {
    width: 100%;
  }

  .blog-fixed-cta {
    left: 8px;
    right: 8px;
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }

  .blog-fixed-cta a:first-child {
    display: none;
  }
}
`;
