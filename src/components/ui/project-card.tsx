import { ProjectProps } from "@/app/page";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { tech as stackName } from "@/lib/tech";
import { ArrowRight } from "lucide-react";
import { PortableText } from "next-sanity";
import Link from "next/link";
import { Icon } from "@sanity/icons";
import { Icons } from "@/components/ui/icons";

export default function ProjectCard({
  _id,
  stack,
  summary,
  description,
  projectLinks,
  coverImage,
  isFeatured,
  slug,
  title,
}: Partial<ProjectProps>) {
  const renderIcon = (tech: string) => {
    if (stackName[tech]) {
      const Icon = stackName[tech].icon;
      return <Icon className="w-4 h-4" />;
    }
  };

  return (
    <Card className="lg:w-[1080px] p-6 border-spacing-5">
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
