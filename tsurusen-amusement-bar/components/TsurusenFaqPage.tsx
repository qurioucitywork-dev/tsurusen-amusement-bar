"use client";

/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import { useMemo, useState, type ComponentType } from "react";
import {
  ArrowRight,
  Camera,
  CalendarCheck,
  CalendarDays,
  ChevronDown,
  ChevronUp,
  CircleDollarSign,
  CircleHelp,
  Flame,
  Mail,
  MapPin,
  MessageCircle,
  MoreHorizontal,
  Phone,
  Search,
  Settings,
  UsersRound,
} from "lucide-react";
import { TsurusenReadyFooter } from "./TsurusenReadyFooter";
import { TsurusenTopHeader } from "./TsurusenTopHeader";

type IconComponent = ComponentType<{ size?: number; strokeWidth?: number; className?: string; "aria-hidden"?: boolean }>;

type FaqCategory = {
  id: string;
  label: string;
  en: string;
  Icon: IconComponent;
};

type FaqItem = {
  id: string;
  category: string;
  question: string;
  answer: string;
  related: string[];
};

const faqAsset = "/assets/faq";

const categories: FaqCategory[] = [
  { id: "reservation", label: "予約について", en: "RESERVATION", Icon: CalendarDays },
  { id: "price", label: "料金・システム", en: "PRICE", Icon: CircleDollarSign },
  { id: "facility", label: "設備・サービス", en: "FACILITY", Icon: Settings },
  { id: "private", label: "貸切・団体利用", en: "PRIVATE PARTY", Icon: UsersRound },
  { id: "access", label: "アクセス", en: "ACCESS", Icon: MapPin },
  { id: "others", label: "その他", en: "OTHERS", Icon: MoreHorizontal },
];

const tabs = [
  { id: "all", label: "すべて" },
  { id: "reservation", label: "予約" },
  { id: "price", label: "料金" },
  { id: "facility", label: "設備" },
  { id: "darts", label: "ダーツ" },
  { id: "karaoke", label: "カラオケ" },
  { id: "private", label: "貸切" },
  { id: "others", label: "その他" },
];

const faqItems: FaqItem[] = [
  {
    id: "reservation-basic",
    category: "reservation",
    question: "予約は必要ですか？",
    answer:
      "通常営業日は予約なしでもご利用いただけます。週末やイベント開催日は混み合うため、事前予約をおすすめしています。団体利用や貸切は事前予約があるとスムーズです。",
    related: ["予約のキャンセルはできますか？", "予約の変更は可能ですか？", "当日予約はできますか？"],
  },
  {
    id: "hours",
    category: "reservation",
    question: "営業時間について",
    answer: "営業時間は18:00から05:00までです。ラストオーダーは04:30を目安にご案内しています。",
    related: ["深夜でも利用できますか？", "終電後も入店できますか？"],
  },
  {
    id: "price-system",
    category: "price",
    question: "料金・システムについて",
    answer: "男性は3,000円、女性は1,500円を目安に、飲み放題・ダーツ・カラオケ込みのシンプルなシステムです。延長料金は別途発生します。",
    related: ["支払い方法を教えてください。", "延長料金はいくらですか？"],
  },
  {
    id: "all-you-can-drink",
    category: "price",
    question: "飲み放題について",
    answer: "ビール、ハイボール、サワー、焼酎、ソフトドリンクなど幅広いメニューをご用意しています。一部プレミアムドリンクは別料金です。",
    related: ["飲み放題の内容を教えてください", "ソフトドリンクだけでも利用できますか？"],
  },
  {
    id: "darts",
    category: "darts",
    question: "ダーツについて",
    answer: "初心者の方でも楽しめるようスタッフが簡単な遊び方をご案内します。最新機種を用意しており、飲み放題中も遊び放題です。",
    related: ["ダーツは初心者でも大丈夫ですか？", "対戦できますか？"],
  },
  {
    id: "karaoke",
    category: "karaoke",
    question: "カラオケについて",
    answer: "店内の音響でカラオケを楽しめます。混雑時は譲り合いながらご利用ください。",
    related: ["団体で歌えますか？", "カラオケ料金は別ですか？"],
  },
  {
    id: "board-game",
    category: "facility",
    question: "ボードゲームについて",
    answer: "定番ゲームから盛り上がるパーティーゲームまでご用意しています。スタッフへお声がけください。",
    related: ["ゲームの持ち込みはできますか？", "初心者向けはありますか？"],
  },
  {
    id: "private-party",
    category: "private",
    question: "貸切・団体利用について",
    answer: "最大100名様までの貸切や団体利用に対応しています。人数、希望日、利用時間を事前にご相談ください。",
    related: ["貸切は何名から可能ですか？", "コース相談はできますか？"],
  },
  {
    id: "birthday",
    category: "facility",
    question: "誕生日・サプライズについて",
    answer: "誕生日や記念日のサプライズ演出もご相談いただけます。ケーキや装飾の持ち込みは事前確認をお願いします。",
    related: ["ケーキの持ち込みはできますか？", "音楽演出はできますか？"],
  },
  {
    id: "payment",
    category: "price",
    question: "支払い方法について",
    answer: "現金、主要クレジットカード、QR決済、スマホ決済に対応しています。店舗状況により対応決済が変わる場合があります。",
    related: ["領収書は発行できますか？", "割り勘はできますか？"],
  },
  {
    id: "smoking",
    category: "others",
    question: "喫煙・年齢制限について",
    answer: "店内ルールと法令に沿ってご案内しています。年齢確認をお願いする場合がありますので身分証をご持参ください。",
    related: ["身分証は必要ですか？", "未成年は入店できますか？"],
  },
  {
    id: "foreign-guests",
    category: "others",
    question: "外国人の利用について",
    answer: "海外からのお客様も歓迎しています。簡単な英語案内や翻訳ツールでサポートします。",
    related: ["英語で案内できますか？", "観光客でも利用できますか？"],
  },
  {
    id: "lost-items",
    category: "others",
    question: "忘れ物について",
    answer: "忘れ物に気づいた際は、来店日時と特徴を添えて店舗までお問い合わせください。",
    related: ["当日中に確認できますか？", "保管期間はありますか？"],
  },
  {
    id: "access",
    category: "access",
    question: "アクセスについて",
    answer: "最寄り駅は新宿駅東口です。歌舞伎町方面へ徒歩でお越しいただけます。詳しい道順はACCESSページの写真付きルートをご確認ください。",
    related: ["最寄り駅はどこですか？", "迷った場合は連絡できますか？"],
  },
  {
    id: "cancel",
    category: "reservation",
    question: "キャンセルについて",
    answer: "人数変更やキャンセルはできるだけ早めにご連絡ください。貸切やイベント日は条件が異なる場合があります。",
    related: ["予約変更は可能ですか？", "キャンセル料はかかりますか？"],
  },
];

