"use client";

import { VerticalTimeline } from "react-vertical-timeline-component";
import TimelineElement from "./TimelineElement";
import Image from "next/image";
import React from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { useRef, useEffect } from "react";

const experiencesData = [
  {
    date: "Apr 2024 - Present",
    icon: (
      <Image
        className="rounded-full"
        src="/images/mypatientspace.png"
        width={100}
        height={100}
        alt="myPatientSpace"
      />
    ),
    title: "Senior Front-End Developer (Lead)",
    location: "myPatientSpace - Dublin, Ireland",
    description:
      "Working as a lead Front-end specialist with the React stack, developing new features, implementing improvements, and solving bugs for a healthcare platform used by hospitals and clinics. Proficient with AI tools such as Claude code assistant, and similar technologies. My routine includes attending meetings, understanding the customer requirements, and collaborating with the team to find the best approach for each situation.",
    url: "https://www.mypatientspace.com/",
  },
  {
    date: "Jan 2022 - Dec 2023",
    icon: (
      <Image
        className="rounded-full"
        src="/images/dexian.png"
        width={100}
        height={100}
        alt="Dexian"
      />
    ),
    title: "Senior Front-End Developer",
    location: "DISYS - Americana/SP, Brazil",
    description:
      "Working at the external client Pagonxt (a global startup of Getnet) as a dedicated front-end developer specialized in React. I have been part of a squad focused on products for Mexico, where my routine involved bug resolution, development of new functionalities, attending meetings in Spanish with the Mexican client, coordinating and engaging in peer programming with junior and mid-level developers. This experience also provided me with a close understanding of the daily operations within a financial institution and allowed me to enhance my perception of security, project structure, and squads.",
    url: "https://dexian.com/",
  },
  {
    date: "Mar 2021 - Dec 2022",
    icon: (
      <Image
        className="rounded-full"
        src="/images/qyon.jpg"
        width={100}
        height={100}
        alt="QYON"
      />
    ),
    title: "Front-End Developer",
    location: "QYON Sistemas Inteligentes - Americana/SP, Brazil",
    description:
      "Planning and production of new company applications with a focus on accounting software, where I led the squad. Collaborated with the team, primarily using React with Redux, ContextAPI, Web Socket, PDF generation, chat functionality, internationalization, responsive layout design, and integration with external services, among others...",
    url: "https://www.qyon.com/",
  },
  {
    date: "May 2020 - Mar 2021",
    icon: (
      <Image
        className="rounded-full"
        src="/images/incentiv.png"
        width={100}
        height={100}
        alt="Incentiv.me"
      />
    ),
    title: "Full Stack Developer",
    location: "Incentiv.me - Florianópolis/SC, Brazil",
    description:
      "Responsible for planning, production, and maintenance of company applications. Developed using Ruby on Rails, Mithriljs, React, Node, Angular, Laravel, and PostgreSQL. Handled infrastructure demands, data security, payment gateways, integration with external services, compliance with LGPD (General Data Protection Law), and domain management.",
    url: "https://incentiv.me/",
  },
  {
    date: "Apr 2019 - May 2020",
    icon: (
      <Image
        className="rounded-full"
        src="/images/essystem.jpg"
        width={100}
        height={100}
        alt="Essystem"
      />
    ),
    title: "Javascript Developer JR / Infrastructure Technician",
    location: "Essystem Comercial Automation - Americana/SP, Brazil",
    description:
      "Infrastructure Leader and JS Developer. Provided in-person assistance and technical support for the system, as well as participated in application development.",
    url: "https://essystem.com.br/",
  },
];

export default function Experience() {
  const Timeline = VerticalTimeline as any;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  return (
    <section
      className="relative w-full md:min-h-screen flex flex-col items-center justify-center py-12 md:py-20 bg-gradient-to-b from-black/80 via-violet-900/10 to-black/80 z-10"
      id="experience"
    >
      <div className="max-w-7xl w-full px-4">
        {/* Header Section with enhanced animations */}
        <motion.div
          ref={ref}
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
            CAREER JOURNEY
          </motion.span>

          {/* Title with reveal animation */}
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-black text-white mt-6 mb-6 overflow-hidden"
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
              Professional Experience
            </motion.span>
          </motion.h2>

          <motion.p
            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            A timeline of my professional growth, highlighting key roles and achievements
            in web development and software engineering.
          </motion.p>

          {/* Animated line decoration */}
          <motion.div
            className="flex justify-center mt-8"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.6 }}
          >
            <motion.div
              className="h-1 bg-gradient-to-r from-transparent via-violet-500 to-transparent rounded-full"
              initial={{ width: 0 }}
              animate={isInView ? { width: 200 } : {}}
              transition={{ delay: 0.7, duration: 0.8, ease: "easeOut" }}
            />
          </motion.div>
        </motion.div>

        {/* Timeline with fade-in */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <Timeline lineColor="#7C3AED">
            {experiencesData.map((item, index) => {
              return <TimelineElement key={index} item={item} />;
            })}
          </Timeline>
        </motion.div>

        {/* Resume Button */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.2, duration: 0.5 }}
        >
          <motion.a
            href="https://docs.google.com/document/d/13rLcqKHyb-6Nfvwa9FEwfcQJxwiM6AUeV7qwM1mHv-s/edit"
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-flex items-center gap-3 px-8 py-4 bg-violet-900 text-white font-semibold rounded-lg shadow-lg shadow-violet-900/50 overflow-hidden group"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(139, 92, 246, 0.4)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Button shimmer */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.6 }}
            />
            <svg
              className="relative z-10 w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            <span className="relative z-10">View Full Resume</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
