"use client";
import { useAnimation, useInView, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef } from "react";

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  const mainControls = useAnimation();
  const companyCardStyle =
    "p-4 hover:bg-gray-300 hover:rounded-md hover:cursor-pointer ease-in duration-300";
  const companies = [
    {
      name: "Incentiv.me",
      icon: "/images/incentiv.png",
      description:
        "Incentiv is a company that operates an ecosystem of solutions aimed at creating positive social impact by connecting businesses, individuals, and socio-environmental projects through fiscal incentive laws.",
      url: "https://incentiv.me",
    },
    {
      name: "Santander Getnet",
      icon: "/images/getnet.png",
      description:
        "Working for Dexian (formerly Dysis), I was assigned to work at Pagonxt. PagoNxt is a one of a kind paytech business providing customers with a one-stop shop for innovative payments and integrated solutions.",
      url: "https://www.santander.com/en/about-us/where-we-are/pagonxt",
    },
    {
      name: "QYON",
      icon: "/images/qyon.jpg",
      description:
        "Qyon is a company with advanced expertise in software technologies with the application of artificial intelligence in business management, designed to oversee and integrate all the processes and sectors that constitute your enterprise.",
      url: "https://www.qyon.com/en",
    },
  ];

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    } else {
      mainControls.start("hidden");
    }
  }, [isInView, mainControls]);

  return (
    <div
      className="bg-violet-900 z-10 flex-col w-full xl:h-screen"
      id="projects"
    >
      <div className="bg-gray-900 flex items-center p-6 xl:h-2/4 xl:pb-44">
        <div className="mx-auto my-0 text-center">
          <h2 className="text-4xl font-bold mb-6 xl:text-6xl">
            My Recent Work
          </h2>

          <p className="text-2xl xl:text-4xl">
            {"Here are a few past design projects I've worked on."}
          </p>
        </div>
      </div>
      <motion.div
        ref={ref}
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial={"hidden"}
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="bg-gray-100 mx-auto my-0 rounded-xl text-center text-gray-900 p-6 grid grid-cols-1 text-center xl:w-4/6 xl:grid-cols-3 xl:-mt-44"
      >
        {companies.map((company) => (
          <div
            key={company.name}
            className={companyCardStyle}
            onClick={() => window.open(company.url)}
          >
            <Image
              className="rounded-xl mx-auto my-0"
              width="160"
              height="160"
              src={company.icon}
              alt={company.name}
            />
            <h4 className="text-2xl font-semibold h-16 mt-2">{company.name}</h4>
            <p>{company.description}</p>
          </div>
        ))}
      </motion.div>
      <p className="font-bold text-6xl p-6 text-center xl:mt-6">
        {"Let's work together!"}
      </p>
    </div>
  );
}
