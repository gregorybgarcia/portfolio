"use client";
import { motion, useScroll, useTransform } from "framer-motion";

/**
 * Fades content out as it scrolls off the top of the viewport. Sits above the
 * sections (z-10) and below the header (z-20), ignores pointer events, and only
 * appears once the page is scrolled so the hero is untouched at the top.
 */
export default function ScrollFade() {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 120], [0, 1]);

  return (
    <motion.div
      aria-hidden
      style={{ opacity }}
      className="pointer-events-none fixed inset-x-0 top-0 z-[15] h-24 bg-gradient-to-b from-black via-black/70 to-transparent md:h-32"
    />
  );
}
