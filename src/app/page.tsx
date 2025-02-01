import { getHomepage } from "./_actions/getHomepage";
import { TypedObject } from "sanity";
import Hero from "@/components/hero";
import { stackName } from "@/lib/tech";
import { SplitContent } from "@/components/split-sections";
import Heading from "@/components/ui/heading";

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
      <Hero {...data.heroSection} title={data.title} />

      {/* <h2 className="text-2xl font-bold font-bricolage mt-12 mb-8">
        Featured Projects
      </h2> */}
      <Heading level="h2" className="mt-12 mb-8">
        Featured Projects
      </Heading>

      {data.featuredProjects.map((project) => (
        <SplitContent
          key={project._id}
          _id={project._id}
          title={project.title}
          summary={project.summary}
          coverImage={project.coverImage}
          imageOnRight={project.imageOnRight}
          stack={project.stack}
          projectLinks={project.projectLinks}
          className="min-w-full"
        />
      ))}
    </div>
  );
}
