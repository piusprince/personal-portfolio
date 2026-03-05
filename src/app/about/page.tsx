import { Headline, BodyText } from "@/components/ui/typography";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — Pius Prince Oduro",
  description:
    "Senior Software Developer at AmaliTech, Lead Engineer at Tech231. Building high-performance frontends and multi-tenant systems for the West African market.",
};

const experience = [
  {
    company: "AmaliTech",
    role: "Senior Software Developer",
    period: "2022 – Present",
    description:
      "Leading enterprise-grade frontend development and complex system migrations. Key contributor to multi-tenant architecture and cross-team engineering standards.",
    tags: ["React", "Next.js", "TypeScript", "Enterprise Architecture"],
  },
  {
    company: "Tech231",
    role: "Lead Frontend Engineer",
    period: "2021 – Present",
    description:
      "Co-building a product ecosystem of interconnected SaaS tools tailored for the West African market — from hospitality management to e-commerce infrastructure.",
    tags: ["Next.js", "Sanity CMS", "Product Design", "API Integration"],
  },
];

const stack = [
  "TypeScript", "React", "Next.js", "Tailwind CSS",
  "Sanity CMS", "Node.js", "PostgreSQL", "Git",
];

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="mb-20">
        <BodyText muted className="text-sm uppercase tracking-widest font-semibold mb-4">
          About Me
        </BodyText>
        <Headline as="h1" className="text-5xl md:text-6xl tracking-tight mb-8 leading-[1.1]">
          Building things that scale.
        </Headline>
        <div className="space-y-4 max-w-2xl">
          <BodyText className="text-lg leading-relaxed">
            I&apos;m Pius Prince Oduro, a Senior Software Developer based in Takoradi, Ghana. I specialise in
            building high-performance frontends and bridging the gap between sophisticated
            architecture and intuitive product experiences.
          </BodyText>
          <BodyText muted className="text-base leading-relaxed">
            At AmaliTech, I drive enterprise-grade migrations and frontend architecture. At Tech231,
            I lead the engineering of a product suite designed specifically for the West African market.
            My focus is always on code that is fast, maintainable, and meaningful.
          </BodyText>
        </div>
      </div>

      {/* Experience */}
      <section className="mb-24">
        <Headline as="h2" className="text-2xl mb-10 pb-4 border-b border-[var(--color-border)]">
          Experience
        </Headline>
        <div className="flex flex-col gap-8">
          {experience.map((item) => (
            <div key={item.company} className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-4 md:gap-10">
              <div className="flex flex-col gap-1">
                <BodyText className="font-semibold text-sm">{item.period}</BodyText>
                <BodyText muted className="text-sm">{item.company}</BodyText>
              </div>
              <div>
                <Headline as="h3" className="text-lg mb-2">{item.role}</Headline>
                <BodyText muted className="text-sm leading-relaxed mb-4">{item.description}</BodyText>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-mono px-2 py-1 rounded border border-[var(--color-border)] text-[var(--color-muted-foreground)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Tech Stack */}
      <section className="mb-24">
        <Headline as="h2" className="text-2xl mb-10 pb-4 border-b border-[var(--color-border)]">
          Tech Stack
        </Headline>
        <div className="flex flex-wrap gap-3">
          {stack.map((tech) => (
            <span
              key={tech}
              className="text-sm font-mono px-4 py-2 rounded-lg glass-panel text-[var(--color-muted-foreground)] hover:text-[var(--color-foreground)] hover:border-white/20 transition-colors cursor-default"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="glass-panel rounded-2xl p-10 text-center">
        <Headline as="h2" className="text-3xl mb-4">
          Let&apos;s build something great.
        </Headline>
        <BodyText muted className="text-base mb-8 max-w-md mx-auto leading-relaxed">
          I&apos;m currently open to new opportunities and interesting projects.
        </BodyText>
        <a
          href="/contact"
          className="inline-flex items-center gap-2 bg-[var(--color-accent)] text-white font-bold px-8 py-3 rounded-full text-sm hover:bg-[var(--color-accent)]/90 transition-colors shadow-[0_0_20px_rgba(59,130,246,0.3)]"
        >
          Get in touch →
        </a>
      </section>
    </div>
  );
}
