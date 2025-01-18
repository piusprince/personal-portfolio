import { ProjectProps } from "@/app/page";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { PortableText } from "next-sanity";
import Link from "next/link";
import { renderIcon } from "./icon-renderer";
import Image from "next/image";
import { urlFor } from "@/lib/sanity";

export default function ProjectCard({
  _id,
  stack,
  summary,
  // description,
  projectLinks,
  coverImage,
  // isFeatured,
  // slug,
  title,
}: Partial<ProjectProps>) {
  return (
    <Card
      id={_id}
      className="lg:w-[1080px] p-6 border border-gray-200 space-y-6"
    >
      {coverImage && (
        <div className="relative w-full h-[632px] rounded-lg overflow-hidden">
          <Image
            src={urlFor(coverImage).width(1080).url() ?? ""}
            alt={title ?? "Project cover image"}
            fill
            className="object-cover w-full h-full"
          />
        </div>
      )}
      <div className="space-y-4">
        <div className="space-y-2">
          <h3 className="text-sm font-medium">{title}</h3>
          <div className="flex flex-wrap gap-1">
            {stack?.map((tech) => (
              <div key={tech.tech} className="flex items-center px-2 py-1">
                {renderIcon(tech.tech)}
                <span className="ml-1 text-xs">{tech.tech}</span>
              </div>
            ))}
          </div>
        </div>
        <PortableText value={summary ?? []} />
        <Link href={projectLinks?.live ?? ""}>
          <Button
            variant="secondary"
            className="bg-[#7c3aed] hover:bg-[#6d28d9] text-white w-full justify-between"
          >
            View project
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </Link>
      </div>
    </Card>
  );
}
