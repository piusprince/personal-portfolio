import { Headline, BodyText } from "@/components/ui/typography";
import { Mail01Icon, Briefcase01Icon, CodeCircleIcon } from "hugeicons-react";
import type { Metadata } from "next";
import { getProfile } from "../_actions/getProfile";
import { getExperience } from "../_actions/getExperience";
import { PortableText } from "@portabletext/react";
import { getTechMetaByLabel } from "@/lib/tech";

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
        <BodyText muted>
          Failed to load profile content. Please check Sanity.
        </BodyText>
      </div>
    );
  }

  // Combine stacks from all experiences for a unique list
  const combinedStack = Array.from(
    new Set(experiences?.flatMap((exp) => exp.stack || []) || []),
  );

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="mb-20">
        <BodyText
          muted
          className="text-sm uppercase tracking-widest font-semibold mb-4"
        >
          About Me
        </BodyText>
        <Headline
          as="h1"
          className="text-5xl md:text-6xl tracking-tight mb-8 leading-[1.1]"
        >
          {profile.tagline || "Building things that scale."}
        </Headline>
        <div className="space-y-4 max-w-3xl">
          <div className="text-lg leading-relaxed text-foreground prose prose-invert">
            <PortableText value={profile.bio} />
          </div>
        </div>
      </div>

      {/* Experience */}
      {experiences && experiences.length > 0 && (
        <section className="mb-24">
          <Headline
            as="h2"
            className="text-2xl mb-10 pb-4 border-b border-border flex items-center gap-3"
          >
            <Briefcase01Icon className="w-6 h-6 text-accent" />
            Experience
          </Headline>
          <div className="flex flex-col gap-12">
            {experiences.map((item) => (
              <div
                key={item._id}
                className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-4 md:gap-10"
              >
                {(() => {
                  const startYear = new Date(item.startDate).getFullYear();
                  let endYear = "";
                  if (item.isCurrent) endYear = "Present";
                  if (!item.isCurrent && item.endDate) {
                    endYear = String(new Date(item.endDate).getFullYear());
                  }

                  return (
                    <div className="flex flex-col gap-1">
                      <BodyText className="font-semibold text-sm">
                        {startYear} – {endYear}
                      </BodyText>
                      <BodyText muted className="text-sm">
                        {item.company}
                      </BodyText>
                    </div>
                  );
                })()}
                <div>
                  <Headline as="h3" className="text-lg mb-2">
                    {item.role}
                  </Headline>
                  <div className="text-sm leading-relaxed text-muted-foreground mb-4 prose prose-invert">
                    <PortableText value={item.description} />
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {item.stack?.map((tag) => {
                      const techMeta = getTechMetaByLabel(tag);
                      const Icon = techMeta?.icon;

                      return (
                        <span
                          key={tag}
                          className="inline-flex items-center gap-1.5 text-xs font-mono px-2 py-1 rounded border border-border text-muted-foreground"
                        >
                          {Icon && <Icon className="w-3.5 h-3.5" />}
                          {tag}
                        </span>
                      );
                    })}
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
          <Headline
            as="h2"
            className="text-2xl mb-10 pb-4 border-b border-border flex items-center gap-3"
          >
            <CodeCircleIcon className="w-6 h-6 text-accent" />
            Tech Stack
          </Headline>
          <div className="flex flex-wrap gap-3">
            {combinedStack.map((tech) => {
              const techMeta = getTechMetaByLabel(tech);
              const Icon = techMeta?.icon;

              return (
                <span
                  key={tech}
                  className="inline-flex items-center gap-2 text-sm font-mono px-4 py-2 rounded-lg glass-panel text-muted-foreground hover:text-foreground hover:border-white/20 transition-colors cursor-default"
                >
                  {Icon && <Icon className="w-4 h-4" />}
                  {tech}
                </span>
              );
            })}
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="glass-panel rounded-2xl p-10 text-center">
        <Headline as="h2" className="text-3xl mb-4">
          Let&apos;s build something great.
        </Headline>
        <BodyText
          muted
          className="text-base mb-8 max-w-md mx-auto leading-relaxed"
        >
          {profile.openToWork
            ? "I'm currently open to new opportunities and interesting projects."
            : "I'm always open to discussing new projects and collaborations."}
        </BodyText>
        <a
          href={`mailto:${profile.email}`}
          className="group inline-flex items-center gap-2 bg-accent text-white font-bold px-8 py-3 rounded-full text-sm hover:bg-accent/90 transition-all hover:pr-10 active:scale-95 shadow-[0_0_20px_rgba(59,130,246,0.3)]"
        >
          Get in touch
          <Mail01Icon className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </a>
      </section>
    </div>
  );
}
