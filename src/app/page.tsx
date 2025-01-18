import { getHomepage } from "./_actions/getHomepage";
import ProjectCard from "@/components/ui/project-card";
import { TypedObject } from "sanity";
import Hero from "@/components/hero";
import { stackName } from "@/lib/tech";

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
      <Hero {...data.heroSection} title={data.title} />
      {data.featuredProjects.map((project) => (
        <ProjectCard
          key={project._id}
          description={project.summary}
          coverImage={project.coverImage}
          stack={project.stack}
          title={project.title}
          slug={project.slug}
          summary={project.summary}
          projectLinks={project.projectLinks}
        />
      ))}
    </div>
  );
}
