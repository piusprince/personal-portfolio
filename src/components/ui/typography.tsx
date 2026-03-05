import * as React from "react"
import { cn } from "@/lib/utils"

export const Headline = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement> & { as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" }
>(({ className, as: Component = "h1", ...props }, ref) => {
  return (
    <Component
      ref={ref}
      className={cn(
        "font-bricolage font-bold tracking-tight text-[var(--color-foreground)]",
        className
      )}
      {...props}
    />
  )
})
Headline.displayName = "Headline"

export const BodyText = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement> & { muted?: boolean }
>(({ className, muted, ...props }, ref) => {
  return (
    <p
      ref={ref}
      className={cn(
        "font-geist leading-relaxed",
        muted ? "text-[var(--color-muted-foreground)]" : "text-[var(--color-foreground)]",
        className
      )}
      {...props}
    />
  )
})
BodyText.displayName = "BodyText"
