import { Headline, BodyText } from "@/components/ui/typography";
import type { Metadata } from "next";
import { getProfile } from "../_actions/getProfile";
import { getExperience } from "../_actions/getExperience";
import { PortableText } from "@portabletext/react";
import { Experience, Profile } from "@/types/sanity";

export const metadata: Metadata = {
  title: "About — Pius Prince Oduro",
  description:
    "Senior Software Developer at AmaliTech, Lead Engineer at Tech231. Building high-performance frontends and multi-tenant systems for the West African market.",
};

export default async function AboutPage() {
  const profile = await getProfile();
  const experiences = await getExperience();

  if (!profile) {
    return (
      <div className="flex items-center justify-center min-h-[50vh]">
        <BodyText muted>Failed to load profile content. Please check Sanity.</BodyText>
      </div>
    );
  }

  // Combine stacks from all experiences for a unique list
  const combinedStack = Array.from(
    new Set(experiences?.flatMap((exp) => exp.stack || []) || [])
  );

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="mb-20">
        <BodyText muted className="text-sm uppercase tracking-widest font-semibold mb-4">
          About Me
        </BodyText>
        <Headline as="h1" className="text-5xl md:text-6xl tracking-tight mb-8 leading-[1.1]">
          {profile.tagline || "Building things that scale."}
        </Headline>
        <div className="space-y-4 max-w-2xl">
          <div className="text-lg leading-relaxed text-foreground prose prose-invert">
            <PortableText value={profile.bio} />
          </div>
        </div>
      </div>

      {/* Experience */}
      {experiences && experiences.length > 0 && (
        <section className="mb-24">
          <Headline as="h2" className="text-2xl mb-10 pb-4 border-b border-border">
            Experience
          </Headline>
          <div className="flex flex-col gap-12">
            {experiences.map((item) => (
              <div key={item._id} className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-4 md:gap-10">
                <div className="flex flex-col gap-1">
                  <BodyText className="font-semibold text-sm">
                    {new Date(item.startDate).getFullYear()} – {item.isCurrent ? "Present" : item.endDate ? new Date(item.endDate).getFullYear() : ""}
                  </BodyText>
                  <BodyText muted className="text-sm">{item.company}</BodyText>
                </div>
                <div>
                  <Headline as="h3" className="text-lg mb-2">{item.role}</Headline>
                  <div className="text-sm leading-relaxed text-muted-foreground mb-4 prose prose-invert">
                    <PortableText value={item.description} />
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {item.stack?.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-mono px-2 py-1 rounded border border-border text-muted-foreground"
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
      )}

      {/* Tech Stack */}
      {combinedStack.length > 0 && (
        <section className="mb-24">
          <Headline as="h2" className="text-2xl mb-10 pb-4 border-b border-border">
            Tech Stack
          </Headline>
          <div className="flex flex-wrap gap-3">
            {combinedStack.map((tech) => (
              <span
                key={tech}
                className="text-sm font-mono px-4 py-2 rounded-lg glass-panel text-muted-foreground hover:text-foreground hover:border-white/20 transition-colors cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="glass-panel rounded-2xl p-10 text-center">
        <Headline as="h2" className="text-3xl mb-4">
          Let&apos;s build something great.
        </Headline>
        <BodyText muted className="text-base mb-8 max-w-md mx-auto leading-relaxed">
          {profile.openToWork ? "I'm currently open to new opportunities and interesting projects." : "I'm always open to discussing new projects and collaborations."}
        </BodyText>
        <a
          href="/contact"
          className="inline-flex items-center gap-2 bg-accent text-white font-bold px-8 py-3 rounded-full text-sm hover:bg-accent/90 transition-colors shadow-[0_0_20px_rgba(59,130,246,0.3)]"
        >
          Get in touch →
        </a>
      </section>
    </div>
  );
}
