/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { TsurusenTopHeader } from "./TsurusenTopHeader";
import {
  CalendarDays,
  Camera,
  Gift,
  MessageCircle,
  Phone,
  Star,
  Users,
} from "lucide-react";

const coupons = [
  ["01", "初回来店特典", "50%OFF", "有効期限 2024.12.31まで"],
  ["02", "チャージ無料", "¥1,000 OFF", "有効期限 2024.12.31まで"],
  ["03", "シャンパンサービス", "1本プレゼント", "有効期限 2024.12.31まで"],
  ["04", "誕生日特典", "無料サービス", "有効期限 2024.12.31まで"],
  ["05", "女子会特典", "30分延長無料", "有効期限 2024.12.31まで"],
  ["06", "団体予約特典", "幹事様無料", "有効期限 2024.12.31まで"],
] as const;

const seasons = [
  ["SPRING PARTY", "春のスペシャルパーティー", "18", "/assets/campaign/season-01.png"],
  ["GOLDEN WEEK", "GW限定企画", "32", "/assets/campaign/season-02.png"],
  ["SUMMER FESTIVAL", "サマーフェスティバル", "60", "/assets/campaign/season-03.png"],
  ["HALLOWEEN NIGHT", "ハロウィンナイト", "91", "/assets/campaign/season-04.png"],
  ["CHRISTMAS PARTY", "クリスマスパーティー", "152", "/assets/campaign/season-05.png"],
  ["NEW YEAR PARTY", "ニューイヤーパーティー", "183", "/assets/campaign/season-06.png"],
] as const;

const benefits = [
  ["LINE登録", "特典クーポン配信", MessageCircle],
  ["Instagramフォロー", "限定情報を配信", Camera],
  ["誕生日登録", "バースデー特典", CalendarDays],
  ["ポイントが貯まる", "来店でポイント付与", Star],
  ["限定イベント", "招待・優先案内", Gift],
  ["先行予約", "人気イベント優先予約", CalendarDays],
  ["VIP特典", "シークレット特典", Star],
  ["会員限定クーポン", "不定期配布", Gift],
] as const;

const steps = [
  ["クーポン取得", "公式サイトやSNSでクーポンをGET"],
  ["予約", "WEB・LINE・お電話で予約をする"],
  ["来店", "ご予約日にご来店"],
  ["提示", "スタッフにクーポンを提示"],
  ["特典GET", "特典を受けて楽しもう"],
] as const;

const recommended = [
  ["初めての方", "/assets/campaign/recommended-01.png"],
  ["女子会", "/assets/campaign/recommended-02.png"],
  ["誕生日", "/assets/campaign/recommended-03.png"],
  ["二次会", "/assets/campaign/recommended-04.png"],
  ["貸切パーティー", "/assets/campaign/recommended-05.png"],
  ["外国人旅行客", "/assets/campaign/recommended-06.png"],
] as const;

const limitedOffers = [
  ["本日限定", "TODAY ONLY", CalendarDays],
  ["今週限定", "THIS WEEK", CalendarDays],
  ["今月限定", "THIS MONTH", Users],
  ["数量限定", "LIMITED QUANTITY", Gift],
] as const;

const sns = [
  ["Instagram", "投稿キャンペーン", "#TSURUSENで投稿して特典GET！", "/assets/campaign/sns-instagram-bg.png", "insta"],
  ["TikTok", "投稿キャンペーン", "楽しい瞬間を投稿して特典をGET！", "/assets/campaign/sns-tiktok-bg.png", "tiktok"],
  ["レビュー投稿", "キャンペーン", "口コミ投稿でクーポンプレゼント！", "/assets/campaign/sns-review-bg.png", "review"],
] as const;

const reviews = [
  ["クラブ並みの雰囲気！楽しく飲みました！", "20代 女性"],
  ["誕生日用のシャンパンが嬉しかったです！", "20代 女性"],
  ["女子会特典で延長無料は神すぎます！", "20代 女性"],
  ["団体予約特典で幹事が楽になりました！", "20代 女性"],
] as const;

const faqs = [
  ["クーポンの利用条件は？", "各クーポンごとに人数・曜日・期間の条件があります。詳細はご予約時にご確認ください。"],
  ["他のクーポンと併用できますか？", "原則として他券併用不可です。キャンペーン内容により例外があります。"],
  ["予約は必要ですか？", "スムーズなご案内のため、WEBまたはLINEからの事前予約をおすすめしています。"],
  ["クーポンの有効期限は？", "表示されている期限内にご利用ください。期間限定企画は早期終了する場合があります。"],
  ["何名から利用できますか？", "クーポンごとに異なります。団体特典は10名様以上が目安です。"],
  ["キャンセル料はかかりますか？", "貸切や団体予約ではキャンセル規定がございます。事前に店舗へご相談ください。"],
  ["途中参加・途中退出は可能ですか？", "可能です。料金や特典適用はご利用状況により異なります。"],
  ["クーポンはどこで取得できますか？", "公式サイト、Instagram、LINE、キャンペーンページから取得できます。"],
] as const;

