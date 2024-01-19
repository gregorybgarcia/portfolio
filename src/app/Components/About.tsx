"use client";
import { RocketLaunchIcon } from "@heroicons/react/24/outline";
import { useAnimation, useInView, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef } from "react";

export default function About() {
  const technologies = [
    {
      name: "HTML",
      src: "/images/html5.svg",
    },
    {
      name: "CSS",
      src: "/images/css3.svg",
    },
    {
      name: "Sass",
      src: "/images/sass.svg",
    },
    {
      name: "JavaScrip",
      src: "/images/javascript.svg",
    },
    {
      name: "TypeScript",
      src: "/images/typescript.svg",
    },
    {
      name: "React",
      src: "/images/react.svg",
    },
    {
      name: "NextJS",
      src: "/images/nextjs.svg",
    },
    {
      name: "TailwindCSS",
      src: "/images/tailwind.svg",
    },
    {
      name: "Material UI",
      src: "/images/materialui.svg",
    },
    {
      name: "Bootstrap",
      src: "/images/bootstrap.png",
    },
    {
      name: "NodeJS",
      src: "/images/nodejs.svg",
    },
    {
      name: "Figma",
      src: "/images/figma.svg",
    },
    {
      name: "Redux",
      src: "/images/redux.svg",
    },
    {
      name: "Jest",
      src: "/images/jest.svg",
    },
    {
      name: "Storybook",
      src: "/images/storybook.svg",
    },
    {
      name: "Git",
      src: "/images/git.svg",
    },
  ];

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
    <div className="bg-gray-900 z-10 flex-col w-full lg:h-screen 2xl:h-screen" id="about">
      <div className="h-2/4 bg-violet-900 flex items-center lg:pb-32 2xl:pb-32">
        <div className="mx-auto my-0 text-center p-8 lg:2xl:w-4/6 2xl:w-4/6">
          <h2 className="text-3xl font-bold mb-4 lg:mb-8 lg:text-4xl 2xl:mb-16 2xl:text-6xl">
            Hi, I’m Greg. Nice to meet you.
          </h2>

          <p className="text-1xl 2xl:text-2xl">
            I am a skilled programmer specialized in web development, working
            proficiently with ReactJS, NextJS, NodeJS and other JavaScript
            technologies. Focused on creating a efficient and maintainable code,
            ensuring the delivery of high-quality software products. Building
            dynamic, responsive, feature-rich, high-performance robust and
            scalable front-end applications.
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
        className="h-full bg-gray-100 w-6/6 mx-auto my-0 rounded-xl flex-col text-center text-gray-900 p-6 md:w-5/6 lg:h-4/6 lg:-mt-32 2xl:w-3/6 2xl:h-3/6 2xl:-mt-32"
      >
        <RocketLaunchIcon
          className="h-16 w-16 mx-auto my-0 mb-2 text-violet-900 font-bold"
          aria-hidden="true"
        />
        <h2 className="text-3xl font-bold mb-2 text-violet-900">
          Front-End Developer
        </h2>
        <p className="text-1xl text-violet-900 mb-4">
          Here are a few technologies I’ve been working with recently:
        </p>
        <div className="grid grid-cols-4 mt-8 lg:grid-cols-8 2xl:grid-cols-8">
          {technologies.map((tech) => (
            <div
              key={tech.name}
              title={tech.name}
              className="m-4 mb-10 flex-col w"
            >
              <Image
                className="mx-auto my-0"
                alt={tech.name}
                width="50"
                height="50"
                src={tech.src}
              />
              <p className="text-xs text-fun-gray font-bold mt-3">
                {tech.name}
              </p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
