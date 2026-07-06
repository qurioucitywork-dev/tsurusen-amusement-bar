/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { TsurusenTopHeader } from "./TsurusenTopHeader";
import { TsurusenReadyFooter } from "./TsurusenReadyFooter";
import {
  Beer,
  CheckCircle2,
  ChevronRight,
  Citrus,
  CupSoda,
  GlassWater,
  Martini,
  Star,
  Wine,
} from "lucide-react";

const assetBase = "/assets/tsurusen-drink/png";
const productAssetBase = "/assets/tsurusen-drink/product-clean";
const collectionAssetBase = "/assets/tsurusen-drink/collection-clean";

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
    image: "beer-clean-01.png",
  },
  {
    name: "シャンディガフ",
    body: "ビール×ジンジャーエールの定番。",
    alc: "ALC. 3%",
    tag: "おすすめ",
    image: "beer-clean-02.png",
  },
  {
    name: "コロナ",
    body: "ライムを絞って爽快に。",
    alc: "ALC. 4.5%",
    tag: "人気",
    image: "beer-clean-03.png",
  },
  {
    name: "ハイネケン",
    body: "世界中で愛されるラガービール。",
    alc: "ALC. 5%",
    tag: "NEW",
    image: "beer-clean-04.png",
  },
  {
    name: "ギネス",
    body: "クリーミーな泡が特徴の黒ビール。",
    alc: "ALC. 4.5%",
    tag: "おすすめ",
    image: "beer-clean-05.png",
  },
  {
    name: "ブルームーン",
    body: "オレンジピール香るホワイトビール。",
    alc: "ALC. 5.4%",
    image: "beer-clean-06.png",
  },
];

const champagnes = [
  { name: "Moet & Chandon", jp: "モエ・エ・シャンドン", price: "¥15,000", tag: "人気 No.1", image: "champagne-bottle-01.png" },
  { name: "Veuve Clicquot", jp: "ヴーヴ・クリコ", price: "¥18,000", tag: "おすすめ", image: "champagne-bottle-02.png" },
  { name: "Dom Perignon", jp: "ドン・ペリニヨン", price: "¥38,000", tag: "VIP 人気", image: "champagne-bottle-03.png" },
];

