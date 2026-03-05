import { getProjectBySlug, getProjects } from "@/app/_actions/getProjects";
import { ProjectMeta } from "@/components/ui/project-meta";
import { MasonryGrid } from "@/components/ui/masonry-grid";
import { Headline, BodyText } from "@/components/ui/typography";
import { PortableText } from "@portabletext/react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

export async function generateStaticParams() {
  const projects = await getProjects();
  return projects.map((p: any) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const project = await getProjectBySlug(params.slug);
  if (!project) return { title: "Project Not Found" };
  return {
    title: `${project.title} — Pius Prince Oduro`,
    description:
      (((project.summary?.[0] as any)?.children) as any[])?.[0]?.text ||
      "A frontend engineering case study by Pius Prince Oduro.",
  };
}

const portableTextComponents = {
  block: {
    normal: ({ children }: any) => (
      <BodyText muted className="text-base leading-relaxed mb-4">
        {children}
      </BodyText>
    ),
    h3: ({ children }: any) => (
      <Headline as="h3" className="text-xl mt-10 mb-4">
        {children}
      </Headline>
    ),
  },
};

export default async function ProjectDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = await getProjectBySlug(params.slug);
  if (!project) notFound();

  const galleryItems =
    project.gallery?.map((img: any) => ({
      id: img.asset._id,
      url: img.asset.url,
      alt: img.alt || project.title,
    })) || [];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Project Header */}
      <div className="mb-16 max-w-3xl">
        <a
          href="/projects"
          className="text-sm text-[var(--color-muted-foreground)] hover:text-[var(--color-foreground)] transition-colors mb-8 inline-flex items-center gap-2"
        >
          ← All Projects
        </a>
        <Headline
          as="h1"
          className="text-5xl md:text-6xl tracking-tight mt-6 mb-6 leading-[1.1]"
        >
          {project.title}
        </Headline>
        {project.summary && (
          <BodyText muted className="text-xl leading-relaxed">
            {(((project.summary?.[0] as any)?.children) as any[])?.[0]?.text}
          </BodyText>
        )}
      </div>

      {/* Cover image */}
      {project.coverImage && (
        <div className="w-full h-[480px] rounded-2xl overflow-hidden mb-20 glass-panel">
          <img
            src={project.coverImage}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      {/* Two-column body */}
      <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-16">
        {/* Sticky sidebar */}
        <ProjectMeta
          role={project.role}
          client={project.client}
          duration={project.duration}
          stack={project.stack?.map((s: any) => s.tech)}
          liveUrl={project.projectLinks?.live}
          githubUrl={project.projectLinks?.github}
        />

        {/* Main content */}
        <article className="min-w-0">
          {project.challenge && (
            <section className="mb-12">
              <Headline as="h2" className="text-2xl mb-6 pb-4 border-b border-[var(--color-border)]">
                The Challenge
              </Headline>
              <PortableText value={project.challenge} components={portableTextComponents} />
            </section>
          )}

          {project.solution && (
            <section className="mb-12">
              <Headline as="h2" className="text-2xl mb-6 pb-4 border-b border-[var(--color-border)]">
                The Solution
              </Headline>
              <PortableText value={project.solution} components={portableTextComponents} />
            </section>
          )}

          {project.impact && (
            <section className="mb-12">
              <Headline as="h2" className="text-2xl mb-6 pb-4 border-b border-[var(--color-border)]">
                Impact
              </Headline>
              <PortableText value={project.impact} components={portableTextComponents} />
            </section>
          )}

          {/* Gallery */}
          {galleryItems.length > 0 && (
            <section className="mt-16">
              <Headline as="h2" className="text-2xl mb-8">
                Gallery
              </Headline>
              <MasonryGrid items={galleryItems} />
            </section>
          )}
        </article>
      </div>
    </div>
  );
}
