"use client";
import { useAnimation, useInView, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
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
      url: "https://www.qyon.com/en",
      tags: ["Front-End", "React", "AI/ML"],
    },
  ];

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    } else {
      mainControls.start("hidden");
    }
  }, [isInView, mainControls]);

  return (
    <section
      className="relative w-full min-h-screen flex flex-col items-center justify-center py-20 bg-gradient-to-b from-black/80 via-violet-900/10 to-black/80 z-10"
      id="projects"
    >
      <div className="max-w-7xl w-full px-4">
        {/* Header Section */}
        <motion.div
          className="text-center mb-16"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <span className="px-4 py-2 bg-violet-900/50 border border-violet-700 rounded-full text-violet-300 text-sm font-semibold">
            FEATURED WORK
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mt-6 mb-6">
            Recent Projects
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A selection of companies and projects I've contributed to, showcasing
            diverse technical challenges and solutions.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              ref={ref}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              animate={mainControls}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="group h-full"
            >
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col h-full bg-gray-800/50 border border-gray-700 rounded-2xl overflow-hidden hover:border-violet-500 hover:bg-gray-800/80 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-violet-900/50 hover:scale-105"
              >
                {/* Image Container */}
                <div className="relative h-64 bg-gray-700/30 flex items-center justify-center p-8">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/80"></div>
                  <div className="relative">
                    <div className="absolute inset-0 bg-violet-600/20 rounded-full blur-xl group-hover:bg-violet-600/30 transition-all duration-300"></div>
                    <Image
                      className="relative z-10 object-contain w-40 h-40 rounded-full border-2 border-violet-500/50 shadow-lg shadow-violet-900/30 group-hover:scale-110 group-hover:border-violet-400 transition-all duration-300"
                      width={160}
                      height={160}
                      src={project.icon}
                      alt={project.name}
                    />
                  </div>
                  <div className="absolute top-4 right-4 z-20">
                    <ArrowTopRightOnSquareIcon className="w-6 h-6 text-violet-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-violet-400 transition-colors">
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
