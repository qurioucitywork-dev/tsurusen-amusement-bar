/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import {
  Beer,
  CalendarDays,
  CheckCircle2,
  Citrus,
  CupSoda,
  GlassWater,
  Martini,
  MessageCircle,
  Phone,
  Star,
  Wine,
} from "lucide-react";

const assetBase = "/assets/tsurusen-drink/png";

const navItems = [
  { label: "TOP", href: "/" },
  { label: "ABOUT", href: "/#about" },
  { label: "PRICE & SYSTEM", href: "/pricing" },
  { label: "FOOD MENU", href: "/food-menu" },
  { label: "DRINK MENU", href: "/drink-menu", active: true },
  { label: "ENTERTAINMENT", href: "/play" },
  { label: "SCENE", href: "/#scene" },
  { label: "GALLERY", href: "/#gallery" },
  { label: "CAMPAIGN", href: "/campaigns" },
  { label: "ACCESS", href: "/access" },
];

const drinkTypes = [
  { label: "ビール", icon: Beer },
  { label: "ハイボール", icon: GlassWater },
  { label: "レモンサワー", icon: Citrus },
  { label: "焼酎", icon: CupSoda },
  { label: "ワイン", icon: Wine },
  { label: "カクテル", icon: Martini },
  { label: "ソフトドリンク", icon: GlassWater },
];

const tabs = ["BEER", "HIGHBALL", "COCKTAIL", "SOUR", "WINE", "SHOCHU", "WHISKY", "SOFT DRINK"];

const beerItems = [
  {
    name: "生ビール",
    sub: "プレミアムモルツ",
    body: "きめ細やかな泡とコク。のどごし抜群。",
    alc: "ALC. 5%",
    tag: "人気",
    image: "beer-img-01.png",
  },
  {
    name: "シャンディガフ",
    body: "ビール×ジンジャーエールの定番。",
    alc: "ALC. 3%",
    tag: "おすすめ",
    image: "beer-img-02.png",
  },
  {
    name: "コロナ",
    body: "ライムを絞って爽快に。",
    alc: "ALC. 4.5%",
    tag: "人気",
    image: "beer-img-03.png",
  },
  {
    name: "ハイネケン",
    body: "世界中で愛されるラガービール。",
    alc: "ALC. 5%",
    tag: "NEW",
    image: "beer-img-04.png",
  },
  {
    name: "ギネス",
    body: "クリーミーな泡が特徴の黒ビール。",
    alc: "ALC. 4.5%",
    tag: "おすすめ",
    image: "beer-img-05.png",
  },
  {
    name: "ブルームーン",
    body: "オレンジピール香るホワイトビール。",
    alc: "ALC. 5.4%",
    image: "beer-img-06.png",
  },
];

const champagnes = [
  { name: "Moet & Chandon", jp: "モエ・エ・シャンドン", price: "¥15,000", tag: "人気 No.1", image: "champagne-img-01.png" },
  { name: "Veuve Clicquot", jp: "ヴーヴ・クリコ", price: "¥18,000", tag: "おすすめ", image: "champagne-img-02.png" },
  { name: "Dom Perignon", jp: "ドン・ペリニヨン", price: "¥38,000", tag: "VIP 人気", image: "champagne-img-03.png" },
];

const whiskies = [
  { name: "山崎 12年", en: "YAMAZAKI 12Y", body: "華やか、繊細、熟した果実", finish: "熟成年数　12年", image: "whisky-img-01.png" },
  { name: "マッカラン 12年", en: "MACALLAN 12Y", body: "レーズン、ドライフルーツ", finish: "熟成年数　12年", image: "whisky-img-02.png" },
  { name: "ボウモア 12年", en: "BOWMORE 12Y", body: "スモーキー、潮風、スモーク", finish: "熟成年数　12年", image: "whisky-img-03.png" },
  { name: "ジャックダニエル", en: "JACK DANIEL'S", body: "バニラ、キャラメル、スムース", finish: "熟成年数　-", image: "whisky-img-04.png" },
];

const pairings = [
  { name: "ローストビーフ", drink: "赤ワイン", body: "肉の旨味とワインの渋みが絶妙にマッチ。", image: "pairing-roast-beef.png" },
  { name: "ガーリックシュリンプ", drink: "ハイボール", body: "ガーリックの香りと炭酸の爽快感。", image: "pairing-shrimp.png" },
  { name: "チーズ盛り合わせ", drink: "白ワイン", body: "チーズのコクとワインの酸味が調和。", image: "pairing-cheese.png" },
];

const reviews = [
  { name: "Mika", body: "飲み放題とは思えないクオリティ！満足です！" },
  { name: "Taku", body: "カクテルの種類が豊富でおしゃれに楽しめました！" },
  { name: "Rina", body: "雰囲気よくドリンクがすぐ出てテンション上がる！" },
];

