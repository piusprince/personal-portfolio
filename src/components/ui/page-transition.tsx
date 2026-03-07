"use client";

import { motion, useAnimationControls, useReducedMotion } from "motion/react";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

export default function PageTransition({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();
  const controls = useAnimationControls();
  const lastAnimatedPathRef = useRef<string | null>(null);

  useEffect(() => {
    if (reduceMotion) return;

    // Keep first paint stable, then animate only on real route changes.
    if (lastAnimatedPathRef.current === null) {
      lastAnimatedPathRef.current = pathname;
      controls.set({ opacity: 1, y: 0 });
      return;
    }

    if (lastAnimatedPathRef.current === pathname) return;

    lastAnimatedPathRef.current = pathname;
    controls.set({ opacity: 0, y: 8 });

    void controls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 0.24, ease: [0.22, 1, 0.36, 1] },
    });
  }, [controls, pathname, reduceMotion]);

  if (reduceMotion) {
    return <>{children}</>;
  }

  return <motion.div animate={controls}>{children}</motion.div>;
}
