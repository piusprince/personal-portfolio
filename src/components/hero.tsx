"use client";

import { motion } from "motion/react";
import { Headline, BodyText } from "./ui/typography";
import { Button } from "./ui/button";
import { ArrowUpRight01Icon } from "hugeicons-react";

interface HeroProps {
  heading: string;
  subheading: string;
  contact?: {
    email?: string;
    socialLinks: { platform: string; url: string }[];
  };
}

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
};

export default function Hero({ heading, subheading, contact }: HeroProps) {
  const email = contact?.email;

  return (
    <section className="relative flex flex-col justify-center min-h-[70vh] px-4 pt-10">
      <div className="max-w-4xl mx-auto text-center flex flex-col items-center z-10">
        <motion.div {...fadeInUp} className="mb-6">
          <Headline as="h1" className="text-5xl md:text-7xl lg:text-8xl tracking-tighter leading-[1.1] font-extrabold pb-2 bg-clip-text text-transparent bg-linear-to-b from-white to-white/70">
            {heading}
          </Headline>
        </motion.div>
        
        <motion.div
          {...fadeInUp}
          transition={{ ...fadeInUp.transition, delay: 0.15 }}
          className="max-w-2xl mx-auto mb-10"
        >
          <BodyText className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            {subheading}
          </BodyText>
        </motion.div>

        <motion.div
          {...fadeInUp}
          transition={{ ...fadeInUp.transition, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          {email && (
            <Button size="lg" className="rounded-full px-8 text-sm font-bold shadow-[0_0_20px_rgba(59,130,246,0.3)]" asChild>
              <a href={`mailto:${email}`}>
                Start a project <ArrowUpRight01Icon className="w-4 h-4 ml-2" />
              </a>
            </Button>
          )}
          <Button variant="outline" size="lg" className="rounded-full px-8 text-sm font-semibold glass-panel" asChild>
            <a href="/projects">View my work</a>
          </Button>
        </motion.div>
      </div>

      {/* Decorative subtle background glow behind hero text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-accent/10 blur-[120px] rounded-full pointer-events-none" />
    </section>
  );
}
