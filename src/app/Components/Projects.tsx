"use client";
import SectionLabel from "./SectionLabel";
import { useAnimation, useInView, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";

// Card variants with smooth entrance
const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: (index % 3) * 0.06,
      ease: "easeOut" as const,
    },
  }),
};

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const mainControls = useAnimation();

  const projects = [
    {
      name: "myPatientSpace",
      icon: "/images/mypatientspace.png",
      description:
        "A leading Irish digital health company powering connected patient solutions for global health systems, providers and bio-pharma & med-tech companies.",
      url: "https://www.mypatientspace.com",
      tags: ["Front-End Lead", "React", "Healthcare"],
    },
    {
      name: "Incentiv.me",
      icon: "/images/incentiv.png",
      description:
        "Developed an ecosystem platform connecting businesses and socio-environmental projects through fiscal incentive laws, creating positive social impact.",
      url: "https://incentiv.me",
      tags: ["Full Stack", "Ruby on Rails", "React"],
    },
    {
      name: "Santander Getnet",
      icon: "/images/getnet.png",
      description:
        "Built innovative payment solutions for PagoNxt, Santander's global paytech business, providing integrated payment processing and financial services.",
      url: "https://www.santander.com/en/about-us/where-we-are/pagonxt",
      tags: ["Front-End", "React", "Financial"],
    },
    {
      name: "QYON",
      icon: "/images/qyon.jpg",
      description:
        "Developed AI-powered business management solutions integrating artificial intelligence across all enterprise processes and sectors.",
      url: "https://qyon.com/",
      tags: ["Front-End", "React", "AI/ML"],
    },
  ];

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  return (
    <section
      className="relative w-full md:min-h-screen flex flex-col items-center justify-center py-12 md:py-20 bg-gradient-to-b from-black/80 via-violet-900/10 to-black/80 z-10"
      id="projects"
    >
      <SectionLabel label="Featured work" index={2} />
      <div className="max-w-7xl w-full px-4">
        {/* Header Section */}
        <motion.div
          className="text-center mb-8 md:mb-16"
          initial="hidden"
          animate={mainControls}
        >
          {/* Floating badge */}
          <motion.span
            className="min-[1360px]:hidden inline-block px-4 py-2 bg-violet-900/50 border border-violet-700 rounded-full text-violet-300 text-sm font-semibold"
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
            FEATURED WORK
          </motion.span>

          {/* Title with reveal */}
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mt-6 mb-6 overflow-hidden pb-2"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.07 }}
          >
            <motion.span
              className="inline-block text-white"
              initial={{ y: 60, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{
                type: "spring" as const,
                stiffness: 100,
                damping: 12,
                delay: 0.1,
              }}
            >
              Recent Projects
            </motion.span>
          </motion.h2>

          <motion.p
            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.17, duration: 0.6 }}
          >
            A selection of companies and projects I&apos;ve contributed to, showcasing
            diverse technical challenges and solutions.
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="group h-full"
            >
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="cyber-card flex h-full flex-col p-6 backdrop-blur-sm"
              >
                {/* Logo and external-link hint */}
                <div className="mb-5 flex items-start justify-between">
                  <div className="relative h-12 w-12 overflow-hidden rounded-full bg-white ring-2 ring-gray-900">
                    <Image
                      className="object-cover"
                      fill
                      sizes="48px"
                      src={project.icon}
                      alt={project.name}
                    />
                  </div>
                  <ArrowTopRightOnSquareIcon className="h-5 w-5 text-gray-500 transition-colors duration-300 group-hover:text-violet-300" />
                </div>

                <h3 className="text-xl font-bold text-white transition-colors duration-300 group-hover:text-violet-300">
                  {project.name}
                </h3>
                <p className="mt-2 mb-5 flex-grow leading-relaxed text-gray-400">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="mt-auto flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-violet-700/50 bg-violet-900/30 px-3 py-1 text-xs font-semibold text-violet-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
