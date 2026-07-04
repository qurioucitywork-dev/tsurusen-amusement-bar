import { siteConfig } from "@/data/siteConfig";
import { RevealOnScroll } from "./RevealOnScroll";
import { SectionHeading } from "./SectionHeading";

export function FeatureSection() {
  return (
    <section className="section-pad bg-white">
      <div className="site-container grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">
        <SectionHeading
          eyebrow="Commitment"
          title="場の空気をつくる"
          copy="盛り上がりだけでなく、初来店の入りやすさ、話せる音量、料金のわかりやすさを整えています。"
        />
        <div className="grid gap-6">
          {siteConfig.commitments.map((item, index) => (
            <RevealOnScroll key={item.label}>
              <article className="dokomi-card grid gap-4 bg-graphite p-6 md:grid-cols-[110px_1fr] md:p-8">
                <p className="bubble-logo text-6xl text-coral">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <div>
                  <p className="pill-tag">{item.label}</p>
                  <h2 className="mt-5 text-3xl font-black tracking-[0] text-ink">
                    {item.title}
                  </h2>
                  <p className="mt-4 text-sm font-bold leading-8 text-mist">{item.body}</p>
                </div>
              </article>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
