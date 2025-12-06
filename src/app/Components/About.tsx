"use client";
import { useAnimation, useInView, motion } from "framer-motion";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { getTotalYearsOfExperience } from "../utils/dateUtils";

export default function About() {

  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  const mainControls = useAnimation();
  const yearsOfExperience = getTotalYearsOfExperience();

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
          ref={ref}
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
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mt-6 mb-6">
            <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
              Hi, I&apos;m Greg. Nice to meet you.
            </span>
          </h2>
          <div className="max-w-4xl mx-auto space-y-6">
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              I&apos;m a passionate <span className="text-violet-400 font-semibold">Senior Front-End Developer</span> with over {yearsOfExperience} years of experience
              turning complex problems into elegant, user-friendly solutions. Currently leading front-end development
              at <span className="text-violet-400 font-semibold">myPatientSpace</span>, where I architect cutting-edge healthcare platforms
              serving hospitals and clinics worldwide.
            </p>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              My journey in web development is driven by a simple philosophy: <span className="italic text-violet-300">write code that matters</span>.
              I believe in creating applications that are not just functional, but delightful to use&mdash;combining clean code
              with beautiful design to deliver exceptional user experiences.
            </p>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              Whether it&apos;s building dynamic React applications, optimizing performance, or mentoring team members,
              I&apos;m committed to continuous learning and pushing the boundaries of what&apos;s possible on the web.
            </p>
          </div>

          {/* Industry Experience */}
          <div className="max-w-6xl mx-auto mt-16">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
              <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
                Industry Experience
              </span>
            </h3>
            <p className="text-lg text-gray-300 text-center mb-10 max-w-3xl mx-auto">
              Throughout my career, I've had the privilege of building applications across diverse industries,
              each presenting unique challenges and opportunities for innovation.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Healthcare */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, scale: 0.9 },
                  visible: { opacity: 1, scale: 1 },
                }}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="p-6 bg-gradient-to-br from-gray-800/60 to-gray-900/60 border border-gray-700 rounded-xl hover:border-violet-500 hover:shadow-lg hover:shadow-violet-900/30 transition-all duration-300 group"
              >
                <div className="flex flex-col items-center mb-4">
                  <div className="h-16 flex items-center justify-center gap-3 mb-4">
                    <div className="relative w-16 h-16">
                      <div className="absolute inset-0 bg-white/10 rounded-lg group-hover:bg-white/15 transition-all duration-300"></div>
                      <Image
                        src="/images/mypatientspace.png"
                        alt="myPatientSpace"
                        fill
                        className="object-contain p-2 rounded-lg"
                      />
                    </div>
                  </div>
                  <h4 className="text-xl font-bold text-white group-hover:text-violet-400 transition-colors text-center">
                    Healthcare
                  </h4>
                </div>
                <p className="text-gray-400 leading-relaxed text-center">
                  Patient management systems, medical scheduling platforms, and healthcare data visualization tools.
                </p>
              </motion.div>

              {/* Payments */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, scale: 0.9 },
                  visible: { opacity: 1, scale: 1 },
                }}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                transition={{ duration: 0.4, delay: 0.4 }}
                className="p-6 bg-gradient-to-br from-gray-800/60 to-gray-900/60 border border-gray-700 rounded-xl hover:border-violet-500 hover:shadow-lg hover:shadow-violet-900/30 transition-all duration-300 group"
              >
                <div className="flex flex-col items-center mb-4">
                  <div className="h-16 flex items-center justify-center gap-3 mb-4">
                    <div className="relative w-16 h-16">
                      <div className="absolute inset-0 bg-white/10 rounded-lg group-hover:bg-white/15 transition-all duration-300"></div>
                      <Image
                        src="/images/dexian.png"
                        alt="Dexian"
                        fill
                        className="object-contain p-2 rounded-lg"
                      />
                    </div>
                    <div className="relative w-16 h-16">
                      <div className="absolute inset-0 bg-white/10 rounded-lg group-hover:bg-white/15 transition-all duration-300"></div>
                      <Image
                        src="/images/getnet.png"
                        alt="Getnet"
                        fill
                        className="object-contain p-2 rounded-lg"
                      />
                    </div>
                  </div>
                  <h4 className="text-xl font-bold text-white group-hover:text-violet-400 transition-colors text-center">
                    Payment Solutions
                  </h4>
                </div>
                <p className="text-gray-400 leading-relaxed text-center">
                  Secure payment gateways, transaction processing systems, and fintech applications with PCI compliance.
                </p>
              </motion.div>

              {/* Social Platform */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, scale: 0.9 },
                  visible: { opacity: 1, scale: 1 },
                }}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                transition={{ duration: 0.4, delay: 0.5 }}
                className="p-6 bg-gradient-to-br from-gray-800/60 to-gray-900/60 border border-gray-700 rounded-xl hover:border-violet-500 hover:shadow-lg hover:shadow-violet-900/30 transition-all duration-300 group"
              >
                <div className="flex flex-col items-center mb-4">
                  <div className="h-16 flex items-center justify-center gap-3 mb-4">
                    <div className="relative w-16 h-16">
                      <div className="absolute inset-0 bg-white/10 rounded-lg group-hover:bg-white/15 transition-all duration-300"></div>
                      <Image
                        src="/images/incentiv.png"
                        alt="Incentiv"
                        fill
                        className="object-contain p-2 rounded-lg"
                      />
                    </div>
                  </div>
                  <h4 className="text-xl font-bold text-white group-hover:text-violet-400 transition-colors text-center">
                    Social Platforms
                  </h4>
                </div>
                <p className="text-gray-400 leading-relaxed text-center">
                  Project collaboration platforms, social networking features, and community engagement tools.
                </p>
              </motion.div>

              {/* Accounting */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, scale: 0.9 },
                  visible: { opacity: 1, scale: 1 },
                }}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                transition={{ duration: 0.4, delay: 0.6 }}
                className="p-6 bg-gradient-to-br from-gray-800/60 to-gray-900/60 border border-gray-700 rounded-xl hover:border-violet-500 hover:shadow-lg hover:shadow-violet-900/30 transition-all duration-300 group"
              >
                <div className="flex flex-col items-center mb-4">
                  <div className="h-16 flex items-center justify-center gap-3 mb-4">
                    <div className="relative w-16 h-16">
                      <div className="absolute inset-0 bg-white/10 rounded-lg group-hover:bg-white/15 transition-all duration-300"></div>
                      <Image
                        src="/images/qyon.jpg"
                        alt="QYON"
                        fill
                        className="object-contain p-2 rounded-lg"
                      />
                    </div>
                  </div>
                  <h4 className="text-xl font-bold text-white group-hover:text-violet-400 transition-colors text-center">
                    Accounting
                  </h4>
                </div>
                <p className="text-gray-400 leading-relaxed text-center">
                  Financial management systems, bookkeeping applications, and automated accounting workflows.
                </p>
              </motion.div>

              {/* Tax */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, scale: 0.9 },
                  visible: { opacity: 1, scale: 1 },
                }}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                transition={{ duration: 0.4, delay: 0.7 }}
                className="p-6 bg-gradient-to-br from-gray-800/60 to-gray-900/60 border border-gray-700 rounded-xl hover:border-violet-500 hover:shadow-lg hover:shadow-violet-900/30 transition-all duration-300 group"
              >
                <div className="flex flex-col items-center mb-4">
                  <div className="h-16 flex items-center justify-center gap-3 mb-4">
                    <div className="relative w-16 h-16">
                      <div className="absolute inset-0 bg-white/10 rounded-lg group-hover:bg-white/15 transition-all duration-300"></div>
                      <Image
                        src="/images/essystem.jpg"
                        alt="ESSystem"
                        fill
                        className="object-contain p-2 rounded-lg"
                      />
                    </div>
                    <div className="relative w-16 h-16">
                      <div className="absolute inset-0 bg-white/10 rounded-lg group-hover:bg-white/15 transition-all duration-300"></div>
                      <Image
                        src="/images/qyon.jpg"
                        alt="QYON"
                        fill
                        className="object-contain p-2 rounded-lg"
                      />
                    </div>
                  </div>
                  <h4 className="text-xl font-bold text-white group-hover:text-violet-400 transition-colors text-center">
                    Tax Management
                  </h4>
                </div>
                <p className="text-gray-400 leading-relaxed text-center">
                  Tax calculation engines, compliance reporting tools, and automated tax filing systems.
                </p>
              </motion.div>

              {/* Payroll */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, scale: 0.9 },
                  visible: { opacity: 1, scale: 1 },
                }}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                transition={{ duration: 0.4, delay: 0.8 }}
                className="p-6 bg-gradient-to-br from-gray-800/60 to-gray-900/60 border border-gray-700 rounded-xl hover:border-violet-500 hover:shadow-lg hover:shadow-violet-900/30 transition-all duration-300 group"
              >
                <div className="flex flex-col items-center mb-4">
                  <div className="h-16 flex items-center justify-center gap-3 mb-4">
                    <div className="relative w-16 h-16">
                      <div className="absolute inset-0 bg-white/10 rounded-lg group-hover:bg-white/15 transition-all duration-300"></div>
                      <Image
                        src="/images/qyon.jpg"
                        alt="QYON"
                        fill
                        className="object-contain p-2 rounded-lg"
                      />
                    </div>
                  </div>
                  <h4 className="text-xl font-bold text-white group-hover:text-violet-400 transition-colors text-center">
                    Payroll Systems
                  </h4>
                </div>
                <p className="text-gray-400 leading-relaxed text-center">
                  Employee payroll processing, time tracking integration, and benefits administration platforms.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
