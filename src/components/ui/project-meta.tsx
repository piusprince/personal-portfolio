import React from "react";
import { Headline, BodyText } from "./typography";
import { cn } from "@/lib/utils";
import { getTechMetaByLabel } from "@/lib/tech";

interface ProjectMetaProps {
  role?: string;
  client?: string;
  duration?: string;
  stack?: string[];
  liveUrl?: string;
  githubUrl?: string;
  className?: string;
}

export function ProjectMeta({
  role,
  client,
  duration,
  stack,
  liveUrl,
  githubUrl,
  className,
}: Readonly<ProjectMetaProps>) {
  return (
    <aside className={cn("flex flex-col gap-8 lg:gap-10 lg:sticky lg:top-32", className)}>
      {/* Role */}
      {role && (
        <div className="flex flex-col gap-1">
          <Headline
            as="h5"
            className="text-sm uppercase tracking-wider font-semibold opacity-80"
          >
            Role
          </Headline>
          <BodyText className="font-medium">{role}</BodyText>
        </div>
      )}

      {/* Client */}
      {client && (
        <div className="flex flex-col gap-1">
          <Headline
            as="h5"
            className="text-sm uppercase tracking-wider font-semibold opacity-80"
          >
            Client
          </Headline>
          <BodyText className="font-medium">{client}</BodyText>
        </div>
      )}

      {/* Duration */}
      {duration && (
        <div className="flex flex-col gap-1">
          <Headline
            as="h5"
            className="text-sm uppercase tracking-wider font-semibold opacity-80"
          >
            Year
          </Headline>
          <BodyText className="font-medium">{duration}</BodyText>
        </div>
      )}

      {/* Tech Stack */}
      {stack && stack.length > 0 && (
        <div className="flex flex-col gap-2">
          <Headline
            as="h5"
            className="text-sm uppercase tracking-wider font-semibold opacity-80"
          >
            Tech Stack
          </Headline>
          <ul className="flex flex-col gap-1">
            {stack.map((item) => (
              <li key={item}>
                <BodyText className="inline-flex items-start gap-2 font-medium text-sm wrap-break-word">
                  {(() => {
                    const techMeta = getTechMetaByLabel(item);
                    const Icon = techMeta?.icon;
                    return Icon ? <Icon className="w-4 h-4 shrink-0 mt-0.5" /> : null;
                  })()}
                  {item}
                </BodyText>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Links */}
      {(liveUrl || githubUrl) && (
        <div className="flex flex-col gap-2 pt-4 border-t">
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-2 transition-colors"
            >
              <BodyText className="font-medium text-sm transition-colors">
                Live Preview
              </BodyText>
              <span className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all">
                →
              </span>
            </a>
          )}
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-2 opacity-80 hover:opacity-100 transition-colors"
            >
              <BodyText className="font-medium text-sm transition-colors">
                View Source
              </BodyText>
              <span className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all">
                →
              </span>
            </a>
          )}
        </div>
      )}
    </aside>
  );
}