function LogoMark() {
  return (
    <Link className="drink-logo" href="/" aria-label="TSURUSEN TOP">
      <span className="drink-logo-icon" aria-hidden="true" />
      <span>
        <span className="drink-logo-kicker">AMUSEMENT BAR</span>
        <span className="drink-logo-name">TSURUSEN</span>
      </span>
    </Link>
  );
}

function Header() {
  return (
    <header className="drink-header">
      <LogoMark />
      <nav className="drink-nav" aria-label="DRINK MENU navigation">
        {navItems.map((item) => (
          <Link key={item.label} className={item.active ? "is-active" : ""} href={item.href}>
            {item.label}
          </Link>
        ))}
        <Link className="drink-reserve" href="/reservation">
          RESERVE
        </Link>
      </nav>
      <details className="drink-mobile-nav">
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
    <div className="drink-section-title">
      <h2>{label}</h2>
      {sub ? <p>{sub}</p> : null}
    </div>
  );
}

function CtaButton({ href, label, sub, tone }: { href: string; label: string; sub: string; tone: "gold" | "green" | "blue" }) {
  return (
    <Link className={`drink-cta-button ${tone}`} href={href}>
      <span>{label}</span>
      <small>{sub}</small>
    </Link>
  );
}

export function TsurusenDrinkPixelPage() {
  return (
    <div className="drink-page">
      <style>{runtimeCss}</style>
      <Header />

      <section className="drink-hero" aria-labelledby="drink-hero-title">
        <div className="drink-hero-inner">
          <h1 id="drink-hero-title">
            DRINK
            <br />
            MENU
          </h1>
          <p>Every Glass Creates A Great Night.</p>
          <span className="drink-scroll">
            SCROLL
            <i />
          </span>
        </div>
      </section>

      <main className="drink-main">
        <section className="drink-concept" id="concept">
          <div className="drink-concept-copy">
            <SectionTitle label="CONCEPT" />
            <p>
              飲み放題でも妥協しない。
              <br />
              定番からカクテルまで
              <br />
              豊富なラインナップをご用意。
            </p>
          </div>
          <img src={`${assetBase}/concept-cocktail.png`} alt="青く光るカクテル" />
        </section>

        <section className="drink-all-panel" id="all-you-can-drink">
          <div className="drink-type-row" aria-label="飲み放題メニュー">
            {drinkTypes.slice(0, 3).map((item) => {
              const Icon = item.icon;
              return (
                <div className="drink-type" key={item.label}>
                  <Icon size={34} strokeWidth={1.7} />
                  <span>{item.label}</span>
                  <CheckCircle2 size={17} />
                </div>
              );
            })}
          </div>
          <div className="drink-all-center">
            <h2>ALL YOU CAN DRINK</h2>
            <p>飲み放題メニュー</p>
            <strong>飲み放題</strong>
            <small>チャージ料金に含まれています</small>
          </div>
          <div className="drink-type-row" aria-label="飲み放題メニュー">
            {drinkTypes.slice(3).map((item) => {
              const Icon = item.icon;
              return (
                <div className="drink-type" key={item.label}>
                  <Icon size={34} strokeWidth={1.7} />
                  <span>{item.label}</span>
                  <CheckCircle2 size={17} />
                </div>
              );
            })}
          </div>
        </section>

        <nav className="drink-tabs" aria-label="Drink categories">
          {tabs.map((tab) => (
            <Link key={tab} href={`/drink-menu#${tab.toLowerCase().replaceAll(" ", "-")}`}>
              {tab}
            </Link>
          ))}
        </nav>

        <section className="beer-grid" id="beer" aria-label="Beer menu">
          {beerItems.map((item) => (
            <article className="beer-card" key={item.name}>
              <img src={`${assetBase}/${item.image}`} alt="" />
              <div>
                <h3>
                  {item.name}
                  {item.sub ? <small>{item.sub}</small> : null}
                </h3>
                {item.tag ? <span className="drink-tag">{item.tag}</span> : null}
                <p>{item.body}</p>
                <b>{item.alc}</b>
              </div>
            </article>
          ))}
        </section>

        <div className="drink-center-action">
          <Link href="/drink-menu#beer">
            すべてのビールを見る
            <small>VIEW MORE</small>
          </Link>
        </div>

        <section className="signature-section" id="cocktail">
          <div className="signature-copy">
            <SectionTitle label="SIGNATURE COCKTAIL" />
            <h3>鶴千オリジナルカクテル</h3>
            <p>
              華やかで飲みやすい、
              <br />
              TSURUSENを代表する一杯。
            </p>
            <dl>
              <div>
                <dt>VODKA / BLUE CURACAO</dt>
                <dd>LEMON JUICE / SODA</dd>
              </div>
              <div>
                <dt>炭酸</dt>
                <dd>ベリー / フラワー</dd>
              </div>
            </dl>
          </div>
          <img src={`${assetBase}/signature-cocktail.png`} alt="紫と青に輝くシグネチャーカクテル" />
        </section>

        <section className="collection-grid" id="champagne">
          <article className="collection-intro">
            <SectionTitle label="CHAMPAGNE" sub="お祝いにふさわしいシャンパン" />
            <Link href="/drink-menu#champagne">VIEW MORE</Link>
          </article>
          {champagnes.map((item) => (
            <article className="bottle-card" key={item.name}>
              <img src={`${assetBase}/${item.image}`} alt="" />
              <div>
                <h3>{item.name}</h3>
                <p>{item.jp}</p>
                <strong>{item.price}</strong>
                <span>{item.tag}</span>
              </div>
            </article>
          ))}
          <article className="collection-intro whisky">
            <SectionTitle label="WHISKY COLLECTION" sub="世界のウイスキーを厳選" />
            <Link href="/drink-menu#whisky">VIEW MORE</Link>
          </article>
        </section>

        <section className="whisky-grid" id="whisky">
          {whiskies.map((item) => (
            <article className="whisky-card" key={item.name}>
              <img src={`${assetBase}/${item.image}`} alt="" />
              <div>
                <h3>{item.name}</h3>
                <small>{item.en}</small>
                <p>{item.body}</p>
                <b>{item.finish}</b>
              </div>
            </article>
          ))}
        </section>

        <div className="drink-center-action">
          <Link href="/drink-menu#whisky">
            すべてのウイスキーを見る
            <small>VIEW MORE</small>
          </Link>
        </div>

        <section className="pairing-section" id="pairing">
          <SectionTitle label="PAIRING" sub="フードとのペアリング" />
          <div className="pairing-grid">
            {pairings.map((item) => (
              <article className="pairing-card" key={item.name}>
                <img src={`${assetBase}/${item.image}`} alt="" />
                <div>
                  <h3>{item.name}</h3>
                  <span>×</span>
                  <p>{item.drink}</p>
                </div>
                <small>{item.body}</small>
              </article>
            ))}
          </div>
        </section>

        <section className="social-grid" id="favorites">
          <article className="social-panel">
            <SectionTitle label="INSTAGRAM DRINKS" sub="@TSURUSEN_DRINK" />
            <img src={`${assetBase}/instagram-drinks.png`} alt="Instagram drinks gallery" />
            <Link href="https://www.instagram.com/">もっと見る <small>VIEW MORE</small></Link>
          </article>
          <article className="social-panel">
            <SectionTitle label="CUSTOMER FAVORITES" sub="お客様の声" />
            <div className="review-row">
              {reviews.map((review) => (
                <div className="mini-review" key={review.name}>
                  <b>{review.name}</b>
                  <span aria-label="5 stars">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Star key={index} size={12} fill="currentColor" />
                    ))}
                  </span>
                  <p>{review.body}</p>
                </div>
              ))}
            </div>
            <Link href="/#reviews">もっと見る <small>VIEW MORE</small></Link>
          </article>
          <article className="social-panel">
            <SectionTitle label="NIGHT EXPERIENCE" sub="特別な夜を演出" />
            <img src={`${assetBase}/night-experience.png`} alt="乾杯するグループ" />
            <Link href="/play">もっと見る <small>VIEW MORE</small></Link>
          </article>
        </section>
      </main>

      <section className="drink-bottom-cta" id="reserve">
        <div>
          <h2>RAISE YOUR GLASS. PLAY ALL NIGHT.</h2>
          <p>今すぐ予約して、最高の夜を楽しもう！</p>
          <div className="drink-cta-row">
            <CtaButton href="/reservation" label="WEB予約" sub="RESERVE" tone="gold" />
            <CtaButton href="https://line.me/R/ti/p/@tsurusen" label="LINE予約" sub="LINE" tone="green" />
            <CtaButton href="tel:03-XXXX-XXXX" label="電話予約" sub="CALL" tone="blue" />
          </div>
        </div>
      </section>

      <aside className="floating-reserve" aria-label="Reservation shortcuts">
        <Link className="gold" href="/reservation">
          <CalendarDays size={22} />
          <span>WEB予約</span>
        </Link>
        <Link className="green" href="https://line.me/R/ti/p/@tsurusen">
          <MessageCircle size={22} />
          <span>LINE予約</span>
        </Link>
        <Link className="pink" href="tel:03-XXXX-XXXX">
          <Phone size={22} />
          <span>電話予約</span>
        </Link>
      </aside>
    </div>
  );
}

