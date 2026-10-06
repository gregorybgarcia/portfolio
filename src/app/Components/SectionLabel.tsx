"use client";
import { motion } from "framer-motion";

interface SectionLabelProps {
  /** Section title, e.g. "About me" (rendered uppercase) */
  label: string;
  /** Position of the section on the page, shown as 01, 02, ... */
  index: number;
}

/**
 * Vertical section title pinned to the left edge of a section on wide screens.
 * Place it as a direct child of a `relative` section. Below the breakpoint it
 * renders nothing, and the section's horizontal pill badge is shown instead.
 */
export default function SectionLabel({ label, index }: SectionLabelProps) {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-y-0 left-6 hidden min-[1360px]:block 2xl:left-10"
    >
      <motion.div
        className="sticky top-32 flex flex-col items-center gap-4 py-24"
        initial={{ opacity: 0, x: -12 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-80px 0px" }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <span className="text-xs font-semibold tabular-nums text-violet-400">
          {String(index).padStart(2, "0")}
        </span>
        <span className="h-16 w-px bg-gradient-to-b from-violet-500/80 to-transparent" />
        <span className="rotate-180 whitespace-nowrap text-xs font-semibold uppercase tracking-[0.35em] text-gray-400 [writing-mode:vertical-rl]">
          {label}
        </span>
      </motion.div>
    </div>
  );
}
