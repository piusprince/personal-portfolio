"use client";

import { HeroProps } from "@/app/page";
import { motion } from "motion/react";
import Heading from "./ui/heading";
import { fadeInUp } from "@/lib/animation";

export default function Hero({
  title,
  heading,
  subheading,
}: HeroProps & { title: string }) {
  return (
    <section className="relative flex items-center justify-center h-[400px] md:h-screen px-4">
      <div className="max-w-4xl mx-auto text-center">
        <motion.span
          {...fadeInUp}
          className="inline-block mb-4 text-sm tracking-wider uppercase"
        >
          {title}
        </motion.span>
        <Heading level="h1" delay={0.2} className="mb-6">
          {heading}
        </Heading>
        <motion.p
          {...fadeInUp}
          transition={{ ...fadeInUp.transition, delay: 0.4 }}
          className="max-w-2xl mx-auto mb-8 text-lg text-muted-foreground md:text-xl"
        >
          {subheading}
        </motion.p>
      </div>
    </section>
  );
}
