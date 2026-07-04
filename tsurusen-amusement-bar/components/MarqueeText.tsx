export function MarqueeText({ text }: { text: string }) {
  const line = `${text} / DARTS / KARAOKE / BAR / TOKYO NIGHT / `;
  return (
    <div className="marquee border-y hairline py-5 text-ink/40">
      <div className="marquee-track font-display text-[clamp(2.4rem,8vw,7rem)] font-extrabold uppercase leading-none tracking-[0]">
        <span>{line.repeat(2)}</span>
        <span aria-hidden="true">{line.repeat(2)}</span>
      </div>
    </div>
  );
}
