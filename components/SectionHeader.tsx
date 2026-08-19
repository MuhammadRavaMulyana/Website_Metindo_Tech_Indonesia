"use client";

import { motion } from "framer-motion";

interface SectionHeaderProps {
  badge: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export default function SectionHeader({
  badge,
  title,
  subtitle,
  centered = true,
  light = false,
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7 }}
      className={centered ? "text-center" : ""}
    >
      <h2
        className={`text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-5 ${
          light ? "text-white" : "text-slate-900"
        }`}
      >
        {title}
      </h2>

      {subtitle && (
        <p
          className={`text-base md:text-lg leading-relaxed max-w-2xl ${
            centered ? "mx-auto" : ""
          } ${light ? "text-slate-800" : "text-slate-800"}`}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}