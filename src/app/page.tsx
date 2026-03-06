import { getHomepage } from "./_actions/getHomepage";
import { Headline, BodyText } from "@/components/ui/typography";
import Hero from "@/components/hero";
import { Project } from "@/types/sanity";

export default async function Home() {
  const data = await getHomepage();

  if (!data) {
    return (
      <div className="flex items-center justify-center min-h-[50vh]">
        <BodyText muted>Failed to load homepage content. Please check Sanity.</BodyText>
      </div>
    );
  }

  const featuredProjects = data.home?.featuredProjects || [];

  return (
    <div className="relative flex flex-col items-center justify-center w-full h-full space-y-8 text-center ">
      <Hero 
        heading={data.home?.heroSection?.heading || "Pius Prince Oduro"} 
        subheading={data.home?.heroSection?.subheading || "Senior Software Developer"} 
        contact={data.contact} 
      />

      {featuredProjects.length > 0 && (
        <div className="w-full max-w-7xl mx-auto px-4 mt-20 mb-32">
          <Headline as="h2" className="text-3xl md:text-4xl mb-10 text-center">
            Selected Work
          </Headline>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[400px]">
            {featuredProjects.map((project) => {
              // Bento size logic: Use layoutSize from Sanity
              let spanClass = "col-span-1";
              if (project.layoutSize === 'large') spanClass = "md:col-span-2 lg:col-span-2";
              if (project.layoutSize === 'medium') spanClass = "md:col-span-2 lg:col-span-1";

              return (
                <a 
                  key={project._id} 
                  href={`/projects/${project.slug}`} 
                  className={`group relative overflow-hidden rounded-2xl glass-panel block ${spanClass} transition-transform duration-500 hover:scale-[1.01]`}
                >
                  {project.coverImage && (
                    <div className="absolute inset-0 z-0 text-left">
                      <img
                        src={project.coverImage}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-60 mix-blend-overlay"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-card via-card/80 to-transparent" />
                    </div>
                  )}
                  
                  <div className="absolute bottom-0 left-0 right-0 p-8 z-10 flex flex-col gap-2 text-left">
                    <div className="flex gap-2 mb-2">
                      {project.stack?.slice(0, 3).map((item) => (
                        <span key={item.tech} className="text-xs font-mono px-2 py-1 rounded border border-border bg-black/50 text-muted-foreground backdrop-blur-md">
                          {item.tech}
                        </span>
                      ))}
                    </div>
                    <Headline as="h3" className="text-2xl">{project.title}</Headline>
                    <BodyText className="text-sm text-muted-foreground line-clamp-2">
                      {project.summary?.[0]?.children?.[0]?.text || "A frontend engineering case study."}
                    </BodyText>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
