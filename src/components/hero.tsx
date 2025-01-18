"use client";

import { HeroProps } from "@/app/page";
import { motion } from "motion/react";

export default function Hero({
  title,
  heading,
  subheading,
  contact,
}: HeroProps & { title: string }) {
  return (
    <section className="flex items-center justify-center min-h-screen px-4">
      <div className="max-w-4xl mx-auto text-center">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-block mb-4 text-sm tracking-wider uppercase"
        >
          {title}
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-6 text-4xl font-bold md:text-6xl lg:text-9xl font-bricolage"
        >
          {heading}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="max-w-2xl mx-auto mb-8 text-lg text-muted-foreground md:text-xl"
        >
          {subheading}
        </motion.p>
      </div>
    </section>
  );
}
