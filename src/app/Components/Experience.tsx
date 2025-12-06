"use client";

import { VerticalTimeline } from "react-vertical-timeline-component";
import TimelineElement from "./TimelineElement";
import { RocketLaunchIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import React from "react";

const experiencesData = [
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
  return (
    <section
      className="my-20 flex w-full scroll-mt-28 flex-col items-center justify-center gap-10"
      id="experience"
    >
      <Timeline lineColor="#F3F4F6">
        {experiencesData.map((item, index) => {
          return <TimelineElement key={index} item={item} />;
        })}
      </Timeline>
    </section>
  );
}
