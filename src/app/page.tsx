import { getHomepage } from "./_actions/getHomepage";
import { Headline, BodyText } from "@/components/ui/typography";
import Hero from "@/components/hero";
import { ArrowRight01Icon } from "hugeicons-react";
import { getTechMetaByLabel } from "@/lib/tech";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const data = await getHomepage();
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

  if (!data) {
    return (
      <div className="flex items-center justify-center min-h-[50vh]">
        <BodyText muted>
          Failed to load homepage content. Please check Sanity.
        </BodyText>
      </div>
    );
  }

  const featuredProjects = (data.home?.featuredProjects || []).slice(0, 6);
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Pius Prince Oduro",
    url: siteUrl,
    jobTitle: "Senior Software Developer",
    email: data.contact?.email ? `mailto:${data.contact.email}` : undefined,
    sameAs: data.contact?.socialLinks?.map((social) => social.url) || [],
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Pius Prince Oduro",
    url: siteUrl,
  };

  return (
    <div className="relative flex flex-col items-center justify-center w-full h-full space-y-8 text-center ">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />
      <Hero
        heading={data.home?.heroSection?.heading || "Pius Prince Oduro"}
        subheading={
          data.home?.heroSection?.subheading || "Senior Software Developer"
        }
        contact={data.contact}
      />

      {featuredProjects.length > 0 && (
        <div className="w-full max-w-7xl mx-auto px-4 mt-12 sm:mt-20 mb-24 sm:mb-32">
          <Headline as="h2" className="text-3xl md:text-4xl mb-10 text-center">
            Selected Work
          </Headline>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 auto-rows-[320px] sm:auto-rows-[380px] lg:auto-rows-[400px]">
            {featuredProjects.map((project, index) => {
              // Bento size logic: Use layoutSize from Sanity
              let spanClass = "col-span-1";
              if (project.layoutSize === "large") spanClass = "lg:col-span-2";
              if (project.layoutSize === "medium") spanClass = "lg:col-span-1";

              return (
                <Link
                  key={project._id}
                  href={`/projects/${project.slug}`}
                  className={`group relative overflow-hidden rounded-2xl glass-panel block ${spanClass} transition-transform duration-500 hover:scale-[1.01]`}
                >
                  {project.coverImage && (
                    <div className="absolute inset-0 z-0 text-left">
                      <Image
                        src={project.coverImage}
                        alt={project.title}
                        fill
                        loading={index === 0 ? "eager" : "lazy"}
                        sizes="(min-width: 1024px) 66vw, (min-width: 768px) 48vw, 96vw"
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-60 mix-blend-overlay"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-card via-card/90 via-55% to-transparent" />
                    </div>
                  )}

                    <div className="absolute inset-x-0 bottom-0 p-4 sm:p-6 md:p-8 z-10 flex flex-col gap-2.5 text-left">
                      <div className="flex flex-wrap gap-2 mb-1">
                        {project.stack?.slice(0, 3).map((item, stackIndex) => {
                        const techMeta = getTechMetaByLabel(item.tech);
                        const Icon = techMeta?.icon;

                        return (
                          <span
                            key={item.tech}
                              className={`inline-flex items-center gap-1.5 text-xs font-mono px-2 py-1 rounded border border-border bg-black/55 text-muted-foreground backdrop-blur-md ${
                                stackIndex === 2 ? "hidden sm:inline-flex" : ""
                              }`}
                          >
                            {Icon && <Icon className="w-3.5 h-3.5" />}
                            {item.tech}
                          </span>
                        );
                      })}
                    </div>
                      <Headline as="h3" className="text-2xl sm:text-2xl leading-tight max-w-[20ch]">
                      {project.title}
                    </Headline>
                      <BodyText className="text-sm text-muted-foreground/95 line-clamp-2 max-w-[46ch]">
                      {project.summary?.[0]?.children?.[0]?.text ||
                        "A frontend engineering case study."}
                    </BodyText>
                    <div className="mt-4 flex items-center gap-2 text-accent text-sm font-medium opacity-100 sm:opacity-0 sm:-translate-x-2 sm:group-hover:opacity-100 sm:group-hover:translate-x-0 transition-all duration-300">
                      View project <ArrowRight01Icon className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
