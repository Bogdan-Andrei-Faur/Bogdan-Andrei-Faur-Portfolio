import { motion as m } from "framer-motion";
import type { ReactNode } from "react";

export type SectionHeaderProps = {
  icon: ReactNode;
  title: string;
  subtitle?: string;
  className?: string;
};

export default function SectionHeader({
  icon,
  title,
  subtitle,
  className,
}: SectionHeaderProps) {
  return (
    <m.header
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className={
        className ? `mb-10 text-center ${className}` : "mb-10 text-center"
      }
    >
      <div className="inline-flex items-center gap-2 justify-center text-white">
        {icon}
        <h2 className="text-3xl md:text-4xl font-bold text-white">{title}</h2>
      </div>
      {subtitle && (
        <p className="mt-2 text-white/80 max-w-2xl mx-auto">{subtitle}</p>
      )}
    </m.header>
  );
}
