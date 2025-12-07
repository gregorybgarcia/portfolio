"use client";
import { faLinkedin, faSquareGithub, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  PhoneIcon,
  EnvelopeIcon,
  ChatBubbleLeftRightIcon,
  ClipboardDocumentIcon,
  CheckIcon,
} from "@heroicons/react/24/outline";
import { useAnimation, useInView, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Footer from "./Footer";

// Container variants for staggered animations
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

// Contact card item variants
const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 15,
    },
  },
};

// Social button variants with rotation
const socialVariants = {
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

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const mainControls = useAnimation();
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const copyToClipboard = (text: string, type: "phone" | "email") => {
    navigator.clipboard.writeText(text);
    if (type === "phone") {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    } else {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    }
  };

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  return (
    <section
      className="relative w-full md:min-h-screen flex flex-col items-center justify-center py-12 md:py-20 bg-gradient-to-b from-black/80 via-gray-900/80 to-black/80 z-10"
      id="contact"
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
            GET IN TOUCH
          </motion.span>

          {/* Icon with pulse animation */}
          <motion.div
            className="flex justify-center mt-6"
            initial={{ opacity: 0, scale: 0 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{
              type: "spring" as const,
              stiffness: 200,
              damping: 15,
              delay: 0.2,
            }}
          >
            <motion.div
              className="relative p-4 md:p-6 bg-violet-900/30 rounded-full border-2 md:border-4 border-violet-700"
              animate={{
                boxShadow: [
                  "0 0 0 0 rgba(139, 92, 246, 0)",
                  "0 0 0 20px rgba(139, 92, 246, 0.1)",
                  "0 0 0 0 rgba(139, 92, 246, 0)",
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <motion.div
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <ChatBubbleLeftRightIcon className="h-12 w-12 md:h-16 md:w-16 text-violet-400" />
              </motion.div>
            </motion.div>
          </motion.div>

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
              Let&apos;s Work Together!
            </motion.span>
          </motion.h2>

          <motion.p
            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            My inbox is always open. Whether you have a question, opportunity, or just want to say hi,
            I&apos;ll do my best to get back to you promptly!
          </motion.p>
        </motion.div>

        {/* Contact Card with enhanced animations */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 60, scale: 0.95 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{
            type: "spring" as const,
            stiffness: 100,
            damping: 15,
            delay: 0.3,
          }}
          className="max-w-4xl mx-auto"
        >
          <motion.div
            className="relative bg-gray-800/50 border border-gray-700 rounded-2xl p-6 md:p-12 backdrop-blur-sm shadow-2xl overflow-hidden"
            whileHover={{
              borderColor: "rgba(139, 92, 246, 0.5)",
              boxShadow: "0 30px 60px rgba(139, 92, 246, 0.15)",
            }}
            transition={{ duration: 0.3 }}
          >
            {/* Animated background gradient */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-violet-600/5 via-transparent to-purple-600/5 pointer-events-none"
              animate={{
                backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
              }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            />

            <motion.h3
              className="text-2xl md:text-3xl lg:text-4xl font-bold text-white text-center mb-6 md:mb-8 px-2"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <motion.span
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{ duration: 5, repeat: Infinity }}
                style={{
                  backgroundImage: "linear-gradient(90deg, #ffffff, #c4b5fd, #a78bfa, #c4b5fd, #ffffff)",
                  backgroundSize: "200% 100%",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Get in Touch - Connect with Me
              </motion.span>
            </motion.h3>

            {/* Contact Information with staggered animation */}
            <motion.div
              className="space-y-4 md:space-y-6 mb-8 md:mb-10"
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              <motion.div
                className="relative flex items-center gap-3 md:gap-4 p-3 md:p-4 bg-gray-700/30 rounded-xl border border-gray-600 overflow-hidden group"
                variants={itemVariants}
                whileHover={{
                  borderColor: "rgb(139, 92, 246)",
                }}
              >
                <a
                  href="tel:+353834329851"
                  className="flex items-center gap-3 md:gap-4 flex-1 min-w-0"
                >
                  <motion.div
                    className="p-2 md:p-3 bg-violet-900/30 rounded-lg flex-shrink-0"
                    whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <PhoneIcon className="h-5 w-5 md:h-6 md:w-6 text-violet-400" />
                  </motion.div>
                  <div className="min-w-0">
                    <p className="text-xs md:text-sm text-gray-400 font-medium flex items-center gap-2">
                      Phone <FontAwesomeIcon icon={faWhatsapp} className="text-green-500" />
                    </p>
                    <p className="text-base md:text-lg text-white font-semibold group-hover:text-violet-400 transition-colors truncate">
                      +353 83 432 9851
                    </p>
                  </div>
                </a>
                <motion.button
                  onClick={() => copyToClipboard("+353834329851", "phone")}
                  className="p-2 rounded-lg bg-gray-600/50 hover:bg-violet-900/50 transition-colors flex-shrink-0 z-10"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  title="Copy phone number"
                >
                  {copiedPhone ? (
                    <CheckIcon className="h-5 w-5 text-green-500" />
                  ) : (
                    <ClipboardDocumentIcon className="h-5 w-5 text-gray-400 hover:text-violet-400" />
                  )}
                </motion.button>
                {/* Shimmer effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-violet-500/10 to-transparent pointer-events-none"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.5 }}
                />
              </motion.div>

              <motion.div
                className="relative flex items-center gap-3 md:gap-4 p-3 md:p-4 bg-gray-700/30 rounded-xl border border-gray-600 overflow-hidden group"
                variants={itemVariants}
                whileHover={{
                  borderColor: "rgb(139, 92, 246)",
                }}
              >
                <a
                  href="mailto:gregory.barros@hotmail.com"
                  className="flex items-center gap-3 md:gap-4 flex-1 min-w-0"
                >
                  <motion.div
                    className="p-2 md:p-3 bg-violet-900/30 rounded-lg flex-shrink-0"
                    whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <EnvelopeIcon className="h-5 w-5 md:h-6 md:w-6 text-violet-400" />
                  </motion.div>
                  <div className="min-w-0">
                    <p className="text-xs md:text-sm text-gray-400 font-medium">Email</p>
                    <p className="text-base md:text-lg text-white font-semibold group-hover:text-violet-400 transition-colors truncate">
                      gregory.barros@hotmail.com
                    </p>
                  </div>
                </a>
                <motion.button
                  onClick={() => copyToClipboard("gregory.barros@hotmail.com", "email")}
                  className="p-2 rounded-lg bg-gray-600/50 hover:bg-violet-900/50 transition-colors flex-shrink-0 z-10"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  title="Copy email address"
                >
                  {copiedEmail ? (
                    <CheckIcon className="h-5 w-5 text-green-500" />
                  ) : (
                    <ClipboardDocumentIcon className="h-5 w-5 text-gray-400 hover:text-violet-400" />
                  )}
                </motion.button>
                {/* Shimmer effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-violet-500/10 to-transparent pointer-events-none"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.5 }}
                />
              </motion.div>
            </motion.div>

            {/* Social Links and CTA Button in same row */}
            <motion.div
              className="flex justify-center items-center gap-3 md:gap-4"
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              <motion.button
                variants={socialVariants}
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/gregory-barros-garcia-4160b2157"
                  )
                }
                className="relative w-[52px] h-[52px] md:w-[60px] md:h-[60px] flex items-center justify-center bg-gray-700/30 rounded-xl border border-gray-600 overflow-hidden group"
                whileHover={{
                  scale: 1.1,
                  y: -5,
                  borderColor: "rgb(139, 92, 246)",
                  boxShadow: "0 10px 30px rgba(139, 92, 246, 0.3)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-violet-500/20 to-transparent"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.5 }}
                />
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="relative z-10 text-white group-hover:text-[#0A66C2] transition-colors"
                  fontSize={28}
                />
              </motion.button>

              <motion.button
                variants={socialVariants}
                onClick={() => window.open("https://github.com/gregorybgarcia")}
                className="relative w-[52px] h-[52px] md:w-[60px] md:h-[60px] flex items-center justify-center bg-gray-700/30 rounded-xl border border-gray-600 overflow-hidden group"
                whileHover={{
                  scale: 1.1,
                  y: -5,
                  borderColor: "rgb(139, 92, 246)",
                  boxShadow: "0 10px 30px rgba(139, 92, 246, 0.3)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-violet-500/20 to-transparent"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.5 }}
                />
                <FontAwesomeIcon
                  icon={faSquareGithub}
                  className="relative z-10 text-white group-hover:text-gray-300 transition-colors"
                  fontSize={28}
                />
              </motion.button>

              <motion.button
                variants={socialVariants}
                onClick={() => window.open("https://wa.me/353834329851")}
                className="relative w-[52px] h-[52px] md:w-[60px] md:h-[60px] flex items-center justify-center bg-gray-700/30 rounded-xl border border-gray-600 overflow-hidden group"
                whileHover={{
                  scale: 1.1,
                  y: -5,
                  borderColor: "rgb(34, 197, 94)",
                  boxShadow: "0 10px 30px rgba(34, 197, 94, 0.3)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-green-500/20 to-transparent"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.5 }}
                />
                <FontAwesomeIcon
                  icon={faWhatsapp}
                  className="relative z-10 text-green-500 group-hover:text-green-400 transition-colors"
                  fontSize={28}
                />
              </motion.button>

              <motion.a
                variants={socialVariants}
                href="mailto:gregory.barros@hotmail.com"
                className="relative h-[52px] md:h-[60px] flex items-center gap-2 px-4 bg-gray-700/30 rounded-xl border border-gray-600 overflow-hidden group"
                animate={{
                  rotate: [0, -5, 5, -5, 5, -3, 3, 0],
                }}
                transition={{
                  rotate: {
                    duration: 0.5,
                    repeat: Infinity,
                    repeatDelay: 4,
                    ease: "easeInOut",
                  },
                }}
                whileHover={{
                  scale: 1.1,
                  y: -5,
                  borderColor: "rgb(139, 92, 246)",
                  boxShadow: "0 10px 30px rgba(139, 92, 246, 0.3)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-violet-500/20 to-transparent"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.5 }}
                />
                <span className="relative z-10 text-violet-400 group-hover:text-violet-300 font-bold text-sm md:text-base whitespace-nowrap transition-colors">Say Hello!</span>
                <span className="relative z-10 text-[22px] md:text-[26px] leading-none">👋</span>
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Footer */}
      <Footer />
    </section>
  );
}
