import Link from "next/link";
import { FAQAccordion } from "./FAQAccordion";
import { SectionHeading } from "./SectionHeading";

export function FAQSection({ compact = false }: { compact?: boolean }) {
  return (
    <section className="section-pad bg-obsidian">
      <div className="site-container grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
        <div>
          <SectionHeading
            eyebrow="FAQ"
            title="来店前の不安をチェック。"
            copy="予約、貸切、料金、支払い、初来店の不安をまとめました。"
          />
          {compact ? (
            <Link href="/faq" className="button-secondary mt-7">
              FAQをすべて見る
            </Link>
          ) : null}
        </div>
        <FAQAccordion compact={compact} />
      </div>
    </section>
  );
}
