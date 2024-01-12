"use client"
import { RocketLaunchIcon } from "@heroicons/react/24/outline";
import { useAnimation, useInView, motion } from "framer-motion";
import { useEffect, useRef } from "react";

export default function About() {
  const technologies = [
    {
      name: "HTML",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },
    {
      name: "CSS",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    },
    {
      name: "Sass",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg",
    },
    {
      name: "JavaScrip",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      name: "TypeScript",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    },
    {
      name: "React",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "NextJS",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg",
    },
    {
      name: "TailwindCSS",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
    },
    {
      name: "Material UI",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg",
    },
    {
      name: "Bootstrap",
      src: "https://brandlogos.net/wp-content/uploads/2021/09/bootstrap-logo.png",
    },
    {
      name: "NodeJS",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    },
    {
      name: "Figma",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
    },
    {
      name: "Redux",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
    },
    {
      name: "Jest",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg",
    },
    {
      name: "Storybook",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/storybook/storybook-original.svg",
    },
    {
      name: "Git",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    },
  ];

  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  const mainControls = useAnimation();

  useEffect(() => {
    console.log(isInView);
    if (isInView) {
      mainControls.start("visible");
    } else {
      mainControls.start("hidden");
    }
  }, [isInView]);

  return (
    <div
      className="bg-gray-800 z-10 flex-col h-screen w-full"
      id="about"
    >
      <div className="h-2/4 bg-violet-900 flex items-center">
        <div className="w-3/6 mx-auto my-0 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Hi, I’m Greg. Nice to meet you.
          </h2>

          <p className="text-2xl">
            I am a skilled programmer specialized in web development, working
            proficiently with ReactJS, NextJS, NodeJS and other JavaScript
            technologies. focused on creating a efficient and maintainable code,
            ensuring the delivery of high-quality software products. building
            dynamic, responsive, feature-rich, high-performance front-end
            applications and robust and scalable backend solutions.
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
        transition={{ duration: 0.5, delay: 0.10 }}
        className="h-2/4 bg-gray-100 w-3/6 mx-auto my-0 -mt-16 rounded flex-col text-center text-gray-800 p-6 block"
      >
        <RocketLaunchIcon
          className="h-16 w-16 mx-auto my-0 mb-2 text-violet-900 font-bold"
          aria-hidden="true"
        />
        <h2 className="text-4xl font-bold mb-2 text-violet-900">
          Front-End Developer
        </h2>
        <p className="text-2xl text-violet-900 mb-4">
          Here are a few technologies I’ve been working with recently:
        </p>
        <div className="flex flex-wrap mt-8">
          {technologies.map((tech) => (
            <div key={tech.name} title="HTML" className="m-4 mb-10 flex-col">
              <img
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
