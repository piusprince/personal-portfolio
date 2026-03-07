import { getProjects } from "../_actions/getProjects";
import { Headline, BodyText } from "@/components/ui/typography";
import type { Metadata } from "next";
import { Project } from "@/types/sanity";
import { ArrowRight01Icon } from "hugeicons-react";
import { getTechMetaByLabel } from "@/lib/tech";
import Image from "next/image";
import Link from "next/link";

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
      <div className="mb-12 sm:mb-16">
        <BodyText
          muted
          className="text-sm uppercase tracking-widest font-semibold mb-4"
        >
          Selected Work
        </BodyText>
        <Headline
          as="h1"
          className="text-4xl sm:text-5xl md:text-6xl tracking-tight mb-6"
        >
          Projects
        </Headline>
        <BodyText muted className="text-lg max-w-xl leading-relaxed">
          Enterprise-grade engineering, multi-tenant systems, and product
          ecosystems built for real-world scale.
        </BodyText>
      </div>

      {/* Projects Grid */}
      {projects && projects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {projects.map((project: Project, index: number) => {
            const fallbackSize =
              project.isFeatured || index === 0 ? "large" : "small";
            const layoutSize = project.layoutSize || fallbackSize;
            let sizeClass = "h-[320px] sm:h-[380px]";
            if (layoutSize === "large") {
              sizeClass = "md:col-span-2 h-[360px] sm:h-[430px] md:h-[480px]";
            }
            if (layoutSize === "medium") {
              sizeClass = "h-[340px] sm:h-[430px]";
            }

            return (
              <Link
                key={project._id}
                href={`/projects/${project.slug}`}
                className={`group relative overflow-hidden rounded-2xl glass-panel block transition-all duration-500 hover:scale-[1.01] hover:border-white/20 ${sizeClass}`}
              >
                {project.coverImage && (
                  <div className="absolute inset-0 z-0">
                    <Image
                      src={project.coverImage}
                      alt={project.title}
                      fill
                      sizes="(min-width: 1024px) 66vw, (min-width: 768px) 48vw, 96vw"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-50"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-[#09090b] via-[#09090b]/70 to-transparent" />
                  </div>
                )}

                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8 z-10">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.stack?.slice(0, 4).map((item) => {
                      const techMeta = getTechMetaByLabel(item.tech);
                      const Icon = techMeta?.icon;

                      return (
                        <span
                          key={item.tech}
                          className="inline-flex items-center gap-1.5 text-xs font-mono px-2 py-1 rounded border border-white/10 bg-black/40 text-muted-foreground backdrop-blur-sm"
                        >
                          {Icon && <Icon className="w-3.5 h-3.5" />}
                          {item.tech}
                        </span>
                      );
                    })}
                  </div>
                  <Headline
                    as="h2"
                    className={`mb-2 tracking-tight ${layoutSize === "large" ? "text-2xl sm:text-3xl" : "text-xl sm:text-2xl"}`}
                  >
                    {project.title}
                  </Headline>
                  <BodyText muted className="text-sm line-clamp-2 max-w-lg">
                    {project.summary?.[0]?.children?.[0]?.text ||
                      "A frontend engineering case study."}
                  </BodyText>

                  {/* Arrow indicator */}
                  <div className="mt-4 flex items-center gap-2 text-accent text-sm font-medium opacity-100 sm:opacity-0 sm:-translate-x-2 sm:group-hover:opacity-100 sm:group-hover:translate-x-0 transition-all duration-300">
                    View case study <ArrowRight01Icon className="w-4 h-4" />
                  </div>
                </div>
              </Link>
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
