"use client";
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
      delay: index * 0.1,
      ease: "easeOut" as const,
    },
  }),
};

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const mainControls = useAnimation();

  const projects = [
    {
      name: "myPatientSpace",
      icon: "/images/mypatientspace.png",
      description:
        "Leading front-end development for a cutting-edge healthcare platform serving hospitals and clinics worldwide with HIPAA-compliant solutions.",
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
      <div className="max-w-7xl w-full px-4">
        {/* Header Section */}
        <motion.div
          className="text-center mb-8 md:mb-16"
          initial="hidden"
          animate={mainControls}
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
            FEATURED WORK
          </motion.span>

          {/* Title with reveal */}
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-black text-white mt-6 mb-6 overflow-hidden pb-2"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.span
              className="inline-block"
              initial={{ y: 60, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{
                type: "spring" as const,
                stiffness: 100,
                damping: 12,
                delay: 0.3,
              }}
            >
              Recent Projects
            </motion.span>
          </motion.h2>

          <motion.p
            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            A selection of companies and projects I&apos;ve contributed to, showcasing
            diverse technical challenges and solutions.
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8"
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
                className="flex flex-col h-full bg-gray-800/50 border border-gray-700 rounded-2xl overflow-hidden cursor-pointer hover:border-violet-500/50 hover:bg-gray-800/70 transition-all duration-300"
              >
                {/* Image Container */}
                <div className="relative h-64 bg-gray-700/30 flex items-center justify-center p-8">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/80"></div>

                  {/* Project logo */}
                  <div className="relative">
                    <div className="absolute inset-0 bg-violet-600/20 rounded-full blur-xl opacity-50 group-hover:opacity-70 transition-opacity duration-300" />
                    <Image
                      className="relative z-10 object-contain w-40 h-40 rounded-full border-2 border-violet-500/50 shadow-lg shadow-violet-900/30 group-hover:scale-105 transition-transform duration-300"
                      width={160}
                      height={160}
                      src={project.icon}
                      alt={project.name}
                    />
                  </div>

                  {/* External link icon */}
                  <div className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ArrowTopRightOnSquareIcon className="w-6 h-6 text-violet-400" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-violet-400 transition-colors duration-300">
                    {project.name}
                  </h3>
                  <p className="text-gray-300 text-base leading-relaxed mb-4 flex-grow">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-violet-900/30 border border-violet-700/50 rounded-full text-violet-300 text-xs font-semibold"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
