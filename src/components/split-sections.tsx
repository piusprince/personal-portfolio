"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import { PortableText } from "next-sanity";
import { urlFor } from "@/lib/sanity";
import Image from "next/image";
import { TypedObject } from "sanity";
import { stackName } from "@/lib/tech";
import { renderIcon } from "./ui/icon-renderer";
import { motion } from "motion/react";

type SplitContentProps = {
  _id?: string;
  coverImage: string;
  title: string;
  summary: TypedObject[];
  imageOnRight?: boolean;
  className?: string;
  stack?: {
    tech: keyof typeof stackName;
    icon: string;
  }[];
  projectLinks?: {
    live: string;
    github: string;
  };
};

function ContentSection({
  title,
  summary,
  stack,
  projectLinks,
}: Omit<SplitContentProps, "coverImage" | "imageOnRight" | "className">) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="flex p-8 items-start flex-col justify-between bg-dashed"
    >
      <span>
        {title && (
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-sm font-geist font-medium tracking-wider uppercase mb-6"
          >
            {title}
          </motion.h2>
        )}
        {stack && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap gap-1 mb-4"
          >
            {stack.map((tech) => (
              <div key={tech.tech} className="flex items-center px-2 py-1">
                {renderIcon(tech.tech)}
                <span className="ml-1 text-xs">{tech.tech}</span>
              </div>
            ))}
          </motion.div>
        )}
        {summary && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <PortableText value={summary} />
          </motion.div>
        )}
      </span>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="flex gap-4 mt-6"
      >
        {projectLinks?.live && (
          <Button
            variant="outline"
            className="group border-primary-foreground/20 hover:bg-primary-foreground/5"
            asChild
          >
            <a href={projectLinks.live}>
              View Live
              <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </Button>
        )}
        {projectLinks?.github && (
          <Button
            variant="outline"
            className="group border-primary-foreground/20 hover:bg-primary-foreground/5"
            asChild
          >
            <a href={projectLinks.github}>
              GitHub
              <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </Button>
        )}
      </motion.div>
    </motion.div>
  );
}

function ImageSection({ coverImage }: Pick<SplitContentProps, "coverImage">) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="relative h-full min-h-[300px] md:min-h-[500px] bg-muted col-span-2"
    >
      <Image
        src={urlFor(coverImage).url() ?? ""}
        alt="Cover Image"
        fill
        className="object-cover w-full h-full"
      />
    </motion.div>
  );
}

export function SplitContent({
  coverImage,
  title,
  summary,
  imageOnRight = false,
  className,
  stack,
  projectLinks,
}: SplitContentProps) {
  return (
    <section
      className={cn(
        "grid grid-cols-1 md:grid-cols-3 mb-5 bg-white border",
        className
      )}
    >
      {imageOnRight ? (
        <>
          <ContentSection
            title={title}
            summary={summary}
            stack={stack}
            projectLinks={projectLinks}
          />
          <ImageSection coverImage={coverImage} />
        </>
      ) : (
        <>
          <ImageSection coverImage={coverImage} />
          <ContentSection
            title={title}
            summary={summary}
            stack={stack}
            projectLinks={projectLinks}
          />
        </>
      )}
    </section>
  );
}
