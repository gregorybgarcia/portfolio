"use client";
import SectionLabel from "./SectionLabel";
import { useEffect, useRef, useState } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { CodeBracketIcon, BriefcaseIcon, RocketLaunchIcon, AcademicCapIcon } from "@heroicons/react/24/outline";
import { getTotalYearsOfExperience } from "../utils/dateUtils";

interface StatItemProps {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  value: number;
  label: string;
  description: string;
  suffix?: string;
  prefix?: string;
  index: number;
}

// Linear counter animation
function AnimatedCounter({ value, suffix = "", prefix = "" }: { value: number; suffix?: string; prefix?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      const duration = 1500; // 1.5 seconds
      const startTime = Date.now();

      const animate = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);

        setCount(Math.floor(progress * value));

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    }
  }, [isInView, value]);

  return (
    <span ref={ref} className="text-4xl sm:text-6xl md:text-7xl font-black tabular-nums bg-gradient-to-r from-violet-400 via-violet-300 to-fuchsia-400 bg-clip-text text-transparent">
      {prefix}{count}{suffix}
    </span>
  );
}

// Smoother card animation variants
const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: index * 0.06,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  }),
};

function StatItem({ icon: Icon, value, label, description, suffix = "", prefix = "", index }: StatItemProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      custom={index}
      variants={cardVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="cyber-card group relative flex cursor-default flex-col justify-between overflow-hidden p-4 backdrop-blur-sm sm:min-h-[12rem] sm:p-6 md:p-8 lg:min-h-[17rem] lg:p-7"
    >
      {/* Watermark icon, cropped by the card's bottom-right corner */}
      <Icon
        aria-hidden
        className="pointer-events-none absolute -bottom-6 -right-6 h-24 w-24 sm:-bottom-8 sm:-right-8 sm:h-40 sm:w-40 md:h-48 md:w-48 -rotate-12 text-violet-500/15 transition-all duration-500 ease-in-out group-hover:-rotate-6 group-hover:scale-110 group-hover:text-violet-400/25"
      />

      <div className="relative">
        <AnimatedCounter value={value} suffix={suffix} prefix={prefix} />
        <motion.p
          className="mt-1 text-sm sm:mt-2 sm:text-lg md:text-xl font-semibold text-white"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: index * 0.06 + 0.15, duration: 0.5 }}
        >
          {label}
        </motion.p>
      </div>
      <p className="relative mt-6 hidden max-w-sm pr-16 leading-relaxed text-gray-400 sm:block lg:pr-10">{description}</p>
    </motion.div>
  );
}

export default function Stats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  const stats = [
    {
      icon: BriefcaseIcon,
      value: getTotalYearsOfExperience(),
      label: "Years Experience",
      description: "Building and shipping web applications end to end, from interface to API.",
      suffix: "+",
    },
    {
      icon: AcademicCapIcon,
      value: 11,
      label: "Certificates",
      description: "Professional courses and certifications completed along the way.",
      suffix: "+",
    },
    {
      icon: CodeBracketIcon,
      value: 20,
      label: "Technologies Mastered",
      description: "Across front end, back end, databases and AI-assisted development.",
      suffix: "+",
    },
    {
      icon: RocketLaunchIcon,
      value: 50,
      label: "Projects Contributed",
      description: "Delivered across healthcare, payments, accounting and social platforms.",
      suffix: "+",
    },
  ];

  return (
    <section
      className="relative w-full md:min-h-screen flex flex-col items-center justify-center py-12 md:py-16 bg-gradient-to-b from-black/80 via-violet-900/10 to-black/80 z-10"
      id="stats"
    >
      <SectionLabel label="By the numbers" index={6} />
      <div className="max-w-7xl w-full px-4">
        {/* Header Section */}
        <motion.div
          ref={ref}
          className="text-center mb-8 md:mb-16"
          initial="hidden"
          animate={mainControls}
        >
          {/* Badge */}
          <motion.span
            className="min-[1360px]:hidden inline-block px-4 py-2 bg-violet-900/50 border border-violet-700 rounded-full text-violet-300 text-sm font-semibold"
            variants={{
              hidden: { opacity: 0, y: -15 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, ease: "easeOut" },
              },
            }}
          >
            BY THE NUMBERS
          </motion.span>

          {/* Title */}
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mt-6 mb-6"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, delay: 0.03, ease: "easeOut" },
              },
            }}
          >
            Impact & Achievement
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            variants={{
              hidden: { opacity: 0, y: 15 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, delay: 0.07, ease: "easeOut" },
              },
            }}
          >
            A snapshot of my journey in web development, showcasing experience,
            dedication, and continuous growth.
          </motion.p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <StatItem key={index} {...stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
