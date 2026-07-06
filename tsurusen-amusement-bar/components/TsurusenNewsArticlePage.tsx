/* eslint-disable @next/next/no-img-element */
import type { CSSProperties } from "react";
import Link from "next/link";
import { TsurusenTopHeader } from "./TsurusenTopHeader";
import {
  ArrowRight,
  Camera,
  CalendarDays,
  ChevronUp,
  Clock3,
  Copy,
  Heart,
  Link as LinkIcon,
  Mail,
  MapPin,
  MessageCircle,
  Search,
  UsersRound,
} from "lucide-react";
import type { NewsArticle, NewsArticleCard } from "@/lib/newsArticles";

type Props = {
  article: NewsArticle;
};

const shareItems = [
  ["Instagram", "https://www.instagram.com/", Camera],
  ["X (Twitter)", "https://x.com/", LinkIcon],
  ["Facebook", "https://www.facebook.com/", UsersRound],
  ["LINE", "https://line.me/R/ti/p/@tsurusen", MessageCircle],
  ["Copy Link", "#", Copy],
] as const;

function ArticleCard({ card }: { card: NewsArticleCard }) {
  return (
    <Link className="news-card" href={card.href}>
      <img src={card.image} alt="" />
      <span>{card.category}</span>
      <h3>{card.title}</h3>
      <p>
        <time>{card.date}</time>
        <small>{card.readTime}</small>
      </p>
    </Link>
  );
}