const popularQuestions = [
  ["予約は必要ですか？", "12.6K"],
  ["ダーツは初心者でも大丈夫ですか？", "9.8K"],
  ["飲み放題はありますか？", "8.4K"],
  ["女性だけでも利用できますか？", "7.3K"],
  ["貸切は何名から可能ですか？", "6.1K"],
  ["支払い方法を教えてください。", "5.7K"],
] as const;

const guides = [
  { title: "初めての方へ", en: "GUIDE", text: "はじめてでも安心の鶴千の楽しみ方", img: "guide-first.png" },
  { title: "アクセスガイド", en: "ACCESS", text: "迷わず到着できるルートを紹介", img: "guide-access.png" },
  { title: "料金ガイド", en: "PRICE", text: "システム・料金をわかりやすく解説", img: "guide-price.png" },
  { title: "利用シーン別ガイド", en: "SCENE", text: "女子会・二次会・デートにおすすめの楽しみ方", img: "guide-scene.png" },
  { title: "貸切ガイド", en: "PRIVATE PARTY", text: "貸切の流れや設備・プラン案内", img: "guide-private.png" },
  { title: "よくある質問まとめ", en: "FAQ", text: "よくある質問をまとめて解決", img: "guide-faq.png" },
] as const;

const contactCards = [
  { title: "電話で問い合わせ", sub: "03-1234-5678", note: "18:00 - 5:00", Icon: Phone, href: "tel:03-1234-5678" },
  { title: "LINEで相談", sub: "LINEで", note: "気軽に質問する", Icon: MessageCircle, href: "https://line.me/R/ti/p/@tsurusen" },
  { title: "Instagram DM", sub: "@tsurusen_kabukicho", note: "DMで相談する", Icon: Camera, href: "https://www.instagram.com/" },
  { title: "メールで問い合わせ", sub: "info@tsurusen.jp", note: "24時間受付", Icon: Mail, href: "mailto:info@tsurusen.jp" },
] as const;

const customerTips = [
  { title: "混雑する時間帯", text: "週末21時以降は混雑。平日は比較的ゆったり。", img: "tip-crowd.png" },
  { title: "おすすめの曜日", text: "火曜から木曜が狙い目。ゆっくり楽しめます。", img: "tip-day.png" },
  { title: "おすすめの利用シーン", text: "女子会・デート・二次会で使いやすい空間。", img: "tip-scene.png" },
  { title: "服装について", text: "カジュアルでOK。おしゃれを楽しめます。", img: "tip-dress.png" },
  { title: "持ち物について", text: "身分証とスマホがあるとスムーズです。", img: "tip-belongings.png" },
] as const;

const topicTags = [
  "女子会",
  "二次会",
  "ダーツ",
  "カラオケ",
  "飲み放題",
  "貸切",
  "イベント",
  "誕生日",
  "サプライズ",
  "料金",
  "支払い",
  "アクセス",
  "初心者",
  "外国人",
  "喫煙",
  "年齢制限",
] as const;

