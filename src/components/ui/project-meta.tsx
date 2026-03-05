import React from "react"
import { Headline, BodyText } from "./typography"
import { cn } from "@/lib/utils"

interface ProjectMetaProps {
  role?: string
  client?: string
  duration?: string
  stack?: string[]
  liveUrl?: string
  githubUrl?: string
  className?: string
}

export function ProjectMeta({
  role,
  client,
  duration,
  stack,
  liveUrl,
  githubUrl,
  className,
}: ProjectMetaProps) {
  return (
    <aside className={cn("flex flex-col gap-10 sticky top-32", className)}>
      {/* Role */}
      {role && (
        <div className="flex flex-col gap-1">
          <Headline as="h5" className="text-sm text-[var(--color-muted-foreground)] uppercase tracking-wider font-semibold">
            Role
          </Headline>
          <BodyText className="font-medium">{role}</BodyText>
        </div>
      )}

      {/* Client */}
      {client && (
        <div className="flex flex-col gap-1">
          <Headline as="h5" className="text-sm text-[var(--color-muted-foreground)] uppercase tracking-wider font-semibold">
            Client
          </Headline>
          <BodyText className="font-medium">{client}</BodyText>
        </div>
      )}

      {/* Duration */}
      {duration && (
        <div className="flex flex-col gap-1">
          <Headline as="h5" className="text-sm text-[var(--color-muted-foreground)] uppercase tracking-wider font-semibold">
            Year
          </Headline>
          <BodyText className="font-medium">{duration}</BodyText>
        </div>
      )}

      {/* Tech Stack */}
      {stack && stack.length > 0 && (
        <div className="flex flex-col gap-2">
          <Headline as="h5" className="text-sm text-[var(--color-muted-foreground)] uppercase tracking-wider font-semibold">
            Tech Stack
          </Headline>
          <ul className="flex flex-col gap-1">
            {stack.map((item) => (
              <li key={item}>
                <BodyText className="font-medium text-sm">{item}</BodyText>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Links */}
      {(liveUrl || githubUrl) && (
        <div className="flex flex-col gap-2 pt-4 border-t border-[var(--color-border)]">
          {liveUrl && (
            <a 
              href={liveUrl} 
              target="_blank" 
              rel="noreferrer"
              className="group flex items-center gap-2 text-[var(--color-accent)] hover:text-[var(--color-foreground)] transition-colors"
            >
              <BodyText className="font-medium text-sm group-hover:text-[var(--color-foreground)] transition-colors">
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
              className="group flex items-center gap-2 text-[var(--color-muted-foreground)] hover:text-[var(--color-foreground)] transition-colors"
            >
              <BodyText className="font-medium text-sm group-hover:text-[var(--color-foreground)] transition-colors">
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
  )
}
