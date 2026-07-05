/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import {
  CalendarDays,
  ChevronRight,
  MessageCircle,
  Phone,
  Star,
} from "lucide-react";

const assetBase = "/assets/tsurusen-food/png";

const navItems = [
  { label: "TOP", href: "/" },
  { label: "ABOUT", href: "/#about" },
  { label: "PRICE & SYSTEM", href: "/pricing" },
  { label: "FOOD MENU", href: "/food-menu", active: true },
  { label: "DRINK MENU", href: "/drink-menu" },
  { label: "ENTERTAINMENT", href: "/play" },
  { label: "SCENE", href: "/#scene" },
  { label: "GALLERY", href: "/#gallery" },
  { label: "CAMPAIGN", href: "/campaigns" },
  { label: "ACCESS", href: "/access" },
];

const popularItems = [
  {
    rank: "BEST",
    title: "ローストビーフ",
    body: "月曜日限定の名物。丁寧に仕上げたローストビーフ",
    price: "¥1,280",
    image: "popular-card-01-roast-beef.png",
  },
  {
    rank: "No.1",
    title: "濃厚チーズフォンデュ",
    body: "とろりチーズとバゲットの王道マリアージュ",
    price: "¥1,580",
    image: "popular-card-02-cheese-fondue.png",
  },
  {
    rank: "No.2",
    title: "特製唐揚げ",
    body: "外はカリッと中はジューシー。特製スパイス仕上げ",
    price: "¥880",
    image: "popular-card-03-karaage.png",
  },
  {
    rank: "No.3",
    title: "ガーリックシュリンプ",
    body: "プリプリの海老をガーリックで香ばしく仕上げました",
    price: "¥1,080",
    image: "popular-card-04-garlic-shrimp.png",
  },
  {
    rank: "No.4",
    title: "生ハム盛り合わせ",
    body: "厳選した生ハムの贅沢な盛り合わせ",
    price: "¥1,180",
    image: "popular-card-05-ham.png",
  },
  {
    rank: "No.5",
    title: "マルゲリータピザ",
    body: "モッツァレラとバジルの王道ピザ",
    price: "¥1,280",
    image: "popular-card-06-pizza.png",
  },
];

const menuTabs = ["おすすめ", "おつまみ", "揚げ物", "肉料理", "ご飯", "デザート"];

const foodItems = [
  { title: "アボカドとサーモンのタルタル", body: "クリーミーなアボカドとサーモンを特製ソースで和えました", price: "¥980", image: "food-card-01-salmon-tartare.png", tag: "NEW" },
  { title: "炙り明太子", body: "ピリッと辛い明太子を香ばしく炙りました", price: "¥680", image: "food-card-02-grilled-egg.png", spicy: true },
  { title: "フライドポテト", body: "みんな大好き定番のフライドポテト", price: "¥580", image: "food-card-03-fried-potato.png" },
  { title: "ヤンニョムチキン", body: "甘辛ソースがクセになる韓国風チキン", price: "¥880", image: "food-card-04-yangnyeom.png", spicy: true },
  { title: "牛ハラミのステーキ", body: "柔らかいハラミを香ばしく焼き上げました", price: "¥1,680", image: "food-card-05-harami-steak.png", tag: "おすすめ" },
  { title: "焼きチーズカレー", body: "とろーりチーズがたまらない焼きカレー", price: "¥980", image: "food-card-06-cheese-curry.png", spicy: true, tag: "NEW" },
  { title: "シーザーサラダ", body: "新鮮野菜と濃厚シーザードレッシング", price: "¥780", image: "food-card-07-caesar-salad.png" },
  { title: "チキン南蛮", body: "自家製タルタルソースたっぷり", price: "¥880", image: "food-card-08-chicken-nanban.png" },
  { title: "ガーリックライス", body: "ガーリックの香りが食欲をそそる", price: "¥780", image: "food-card-09-garlic-rice.png" },
];

const pairings = [
  { food: "ローストビーフ", drink: "赤ワイン", body: "フルボディの赤ワインと相性抜群" },
  { food: "ガーリックシュリンプ", drink: "ハイボール", body: "スッキリしたハイボールで爽やかに" },
  { food: "チーズフォンデュ", drink: "白ワイン", body: "チーズのコクと白ワインの酸味が絶妙" },
];

