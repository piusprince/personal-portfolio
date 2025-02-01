"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { fadeInUp } from "@/lib/animation";

type HeadingLevel = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

interface HeadingProps {
  level?: HeadingLevel;
  children: React.ReactNode;
  className?: string;
  animate?: boolean;
  delay?: number;
}

const headingVariants: Record<HeadingLevel, string> = {
  h1: "text-4xl md:text-6xl lg:text-9xl font-bold",
  h2: "text-3xl md:text-5xl lg:text-7xl font-bold",
  h3: "text-2xl md:text-4xl lg:text-6xl font-bold",
  h4: "text-xl md:text-3xl lg:text-5xl font-bold",
  h5: "text-lg md:text-2xl lg:text-4xl font-bold",
  h6: "text-base md:text-xl lg:text-3xl font-bold",
};

export default function Heading({
  level = "h1",
  children,
  className,
  delay = 0,
}: HeadingProps) {
  const Component = motion[level];

  return (
    <Component
      {...fadeInUp}
      transition={{ ...fadeInUp.transition, delay }}
      className={cn(headingVariants[level], "font-bricolage", className)}
    >
      {children}
    </Component>
  );
}