export function TsurusenNewsArticlePage({ article }: Props) {
  const heroStyle = {
    "--news-hero-bg": `url("${article.heroImage}")`,
  } as CSSProperties;

  return (
    <div id="top" className="news-detail-page">
      <style>{styles}</style>

      <TsurusenTopHeader active="BLOG" />

      <section className="news-hero" style={heroStyle}>
        <div className="hero-inner">
          <div className="hero-copy">
            <p className="hero-meta">
              <span>{article.category}</span>
              <time>{article.date}</time>
            </p>
            <h1>{article.title}</h1>
            <p className="hero-subtitle">{article.subtitle}</p>
            <div className="author-line">
              <span>{article.author.initial}</span>
              <p>
                <strong>By {article.author.name}</strong>
                <small>{article.readTime}</small>
              </p>
            </div>
          </div>
          <img className="hero-accent" src={article.heroAccentImage} alt="" />
        </div>
        <a className="scroll-cue" href="#article-content">
          <span>SCROLL</span>
          <i />
        </a>
      </section>

      <main id="article-content" className="article-shell">
        <div className="breadcrumb">
          <Link href="/">Home</Link>
          <span>›</span>
          <Link href="/news">Journal</Link>
          <span>›</span>
          <span>{article.category}</span>
          <span>›</span>
          <strong>{article.subtitle}</strong>
        </div>

        <div className="article-layout">
          <article className="article-main">
            <section className="meta-panel">
              <div>
                <span>CATEGORY</span>
                <strong>{article.category}</strong>
              </div>
              <div>
                <span>DATE</span>
                <strong>{article.date}</strong>
              </div>
              <div>
                <span>AUTHOR</span>
                <strong>{article.author.name}</strong>
              </div>
              <div>
                <span>READING TIME</span>
                <strong>{article.readTime}</strong>
              </div>
              <div className="mini-share">
                <span>SHARE</span>
                <Camera />
                <MessageCircle />
                <Heart />
              </div>
            </section>

            <section className="intro-grid">
              <div>
                <h2>歌舞伎町は、夜のエンターテインメントシティ。</h2>
                {article.intro.map((text) => (
                  <p key={text}>{text}</p>
                ))}
              </div>
              <img src={article.eyecatchImage} alt="歌舞伎町の夜景" />
            </section>

            <blockquote className="quote-box">
              <p>{article.quote}</p>
            </blockquote>

            {article.sections.slice(0, 1).map((section) => (
              <section className="text-section" key={section.heading}>
                <h2>{section.heading}</h2>
                {section.body.map((text) => (
                  <p key={text}>{text}</p>
                ))}
              </section>
            ))}

            <section className="feature-grid">
              {article.featureCards.map((feature) => (
                <article className="feature-card" key={feature.title}>
                  <img src={feature.image} alt="" />
                  <h3>{feature.title}</h3>
                  <strong>{feature.label}</strong>
                  <p>{feature.body}</p>
                </article>
              ))}
            </section>

            <section className="wide-feature">
              <img src="/assets/news/news-main-bar.png" alt="鶴千の店内" />
              <div>
                <h2>{article.sections[1]?.heading}</h2>
                <ul>
                  {article.sections[1]?.body.map((text) => (
                    <li key={text}>{text}</li>
                  ))}
                </ul>
              </div>
            </section>

            <section className="point-panel">
              <span>POINT</span>
              {article.pointItems.map((item, index) => (
                <article key={item.title}>
                  {index === 0 ? <MapPin /> : index === 1 ? <UsersRound /> : <Clock3 />}
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.body}</p>
                  </div>
                </article>
              ))}
            </section>

            <section className="share-section">
              <h2>SHARE THIS ARTICLE</h2>
              <div>
                {shareItems.map(([label, href, Icon]) => (
                  <Link href={href} key={label}>
                    <Icon />
                    {label}
                  </Link>
                ))}
              </div>
            </section>

            <section className="related-section">
              <h2>RELATED ARTICLES</h2>
              <div className="related-grid">
                {article.relatedArticles.map((card) => (
                  <ArticleCard card={card} key={card.title} />
                ))}
              </div>
              <Link className="more-link" href="/news">
                もっと記事を読む
                <ArrowRight />
              </Link>
            </section>
          </article>

          <aside className="article-sidebar">
            <section className="side-panel">
              <h2>TABLE OF CONTENTS</h2>
              <ol>
                {article.tableOfContents.map((item, index) => (
                  <li key={item.label}>
                    <span>{String(index + 1).padStart(2, "0")}.</span>
                    {item.label}
                  </li>
                ))}
              </ol>
            </section>

            <section className="side-panel info-panel">
              <h2>RELATED INFO</h2>
              <img src={article.relatedInfo.image} alt="" />
              <h3>{article.relatedInfo.title}</h3>
              <p>{article.relatedInfo.body}</p>
              <dl>
                <div>
                  <dt>営業時間</dt>
                  <dd>{article.relatedInfo.hours}</dd>
                </div>
                <div>
                  <dt>定休日</dt>
                  <dd>{article.relatedInfo.holiday}</dd>
                </div>
                <div>
                  <dt>住所</dt>
                  <dd>{article.relatedInfo.address}</dd>
                </div>
                <div>
                  <dt>アクセス</dt>
                  <dd>{article.relatedInfo.access}</dd>
                </div>
                <div>
                  <dt>TEL</dt>
                  <dd>{article.relatedInfo.tel}</dd>
                </div>
              </dl>
              <Link href="/access">店舗情報を見る</Link>
            </section>

            <section className="reserve-panel">
              <h2>RESERVE YOUR NIGHT</h2>
              <p>今夜のご予約はこちらから</p>
              <Link href="/reservation">
                WEB予約
                <ArrowRight />
              </Link>
            </section>

            <section className="side-panel">
              <h2>POPULAR ARTICLES</h2>
              <ol className="popular-list">
                {article.popularArticles.map((item, index) => (
                  <li key={item.title}>
                    <span>{String(index + 1).padStart(2, "0")}.</span>
                    <img src={item.image} alt="" />
                    <Link href={item.href}>
                      {item.title}
                      <small>{item.readTime}</small>
                    </Link>
                  </li>
                ))}
              </ol>
            </section>

            <section className="side-panel author-panel">
              <h2>ABOUT THE AUTHOR</h2>
              <div>{article.author.initial}</div>
              <h3>{article.author.name}</h3>
              <p>{article.author.bio}</p>
              <Link href="/news">他の記事を見る</Link>
            </section>

            <section className="side-panel newsletter-panel">
              <h2>NEWSLETTER</h2>
              <p>最新記事やお得な情報をお届けします。</p>
              <label>
                <span>メールアドレス</span>
                <input type="email" placeholder="メールアドレスを入力" />
              </label>
              <button type="button">登録する</button>
              <p>
                <Mail />
                LINEで受け取る / Instagramをフォロー
              </p>
            </section>
          </aside>
        </div>

        <section className="bottom-cta">
          <img src="/assets/news/news-bottom-street.png" alt="" />
          <div>
            <h2>YOUR NIGHT STARTS HERE</h2>
            <p>最高の夜を、ここから。</p>
          </div>
          <nav>
            <Link href="/reservation">WEB予約</Link>
            <Link href="https://line.me/R/ti/p/@tsurusen">LINE予約</Link>
            <Link href="tel:0312345678">電話する</Link>
          </nav>
        </section>
      </main>

      <nav className="mobile-actions" aria-label="Quick actions">
        <Link href="/reservation">
          <CalendarDays />
          WEB
        </Link>
        <Link href="https://line.me/R/ti/p/@tsurusen">
          <MessageCircle />
          LINE
        </Link>
        <Link href="/news">
          <Search />
          NEWS
        </Link>
        <a href="#top">
          <ChevronUp />
          TOP
        </a>
      </nav>
    </div>
  );
}

