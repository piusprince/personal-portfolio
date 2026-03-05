import { getHomepage } from "./_actions/getHomepage";
import { TypedObject } from "sanity";
import Hero from "@/components/hero";
import { stackName } from "@/lib/tech";
import { Headline, BodyText } from "@/components/ui/typography";

export type ProjectProps = {
  _id: string;
  title: string;
  slug: string;
  coverImage: string;
  summary: TypedObject[];
  stack: {
    tech: keyof typeof stackName;
    icon: string;
  }[];
  projectLinks: {
    live: string;
    github: string;
  };
  description: TypedObject[];
  isFeatured: boolean;
  imageOnRight?: boolean;
};

export type HeroProps = {
  heading: string;
  subheading: string;
  contact: {
    email: string;
    socialLinks: string[];
  };
};

export type HomepageProps = {
  title: string;
  heroSection: HeroProps;
  featuredProjects: ProjectProps[];
};

export default async function Home() {
  const data: HomepageProps = await getHomepage();

  console.log({ data });

  return (
    <div className="relative flex flex-col items-center justify-center w-full h-full space-y-8 text-center ">
      <Hero {...data.heroSection} />

      {/* <h2 className="text-2xl font-bold font-bricolage mt-12 mb-8">
        Featured Projects
      </h2> */}
      <div className="w-full max-w-7xl mx-auto px-4 mt-20 mb-32">
        <Headline as="h2" className="text-3xl md:text-4xl mb-10 text-center">
          Selected Work
        </Headline>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[400px]">
          {data.featuredProjects.map((project, index) => {
            // Bento size logic: Make the first item span wider
            const isFeatured = index === 0;
            const spanClass = isFeatured ? "md:col-span-2 lg:col-span-2" : "col-span-1";

            return (
              <a 
                key={project._id} 
                href={`/projects/${project.slug}`} 
                className={`group relative overflow-hidden rounded-2xl glass-panel block ${spanClass} transition-transform duration-500 hover:scale-[1.01]`}
              >
                {project.coverImage && (
                  <div className="absolute inset-0 z-0">
                    <img
                      src={project.coverImage}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-60 mix-blend-overlay"
                    />
                    {/* Gradient overlay to ensure text remains readable */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-card)] via-[var(--color-card)]/80 to-transparent" />
                  </div>
                )}
                
                <div className="absolute bottom-0 left-0 right-0 p-8 z-10 flex flex-col gap-2">
                  <div className="flex gap-2 mb-2">
                    {project.stack?.slice(0, 3).map((item) => (
                      <span key={item.tech} className="text-xs font-mono px-2 py-1 rounded border border-[var(--color-border)] bg-black/50 text-[var(--color-muted-foreground)] backdrop-blur-md">
                        {item.tech}
                      </span>
                    ))}
                  </div>
                  <Headline as="h3" className="text-2xl">{project.title}</Headline>
                  <BodyText className="text-sm text-[var(--color-muted-foreground)] line-clamp-2">
                    {/* Accessing the portable text block to grab a raw summary string */}
                    {(((project.summary?.[0] as any)?.children) as any[])?.[0]?.text || "A frontend engineering case study."}
                  </BodyText>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