const reviews = [
  { name: "ゆうたさん", body: "ローストビーフが絶品！お酒にも合うし最高です！" },
  { name: "Mikaさん", body: "チーズフォンデュが濃厚で美味しすぎる！" },
  { name: "Takuさん", body: "深夜でも美味しいご飯が食べられるのが嬉しい！" },
  { name: "Lisaさん", body: "料理のクオリティが高くていつも頼みます！" },
  { name: "ケンジさん", body: "ダーツの合間に食べる料理が最高の楽しみ！" },
];

const lateFoods = [
  { title: "焼きおにぎり", body: "香ばしい醤油仕立て", price: "¥580", image: "late-photo-01.png" },
  { title: "明太子クリームパスタ", body: "濃厚クリームで締めにも最適", price: "¥980", image: "late-photo-02.png" },
  { title: "牛すじ煮込み", body: "じっくり煮込んだとろとろ牛すじ", price: "¥780", image: "late-photo-03.png" },
  { title: "ピリ辛キムチチャーハン", body: "ピリ辛のクセになるチャーハン", price: "¥950", image: "late-photo-04.png" },
];

function Header() {
  return (
    <header className="food-header">
      <Link className="food-logo" href="/" aria-label="TSURUSEN TOP">
        <span className="food-logo-mark" aria-hidden="true" />
        <span>
          <small>AMUSEMENT BAR</small>
          <strong>TSURUSEN</strong>
        </span>
      </Link>
      <nav className="food-nav" aria-label="FOOD MENU navigation">
        {navItems.map((item) => (
          <Link key={item.label} className={item.active ? "is-active" : ""} href={item.href}>
            {item.label}
          </Link>
        ))}
        <Link className="food-reserve" href="/reservation">
          RESERVE
        </Link>
      </nav>
      <details className="food-mobile-nav">
        <summary>MENU</summary>
        <div>
          {navItems.map((item) => (
            <Link key={item.label} href={item.href}>
              {item.label}
            </Link>
          ))}
          <Link href="/reservation">RESERVE</Link>
        </div>
      </details>
    </header>
  );
}

function SectionTitle({ label, sub }: { label: string; sub?: string }) {
  return (
    <div className="food-section-title">
      <h2>{label}</h2>
      {sub ? <p>{sub}</p> : null}
    </div>
  );
}

function CtaButton({ href, label, sub, tone }: { href: string; label: string; sub: string; tone: "gold" | "green" | "blue" }) {
  return (
    <Link className={`food-cta-button ${tone}`} href={href}>
      <span>{label}</span>
      <small>{sub}</small>
    </Link>
  );
}

