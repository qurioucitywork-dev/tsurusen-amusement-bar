type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  copy?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  copy,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="lux-title mt-3 text-[clamp(1.9rem,4.6vw,4.2rem)] text-ink">
        {title}
      </h2>
      {copy ? <p className="body-copy mt-5 max-w-2xl">{copy}</p> : null}
    </div>
  );
}