const runtimeCss = `
.drink-page {
  --gold: #d7ad24;
  --gold-soft: #f0ca58;
  --ink: #f6efe3;
  --muted: rgba(246, 239, 227, 0.78);
  --line: rgba(215, 173, 36, 0.52);
  --panel: rgba(11, 11, 10, 0.86);
  --panel-deep: rgba(7, 7, 6, 0.96);
  width: 100%;
  min-height: 100vh;
  overflow-x: hidden;
  background:
    radial-gradient(circle at 50% 0%, rgba(102, 73, 16, 0.22), transparent 36rem),
    #060605;
  color: var(--ink);
  font-family: var(--font-noto-sans-jp), sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: geometricPrecision;
  font-feature-settings: "kern";
}

.drink-page *,
.drink-page *::before,
.drink-page *::after {
  box-sizing: border-box;
}

.drink-page a {
  color: inherit;
  text-decoration: none;
}

.drink-header {
  position: sticky;
  top: 0;
  z-index: 50;
  display: flex;
  align-items: center;
  gap: clamp(18px, 3vw, 42px);
  min-height: 68px;
  padding: 10px clamp(18px, 4vw, 48px);
  border-bottom: 1px solid rgba(215, 173, 36, 0.22);
  background:
    linear-gradient(90deg, rgba(4, 4, 3, 0.98), rgba(12, 9, 6, 0.92)),
    url("${assetBase}/section-01-hero.png") center 18% / cover;
  box-shadow: 0 14px 34px rgba(0, 0, 0, 0.54);
}

.drink-logo {
  display: inline-flex;
  flex: 0 0 auto;
  align-items: center;
  gap: 10px;
  min-width: 160px;
}

.drink-logo-icon {
  width: 34px;
  aspect-ratio: 1;
  border: 2px solid var(--gold-soft);
  border-radius: 50%;
  box-shadow: 0 0 18px rgba(215, 173, 36, 0.28);
}

.drink-logo-kicker,
.drink-logo-name {
  display: block;
  font-family: var(--font-oswald), sans-serif;
  color: var(--gold-soft);
  font-weight: 700;
  line-height: 1;
  letter-spacing: 0.16em;
}

.drink-logo-kicker {
  font-size: 10px;
}

.drink-logo-name {
  margin-top: 3px;
  font-size: 24px;
  letter-spacing: 0.1em;
}

.drink-nav {
  display: flex;
  flex: 1 1 auto;
  align-items: center;
  justify-content: flex-end;
  gap: clamp(12px, 1.8vw, 30px);
  min-width: 0;
}

.drink-nav a {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 42px;
  padding: 0 2px;
  color: rgba(246, 239, 227, 0.92);
  font-family: var(--font-oswald), sans-serif;
  font-size: clamp(11px, 0.92vw, 15px);
  font-weight: 700;
  letter-spacing: 0.08em;
  line-height: 1;
  white-space: nowrap;
  transition: color 0.22s ease, text-shadow 0.22s ease;
}

.drink-nav a::after {
  position: absolute;
  right: 0;
  bottom: 2px;
  left: 0;
  height: 2px;
  content: "";
  opacity: 0;
  background: var(--gold);
  box-shadow: 0 0 14px rgba(215, 173, 36, 0.8);
  transform: scaleX(0.35);
  transition: opacity 0.22s ease, transform 0.22s ease;
}

.drink-nav a:hover,
.drink-nav a.is-active {
  color: var(--gold-soft);
  text-shadow: 0 0 16px rgba(215, 173, 36, 0.44);
}

.drink-nav a:hover::after,
.drink-nav a.is-active::after {
  opacity: 1;
  transform: scaleX(1);
}

.drink-nav .drink-reserve {
  min-height: 44px;
  padding: 0 18px;
  border: 1px solid rgba(215, 173, 36, 0.74);
  border-radius: 8px;
}

.drink-mobile-nav {
  display: none;
  margin-left: auto;
  color: var(--gold-soft);
  font-family: var(--font-oswald), sans-serif;
  font-weight: 700;
  letter-spacing: 0.12em;
}

.drink-mobile-nav summary {
  min-height: 44px;
  padding: 12px 14px;
  border: 1px solid var(--line);
  border-radius: 10px;
  cursor: pointer;
}

.drink-mobile-nav div {
  position: absolute;
  right: 16px;
  left: 16px;
  display: grid;
  gap: 8px;
  margin-top: 10px;
  padding: 16px;
  border: 1px solid var(--line);
  border-radius: 14px;
  background: rgba(5, 5, 4, 0.98);
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.72);
}

.drink-mobile-nav a {
  padding: 12px 10px;
  border-bottom: 1px solid rgba(215, 173, 36, 0.16);
}

.drink-hero {
  display: grid;
  min-height: clamp(320px, 42vw, 560px);
  place-items: center;
  padding: clamp(42px, 8vw, 92px) 18px clamp(32px, 5vw, 64px);
  background:
    linear-gradient(180deg, rgba(2, 2, 2, 0.36), rgba(3, 3, 3, 0.08) 44%, rgba(5, 5, 4, 0.96) 100%),
    radial-gradient(circle at 50% 45%, rgba(0, 0, 0, 0.12), rgba(0, 0, 0, 0.68) 68%),
    url("${assetBase}/hero-background-clean.png") center / cover;
}

.drink-hero-inner {
  display: grid;
  justify-items: center;
  text-align: center;
}

.drink-hero h1 {
  margin: 0;
  color: #f8f2e7;
  font-family: var(--font-oswald), sans-serif;
  font-size: clamp(72px, 11vw, 164px);
  font-weight: 700;
  line-height: 0.9;
  letter-spacing: 0.035em;
  text-shadow: 0 0 22px rgba(246, 239, 227, 0.26), 0 10px 26px rgba(0, 0, 0, 0.78);
}

.drink-hero p {
  max-width: 290px;
  margin: clamp(16px, 2vw, 28px) 0 0;
  color: var(--gold-soft);
  font-size: clamp(16px, 2vw, 22px);
  font-weight: 700;
  line-height: 1.45;
}

.drink-scroll {
  display: grid;
  justify-items: center;
  gap: 6px;
  margin-top: 18px;
  color: rgba(246, 239, 227, 0.86);
  font-family: var(--font-oswald), sans-serif;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.08em;
}

.drink-scroll i {
  width: 13px;
  height: 30px;
  border: 2px solid var(--gold);
  border-radius: 999px;
  box-shadow: 0 0 14px rgba(215, 173, 36, 0.54);
}

.drink-main {
  width: min(100%, 1500px);
  margin-inline: auto;
  padding: 0 clamp(18px, 4vw, 48px) clamp(42px, 8vw, 94px);
}

.drink-concept {
  display: grid;
  grid-template-columns: minmax(260px, 0.88fr) minmax(320px, 1.18fr);
  gap: clamp(22px, 4vw, 56px);
  align-items: center;
  min-height: 214px;
  padding: clamp(24px, 4vw, 42px);
  border: 1px solid rgba(215, 173, 36, 0.5);
  border-radius: 8px;
  background: linear-gradient(90deg, rgba(10, 10, 9, 0.96), rgba(12, 12, 12, 0.76));
  box-shadow: inset 0 0 44px rgba(215, 173, 36, 0.06);
}

.drink-concept img,
.signature-section img,
.social-panel img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.drink-concept img {
  min-height: 160px;
  border-radius: 6px;
}

.drink-section-title {
  display: flex;
  align-items: baseline;
  gap: 12px;
  min-width: 0;
}

.drink-section-title h2 {
  margin: 0;
  color: var(--gold-soft);
  font-family: var(--font-oswald), sans-serif;
  font-size: clamp(28px, 3vw, 44px);
  font-style: italic;
  font-weight: 700;
  line-height: 1;
  letter-spacing: 0.08em;
}

.drink-section-title p {
  margin: 0;
  color: rgba(246, 239, 227, 0.8);
  font-size: clamp(11px, 1vw, 14px);
  font-weight: 700;
}

.drink-concept-copy > p {
  margin: clamp(20px, 3vw, 34px) 0 0;
  color: #f4ebdd;
  font-size: clamp(18px, 2vw, 26px);
  font-weight: 800;
  line-height: 1.9;
  letter-spacing: 0.04em;
}

.drink-all-panel {
  display: grid;
  grid-template-columns: 1fr minmax(210px, 0.82fr) 1.3fr;
  gap: clamp(14px, 2vw, 28px);
  align-items: center;
  margin-top: 0;
  padding: clamp(22px, 3vw, 36px);
  border: 1px solid rgba(215, 173, 36, 0.76);
  border-radius: 8px;
  background: rgba(10, 10, 9, 0.92);
  box-shadow: 0 0 26px rgba(215, 173, 36, 0.22);
}

.drink-type-row {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(72px, 1fr));
  gap: 18px;
  align-items: end;
}

.drink-type {
  display: grid;
  justify-items: center;
  gap: 8px;
  min-width: 0;
  color: var(--gold);
  text-align: center;
}

.drink-type span {
  color: var(--ink);
  font-size: clamp(12px, 1.1vw, 16px);
  font-weight: 800;
  line-height: 1.2;
}

.drink-all-center {
  display: grid;
  justify-items: center;
  text-align: center;
}

.drink-all-center h2 {
  margin: 0;
  color: var(--gold-soft);
  font-family: var(--font-oswald), sans-serif;
  font-size: clamp(28px, 3.4vw, 46px);
  font-weight: 700;
  letter-spacing: 0.16em;
}

.drink-all-center p,
.drink-all-center small {
  margin: 0;
  color: var(--muted);
  font-size: clamp(11px, 1vw, 14px);
  font-weight: 800;
}

.drink-all-center strong {
  margin-top: 14px;
  color: #f7f0e7;
  font-size: clamp(38px, 5vw, 64px);
  font-weight: 900;
  letter-spacing: 0.18em;
  line-height: 1;
}

.drink-tabs {
  display: grid;
  grid-template-columns: repeat(8, minmax(0, 1fr));
  gap: 7px;
  margin: 26px 0 16px;
}

.drink-tabs a {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 32px;
  border: 1px solid rgba(215, 173, 36, 0.72);
  border-radius: 6px;
  background: rgba(11, 10, 8, 0.88);
  color: #f7f0e7;
  font-family: var(--font-oswald), sans-serif;
  font-size: clamp(11px, 1vw, 15px);
  font-weight: 700;
  letter-spacing: 0.08em;
  white-space: nowrap;
  transition: border-color 0.22s ease, box-shadow 0.22s ease, transform 0.22s ease;
}

.drink-tabs a:hover,
.drink-center-action a:hover,
.collection-intro a:hover,
.social-panel > a:hover,
.drink-cta-button:hover,
.floating-reserve a:hover {
  border-color: var(--gold-soft);
  box-shadow: 0 0 24px rgba(215, 173, 36, 0.34);
  transform: translateY(-2px);
}

.beer-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 10px;
}

.beer-card {
  position: relative;
  display: grid;
  grid-template-columns: 35% 1fr;
  gap: 16px;
  align-items: center;
  min-height: 130px;
  padding: 14px 18px;
  border: 1px solid rgba(215, 173, 36, 0.34);
  border-radius: 8px;
  background: linear-gradient(135deg, rgba(20, 20, 19, 0.94), rgba(8, 8, 7, 0.96));
}

.beer-card img {
  width: 100%;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  border-radius: 6px;
}

.beer-card h3,
.bottle-card h3,
.whisky-card h3,
.pairing-card h3 {
  margin: 0;
  color: #f8efe2;
  font-size: clamp(17px, 1.5vw, 22px);
  font-weight: 900;
  line-height: 1.22;
}

.beer-card h3 small {
  display: inline;
  margin-left: 4px;
  color: rgba(246, 239, 227, 0.78);
  font-size: 0.72em;
}

.drink-tag,
.bottle-card span {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 22px;
  margin-top: 6px;
  padding: 0 9px;
  border: 1px solid rgba(215, 173, 36, 0.72);
  border-radius: 999px;
  color: var(--gold-soft);
  font-size: 10px;
  font-weight: 900;
  line-height: 1;
}

.beer-card p,
.whisky-card p,
.pairing-card small {
  margin: 8px 0 0;
  color: var(--muted);
  font-size: clamp(12px, 1vw, 15px);
  font-weight: 700;
  line-height: 1.65;
}

.beer-card b,
.whisky-card b {
  display: block;
  margin-top: 7px;
  color: var(--gold-soft);
  font-size: clamp(12px, 1vw, 15px);
}

.drink-center-action {
  display: flex;
  justify-content: center;
  margin: 8px 0 18px;
}

.drink-center-action a,
.collection-intro a,
.social-panel > a {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  width: min(100%, 260px);
  min-height: 34px;
  border: 1px solid rgba(215, 173, 36, 0.68);
  border-radius: 5px;
  background: rgba(8, 8, 7, 0.9);
  color: #f7f0e7;
  font-size: 13px;
  font-weight: 900;
  transition: border-color 0.22s ease, box-shadow 0.22s ease, transform 0.22s ease;
}

.drink-center-action small,
.collection-intro a,
.social-panel small {
  color: var(--gold-soft);
  font-family: var(--font-oswald), sans-serif;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.1em;
}

.signature-section {
  display: grid;
  grid-template-columns: minmax(250px, 0.62fr) minmax(320px, 1fr);
  gap: 22px;
  min-height: 244px;
  padding: clamp(20px, 3vw, 34px);
  border: 1px solid rgba(215, 173, 36, 0.46);
  border-radius: 8px;
  background: linear-gradient(90deg, rgba(11, 10, 9, 0.96), rgba(9, 8, 8, 0.82));
}

.signature-copy h3 {
  margin: 18px 0 0;
  color: #f7f0e7;
  font-size: clamp(20px, 2vw, 28px);
  font-weight: 900;
}

.signature-copy p {
  margin: 16px 0 0;
  color: var(--muted);
  font-size: clamp(14px, 1.4vw, 18px);
  font-weight: 700;
  line-height: 1.8;
}

.signature-copy dl {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;
  margin: 24px 0 0;
}

.signature-copy dt,
.signature-copy dd {
  margin: 0;
  color: var(--gold-soft);
  font-family: var(--font-oswald), sans-serif;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.05em;
}

.signature-copy dd {
  color: rgba(246, 239, 227, 0.78);
}

.signature-section img {
  min-height: 210px;
  border-radius: 6px;
}

.collection-grid {
  display: grid;
  grid-template-columns: 0.62fr repeat(3, 1fr) 0.72fr;
  gap: 8px;
  margin-top: 24px;
}

.collection-intro,
.bottle-card,
.whisky-card,
.pairing-card,
.social-panel {
  border: 1px solid rgba(215, 173, 36, 0.34);
  border-radius: 7px;
  background: rgba(10, 10, 9, 0.88);
}

.collection-intro {
  display: grid;
  align-content: space-between;
  min-height: 154px;
  padding: 18px;
}

.collection-intro .drink-section-title {
  display: grid;
  gap: 8px;
}

.collection-intro.whisky {
  background:
    linear-gradient(90deg, rgba(8, 8, 7, 0.92), rgba(8, 8, 7, 0.62)),
    url("${assetBase}/whisky-collection.png") center / cover;
}

.bottle-card {
  display: grid;
  grid-template-columns: 34% 1fr;
  gap: 12px;
  align-items: center;
  min-height: 154px;
  padding: 12px;
}

.bottle-card img,
.whisky-card img {
  display: block;
  width: 100%;
  height: 118px;
  object-fit: contain;
}

.bottle-card p {
  margin: 4px 0 0;
  color: var(--muted);
  font-size: 12px;
  font-weight: 700;
}

.bottle-card strong {
  display: block;
  margin-top: 8px;
  color: var(--gold-soft);
  font-size: clamp(16px, 1.6vw, 22px);
}

.whisky-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 8px;
  margin-top: 14px;
}

.whisky-card {
  display: grid;
  grid-template-columns: 34% 1fr;
  gap: 14px;
  min-height: 128px;
  padding: 12px;
}

.whisky-card small {
  display: block;
  margin-top: 2px;
  color: var(--gold-soft);
  font-family: var(--font-oswald), sans-serif;
  font-size: 11px;
  font-weight: 700;
  line-height: 1.2;
}

.pairing-section {
  margin-top: 24px;
  padding: 18px 22px 24px;
  border: 1px solid rgba(215, 173, 36, 0.38);
  border-radius: 8px;
  background: rgba(10, 10, 9, 0.88);
}

.pairing-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 26px;
  margin-top: 18px;
}

.pairing-card {
  display: grid;
  grid-template-columns: 78px 1fr;
  gap: 14px;
  align-items: center;
  min-height: 134px;
  padding: 12px;
}

.pairing-card img {
  width: 78px;
  height: 78px;
  object-fit: cover;
  border-radius: 6px;
}

.pairing-card span {
  color: var(--gold-soft);
  font-size: 22px;
  font-weight: 900;
}

.pairing-card p {
  display: inline;
  margin: 0 0 0 14px;
  color: #f8efe2;
  font-weight: 900;
}

.pairing-card small {
  grid-column: 1 / -1;
}

.social-grid {
  display: grid;
  grid-template-columns: 0.95fr 1.15fr 0.95fr;
  gap: 12px;
  margin-top: 26px;
}

.social-panel {
  display: grid;
  gap: 14px;
  align-content: start;
  min-height: 230px;
  padding: 18px;
}

.social-panel .drink-section-title {
  display: grid;
  gap: 6px;
}

.social-panel img {
  height: 142px;
  border-radius: 7px;
}

.review-row {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 10px;
}

.mini-review {
  display: grid;
  gap: 8px;
  min-height: 132px;
  padding: 12px;
  border: 1px solid rgba(215, 173, 36, 0.2);
  border-radius: 7px;
  background: rgba(15, 15, 14, 0.88);
}

.mini-review b {
  color: #f7f0e7;
  font-size: 14px;
}

.mini-review span {
  display: flex;
  gap: 1px;
  color: var(--gold-soft);
}

.mini-review p {
  margin: 0;
  color: var(--muted);
  font-size: 12px;
  font-weight: 700;
  line-height: 1.55;
}

.drink-bottom-cta {
  display: grid;
  min-height: clamp(160px, 22vw, 260px);
  place-items: center;
  padding: clamp(28px, 6vw, 56px) clamp(18px, 4vw, 48px);
  background:
    linear-gradient(180deg, rgba(5, 5, 4, 0.18), rgba(5, 5, 4, 0.84)),
    url("${assetBase}/cta-background-clean.png") center / cover;
  text-align: center;
}

.drink-bottom-cta h2 {
  margin: 0;
  color: #79b9ff;
  font-family: var(--font-oswald), sans-serif;
  font-size: clamp(34px, 5.8vw, 80px);
  font-weight: 700;
  line-height: 0.95;
  letter-spacing: 0.18em;
  text-shadow: 0 0 24px rgba(68, 144, 255, 0.68), 0 0 28px rgba(227, 72, 236, 0.34);
}

.drink-bottom-cta p {
  margin: 10px 0 0;
  color: #f8efe2;
  font-size: clamp(13px, 1.6vw, 18px);
  font-weight: 800;
}

.drink-cta-row {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 12px;
  margin-top: 20px;
}

.drink-cta-button {
  --button-accent: var(--gold);
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: clamp(150px, 18vw, 220px);
  min-height: 48px;
  border: 1px solid var(--button-accent);
  border-radius: 7px;
  background: rgba(6, 6, 6, 0.72);
  box-shadow: inset 0 0 22px color-mix(in srgb, var(--button-accent), transparent 74%);
  transition: box-shadow 0.22s ease, transform 0.22s ease;
}

.drink-cta-button.green {
  --button-accent: #11d95a;
}

.drink-cta-button.blue {
  --button-accent: #37a8ff;
}

.drink-cta-button span {
  color: #f8efe2;
  font-size: clamp(14px, 1.3vw, 18px);
  font-weight: 900;
  line-height: 1;
}

.drink-cta-button small {
  margin-top: 4px;
  color: var(--button-accent);
  font-family: var(--font-oswald), sans-serif;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.1em;
}

.floating-reserve {
  position: fixed;
  right: max(10px, env(safe-area-inset-right));
  bottom: max(18px, env(safe-area-inset-bottom));
  z-index: 40;
  display: grid;
  gap: 8px;
}

.floating-reserve a {
  display: grid;
  justify-items: center;
  gap: 3px;
  width: 66px;
  min-height: 66px;
  padding: 8px 4px;
  border: 1px solid var(--float-accent);
  border-radius: 14px;
  background: rgba(8, 8, 7, 0.88);
  color: #f8efe2;
  box-shadow: inset 0 0 20px color-mix(in srgb, var(--float-accent), transparent 78%);
  transition: box-shadow 0.22s ease, transform 0.22s ease;
}

.floating-reserve a.gold {
  --float-accent: var(--gold);
}

.floating-reserve a.green {
  --float-accent: #0ed85d;
}

.floating-reserve a.pink {
  --float-accent: #f254be;
}

.floating-reserve svg {
  color: var(--float-accent);
}

.floating-reserve span {
  font-size: 10px;
  font-weight: 900;
  line-height: 1.15;
}

@media (max-width: 1180px) {
  .drink-nav {
    gap: 14px;
  }

  .collection-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .collection-intro,
  .collection-intro.whisky {
    grid-column: span 3;
    min-height: 120px;
  }

  .whisky-grid,
  .beer-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .social-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 900px) {
  .drink-header {
    min-height: 72px;
  }

  .drink-nav {
    display: none;
  }

  .drink-mobile-nav {
    display: block;
  }

  .drink-concept,
  .signature-section,
  .drink-all-panel {
    grid-template-columns: 1fr;
  }

  .drink-tabs {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }

  .pairing-grid {
    grid-template-columns: 1fr;
  }

  .review-row {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 620px) {
  .drink-header {
    padding-inline: 12px;
  }

  .drink-logo {
    min-width: 0;
  }

  .drink-logo-icon {
    width: 30px;
  }

  .drink-logo-kicker {
    font-size: 8px;
  }

  .drink-logo-name {
    font-size: 18px;
  }

  .drink-hero {
    min-height: 360px;
    background-position: center top;
  }

  .drink-main {
    padding-inline: 12px;
  }

  .beer-grid,
  .whisky-grid,
  .collection-grid {
    grid-template-columns: 1fr;
  }

  .collection-intro,
  .collection-intro.whisky {
    grid-column: auto;
  }

  .drink-tabs {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .beer-card,
  .bottle-card,
  .whisky-card {
    grid-template-columns: 96px 1fr;
  }

  .floating-reserve {
    right: 8px;
    gap: 6px;
  }

  .floating-reserve a {
    width: 56px;
    min-height: 56px;
  }
}
`;
