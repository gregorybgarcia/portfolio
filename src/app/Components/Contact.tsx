"use client";
import { faLinkedin, faSquareGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  PhoneIcon,
  EnvelopeIcon,
  ChatBubbleLeftRightIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/24/outline";
import { useAnimation, useInView, motion } from "framer-motion";
import { useEffect, useRef } from "react";
import Footer from "./Footer";

export default function Contact() {
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
      className="relative w-full min-h-screen flex flex-col items-center justify-center py-20 bg-gradient-to-b from-black/80 via-black/80 to-black/80 z-10"
      id="contact"
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
            GET IN TOUCH
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mt-6 mb-6">
            Let&apos;s Work Together!
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            My inbox is always open. Whether you have a question, opportunity, or just want to say hi,
            I&apos;ll do my best to get back to you promptly!
          </p>
        </motion.div>

        {/* Contact Card */}
        <motion.div
          ref={ref}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-gray-800/50 border border-gray-700 rounded-2xl p-8 md:p-12 backdrop-blur-sm shadow-2xl">
            {/* Icon */}
            <div className="flex justify-center mb-8">
              <div className="p-6 bg-violet-900/30 rounded-full border-4 border-violet-700">
                <ChatBubbleLeftRightIcon className="h-16 w-16 text-violet-400" />
              </div>
            </div>

            <h3 className="text-3xl md:text-4xl font-bold text-white text-center mb-8">
              Get in Touch - Connect with Me
            </h3>

            {/* Contact Information */}
            <div className="space-y-6 mb-10">
              <motion.a
                href="tel:+353834329851"
                className="flex items-center gap-4 p-4 bg-gray-700/30 rounded-xl border border-gray-600 hover:border-violet-500 hover:bg-gray-700/50 transition-all duration-300 group"
                whileHover={{ scale: 1.02, x: 5 }}
              >
                <div className="p-3 bg-violet-900/30 rounded-lg">
                  <PhoneIcon className="h-6 w-6 text-violet-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-400 font-medium">Phone</p>
                  <p className="text-lg text-white font-semibold group-hover:text-violet-400 transition-colors">
                    +353 83 432 9851
                  </p>
                </div>
              </motion.a>

              <motion.a
                href="mailto:gregory.barros@hotmail.com"
                className="flex items-center gap-4 p-4 bg-gray-700/30 rounded-xl border border-gray-600 hover:border-violet-500 hover:bg-gray-700/50 transition-all duration-300 group"
                whileHover={{ scale: 1.02, x: 5 }}
              >
                <div className="p-3 bg-violet-900/30 rounded-lg">
                  <EnvelopeIcon className="h-6 w-6 text-violet-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-400 font-medium">Email</p>
                  <p className="text-lg text-white font-semibold group-hover:text-violet-400 transition-colors">
                    gregory.barros@hotmail.com
                  </p>
                </div>
              </motion.a>
            </div>

            {/* Social Links */}
            <div className="flex justify-center gap-4 mb-10">
              <motion.button
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/gregory-barros-garcia-4160b2157"
                  )
                }
                className="p-4 bg-gray-700/30 rounded-xl border border-gray-600 hover:border-violet-500 hover:bg-violet-900/30 transition-all duration-300"
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="text-violet-400 hover:text-violet-300"
                  fontSize={32}
                />
              </motion.button>
              <motion.button
                onClick={() => window.open("https://github.com/gregorybarros")}
                className="p-4 bg-gray-700/30 rounded-xl border border-gray-600 hover:border-violet-500 hover:bg-violet-900/30 transition-all duration-300"
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <FontAwesomeIcon
                  icon={faSquareGithub}
                  className="text-violet-400 hover:text-violet-300"
                  fontSize={32}
                />
              </motion.button>
            </div>

            {/* CTA Button */}
            <div className="flex justify-center">
              <motion.a
                href="mailto:gregory.barros@hotmail.com"
                className="inline-flex items-center gap-3 px-8 py-4 bg-violet-900 hover:bg-violet-700 text-white font-bold rounded-xl transition-all duration-300 shadow-lg shadow-violet-900/50 hover:shadow-violet-700/50"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-lg">Say Hello!</span>
                <PaperAirplaneIcon className="w-5 h-5" />
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <Footer />
    </section>
  );
}