const styles = `
body:has(.news-detail-page) main { padding-bottom: 0; }
.news-detail-page {
  --gold: #d8b15a;
  --gold2: #f4d36d;
  --line: rgba(212,176,83,.55);
  --panel: rgba(11,11,11,.94);
  --ink: #f8f1e4;
  --muted: rgba(248,241,228,.74);
  min-width: 0;
  color: var(--ink);
  background: radial-gradient(circle at 18% 8%, rgba(212,176,83,.12), transparent 34%), #050505;
  font-family: var(--font-noto-sans-jp), "Noto Sans JP", system-ui, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: geometricPrecision;
  font-feature-settings: "kern";
}
.news-detail-page a { color: inherit; text-decoration: none; }
.news-detail-page img { display:block; max-width:100%; border-radius:10px; object-fit:cover; }
.news-detail-page svg { width: 1.2em; height: 1.2em; flex: 0 0 auto; color: var(--gold2); }
.news-header {
  width: min(96vw, 1760px);
  margin-inline:auto;
  padding-block: clamp(14px,2vw,28px);
  display:grid;
  grid-template-columns:auto minmax(0,1fr) auto;
  align-items:center;
  gap: clamp(16px,2vw,30px);
}
.news-logo {
  display:inline-flex;
  align-items:center;
  gap:12px;
  padding-block:6px;
  color:var(--gold2);
  font-family:var(--font-oswald),sans-serif;
  font-size:clamp(24px,2vw,36px);
  line-height:1.25;
  letter-spacing:.12em;
  font-weight:700;
}
.news-logo img { width:clamp(42px,3.6vw,58px); height:clamp(42px,3.6vw,58px); object-fit:contain; }
.news-logo > span { display:block; padding-block:4px; line-height:1.4; }
.news-logo small { display:block; font-size:clamp(10px,.72vw,13px); line-height:1.45; letter-spacing:.22em; }
.news-header nav {
  display:flex;
  flex-wrap:wrap;
  justify-content:flex-end;
  align-items:center;
  gap:clamp(10px,1.15vw,22px);
}
.news-header nav a,
.reserve-link {
  font-family:var(--font-oswald),sans-serif;
  font-size:clamp(11px,.82vw,15px);
  font-weight:700;
  letter-spacing:.08em;
  line-height:1.3;
  white-space:nowrap;
}
.news-header nav a { padding-block:9px; border-bottom:2px solid transparent; color:rgba(248,241,228,.88); }
.news-header nav a:hover,
.news-header nav .active { color:var(--gold2); border-color:var(--gold); text-shadow:0 0 18px rgba(212,176,83,.45); }
.reserve-link {
  min-height:48px;
  display:inline-flex;
  align-items:center;
  justify-content:center;
  padding-inline:clamp(18px,2vw,30px);
  border:1px solid var(--line);
  border-radius:10px;
}
.news-hero {
  min-height: clamp(520px,72svh,760px);
  height:auto;
  padding-block:clamp(76px,8vh,132px);
  display:flex;
  flex-direction:column;
  justify-content:center;
  background-image:
    linear-gradient(90deg, rgba(5,5,5,.96), rgba(5,5,5,.78) 38%, rgba(5,5,5,.28) 72%, rgba(5,5,5,.74)),
    radial-gradient(circle at 44% 52%, rgba(5,5,5,.42), rgba(5,5,5,.74) 54%, rgba(5,5,5,.96)),
    var(--news-hero-bg);
  background-size:cover;
  background-position:center;
  border-block:1px solid rgba(212,176,83,.18);
}
.hero-inner {
  width:min(94vw,1500px);
  margin-inline:auto;
  display:grid;
  grid-template-columns:minmax(0,1fr) minmax(160px,.34fr);
  align-items:center;
  gap:clamp(28px,5vw,78px);
}
.hero-copy { display:grid; gap:clamp(16px,2.3vw,28px); min-width:0; }
.hero-meta {
  display:flex;
  flex-wrap:wrap;
  align-items:center;
  gap:18px;
  font-family:var(--font-oswald),sans-serif;
  font-size:clamp(14px,1.1vw,18px);
  letter-spacing:.08em;
}
.hero-meta span,
.news-card span {
  width:fit-content;
  display:inline-flex;
  align-items:center;
  justify-content:center;
  border:1px solid rgba(221,70,215,.88);
  border-radius:8px;
  padding:4px 14px;
  color:#f5d1ff;
}
.hero-copy h1 {
  max-width:1000px;
  font-family:"Times New Roman","Noto Serif JP",serif;
  font-size:clamp(58px,7vw,124px);
  font-weight:500;
  letter-spacing:.02em;
  line-height:1.05;
  text-wrap:balance;
  color:#fffaf0;
  text-shadow:0 0 28px rgba(0,0,0,.65);
}
.hero-subtitle {
  max-width:900px;
  font-size:clamp(18px,2vw,34px);
  font-weight:800;
  line-height:1.55;
  letter-spacing:.04em;
}
.author-line { display:flex; align-items:center; gap:16px; }
.author-line > span,
.author-panel div {
  display:inline-flex;
  align-items:center;
  justify-content:center;
  width:56px;
  height:56px;
  border:2px solid var(--gold);
  border-radius:999px;
  color:var(--gold2);
  font-family:"Times New Roman",serif;
  font-size:34px;
}
.author-line strong,
.author-line small { display:block; font-size:15px; line-height:1.55; }
.hero-accent { width:min(100%,260px); height:auto; object-fit:contain; filter:drop-shadow(0 0 24px rgba(0,0,0,.72)); }
.scroll-cue {
  width:fit-content;
  margin:clamp(26px,4vh,46px) auto 0;
  display:grid;
  justify-items:center;
  gap:8px;
  font-family:var(--font-oswald),sans-serif;
  font-size:12px;
  letter-spacing:.08em;
}
.scroll-cue i { width:18px; height:38px; border:2px solid var(--gold); border-radius:999px; }
.article-shell {
  width:min(94vw,1500px);
  margin-inline:auto;
  padding-block:clamp(42px,6vh,96px);
  display:flex;
  flex-direction:column;
  gap:clamp(28px,4vw,52px);
}
.breadcrumb { display:flex; flex-wrap:wrap; align-items:center; gap:10px; color:var(--muted); font-size:clamp(12px,1vw,15px); line-height:1.7; }
.article-layout {
  display:grid;
  grid-template-columns:minmax(0,1fr) minmax(300px,360px);
  align-items:start;
  gap:clamp(28px,3vw,46px);
}
.article-main,
.article-sidebar { min-width:0; display:flex; flex-direction:column; gap:clamp(26px,3vw,42px); }
.meta-panel,
.side-panel,
.reserve-panel,
.feature-card,
.point-panel,
.news-card,
.bottom-cta {
  border:1px solid var(--line);
  border-radius:14px;
  background:linear-gradient(135deg,rgba(255,255,255,.035),transparent 36%),var(--panel);
  box-shadow:0 18px 48px rgba(0,0,0,.34);
}
.meta-panel { display:grid; grid-template-columns:repeat(4,minmax(0,1fr)) auto; }
.meta-panel > div { min-width:0; padding:clamp(16px,1.6vw,24px); border-right:1px solid rgba(212,176,83,.28); }
.meta-panel span,
.side-panel h2,
.share-section h2,
.related-section h2,
.point-panel > span {
  display:block;
  color:var(--gold2);
  font-family:var(--font-oswald),sans-serif;
  font-weight:700;
  letter-spacing:.1em;
  line-height:1.45;
}
.meta-panel strong { display:block; font-size:clamp(14px,1.1vw,18px); line-height:1.55; overflow-wrap:anywhere; }
.mini-share { display:flex; align-items:center; gap:13px; }
.intro-grid {
  display:grid;
  grid-template-columns:minmax(0,1fr) minmax(260px,44%);
  align-items:center;
  gap:clamp(24px,3vw,42px);
}
.intro-grid img { width:100%; aspect-ratio:1.18/1; }
.intro-grid h2,
.text-section h2,
.wide-feature h2 {
  padding-left:18px;
  border-left:3px solid var(--gold);
  font-size:clamp(26px,2.35vw,42px);
  line-height:1.6;
  letter-spacing:.04em;
  text-wrap:balance;
}
.intro-grid p,
.text-section p,
.wide-feature li,
.side-panel p,
.side-panel dd,
.feature-card p,
.point-panel p,
.news-card p,
.info-panel dl,
.newsletter-panel label {
  color:var(--muted);
  font-size:clamp(14px,1.06vw,18px);
  line-height:1.85;
}
.intro-grid div,
.text-section { display:grid; gap:clamp(12px,1.6vw,20px); }
.quote-box {
  padding:clamp(22px,2.8vw,40px);
  border:1px solid var(--line);
  border-radius:12px;
  background:rgba(7,7,7,.84);
}
.quote-box p {
  max-width:780px;
  margin-inline:auto;
  font-family:"Times New Roman","Noto Serif JP",serif;
  font-size:clamp(24px,2.4vw,42px);
  line-height:1.55;
  text-align:center;
  text-wrap:balance;
}
.quote-box p::before,
.quote-box p::after { color:var(--gold2); font-size:1.45em; line-height:1; }
.quote-box p::before { content:"“"; margin-right:.2em; }
.quote-box p::after { content:"”"; margin-left:.2em; }
.feature-grid { display:grid; grid-template-columns:repeat(3,minmax(0,1fr)); gap:clamp(16px,2vw,24px); }
.feature-card { display:grid; gap:14px; padding:clamp(16px,1.7vw,22px); }
.feature-card img { width:100%; aspect-ratio:1.55/1; }
.feature-card h3,
.side-panel h2,
.related-section h2,
.share-section h2 {
  font-family:var(--font-oswald),sans-serif;
  font-size:clamp(20px,1.7vw,30px);
  line-height:1.42;
  letter-spacing:.08em;
}
.feature-card strong { color:var(--gold2); font-size:clamp(15px,1.08vw,18px); line-height:1.5; }
.wide-feature { display:grid; grid-template-columns:minmax(0,1.25fr) minmax(260px,.75fr); align-items:center; gap:clamp(22px,3vw,42px); }
.wide-feature img { width:100%; aspect-ratio:2.35/1; }
.wide-feature ul { display:grid; gap:12px; margin-top:16px; padding-left:0; list-style:none; }
.wide-feature li::before { content:"✓"; margin-right:10px; color:var(--gold2); font-weight:900; }
.point-panel { display:grid; grid-template-columns:auto repeat(3,minmax(0,1fr)); align-items:center; gap:clamp(16px,2vw,28px); padding:clamp(18px,2vw,26px); }
.point-panel article { display:flex; align-items:center; gap:14px; min-width:0; }
.point-panel svg { width:42px; height:42px; }
.point-panel h3 { color:var(--gold2); font-size:clamp(16px,1.25vw,21px); line-height:1.45; }
.share-section,
.related-section { display:grid; gap:clamp(16px,2vw,24px); }
.share-section div { display:grid; grid-template-columns:repeat(5,minmax(0,1fr)); gap:clamp(12px,1.6vw,20px); }
.share-section a,
.more-link,
.reserve-panel a,
.side-panel > a,
.newsletter-panel button,
.bottom-cta nav a {
  min-height:56px;
  display:inline-flex;
  align-items:center;
  justify-content:center;
  gap:10px;
  padding:12px;
  border:1px solid var(--line);
  border-radius:10px;
  background:rgba(8,8,8,.78);
  font-weight:800;
  line-height:1.35;
  text-align:center;
}
.related-grid { display:grid; grid-template-columns:repeat(4,minmax(0,1fr)); gap:clamp(14px,1.8vw,22px); }
.news-card { display:grid; gap:12px; padding:clamp(14px,1.5vw,18px); min-width:0; }
.news-card img { width:100%; aspect-ratio:1.55/1; }
.news-card span { border-color:var(--line); color:var(--gold2); font-family:var(--font-oswald),sans-serif; font-size:12px; }
.news-card h3 { font-size:clamp(15px,1.18vw,18px); line-height:1.55; }
.news-card p { display:flex; justify-content:space-between; gap:8px; font-size:12px; }
.more-link { width:min(100%,420px); margin-inline:auto; }
.side-panel { display:grid; gap:clamp(14px,1.6vw,20px); padding:clamp(18px,2vw,26px); }
.side-panel ol { display:grid; gap:13px; padding-left:0; list-style:none; }
.side-panel li { color:var(--muted); font-size:clamp(13px,1vw,15px); line-height:1.75; }
.side-panel li span { margin-right:10px; color:var(--gold2); font-family:var(--font-oswald),sans-serif; }
.info-panel img { width:100%; aspect-ratio:2.4/1; }
.info-panel h3,
.author-panel h3 { font-size:clamp(18px,1.42vw,24px); line-height:1.55; }
.info-panel dl { display:grid; gap:10px; }
.info-panel dl div { display:grid; grid-template-columns:70px minmax(0,1fr); gap:14px; }
.info-panel dt { color:var(--gold2); font-weight:900; }
.reserve-panel {
  display:grid;
  gap:18px;
  padding:clamp(22px,2.4vw,34px);
  background-image:linear-gradient(90deg,rgba(44,0,47,.88),rgba(5,5,5,.76)),url("/assets/news/news-reserve-bg.png");
  background-size:cover;
  background-position:center;
  border-color:rgba(235,68,214,.7);
}
.reserve-panel h2 { font-family:"Times New Roman",serif; font-size:clamp(29px,2.3vw,42px); font-weight:400; line-height:1.18; color:#ffc9ff; }
.popular-list li { display:grid; grid-template-columns:auto 58px minmax(0,1fr); align-items:center; gap:12px; }
.popular-list img { width:58px; aspect-ratio:1/.78; }
.popular-list a { display:grid; gap:4px; }
.popular-list small { color:var(--muted); font-size:12px; }
.author-panel div { width:64px; height:64px; font-size:40px; }
.author-panel a { justify-self:start; border:0; min-height:auto; padding:0; color:var(--gold2); background:transparent; }
.newsletter-panel label { display:grid; gap:8px; }
.newsletter-panel input {
  width:100%;
  min-height:48px;
  border:1px solid rgba(212,176,83,.38);
  border-radius:8px;
  background:rgba(5,5,5,.8);
  padding-inline:14px;
  color:var(--ink);
}
.newsletter-panel button { width:100%; color:var(--ink); }
.newsletter-panel p:last-child { display:flex; align-items:center; gap:8px; }
.bottom-cta {
  display:grid;
  grid-template-columns:minmax(260px,.9fr) minmax(0,1fr) minmax(300px,.95fr);
  align-items:center;
  gap:clamp(22px,3vw,44px);
  padding:clamp(22px,3vw,36px);
}
.bottom-cta img { width:100%; aspect-ratio:2.3/1; }
.bottom-cta h2 { font-family:"Times New Roman",serif; font-size:clamp(32px,3.2vw,58px); font-weight:400; line-height:1.12; }
.bottom-cta p { margin-top:10px; color:var(--gold2); font-size:clamp(15px,1.2vw,20px); }
.bottom-cta nav { display:grid; grid-template-columns:repeat(3,minmax(0,1fr)); gap:12px; }
.bottom-cta nav a { min-height:54px; }
.mobile-actions { display:none; }
.feature-card,
.news-card,
.share-section a,
.more-link,
.reserve-panel a,
.side-panel > a,
.newsletter-panel button,
.bottom-cta nav a { transition:transform .25s ease, box-shadow .25s ease, border-color .25s ease; }
.feature-card:hover,
.news-card:hover,
.share-section a:hover,
.more-link:hover,
.reserve-panel a:hover,
.side-panel > a:hover,
.newsletter-panel button:hover,
.bottom-cta nav a:hover { transform:translateY(-4px); border-color:rgba(244,211,109,.92); box-shadow:0 0 30px rgba(212,176,83,.24); }
@media (max-width:1180px) {
  .news-header { grid-template-columns:1fr auto; }
  .news-header nav { grid-column:1 / -1; grid-row:2; justify-content:center; }
  .reserve-link { grid-column:2; grid-row:1; }
  .article-layout { grid-template-columns:minmax(0,1fr); }
  .article-sidebar { display:grid; grid-template-columns:repeat(2,minmax(0,1fr)); align-items:start; }
}
@media (max-width:900px) {
  .news-hero { padding-block:clamp(58px,7vh,92px); }
  .hero-inner,
  .intro-grid,
  .wide-feature,
  .bottom-cta { grid-template-columns:1fr; }
  .meta-panel { grid-template-columns:repeat(2,minmax(0,1fr)); }
  .mini-share { grid-column:1 / -1; }
  .feature-grid,
  .related-grid { grid-template-columns:repeat(2,minmax(0,1fr)); }
  .point-panel { grid-template-columns:1fr; }
  .share-section div { grid-template-columns:repeat(2,minmax(0,1fr)); }
  .article-sidebar { grid-template-columns:1fr; }
  .bottom-cta nav { grid-template-columns:1fr; }
}
@media (max-width:620px) {
  .news-header { grid-template-columns:1fr; justify-items:center; }
  .news-logo { text-align:center; }
  .news-header nav { justify-content:center; }
  .reserve-link { grid-column:auto; grid-row:auto; }
  .reserve-link { width:min(100%,280px); }
  .article-shell { width:min(92vw,1500px); }
  .meta-panel,
  .feature-grid,
  .related-grid,
  .share-section div { grid-template-columns:1fr; }
  .meta-panel > div { border-right:0; border-bottom:1px solid rgba(212,176,83,.25); }
  .info-panel dl div { grid-template-columns:1fr; gap:4px; }
  .mobile-actions {
    width:min(100% - 18px,520px);
    margin:0 auto calc(env(safe-area-inset-bottom,0px) + 10px);
    display:grid;
    grid-template-columns:repeat(4,minmax(0,1fr));
    gap:8px;
  }
  .mobile-actions a {
    min-height:54px;
    display:grid;
    place-items:center;
    gap:3px;
    border:1px solid var(--line);
    border-radius:12px;
    background:rgba(6,6,6,.92);
    font-size:11px;
    font-weight:900;
  }
}
`;
