"use client";
import { useAnimation, useInView, motion } from "framer-motion";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { getTotalYearsOfExperience } from "../utils/dateUtils";

// Staggered container for industry cards
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

// Card animation with 3D tilt effect
const cardVariants = {
  hidden: { opacity: 0, y: 50, rotateX: -15 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 15,
    },
  },
};

// Text paragraph animation
const paragraphVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.4 + i * 0.15,
      duration: 0.6,
      ease: "easeOut" as const,
    },
  }),
};

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const mainControls = useAnimation();
  const yearsOfExperience = getTotalYearsOfExperience();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  const industries = [
    {
      title: "Healthcare",
      description: "Patient management systems, medical scheduling platforms, and healthcare data visualization tools.",
      logos: [{ src: "/images/mypatientspace.png", alt: "myPatientSpace" }],
    },
    {
      title: "Payment Solutions",
      description: "Secure payment gateways, transaction processing systems, and fintech applications with PCI compliance.",
      logos: [
        { src: "/images/dexian.png", alt: "Dexian" },
        { src: "/images/getnet.png", alt: "Getnet" },
      ],
    },
    {
      title: "Social Platforms",
      description: "Project collaboration platforms, social networking features, and community engagement tools.",
      logos: [{ src: "/images/incentiv.png", alt: "Incentiv" }],
    },
    {
      title: "Accounting",
      description: "Financial management systems, bookkeeping applications, and automated accounting workflows.",
      logos: [{ src: "/images/qyon.jpg", alt: "QYON" }],
    },
    {
      title: "Tax Management",
      description: "Tax calculation engines, compliance reporting tools, and automated tax filing systems.",
      logos: [
        { src: "/images/essystem.jpg", alt: "ESSystem" },
        { src: "/images/qyon.jpg", alt: "QYON" },
      ],
    },
    {
      title: "Payroll Systems",
      description: "Employee payroll processing, time tracking integration, and benefits administration platforms.",
      logos: [{ src: "/images/qyon.jpg", alt: "QYON" }],
    },
  ];

  return (
    <section
      className="relative w-full md:min-h-screen flex flex-col items-center justify-center py-12 md:py-20 bg-gradient-to-b from-black/80 via-black/80 to-black/80 z-10"
      id="about"
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
          {/* Floating badge */}
          <motion.span
            className="inline-block px-4 py-2 bg-violet-900/50 border border-violet-700 rounded-full text-violet-300 text-sm font-semibold"
            initial={{ opacity: 0, scale: 0.8, y: -20 }}
            animate={isInView ? {
              opacity: 1,
              scale: 1,
              y: [0, -5, 0],
            } : {}}
            transition={{
              opacity: { duration: 0.4 },
              scale: { type: "spring" as const, stiffness: 200, damping: 15 },
              y: { duration: 2, repeat: Infinity, ease: "easeInOut" as const },
            }}
          >
            ABOUT ME
          </motion.span>

          {/* Title with gradient reveal */}
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-black mt-6 mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{
              type: "spring" as const,
              stiffness: 100,
              damping: 12,
              delay: 0.3,
            }}
          >
            <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
              Hi, I&apos;m Greg. Nice to meet you.
            </span>
          </motion.h2>

          {/* Animated paragraphs */}
          <div className="max-w-4xl mx-auto space-y-6">
            <motion.p
              className="text-lg md:text-xl text-gray-300 leading-relaxed"
              custom={0}
              variants={paragraphVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              I&apos;m a passionate <motion.span
                className="text-violet-400 font-semibold"
                whileHover={{ scale: 1.05 }}
              >Senior Front-End Developer</motion.span> with over {yearsOfExperience} years of experience
              turning complex problems into elegant, user-friendly solutions. Currently leading front-end development
              at <motion.span
                className="text-violet-400 font-semibold"
                whileHover={{ scale: 1.05 }}
              >myPatientSpace</motion.span>, where I architect cutting-edge healthcare platforms
              serving hospitals and clinics worldwide.
            </motion.p>

            <motion.p
              className="text-lg md:text-xl text-gray-300 leading-relaxed"
              custom={1}
              variants={paragraphVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              My journey in web development is driven by a simple philosophy: <motion.span
                className="italic text-violet-300"
                animate={isInView ? {
                  textShadow: [
                    "0 0 0px rgba(139, 92, 246, 0)",
                    "0 0 10px rgba(139, 92, 246, 0.5)",
                    "0 0 0px rgba(139, 92, 246, 0)",
                  ],
                } : {}}
                transition={{ duration: 2, repeat: Infinity }}
              >write code that matters</motion.span>.
              I believe in creating applications that are not just functional, but delightful to use&mdash;combining clean code
              with beautiful design to deliver exceptional user experiences.
            </motion.p>

            <motion.p
              className="text-lg md:text-xl text-gray-300 leading-relaxed"
              custom={2}
              variants={paragraphVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              Whether it&apos;s building dynamic React applications, optimizing performance, or mentoring team members,
              I&apos;m committed to continuous learning and pushing the boundaries of what&apos;s possible on the web.
            </motion.p>
          </div>

          {/* Industry Experience */}
          <motion.div
            className="max-w-6xl mx-auto mt-16"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.6 }}
          >
            <motion.h3
              className="text-2xl md:text-3xl font-bold text-white mb-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
                Industry Experience
              </span>
            </motion.h3>

            <motion.p
              className="text-lg text-gray-300 text-center mb-10 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              Throughout my career, I&apos;ve had the privilege of building applications across diverse industries,
              each presenting unique challenges and opportunities for innovation.
            </motion.p>

            {/* Industry Cards Grid */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              {industries.map((industry, index) => (
                <motion.div
                  key={industry.title}
                  variants={cardVariants}
                  className="p-6 bg-gray-800/50 border border-gray-700 rounded-xl hover:border-violet-500/50 hover:bg-gray-800/70 transition-all duration-300 group backdrop-blur-sm cursor-default"
                >
                  <div className="flex flex-col items-center mb-4">
                    <div className="h-16 flex items-center justify-center gap-3 mb-4">
                      {industry.logos.map((logo, logoIndex) => (
                        <motion.div
                          key={logo.alt}
                          className="relative w-16 h-16"
                          initial={{ opacity: 0, scale: 0 }}
                          animate={isInView ? { opacity: 1, scale: 1 } : {}}
                          transition={{
                            delay: 0.9 + index * 0.1 + logoIndex * 0.05,
                            type: "spring" as const,
                            stiffness: 200,
                          }}
                          whileHover={{ scale: 1.15, rotate: 5 }}
                        >
                          <div className="absolute inset-0 bg-white/10 rounded-lg group-hover:bg-white/15 transition-all duration-300"></div>
                          <Image
                            src={logo.src}
                            alt={logo.alt}
                            fill
                            className="object-contain p-2 rounded-lg"
                          />
                        </motion.div>
                      ))}
                    </div>
                    <motion.h4
                      className="text-xl font-bold text-white group-hover:text-violet-400 transition-colors text-center"
                      whileHover={{ scale: 1.05 }}
                    >
                      {industry.title}
                    </motion.h4>
                  </div>
                  <p className="text-gray-400 leading-relaxed text-center">
                    {industry.description}
                  </p>

                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