const whiskies = [
  { name: "山崎 12年", en: "YAMAZAKI 12Y", body: "華やか、繊細、熟した果実", finishLabel: "熟成年数", finishValue: "12年", image: "whisky-bottle-01.png" },
  { name: "マッカラン 12年", en: "MACALLAN 12Y", body: "レーズン、ドライフルーツ", finishLabel: "熟成年数", finishValue: "12年", image: "whisky-bottle-02.png" },
  { name: "ボウモア 12年", en: "BOWMORE 12Y", body: "スモーキー、潮風、スモーク", finishLabel: "熟成年数", finishValue: "12年", image: "whisky-bottle-03.png" },
  { name: "ジャックダニエル", en: "JACK DANIEL'S", body: "バニラ、キャラメル、スムース", finishLabel: "熟成年数", finishValue: "-", image: "whisky-bottle-04.png" },
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

function Header() {
  return <TsurusenTopHeader active="DRINK MENU" />;
}

function SectionTitle({ label, sub }: { label: string; sub?: string }) {
  return (
    <div className="drink-section-title">
      <h2>{label}</h2>
      {sub ? <p>{sub}</p> : null}
    </div>
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

        <section className="drink-products-section" id="beer" aria-label="Beer menu">
          <nav className="drink-tabs" aria-label="Drink categories">
            {tabs.map((tab) => (
              <Link key={tab} href={`/drink-menu#${tab.toLowerCase().replaceAll(" ", "-")}`}>
                {tab}
              </Link>
            ))}
          </nav>

          <div className="beer-grid">
            {beerItems.map((item) => (
              <article className="beer-card" key={item.name}>
                <img src={`${productAssetBase}/${item.image}`} alt="" />
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
          </div>

          <div className="drink-center-action">
            <Link href="/drink-menu#beer">
              すべてのビールを見る
              <small>VIEW MORE</small>
            </Link>
          </div>
        </section>

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

        <section className="collection-showcase-section" id="champagne" aria-label="Champagne and whisky collection">
          <div className="collection-showcase-grid">
            <article className="collection-title-card collection-title-card--champagne">
              <div>
                <h2>CHAMPAGNE</h2>
                <p>お祝いにふさわしいシャンパン</p>
              </div>
              <Link href="/drink-menu#champagne">
                <span>VIEW MORE</span>
                <ChevronRight aria-hidden="true" />
              </Link>
            </article>

            {champagnes.map((item) => (
              <article className="collection-product-card" key={item.name}>
                <img src={`${collectionAssetBase}/${item.image}`} alt={item.name} />
                <div>
                  <h3>{item.name}</h3>
                  <p>{item.jp}</p>
                  <strong>{item.price}</strong>
                  <span>{item.tag}</span>
                </div>
              </article>
            ))}

            <article className="collection-title-card collection-title-card--whisky" id="whisky">
              <div>
                <h2>WHISKY COLLECTION</h2>
                <p>世界のウイスキーを厳選</p>
              </div>
              <Link href="/drink-menu#whisky">
                <span>VIEW MORE</span>
                <ChevronRight aria-hidden="true" />
              </Link>
            </article>
          </div>

          <div className="collection-whisky-grid">
            {whiskies.map((item) => (
              <article className="collection-product-card collection-product-card--whisky" key={item.name}>
                <img src={`${collectionAssetBase}/${item.image}`} alt={item.name} />
                <div>
                  <h3>{item.name}</h3>
                  <small>{item.en}</small>
                  <p>{item.body}</p>
                  <b>
                    <span>{item.finishLabel}</span>
                    <span>{item.finishValue}</span>
                  </b>
                </div>
              </article>
            ))}
          </div>

          <div className="collection-view-more">
            <Link href="/drink-menu#whisky">
              <span>すべてのウイスキーを見る</span>
              <small>VIEW MORE</small>
              <ChevronRight aria-hidden="true" />
            </Link>
          </div>
        </section>

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
            <Link href="/entertainment">もっと見る <small>VIEW MORE</small></Link>
          </article>
        </section>
      </main>

      <TsurusenReadyFooter />
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
  min-height: 100svh;
  overflow-x: hidden;
  background:
    radial-gradient(circle at 50% 0%, rgba(102, 73, 16, 0.22), transparent 36rem),
    #060605;
  color: var(--ink);
  font-family: var(--font-noto-sans-jp), sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: geometricPrecision;
  font-feature-settings: "kern", "liga";
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
  width: min(100%, 1800px);
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

.drink-products-section {
  width: min(96vw, 1800px);
  margin-inline: auto;
  padding: clamp(40px, 6vh, 90px) clamp(20px, 3vw, 48px);
}

.drink-tabs {
  display: grid;
  grid-template-columns: repeat(8, minmax(0, 1fr));
  gap: 14px;
  margin: 0;
}

.drink-tabs a {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 56px;
  padding-inline: 10px;
  border: 1px solid rgba(212, 176, 83, 0.75);
  border-radius: 12px;
  background: rgba(11, 10, 8, 0.88);
  color: #f7f0e7;
  font-family: var(--font-oswald), var(--font-bebas), sans-serif;
  font-size: clamp(18px, 1.4vw, 28px);
  font-weight: 800;
  letter-spacing: 0.08em;
  line-height: 1;
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
  gap: 24px;
  margin-top: 28px;
}

.beer-card {
  display: grid;
  grid-template-columns: clamp(130px, 10vw, 180px) minmax(0, 1fr);
  gap: clamp(16px, 1.5vw, 28px);
  align-items: center;
  min-height: clamp(210px, 18vh, 260px);
  padding: clamp(18px, 1.6vw, 28px);
  border: 1px solid rgba(212, 176, 83, 0.55);
  border-radius: 16px;
  background:
    radial-gradient(circle at 18% 18%, rgba(212, 176, 83, 0.05), transparent 13rem),
    linear-gradient(135deg, #070707, #111111);
  box-shadow: inset 0 0 24px rgba(212, 176, 83, 0.03);
}

.beer-card img {
  display: block;
  width: clamp(130px, 10vw, 180px);
  height: clamp(128px, 9.5vw, 170px);
  object-fit: cover;
  object-position: center;
  border-radius: 12px;
}

.beer-card h3,
.bottle-card h3,
.whisky-card h3,
.pairing-card h3 {
  margin: 0;
  color: #f8efe2;
  font-size: clamp(24px, 1.85vw, 42px);
  font-weight: 900;
  line-height: 1.2;
}

.beer-card h3 small {
  display: inline;
  margin-left: 8px;
  color: rgba(246, 239, 227, 0.78);
  font-size: 0.62em;
}

.drink-tag,
.bottle-card span {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 30px;
  margin-top: 10px;
  padding: 4px 12px;
  border: 1px solid #d8b15a;
  border-radius: 999px;
  color: #d8b15a;
  font-size: clamp(14px, 1.05vw, 18px);
  font-weight: 900;
  line-height: 1;
}

.beer-card p,
.whisky-card p,
.pairing-card small {
  margin: clamp(12px, 1.2vw, 18px) 0 0;
  color: #f7f0e7;
  font-size: clamp(16px, 1.15vw, 26px);
  font-weight: 800;
  line-height: 1.7;
}

.beer-card b,
.whisky-card b {
  display: block;
  margin-top: clamp(14px, 1.4vw, 20px);
  color: #f2c94c;
  font-size: clamp(20px, 1.45vw, 30px);
  font-weight: 900;
}

.bottle-card h3,
.whisky-card h3,
.pairing-card h3 {
  font-size: clamp(17px, 1.5vw, 22px);
  line-height: 1.22;
}

.bottle-card span {
  min-height: 22px;
  margin-top: 6px;
  padding: 0 9px;
  border-color: rgba(215, 173, 36, 0.72);
  color: var(--gold-soft);
  font-size: 10px;
}

.whisky-card p,
.pairing-card small {
  margin: 8px 0 0;
  color: var(--muted);
  font-size: clamp(12px, 1vw, 15px);
  font-weight: 700;
  line-height: 1.65;
}

.whisky-card b {
  margin-top: 7px;
  font-size: clamp(12px, 1vw, 15px);
}

.drink-center-action {
  display: flex;
  justify-content: center;
  margin: 32px 0 0;
}

.drink-center-action a {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
  width: clamp(320px, 36vw, 520px);
  min-height: 60px;
  border: 1px solid rgba(212, 176, 83, 0.75);
  border-radius: 12px;
  background: rgba(8, 8, 7, 0.9);
  color: #f7f0e7;
  font-size: clamp(18px, 1.25vw, 24px);
  font-weight: 900;
  transition: border-color 0.22s ease, box-shadow 0.22s ease, transform 0.22s ease;
}

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

.collection-showcase-section {
  width: min(1800px, 96vw);
  margin: 0 auto;
  padding: clamp(40px, 5vh, 90px) clamp(24px, 3vw, 56px);
  box-sizing: border-box;
}

.collection-showcase-grid {
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 28px;
  align-items: stretch;
}

.collection-whisky-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 28px;
  align-items: stretch;
  margin-top: 28px;
}

.collection-title-card,
.collection-product-card,
.pairing-card,
.social-panel {
  border: 1px solid rgba(215, 173, 36, 0.34);
  border-radius: 18px;
  background: linear-gradient(180deg, #0a0a0a, #101010);
}

.collection-title-card,
.collection-product-card {
  display: grid;
  min-height: clamp(230px, 22vh, 280px);
  padding: clamp(20px, 2vw, 30px);
  box-shadow: inset 0 0 32px rgba(212, 176, 83, 0.035);
  transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;
}

.collection-title-card:hover,
.collection-product-card:hover {
  border-color: rgba(212, 176, 83, 0.82);
  box-shadow: 0 0 30px rgba(212, 176, 83, 0.35), inset 0 0 32px rgba(212, 176, 83, 0.04);
  transform: translateY(-6px);
}

.collection-title-card {
  align-content: space-between;
  background:
    linear-gradient(90deg, rgba(7, 7, 7, 0.98) 0%, rgba(8, 8, 8, 0.92) 56%, rgba(8, 8, 8, 0.42) 100%),
    radial-gradient(circle at 90% 30%, rgba(216, 177, 90, 0.22), transparent 42%);
}

.collection-title-card--champagne {
  background:
    linear-gradient(90deg, rgba(7, 7, 7, 0.99) 0%, rgba(8, 8, 8, 0.93) 55%, rgba(8, 8, 8, 0.4) 100%),
    url("${collectionAssetBase}/champagne-title-bg.png") right center / auto 100% no-repeat,
    radial-gradient(circle at 90% 50%, rgba(216, 177, 90, 0.22), transparent 46%);
}

.collection-title-card--whisky {
  background:
    linear-gradient(90deg, rgba(7, 7, 7, 0.99) 0%, rgba(8, 8, 8, 0.94) 57%, rgba(8, 8, 8, 0.42) 100%),
    url("${collectionAssetBase}/whisky-title-bg.png") right center / auto 100% no-repeat,
    radial-gradient(circle at 92% 50%, rgba(216, 177, 90, 0.18), transparent 48%);
}

.collection-title-card h2 {
  max-width: 11ch;
  margin: 0;
  background: linear-gradient(180deg, #fff1a6 0%, #d8b15a 48%, #b07b20 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  font-family: var(--font-bebas), var(--font-oswald), sans-serif;
  font-size: clamp(42px, 3vw, 68px);
  font-weight: 900;
  letter-spacing: 0.08em;
  line-height: 0.94;
  text-shadow: 0 0 24px rgba(212, 176, 83, 0.22);
}

.collection-title-card p {
  max-width: 13em;
  margin: clamp(18px, 1.8vw, 28px) 0 0;
  color: #fff8ed;
  font-size: clamp(20px, 1.35vw, 28px);
  font-weight: 900;
  line-height: 1.7;
}

.collection-title-card a {
  display: inline-flex;
  width: min(100%, 300px);
  min-height: 60px;
  align-items: center;
  justify-content: center;
  gap: 18px;
  padding: 0 24px;
  border: 1px solid rgba(212, 176, 83, 0.82);
  border-radius: 12px;
  color: #f2c94c;
  font-family: var(--font-oswald), sans-serif;
  font-size: clamp(18px, 1.2vw, 24px);
  font-weight: 900;
  letter-spacing: 0.12em;
  text-decoration: none;
}

.collection-title-card a svg,
.collection-view-more a svg {
  width: 24px;
  height: 24px;
  stroke-width: 3;
}

.collection-product-card {
  display: grid;
  grid-template-columns: minmax(92px, 118px) minmax(0, 1fr);
  gap: clamp(16px, 1.35vw, 24px);
  align-items: center;
}

.collection-product-card img {
  display: block;
  width: 118px;
  max-width: 100%;
  height: 170px;
  object-fit: contain;
  object-position: center;
}

.collection-product-card h3 {
  margin: 0;
  color: #fbf7ef;
  font-size: clamp(24px, 1.55vw, 36px);
  font-weight: 900;
  line-height: 1.14;
  text-wrap: balance;
}

.collection-product-card p,
.collection-product-card small {
  display: block;
  margin: clamp(8px, 1vw, 14px) 0 0;
}

.collection-product-card p {
  color: #fff5e6;
  font-size: clamp(18px, 1.08vw, 22px);
  font-weight: 800;
  line-height: 1.7;
}

.collection-product-card small {
  color: #d8b15a;
  font-family: var(--font-oswald), sans-serif;
  font-size: 20px;
  font-weight: 900;
  letter-spacing: 0.08em;
  line-height: 1.2;
  text-transform: uppercase;
}

.collection-product-card strong {
  display: block;
  margin-top: clamp(18px, 1.7vw, 28px);
  color: #f2c94c;
  font-size: clamp(30px, 1.8vw, 38px);
  font-weight: 900;
  line-height: 1.1;
}

.collection-product-card > div > span {
  display: inline-flex;
  min-height: 42px;
  align-items: center;
  justify-content: center;
  margin-top: clamp(16px, 1.5vw, 24px);
  padding: 4px 14px;
  border: 1px solid #d8b15a;
  border-radius: 999px;
  color: #f2c94c;
  font-size: clamp(16px, 1.08vw, 22px);
  font-weight: 900;
  line-height: 1;
}

.collection-product-card b {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 18px;
  align-items: center;
  margin-top: clamp(18px, 1.8vw, 30px);
  padding-top: clamp(18px, 1.6vw, 24px);
  border-top: 1px solid rgba(255, 255, 255, 0.28);
  color: #f2c94c;
  font-size: clamp(22px, 1.35vw, 30px);
  font-weight: 900;
  line-height: 1.15;
}

.collection-product-card b span,
.collection-view-more a > span {
  white-space: nowrap;
}

.collection-view-more {
  display: flex;
  justify-content: center;
  margin-top: 32px;
}

.collection-view-more a {
  display: inline-flex;
  width: clamp(360px, 42vw, 760px);
  min-height: 72px;
  align-items: center;
  justify-content: center;
  gap: 24px;
  padding: 0 28px;
  border: 1px solid rgba(212, 176, 83, 0.82);
  border-radius: 12px;
  background: linear-gradient(180deg, rgba(16, 16, 16, 0.94), rgba(5, 5, 5, 0.98));
  color: #fff8ed;
  font-family: var(--font-oswald), sans-serif;
  font-size: clamp(22px, 1.7vw, 34px);
  font-weight: 900;
  letter-spacing: 0.04em;
  text-decoration: none;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.collection-view-more a:hover {
  box-shadow: 0 0 30px rgba(212, 176, 83, 0.35);
  transform: translateY(-3px) scale(1.03);
}

.collection-view-more small {
  color: #f2c94c;
  font-size: 0.82em;
  letter-spacing: 0.14em;
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
  width: min(96vw, 1600px);
  height: auto;
  max-height: none;
  min-height: clamp(520px, 48vw, 760px);
  margin: clamp(28px, 4vw, 54px) auto 0;
  place-items: center;
  padding: clamp(80px, 8vh, 140px) clamp(24px, 3vw, 56px) clamp(100px, 10vh, 160px);
  border: 1px solid rgba(216, 173, 30, 0.78);
  border-radius: 0;
  clip-path: polygon(16px 0, calc(100% - 16px) 0, 100% 16px, 100% calc(100% - 16px), calc(100% - 16px) 100%, 16px 100%, 0 calc(100% - 16px), 0 16px);
  background:
    radial-gradient(ellipse at 10% 0%, rgba(36, 194, 255, 0.8) 0%, rgba(36, 194, 255, 0.28) 8%, transparent 23%),
    radial-gradient(ellipse at 24% 0%, rgba(45, 139, 255, 0.72) 0%, rgba(45, 139, 255, 0.26) 8%, transparent 24%),
    radial-gradient(ellipse at 40% 0%, rgba(92, 105, 255, 0.72) 0%, rgba(92, 105, 255, 0.26) 8%, transparent 24%),
    radial-gradient(ellipse at 56% 0%, rgba(130, 83, 255, 0.72) 0%, rgba(130, 83, 255, 0.26) 8%, transparent 25%),
    radial-gradient(ellipse at 72% 0%, rgba(207, 58, 255, 0.72) 0%, rgba(207, 58, 255, 0.26) 8%, transparent 24%),
    radial-gradient(ellipse at 88% 0%, rgba(255, 58, 210, 0.74) 0%, rgba(255, 58, 210, 0.28) 8%, transparent 24%),
    radial-gradient(ellipse at 18% 92%, rgba(216, 173, 30, 0.44), transparent 25%),
    radial-gradient(ellipse at 50% 92%, rgba(28, 255, 94, 0.26), transparent 31%),
    radial-gradient(ellipse at 82% 92%, rgba(255, 47, 210, 0.32), transparent 27%),
    linear-gradient(180deg, rgba(1, 1, 2, 0.98) 0%, rgba(6, 4, 12, 0.92) 54%, rgba(2, 2, 3, 0.98) 100%);
  text-align: center;
  box-shadow:
    0 0 38px rgba(0, 0, 0, 0.72),
    inset 0 0 80px rgba(0, 0, 0, 0.82),
    inset 0 0 34px rgba(216, 173, 30, 0.08);
}

.drink-bottom-cta > div {
  width: min(100%, 1320px);
}

.drink-bottom-cta h2 {
  margin: 0;
  font-family: var(--font-bebas), var(--font-oswald), sans-serif;
  font-size: clamp(78px, 10vw, 150px);
  font-weight: 900;
  line-height: 0.9;
  letter-spacing: 0.04em;
  background: linear-gradient(90deg, #24c8ff 0%, #84a8ff 42%, #bc7bff 68%, #ff43e9 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  filter: drop-shadow(0 0 18px rgba(0, 157, 255, 0.62)) drop-shadow(0 0 26px rgba(223, 63, 255, 0.42));
  text-shadow:
    0 0 28px rgba(0, 157, 255, 0.74),
    0 0 42px rgba(223, 63, 255, 0.48);
}

.drink-bottom-cta p {
  margin: clamp(18px, 2vw, 28px) 0 0;
  color: #f8efe2;
  font-size: clamp(20px, 2vw, 34px);
  font-weight: 700;
  line-height: 1.7;
  text-shadow: 0 0 18px rgba(255, 255, 255, 0.24);
}

.drink-cta-row {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: clamp(20px, 3vw, 34px);
  margin-top: clamp(34px, 4vw, 52px);
}

.drink-cta-button {
  --button-accent: var(--gold);
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 26px;
  width: min(100%, 320px);
  min-height: 80px;
  padding: 14px 24px;
  border: 1px solid var(--button-accent);
  border-radius: 18px;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.055), rgba(3, 3, 5, 0.84));
  box-shadow:
    inset 0 0 28px color-mix(in srgb, var(--button-accent), transparent 78%),
    0 0 28px color-mix(in srgb, var(--button-accent), transparent 72%);
  transition: box-shadow 0.22s ease, transform 0.22s ease;
}

.drink-cta-button svg {
  flex: 0 0 auto;
  color: var(--button-accent);
  filter: drop-shadow(0 0 10px color-mix(in srgb, var(--button-accent), transparent 35%));
}

.drink-cta-button.green {
  --button-accent: #11d95a;
}

.drink-cta-button.blue {
  --button-accent: #37a8ff;
}

.drink-cta-button span {
  display: grid;
  gap: 6px;
  color: #f8efe2;
  text-align: left;
}

.drink-cta-button strong {
  font-size: clamp(24px, 2vw, 36px);
  font-weight: 900;
  line-height: 1;
  letter-spacing: 0.08em;
  white-space: nowrap;
}

.drink-cta-button small {
  color: var(--button-accent);
  font-family: var(--font-oswald), sans-serif;
  font-size: clamp(12px, 1vw, 17px);
  font-weight: 700;
  line-height: 1;
  letter-spacing: 0.16em;
}

.drink-cta-button:hover {
  transform: translateY(-4px);
  box-shadow:
    inset 0 0 34px color-mix(in srgb, var(--button-accent), transparent 72%),
    0 0 40px color-mix(in srgb, var(--button-accent), transparent 50%);
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

@media (max-width: 2200px) {
  .floating-reserve {
    display: none;
  }
}

@media (max-width: 1540px) {
  .collection-showcase-grid {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }

  .collection-whisky-grid {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }

  .collection-product-card {
    grid-template-columns: minmax(88px, 108px) minmax(0, 1fr);
  }

  .collection-product-card img {
    width: 108px;
    height: 158px;
  }
}

@media (max-width: 1180px) {
  .drink-nav {
    gap: 14px;
  }

  .drink-tabs {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }

  .collection-showcase-grid,
  .collection-whisky-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

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
  .collection-showcase-grid,
  .collection-whisky-grid {
    grid-template-columns: 1fr;
  }

  .collection-showcase-section {
    width: min(100%, 1800px);
    padding: clamp(34px, 5vh, 56px) clamp(12px, 3.8vw, 18px);
  }

  .drink-tabs {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 10px;
  }

  .drink-products-section {
    width: min(100%, 1800px);
    padding: clamp(34px, 5vh, 56px) clamp(12px, 3.8vw, 18px);
  }

  .beer-card {
    grid-template-columns: 1fr;
    justify-items: center;
    gap: 16px;
  }

  .collection-title-card,
  .collection-product-card {
    min-height: auto;
  }

  .collection-product-card {
    grid-template-columns: 1fr;
    justify-items: center;
    gap: 16px;
  }

  .collection-product-card img {
    width: min(100%, 190px);
    height: 190px;
  }

  .collection-product-card > div {
    width: 100%;
  }

  .collection-view-more a {
    width: min(100%, 520px);
    flex-wrap: wrap;
    min-height: 66px;
  }

  .collection-view-more a > span {
    white-space: normal;
  }

  .beer-card {
    text-align: left;
  }

  .beer-card img {
    width: min(100%, 260px);
    height: clamp(180px, 52vw, 240px);
  }

  .beer-card > div {
    width: 100%;
  }

  .drink-bottom-cta {
    width: calc(100% - 20px);
    height: auto;
    max-height: none;
    min-height: auto;
    padding: clamp(64px, 12vh, 92px) 16px max(clamp(116px, 28vw, 156px), calc(env(safe-area-inset-bottom) + 112px));
  }

  .drink-bottom-cta h2 {
    max-width: 100%;
    font-size: clamp(42px, 12vw, 66px);
    line-height: 0.96;
    text-wrap: balance;
  }

  .drink-bottom-cta p {
    font-size: clamp(18px, 5vw, 24px);
  }

  .drink-cta-row {
    flex-direction: column;
    align-items: center;
    gap: 16px;
  }

  .drink-cta-button {
    width: min(100%, 320px);
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