export function TsurusenFoodPixelPage() {
  return (
    <div className="food-page">
      <style>{runtimeCss}</style>
      <Header />

      <section className="food-hero" aria-labelledby="food-hero-title">
        <div className="food-hero-copy">
          <h1 id="food-hero-title">
            FOOD
            <br />
            MENU
          </h1>
          <p>
            Fresh.
            <br />
            Delicious.
            <br />
            Perfect with Drinks.
          </p>
          <span className="food-scroll">
            SCROLL
            <i />
          </span>
        </div>
      </section>

      <main className="food-main">
        <section className="food-concept" id="concept">
          <div className="food-concept-copy">
            <SectionTitle label="CONCEPT" />
            <h2>料理にも妥協しない。</h2>
            <p>
              遊びながら、食事も楽しめる。
              <br />
              TSURUSENでは、遊びもお酒も、そして料理も本気。
              <br />
              シェフがこだわり抜いた料理の数々を、リラックスした空間でお楽しみいただけます。
            </p>
            <em>Chef TSURUSEN</em>
          </div>
          <img src={`${assetBase}/concept-chef.png`} alt="料理を盛り付けるシェフ" />
        </section>

        <section className="food-panel" id="popular">
          <SectionTitle label="POPULAR MENU" sub="人気ランキング" />
          <div className="popular-grid">
            {popularItems.map((item) => (
              <article className="popular-card" key={item.title}>
                <span className="popular-rank">{item.rank}</span>
                <img src={`${assetBase}/${item.image}`} alt="" />
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                  <strong>{item.price}</strong>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="food-panel" id="recommend">
          <nav className="food-tabs" aria-label="Food categories">
            {menuTabs.map((tab) => (
              <Link key={tab} href={`/food-menu#${tab}`}>
                {tab}
              </Link>
            ))}
          </nav>
          <div className="food-list-grid">
            {foodItems.map((item) => (
              <article className="food-item-card" key={item.title}>
                <img src={`${assetBase}/${item.image}`} alt="" />
                <div>
                  <div className="food-item-heading">
                    <h3>{item.title}</h3>
                    {item.tag ? <span>{item.tag}</span> : null}
                  </div>
                  <p>{item.body}</p>
                  <strong>
                    {item.price}
                    {item.spicy ? <small> 辛</small> : null}
                  </strong>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="chef-pairing-grid" id="chef">
          <article className="chef-card">
            <SectionTitle label="CHEF RECOMMENDATION" sub="シェフのおすすめ" />
            <h2>黒毛和牛のグリル</h2>
            <p>厳選した黒毛和牛を絶妙な火入れでジューシーに仕上げました。</p>
            <strong>¥2,480</strong>
            <span>おすすめドリンク 赤ワイン</span>
          </article>
          <article className="pairing-card" id="pairing">
            <SectionTitle label="PAIRING" sub="料理とドリンクのペアリング" />
            <div className="pairing-list">
              {pairings.map((item) => (
                <div className="pairing-row" key={item.food}>
                  <span>{item.food}</span>
                  <ChevronRight size={24} />
                  <div>
                    <strong>{item.drink}</strong>
                    <p>{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </article>
        </section>

        <section className="food-panel" id="gallery">
          <SectionTitle label="GALLERY" sub="料理ギャラリー" />
          <img className="gallery-strip" src={`${assetBase}/gallery-photos.png`} alt="TSURUSEN food gallery" />
        </section>

        <section className="food-panel" id="favorites">
          <SectionTitle label="CUSTOMER FAVORITES" sub="お客様の声" />
          <div className="review-row">
            {reviews.map((review) => (
              <article className="review-card" key={review.name}>
                <div className="review-user">
                  <span>{review.name.slice(0, 1)}</span>
                  <strong>{review.name}</strong>
                </div>
                <div className="review-stars" aria-label="5 stars">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={index} size={13} fill="currentColor" />
                  ))}
                </div>
                <p>「{review.body}」</p>
              </article>
            ))}
          </div>
        </section>

        <section className="food-panel" id="late-night">
          <SectionTitle label="LATE NIGHT FOOD" sub="深夜も楽しめる人気メニュー" />
          <div className="late-grid">
            {lateFoods.map((item) => (
              <article className="late-card" key={item.title}>
                <img src={`${assetBase}/${item.image}`} alt="" />
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                  <strong>{item.price}</strong>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <section className="food-bottom-cta" id="reserve" aria-labelledby="food-cta-title">
        <div>
          <h2 id="food-cta-title">
            GOOD FOOD
            <br />
            GOOD NIGHT
          </h2>
          <div className="food-cta-actions">
            <CtaButton href="/reservation" label="WEB予約" sub="RESERVE" tone="gold" />
            <CtaButton href="https://line.me/R/ti/p/@tsurusen" label="LINE予約" sub="LINE" tone="green" />
            <CtaButton href="tel:03-XXXX-XXXX" label="電話予約" sub="CALL" tone="blue" />
          </div>
        </div>
      </section>

      <aside className="food-floating" aria-label="予約ショートカット">
        <Link className="gold" href="/reservation">
          <CalendarDays size={24} />
          <span>WEB予約</span>
        </Link>
        <Link className="green" href="https://line.me/R/ti/p/@tsurusen">
          <MessageCircle size={24} />
          <span>LINE予約</span>
        </Link>
        <Link className="blue" href="tel:03-XXXX-XXXX">
          <Phone size={24} />
          <span>電話予約</span>
        </Link>
      </aside>
    </div>
  );
}

const runtimeCss = `
.food-page {
  --gold: #d8ad1e;
  --gold-soft: #f4cf69;
  --ink: #f7efe2;
  --muted: rgba(247, 239, 226, 0.72);
  --panel: rgba(10, 10, 9, 0.92);
  --line: rgba(216, 173, 30, 0.5);
  width: 100%;
  min-height: 100vh;
  overflow-x: hidden;
  background:
    radial-gradient(circle at 70% 5%, rgba(166, 93, 13, 0.17), transparent 32rem),
    #050504;
  color: var(--ink);
  font-family: var(--font-noto-sans-jp), sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: geometricPrecision;
  font-feature-settings: "kern";
}

.food-page *,
.food-page *::before,
.food-page *::after {
  box-sizing: border-box;
}

.food-page a {
  color: inherit;
  text-decoration: none;
}

.food-header {
  position: sticky;
  top: 0;
  z-index: 50;
  display: flex;
  align-items: center;
  gap: clamp(18px, 3vw, 46px);
  min-height: 58px;
  padding: 9px clamp(16px, 3.8vw, 42px);
  background:
    linear-gradient(180deg, rgba(0, 0, 0, 0.96), rgba(5, 5, 5, 0.86)),
    url("${assetBase}/section-01-hero.png") center top / cover;
  border-bottom: 1px solid rgba(216, 173, 30, 0.18);
}

.food-logo {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  min-width: clamp(158px, 18vw, 218px);
}

.food-logo-mark {
  width: 34px;
  aspect-ratio: 1;
  border: 2px solid var(--gold-soft);
  border-radius: 50%;
  background:
    radial-gradient(circle, transparent 42%, rgba(216, 173, 30, 0.2) 43% 48%, transparent 49%),
    conic-gradient(from 20deg, transparent 0 12%, var(--gold-soft) 13% 16%, transparent 17% 31%, var(--gold-soft) 32% 35%, transparent 36% 52%, var(--gold-soft) 53% 56%, transparent 57%);
  box-shadow: 0 0 18px rgba(216, 173, 30, 0.32);
}

.food-logo small,
.food-logo strong {
  display: block;
  font-family: var(--font-oswald), sans-serif;
  letter-spacing: 0.15em;
}

.food-logo small {
  color: var(--gold-soft);
  font-size: 10px;
  line-height: 1;
}

.food-logo strong {
  color: var(--gold-soft);
  font-size: clamp(20px, 2.25vw, 31px);
  line-height: 1.08;
}

.food-nav {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: clamp(14px, 2.1vw, 30px);
  width: 100%;
  font-family: var(--font-oswald), sans-serif;
  font-size: clamp(12px, 1.05vw, 16px);
  font-weight: 700;
  letter-spacing: 0.08em;
  white-space: nowrap;
}

.food-nav a {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 36px;
  border-bottom: 2px solid transparent;
  color: #f9f3e8;
  transition: color 0.24s ease, border-color 0.24s ease, text-shadow 0.24s ease;
}

.food-nav a:hover,
.food-nav a.is-active {
  color: var(--gold-soft);
  border-color: var(--gold);
  text-shadow: 0 0 16px rgba(216, 173, 30, 0.62);
}

.food-reserve {
  min-width: 76px;
  padding-inline: 14px;
  border: 1px solid var(--line);
  border-radius: 4px;
}

.food-mobile-nav {
  display: none;
  margin-left: auto;
  color: var(--gold-soft);
  font-family: var(--font-oswald), sans-serif;
  letter-spacing: 0.08em;
}

.food-mobile-nav summary {
  cursor: pointer;
  list-style: none;
  border: 1px solid var(--line);
  border-radius: 6px;
  padding: 8px 11px;
}

.food-mobile-nav summary::-webkit-details-marker {
  display: none;
}

.food-mobile-nav div {
  position: absolute;
  top: calc(100% + 8px);
  right: 16px;
  display: grid;
  gap: 8px;
  min-width: 210px;
  padding: 14px;
  border: 1px solid var(--line);
  border-radius: 10px;
  background: rgba(5, 5, 5, 0.96);
  box-shadow: 0 18px 38px rgba(0, 0, 0, 0.58);
}

.food-hero {
  display: grid;
  place-items: center;
  min-height: clamp(300px, 37vw, 470px);
  padding: clamp(34px, 6vw, 80px) 20px clamp(22px, 4vw, 44px);
  background:
    radial-gradient(circle at 50% 52%, rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.58) 44%, rgba(0, 0, 0, 0.86) 78%),
    linear-gradient(180deg, rgba(0, 0, 0, 0.16), rgba(5, 5, 4, 0.3) 52%, #050504 100%),
    url("${assetBase}/hero-background-clean.png") center top / cover;
  text-align: center;
}

.food-hero h1 {
  margin: 0;
  font-family: var(--font-oswald), sans-serif;
  font-size: clamp(74px, 10.6vw, 162px);
  font-weight: 700;
  line-height: 0.94;
  letter-spacing: 0.04em;
  color: #fbf7ed;
  text-shadow: 0 0 24px rgba(255, 255, 255, 0.18);
}

.food-hero p {
  margin: clamp(12px, 2vw, 20px) 0 0;
  color: var(--gold-soft);
  font-size: clamp(15px, 1.8vw, 24px);
  font-weight: 700;
  line-height: 1.35;
}

.food-scroll {
  display: inline-grid;
  justify-items: center;
  gap: 5px;
  margin-top: 14px;
  color: rgba(247, 239, 226, 0.88);
  font-family: var(--font-oswald), sans-serif;
  font-size: 11px;
  letter-spacing: 0.1em;
}

.food-scroll i {
  width: 13px;
  height: 30px;
  border: 2px solid var(--gold);
  border-radius: 999px;
  box-shadow: 0 0 14px rgba(216, 173, 30, 0.36);
}

.food-main {
  width: min(100% - clamp(22px, 7vw, 90px), 1320px);
  margin: 0 auto;
  padding-bottom: 20px;
}

.food-section-title {
  display: flex;
  align-items: baseline;
  gap: 14px;
  min-width: 0;
}

.food-section-title h2 {
  margin: 0;
  color: var(--gold);
  font-family: var(--font-oswald), sans-serif;
  font-size: clamp(27px, 4vw, 44px);
  font-weight: 700;
  line-height: 1;
  letter-spacing: 0.08em;
  font-style: italic;
}

.food-section-title p {
  margin: 0;
  color: rgba(247, 239, 226, 0.76);
  font-size: clamp(11px, 1.2vw, 14px);
  font-weight: 800;
}

.food-concept,
.food-panel,
.chef-pairing-grid > article {
  border: 1px solid var(--line);
  background:
    radial-gradient(circle at 50% 0, rgba(216, 173, 30, 0.09), transparent 20rem),
    var(--panel);
  box-shadow: 0 0 28px rgba(0, 0, 0, 0.44), inset 0 0 30px rgba(255, 255, 255, 0.025);
}

.food-concept {
  display: grid;
  grid-template-columns: 0.85fr 1.15fr;
  align-items: stretch;
  min-height: clamp(230px, 22vw, 310px);
  overflow: hidden;
}

.food-concept-copy {
  display: grid;
  align-content: center;
  gap: clamp(12px, 1.8vw, 22px);
  padding: clamp(26px, 5vw, 52px);
}

.food-concept-copy h2 {
  margin: 0;
  color: #f9f3e8;
  font-size: clamp(27px, 3.4vw, 42px);
  font-weight: 900;
  line-height: 1.3;
}

.food-concept-copy p {
  margin: 0;
  color: rgba(247, 239, 226, 0.86);
  font-size: clamp(14px, 1.35vw, 18px);
  font-weight: 700;
  line-height: 1.9;
}

.food-concept-copy em {
  color: var(--gold-soft);
  font-family: var(--font-oswald), sans-serif;
  font-size: clamp(17px, 2vw, 27px);
  letter-spacing: 0.08em;
}

.food-concept img {
  width: 100%;
  height: 100%;
  min-height: 230px;
  object-fit: cover;
}

.food-panel {
  margin-top: clamp(14px, 2vw, 22px);
  padding: clamp(18px, 2.4vw, 32px);
  border-radius: 4px;
}

.popular-grid {
  display: grid;
  grid-template-columns: repeat(6, minmax(0, 1fr));
  gap: clamp(12px, 1.4vw, 18px);
  margin-top: 18px;
}

.popular-card {
  position: relative;
  display: grid;
  grid-template-rows: minmax(108px, 0.85fr) auto;
  min-height: 254px;
  overflow: hidden;
  border: 1px solid var(--line);
  border-radius: 5px;
  background: rgba(8, 8, 8, 0.92);
}

.popular-rank {
  position: absolute;
  z-index: 2;
  top: 8px;
  left: 8px;
  display: inline-flex;
  min-width: 42px;
  justify-content: center;
  border-radius: 4px;
  padding: 4px 6px;
  background: linear-gradient(135deg, rgba(216, 173, 30, 0.9), rgba(110, 78, 7, 0.82));
  color: #fff9dc;
  font-family: var(--font-oswald), sans-serif;
  font-size: 13px;
  font-weight: 700;
}

.popular-card img {
  width: 100%;
  height: 118px;
  object-fit: cover;
  object-position: center top;
  filter: saturate(1.08) contrast(1.05);
}

.popular-card div {
  display: grid;
  align-content: start;
  gap: 8px;
  padding: 14px 12px 15px;
  text-align: center;
}

.popular-card h3,
.food-item-card h3,
.late-card h3 {
  margin: 0;
  color: var(--gold-soft);
  font-size: clamp(15px, 1.3vw, 20px);
  font-weight: 900;
  line-height: 1.3;
}

.popular-card p,
.food-item-card p,
.late-card p {
  margin: 0;
  color: rgba(247, 239, 226, 0.82);
  font-size: clamp(11px, 1vw, 14px);
  font-weight: 700;
  line-height: 1.6;
}

.popular-card strong,
.food-item-card strong,
.late-card strong,
.chef-card strong {
  color: var(--gold-soft);
  font-family: var(--font-oswald), sans-serif;
  font-size: clamp(18px, 1.8vw, 27px);
  line-height: 1;
}

.food-tabs {
  display: grid;
  grid-template-columns: repeat(6, minmax(0, 1fr));
  gap: 4px;
  margin-bottom: 18px;
}

.food-tabs a {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 42px;
  border: 1px solid var(--line);
  border-radius: 4px;
  background: rgba(10, 10, 9, 0.92);
  color: #f7efe2;
  font-weight: 900;
}

.food-tabs a:first-child {
  background: linear-gradient(180deg, rgba(216, 173, 30, 0.35), rgba(10, 10, 9, 0.96));
  color: #fff4c8;
}

.food-list-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 12px;
}

.food-item-card {
  display: grid;
  grid-template-columns: minmax(112px, 0.42fr) 1fr;
  min-height: 132px;
  overflow: hidden;
  border: 1px solid rgba(216, 173, 30, 0.34);
  border-radius: 5px;
  background: rgba(8, 8, 8, 0.94);
}

.food-item-card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: left center;
}

.food-item-card > div {
  display: grid;
  align-content: center;
  gap: 8px;
  padding: 15px;
}

.food-item-heading {
  display: flex;
  align-items: start;
  justify-content: space-between;
  gap: 10px;
}

.food-item-heading span {
  display: inline-flex;
  flex: 0 0 auto;
  border: 1px solid var(--gold);
  border-radius: 999px;
  padding: 2px 7px;
  color: var(--gold-soft);
  font-family: var(--font-oswald), sans-serif;
  font-size: 11px;
}

.food-item-card small {
  color: #ff5a25;
}

.chef-pairing-grid {
  display: grid;
  grid-template-columns: 1fr 1.05fr;
  gap: 14px;
  margin-top: 14px;
}

.chef-card {
  display: grid;
  align-content: end;
  gap: 12px;
  min-height: clamp(280px, 30vw, 390px);
  padding: clamp(22px, 3.2vw, 42px);
  background:
    linear-gradient(90deg, rgba(6, 6, 5, 0.92) 0%, rgba(6, 6, 5, 0.7) 42%, rgba(6, 6, 5, 0.15) 100%),
    url("${assetBase}/chef-recommendation.png") center / cover;
}

.chef-card h2 {
  margin: 0;
  font-size: clamp(24px, 3vw, 42px);
  line-height: 1.2;
}

.chef-card p,
.chef-card span {
  margin: 0;
  max-width: 24em;
  color: rgba(247, 239, 226, 0.86);
  font-weight: 800;
  line-height: 1.7;
}

.pairing-card {
  display: grid;
  align-content: center;
  gap: 20px;
  min-height: clamp(280px, 30vw, 390px);
  padding: clamp(22px, 3vw, 40px);
  background:
    linear-gradient(90deg, rgba(6, 6, 5, 0.94), rgba(6, 6, 5, 0.72)),
    url("${assetBase}/pairing-panel.png") center / cover;
}

.pairing-list {
  display: grid;
  gap: 14px;
}

.pairing-row {
  display: grid;
  grid-template-columns: minmax(110px, 1fr) 34px minmax(140px, 1.15fr);
  align-items: center;
  gap: 16px;
  color: var(--gold-soft);
}

.pairing-row span,
.pairing-row strong {
  color: #f7efe2;
  font-size: clamp(15px, 1.3vw, 18px);
  font-weight: 900;
}

.pairing-row p {
  margin: 4px 0 0;
  color: rgba(247, 239, 226, 0.82);
  font-size: clamp(12px, 1vw, 14px);
  font-weight: 700;
  line-height: 1.55;
}

.gallery-strip {
  display: block;
  width: 100%;
  margin-top: 16px;
  border-radius: 4px;
  object-fit: cover;
}

.review-row {
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 14px;
  margin-top: 16px;
}

.review-card {
  display: grid;
  gap: 9px;
  min-height: 156px;
  border: 1px solid rgba(216, 173, 30, 0.36);
  border-radius: 7px;
  padding: 15px;
  background: rgba(10, 10, 9, 0.92);
}

.review-user {
  display: flex;
  align-items: center;
  gap: 9px;
}

.review-user span {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(216, 173, 30, 0.4), rgba(60, 38, 4, 0.88));
  color: #fff4c8;
  font-weight: 900;
}

.review-stars {
  display: flex;
  gap: 2px;
  color: var(--gold-soft);
}

.review-card strong,
.review-card p {
  margin: 0;
  color: #f7efe2;
  font-size: clamp(12px, 1vw, 15px);
  font-weight: 800;
  line-height: 1.65;
}

.late-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 13px;
  margin-top: 16px;
}

.late-card {
  display: grid;
  min-height: 156px;
  overflow: hidden;
  border: 1px solid rgba(216, 173, 30, 0.36);
  border-radius: 5px;
  background: rgba(8, 8, 8, 0.94);
}

.late-card img {
  width: 100%;
  height: 86px;
  object-fit: cover;
  object-position: center top;
}

.late-card div {
  display: grid;
  gap: 6px;
  padding: 12px;
}

.food-bottom-cta {
  display: grid;
  place-items: center;
  min-height: clamp(154px, 18vw, 250px);
  padding: clamp(22px, 4vw, 48px) 18px;
  margin-top: 0;
  background:
    linear-gradient(180deg, rgba(5, 5, 4, 0.1), rgba(5, 5, 4, 0.82)),
    radial-gradient(circle at 50% 42%, rgba(4, 8, 28, 0.3), transparent 42%),
    url("${assetBase}/cta-background-clean.png") center / cover;
  text-align: center;
}

.food-bottom-cta h2 {
  margin: 0;
  color: #f6ddb0;
  font-family: var(--font-oswald), sans-serif;
  font-size: clamp(46px, 7vw, 98px);
  font-weight: 700;
  line-height: 0.96;
  letter-spacing: 0.1em;
  text-shadow: 0 0 24px rgba(216, 173, 30, 0.5);
}

.food-cta-actions {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 14px;
  margin-top: 18px;
}

.food-cta-button {
  --button-color: var(--gold);
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: clamp(160px, 18vw, 230px);
  min-height: 54px;
  border: 1px solid var(--button-color);
  border-radius: 5px;
  background: rgba(5, 5, 5, 0.72);
  box-shadow: inset 0 0 22px color-mix(in srgb, var(--button-color), transparent 74%);
  transition: transform 0.24s ease, box-shadow 0.24s ease;
}

.food-cta-button.green {
  --button-color: #16e563;
}

.food-cta-button.blue {
  --button-color: #1597ff;
}

.food-cta-button span {
  color: #f7efe2;
  font-size: 16px;
  font-weight: 900;
}

.food-cta-button small {
  color: var(--button-color);
  font-family: var(--font-oswald), sans-serif;
  font-size: 10px;
  letter-spacing: 0.12em;
}

.food-floating {
  position: fixed;
  right: 16px;
  bottom: 20px;
  z-index: 45;
  display: grid;
  gap: 9px;
}

.food-floating a {
  --float-color: var(--gold);
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;
  width: 74px;
  min-height: 72px;
  border: 2px solid var(--float-color);
  border-radius: 12px;
  background: rgba(4, 5, 4, 0.82);
  color: #fff7da;
  box-shadow: 0 0 20px color-mix(in srgb, var(--float-color), transparent 70%);
}

.food-floating .green {
  --float-color: #16e563;
}

.food-floating .blue {
  --float-color: #f24dbc;
}

.food-floating span {
  font-size: 11px;
  font-weight: 900;
}

@media (hover: hover) {
  .popular-card,
  .food-item-card,
  .late-card,
  .review-card,
  .food-cta-button,
  .food-floating a {
    transition: transform 0.24s ease, border-color 0.24s ease, box-shadow 0.24s ease;
  }

  .popular-card:hover,
  .food-item-card:hover,
  .late-card:hover,
  .review-card:hover {
    transform: translateY(-4px);
    border-color: var(--gold-soft);
    box-shadow: 0 0 28px rgba(216, 173, 30, 0.24);
  }

  .food-cta-button:hover,
  .food-floating a:hover {
    transform: translateY(-2px) scale(1.02);
    box-shadow: 0 0 26px color-mix(in srgb, var(--button-color, var(--float-color)), transparent 64%);
  }
}

@media (max-width: 1180px) {
  .food-nav {
    gap: 12px;
  }

  .popular-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .review-row {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

@media (max-width: 900px) {
  .food-nav {
    display: none;
  }

  .food-mobile-nav {
    display: block;
  }

  .food-header {
    min-height: 54px;
  }

  .food-concept,
  .chef-pairing-grid,
  .food-list-grid {
    grid-template-columns: 1fr;
  }

  .food-tabs {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .late-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 620px) {
  .food-header {
    padding-inline: 12px;
  }

  .food-logo {
    min-width: 0;
  }

  .food-logo-mark {
    width: 30px;
  }

  .food-logo small {
    font-size: 8px;
  }

  .food-logo strong {
    font-size: 18px;
  }

  .food-hero {
    min-height: 330px;
    background-position: center top;
  }

  .food-main {
    width: calc(100% - 20px);
  }

  .food-concept-copy,
  .food-panel,
  .chef-card,
  .pairing-card {
    padding: 18px;
  }

  .popular-grid,
  .review-row {
    grid-template-columns: 1fr;
  }

  .popular-card {
    grid-template-columns: minmax(118px, 0.42fr) 1fr;
    grid-template-rows: auto;
    min-height: 152px;
  }

  .popular-card img {
    height: 100%;
  }

  .popular-card div {
    text-align: left;
  }

  .food-tabs {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .food-item-card {
    grid-template-columns: minmax(104px, 0.38fr) 1fr;
  }

  .pairing-row {
    grid-template-columns: 1fr 24px 1fr;
    gap: 8px;
  }

  .gallery-strip {
    min-height: 78px;
    object-fit: cover;
  }

  .late-grid {
    grid-template-columns: 1fr;
  }

  .food-floating {
    right: 8px;
    bottom: 8px;
  }

  .food-floating a {
    width: 56px;
    min-height: 55px;
    border-radius: 10px;
  }

  .food-floating span {
    font-size: 9px;
  }

  .food-floating svg {
    width: 18px;
    height: 18px;
  }

  .food-cta-actions {
    gap: 8px;
  }

  .food-cta-button {
    width: min(100%, 180px);
  }
}
`;
