"use client";
import { ReactTyped } from "react-typed";
import {
  motion,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { ArrowDownIcon, MapPinIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { useRef, type PointerEvent } from "react";
import { getTotalYearsOfExperience } from "../utils/dateUtils";

const EASE = [0.215, 0.61, 0.355, 1] as const;

// Shared entrance; `custom` carries the stagger delay
const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.6, ease: EASE },
  }),
};

const socialLinks = [
  {
    name: "LinkedIn",
    icon: faLinkedin,
    href: "https://www.linkedin.com/in/gregory-barros-garcia-4160b2157",
  },
  {
    name: "GitHub",
    icon: faGithub,
    href: "https://github.com/gregorybgarcia",
  },
];

const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

export default function Presentation() {
  const sectionRef = useRef<HTMLElement>(null);
  const yearsOfExperience = getTotalYearsOfExperience();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Gentle parallax and fade as the hero scrolls away
  const textY = useTransform(scrollYProgress, [0, 1], [0, 40]);
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  // Portrait tilt that follows the pointer (-0.5..0.5 across the card)
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const spring = { stiffness: 150, damping: 20 };
  const rotateX = useSpring(useTransform(pointerY, [-0.5, 0.5], [6, -6]), spring);
  const rotateY = useSpring(useTransform(pointerX, [-0.5, 0.5], [-6, 6]), spring);

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    pointerX.set((event.clientX - rect.left) / rect.width - 0.5);
    pointerY.set((event.clientY - rect.top) / rect.height - 0.5);
  };

  const resetTilt = () => {
    pointerX.set(0);
    pointerY.set(0);
  };

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative z-10 flex min-h-screen min-h-[100svh] w-full flex-col justify-center bg-gradient-to-b from-black/80 via-gray-900/80 to-black/80 px-6 pt-24 pb-16 lg:px-8 lg:pt-20 lg:pb-24"
    >
      <motion.div
        style={{ opacity }}
        className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16"
      >
        {/* Copy */}
        <motion.div
          style={{ y: textY }}
          className="order-2 flex flex-col items-center text-center lg:order-1 lg:col-span-8 lg:items-start lg:text-left"
        >
          <motion.p
            custom={0.1}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-sm font-semibold uppercase tracking-[0.3em] text-violet-400"
          >
            Hello, I&apos;m
          </motion.p>

          <motion.h1
            custom={0.2}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mt-3 whitespace-nowrap text-[clamp(1.75rem,8.6vw,3.75rem)] font-bold leading-tight tracking-tight text-white lg:text-[clamp(3rem,5.5vw,4.5rem)]"
          >
            Gregory{" "}
            <span className="bg-gradient-to-r from-violet-400 via-violet-300 to-fuchsia-400 bg-clip-text text-transparent">
              Barros Garcia
            </span>
          </motion.h1>

          <motion.div
            custom={0.3}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mt-3 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 lg:justify-start"
          >
            <h2 className="text-xl font-medium text-violet-300 sm:text-2xl">
              Senior Full Stack Developer
            </h2>
            <span className="hidden h-5 w-px bg-gray-700 sm:block" aria-hidden />
            <span className="flex items-center gap-1.5 text-sm text-gray-400">
              <MapPinIcon className="h-4 w-4" aria-hidden />
              Dublin, Ireland
            </span>
          </motion.div>

          {/* Rotating focus line */}
          <motion.p
            custom={0.4}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            suppressHydrationWarning
            className="mt-3 min-h-[1.75rem] text-base text-gray-300 sm:min-h-[2rem] sm:text-lg [@media(max-height:500px)]:hidden"
          >
            Crafting{" "}
            <ReactTyped
              className="text-white"
              strings={[
                "exceptional user experiences.",
                "scalable Node.js APIs.",
                "accessible, responsive interfaces.",
                "modern web apps end to end.",
              ]}
              typeSpeed={55}
              backSpeed={35}
              backDelay={1800}
              loop
            />
          </motion.p>

          <motion.p
            custom={0.5}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mt-6 max-w-xl text-base leading-relaxed text-gray-400 sm:text-lg"
          >
            {yearsOfExperience}+ years building web applications end to end
            with Node.js, React, Next.js and TypeScript. Currently leading
            front-end development at{" "}
            <a
              href="https://www.mypatientspace.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-200 underline decoration-gray-600 underline-offset-4 transition-colors hover:text-white hover:decoration-violet-400"
            >
              myPatientSpace
            </a>
            .
          </motion.p>

          <motion.div
            custom={0.6}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-4 lg:justify-start"
          >
            <motion.button
              onClick={() => scrollTo("about")}
              whileHover={{ y: -1 }}
              whileTap={{ scale: 0.98 }}
              className="group inline-flex h-11 items-center gap-2 rounded-lg bg-violet-700 px-5 text-sm font-semibold text-white transition-colors hover:bg-violet-600"
            >
              About me
              <ArrowDownIcon className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
            </motion.button>

            <button
              onClick={() => scrollTo("contact")}
              className="inline-flex h-11 items-center text-sm font-semibold text-gray-300 underline-offset-4 transition-colors hover:text-white hover:underline"
            >
              Get in touch
            </button>

            <span className="hidden h-5 w-px bg-gray-700 sm:block" aria-hidden />

            <span className="flex items-center gap-1">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.name}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-lg text-gray-400 transition-colors hover:text-white"
                >
                  <FontAwesomeIcon icon={link.icon} fontSize={20} />
                </a>
              ))}
            </span>
          </motion.div>
        </motion.div>

        {/* Portrait */}
        <motion.div
          style={{ y: imageY }}
          className="order-1 flex justify-center lg:order-2 lg:col-span-4 lg:justify-end"
        >
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: EASE }}
            className="relative w-40 sm:w-48 lg:w-full lg:max-w-xs"
          >
            {/* Slow float */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              {/* Pointer tilt */}
              <motion.div
                onPointerMove={handlePointerMove}
                onPointerLeave={resetTilt}
                style={{ rotateX, rotateY, transformPerspective: 1000 }}
                className="group relative"
              >
                {/* Breathing glow */}
                <motion.div
                  aria-hidden
                  className="absolute -inset-6 rounded-[2.5rem] bg-violet-600/25 blur-3xl"
                  animate={{ opacity: [0.5, 0.9, 0.5] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                />

                {/* Offset outline, drifts further on hover */}
                <div
                  aria-hidden
                  className="absolute inset-0 translate-x-3 translate-y-3 rounded-3xl border border-violet-500/40 transition-transform duration-500 ease-in-out group-hover:translate-x-4 group-hover:translate-y-4"
                />

                <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-white/10 shadow-2xl shadow-black/40">
                  <Image
                    src="/images/profile.jpeg"
                    alt="Gregory Garcia"
                    fill
                    priority
                    sizes="(min-width: 1024px) 320px, 192px"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950/60 via-transparent to-transparent" />
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="relative z-10 mt-12 flex justify-center lg:absolute lg:inset-x-0 lg:bottom-6 lg:mt-0 [@media(max-height:600px)]:hidden"
      >
        <button
          onClick={() => scrollTo("about")}
          aria-label="Scroll to the About section"
          className="group flex flex-col items-center gap-2 p-2 text-xs font-semibold uppercase tracking-[0.25em] text-gray-500 transition-colors hover:text-violet-300"
        >
          <span>Scroll</span>
          <span className="flex h-9 w-5 items-start justify-center rounded-full border border-gray-600 p-1 transition-colors group-hover:border-violet-400">
            <motion.span
              className="h-1.5 w-1.5 rounded-full bg-violet-400"
              animate={{ y: [0, 14, 0], opacity: [1, 0.3, 1] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            />
          </span>
        </button>
      </motion.div>
    </section>
  );
}
