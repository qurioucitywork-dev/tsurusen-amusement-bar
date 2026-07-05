/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import {
  ArrowRight,
  BatteryCharging,
  Calculator,
  CalendarDays,
  Camera,
  CheckCircle2,
  CircleUserRound,
  ClipboardList,
  DoorOpen,
  Gamepad2,
  Martini,
  MessageCircle,
  Mic,
  Monitor,
  Phone,
  Target,
} from "lucide-react";

const assetBase = "/assets/tsurusen-price/png";

const navItems = [
  { label: "TOP", href: "/" },
  { label: "ABOUT", href: "/#about" },
  { label: "FEATURE", href: "/#feature" },
  { label: "PRICE & SYSTEM", href: "/pricing", active: true },
  { label: "ENTERTAINMENT", href: "/play" },
  { label: "SCENE", href: "/#scene" },
  { label: "GALLERY", href: "/#gallery" },
  { label: "EVENT", href: "/#event" },
  { label: "CAMPAIGN", href: "/campaigns" },
  { label: "ACCESS", href: "/access" },
];

const includedItems = [
  { title: "飲み放題", body: "豊富なドリンクが飲み放題", image: "included-drink.png", icon: Martini },
  { title: "ダーツ遊び放題", body: "ダーツはすべて無料で遊び放題", image: "included-darts.png", icon: Target },
  { title: "カラオケ歌い放題", body: "最新機種で歌い放題", image: "included-karaoke.png", icon: Mic },
  { title: "ボードゲーム", body: "人気のボードゲームを多数ご用意", image: "included-boardgame.png", icon: Gamepad2 },
  { title: "大型モニター", body: "スポーツ観戦や映像を大画面で楽しめる", image: "included-monitor.png", icon: Monitor },
  { title: "充電設備", body: "スマホ充電OK 各席に完備", image: "included-charge.png", icon: BatteryCharging },
];

const flowItems = [
  { step: "1", title: "来店", icon: DoorOpen },
  { step: "2", title: "受付", icon: ClipboardList },
  { step: "3", title: "飲み放題スタート", icon: Martini },
  { step: "4", title: "ダーツ・カラオケを楽しむ", icon: Gamepad2 },
  { step: "5", title: "お会計", icon: Calculator },
];

const payments = [
  { name: "現金", file: "payment-cash.png" },
  { name: "VISA", file: "payment-visa.png" },
  { name: "Mastercard", file: "payment-mastercard.png" },
  { name: "JCB", file: "payment-jcb.png" },
  { name: "Pay Pay", file: "payment-amex.png" },
  { name: "R Pay", file: "payment-rpay.png" },
  { name: "Apple Pay", file: "payment-applepay.png" },
  { name: "Google Pay", file: "payment-googlepay.png" },
];

const comparisons = [
  ["飲み放題", "別料金", "✓"],
  ["ダーツ", "別料金", "✓"],
  ["カラオケ", "別料金", "✓"],
  ["営業時間", "23:00まで", "朝まで営業"],
  ["貸切", "50名まで", "最大100名"],
  ["団体対応", "△", "◎"],
  ["外国人対応", "△", "◎"],
  ["価格", "高め", "リーズナブル"],
];

const plans = [
  { title: "仕事帰りに", body: "同僚とサクッと飲んで遊べる！", price: "¥3,000〜", image: "plan-work.png" },
  { title: "女子会に", body: "おしゃれでワクワクが盛り上がる！", price: "¥1,500〜", image: "plan-girls.png" },
  { title: "二次会に", body: "二次会からでも思いっきり楽しめる！", price: "¥3,000〜", image: "plan-afterparty.png" },
];

const faqs = [
  "料金の支払い方法は？",
  "延長料金はいくらですか？",
  "途中参加は可能ですか？",
  "途中で退出した場合はどうなりますか？",
  "貸切の料金は？",
  "インボイス対応していますか？",
  "領収書は発行できますか？",
  "その他の質問",
];

function LogoMark() {
  return (
    <Link className="price-logo" href="/" aria-label="TSURUSEN TOP">
      <span className="price-logo-mark" aria-hidden="true" />
      <span className="price-logo-text">
        <span>AMUSEMENT BAR</span>
        <strong>TSURUSEN</strong>
      </span>
    </Link>
  );
}

