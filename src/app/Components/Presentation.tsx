"use client";
import { ReactTyped } from "react-typed";
import { motion, useScroll, useTransform } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faSquareGithub } from "@fortawesome/free-brands-svg-icons";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { useRef } from "react";

// Text reveal animation for title
const letterVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.03,
      duration: 0.5,
      ease: [0.215, 0.61, 0.355, 1] as const,
    },
  }),
};

// Stagger container for social buttons
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.6,
    },
  },
};

const socialButtonVariants = {
  hidden: { opacity: 0, scale: 0, rotate: -180 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      type: "spring" as const,
      stiffness: 200,
      damping: 15,
    },
  },
};

export default function Presentation() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Parallax effects
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const scrollTo = (page: string) => {
    const element = document.getElementById(page);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const name = "Gregory Garcia";

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-black/80 via-gray-900/80 to-black/80 py-12 md:py-20 pt-20 md:pt-24 z-10"
      id="home"
    >
      <motion.div
        style={{ opacity }}
        className="max-w-7xl w-full px-4 z-10"
      >
        <div className="flex flex-col items-center text-center">
          {/* Profile Image with Enhanced Effects */}
          <motion.div
            style={{ y: imageY }}
            className="relative mb-8"
          >
            {/* Animated rings around profile */}
            <motion.div
              className="absolute -inset-4 rounded-full border-2 border-violet-500/30"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute -inset-8 rounded-full border border-violet-500/20"
              animate={{
                scale: [1, 1.15, 1],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
            />

            {/* Glow effect */}
            <motion.div
              className="absolute inset-0 bg-violet-600/30 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* Profile image with entrance and hover zoom animation */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                type: "spring",
                stiffness: 100,
                damping: 15,
              }}
              whileHover={{ scale: 1.08 }}
            >
              <Image
                className="relative rounded-full border-4 border-violet-500 shadow-2xl shadow-violet-900/50"
                src="/images/profile.jpeg"
                alt="Gregory Garcia"
                height={240}
                width={240}
                priority
              />
            </motion.div>
          </motion.div>

          {/* Name and Title with Parallax */}
          <motion.div
            style={{ y: textY }}
            className="mb-8"
          >
            {/* Animated name with letter-by-letter reveal */}
            <motion.h1
              className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 tracking-tight"
              suppressHydrationWarning
              initial="hidden"
              animate="visible"
            >
              {name.split("").map((letter, i) => (
                <motion.span
                  key={i}
                  custom={i}
                  variants={letterVariants}
                  className="inline-block"
                  style={{ display: letter === " " ? "inline" : "inline-block" }}
                >
                  {letter === " " ? "\u00A0" : letter}
                </motion.span>
              ))}
            </motion.h1>

            {/* Badge with bounce entrance */}
            <motion.div
              initial={{ opacity: 0, scale: 0, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                delay: 0.5,
                type: "spring",
                stiffness: 200,
                damping: 15,
              }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 30px rgba(139, 92, 246, 0.4)",
              }}
              className="inline-block px-6 py-3 bg-violet-900/50 border border-violet-700 rounded-full mb-6 cursor-default"
            >
              <motion.span
                className="text-violet-300 text-lg md:text-xl font-semibold"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{ duration: 5, repeat: Infinity }}
                style={{
                  backgroundImage: "linear-gradient(90deg, #c4b5fd, #a78bfa, #8b5cf6, #a78bfa, #c4b5fd)",
                  backgroundSize: "200% 100%",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Senior Front-End Developer (Lead)
              </motion.span>
            </motion.div>

            {/* Typing text with fade-in container */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="text-xl md:text-2xl lg:text-3xl font-medium text-gray-300 min-h-[5rem] md:min-h-[6rem] flex items-center justify-center"
              suppressHydrationWarning
            >
              <ReactTyped
                strings={[
                  "I enjoy building and designing for the web.",
                  "Front-End Specialist.",
                  "Creating exceptional user experiences.",
                  "Passionate about modern web technologies.",
                ]}
                typeSpeed={60}
                backSpeed={40}
                loop
              />
            </motion.h2>
          </motion.div>

          {/* Social Links with Stagger Animation */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="mb-10 flex justify-center gap-4"
          >
            <motion.button
              variants={socialButtonVariants}
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
              {/* Shimmer effect on hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-violet-500/20 to-transparent"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.6 }}
              />
              <FontAwesomeIcon
                icon={faLinkedin}
                className="relative z-10 text-white group-hover:text-[#0A66C2] transition-colors"
                fontSize={40}
              />
            </motion.button>

            <motion.button
              variants={socialButtonVariants}
              onClick={() => window.open("https://github.com/gregorybgarcia")}
              className="relative p-4 bg-gray-800/50 border border-gray-700 rounded-xl overflow-hidden group"
              whileHover={{
                scale: 1.1,
                y: -5,
                boxShadow: "0 10px 30px rgba(139, 92, 246, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Shimmer effect on hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-violet-500/20 to-transparent"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.6 }}
              />
              <FontAwesomeIcon
                icon={faSquareGithub}
                className="relative z-10 text-white group-hover:text-gray-300 transition-colors"
                fontSize={40}
              />
            </motion.button>
          </motion.div>

        </div>
      </motion.div>

      {/* Scroll Indicator with Enhanced Animation - Positioned outside content container for proper centering */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
        className="w-full flex justify-center mt-10 md:mt-0 md:absolute md:bottom-8 md:inset-x-0 z-10"
      >
        <motion.button
          onClick={() => scrollTo("about")}
          className="flex flex-col items-center gap-3 cursor-pointer group"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.span
            className="text-gray-300 text-base font-semibold group-hover:text-violet-400 transition-colors"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Explore My Work
          </motion.span>
          <motion.div
            animate={{
              y: [0, 8, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.7, 1, 0.7],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <ChevronDownIcon className="w-7 h-7 text-violet-400 group-hover:text-violet-300 transition-colors" />
            </motion.div>
          </motion.div>
        </motion.button>
      </motion.div>
    </section>
  );
}
