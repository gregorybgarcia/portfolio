"use client";
import { ReactTyped } from "react-typed";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faSquareGithub } from "@fortawesome/free-brands-svg-icons";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

export default function Presentation() {
  const scrollTo = (page: string) => {
    const element = document.getElementById(page);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="relative w-full min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-black/80 via-gray-900/80 to-black/80 py-12 md:py-20 pt-20 md:pt-24 z-10"
      id="home"
    >
      <div className="max-w-7xl w-full px-4 z-10">
        <div className="flex flex-col items-center text-center">
          {/* Profile Image with Glow Effect */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative mb-8"
          >
            <div className="absolute inset-0 bg-violet-600/30 rounded-full blur-3xl"></div>
            <Image
              className="relative rounded-full border-4 border-violet-500 shadow-2xl shadow-violet-900/50"
              src="/images/profile.jpeg"
              alt="Gregory Garcia"
              height={240}
              width={240}
              priority
            />
          </motion.div>

          {/* Name and Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <h1
              className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 tracking-tight"
              suppressHydrationWarning
            >
              Gregory Garcia
            </h1>
            <div className="inline-block px-6 py-3 bg-violet-900/50 border border-violet-700 rounded-full mb-6">
              <span className="text-violet-300 text-lg md:text-xl font-semibold">
                Senior Front-End Developer (Lead)
              </span>
            </div>
            <h2
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
            </h2>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-10 flex justify-center gap-4"
          >
            <motion.button
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/gregory-barros-garcia-4160b2157"
                )
              }
              className="p-4 bg-gray-800/50 border border-gray-700 rounded-xl hover:border-violet-500 hover:bg-violet-900/30 transition-all duration-300"
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                className="text-violet-400 hover:text-violet-300"
                fontSize={40}
              />
            </motion.button>
            <motion.button
              onClick={() => window.open("https://github.com/gregorybarros")}
              className="p-4 bg-gray-800/50 border border-gray-700 rounded-xl hover:border-violet-500 hover:bg-violet-900/30 transition-all duration-300"
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <FontAwesomeIcon
                icon={faSquareGithub}
                className="text-violet-400 hover:text-violet-300"
                fontSize={40}
              />
            </motion.button>
          </motion.div>

          {/* CTA Button */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            onClick={() => scrollTo("about")}
            className="px-10 py-4 bg-violet-900 hover:bg-violet-700 text-white text-lg font-bold rounded-xl transition-all duration-300 shadow-lg shadow-violet-900/50 hover:shadow-violet-700/50"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore My Work
          </motion.button>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="flex flex-col items-center gap-2"
            >
              <span className="text-gray-400 text-sm font-medium">Scroll Down</span>
              <ChevronDownIcon className="w-6 h-6 text-violet-400" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
