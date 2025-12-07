"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { CodeBracketIcon, BriefcaseIcon, RocketLaunchIcon, AcademicCapIcon, DocumentTextIcon } from "@heroicons/react/24/outline";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faSquareGithub } from "@fortawesome/free-brands-svg-icons";
import { getTotalYearsOfExperience } from "../utils/dateUtils";

interface StatItemProps {
  icon: React.ReactNode;
  value: number;
  label: string;
  suffix?: string;
  prefix?: string;
}

function AnimatedCounter({ value, suffix = "", prefix = "" }: { value: number; suffix?: string; prefix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let startTime: number;
      const duration = 2000; // 2 seconds

      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);

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

function StatItem({ icon, value, label, suffix = "", prefix = "" }: StatItemProps) {
  const mainControls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate={mainControls}
      transition={{ duration: 0.6 }}
      className="flex flex-col items-center text-center p-6 bg-gray-800/50 border border-gray-700 rounded-2xl hover:border-violet-500 hover:bg-gray-800/70 transition-all duration-300 group backdrop-blur-sm"
    >
      <div className="p-4 bg-violet-900/30 rounded-full mb-4 group-hover:bg-violet-900/50 transition-all duration-300">
        {icon}
      </div>
      <AnimatedCounter value={value} suffix={suffix} prefix={prefix} />
      <p className="text-lg md:text-xl text-gray-300 mt-3 font-medium">{label}</p>
    </motion.div>
  );
}

export default function Stats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
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
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <span className="px-4 py-2 bg-violet-900/50 border border-violet-700 rounded-full text-violet-300 text-sm font-semibold">
            BY THE NUMBERS
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mt-6 mb-6">
            <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
              Impact & Achievement
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A snapshot of my journey in web development, showcasing experience,
            dedication, and continuous growth.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatItem key={index} {...stat} />
          ))}
        </div>

        {/* Social Media Links */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 md:mt-16 text-center"
        >
          <p className="text-lg text-gray-300 mb-6">Let&apos;s connect and collaborate!</p>
          <div className="flex justify-center gap-6">
            <motion.a
              href="https://www.linkedin.com/in/gregory-barros-garcia-4160b2157"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-gray-800/50 border border-gray-700 rounded-xl hover:border-violet-500 hover:bg-violet-900/30 transition-all duration-300 group backdrop-blur-sm"
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                className="text-violet-400 group-hover:text-violet-300 transition-colors"
                fontSize={40}
              />
            </motion.a>
            <motion.a
              href="https://github.com/gregorybgarcia"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-gray-800/50 border border-gray-700 rounded-xl hover:border-violet-500 hover:bg-violet-900/30 transition-all duration-300 group backdrop-blur-sm"
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <FontAwesomeIcon
                icon={faSquareGithub}
                className="text-violet-400 group-hover:text-violet-300 transition-colors"
                fontSize={40}
              />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