export function TsurusenFaqPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("all");
  const [activeQuestionId, setActiveQuestionId] = useState(faqItems[0].id);

  const filteredFaqs = useMemo(() => {
    const normalized = searchQuery.trim().toLowerCase();
    return faqItems.filter((item) => {
      const matchesTab = activeTab === "all" || item.category === activeTab;
      const matchesSearch =
        !normalized ||
        item.question.toLowerCase().includes(normalized) ||
        item.answer.toLowerCase().includes(normalized) ||
        item.related.some((related) => related.toLowerCase().includes(normalized));
      return matchesTab && matchesSearch;
    });
  }, [activeTab, searchQuery]);

  const activeQuestion = faqItems.find((item) => item.id === activeQuestionId) ?? filteredFaqs[0] ?? faqItems[0];

  return (
    <div className="tsurusen-faq-page">
      <TsurusenTopHeader active="FAQ" />

      <main>
        <section className="faq-hero" aria-labelledby="faq-hero-title">
          <div className="faq-hero__content">
            <div className="faq-hero__copy">
              <p className="faq-kicker">FAQ</p>
              <h1 id="faq-hero-title">
                HOW
                <br />
                CAN WE
                <br />
                HELP?
              </h1>
              <p className="faq-hero__lead">Everything You Need To Know Before Visiting TSURUSEN.</p>
              <label className="faq-search" htmlFor="faq-search-input">
                <Search size={24} strokeWidth={1.9} aria-hidden="true" />
                <input
                  id="faq-search-input"
                  type="search"
                  value={searchQuery}
                  onChange={(event) => setSearchQuery(event.target.value)}
                  placeholder="質問を検索（例：予約、料金、ダーツ）"
                />
              </label>
            </div>
            <div className="faq-hero__panel" aria-label="Frequently Asked Questions">
              <span>FAQ</span>
              <p>
                FREQUENTLY
                <br />
                ASKED
                <br />
                QUESTIONS
              </p>
              <CircleHelp size={32} strokeWidth={1.5} aria-hidden="true" />
            </div>
          </div>
        </section>

        <section className="faq-main">
          <section className="faq-section" aria-labelledby="quick-categories-title">
            <h2 id="quick-categories-title" className="faq-section-title">
              QUICK CATEGORIES
            </h2>
            <div className="faq-category-grid">
              {categories.map((category) => {
                const Icon = category.Icon;
                return (
                  <button
                    key={category.id}
                    className={`faq-category-card ${activeTab === category.id ? "is-active" : ""}`}
                    type="button"
                    onClick={() => setActiveTab(category.id)}
                  >
                    <Icon size={42} strokeWidth={1.5} aria-hidden />
                    <span>{category.label}</span>
                    <small>{category.en}</small>
                  </button>
                );
              })}
            </div>
          </section>

          <section className="faq-grid-panel" aria-label="FAQ dashboard">
            <aside className="faq-card faq-popular" aria-labelledby="popular-questions-title">
              <h2 id="popular-questions-title" className="faq-section-title">
                POPULAR QUESTIONS
              </h2>
              <ul>
                {popularQuestions.map(([question, count]) => (
                  <li key={question}>
                    <Flame size={19} strokeWidth={1.7} aria-hidden="true" />
                    <span>{question}</span>
                    <small>{count}</small>
                  </li>
                ))}
              </ul>
              <Link className="faq-outline-button" href="#faq-list">
                すべての人気質問を見る
                <ArrowRight size={18} aria-hidden="true" />
              </Link>
            </aside>

            <section id="faq-list" className="faq-card faq-list-panel" aria-labelledby="frequent-questions-title">
              <div className="faq-list-panel__head">
                <h2 id="frequent-questions-title" className="faq-section-title">
                  FREQUENTLY ASKED QUESTIONS
                </h2>
                <div className="faq-tabs" role="tablist" aria-label="FAQ categories">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      type="button"
                      className={activeTab === tab.id ? "is-active" : ""}
                      onClick={() => setActiveTab(tab.id)}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="faq-accordion">
                {filteredFaqs.map((item) => {
                  const open = activeQuestion.id === item.id;
                  return (
                    <article key={item.id} className={`faq-accordion__item ${open ? "is-open" : ""}`}>
                      <button
                        type="button"
                        onClick={() => setActiveQuestionId(item.id)}
                        aria-expanded={open}
                        aria-controls={`${item.id}-answer`}
                      >
                        <span>{item.question}</span>
                        <ChevronDown size={20} strokeWidth={1.8} aria-hidden="true" />
                      </button>
                      <div id={`${item.id}-answer`} className="faq-accordion__answer">
                        <p>{item.answer}</p>
                      </div>
                    </article>
                  );
                })}
              </div>
            </section>

            <aside className="faq-card faq-answer-card" aria-live="polite">
              <h3>{activeQuestion.question}</h3>
              <p>{activeQuestion.answer}</p>
              <div className="faq-answer-card__survey">
                <span>この回答は役に立ちましたか？</span>
                <div>
                  <button type="button">はい</button>
                  <button type="button">いいえ</button>
                </div>
              </div>
              <div className="faq-related">
                <h4>関連する質問</h4>
                {activeQuestion.related.map((question) => (
                  <button key={question} type="button">
                    {question}
                  </button>
                ))}
              </div>
            </aside>
          </section>

          <section className="faq-section" aria-labelledby="helpful-guides-title">
            <h2 id="helpful-guides-title" className="faq-section-title">
              HELPFUL GUIDES
            </h2>
            <div className="faq-guide-grid">
              {guides.map((guide) => (
                <Link key={guide.title} className="faq-image-card" href={guide.en === "ACCESS" ? "/access" : "#faq-list"}>
                  <img src={`${faqAsset}/${guide.img}`} alt="" loading="lazy" />
                  <div>
                    <h3>{guide.title}</h3>
                    <small>{guide.en}</small>
                    <p>{guide.text}</p>
                  </div>
                  <ArrowRight size={20} aria-hidden="true" />
                </Link>
              ))}
            </div>
          </section>

          <section className="faq-help-area" aria-labelledby="need-more-help-title">
            <div className="faq-help-copy">
              <h2 id="need-more-help-title" className="faq-section-title">
                NEED MORE HELP?
              </h2>
              <p>
                それでも解決しない場合は、
                <br />
                お気軽にご連絡ください。
              </p>
              <span>スタッフが丁寧にご案内いたします。どんな些細なことでもお気軽にご相談ください。</span>
            </div>
            <div className="faq-contact-grid">
              {contactCards.map((card) => {
                const Icon = card.Icon;
                return (
                  <Link key={card.title} className="faq-contact-card" href={card.href}>
                    <Icon size={36} strokeWidth={1.6} aria-hidden />
                    <strong>{card.title}</strong>
                    <span>{card.sub}</span>
                    <small>{card.note}</small>
                  </Link>
                );
              })}
            </div>
          </section>

          <section className="faq-bottom-grid" aria-label="Tips and topics">
            <div className="faq-card">
              <h2 className="faq-section-title">CUSTOMER TIPS</h2>
              <div className="faq-tip-grid">
                {customerTips.map((tip) => (
                  <article key={tip.title} className="faq-tip-card">
                    <img src={`${faqAsset}/${tip.img}`} alt="" loading="lazy" />
                    <h3>{tip.title}</h3>
                    <p>{tip.text}</p>
                  </article>
                ))}
              </div>
            </div>
            <div className="faq-card">
              <h2 className="faq-section-title">SEARCH BY TOPIC</h2>
              <div className="faq-topic-grid">
                {topicTags.map((topic) => (
                  <button
                    key={topic}
                    type="button"
                    onClick={() => {
                      setSearchQuery(topic);
                      setActiveTab("all");
                    }}
                  >
                    {topic}
                  </button>
                ))}
              </div>
            </div>
          </section>

          <section className="faq-still" aria-labelledby="still-have-questions-title">
            <div>
              <h2 id="still-have-questions-title">
                STILL HAVE
                <br />
                QUESTIONS?
              </h2>
            </div>
            <div className="faq-still__photo" aria-hidden="true" />
            <div>
              <h3>We&apos;re Here To Help.</h3>
              <div className="faq-still__actions">
                <Link href="mailto:info@tsurusen.jp">お問い合わせ</Link>
                <Link href="https://line.me/R/ti/p/@tsurusen">LINE予約</Link>
                <Link href="tel:03-1234-5678">電話する</Link>
              </div>
            </div>
          </section>
        </section>

        <TsurusenReadyFooter id="reserve" className="faq-ready-footer" showFloating={false} />
      </main>

      <aside className="faq-fixed-cta" aria-label="FAQ quick actions">
        <Link className="faq-fixed-cta__line" href="https://line.me/R/ti/p/@tsurusen">
          <MessageCircle size={30} strokeWidth={1.8} aria-hidden="true" />
          <span>LINE相談</span>
        </Link>
        <Link className="faq-fixed-cta__web" href="/reservation">
          <CalendarCheck size={30} strokeWidth={1.8} aria-hidden="true" />
          <span>WEB予約</span>
        </Link>
        <Link className="faq-fixed-cta__phone" href="tel:03-1234-5678">
          <Phone size={30} strokeWidth={1.8} aria-hidden="true" />
          <span>電話する</span>
        </Link>
        <Link className="faq-fixed-cta__top" href="#">
          <ChevronUp size={30} strokeWidth={1.8} aria-hidden="true" />
          <span>上へ</span>
        </Link>
      </aside>

      <style>{faqCss}</style>
    </div>
  );
}

