"use client";

import { motion, Variants } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  duration?: number;
}

const getVariants = (direction: string): Variants => {
  const directions: Record<string, { x?: number; y?: number }> = {
    up: { y: 60 },
    down: { y: -60 },
    left: { x: 60 },
    right: { x: -60 },
    none: {},
  };

  return {
    hidden: {
      opacity: 0,
      ...directions[direction],
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
    },
  };
};

export default function AnimatedSection({
  children,
  className = "",
  delay = 0,
  direction = "up",
  duration = 0.7,
}: AnimatedSectionProps) {
  const variants = getVariants(direction);

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
}
