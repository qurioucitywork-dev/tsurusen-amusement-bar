import Link from "next/link";
import { CalendarDays, MessageCircle, Phone } from "lucide-react";

const readyFooterActions = [
  {
    href: "/reservation",
    label: "WEB予約",
    sub: "RESERVE",
    tone: "gold",
    Icon: CalendarDays,
  },
  {
    href: "https://line.me/R/ti/p/@tsurusen",
    label: "LINE予約",
    sub: "LINE",
    tone: "green",
    Icon: MessageCircle,
  },
  {
    href: "tel:03-XXXX-XXXX",
    label: "電話予約",
    sub: "CALL",
    tone: "pink",
    Icon: Phone,
  },
] as const;

type TsurusenReadyFooterProps = {
  id?: string;
  className?: string;
  showFloating?: boolean;
  showFooter?: boolean;
};

export function TsurusenReadyFooter({ id = "reserve", className = "", showFloating = true, showFooter = true }: TsurusenReadyFooterProps) {
  const titleId = `${id}-ready-footer-title`;

  return (
    <>
      {showFooter ? (
        <section id={id} className={`ts-ready-footer ${className}`.trim()} aria-labelledby={titleId}>
          <div className="ts-ready-footer__inner">
            <h2 id={titleId}>READY TO PLAY?</h2>
            <p>今すぐ予約して、最高の夜を楽しもう！</p>
            <div className="ts-ready-footer__actions" aria-label="予約アクション">
              {readyFooterActions.map((action) => (
                <Link key={action.label} className={`ts-ready-footer__button ts-ready-footer__button--${action.tone}`} href={action.href}>
                  <span>{action.label}</span>
                  <small>{action.sub}</small>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {showFloating ? (
        <aside className="ts-ready-floating" aria-label="予約ショートカット">
          {readyFooterActions.map((action) => {
            const Icon = action.Icon;
            return (
              <Link key={action.label} className={`ts-ready-floating__button ts-ready-floating__button--${action.tone}`} href={action.href}>
                <Icon size={28} strokeWidth={2.1} aria-hidden="true" />
                <span>{action.label}</span>
              </Link>
            );
          })}
        </aside>
      ) : null}

      <style>{readyFooterCss}</style>
    </>
  );
}

const readyFooterCss = `
.ts-ready-footer {
  --ready-gold: #d8ad1e;
  --ready-gold-soft: #f4d574;
  --ready-green: #18e768;
  --ready-blue: #24a7ff;
  --ready-pink: #f149bd;
  position: relative;
  isolation: isolate;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: auto;
  max-height: none;
  min-height: clamp(340px, 38svh, 540px);
  padding:
    clamp(54px, 6.6svh, 96px)
    clamp(20px, 4vw, 64px)
    max(clamp(150px, 16svh, 240px), calc(env(safe-area-inset-bottom) + 150px));
  overflow: visible;
  border-top: 1px solid rgba(216, 173, 30, 0.34);
  border-bottom: 1px solid rgba(216, 173, 30, 0.24);
  background-color: #050505;
  background-image:
    radial-gradient(circle at 50% 43%, rgba(0, 0, 0, 0.18) 0 18%, rgba(0, 0, 0, 0.7) 56%, rgba(0, 0, 0, 0.9) 100%),
    linear-gradient(90deg, rgba(0, 0, 0, 0.08) 0%, rgba(0, 0, 0, 0.58) 31%, rgba(0, 0, 0, 0.8) 50%, rgba(0, 0, 0, 0.56) 69%, rgba(0, 0, 0, 0.1) 100%),
    linear-gradient(180deg, rgba(5, 5, 4, 0.08), rgba(5, 5, 4, 0.76)),
    url("/assets/tsurusen-price/png/cta-background-clean.png");
  background-position: center, center, center, center bottom;
  background-repeat: no-repeat;
  background-size: cover, cover, cover, cover;
  background-attachment: scroll, scroll, scroll, fixed;
  color: #fff8ea;
  text-align: center;
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: geometricPrecision;
  font-feature-settings: "kern", "liga";
}

.ts-ready-footer::before {
  content: "";
  position: absolute;
  inset: 0;
  z-index: -1;
  background:
    radial-gradient(circle at 50% 55%, rgba(216, 173, 30, 0.18), transparent 20rem),
    linear-gradient(180deg, rgba(255, 219, 119, 0.08), transparent 34%);
  pointer-events: none;
}

.ts-ready-footer__inner {
  display: grid;
  justify-items: center;
  width: min(1120px, 100%);
  padding-inline: clamp(8px, 2vw, 28px);
}

.ts-ready-footer h2 {
  margin: 0;
  font-family: var(--font-bebas), var(--font-oswald), "Oswald", sans-serif;
  font-size: clamp(60px, 8vw, 128px);
  font-weight: 900;
  line-height: 0.88;
  letter-spacing: 0.12em;
  color: transparent;
  background: linear-gradient(180deg, #fff2b8 0%, #f0c85a 48%, #b98319 100%);
  -webkit-background-clip: text;
  background-clip: text;
  text-shadow: 0 0 22px rgba(216, 173, 30, 0.42), 0 10px 22px rgba(0, 0, 0, 0.66);
}

.ts-ready-footer p {
  margin: clamp(8px, 1.2vw, 14px) 0 0;
  color: #fffdf5;
  font-family: var(--font-noto-sans-jp), sans-serif;
  font-size: clamp(16px, 1.5vw, 24px);
  font-weight: 900;
  line-height: 1.45;
  text-shadow: 0 0 15px rgba(0, 0, 0, 0.88);
}

.ts-ready-footer__actions {
  display: grid;
  grid-template-columns: repeat(3, minmax(190px, 1fr));
  gap: clamp(14px, 1.8vw, 24px);
  width: min(940px, calc(100% - clamp(210px, 18vw, 260px)));
  margin-top: clamp(16px, 2vw, 26px);
}

.ts-ready-footer__button {
  --button-accent: var(--ready-gold);
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: clamp(48px, 4.2vw, 64px);
  padding: 10px 18px;
  border: 1px solid color-mix(in srgb, var(--button-accent), white 9%);
  border-radius: 8px;
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.04), rgba(255, 255, 255, 0)),
    rgba(4, 4, 4, 0.7);
  color: #fffdf5;
  box-shadow:
    inset 0 0 24px color-mix(in srgb, var(--button-accent), transparent 78%),
    0 0 18px color-mix(in srgb, var(--button-accent), transparent 82%);
  text-decoration: none;
}

.ts-ready-footer__button--green {
  --button-accent: var(--ready-green);
}

.ts-ready-footer__button--pink {
  --button-accent: var(--ready-pink);
}

.ts-ready-footer__button span {
  font-size: clamp(18px, 1.55vw, 26px);
  font-weight: 950;
  line-height: 1;
  letter-spacing: 0.04em;
}

.ts-ready-footer__button small {
  margin-top: 5px;
  color: var(--button-accent);
  font-family: var(--font-oswald), "Oswald", sans-serif;
  font-size: clamp(10px, 0.82vw, 13px);
  font-weight: 900;
  line-height: 1;
  letter-spacing: 0.16em;
}

.ts-ready-floating {
  --ready-gold: #d8ad1e;
  --ready-green: #18e768;
  --ready-pink: #f149bd;
  position: fixed;
  right: max(24px, calc((100vw - 1500px) / 2 + 24px), env(safe-area-inset-right));
  top: auto;
  bottom: max(24px, env(safe-area-inset-bottom));
  z-index: 90;
  display: grid;
  gap: clamp(8px, 1.4svh, 14px);
  max-height: calc(100svh - 48px);
  box-sizing: border-box;
  transform: none;
}

.ts-ready-floating__button {
  --float-accent: var(--ready-gold);
  display: grid;
  place-items: center;
  gap: clamp(4px, 0.8svh, 7px);
  width: clamp(68px, 6.4vw, 88px);
  min-height: clamp(68px, 9.2svh, 88px);
  padding: clamp(7px, 1svh, 10px) 6px;
  border: 1px solid color-mix(in srgb, var(--float-accent), white 8%);
  border-radius: 18px;
  background: rgba(7, 7, 7, 0.9);
  color: #fffdf5;
  text-decoration: none;
  box-shadow:
    inset 0 0 22px color-mix(in srgb, var(--float-accent), transparent 78%),
    0 0 18px color-mix(in srgb, var(--float-accent), transparent 78%);
}

.ts-ready-floating__button--green {
  --float-accent: var(--ready-green);
}

.ts-ready-floating__button--pink {
  --float-accent: var(--ready-pink);
}

.ts-ready-floating__button svg {
  color: var(--float-accent);
  width: clamp(22px, 3.4svh, 30px);
  height: clamp(22px, 3.4svh, 30px);
}

.ts-ready-floating__button span {
  font-family: var(--font-noto-sans-jp), sans-serif;
  font-size: clamp(10px, 1.45svh, 12px);
  font-weight: 950;
  line-height: 1.15;
  text-align: center;
}

@media (hover: hover) {
  .ts-ready-footer__button,
  .ts-ready-floating__button {
    transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;
  }

  .ts-ready-footer__button:hover,
  .ts-ready-footer__button:focus-visible,
  .ts-ready-floating__button:hover,
  .ts-ready-floating__button:focus-visible {
    transform: translateY(-3px) scale(1.025);
    box-shadow:
      inset 0 0 28px color-mix(in srgb, var(--button-accent, var(--float-accent)), transparent 72%),
      0 0 26px color-mix(in srgb, var(--button-accent, var(--float-accent)), transparent 70%);
  }
}

@media (max-width: 900px) {
  .ts-ready-footer {
    min-height: auto;
    padding-block:
      clamp(44px, 9vw, 68px)
      max(clamp(126px, 30vw, 168px), calc(env(safe-area-inset-bottom) + 126px));
    background-position: center, center, center, center;
    background-size: cover, cover, cover, auto 100%;
    background-attachment: scroll, scroll, scroll, scroll;
  }

  .ts-ready-footer h2 {
    max-width: 100%;
    font-size: clamp(42px, 11.6vw, 78px);
    line-height: 0.94;
    letter-spacing: clamp(0.045em, 1.15vw, 0.09em);
    text-wrap: balance;
  }

  .ts-ready-footer__actions {
    grid-template-columns: 1fr;
    width: min(360px, 100%);
  }

  .ts-ready-floating {
    left: auto;
    right: max(8px, env(safe-area-inset-right));
    top: auto;
    bottom: max(10px, env(safe-area-inset-bottom));
    max-height: calc(100svh - 18px);
    transform: none;
    grid-template-columns: 1fr;
    gap: clamp(6px, 1.2svh, 10px);
    padding: 0;
    background: transparent;
    backdrop-filter: none;
  }

  .ts-ready-floating__button {
    width: clamp(54px, 15vw, 72px);
    min-height: clamp(54px, 13svh, 72px);
    border-radius: clamp(12px, 3vw, 16px);
    grid-template-columns: 1fr;
    gap: 5px;
    padding: 7px 5px;
  }

  .ts-ready-floating__button svg {
    width: 20px;
    height: 20px;
  }

  .ts-ready-floating__button span {
    font-size: clamp(9px, 2.6vw, 11px);
  }
}

@media (max-height: 760px) and (min-width: 901px) {
  .ts-ready-footer {
    min-height: auto;
    padding:
      clamp(30px, 4.7svh, 50px)
      clamp(20px, 4vw, 64px)
      max(clamp(118px, 15svh, 160px), calc(env(safe-area-inset-bottom) + 118px));
  }

  .ts-ready-footer h2 {
    font-size: clamp(58px, 6.8vw, 110px);
    line-height: 0.86;
    letter-spacing: 0.1em;
  }

  .ts-ready-footer p {
    margin-top: 6px;
    font-size: clamp(15px, 1.25vw, 21px);
    line-height: 1.28;
  }

  .ts-ready-footer__actions {
    width: min(900px, calc(100% - clamp(210px, 18vw, 260px)));
    gap: clamp(12px, 1.4vw, 18px);
    margin-top: clamp(10px, 1.8svh, 18px);
  }

  .ts-ready-floating__button {
    width: clamp(62px, 5.7vw, 78px);
    min-height: clamp(62px, 11svh, 78px);
  }

  .ts-ready-footer__button {
    min-height: clamp(44px, 7svh, 58px);
    padding: 8px 14px;
  }

  .ts-ready-footer__button span {
    font-size: clamp(16px, 1.35vw, 23px);
  }

  .ts-ready-footer__button small {
    margin-top: 3px;
  }
}

@media (max-height: 560px) and (min-width: 681px) {
  .ts-ready-footer {
    min-height: min(330px, 84svh);
    padding:
      clamp(22px, 5svh, 36px)
      clamp(20px, 4vw, 64px)
      max(clamp(104px, 20svh, 134px), calc(env(safe-area-inset-bottom) + 104px));
  }

  .ts-ready-footer h2 {
    font-size: clamp(56px, 6vw, 104px);
    line-height: 0.86;
    letter-spacing: 0.1em;
  }

  .ts-ready-footer p {
    margin-top: 6px;
    font-size: clamp(15px, 1.2vw, 20px);
    line-height: 1.28;
  }

  .ts-ready-footer__actions {
    width: min(880px, calc(100% - clamp(210px, 18vw, 260px)));
    gap: clamp(12px, 1.4vw, 18px);
    margin-top: clamp(10px, 2svh, 16px);
  }

  .ts-ready-footer__button {
    min-height: clamp(42px, 10svh, 54px);
    padding: 7px 14px;
  }

  .ts-ready-footer__button span {
    font-size: clamp(16px, 1.3vw, 23px);
  }

  .ts-ready-footer__button small {
    margin-top: 3px;
  }
}

.ts-ready-footer.pixel-home-ready-footer {
  margin-bottom: max(clamp(64px, 9svh, 140px), calc(env(safe-area-inset-bottom) + 64px));
  padding-bottom: max(clamp(190px, 20svh, 300px), calc(env(safe-area-inset-bottom) + 190px));
  scroll-margin-bottom: clamp(110px, 15svh, 190px);
}

@media (max-height: 760px) and (min-width: 901px) {
  .ts-ready-footer.pixel-home-ready-footer {
    margin-bottom: max(clamp(70px, 12svh, 120px), calc(env(safe-area-inset-bottom) + 70px));
    padding-bottom: max(clamp(144px, 25svh, 190px), calc(env(safe-area-inset-bottom) + 144px));
  }
}

@media (max-width: 900px) {
  .ts-ready-footer.pixel-home-ready-footer {
    margin-bottom: max(clamp(80px, 24vw, 150px), calc(env(safe-area-inset-bottom) + 80px));
    padding-bottom: max(clamp(164px, 42vw, 230px), calc(env(safe-area-inset-bottom) + 164px));
  }
}
`;
