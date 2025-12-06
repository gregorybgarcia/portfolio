"use client";
import { RocketLaunchIcon } from "@heroicons/react/24/outline";
import { useAnimation, useInView, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef } from "react";

export default function About() {
  const technologies = [
    {
      name: "HTML",
      src: "/images/html5.svg",
    },
    {
      name: "CSS",
      src: "/images/css3.svg",
    },
    {
      name: "Sass",
      src: "/images/sass.svg",
    },
    {
      name: "JavaScript",
      src: "/images/javascript.svg",
    },
    {
      name: "TypeScript",
      src: "/images/typescript.svg",
    },
    {
      name: "React",
      src: "/images/react.svg",
    },
    {
      name: "NextJS",
      src: "/images/nextjs.svg",
    },
    {
      name: "TailwindCSS",
      src: "/images/tailwind.svg",
    },
    {
      name: "Material UI",
      src: "/images/materialui.svg",
    },
    {
      name: "Bootstrap",
      src: "/images/bootstrap.png",
    },
    {
      name: "NodeJS",
      src: "/images/nodejs.svg",
    },
    {
      name: "Figma",
      src: "/images/figma.svg",
    },
    {
      name: "Redux",
      src: "/images/redux.svg",
    },
    {
      name: "Jest",
      src: "/images/jest.svg",
    },
    {
      name: "Storybook",
      src: "/images/storybook.svg",
    },
    {
      name: "Git",
      src: "/images/git.svg",
    },
  ];

  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  const mainControls = useAnimation();

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
      id="about"
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
            ABOUT ME
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mt-6 mb-6">
            Hi, I'm Greg. Nice to meet you.
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            I am a skilled programmer specialized in web development, working
            proficiently with ReactJS, NextJS, NodeJS and other JavaScript
            technologies. Focused on creating efficient and maintainable code,
            ensuring the delivery of high-quality software products. Building
            dynamic, responsive, feature-rich, high-performance robust and
            scalable front-end applications.
          </p>
        </motion.div>

        {/* Tech Stack Card */}
        <motion.div
          ref={ref}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-gray-800/50 border border-gray-700 rounded-2xl p-8 md:p-12 backdrop-blur-sm shadow-2xl"
        >
          <div className="flex flex-col items-center mb-10">
            <div className="p-4 bg-violet-900/30 rounded-full mb-4">
              <RocketLaunchIcon
                className="h-12 w-12 text-violet-400"
                aria-hidden="true"
              />
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-3">
              Front-End Developer
            </h3>
            <p className="text-lg md:text-xl text-violet-400 font-medium">
              Technologies I work with regularly
            </p>
          </div>

          {/* Technologies Grid */}
          <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-6 md:gap-8">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                title={tech.name}
                className="flex flex-col items-center group cursor-pointer"
                variants={{
                  hidden: { opacity: 0, scale: 0.8 },
                  visible: { opacity: 1, scale: 1 },
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.05 }}
                whileHover={{ scale: 1.1, y: -5 }}
              >
                <div className="relative p-4 bg-gray-700/30 rounded-xl border border-gray-600 group-hover:border-violet-500 group-hover:bg-gray-700/50 transition-all duration-300 w-full aspect-square flex items-center justify-center">
                  <Image
                    alt={tech.name}
                    width={50}
                    height={50}
                    src={tech.src}
                    className="w-12 h-12 object-contain"
                  />
                </div>
                <p className="text-xs md:text-sm text-gray-300 font-semibold mt-3 text-center group-hover:text-violet-400 transition-colors">
                  {tech.name}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
