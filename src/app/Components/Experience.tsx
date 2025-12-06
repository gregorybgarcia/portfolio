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
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  return (
    <section
      className="relative w-full md:min-h-screen flex flex-col items-center justify-center py-12 md:py-20 bg-gradient-to-b from-black/80 via-black/80 to-black/80 z-10"
      id="experience"
    >
      <div className="max-w-7xl w-full px-4">
        {/* Header Section */}
        <motion.div
          ref={ref}
          className="text-center mb-8 md:mb-16"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <span className="px-4 py-2 bg-violet-900/50 border border-violet-700 rounded-full text-violet-300 text-sm font-semibold">
            CAREER JOURNEY
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mt-6 mb-6">
            Professional Experience
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A timeline of my professional growth, highlighting key roles and achievements
            in web development and software engineering.
          </p>
        </motion.div>

        {/* Timeline */}
        <Timeline lineColor="#7C3AED">
          {experiencesData.map((item, index) => {
            return <TimelineElement key={index} item={item} />;
          })}
        </Timeline>
      </div>
    </section>
  );
}
