"use client";
import { motion, useScroll, useSpring } from "framer-motion";

interface SectionLabelProps {
  /** Section title, e.g. "About me" (rendered uppercase) */
  label: string;
  /** Position of the section on the page, shown as 01, 02, ... */
  index: number;
}

/**
 * Vertical section title pinned to the left edge of a section on wide screens,
 * with a page scroll bar (it replaces the top progress bar at this breakpoint).
 * Place it as a direct child of a `relative` section. Below the breakpoint it
 * renders nothing, and the section's horizontal pill badge is shown instead.
 */
export default function SectionLabel({ label, index }: SectionLabelProps) {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });

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
        <span className="font-mono text-xs font-medium tabular-nums text-violet-400">
          {String(index).padStart(2, "0")}
        </span>

        {/* Page scroll bar: thin track with a glowing violet fill */}
        <span className="relative h-32 w-px bg-gray-700/70">
          <motion.span
            className="absolute inset-0 origin-top bg-gradient-to-b from-violet-500 to-violet-300 shadow-[0_0_8px_rgba(139,92,246,0.8)]"
            style={{ scaleY: progress }}
          />
        </span>

        <span className="rotate-180 whitespace-nowrap font-mono text-xs font-medium uppercase tracking-[0.35em] text-gray-400 [writing-mode:vertical-rl]">
          {label}
        </span>
      </motion.div>
    </div>
  );
}
