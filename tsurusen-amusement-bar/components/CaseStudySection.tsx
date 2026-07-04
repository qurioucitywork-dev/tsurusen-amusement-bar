import { siteConfig } from "@/data/siteConfig";
import { RevealOnScroll } from "./RevealOnScroll";
import { SectionHeading } from "./SectionHeading";

const colors = ["bg-cyan", "bg-amber", "bg-coral text-white"];

export function CaseStudySection() {
  return (
    <section className="section-pad bg-white">
      <div className="site-container">
        <SectionHeading
          eyebrow="Scenes"
          title="来店理由から選ぶ"
          copy="DoKomiのプログラムカードのように、二次会・デート・貸切など目的別に使い方を見せます。"
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {siteConfig.voices.map((voice, index) => (
            <RevealOnScroll key={voice.title}>
              <article className={`dokomi-card min-h-full p-7 ${colors[index % colors.length]}`}>
                <p className="pill-tag">{voice.scene}</p>
                <h2 className="mt-8 text-3xl font-black leading-tight tracking-[0]">
                  {voice.title}
                </h2>
                <p className="mt-5 text-sm font-bold leading-8">{voice.text}</p>
              </article>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
