"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { CodeBracketIcon, BriefcaseIcon, RocketLaunchIcon, AcademicCapIcon } from "@heroicons/react/24/outline";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faSquareGithub } from "@fortawesome/free-brands-svg-icons";
import { getTotalYearsOfExperience } from "../utils/dateUtils";

interface StatItemProps {
  icon: React.ReactNode;
  value: number;
  label: string;
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
    <span ref={ref} className="text-5xl md:text-6xl font-black text-white">
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
      delay: index * 0.12,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  }),
};

function StatItem({ icon, value, label, suffix = "", prefix = "", index }: StatItemProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      custom={index}
      variants={cardVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="flex flex-col items-center text-center p-6 bg-gray-800/50 border border-gray-700 rounded-2xl hover:border-violet-500/50 hover:bg-gray-800/70 transition-all duration-300 group backdrop-blur-sm cursor-default"
    >
      {/* Icon container */}
      <div className="relative p-4 bg-violet-900/30 rounded-full mb-4">
        <div className="relative z-10">{icon}</div>
      </div>

      <AnimatedCounter value={value} suffix={suffix} prefix={prefix} />

      {/* Label with fade-in */}
      <motion.p
        className="text-lg md:text-xl text-gray-300 mt-3 font-medium"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: index * 0.12 + 0.4, duration: 0.5 }}
      >
        {label}
      </motion.p>
    </motion.div>
  );
}

export default function Stats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  const stats = [
    {
      icon: <BriefcaseIcon className="w-12 h-12 text-violet-400" />,
      value: getTotalYearsOfExperience(),
      label: "Years Experience",
      suffix: "+",
    },
    {
      icon: <AcademicCapIcon className="w-12 h-12 text-violet-400" />,
      value: 11,
      label: "Certificates",
      suffix: "+",
    },
    {
      icon: <CodeBracketIcon className="w-12 h-12 text-violet-400" />,
      value: 20,
      label: "Technologies Mastered",
      suffix: "+",
    },
    {
      icon: <RocketLaunchIcon className="w-12 h-12 text-violet-400" />,
      value: 50,
      label: "Projects Contributed",
      suffix: "+",
    },
  ];

  return (
    <section
      className="relative w-full md:min-h-screen flex flex-col items-center justify-center py-12 md:py-20 bg-gradient-to-b from-black/80 via-violet-900/10 to-black/80 z-10"
      id="stats"
    >
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
            className="inline-block px-4 py-2 bg-violet-900/50 border border-violet-700 rounded-full text-violet-300 text-sm font-semibold"
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
            className="text-4xl md:text-5xl lg:text-6xl font-black text-white mt-6 mb-6"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, delay: 0.1, ease: "easeOut" },
              },
            }}
          >
            <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
              Impact & Achievement
            </span>
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            variants={{
              hidden: { opacity: 0, y: 15 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, delay: 0.2, ease: "easeOut" },
              },
            }}
          >
            A snapshot of my journey in web development, showcasing experience,
            dedication, and continuous growth.
          </motion.p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <StatItem key={index} {...stat} index={index} />
          ))}
        </div>

        {/* Social Media Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.8, ease: "easeOut" }}
          className="mt-10 md:mt-16 text-center"
        >
          <p className="text-lg text-gray-300 mb-6">
            Let&apos;s connect and collaborate!
          </p>
          <div className="flex justify-center gap-4">
            <motion.button
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/gregory-barros-garcia-4160b2157"
                )
              }
              className="relative p-4 bg-gray-800/50 border border-gray-700 rounded-xl overflow-hidden group"
              whileHover={{
                scale: 1.1,
                y: -5,
                boxShadow: "0 10px 30px rgba(139, 92, 246, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-violet-500/20 to-transparent"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.6 }}
              />
              <FontAwesomeIcon
                icon={faLinkedin}
                className="relative z-10 text-violet-400 group-hover:text-violet-300 transition-colors"
                fontSize={40}
              />
            </motion.button>

            <motion.button
              onClick={() => window.open("https://github.com/gregorybgarcia")}
              className="relative p-4 bg-gray-800/50 border border-gray-700 rounded-xl overflow-hidden group"
              whileHover={{
                scale: 1.1,
                y: -5,
                boxShadow: "0 10px 30px rgba(139, 92, 246, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-violet-500/20 to-transparent"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.6 }}
              />
              <FontAwesomeIcon
                icon={faSquareGithub}
                className="relative z-10 text-violet-400 group-hover:text-violet-300 transition-colors"
                fontSize={40}
              />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