const faqCss = `
body:has(.tsurusen-faq-page) > header,
body:has(.tsurusen-faq-page) > footer,
body:has(.tsurusen-faq-page) > .mobile-sticky-cta,
body:has(.tsurusen-faq-page) > .skip-link {
  display: none !important;
}

body:has(.tsurusen-faq-page) {
  background: #050505;
}

body:has(.tsurusen-faq-page) main {
  padding: 0;
}

.tsurusen-faq-page {
  --faq-bg: #050505;
  --faq-panel: #0b0b0b;
  --faq-panel-2: #11100d;
  --faq-gold: #d8b15a;
  --faq-gold-soft: rgba(216, 177, 90, 0.68);
  --faq-gold-dim: rgba(216, 177, 90, 0.36);
  --faq-text: #f8f3e7;
  --faq-muted: rgba(248, 243, 231, 0.72);
  min-height: 100%;
  background:
    radial-gradient(circle at 50% 0%, rgba(216, 177, 90, 0.13), transparent 30%),
    linear-gradient(180deg, #050505, #070706 42%, #050505);
  color: var(--faq-text);
  overflow-x: clip;
  font-family: var(--font-noto-sans-jp), "Noto Sans JP", "Hiragino Sans", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: geometricPrecision;
  font-feature-settings: "kern", "liga";
}

.tsurusen-faq-page *,
.tsurusen-faq-page *::before,
.tsurusen-faq-page *::after {
  box-sizing: border-box;
}

.faq-hero {
  position: relative;
  display: flex;
  align-items: center;
  min-height: clamp(520px, 72svh, 760px);
  padding-block: clamp(72px, 8vh, 132px);
  background:
    linear-gradient(90deg, rgba(5, 5, 5, 0.96), rgba(5, 5, 5, 0.66) 38%, rgba(5, 5, 5, 0.24) 68%, rgba(5, 5, 5, 0.88)),
    radial-gradient(circle at 68% 45%, rgba(216, 177, 90, 0.18), transparent 22%),
    url("/assets/faq/faq-hero-bg.png") center center / cover no-repeat;
  border-bottom: 1px solid rgba(216, 177, 90, 0.34);
}

.faq-hero__content,
.faq-main {
  width: min(94vw, 1500px);
  margin-inline: auto;
}

.faq-hero__content {
  display: grid;
  grid-template-columns: minmax(0, 1.05fr) minmax(320px, 0.8fr);
  gap: clamp(32px, 5vw, 92px);
  align-items: center;
}

.faq-kicker,
.faq-section-title {
  margin: 0;
  color: var(--faq-gold);
  font-family: var(--font-oswald), var(--font-bebas), "Arial Narrow", sans-serif;
  font-style: italic;
  font-weight: 800;
  letter-spacing: 0.12em;
}

.faq-kicker {
  font-size: clamp(18px, 1.4vw, 24px);
}

.faq-hero h1 {
  margin: 0;
  max-width: 660px;
  font-family: var(--font-bebas), var(--font-oswald), "Arial Narrow", sans-serif;
  font-size: clamp(76px, 7.5vw, 132px);
  line-height: 0.86;
  letter-spacing: 0.035em;
  color: #f7f0df;
  text-shadow: 0 0 32px rgba(255, 246, 218, 0.28);
}

.faq-hero__lead {
  max-width: 520px;
  margin: clamp(16px, 2vh, 24px) 0 0;
  color: #f0c966;
  font-family: var(--font-playfair), Georgia, serif;
  font-size: clamp(21px, 1.8vw, 32px);
  line-height: 1.35;
}

.faq-search {
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  gap: 16px;
  width: min(100%, 690px);
  min-height: 66px;
  margin-top: clamp(24px, 4vh, 42px);
  padding: 0 24px;
  border: 1px solid rgba(216, 177, 90, 0.62);
  border-radius: 8px;
  background: rgba(10, 10, 10, 0.72);
  box-shadow: 0 0 28px rgba(216, 177, 90, 0.1);
}

.faq-search svg {
  color: var(--faq-gold);
}

.faq-search input {
  width: 100%;
  min-width: 0;
  border: 0;
  outline: 0;
  background: transparent;
  color: var(--faq-text);
  font-size: clamp(15px, 1.2vw, 20px);
  line-height: 1.5;
}

.faq-search input::placeholder {
  color: rgba(248, 243, 231, 0.64);
}

.faq-hero__panel {
  display: grid;
  place-items: center;
  min-height: clamp(310px, 37vw, 470px);
  padding: clamp(32px, 4vw, 70px);
  text-align: center;
  border: 1px solid rgba(216, 177, 90, 0.56);
  background:
    linear-gradient(180deg, rgba(0, 0, 0, 0.62), rgba(7, 7, 6, 0.9)),
    radial-gradient(circle at 50% 0%, rgba(216, 177, 90, 0.16), transparent 42%);
  box-shadow: inset 0 0 0 1px rgba(216, 177, 90, 0.16), 0 0 44px rgba(216, 177, 90, 0.18);
}

.faq-hero__panel span {
  color: var(--faq-gold);
  font-family: var(--font-playfair), Georgia, serif;
  font-size: clamp(72px, 7vw, 120px);
  line-height: 1;
}

.faq-hero__panel p {
  margin: clamp(12px, 2vh, 22px) 0;
  color: #f1c86d;
  font-family: var(--font-playfair), Georgia, serif;
  font-size: clamp(19px, 1.8vw, 30px);
  line-height: 1.35;
}

.faq-hero__panel svg {
  color: var(--faq-gold);
}

.faq-main {
  display: flex;
  flex-direction: column;
  gap: clamp(16px, 2.4vw, 28px);
  padding-block: clamp(24px, 4vh, 56px) clamp(48px, 6vh, 96px);
}

.faq-section {
  min-width: 0;
}

.faq-section-title {
  font-size: clamp(20px, 1.8vw, 31px);
  line-height: 1.1;
}

.faq-category-grid {
  display: grid;
  grid-template-columns: repeat(6, minmax(0, 1fr));
  gap: clamp(10px, 1.4vw, 18px);
  margin-top: 16px;
}

.faq-category-card {
  display: grid;
  min-height: clamp(128px, 10vw, 168px);
  place-items: center;
  gap: 8px;
  padding: 18px 12px;
  border: 1px solid rgba(216, 177, 90, 0.46);
  border-radius: 8px;
  background: linear-gradient(180deg, rgba(17, 17, 17, 0.92), rgba(7, 7, 7, 0.98));
  color: var(--faq-text);
  cursor: pointer;
  transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;
}

.faq-category-card svg {
  color: var(--faq-gold);
}

.faq-category-card span {
  font-size: clamp(15px, 1.05vw, 19px);
  font-weight: 800;
  line-height: 1.25;
  text-align: center;
}

.faq-category-card small {
  color: var(--faq-gold);
  font-family: var(--font-oswald), sans-serif;
  font-size: 13px;
  font-weight: 800;
  letter-spacing: 0.08em;
}

.faq-category-card:hover,
.faq-category-card:focus-visible,
.faq-category-card.is-active {
  border-color: rgba(245, 204, 98, 0.96);
  box-shadow: 0 0 28px rgba(216, 177, 90, 0.28), inset 0 0 30px rgba(216, 177, 90, 0.12);
  transform: translateY(-3px);
}

.faq-grid-panel {
  display: grid;
  grid-template-columns: minmax(250px, 0.82fr) minmax(0, 1.35fr) minmax(280px, 0.76fr);
  gap: clamp(14px, 1.5vw, 22px);
  align-items: stretch;
}

.faq-card {
  min-width: 0;
  border: 1px solid rgba(216, 177, 90, 0.48);
  border-radius: 10px;
  background:
    radial-gradient(circle at 70% 0%, rgba(216, 177, 90, 0.1), transparent 34%),
    linear-gradient(180deg, rgba(13, 13, 13, 0.96), rgba(6, 6, 6, 0.98));
  box-shadow: inset 0 0 0 1px rgba(216, 177, 90, 0.08);
  padding: clamp(20px, 2vw, 28px);
}

.faq-popular {
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.faq-popular ul {
  display: grid;
  gap: 12px;
  padding: 0;
  margin: 0;
  list-style: none;
}

.faq-popular li {
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: 12px;
  align-items: center;
  min-height: 42px;
  border-bottom: 1px solid rgba(216, 177, 90, 0.14);
}

.faq-popular li svg {
  color: #ff6b2d;
}

.faq-popular li span {
  min-width: 0;
  font-size: clamp(14px, 1vw, 17px);
  line-height: 1.35;
}

.faq-popular li small {
  color: rgba(248, 243, 231, 0.72);
  font-size: 14px;
}

.faq-outline-button,
.faq-still__actions a {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  min-height: 54px;
  padding: 12px 18px;
  border: 1px solid rgba(216, 177, 90, 0.68);
  border-radius: 6px;
  color: var(--faq-gold);
  text-decoration: none;
  font-weight: 800;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.faq-outline-button:hover,
.faq-outline-button:focus-visible,
.faq-still__actions a:hover,
.faq-still__actions a:focus-visible {
  transform: translateY(-2px);
  box-shadow: 0 0 24px rgba(216, 177, 90, 0.25);
}

.faq-list-panel {
  display: grid;
  gap: 14px;
}

.faq-list-panel__head {
  display: grid;
  gap: 12px;
}

.faq-tabs {
  display: flex;
  flex-wrap: wrap;
  gap: 10px 18px;
}

.faq-tabs button {
  border: 0;
  background: transparent;
  color: rgba(248, 243, 231, 0.68);
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  padding: 0;
}

.faq-tabs button.is-active {
  color: var(--faq-gold);
}

.faq-accordion {
  display: grid;
  gap: 6px;
}

.faq-accordion__item {
  border: 1px solid rgba(216, 177, 90, 0.26);
  border-radius: 5px;
  background: rgba(8, 8, 8, 0.78);
}

.faq-accordion__item button {
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  width: 100%;
  min-height: 42px;
  gap: 12px;
  padding: 8px 13px;
  border: 0;
  background: transparent;
  color: var(--faq-text);
  cursor: pointer;
  text-align: left;
  font-weight: 800;
  line-height: 1.35;
}

.faq-accordion__item button svg {
  color: var(--faq-gold);
  transition: transform 0.25s ease;
}

.faq-accordion__item.is-open button svg {
  transform: rotate(180deg);
}

.faq-accordion__answer {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 0.25s ease;
}

.faq-accordion__answer p {
  min-height: 0;
  overflow: hidden;
  margin: 0;
  padding: 0 13px;
  color: var(--faq-muted);
  font-size: clamp(13px, 1vw, 15px);
  line-height: 1.75;
}

.faq-accordion__item.is-open .faq-accordion__answer {
  grid-template-rows: 1fr;
}

.faq-accordion__item.is-open .faq-accordion__answer p {
  padding-bottom: 13px;
}

.faq-answer-card {
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.faq-answer-card h3 {
  margin: 0;
  font-size: clamp(20px, 1.8vw, 30px);
  line-height: 1.45;
}

.faq-answer-card p,
.faq-help-copy span,
.faq-tip-card p {
  margin: 0;
  color: var(--faq-muted);
  font-size: clamp(14px, 1vw, 16px);
  line-height: 1.8;
}

.faq-answer-card__survey {
  display: grid;
  gap: 10px;
}

.faq-answer-card__survey span,
.faq-related h4 {
  color: var(--faq-gold);
  font-weight: 800;
}

.faq-answer-card__survey div {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
}

.faq-answer-card__survey button {
  min-height: 42px;
  border: 1px solid rgba(216, 177, 90, 0.46);
  border-radius: 4px;
  background: rgba(216, 177, 90, 0.08);
  color: var(--faq-gold);
  cursor: pointer;
  font-weight: 700;
}

.faq-related {
  display: grid;
  gap: 8px;
}

.faq-related h4 {
  margin: 0;
}

.faq-related button {
  border: 0;
  background: transparent;
  color: var(--faq-gold);
  text-align: left;
  font-weight: 700;
  cursor: pointer;
  padding: 0;
}

.faq-guide-grid {
  display: grid;
  grid-template-columns: repeat(6, minmax(0, 1fr));
  gap: clamp(10px, 1.4vw, 18px);
  margin-top: 16px;
}

.faq-image-card {
  display: grid;
  grid-template-rows: auto 1fr auto;
  gap: 10px;
  min-height: 230px;
  padding: 12px;
  border: 1px solid rgba(216, 177, 90, 0.46);
  border-radius: 10px;
  background: linear-gradient(180deg, rgba(12, 12, 12, 0.96), rgba(5, 5, 5, 0.98));
  color: var(--faq-text);
  text-decoration: none;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.faq-image-card:hover,
.faq-image-card:focus-visible,
.faq-tip-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 0 26px rgba(216, 177, 90, 0.22);
}

.faq-image-card img {
  width: 100%;
  aspect-ratio: 1.65 / 1;
  object-fit: cover;
  border-radius: 8px;
}

.faq-image-card h3,
.faq-tip-card h3 {
  margin: 0;
  font-size: clamp(15px, 1.05vw, 19px);
  line-height: 1.35;
}

.faq-image-card small {
  color: var(--faq-gold);
  font-family: var(--font-oswald), sans-serif;
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.1em;
}

.faq-image-card p {
  margin: 6px 0 0;
  color: var(--faq-muted);
  font-size: 13px;
  line-height: 1.6;
}

.faq-image-card svg {
  justify-self: end;
  color: var(--faq-gold);
}

.faq-help-area,
.faq-bottom-grid {
  display: grid;
  grid-template-columns: minmax(270px, 0.75fr) minmax(0, 1.8fr);
  gap: clamp(14px, 1.4vw, 20px);
}

.faq-help-copy {
  display: grid;
  align-content: center;
  gap: 12px;
  min-height: 190px;
  padding: clamp(22px, 2.4vw, 34px);
  border: 1px solid rgba(216, 177, 90, 0.48);
  border-radius: 10px;
  background:
    linear-gradient(90deg, rgba(5, 5, 5, 0.88), rgba(5, 5, 5, 0.72)),
    url("/assets/faq/faq-help-cta.png") center / cover no-repeat;
}

.faq-help-copy p {
  margin: 0;
  color: var(--faq-text);
  font-size: clamp(21px, 1.8vw, 30px);
  line-height: 1.6;
  font-weight: 800;
}

.faq-contact-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: clamp(12px, 1.3vw, 18px);
}

.faq-contact-card {
  display: grid;
  gap: 8px;
  min-height: 190px;
  padding: clamp(18px, 1.8vw, 28px);
  border: 1px solid rgba(216, 177, 90, 0.46);
  border-radius: 10px;
  background: rgba(10, 10, 10, 0.92);
  color: var(--faq-text);
  text-decoration: none;
  align-content: center;
}

.faq-contact-card svg {
  color: var(--faq-gold);
}

.faq-contact-card strong {
  font-size: clamp(16px, 1.2vw, 20px);
  line-height: 1.35;
}

.faq-contact-card span {
  font-size: clamp(16px, 1.2vw, 19px);
}

.faq-contact-card small {
  color: var(--faq-muted);
}

.faq-bottom-grid {
  grid-template-columns: minmax(0, 1.25fr) minmax(280px, 0.75fr);
}

.faq-tip-grid {
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 12px;
  margin-top: 16px;
}

.faq-tip-card {
  display: grid;
  gap: 8px;
  padding: 10px;
  border: 1px solid rgba(216, 177, 90, 0.3);
  border-radius: 8px;
  background: rgba(7, 7, 7, 0.78);
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.faq-tip-card img {
  width: 100%;
  aspect-ratio: 1.45 / 1;
  object-fit: cover;
  border-radius: 6px;
}

.faq-tip-card p {
  font-size: 13px;
  line-height: 1.55;
}

.faq-topic-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 16px;
}

.faq-topic-grid button {
  min-height: 34px;
  padding: 6px 14px;
  border: 1px solid rgba(216, 177, 90, 0.3);
  border-radius: 6px;
  background: rgba(10, 10, 10, 0.72);
  color: rgba(248, 243, 231, 0.82);
  cursor: pointer;
  font-weight: 700;
}

.faq-still {
  display: grid;
  grid-template-columns: minmax(220px, 0.7fr) minmax(260px, 1fr) minmax(260px, 0.9fr);
  align-items: center;
  gap: clamp(18px, 2vw, 34px);
  min-height: clamp(220px, 20vw, 310px);
  padding: clamp(22px, 3vw, 42px);
  border: 1px solid rgba(216, 177, 90, 0.46);
  border-radius: 10px;
  background:
    linear-gradient(90deg, rgba(5, 5, 5, 0.94), rgba(5, 5, 5, 0.46), rgba(5, 5, 5, 0.92)),
    url("/assets/faq/faq-street-cta.png") center / cover no-repeat;
}

.faq-still h2,
.faq-still h3 {
  margin: 0;
  font-family: var(--font-bebas), var(--font-oswald), sans-serif;
  line-height: 0.95;
  letter-spacing: 0.06em;
}

.faq-still h2 {
  font-size: clamp(52px, 5vw, 92px);
  color: #f8f1de;
}

.faq-still h3 {
  font-size: clamp(34px, 3.2vw, 62px);
  color: #f8f1de;
}

.faq-still__photo {
  min-height: 180px;
  border-radius: 8px;
  background:
    linear-gradient(90deg, rgba(5, 5, 5, 0.1), rgba(5, 5, 5, 0.28)),
    url("/assets/faq/faq-hero-party.png") center / cover no-repeat;
}

.faq-still__actions {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 12px;
  margin-top: 18px;
}

.faq-ready-footer {
  margin-top: 0;
}

.faq-fixed-cta {
  position: fixed;
  z-index: 120;
  right: max(18px, env(safe-area-inset-right));
  bottom: max(18px, env(safe-area-inset-bottom));
  display: grid;
  gap: 10px;
  width: clamp(72px, 6.2vw, 92px);
  pointer-events: auto;
}

.faq-fixed-cta a {
  display: grid;
  place-items: center;
  gap: 6px;
  min-height: clamp(72px, 9svh, 92px);
  padding: 9px 6px;
  border: 1px solid rgba(216, 177, 90, 0.74);
  border-radius: 14px;
  background: rgba(6, 6, 6, 0.88);
  color: var(--faq-text);
  text-align: center;
  text-decoration: none;
  box-shadow: 0 0 24px rgba(216, 177, 90, 0.18);
  backdrop-filter: blur(12px);
}

.faq-fixed-cta a span {
  font-size: clamp(10px, 0.8vw, 13px);
  line-height: 1.2;
  font-weight: 900;
}

.faq-fixed-cta__line {
  border-color: rgba(38, 236, 110, 0.84) !important;
  color: #39ff88 !important;
}

.faq-fixed-cta__web {
  color: var(--faq-gold) !important;
}

.faq-fixed-cta__phone {
  border-color: rgba(241, 73, 189, 0.82) !important;
  color: #ff6ed4 !important;
}

.faq-fixed-cta__top {
  border-radius: 999px !important;
  min-height: clamp(56px, 7svh, 72px) !important;
}

@media (max-width: 1180px) {
  .faq-hero__content,
  .faq-grid-panel,
  .faq-help-area,
  .faq-bottom-grid,
  .faq-still {
    grid-template-columns: 1fr;
  }

  .faq-category-grid,
  .faq-guide-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .faq-contact-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .faq-tip-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

@media (max-width: 760px) {
  .faq-hero {
    min-height: auto;
    padding-block: clamp(52px, 8svh, 86px);
  }

  .faq-hero__panel {
    min-height: 240px;
  }

  .faq-category-grid,
  .faq-guide-grid,
  .faq-contact-grid,
  .faq-tip-grid,
  .faq-still__actions {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .faq-card,
  .faq-help-copy,
  .faq-still {
    padding: 18px;
  }

  .faq-fixed-cta {
    width: min(72px, calc(100vw - 18px));
    right: max(8px, env(safe-area-inset-right));
    bottom: max(10px, env(safe-area-inset-bottom));
  }
}

@media (max-width: 480px) {
  .faq-main,
  .faq-hero__content {
    width: min(92vw, 1500px);
  }

  .faq-category-grid,
  .faq-guide-grid,
  .faq-contact-grid,
  .faq-tip-grid,
  .faq-still__actions {
    grid-template-columns: 1fr;
  }

  .faq-hero h1 {
    font-size: clamp(60px, 19vw, 88px);
  }

  .faq-search {
    min-height: 58px;
    padding-inline: 16px;
  }

  .faq-fixed-cta a span {
    font-size: 10px;
  }
}
`;
