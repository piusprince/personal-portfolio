import { getProjectBySlug, getProjects } from "@/app/_actions/getProjects";
import { ProjectMeta } from "@/components/ui/project-meta";
import { MasonryGrid } from "@/components/ui/masonry-grid";
import { Headline, BodyText } from "@/components/ui/typography";
import { PortableText } from "@portabletext/react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft01Icon } from "hugeicons-react";

export async function generateStaticParams() {
  const projects = await getProjects();
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);
  if (!project) return { title: "Project Not Found" };
  return {
    title: `${project.title} — Pius Prince Oduro`,
    description:
      project.summary?.[0]?.children?.[0]?.text ||
      "A frontend engineering case study by Pius Prince Oduro.",
  };
}

const portableTextComponents = {
  block: {
    normal: ({ children }: { children?: React.ReactNode }) => (
      <BodyText muted className="text-base leading-relaxed mb-4">
        {children}
      </BodyText>
    ),
    h3: ({ children }: { children?: React.ReactNode }) => (
      <Headline as="h3" className="text-xl mt-10 mb-4">
        {children}
      </Headline>
    ),
  },
  list: {
    bullet: ({ children }: { children?: React.ReactNode }) => (
      <ul className="mb-4 list-disc pl-5 text-muted-foreground space-y-2">
        {children}
      </ul>
    ),
    number: ({ children }: { children?: React.ReactNode }) => (
      <ol className="mb-4 list-decimal pl-5 text-muted-foreground space-y-2">
        {children}
      </ol>
    ),
  },
  listItem: {
    bullet: ({ children }: { children?: React.ReactNode }) => (
      <li className="text-base leading-relaxed">{children}</li>
    ),
    number: ({ children }: { children?: React.ReactNode }) => (
      <li className="text-base leading-relaxed">{children}</li>
    ),
  },
};

export default async function ProjectDetailPage({
  params,
}: Readonly<{
  params: Promise<{ slug: string }>;
}>) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);
  if (!project) notFound();
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

  const galleryItems =
    project.gallery?.map((img, index) => ({
      id: index.toString(),
      url: img.url,
      alt: img.alt || project.title,
    })) || [];

  const projectJsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description:
      project.summary?.[0]?.children?.[0]?.text ||
      "Frontend engineering project case study.",
    image: project.coverImage,
    url: `${siteUrl}/projects/${project.slug}`,
    author: {
      "@type": "Person",
      name: "Pius Prince Oduro",
    },
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectJsonLd) }}
      />
      {/* Project Header */}
      <div className="mb-16 max-w-3xl">
        <Link
          href="/projects"
          className="text-sm text-muted-foreground hover:text-foreground transition-colors mb-8 inline-flex items-center gap-2"
        >
          <ArrowLeft01Icon className="h-4 w-4" />
          All Projects
        </Link>
        <Headline
          as="h1"
          className="text-5xl md:text-6xl tracking-tight mt-6 mb-6 leading-[1.1]"
        >
          {project.title}
        </Headline>
        {project.summary && (
          <BodyText muted className="text-xl leading-relaxed">
            {project.summary?.[0]?.children?.[0]?.text}
          </BodyText>
        )}
      </div>

      {/* Cover image */}
      {project.coverImage && (
        <div className="w-full h-120 rounded-2xl overflow-hidden mb-20 glass-panel">
          <Image
            src={project.coverImage}
            alt={project.title}
            width={1600}
            height={900}
            sizes="(min-width: 1280px) 1200px, (min-width: 768px) 92vw, 96vw"
            className="w-full h-full object-cover"
            priority
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
          stack={project.stack?.map((s) => s.tech)}
          liveUrl={project.projectLinks?.live}
          githubUrl={project.projectLinks?.github}
        />

        {/* Main content */}
        <article className="min-w-0">
          {project.challenge && (
            <section className="mb-12">
              <Headline
                as="h2"
                className="text-2xl mb-6 pb-4 border-b border-border"
              >
                The Challenge
              </Headline>
              <PortableText
                value={project.challenge}
                components={portableTextComponents}
              />
            </section>
          )}

          {project.solution && (
            <section className="mb-12">
              <Headline
                as="h2"
                className="text-2xl mb-6 pb-4 border-b border-border"
              >
                The Solution
              </Headline>
              <PortableText
                value={project.solution}
                components={portableTextComponents}
              />
            </section>
          )}

          {project.impact && (
            <section className="mb-12">
              <Headline
                as="h2"
                className="text-2xl mb-6 pb-4 border-b border-border"
              >
                Impact
              </Headline>
              <PortableText
                value={project.impact}
                components={portableTextComponents}
              />
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