function Header() {
  return (
    <header className="price-header">
      <LogoMark />
      <nav className="price-nav" aria-label="PRICE navigation">
        {navItems.map((item) => (
          <Link key={item.label} className={item.active ? "is-active" : ""} href={item.href}>
            {item.label}
          </Link>
        ))}
      </nav>
      <div className="price-header-icons" aria-label="SNS and reservation">
        <Link href="https://www.instagram.com/" aria-label="Instagram">
          <Camera size={18} />
        </Link>
        <Link href="https://line.me/R/ti/p/@tsurusen" aria-label="LINE">
          LINE
        </Link>
        <Link href="tel:03-XXXX-XXXX" aria-label="電話">
          <Phone size={18} />
        </Link>
      </div>
      <details className="price-mobile-nav">
        <summary>MENU</summary>
        <div>
          {navItems.map((item) => (
            <Link key={item.label} href={item.href}>
              {item.label}
            </Link>
          ))}
        </div>
      </details>
    </header>
  );
}

function SectionHeading({ label, sub }: { label: string; sub?: string }) {
  return (
    <div className="price-section-heading">
      <h2>{label}</h2>
      {sub ? <p>{sub}</p> : null}
    </div>
  );
}

function PriceCard({
  gender,
  jp,
  price,
  extend,
  tone,
}: {
  gender: "MEN" | "WOMEN";
  jp: string;
  price: string;
  extend: string;
  tone: "blue" | "pink";
}) {
  return (
    <article className={`price-card ${tone}`}>
      <div className="price-card-title">
        <CircleUserRound size={34} />
        <div>
          <h3>{gender}</h3>
          <p>{jp}</p>
        </div>
      </div>
      <div className="price-main-value">
        <strong>{price}</strong>
        <span>/30min</span>
      </div>
      <div className="price-lines">
        <p>
          <span>チャージ料金</span>
          <b>{price} /30min</b>
        </p>
        <p>
          <span>延長料金</span>
          <b>{extend} /30min</b>
        </p>
      </div>
      <ul>
        <li>
          <CheckCircle2 size={17} />
          飲み放題
        </li>
        <li>
          <CheckCircle2 size={17} />
          ダーツ遊び放題
        </li>
        <li>
          <CheckCircle2 size={17} />
          カラオケ歌い放題
        </li>
      </ul>
      <Link className="price-reserve-button" href="/reservation">
        <span>予約する</span>
        <small>RESERVE NOW <ArrowRight size={11} /></small>
      </Link>
    </article>
  );
}

function CtaButton({ href, label, sub, tone }: { href: string; label: string; sub: string; tone: "gold" | "green" | "pink" }) {
  return (
    <Link className={`price-cta-button ${tone}`} href={href}>
      <span>{label}</span>
      <small>{sub}</small>
    </Link>
  );
}

