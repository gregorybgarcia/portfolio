"use client";
import { useAnimation, useInView, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { calculateYearsOfExperience } from "../utils/dateUtils";

interface Skill {
  name: string;
  src: string;
  proficiency: number; // 0-100
  years: number;
  category: string;
  url: string;
}

function SkillCard({ skill, index }: { skill: Skill; index: number }) {
  const [isHovered, setIsHovered] = useState(false);
  const mainControls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1 },
      }}
      initial="hidden"
      animate={mainControls}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <a
        href={skill.url}
        target="_blank"
        rel="noopener noreferrer"
        className="block relative p-6 bg-gray-800/50 border border-gray-700 rounded-xl hover:border-violet-500/50 hover:bg-gray-800/70 transition-all duration-300 cursor-pointer backdrop-blur-sm"
      >
        <div className="flex flex-col items-center">
          <div className={`relative mb-4 p-3 rounded-full ${skill.name === 'NextJS' ? 'bg-white' : ''}`}>
            <div className="absolute inset-0 bg-violet-600/20 rounded-full blur-xl group-hover:bg-violet-600/30 transition-all duration-300"></div>
            <Image
              alt={skill.name}
              width={60}
              height={60}
              src={skill.src}
              className="relative z-10 w-16 h-16 object-contain"
            />
          </div>

          <h3 className="text-lg font-bold text-white mb-3 group-hover:text-violet-400 transition-colors">
            {skill.name}
          </h3>

          <p className="text-sm text-gray-400">
            {skill.years} {skill.years === 1 ? 'year' : 'years'} experience
          </p>
        </div>

        {/* Tooltip on hover */}
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-violet-900 text-white px-3 py-2 rounded-lg text-xs font-semibold whitespace-nowrap z-20 shadow-lg"
          >
            {skill.category}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 rotate-45 w-2 h-2 bg-violet-900"></div>
          </motion.div>
        )}
      </a>
    </motion.div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  const skills: Skill[] = [
    { name: "React", src: "/images/react.svg", proficiency: 95, years: calculateYearsOfExperience('2018-01-01'), category: "Frontend Framework", url: "https://react.dev/" },
    { name: "TypeScript", src: "/images/typescript.svg", proficiency: 90, years: calculateYearsOfExperience('2020-01-01'), category: "Programming Language", url: "https://www.typescriptlang.org/" },
    { name: "JavaScript", src: "/images/javascript.svg", proficiency: 95, years: calculateYearsOfExperience('2018-01-01'), category: "Programming Language", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
    { name: "NextJS", src: "/images/nextjs.svg", proficiency: 90, years: calculateYearsOfExperience('2021-01-01'), category: "Frontend Framework", url: "https://nextjs.org/" },
    { name: "NodeJS", src: "/images/nodejs.svg", proficiency: 85, years: calculateYearsOfExperience('2018-01-01'), category: "Backend Runtime", url: "https://nodejs.org/" },
    { name: "TailwindCSS", src: "/images/tailwind.svg", proficiency: 95, years: calculateYearsOfExperience('2022-01-01'), category: "CSS Framework", url: "https://tailwindcss.com/" },
    { name: "HTML", src: "/images/html5.svg", proficiency: 100, years: calculateYearsOfExperience('2018-01-01'), category: "Markup Language", url: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
    { name: "CSS", src: "/images/css3.svg", proficiency: 95, years: calculateYearsOfExperience('2018-01-01'), category: "Styling", url: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
    { name: "Sass", src: "/images/sass.svg", proficiency: 85, years: calculateYearsOfExperience('2021-01-01'), category: "CSS Preprocessor", url: "https://sass-lang.com/" },
    { name: "Redux", src: "/images/redux.svg", proficiency: 85, years: calculateYearsOfExperience('2021-01-01'), category: "State Management", url: "https://redux.js.org/" },
    { name: "Material UI", src: "/images/materialui.svg", proficiency: 80, years: calculateYearsOfExperience('2020-01-01'), category: "UI Library", url: "https://mui.com/" },
    { name: "Bootstrap", src: "/images/bootstrap.png", proficiency: 85, years: calculateYearsOfExperience('2018-01-01'), category: "CSS Framework", url: "https://getbootstrap.com/" },
    { name: "Jest", src: "/images/jest.svg", proficiency: 75, years: calculateYearsOfExperience('2019-01-01'), category: "Testing", url: "https://jestjs.io/" },
    { name: "Storybook", src: "/images/storybook.svg", proficiency: 70, years: calculateYearsOfExperience('2023-01-01'), category: "Development Tool", url: "https://storybook.js.org/" },
    { name: "Git", src: "/images/git.svg", proficiency: 90, years: calculateYearsOfExperience('2018-01-01'), category: "Version Control", url: "https://git-scm.com/" },
    { name: "Figma", src: "/images/figma.svg", proficiency: 80, years: calculateYearsOfExperience('2021-01-01'), category: "Design Tool", url: "https://www.figma.com/" },
    { name: "ChatGPT", src: "/images/chatgpt.svg", proficiency: 90, years: calculateYearsOfExperience('2023-01-01'), category: "AI Tool", url: "https://chat.openai.com/" },
    { name: "Claude Code", src: "/images/claude.svg", proficiency: 85, years: calculateYearsOfExperience('2024-01-01'), category: "AI Tool", url: "https://claude.ai/" },
    { name: "Gemini", src: "/images/gemini.svg", proficiency: 80, years: calculateYearsOfExperience('2024-01-01'), category: "AI Tool", url: "https://gemini.google.com/" },
    { name: "GitHub Copilot", src: "/images/copilot.svg", proficiency: 85, years: calculateYearsOfExperience('2023-06-01'), category: "AI Tool", url: "https://github.com/features/copilot" },
  ];

  return (
    <section
      className="relative w-full md:min-h-screen flex flex-col items-center justify-center py-12 md:py-20 bg-gradient-to-b from-black/80 via-violet-900/10 to-black/80 z-10"
      id="skills"
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
            TECHNICAL EXPERTISE
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mt-6 mb-6">
            <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
              Skills & Proficiency
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Comprehensive skill set built through years of hands-on experience
            and continuous learning in modern web development.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <SkillCard key={skill.name} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
