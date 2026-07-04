import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";
import { RevealOnScroll } from "./RevealOnScroll";
import { SectionHeading } from "./SectionHeading";

const colors = ["bg-cyan", "bg-coral text-white", "bg-amber"];

export function PricingSection() {
  return (
    <section className="section-pad bg-amber">
      <div className="site-container">
        <SectionHeading
          eyebrow="Course"
          title="夜の長さで選ぶ"
          copy="短く遊ぶ、しっかり盛り上がる、貸切で使う。料金目安を大きく見せ、予約前の比較をしやすくしています。"
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {siteConfig.courses.map((course, index) => (
            <RevealOnScroll key={course.name}>
              <article className={`dokomi-card flex min-h-full flex-col p-7 ${colors[index % colors.length]}`}>
                <p className="bubble-logo text-5xl leading-none">{String(index + 1).padStart(2, "0")}</p>
                <h2 className="mt-8 text-3xl font-black tracking-[0]">{course.name}</h2>
                <p className="mt-6 font-display text-6xl font-black tracking-[0]">
                  {course.price}
                </p>
                <p className="mt-2 text-sm font-black">{course.unit}</p>
                <p className="mt-6 text-sm font-bold leading-8">{course.summary}</p>
                <ul className="mt-6 grid gap-3 text-sm font-bold">
                  {course.includes.map((item) => (
                    <li key={item} className="border-t-2 border-ink pt-3">
                      {item}
                    </li>
                  ))}
                </ul>
                <Link href="/reservation" className="button-secondary mt-8 w-full bg-white">
                  このコースを相談
                </Link>
              </article>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
