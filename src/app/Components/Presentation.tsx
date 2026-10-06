"use client";
import { ReactTyped } from "react-typed";
import {
  animate,
  motion,
  MotionConfig,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { ArrowDownIcon, ArrowsRightLeftIcon, MapPinIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import CyberButton from "./CyberButton";
import { useEffect, useRef, useState, type PointerEvent, type ReactNode } from "react";
import { getTotalYearsOfExperience } from "../utils/dateUtils";
import { trackContactClick, trackSocialClick } from "../utils/analytics";
import { onPageLoaderDone } from "../utils/pageLoader";

// Long, soft deceleration for entrances; symmetric curve for the curtain wipe
const EASE_OUT = [0.22, 1, 0.36, 1] as const;
const EASE_IN_OUT = [0.76, 0, 0.24, 1] as const;

// Entrance timeline, in seconds after the page loader starts fading out.
// Big and centered, one at a time: "Hello," "I'm" "Gregory" "Barros Garcia" and the
// role. Then all three lines shrink into place together, and everything else comes in.
const TIMELINE = {
  firstWord: 0.5, // after the loader's 0.6s fade has mostly cleared
  wordStagger: 0.3, // each piece 0.3s after the previous one
  settle: 2.6, // greeting, name and role shrink and glide into their spots
  settleDuration: 0.8,
  rest: 3.2, // location, typed line and intro follow every `lineStagger` from here
  lineStagger: 0.08,
  actions: 3.45,
  portrait: 3.2,
  spin: 4.9,
  scrollCue: 4.1,
};

// Intro greeting words, big and centered; then the first name, then "Barros Garcia"
const INTRO_GREETING = ["Hello,", "I'm"];
const SURNAME_GRADIENT = "bg-gradient-to-r from-violet-400 via-violet-300 to-fuchsia-400 bg-clip-text text-transparent";

/** One intro piece rising in at its turn in the sequence */
function IntroWord({ index, className = "", children }: { index: number; className?: string; children: ReactNode }) {
  return (
    <motion.span
      className={`inline-block ${className}`}
      initial={{ opacity: 0, y: "0.4em" }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: TIMELINE.firstWord + index * TIMELINE.wordStagger, duration: 0.6, ease: EASE_OUT }}
    >
      {children}
    </motion.span>
  );
}

/** Rise delay for the remaining text lines (step 2 = first line after the name) */
const lineDelay = (step: number) => TIMELINE.rest + (step - 2) * TIMELINE.lineStagger;

// Shared by the big intro copies and the in-place ones, so the shrink is a uniform scale
const GREETING_CLASS = "font-semibold uppercase tracking-[0.3em] text-violet-400";
const NAME_CLASS = "whitespace-nowrap font-bold leading-tight tracking-tight text-white";
const ROLE_CLASS = "font-medium text-violet-300";
const ROLE = "Senior Full Stack Developer";
const nameContent = (
  <>
    Gregory{" "}
    <span className={SURNAME_GRADIENT}>Barros Garcia</span>
  </>
);

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

// Same 45deg cut corners as the cards and buttons, scaled up for the portrait
const PORTRAIT_CUT = "[clip-path:polygon(28px_0,100%_0,100%_calc(100%-28px),calc(100%-28px)_100%,0_100%,0_28px)]";

const portraitFaces = [
  { src: "/images/profile.jpeg", alt: "Gregory Garcia", back: false },
  { src: "/images/profile-cartoon.jpeg", alt: "Illustrated portrait of Gregory Garcia", back: true },
];

const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

interface RiseProps {
  show: boolean;
  /** Position in the text stagger (0 = first line) */
  step: number;
  className?: string;
  children: ReactNode;
}

/** A line of text that rises into view from behind a mask. */
function Rise({ show, step, className = "", children }: RiseProps) {
  return (
    // Extra bottom padding keeps descenders (g, y, p) from being clipped by the mask
    <div className={`overflow-hidden pb-[0.15em] -mb-[0.15em] ${className}`}>
      <motion.div
        initial={{ y: "110%" }}
        animate={show ? { y: "0%" } : { y: "110%" }}
        transition={{
          delay: lineDelay(step),
          duration: 0.9,
          ease: EASE_OUT,
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}

export default function Presentation() {
  const sectionRef = useRef<HTMLElement>(null);
  const yearsOfExperience = getTotalYearsOfExperience();
  const prefersReducedMotion = useReducedMotion();

  // Becomes true when the page loader starts fading out; drives the whole entrance
  const [ready, setReady] = useState(false);
  useEffect(() => onPageLoaderDone(() => setReady(true)), []);

  // Intro: big centered words appear one by one, then both lines move into the copy column
  const [settled, setSettled] = useState(false);
  useEffect(() => {
    if (!ready) return;
    if (prefersReducedMotion) {
      setSettled(true);
      return;
    }
    const settle = window.setTimeout(() => setSettled(true), TIMELINE.settle * 1000);
    return () => window.clearTimeout(settle);
  }, [ready, prefersReducedMotion]);

  // Both in-place copies animate from the big intro ones with the same move
  const settleTransition = { duration: TIMELINE.settleDuration, ease: EASE_IN_OUT };

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

  // Photo <-> illustration swap: the card flips around its vertical axis.
  // Each click adds a half turn so it always spins the same direction.
  // It starts on the photo and the intro flip turns it over to the illustration.
  const [flips, setFlips] = useState(0);
  const [introSpin, setIntroSpin] = useState(false);
  const showCartoon = flips % 2 === 1;

  // Portrait entrance: a curtain wipes open from the right edge while the photo
  // settles from a slight zoom. `hidden` goes 100 -> 0 (% of the card still covered);
  // the 64px bleed keeps the glow and offset outline visible once fully open.
  const hidden = useMotionValue(100);
  const bleed = useTransform(hidden, [100, 0], [0, 64]);
  // The right bleed grows with the reveal too, so nothing past the card's right edge shows early
  const curtain = useMotionTemplate`inset(-64px -${bleed}px -64px calc(${hidden}% - ${bleed}px))`;
  const zoom = useMotionValue(1.18);
  const [curtainOpen, setCurtainOpen] = useState(false);

  useEffect(() => {
    if (!ready) return;
    if (prefersReducedMotion) {
      hidden.set(0);
      zoom.set(1);
      setCurtainOpen(true);
      setFlips((value) => (value === 0 ? 1 : value));
      return;
    }
    const wipe = animate(hidden, 0, {
      delay: TIMELINE.portrait,
      duration: 1.1,
      ease: EASE_IN_OUT,
      onComplete: () => setCurtainOpen(true),
    });
    const settle = animate(zoom, 1, { delay: TIMELINE.portrait, duration: 1.8, ease: EASE_OUT });
    // Once everything has landed, flip from the photo to the illustration
    const spin = window.setTimeout(() => {
      setIntroSpin(true);
      setFlips((value) => (value === 0 ? 1 : value));
    }, TIMELINE.spin * 1000);
    return () => {
      wipe.stop();
      settle.stop();
      window.clearTimeout(spin);
    };
  }, [ready, prefersReducedMotion, hidden, zoom]);

  return (
    // "user": honours the OS reduced-motion setting (transforms snap, fades still run)
    <MotionConfig reducedMotion="user">
    <section
      ref={sectionRef}
      id="home"
      className="relative z-10 flex min-h-screen min-h-[100svh] w-full flex-col justify-center overflow-x-clip bg-gradient-to-b from-black/80 via-gray-900/80 to-black/80 px-6 pt-24 pb-16 lg:px-8 lg:pt-20 lg:pb-24"
    >
      {/* Intro, big and centered: "Hello," "I'm" "Gregory" "Barros Garcia" and the role, one at a time. Each line shares a layoutId with its
          in-place copy below, so Framer animates the shrink and move between them.
          All words hold their space from the start, so nothing shifts as they appear. */}
      {ready && !settled && (
        <div
          aria-hidden
          className="pointer-events-none fixed inset-0 z-20 flex flex-col items-center justify-center gap-4 px-6 text-center"
        >
          <motion.p layoutId="hero-greeting" className={`text-3xl sm:text-5xl lg:text-6xl ${GREETING_CLASS}`}>
            {INTRO_GREETING.map((word, i) => (
              <span key={word}>
                {i > 0 && " "}
                <IntroWord index={i}>{word}</IntroWord>
              </span>
            ))}
          </motion.p>
          {/* A <p>, not a second <h1>: the in-place name stays the page's only h1 */}
          <motion.p
            layoutId="hero-name"
            className={`text-[clamp(1.75rem,8.6vw,3.75rem)] lg:text-[clamp(3rem,7.5vw,6.5rem)] ${NAME_CLASS}`}
          >
            <IntroWord index={INTRO_GREETING.length}>Gregory</IntroWord>{" "}
            <IntroWord index={INTRO_GREETING.length + 1} className={SURNAME_GRADIENT}>
              Barros Garcia
            </IntroWord>
          </motion.p>
          <motion.p layoutId="hero-role" className={`text-2xl sm:text-3xl lg:text-4xl ${ROLE_CLASS}`}>
            <IntroWord index={INTRO_GREETING.length + 2}>{ROLE}</IntroWord>
          </motion.p>
        </div>
      )}

      <motion.div
        style={{ opacity }}
        className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16"
      >
        {/* Copy */}
        <motion.div
          style={{ y: textY }}
          className="order-2 flex flex-col items-center text-center lg:order-1 lg:col-span-8 lg:items-start lg:text-left"
        >
          {/* In-place greeting and name; invisible copies hold their space until the
              big intro versions move in */}
          {settled ? (
            <motion.p layoutId="hero-greeting" transition={settleTransition} className={`text-sm ${GREETING_CLASS}`}>
              Hello, I&apos;m
            </motion.p>
          ) : (
            <p aria-hidden={ready} className={`invisible text-sm ${GREETING_CLASS}`}>
              Hello, I&apos;m
            </p>
          )}

          <div className="mt-3">
            {settled ? (
              <motion.h1
                layoutId="hero-name"
                transition={settleTransition}
                className={`text-[clamp(1.75rem,8.6vw,3.75rem)] lg:text-[clamp(3rem,5.5vw,4.5rem)] ${NAME_CLASS}`}
              >
                {nameContent}
              </motion.h1>
            ) : (
              <h1 className={`invisible text-[clamp(1.75rem,8.6vw,3.75rem)] lg:text-[clamp(3rem,5.5vw,4.5rem)] ${NAME_CLASS}`}>
                {nameContent}
              </h1>
            )}
          </div>

          {/* Role moves in from the big intro; the location fades in with the rest */}
          <div className="mt-3 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 lg:justify-start">
            {settled ? (
              <motion.h2 layoutId="hero-role" transition={settleTransition} className={`text-xl sm:text-2xl ${ROLE_CLASS}`}>
                {ROLE}
              </motion.h2>
            ) : (
              <h2 className={`invisible text-xl sm:text-2xl ${ROLE_CLASS}`}>{ROLE}</h2>
            )}
            <motion.span
              className="flex items-center gap-4"
              initial={{ opacity: 0, y: 12 }}
              animate={ready ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
              transition={{ delay: lineDelay(2), duration: 0.8, ease: EASE_OUT }}
            >
              <span className="hidden h-6 w-px bg-gray-700 sm:block" aria-hidden />
              <span className="flex items-center gap-2 text-xl font-medium text-gray-400 sm:text-2xl">
                <MapPinIcon className="h-5 w-5 flex-shrink-0 sm:h-6 sm:w-6" aria-hidden />
                Dublin, Ireland
              </span>
            </motion.span>
          </div>

          {/* Rotating focus line; typing starts once the line is in view */}
          <Rise show={ready} step={3} className="mt-3 [@media(max-height:500px)]:hidden">
            <p
              suppressHydrationWarning
              className="min-h-[1.75rem] text-base text-gray-300 sm:min-h-[2rem] sm:text-lg"
            >
              Crafting{" "}
              {ready ? (
                <ReactTyped
                  className="text-white"
                  strings={[
                    "exceptional user experiences.",
                    "scalable Node.js APIs.",
                    "accessible, responsive interfaces.",
                    "modern web apps end to end.",
                  ]}
                  startDelay={3700}
                  typeSpeed={55}
                  backSpeed={35}
                  backDelay={1800}
                  loop
                />
              ) : (
                <span aria-hidden>&nbsp;</span>
              )}
            </p>
          </Rise>

          <Rise show={ready} step={4} className="mt-6">
            <p className="max-w-xl text-base leading-relaxed text-gray-400 sm:text-lg">
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
            </p>
          </Rise>

          {/* Actions fade up instead of using a mask, so hover lifts and focus rings never get clipped */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={ready ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
            transition={{ delay: TIMELINE.actions, duration: 0.8, ease: EASE_OUT }}
            className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-4 lg:justify-start"
          >
            <CyberButton
              onClick={() => scrollTo("about")}
              icon={ArrowDownIcon}
              iconClassName="group-hover:translate-y-0.5"
            >
              About me
            </CyberButton>

            <CyberButton
              variant="link"
              onClick={() => {
                trackContactClick("cta", "hero");
                scrollTo("contact");
              }}
            >
              Get in touch
            </CyberButton>

            <span className="hidden h-5 w-px bg-gray-700 sm:block" aria-hidden />

            <span className="flex items-center gap-1">
              {socialLinks.map((link) => (
                <CyberButton
                  key={link.name}
                  href={link.href}
                  onClick={() => trackSocialClick(link.name, "hero")}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.name}
                  variant="link"
                  size="icon"
                >
                  <FontAwesomeIcon icon={link.icon} fontSize={20} />
                </CyberButton>
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
            // Curtain wipe from the right edge, with a short drift in the same direction
            style={{ clipPath: curtainOpen ? "none" : curtain }}
            initial={{ x: 32 }}
            animate={ready ? { x: 0 } : { x: 32 }}
            transition={{ delay: TIMELINE.portrait, duration: 1.4, ease: EASE_OUT }}
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
                {/* Glow and offset outline fade in as the curtain finishes */}
                <motion.div
                  aria-hidden
                  className="absolute inset-0"
                  initial={{ opacity: 0 }}
                  animate={ready ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ delay: TIMELINE.portrait + 0.7, duration: 0.8, ease: "easeInOut" }}
                >
                  {/* Breathing glow */}
                  <motion.div
                    className="absolute -inset-6 rounded-[2.5rem] bg-violet-600/25 blur-3xl"
                    animate={{ opacity: [0.5, 0.9, 0.5] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  />
                  {/* Offset outline, drifts further on hover */}
                  <div className="cyber-frame [--cyber-cut:28px] [--cyber-edge:rgba(139,92,246,0.4)] [--cyber-accent:rgba(167,139,250,0.7)] translate-x-3 translate-y-3 transition-transform duration-500 ease-in-out group-hover:translate-x-4 group-hover:translate-y-4" />
                </motion.div>

                <button
                  type="button"
                  onClick={() => {
                    setIntroSpin(false);
                    setFlips((value) => value + 1);
                  }}
                  aria-pressed={showCartoon}
                  aria-label={showCartoon ? "Show photo of Gregory" : "Show illustrated portrait of Gregory"}
                  title={showCartoon ? "Back to the photo" : "Click to see the illustrated me"}
                  className="group/swap relative block aspect-[4/5] w-full cursor-pointer focus:outline-none focus-visible:drop-shadow-[0_0_14px_rgba(167,139,250,0.9)]"
                >
                  {/* Flipping card */}
                  <motion.div
                    className="absolute inset-0 [transform-style:preserve-3d]"
                    initial={false}
                    animate={{ rotateY: flips * 180 }}
                    transition={{ duration: introSpin ? 1 : 0.8, ease: "easeInOut" }}
                    style={{ transformPerspective: 1200 }}
                  >
                    {portraitFaces.map((face) => (
                      <div
                        key={face.src}
                        aria-hidden={face.back !== showCartoon}
                        className={`absolute inset-0 overflow-hidden ${PORTRAIT_CUT} [backface-visibility:hidden] [-webkit-backface-visibility:hidden] ${face.back ? "[transform:rotateY(180deg)]" : ""}`}
                      >
                        <motion.div className="absolute inset-0" style={{ scale: zoom }}>
                          <Image
                            src={face.src}
                            alt={face.alt}
                            fill
                            priority
                            sizes="(min-width: 1024px) 320px, 192px"
                            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                          />
                        </motion.div>
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-950/60 via-transparent to-transparent" />
                        {/* Angled 1px edge, same as the cards */}
                        <span className="cyber-frame [--cyber-cut:28px] [--cyber-edge:rgba(255,255,255,0.12)]" />
                      </div>
                    ))}
                  </motion.div>

                  {/* Swap hint, bottom-left so the cut corner never clips it. Shown on hover or
                      keyboard focus, and always on touch screens where there is no hover */}
                  <span
                    aria-hidden
                    className="absolute bottom-3 left-3 flex h-8 w-8 items-center justify-center bg-black/40 text-white/80 opacity-0 backdrop-blur-sm transition-[color,opacity] duration-300 group-hover:opacity-100 group-focus-visible/swap:opacity-100 [@media(hover:none)]:opacity-100 [clip-path:polygon(8px_0,100%_0,100%_calc(100%-8px),calc(100%-8px)_100%,0_100%,0_8px)] [transform:translateZ(1px)] group-hover:text-white"
                  >
                    <span className="cyber-frame [--cyber-cut:8px] [--cyber-edge:rgba(255,255,255,0.15)] group-hover:[--cyber-edge:rgba(167,139,250,0.6)]" />
                    <motion.span
                      animate={{ rotate: flips * 180 }}
                      transition={{ duration: introSpin ? 1 : 0.8, ease: "easeInOut" }}
                      className="flex"
                    >
                      <ArrowsRightLeftIcon className="h-4 w-4" />
                    </motion.span>
                  </span>
                </button>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={ready ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: TIMELINE.scrollCue, duration: 0.8, ease: "easeInOut" }}
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
    </MotionConfig>
  );
}