function SectionHeading({ title, sub }: { title: string; sub?: string }) {
  return (
    <div className="campaign-section-heading">
      <h2>{title}</h2>
      {sub ? <p>{sub}</p> : null}
    </div>
  );
}

function GlowButton({
  href,
  title,
  label,
  tone = "gold",
}: {
  href: string;
  title: string;
  label: string;
  tone?: "gold" | "blue" | "green" | "pink";
}) {
  return (
    <Link className={`campaign-button ${tone}`} href={href}>
      <strong>{title}</strong>
      <span>{label}</span>
    </Link>
  );
}

export function TsurusenCampaignPage() {
  return (
    <div className="campaign-page">
      <style>{styles}</style>

      <TsurusenTopHeader active="CAMPAIGN" />

      <section className="campaign-hero">
        <div className="campaign-hero-copy">
          <h1>
            SPECIAL
            <br />
            OFFERS
          </h1>
          <p>
            Tonight Is Better
            <br />
            With A Reward.
          </p>
        </div>
        <div className="campaign-hero-media" aria-hidden="true">
          <img src="/assets/campaign/hero-toast.png" alt="" />
        </div>
      </section>

      <main className="campaign-main">
        <section className="hero-actions" aria-label="Campaign actions">
          <GlowButton href="#coupons" title="クーポンを使う" label="COUPON" />
          <GlowButton href="/#reserve" title="WEB予約" label="RESERVE" tone="blue" />
          <GlowButton href="https://line.me/R/ti/p/@tsurusen" title="LINE予約" label="LINE" tone="green" />
        </section>

        <section id="golden-night" className="monthly-card">
          <div className="monthly-copy">
            <span>THIS MONTH&apos;S CAMPAIGN</span>
            <h2>
              GOLDEN NIGHT
              <em>SPECIAL CAMPAIGN</em>
            </h2>
            <p>今月だけの特別なご褒美をあなたに。</p>
            <div className="monthly-perks">
              {["飲み放題120分", "遊び放題", "1本サービス", "特典あり"].map((item, index) => (
                <div key={item}>
                  <Gift size={22} strokeWidth={1.8} />
                  <strong>{item}</strong>
                  <small>{["飲み放題", "ダーツ・カラオケ", "シャンパン", "オリジナル特典"][index]}</small>
                </div>
              ))}
            </div>
          </div>
          <div className="monthly-countdown">
            <span>SPECIAL LIMITED TIME</span>
            <p>残りわずか！</p>
            <div className="count-grid">
              {[
                ["05", "DAYS"],
                ["12", "HOURS"],
                ["48", "MINUTES"],
                ["33", "SECONDS"],
              ].map(([value, label]) => (
                <div key={label}>
                  <strong>{value}</strong>
                  <small>{label}</small>
                </div>
              ))}
            </div>
            <dl>
              <div>
                <dt>期間</dt>
                <dd>2024.7.1 MON - 7.31 WED</dd>
              </div>
              <div>
                <dt>利用条件</dt>
                <dd>4名様以上のご来店 / 他券併用不可</dd>
              </div>
            </dl>
            <GlowButton href="#coupons" title="今すぐ利用する" label="GET OFFER" />
          </div>
        </section>

        <section id="coupons" className="campaign-panel">
          <SectionHeading title="COUPONS" />
          <div className="coupon-grid">
            {coupons.map(([id, title, value, note]) => (
              <Link id={`coupon-${id}`} key={id} className="coupon-card" href="/#reserve">
                <span>{id}</span>
                <h3>{title}</h3>
                <strong>{value}</strong>
                <small>{note}</small>
                <img src="/assets/campaign/qr-code.png" alt="" />
              </Link>
            ))}
          </div>
        </section>

        <section id="season" className="campaign-panel">
          <SectionHeading title="SEASON CAMPAIGN" />
          <div className="season-grid">
            {seasons.map(([title, text, days, image]) => (
              <Link key={title} className="season-card" href="/campaigns#season">
                <img src={image} alt="" />
                <h3>{title}</h3>
                <p>{text}</p>
                <strong>
                  {days}
                  <small>日</small>
                </strong>
              </Link>
            ))}
          </div>
        </section>

        <section className="split-grid">
          <div id="member-benefits" className="campaign-panel">
            <SectionHeading title="MEMBER BENEFITS" sub="会員だけの特別な特典" />
            <div className="benefit-grid">
              {benefits.map(([title, text, Icon]) => (
                <div key={title} className="benefit-card">
                  <Icon size={28} strokeWidth={1.7} />
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              ))}
            </div>
          </div>

          <div id="how-to-use" className="campaign-panel">
            <SectionHeading title="HOW TO USE" sub="ご利用の流れ" />
            <ol className="step-list">
              {steps.map(([title, text], index) => (
                <li key={title}>
                  <span>{index + 1}</span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="split-grid recommended-row">
          <div className="campaign-panel">
            <SectionHeading title="RECOMMENDED FOR" sub="こんな方におすすめ" />
            <div className="recommended-grid">
              {recommended.map(([title, image]) => (
                <Link key={title} className="recommended-card" href="/#reserve">
                  <img src={image} alt="" />
                  <strong>{title}</strong>
                </Link>
              ))}
            </div>
          </div>

          <div className="campaign-panel">
            <SectionHeading title="LIMITED OFFERS" sub="限定オファー" />
            <div className="limited-grid">
              {limitedOffers.map(([title, label, Icon]) => (
                <Link key={title} className="limited-card" href="#coupons">
                  <Icon size={34} strokeWidth={1.6} />
                  <strong>{title}</strong>
                  <small>{label}</small>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="split-grid sns-review-row">
          <div id="sns" className="campaign-panel">
            <SectionHeading title="SNS CAMPAIGN" sub="参加して特典をGETしよう！" />
            <div className="sns-grid">
              {sns.map(([platform, title, text, image, tone]) => (
                <Link key={platform} className={`sns-card ${tone}`} href="https://www.instagram.com/">
                  <img src={image} alt="" />
                  <h3>{platform}</h3>
                  <strong>{title}</strong>
                  <p>{text}</p>
                </Link>
              ))}
            </div>
          </div>

          <div id="reviews" className="campaign-panel">
            <SectionHeading title="GUEST REVIEWS" sub="お客様の声" />
            <div className="review-grid">
              {reviews.map(([text, person]) => (
                <article key={text} className="review-card">
                  <span>★★★★★</span>
                  <p>{text}</p>
                  <small>{person}</small>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="faq" className="campaign-panel faq-panel">
          <SectionHeading title="FAQ" sub="よくあるご質問" />
          <div className="faq-grid">
            {faqs.map(([question, answer], index) => (
              <details key={question} className="faq-item" name="campaign-faq" open={index === 0}>
                <summary>
                  <span>{question}</span>
                  <b aria-hidden="true" />
                </summary>
                <p>{answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section id="reserve" className="bottom-cta">
          <div>
            <h2>DON&apos;T MISS TONIGHT</h2>
            <p>今夜だけの特典を、ここから。</p>
          </div>
          <div className="bottom-actions">
            <GlowButton href="#coupons" title="クーポンを取得" label="GET COUPON" />
            <GlowButton href="/#reserve" title="WEB予約" label="RESERVE" tone="blue" />
            <GlowButton href="https://line.me/R/ti/p/@tsurusen" title="LINE予約" label="LINE" tone="green" />
            <GlowButton href="tel:03-XXXX-XXXX" title="電話予約" label="CALL" tone="pink" />
          </div>
        </section>
      </main>

      <aside className="fixed-campaign-cta" aria-label="Fixed campaign actions">
        <Link href="#coupons">
          <CalendarDays size={24} />
          <span>クーポン取得</span>
        </Link>
        <Link href="https://line.me/R/ti/p/@tsurusen">
          <MessageCircle size={24} />
          <span>LINE予約</span>
        </Link>
        <Link href="tel:03-XXXX-XXXX">
          <Phone size={24} />
          <span>電話予約</span>
        </Link>
      </aside>
    </div>
  );
}

const styles = `
body:has(.campaign-page) > header,
body:has(.campaign-page) > footer,
body:has(.campaign-page) > .mobile-sticky-cta,
body:has(.campaign-page) > .skip-link {
  display: none;
}

body:has(.campaign-page) main {
  padding-bottom: 0;
}

.campaign-page,
.campaign-page * {
  box-sizing: border-box;
}

.campaign-page {
  --gold: #d8b15a;
  --gold-2: #fff0a8;
  --panel: rgba(9, 9, 9, .88);
  --border: rgba(216, 177, 90, .58);
  --text: #fbf7ef;
  --muted: rgba(251, 247, 239, .72);
  min-height: 100%;
  color: var(--text);
  background:
    radial-gradient(circle at 74% 8%, rgba(125, 0, 255, .18), transparent 30rem),
    radial-gradient(circle at 17% 14%, rgba(216, 177, 90, .13), transparent 26rem),
    #050505;
  font-family: var(--font-noto-sans-jp), sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: geometricPrecision;
  font-feature-settings: "kern";
}

.campaign-page a {
  color: inherit;
  text-decoration: none;
}

.campaign-header {
  position: sticky;
  top: 0;
  z-index: 30;
  width: 100%;
  min-height: clamp(72px, 7.4vw, 96px);
  display: grid;
  grid-template-columns: minmax(170px, 250px) 1fr auto;
  align-items: center;
  gap: clamp(14px, 2vw, 28px);
  padding: 12px clamp(18px, 3vw, 44px);
  border-bottom: 1px solid rgba(216, 177, 90, .26);
  background:
    linear-gradient(90deg, rgba(0, 0, 0, .96), rgba(6, 6, 6, .84)),
    url("/assets/campaign/hero-toast.png") center / cover;
  box-shadow: 0 16px 40px rgba(0, 0, 0, .55);
}

.campaign-logo {
  display: inline-flex;
  align-items: center;
  gap: 13px;
  min-width: 0;
}

.campaign-logo img {
  width: clamp(38px, 4vw, 58px);
  height: clamp(38px, 4vw, 58px);
  object-fit: contain;
}

.campaign-logo span {
  display: grid;
  gap: 2px;
  color: var(--gold);
  font-family: var(--font-oswald), sans-serif;
  font-size: clamp(24px, 2.4vw, 42px);
  font-weight: 700;
  letter-spacing: .16em;
  line-height: 1;
}

.campaign-logo small {
  color: var(--gold-2);
  font-size: clamp(9px, .7vw, 14px);
  letter-spacing: .28em;
}

.campaign-header nav {
  min-width: 0;
  display: flex;
  justify-content: center;
  align-items: stretch;
  gap: clamp(4px, .6vw, 12px);
  flex-wrap: wrap;
}

.campaign-header nav a {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 38px;
  padding: 8px clamp(6px, .7vw, 12px);
  border-bottom: 2px solid transparent;
  color: #fff7ea;
  font-family: var(--font-oswald), sans-serif;
  font-size: clamp(11px, .78vw, 15px);
  font-weight: 700;
  letter-spacing: .08em;
  white-space: nowrap;
  transition: .25s ease;
}

.campaign-header nav a:hover,
.campaign-header nav a.active {
  color: var(--gold-2);
  border-color: var(--gold);
  text-shadow: 0 0 16px rgba(216, 177, 90, .8);
}

.campaign-reserve {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: clamp(82px, 7vw, 120px);
  min-height: 44px;
  padding: 10px 18px;
  border: 1px solid var(--border);
  border-radius: 10px;
  font-family: var(--font-oswald), sans-serif;
  font-size: clamp(12px, .9vw, 16px);
  font-weight: 700;
  letter-spacing: .1em;
  box-shadow: inset 0 0 22px rgba(216, 177, 90, .12);
}

.campaign-hero {
  min-height: clamp(520px, 72svh, 760px);
  height: auto;
  display: grid;
  grid-template-columns: minmax(300px, .85fr) minmax(320px, 1.2fr);
  align-items: center;
  gap: clamp(28px, 5vw, 80px);
  width: min(96vw, 1800px);
  margin: 0 auto;
  padding: clamp(80px, 8vh, 140px) clamp(20px, 3vw, 48px);
}

.campaign-hero-copy {
  position: relative;
  z-index: 1;
}

.campaign-hero h1,
.monthly-copy h2,
.bottom-cta h2 {
  font-family: var(--font-bebas), var(--font-oswald), sans-serif;
  background: linear-gradient(180deg, #fff6b8 0%, #d8b15a 48%, #8f6618 100%);
  -webkit-background-clip: text;
  color: transparent;
  text-shadow: 0 0 32px rgba(216, 177, 90, .22);
}

.campaign-hero h1 {
  margin: 0;
  font-size: clamp(64px, 8vw, 140px);
  font-weight: 900;
  line-height: .95;
  letter-spacing: .04em;
}

.campaign-hero-copy p {
  margin: 20px 0 0;
  color: var(--gold-2);
  font-family: "Brush Script MT", "Segoe Script", cursive;
  font-size: clamp(28px, 3.4vw, 58px);
  line-height: 1.05;
  text-shadow: 0 0 18px rgba(216, 177, 90, .4);
}

.campaign-hero-media {
  min-height: clamp(320px, 42vw, 600px);
  border-radius: clamp(24px, 3vw, 44px);
  border: 1px solid rgba(216, 177, 90, .32);
  background:
    radial-gradient(circle at center, transparent 10%, rgba(0,0,0,.32) 70%),
    linear-gradient(90deg, rgba(0,0,0,.25), rgba(0,0,0,.05));
  box-shadow: 0 0 80px rgba(216, 177, 90, .16);
}

.campaign-hero-media img {
  width: 100%;
  height: 100%;
  min-height: clamp(320px, 42vw, 600px);
  display: block;
  object-fit: cover;
  border-radius: inherit;
  mix-blend-mode: screen;
  opacity: .88;
}

.campaign-main {
  width: min(95vw, 1600px);
  margin: 0 auto;
  padding: clamp(28px, 4vh, 68px) clamp(16px, 2vw, 34px) calc(120px + env(safe-area-inset-bottom));
  display: flex;
  flex-direction: column;
  gap: clamp(24px, 3vw, 44px);
}

.hero-actions,
.bottom-actions {
  display: flex;
  justify-content: center;
  gap: clamp(14px, 2.2vw, 28px);
  flex-wrap: wrap;
}

.campaign-button {
  width: clamp(190px, 20vw, 310px);
  min-height: clamp(62px, 7vh, 82px);
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;
  border: 1px solid var(--border);
  border-radius: 13px;
  background: linear-gradient(180deg, rgba(255,255,255,.04), rgba(0,0,0,.68));
  color: #fff;
  transition: .25s ease;
  box-shadow: inset 0 0 26px rgba(216, 177, 90, .12), 0 0 22px rgba(216, 177, 90, .12);
}

.campaign-button strong {
  font-size: clamp(16px, 1.4vw, 24px);
  font-weight: 900;
  line-height: 1.1;
}

.campaign-button span {
  color: var(--gold-2);
  font-family: var(--font-oswald), sans-serif;
  font-size: clamp(11px, .9vw, 14px);
  font-weight: 700;
  letter-spacing: .12em;
}

.campaign-button.blue {
  border-color: rgba(0, 148, 255, .85);
  box-shadow: inset 0 0 26px rgba(0, 148, 255, .14), 0 0 22px rgba(0, 148, 255, .18);
}

.campaign-button.green {
  border-color: rgba(0, 230, 82, .78);
  box-shadow: inset 0 0 26px rgba(0, 230, 82, .14), 0 0 22px rgba(0, 230, 82, .18);
}

.campaign-button.pink {
  border-color: rgba(255, 63, 205, .78);
  box-shadow: inset 0 0 26px rgba(255, 63, 205, .14), 0 0 22px rgba(255, 63, 205, .18);
}

.campaign-button:hover,
.campaign-panel a:hover,
.coupon-card:hover,
.season-card:hover {
  transform: translateY(-4px) scale(1.02);
  box-shadow: 0 0 32px rgba(216, 177, 90, .34);
}

.monthly-card,
.campaign-panel {
  border: 1px solid var(--border);
  border-radius: 16px;
  background:
    linear-gradient(180deg, rgba(17,17,17,.9), rgba(4,4,4,.96));
  box-shadow: 0 0 36px rgba(0, 0, 0, .45), inset 0 0 40px rgba(216, 177, 90, .04);
}

.monthly-card {
  display: grid;
  grid-template-columns: minmax(0, 1.1fr) minmax(340px, .9fr);
  gap: clamp(24px, 4vw, 52px);
  padding: clamp(24px, 3vw, 48px);
  background:
    linear-gradient(90deg, rgba(6,6,6,.96), rgba(6,6,6,.74), rgba(6,6,6,.96)),
    url("/assets/campaign/campaign-bg.png") center / cover;
}

.monthly-copy > span,
.monthly-countdown > span,
.campaign-section-heading h2 {
  color: var(--gold);
  font-family: var(--font-oswald), sans-serif;
  font-weight: 700;
  letter-spacing: .12em;
}

.monthly-copy h2 {
  margin: 18px 0 12px;
  font-size: clamp(56px, 6vw, 104px);
  line-height: .9;
  letter-spacing: .04em;
}

.monthly-copy h2 em {
  display: block;
  color: #f06aff;
  font-style: normal;
  font-size: .48em;
  letter-spacing: .08em;
}

.monthly-copy p,
.monthly-countdown p {
  margin: 0;
  font-size: clamp(17px, 1.4vw, 24px);
  font-weight: 700;
  line-height: 1.7;
}

.monthly-perks {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 14px;
  margin-top: 28px;
}

.monthly-perks div {
  min-height: 100px;
  display: grid;
  place-items: center;
  gap: 5px;
  padding: 14px;
  border: 1px solid rgba(216, 177, 90, .36);
  border-radius: 12px;
  text-align: center;
}

.monthly-perks svg,
.benefit-card svg,
.limited-card svg,
.fixed-campaign-cta svg {
  color: var(--gold);
}

.monthly-perks strong {
  color: var(--gold-2);
  font-size: clamp(14px, 1.1vw, 18px);
}

.monthly-perks small {
  color: var(--muted);
  font-size: 12px;
}

.monthly-countdown {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 16px;
}

.count-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
}

.count-grid div {
  min-height: 96px;
  display: grid;
  place-items: center;
  padding: 12px 8px;
  border: 1px solid rgba(216, 177, 90, .42);
  border-radius: 12px;
  background: rgba(0,0,0,.42);
}

.count-grid strong {
  color: var(--gold-2);
  font-family: var(--font-oswald), sans-serif;
  font-size: clamp(34px, 4vw, 62px);
  line-height: .9;
}

.count-grid small {
  color: var(--gold);
  font-family: var(--font-oswald), sans-serif;
  letter-spacing: .08em;
}

.monthly-countdown dl {
  display: grid;
  gap: 10px;
  margin: 0;
}

.monthly-countdown dl div {
  display: grid;
  grid-template-columns: 96px 1fr;
  align-items: center;
  gap: 12px;
  padding: 10px 14px;
  border: 1px solid rgba(216, 177, 90, .28);
  border-radius: 10px;
  background: rgba(0,0,0,.44);
}

.monthly-countdown dt {
  color: var(--gold);
  font-weight: 900;
}

.monthly-countdown dd {
  margin: 0;
  font-weight: 700;
  line-height: 1.5;
}

.campaign-panel {
  padding: clamp(18px, 2.4vw, 34px);
}

.campaign-section-heading {
  display: flex;
  align-items: flex-end;
  gap: 18px;
  margin-bottom: clamp(16px, 2vw, 28px);
}

.campaign-section-heading h2 {
  margin: 0;
  font-size: clamp(30px, 3vw, 54px);
  line-height: 1;
  font-style: italic;
}

.campaign-section-heading p {
  margin: 0 0 4px;
  color: var(--muted);
  font-size: clamp(13px, 1vw, 16px);
  font-weight: 700;
}

.coupon-grid {
  display: grid;
  grid-template-columns: repeat(6, minmax(0, 1fr));
  gap: clamp(12px, 1.6vw, 22px);
}

.coupon-card {
  min-height: 226px;
  display: grid;
  grid-template-rows: auto auto 1fr auto auto;
  align-items: center;
  gap: 10px;
  padding: 18px 14px;
  border: 1px solid rgba(216, 177, 90, .7);
  border-radius: 16px;
  background: linear-gradient(180deg, rgba(10,10,10,.98), rgba(0,0,0,.9));
  text-align: center;
  transition: .25s ease;
}

.coupon-card > span {
  justify-self: start;
  color: var(--gold);
  font-family: var(--font-oswald), sans-serif;
  font-weight: 700;
}

.coupon-card h3 {
  margin: 0;
  font-size: clamp(14px, 1vw, 17px);
  line-height: 1.4;
}

.coupon-card strong {
  color: var(--gold-2);
  font-family: var(--font-oswald), sans-serif;
  font-size: clamp(26px, 2.6vw, 44px);
  line-height: 1;
}

.coupon-card small {
  color: var(--muted);
  font-size: 12px;
  line-height: 1.4;
}

.coupon-card img {
  justify-self: center;
  width: clamp(64px, 5vw, 82px);
  height: clamp(64px, 5vw, 82px);
}

.season-grid,
.recommended-grid,
.limited-grid,
.sns-grid,
.review-grid {
  display: grid;
  gap: clamp(12px, 1.5vw, 20px);
}

.season-grid {
  grid-template-columns: repeat(6, minmax(0, 1fr));
}

.season-card,
.recommended-card,
.limited-card,
.sns-card,
.review-card,
.benefit-card,
.faq-item {
  border: 1px solid rgba(216, 177, 90, .45);
  border-radius: 13px;
  background: #0b0b0b;
  transition: .25s ease;
}

.season-card {
  min-height: 180px;
  display: grid;
  grid-template-rows: 90px auto auto 1fr;
  padding: 10px;
  gap: 8px;
}

.season-card img,
.recommended-card img,
.sns-card img {
  width: 100%;
  object-fit: cover;
  border-radius: 9px;
}

.season-card img {
  height: 90px;
}

.season-card h3,
.sns-card h3 {
  margin: 0;
  color: var(--gold-2);
  font-family: var(--font-oswald), sans-serif;
  font-size: clamp(15px, 1.2vw, 20px);
  line-height: 1.1;
  letter-spacing: .05em;
}

.season-card p,
.sns-card p,
.benefit-card p,
.review-card p,
.faq-item p {
  margin: 0;
  color: var(--muted);
  font-size: clamp(12px, .95vw, 15px);
  line-height: 1.65;
}

.season-card strong {
  align-self: end;
  justify-self: end;
  color: var(--gold);
  font-family: var(--font-oswald), sans-serif;
  font-size: clamp(24px, 2vw, 36px);
  line-height: 1;
}

.season-card small {
  font-size: .5em;
}

.split-grid {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1.25fr);
  gap: clamp(20px, 3vw, 36px);
  align-items: stretch;
}

.recommended-row {
  grid-template-columns: minmax(0, 1.15fr) minmax(320px, .85fr);
}

.sns-review-row {
  grid-template-columns: minmax(0, .85fr) minmax(0, 1.25fr);
}

.benefit-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 12px;
}

.benefit-card {
  min-height: 126px;
  display: grid;
  place-items: center;
  gap: 6px;
  padding: 14px 10px;
  text-align: center;
}

.benefit-card h3,
.limited-card strong {
  margin: 0;
  color: #fff;
  font-size: clamp(13px, 1vw, 17px);
  line-height: 1.35;
}

.step-list {
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 12px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.step-list li {
  min-height: 150px;
  display: grid;
  place-items: center;
  gap: 6px;
  padding: 16px 10px;
  border: 1px solid rgba(216, 177, 90, .42);
  border-radius: 999px 999px 16px 16px;
  text-align: center;
}

.step-list span {
  width: 46px;
  height: 46px;
  display: grid;
  place-items: center;
  border: 1px solid var(--gold);
  border-radius: 999px;
  color: var(--gold);
  font-family: var(--font-oswald), sans-serif;
  font-size: 24px;
}

.step-list h3 {
  margin: 0;
  color: var(--gold-2);
  font-size: clamp(13px, 1vw, 17px);
}

.step-list p {
  margin: 0;
  color: var(--muted);
  font-size: clamp(11px, .8vw, 13px);
  line-height: 1.55;
}

.recommended-grid {
  grid-template-columns: repeat(6, minmax(0, 1fr));
}

.recommended-card {
  min-height: 144px;
  display: grid;
  grid-template-rows: 88px 1fr;
  padding: 8px;
  gap: 8px;
}

.recommended-card img {
  height: 88px;
}

.recommended-card strong {
  color: #fff;
  font-size: clamp(12px, .95vw, 15px);
  line-height: 1.35;
  text-align: center;
}

.limited-grid {
  grid-template-columns: repeat(4, minmax(0, 1fr));
}

.limited-card {
  min-height: 132px;
  display: grid;
  place-items: center;
  gap: 6px;
  padding: 14px 10px;
  text-align: center;
}

.limited-card small {
  color: var(--muted);
  font-family: var(--font-oswald), sans-serif;
  font-size: 11px;
  letter-spacing: .08em;
}

.sns-grid {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.sns-card {
  min-height: 210px;
  display: grid;
  grid-template-rows: 84px auto auto 1fr;
  gap: 8px;
  padding: 10px;
}

.sns-card img {
  height: 84px;
}

.sns-card strong {
  color: #fff;
  font-size: clamp(13px, 1vw, 16px);
}

.sns-card.insta {
  border-color: rgba(255, 58, 177, .75);
}

.sns-card.tiktok {
  border-color: rgba(55, 255, 232, .75);
}

.sns-card.review {
  border-color: rgba(255, 70, 214, .75);
}

.review-grid {
  grid-template-columns: repeat(4, minmax(0, 1fr));
}

.review-card {
  min-height: 190px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 14px;
  padding: 18px;
}

.review-card span {
  color: #f4c84b;
  letter-spacing: .08em;
}

.review-card p {
  color: #fff;
  font-weight: 700;
}

.review-card small {
  color: var(--muted);
}

.faq-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px 20px;
}

.faq-item {
  padding: 0;
}

.faq-item summary {
  width: 100%;
  min-height: 54px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 14px;
  padding: 14px 18px;
  border: 0;
  background: transparent;
  color: #fff;
  font: inherit;
  font-weight: 800;
  text-align: left;
  cursor: pointer;
  list-style: none;
}

.faq-item summary::-webkit-details-marker {
  display: none;
}

.faq-item b {
  color: var(--gold);
  font-size: 24px;
}

.faq-item b::before {
  content: "+";
}

.faq-item[open] b::before {
  content: "-";
}

.faq-item p {
  padding: 0 18px 18px;
}

.bottom-cta {
  display: grid;
  place-items: center;
  gap: clamp(20px, 3vw, 32px);
  height: auto;
  max-height: none;
  min-height: clamp(330px, 38svh, 480px);
  padding: clamp(40px, 6vh, 80px) clamp(20px, 4vw, 60px) clamp(82px, 9vh, 138px);
  border: 1px solid rgba(216, 177, 90, .46);
  border-radius: 18px;
  background:
    radial-gradient(circle at center, rgba(0,0,0,.72), rgba(0,0,0,.92) 58%),
    url("/assets/campaign/hero-toast.png") center / cover;
  text-align: center;
}

.bottom-cta h2 {
  margin: 0;
  font-size: clamp(52px, 7vw, 116px);
  line-height: .9;
  letter-spacing: .06em;
}

.bottom-cta p {
  margin: 8px 0 0;
  color: var(--gold-2);
  font-size: clamp(16px, 1.4vw, 23px);
  font-weight: 800;
}

.fixed-campaign-cta {
  position: fixed;
  right: max(18px, env(safe-area-inset-right));
  bottom: max(24px, env(safe-area-inset-bottom));
  z-index: 35;
  display: grid;
  gap: 10px;
}

.fixed-campaign-cta a {
  width: 76px;
  min-height: 76px;
  display: grid;
  place-items: center;
  gap: 4px;
  padding: 10px 6px;
  border: 1px solid var(--border);
  border-radius: 16px;
  background: rgba(0,0,0,.88);
  text-align: center;
  box-shadow: 0 0 26px rgba(216, 177, 90, .22);
}

.fixed-campaign-cta a:nth-child(2) {
  border-color: rgba(0, 230, 82, .78);
}

.fixed-campaign-cta a:nth-child(3) {
  border-color: rgba(255, 63, 205, .78);
}

.fixed-campaign-cta span {
  font-size: 11px;
  font-weight: 900;
  line-height: 1.25;
}

@media (max-width: 1280px) {
  .campaign-header {
    grid-template-columns: 1fr;
  }

  .campaign-logo,
  .campaign-reserve {
    justify-self: center;
  }

  .coupon-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .season-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .recommended-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

@media (max-width: 1024px) {
  .campaign-hero,
  .monthly-card,
  .split-grid,
  .recommended-row,
  .sns-review-row {
    grid-template-columns: 1fr;
  }

  .campaign-hero {
    padding-top: clamp(52px, 7vh, 90px);
  }

  .monthly-perks,
  .review-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .benefit-grid,
  .limited-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .step-list {
    grid-template-columns: repeat(5, minmax(110px, 1fr));
  }
}

@media (max-width: 768px) {
  .campaign-header nav {
    justify-content: flex-start;
  }

  .campaign-header nav a {
    min-height: 32px;
    padding: 6px 8px;
  }

  .campaign-hero {
    min-height: auto;
  }

  .campaign-hero-copy {
    text-align: center;
  }

  .campaign-hero-media,
  .campaign-hero-media img {
    min-height: 280px;
  }

  .count-grid,
  .coupon-grid,
  .season-grid,
  .recommended-grid,
  .sns-grid,
  .faq-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .step-list {
    grid-template-columns: 1fr;
  }

  .step-list li {
    min-height: 112px;
    border-radius: 16px;
  }

  .fixed-campaign-cta {
    left: 0;
    right: 0;
    bottom: 0;
    grid-template-columns: repeat(3, 1fr);
    gap: 0;
    padding: 8px max(12px, env(safe-area-inset-left)) calc(8px + env(safe-area-inset-bottom)) max(12px, env(safe-area-inset-right));
    background: rgba(0,0,0,.9);
    border-top: 1px solid rgba(216, 177, 90, .38);
  }

  .fixed-campaign-cta a {
    width: auto;
    min-height: 58px;
    border-radius: 12px;
  }

  .bottom-cta {
    height: auto;
    max-height: none;
    min-height: auto;
    padding-block: clamp(42px, 11vw, 70px) max(clamp(112px, 28vw, 152px), calc(env(safe-area-inset-bottom) + 112px));
  }
}

@media (max-width: 480px) {
  .campaign-header {
    position: relative;
  }

  .campaign-main {
    width: 100%;
    padding-inline: 14px;
  }

  .hero-actions .campaign-button,
  .bottom-actions .campaign-button {
    width: 100%;
  }

  .monthly-perks,
  .count-grid,
  .coupon-grid,
  .season-grid,
  .benefit-grid,
  .recommended-grid,
  .limited-grid,
  .sns-grid,
  .review-grid,
  .faq-grid {
    grid-template-columns: 1fr;
  }

  .monthly-countdown dl div {
    grid-template-columns: 1fr;
  }
}
`;