export function TsurusenSystemPixelPage() {
  return (
    <div className="price-page">
      <style>{runtimeCss}</style>
      <Header />

      <section className="price-hero" aria-labelledby="price-title">
        <div className="price-hero-content">
          <h1 id="price-title">
            PRICE
            <br />
            SYSTEM
          </h1>
          <p className="price-script">Simple Pricing. Unlimited Fun.</p>
          <p className="price-hero-jp">料金・システム</p>
          <span className="price-scroll">
            SCROLL
            <i />
          </span>
        </div>
      </section>

      <main className="price-main-frame" id="price">
        <section className="price-intro">
          <h2>料金はとてもシンプルです。</h2>
          <p>
            チャージ料金のみで
            <br />
            飲み放題・ダーツ・カラオケを楽しめます。
          </p>
        </section>

        <section className="price-card-grid" aria-label="料金カード">
          <PriceCard gender="MEN" jp="男性" price="¥3,000" extend="¥2,000" tone="blue" />
          <PriceCard gender="WOMEN" jp="女性" price="¥1,500" extend="¥1,000" tone="pink" />
        </section>

        <section className="included-section" id="included">
          <SectionHeading label="WHAT'S INCLUDED" sub="料金に含まれるもの" />
          <div className="included-grid">
            {includedItems.map((item) => {
              const Icon = item.icon;
              return (
                <article className="included-card" key={item.title}>
                  <img src={`${assetBase}/${item.image}`} alt="" />
                  <div className="included-copy">
                    <Icon size={20} aria-hidden="true" />
                    <h3>{item.title}</h3>
                    <p>{item.body}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section className="flow-section" id="flow">
          <SectionHeading label="FLOW" sub="ご利用の流れ" />
          <div className="flow-grid">
            {flowItems.map((item) => {
              const Icon = item.icon;
              return (
                <article className="flow-item" key={item.step}>
                  <span className="flow-number">{item.step}</span>
                  <div className="flow-icon">
                    <Icon size={34} strokeWidth={1.6} />
                  </div>
                  <p>{item.title}</p>
                </article>
              );
            })}
          </div>
        </section>

        <section className="payment-comparison" id="payment">
          <div>
            <SectionHeading label="PAYMENT" sub="対応決済方法" />
            <div className="payment-grid">
              {payments.map((payment) => (
                <article className="payment-card" key={payment.name}>
                  <img src={`${assetBase}/${payment.file}`} alt={payment.name} />
                </article>
              ))}
            </div>
          </div>

          <div id="comparison">
            <SectionHeading label="COMPARISON" sub="他店との比較" />
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>項目</th>
                  <th>一般的なバー</th>
                  <th>鶴千 TSURUSEN</th>
                </tr>
              </thead>
              <tbody>
                {comparisons.map((row) => (
                  <tr key={row[0]}>
                    {row.map((cell, index) => (
                      <td key={`${row[0]}-${index}`}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="plans-section" id="plans">
          <SectionHeading label="RECOMMENDED PLANS" sub="おすすめの利用シーン" />
          <div className="plans-grid">
            {plans.map((plan) => (
              <article className="plan-card" key={plan.title}>
                <img src={`${assetBase}/${plan.image}`} alt="" />
                <div className="plan-copy">
                  <h3>{plan.title}</h3>
                  <p>{plan.body}</p>
                  <div className="plan-bottom">
                    <span>{plan.price}</span>
                    <Link href="/#scene">詳しく見る</Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="price-faq" id="faq">
          <SectionHeading label="FAQ" sub="よくあるご質問" />
          <div className="faq-grid">
            {faqs.map((faq) => (
              <details key={faq} className="faq-item">
                <summary>
                  {faq}
                  <span>+</span>
                </summary>
                <p>詳しくはスタッフまでお問い合わせください。</p>
              </details>
            ))}
          </div>
        </section>
      </main>

      <section className="ready-cta" id="reserve">
        <div>
          <h2>READY TO PLAY?</h2>
          <p>今すぐ予約して、最高の夜を楽しもう！</p>
          <div className="ready-buttons">
            <CtaButton href="/reservation" label="WEB予約" sub="RESERVE" tone="gold" />
            <CtaButton href="https://line.me/R/ti/p/@tsurusen" label="LINE予約" sub="LINE" tone="green" />
            <CtaButton href="tel:03-XXXX-XXXX" label="電話予約" sub="CALL" tone="pink" />
          </div>
        </div>
      </section>

      <aside className="price-floating" aria-label="予約ショートカット">
        <Link className="gold" href="/reservation">
          <CalendarDays size={24} />
          <span>WEB予約</span>
        </Link>
        <Link className="green" href="https://line.me/R/ti/p/@tsurusen">
          <MessageCircle size={24} />
          <span>LINE予約</span>
        </Link>
        <Link className="pink" href="tel:03-XXXX-XXXX">
          <Phone size={24} />
          <span>電話予約</span>
        </Link>
      </aside>
    </div>
  );
}

const runtimeCss = `
.price-page {
  --gold: #d8ad1e;
  --gold-soft: #f2c955;
  --ink: #f5eee3;
  --muted: rgba(245, 238, 227, 0.76);
  --blue: #1597ff;
  --pink: #f24dbc;
  --green: #16e563;
  --line: rgba(216, 173, 30, 0.48);
  --panel: rgba(12, 12, 11, 0.9);
  width: 100%;
  min-height: 100vh;
  overflow-x: hidden;
  background:
    radial-gradient(circle at 50% 0%, rgba(153, 100, 12, 0.16), transparent 34rem),
    #050504;
  color: var(--ink);
  font-family: var(--font-noto-sans-jp), sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: geometricPrecision;
  font-feature-settings: "kern";
}

.price-page *,
.price-page *::before,
.price-page *::after {
  box-sizing: border-box;
}

.price-page a {
  color: inherit;
  text-decoration: none;
}

.price-header {
  position: sticky;
  top: 0;
  z-index: 50;
  display: flex;
  align-items: center;
  gap: clamp(16px, 2.4vw, 36px);
  min-height: 58px;
  padding: 9px clamp(18px, 3.8vw, 42px);
  border-bottom: 1px solid rgba(216, 173, 30, 0.18);
  background:
    linear-gradient(90deg, rgba(4, 4, 3, 0.98), rgba(10, 8, 6, 0.92)),
    url("${assetBase}/hero-background.png") center top / cover;
  box-shadow: 0 14px 34px rgba(0, 0, 0, 0.54);
}

.price-logo {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  min-width: 160px;
}

.price-logo-mark {
  width: 34px;
  aspect-ratio: 1;
  border: 2px solid var(--gold-soft);
  border-radius: 50%;
  box-shadow: 0 0 18px rgba(216, 173, 30, 0.3);
}

.price-logo-text span,
.price-logo-text strong {
  display: block;
  color: var(--gold-soft);
  font-family: var(--font-oswald), sans-serif;
  font-weight: 700;
  line-height: 1;
  letter-spacing: 0.14em;
}

.price-logo-text span {
  font-size: 10px;
}

.price-logo-text strong {
  margin-top: 4px;
  font-size: 24px;
}

.price-nav {
  display: flex;
  flex: 1 1 auto;
  align-items: center;
  justify-content: center;
  gap: clamp(12px, 1.9vw, 28px);
  min-width: 0;
}

.price-nav a {
  position: relative;
  display: inline-flex;
  align-items: center;
  min-height: 42px;
  color: rgba(245, 238, 227, 0.94);
  font-family: var(--font-oswald), sans-serif;
  font-size: clamp(11px, 0.96vw, 15px);
  font-weight: 700;
  line-height: 1;
  letter-spacing: 0.08em;
  white-space: nowrap;
}

.price-nav a::after {
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  height: 2px;
  content: "";
  opacity: 0;
  background: var(--gold);
  box-shadow: 0 0 14px rgba(216, 173, 30, 0.7);
}

.price-nav a:hover,
.price-nav a.is-active {
  color: var(--gold-soft);
}

.price-nav a:hover::after,
.price-nav a.is-active::after {
  opacity: 1;
}

.price-header-icons {
  display: flex;
  flex: 0 0 auto;
  align-items: center;
  gap: 8px;
}

.price-header-icons a {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border: 1px solid var(--gold);
  border-radius: 50%;
  color: var(--gold-soft);
  font-family: var(--font-oswald), sans-serif;
  font-size: 9px;
  font-weight: 700;
}

.price-mobile-nav {
  display: none;
  margin-left: auto;
  color: var(--gold-soft);
  font-family: var(--font-oswald), sans-serif;
  font-weight: 700;
  letter-spacing: 0.12em;
}

.price-mobile-nav summary {
  min-height: 44px;
  padding: 12px 14px;
  border: 1px solid var(--line);
  border-radius: 10px;
  cursor: pointer;
}

.price-mobile-nav div {
  position: absolute;
  right: 14px;
  left: 14px;
  display: grid;
  gap: 8px;
  margin-top: 10px;
  padding: 16px;
  border: 1px solid var(--line);
  border-radius: 14px;
  background: rgba(5, 5, 4, 0.98);
}

.price-mobile-nav a {
  padding: 12px 10px;
  border-bottom: 1px solid rgba(216, 173, 30, 0.16);
}

.price-hero {
  display: grid;
  min-height: clamp(300px, 40vw, 520px);
  place-items: center;
  padding: clamp(34px, 7vw, 82px) 18px clamp(24px, 4vw, 56px);
  background:
    linear-gradient(180deg, rgba(0, 0, 0, 0.22), rgba(0, 0, 0, 0.12) 42%, rgba(5, 5, 4, 0.96) 100%),
    radial-gradient(circle at 50% 45%, rgba(0, 0, 0, 0.08), rgba(0, 0, 0, 0.7) 70%),
    url("${assetBase}/hero-background-clean.png") center / cover;
}

.price-hero-content {
  display: grid;
  justify-items: center;
  text-align: center;
}

.price-hero h1 {
  margin: 0;
  color: #f7f1e8;
  font-family: var(--font-oswald), sans-serif;
  font-size: clamp(70px, 10.6vw, 156px);
  font-weight: 700;
  line-height: 0.92;
  letter-spacing: 0.035em;
  text-shadow: 0 0 24px rgba(245, 238, 227, 0.22), 0 10px 28px rgba(0, 0, 0, 0.78);
}

.price-script {
  margin: clamp(10px, 1.7vw, 20px) 0 0;
  color: var(--gold);
  font-family: "Brush Script MT", "Segoe Script", cursive;
  font-size: clamp(23px, 3.2vw, 42px);
  line-height: 1;
  text-shadow: 0 0 12px rgba(216, 173, 30, 0.36);
}

.price-hero-jp {
  margin: clamp(18px, 2vw, 28px) 0 0;
  color: #f5eee3;
  font-size: clamp(17px, 1.8vw, 25px);
  font-weight: 900;
  letter-spacing: 0.08em;
}

.price-scroll {
  display: grid;
  justify-items: center;
  gap: 5px;
  margin-top: 13px;
  color: rgba(245, 238, 227, 0.9);
  font-family: var(--font-oswald), sans-serif;
  font-size: 10px;
  font-weight: 700;
}

.price-scroll i {
  width: 13px;
  height: 30px;
  border: 2px solid var(--gold);
  border-radius: 999px;
}

.price-main-frame {
  width: min(calc(100% - clamp(20px, 8vw, 74px)), 1560px);
  margin: 0 auto;
  padding: clamp(28px, 4vw, 44px) clamp(18px, 5vw, 84px) clamp(34px, 5vw, 56px);
  border: 1px solid rgba(216, 173, 30, 0.6);
  border-top-width: 0;
  border-radius: 0 0 16px 16px;
  background:
    radial-gradient(circle at 50% 16%, rgba(66, 48, 20, 0.28), transparent 32rem),
    linear-gradient(180deg, rgba(17, 17, 16, 0.94), rgba(8, 8, 7, 0.98));
  box-shadow: inset 0 0 70px rgba(216, 173, 30, 0.05);
}

.price-intro {
  text-align: center;
}

.price-intro h2 {
  margin: 0;
  color: #f8f1e7;
  font-size: clamp(26px, 3.2vw, 42px);
  font-weight: 900;
  line-height: 1.25;
  letter-spacing: 0.04em;
}

.price-intro p {
  margin: 12px 0 0;
  color: var(--ink);
  font-size: clamp(14px, 1.7vw, 22px);
  font-weight: 800;
  line-height: 1.65;
}

.price-card-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: clamp(28px, 5vw, 64px);
  margin-top: clamp(24px, 4vw, 36px);
}

.price-card {
  --tone: var(--blue);
  display: grid;
  gap: clamp(16px, 2vw, 24px);
  min-height: clamp(430px, 37vw, 560px);
  padding: clamp(22px, 3vw, 42px) clamp(22px, 3.4vw, 50px);
  border: 2px solid var(--tone);
  border-radius: 9px;
  background: linear-gradient(135deg, rgba(10, 10, 10, 0.96), color-mix(in srgb, var(--tone), transparent 86%));
  box-shadow: 0 0 26px color-mix(in srgb, var(--tone), transparent 58%), inset 0 0 36px color-mix(in srgb, var(--tone), transparent 86%);
}

.price-card.pink {
  --tone: var(--pink);
}

.price-card-title {
  display: flex;
  align-items: center;
  gap: 14px;
  color: var(--tone);
}

.price-card-title h3,
.price-section-heading h2 {
  margin: 0;
  font-family: var(--font-oswald), sans-serif;
  font-style: italic;
  font-weight: 700;
  line-height: 1;
  letter-spacing: 0.08em;
}

.price-card-title h3 {
  font-size: clamp(26px, 3vw, 44px);
}

.price-card-title p {
  margin: 4px 0 0;
  font-size: clamp(14px, 1.4vw, 18px);
  font-weight: 900;
}

.price-main-value {
  display: flex;
  align-items: end;
  gap: 12px;
  color: #f9f2e8;
}

.price-main-value strong {
  font-family: var(--font-oswald), sans-serif;
  font-size: clamp(54px, 7.2vw, 92px);
  font-weight: 700;
  line-height: 0.9;
  letter-spacing: 0.03em;
}

.price-main-value span {
  padding-bottom: 8px;
  font-size: clamp(18px, 2vw, 30px);
  font-weight: 900;
}

.price-lines {
  display: grid;
  gap: 0;
  border-top: 1px solid rgba(216, 173, 30, 0.62);
  border-bottom: 1px dashed rgba(216, 173, 30, 0.42);
}

.price-lines p {
  display: flex;
  justify-content: space-between;
  gap: 18px;
  margin: 0;
  padding: 12px 0;
  color: #f7f0e5;
  font-size: clamp(14px, 1.35vw, 19px);
  font-weight: 900;
  border-bottom: 1px solid rgba(216, 173, 30, 0.35);
}

.price-lines p:last-child {
  border-bottom: 0;
}

.price-lines b {
  color: var(--tone);
}

.price-card ul {
  display: grid;
  gap: 10px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.price-card li {
  display: flex;
  align-items: center;
  gap: 9px;
  color: #f8f1e7;
  font-size: clamp(14px, 1.3vw, 19px);
  font-weight: 900;
}

.price-card li svg {
  color: var(--gold);
}

.price-reserve-button {
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 68px;
  margin-top: auto;
  border: 1px solid var(--tone);
  border-radius: 7px;
  background: color-mix(in srgb, var(--tone), transparent 86%);
  box-shadow: inset 0 0 24px color-mix(in srgb, var(--tone), transparent 72%);
}

.price-reserve-button span {
  color: #f8f1e7;
  font-size: clamp(18px, 2vw, 28px);
  font-weight: 900;
}

.price-reserve-button small {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  color: #f8f1e7;
  font-family: var(--font-oswald), sans-serif;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.12em;
}

.price-section-heading {
  display: flex;
  align-items: baseline;
  gap: 16px;
  min-width: 0;
}

.price-section-heading h2 {
  color: var(--gold-soft);
  font-size: clamp(30px, 3.4vw, 48px);
}

.price-section-heading p {
  margin: 0;
  color: rgba(245, 238, 227, 0.8);
  font-size: clamp(12px, 1vw, 15px);
  font-weight: 800;
}

.included-section,
.flow-section,
.payment-comparison,
.plans-section,
.price-faq {
  margin-top: clamp(28px, 4vw, 44px);
}

.included-grid {
  display: grid;
  grid-template-columns: repeat(6, minmax(0, 1fr));
  gap: 12px;
  margin-top: 18px;
}

.included-card {
  overflow: hidden;
  min-width: 0;
  border: 1px solid rgba(216, 173, 30, 0.62);
  border-radius: 7px;
  background: rgba(8, 8, 7, 0.92);
}

.included-card img {
  display: block;
  width: 100%;
  aspect-ratio: 1.18 / 1;
  object-fit: cover;
}

.included-copy {
  display: grid;
  justify-items: center;
  gap: 7px;
  padding: 10px 10px 14px;
  text-align: center;
}

.included-copy svg {
  color: var(--gold);
}

.included-copy h3 {
  margin: 0;
  color: var(--gold);
  font-size: clamp(13px, 1.25vw, 20px);
  font-weight: 900;
  line-height: 1.25;
}

.included-copy p {
  margin: 0;
  color: rgba(245, 238, 227, 0.88);
  font-size: clamp(10px, 0.95vw, 14px);
  font-weight: 800;
  line-height: 1.55;
}

.flow-grid {
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: clamp(12px, 2.8vw, 40px);
  margin-top: 18px;
}

.flow-item {
  display: grid;
  justify-items: center;
  gap: 9px;
  color: var(--gold);
  text-align: center;
}

.flow-number {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border: 2px solid var(--gold);
  border-radius: 50%;
  font-family: var(--font-oswald), sans-serif;
  font-size: 28px;
  font-weight: 700;
}

.flow-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 94px;
  height: 94px;
  border: 1px solid rgba(216, 173, 30, 0.38);
  border-radius: 50%;
}

.flow-item p {
  margin: 0;
  color: #f8f1e7;
  font-size: clamp(12px, 1.1vw, 16px);
  font-weight: 900;
  line-height: 1.35;
}

.payment-comparison {
  display: grid;
  grid-template-columns: minmax(280px, 0.88fr) minmax(360px, 1.08fr);
  gap: clamp(26px, 5vw, 70px);
}

.payment-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 12px;
  margin-top: 18px;
}

.payment-card {
  display: grid;
  place-items: center;
  min-height: 88px;
  padding: 8px;
  border: 1px solid rgba(216, 173, 30, 0.34);
  border-radius: 6px;
  background: rgba(10, 10, 9, 0.9);
}

.payment-card img {
  display: block;
  width: 100%;
  height: 72px;
  object-fit: contain;
}

.comparison-table {
  width: 100%;
  margin-top: 18px;
  border-collapse: collapse;
  overflow: hidden;
  border: 1px solid rgba(216, 173, 30, 0.55);
  color: #f8f1e7;
  font-size: clamp(12px, 1.15vw, 16px);
  font-weight: 900;
  table-layout: fixed;
}

.comparison-table th,
.comparison-table td {
  padding: 8px 10px;
  border: 1px solid rgba(216, 173, 30, 0.38);
  text-align: center;
}

.comparison-table th {
  color: var(--gold);
  background: rgba(216, 173, 30, 0.16);
}

.comparison-table td:first-child {
  text-align: left;
}

.comparison-table td:last-child {
  color: var(--gold);
}

.plans-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 16px;
  margin-top: 18px;
}

.plan-card {
  overflow: hidden;
  border: 1px solid rgba(216, 173, 30, 0.62);
  border-radius: 8px;
  background: rgba(8, 8, 7, 0.92);
}

.plan-card img {
  display: block;
  width: 100%;
  aspect-ratio: 2.42 / 1;
  object-fit: cover;
}

.plan-copy {
  display: grid;
  gap: 8px;
  padding: 12px;
}

.plan-copy h3 {
  margin: 0;
  color: var(--gold);
  font-size: clamp(17px, 1.7vw, 25px);
  font-weight: 900;
  line-height: 1.2;
}

.plan-copy p {
  margin: 0;
  color: rgba(245, 238, 227, 0.9);
  font-size: clamp(11px, 1vw, 14px);
  font-weight: 800;
  line-height: 1.5;
}

.plan-bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
}

.plan-bottom span {
  color: var(--gold);
  font-family: var(--font-oswald), sans-serif;
  font-size: clamp(20px, 2.4vw, 32px);
  font-weight: 700;
}

.plan-bottom a {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 90px;
  min-height: 36px;
  padding: 0 12px;
  border: 1px solid rgba(216, 173, 30, 0.62);
  border-radius: 5px;
  font-size: 12px;
  font-weight: 900;
}

.faq-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 8px 18px;
  margin-top: 14px;
}

.faq-item {
  border: 1px solid rgba(216, 173, 30, 0.42);
  border-radius: 4px;
  background: rgba(8, 8, 7, 0.88);
}

.faq-item summary {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  min-height: 35px;
  padding: 8px 12px;
  color: #f8f1e7;
  font-size: clamp(12px, 1vw, 15px);
  font-weight: 900;
  list-style: none;
  cursor: pointer;
}

.faq-item summary::-webkit-details-marker {
  display: none;
}

.faq-item summary span {
  color: #f8f1e7;
  font-size: 18px;
}

.faq-item p {
  margin: 0;
  padding: 0 12px 12px;
  color: var(--muted);
  font-size: 13px;
  line-height: 1.7;
}

.ready-cta {
  display: grid;
  min-height: clamp(150px, 20vw, 240px);
  place-items: center;
  padding: clamp(24px, 5vw, 52px) clamp(18px, 4vw, 48px);
  background:
    linear-gradient(180deg, rgba(5, 5, 4, 0.16), rgba(5, 5, 4, 0.86)),
    url("${assetBase}/cta-background-clean.png") center / cover;
  text-align: center;
}

.ready-cta h2 {
  margin: 0;
  color: #f5d47e;
  font-family: var(--font-oswald), sans-serif;
  font-size: clamp(42px, 6vw, 90px);
  font-weight: 700;
  line-height: 1;
  letter-spacing: 0.08em;
  text-shadow: 0 0 24px rgba(216, 173, 30, 0.52);
}

.ready-cta p {
  margin: 8px 0 0;
  color: #f8f1e7;
  font-size: clamp(13px, 1.4vw, 18px);
  font-weight: 900;
}

.ready-buttons {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 12px;
  margin-top: 16px;
}

.price-cta-button {
  --button-accent: var(--gold);
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: clamp(150px, 18vw, 220px);
  min-height: 48px;
  border: 1px solid var(--button-accent);
  border-radius: 6px;
  background: rgba(6, 6, 6, 0.72);
  box-shadow: inset 0 0 22px color-mix(in srgb, var(--button-accent), transparent 74%);
}

.price-cta-button.green {
  --button-accent: var(--green);
}

.price-cta-button.pink {
  --button-accent: var(--pink);
}

.price-cta-button span {
  color: #f8f1e7;
  font-size: clamp(14px, 1.3vw, 18px);
  font-weight: 900;
  line-height: 1;
}

.price-cta-button small {
  margin-top: 4px;
  color: var(--button-accent);
  font-family: var(--font-oswald), sans-serif;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.1em;
}

.price-floating {
  position: fixed;
  right: max(10px, env(safe-area-inset-right));
  bottom: max(18px, env(safe-area-inset-bottom));
  z-index: 40;
  display: grid;
  gap: 8px;
}

.price-floating a {
  --float-accent: var(--gold);
  display: grid;
  justify-items: center;
  gap: 4px;
  width: 72px;
  min-height: 72px;
  padding: 8px 4px;
  border: 1px solid var(--float-accent);
  border-radius: 15px;
  background: rgba(8, 8, 7, 0.9);
  color: #f8f1e7;
  box-shadow: inset 0 0 20px color-mix(in srgb, var(--float-accent), transparent 78%);
}

.price-floating a.green {
  --float-accent: var(--green);
}

.price-floating a.pink {
  --float-accent: var(--pink);
}

.price-floating svg {
  color: var(--float-accent);
}

.price-floating span {
  font-size: 11px;
  font-weight: 900;
  line-height: 1.15;
}

@media (hover: hover) {
  .price-reserve-button,
  .price-cta-button,
  .price-floating a,
  .plan-bottom a {
    transition: transform 0.24s ease, border-color 0.24s ease, box-shadow 0.24s ease;
  }

  .price-reserve-button:hover,
  .price-cta-button:hover,
  .price-floating a:hover,
  .plan-bottom a:hover {
    transform: translateY(-2px) scale(1.02);
    border-color: var(--gold-soft);
    box-shadow: 0 0 24px rgba(216, 173, 30, 0.34);
  }
}

@media (max-width: 1180px) {
  .price-nav {
    gap: 14px;
  }

  .included-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .payment-comparison {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 900px) {
  .price-header-icons,
  .price-nav {
    display: none;
  }

  .price-mobile-nav {
    display: block;
  }

  .price-card-grid,
  .plans-grid,
  .faq-grid {
    grid-template-columns: 1fr;
  }

  .flow-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    overflow: visible;
  }

  .flow-item:last-child {
    grid-column: 1 / -1;
  }
}

@media (max-width: 620px) {
  .price-header {
    padding-inline: 12px;
  }

  .price-logo {
    min-width: 0;
  }

  .price-logo-mark {
    width: 30px;
  }

  .price-logo-text span {
    font-size: 8px;
  }

  .price-logo-text strong {
    font-size: 18px;
  }

  .price-hero {
    min-height: 360px;
    background-position: center top;
  }

  .price-main-frame {
    width: calc(100% - 20px);
    padding-inline: 12px;
  }

  .included-grid,
  .payment-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .price-card {
    padding-inline: 18px;
  }

  .price-main-value {
    flex-wrap: wrap;
  }

  .flow-icon {
    width: 72px;
    height: 72px;
  }

  .price-floating {
    right: 7px;
    gap: 6px;
  }

  .price-floating a {
    width: 56px;
    min-height: 56px;
    border-radius: 12px;
  }

  .price-floating span {
    font-size: 9px;
  }
}
`;
