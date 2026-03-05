import { getProjects } from "../_actions/getProjects";
import { Headline, BodyText } from "@/components/ui/typography";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects — Pius Prince Oduro",
  description:
    "A curated collection of frontend engineering work — from enterprise migrations at AmaliTech to product ecosystems at Tech231.",
};

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="mb-16">
        <BodyText muted className="text-sm uppercase tracking-widest font-semibold mb-4">
          Selected Work
        </BodyText>
        <Headline as="h1" className="text-5xl md:text-6xl tracking-tight mb-6">
          Projects
        </Headline>
        <BodyText muted className="text-lg max-w-xl leading-relaxed">
          Enterprise-grade engineering, multi-tenant systems, and product ecosystems built for real-world scale.
        </BodyText>
      </div>

      {/* Projects Grid */}
      {projects?.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project: any, index: number) => {
            const isFeatured = project.isFeatured || index === 0;
            return (
              <a
                key={project._id}
                href={`/projects/${project.slug}`}
                className={`group relative overflow-hidden rounded-2xl glass-panel block h-[380px] transition-all duration-500 hover:scale-[1.01] hover:border-white/20 ${isFeatured ? "md:col-span-2 h-[480px]" : ""}`}
              >
                {project.coverImage && (
                  <div className="absolute inset-0 z-0">
                    <img
                      src={project.coverImage}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-50"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-[#09090b]/70 to-transparent" />
                  </div>
                )}

                <div className="absolute bottom-0 left-0 right-0 p-8 z-10">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.stack?.slice(0, 4).map((item: any) => (
                      <span
                        key={item.tech}
                        className="text-xs font-mono px-2 py-1 rounded border border-white/10 bg-black/40 text-[var(--color-muted-foreground)] backdrop-blur-sm"
                      >
                        {item.tech}
                      </span>
                    ))}
                  </div>
                  <Headline as="h2" className={`mb-2 tracking-tight ${isFeatured ? "text-3xl" : "text-2xl"}`}>
                    {project.title}
                  </Headline>
                  <BodyText muted className="text-sm line-clamp-2 max-w-lg">
                    {(((project.summary?.[0] as any)?.children) as any[])?.[0]?.text ||
                      "A frontend engineering case study."}
                  </BodyText>

                  {/* Arrow indicator */}
                  <div className="mt-4 flex items-center gap-2 text-[var(--color-accent)] text-sm font-medium opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                    View case study →
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-32 text-center">
          <BodyText muted className="text-lg">
            No projects yet. Add some in your Sanity Studio.
          </BodyText>
        </div>
      )}
    </div>
  );
}
