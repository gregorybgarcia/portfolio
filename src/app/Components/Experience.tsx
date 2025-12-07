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
      "Leading front-end development for a cutting-edge healthcare platform serving hospitals and clinics worldwide. Architecting and implementing complex React-based solutions while leveraging the latest AI tools to accelerate development workflows. Driving technical excellence through feature development, performance optimization, and critical bug resolution. Collaborating directly with stakeholders to translate healthcare requirements into elegant, HIPAA-compliant solutions. Mentoring team members and establishing best practices for modern web development in a hybrid work environment.",
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
    location: "Dexian",
    description:
      "Working at the external client Pagonxt (a global startup of Getnet) as a dedicated front-end developer specialized in React. I have been part of a squad focused on products for Mexico, where my routine involved bug resolution, development of new functionalities, attending meetings in Spanish with the Mexican client, coordinating and engaging in peer programming with junior and mid-level developers. This experience also provided me with a close understanding of the daily operations within a financial institution and allowed me to enhance my perception of security, project structure, and squads.",
  },
  {
    date: "Mar 2021 - Dec 2021",
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
    location: "QYON Sistemas Inteligentes",
    description:
      "Planning and production of new company applications with a focus on accounting software, where I led the squad. Collaborated with the team, primarily using React with Redux, ContextAPI, Web Socket, PDF generation, chat functionality, internationalization, responsive layout design, and integration with external services, among others...",
  },
  {
    date: "Aug 2020 - Mar 2021",
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
    location: "Incentiv",
    description:
      "Responsible for planning, production, and maintenance of company applications. Developed using Ruby on Rails, Mithriljs, React, Node, Angular, Laravel, and PostgreSQL. Handled infrastructure demands, data security, payment gateways, integration with external services, compliance with LGPD (General Data Protection Law), and domain management.",
  },
  {
    date: "May 2019 - May 2020",
    icon: (
      <Image
        className="rounded-full"
        src="/images/essystem.jpg"
        width={100}
        height={100}
        alt="Essystem"
      />
    ),
    title: "Junior Full Stack Developer",
    location: "ESSystem",
    description:
      "Infrastructure Leader and JS Developer. Provided in-person assistance and technical support for the system, as well as participated in application development.",
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
      </div>
    </section>
  );
}
