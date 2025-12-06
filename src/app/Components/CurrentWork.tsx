"use client";

import { motion, useInView, useAnimation } from "framer-motion";
import { useRef, useEffect } from "react";
import Image from "next/image";
import {
  CodeBracketIcon,
  SparklesIcon,
  UserGroupIcon,
  RocketLaunchIcon,
  ShieldCheckIcon,
  GlobeAltIcon
} from "@heroicons/react/24/outline";

export default function CurrentWork() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  const mainControls = useAnimation();

  // Format current date range (April 2024 - Present)
  const startDate = "April 2024";
  const currentDateRange = `${startDate} - Present`;

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    } else {
      mainControls.start("hidden");
    }
  }, [isInView, mainControls]);

  const highlights = [
    {
      icon: <CodeBracketIcon className="w-8 h-8" />,
      title: "React Architecture",
      description: "Leading complex React development with modern hooks, state management, and performance optimization"
    },
    {
      icon: <SparklesIcon className="w-8 h-8" />,
      title: "AI-Powered Development",
      description: "Leveraging cutting-edge AI tools including Claude, ChatGPT, Copilot, and more to accelerate development workflows"
    },
    {
      icon: <ShieldCheckIcon className="w-8 h-8" />,
      title: "Healthcare Compliance",
      description: "Building HIPAA-compliant solutions for hospitals and clinics worldwide"
    },
    {
      icon: <UserGroupIcon className="w-8 h-8" />,
      title: "Team Leadership",
      description: "Mentoring developers and establishing best practices for modern web development"
    },
    {
      icon: <RocketLaunchIcon className="w-8 h-8" />,
      title: "Feature Development",
      description: "Driving technical excellence through new features and performance improvements"
    },
    {
      icon: <GlobeAltIcon className="w-8 h-8" />,
      title: "Multilanguage Platform",
      description: "Building a global healthcare solution supporting multiple languages for international users"
    }
  ];

  return (
    <section
      ref={ref}
      className="relative w-full min-h-screen flex flex-col items-center justify-center px-4 py-20 bg-gradient-to-b from-black/80 via-gray-900/80 to-black/80 z-10"
      id="current-work"
    >
      <motion.div
        className="max-w-6xl w-full"
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        {/* Badge */}
        <motion.div
          className="flex justify-center mb-6"
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <span className="px-4 py-2 bg-violet-900/50 border border-violet-700 rounded-full text-violet-300 text-sm font-semibold">
            CURRENTLY WORKING AT
          </span>
        </motion.div>

        {/* Company Header */}
        <div className="text-center mb-12">
          <motion.div
            className="flex justify-center mb-6"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="relative w-40 h-40">
              <Image
                src="/images/mypatientspace.png"
                alt="myPatientSpace"
                width={160}
                height={160}
                className="w-full h-full object-contain drop-shadow-2xl rounded-full"
              />
            </div>
          </motion.div>

          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            myPatientSpace
          </motion.h2>

          <motion.p
            className="text-xl md:text-2xl text-violet-400 font-semibold mb-2"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            Senior Front-End Developer (Lead)
          </motion.p>

          <motion.p
            className="text-gray-400 text-lg mb-8"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            Dublin, Ireland • {currentDateRange} • Hybrid
          </motion.p>

          <motion.p
            className="text-gray-300 text-lg max-w-4xl mx-auto leading-relaxed"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            Leading front-end development for a cutting-edge multilanguage healthcare platform that empowers
            hospitals and clinics worldwide to deliver exceptional patient care. Architecting
            robust React solutions while pioneering the integration of the latest AI tools to revolutionize
            development processes.
          </motion.p>
        </div>

        {/* Highlights Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 0.5, delay: 0.9 }}
        >
          {highlights.map((highlight, index) => (
            <motion.div
              key={index}
              className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 hover:border-violet-700 hover:bg-gray-800/80 transition-all duration-300 group"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              animate={mainControls}
              transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
            >
              <div className="text-violet-400 mb-4 group-hover:text-violet-300 transition-colors">
                {highlight.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-violet-300 transition-colors">
                {highlight.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {highlight.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 0.5, delay: 1.5 }}
        >
          <a
            href="https://mypatientspace.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-violet-900 hover:bg-violet-700 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg shadow-violet-900/50 hover:shadow-violet-700/50 hover:scale-105"
          >
            <span>Learn About myPatientSpace</span>
            <GlobeAltIcon className="w-5 h-5" />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
