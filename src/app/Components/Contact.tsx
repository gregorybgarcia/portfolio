"use client";
import SectionLabel from "./SectionLabel";
import { faLinkedin, faGithub, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  PhoneIcon,
  EnvelopeIcon,
  ClipboardDocumentIcon,
  CheckIcon,
  ArrowUpRightIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/24/outline";
import { motion, useInView } from "framer-motion";
import { useRef, useState, type ComponentType, type ReactNode, type SVGProps } from "react";
import { trackContactClick, trackSocialClick } from "../utils/analytics";
import Footer from "./Footer";
import CyberButton from "./CyberButton";

const EMAIL = "gregory.barros@hotmail.com";
const PHONE = "+353834329851";

// Same staggered card entrance as the Current Work highlights
const cardContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeInOut" as const },
  },
};

interface ContactMethod {
  key: "phone" | "email";
  label: string;
  value: string;
  display: string;
  href: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  hint?: ReactNode;
}

const contactMethods: ContactMethod[] = [
  {
    key: "email",
    label: "Email",
    value: EMAIL,
    display: EMAIL,
    href: `mailto:${EMAIL}`,
    icon: EnvelopeIcon,
  },
  {
    key: "phone",
    label: "Phone",
    value: PHONE,
    display: "+353 83 432 9851",
    href: `tel:${PHONE}`,
    icon: PhoneIcon,
    hint: <FontAwesomeIcon icon={faWhatsapp} className="text-green-500" aria-label="Also on WhatsApp" />,
  },
];

const socialLinks = [
  {
    name: "LinkedIn",
    icon: faLinkedin,
    href: "https://www.linkedin.com/in/gregory-barros-garcia-4160b2157",
    rel: "noopener noreferrer me",
    track: () => trackSocialClick("linkedin", "contact"),
  },
  {
    name: "GitHub",
    icon: faGithub,
    href: "https://github.com/gregorybgarcia",
    rel: "noopener noreferrer me",
    track: () => trackSocialClick("github", "contact"),
  },
  {
    name: "WhatsApp",
    icon: faWhatsapp,
    href: `https://wa.me/${PHONE.replace("+", "")}`,
    rel: "noopener noreferrer",
    track: () => trackContactClick("whatsapp", "contact"),
  },
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const [copied, setCopied] = useState<ContactMethod["key"] | null>(null);

  const copyToClipboard = (method: ContactMethod) => {
    navigator.clipboard.writeText(method.value);
    setCopied(method.key);
    setTimeout(() => setCopied((current) => (current === method.key ? null : current)), 2000);
  };

  return (
    <section
      className="relative w-full md:min-h-screen flex flex-col items-center bg-gradient-to-b from-black/80 via-gray-900/80 to-black/80 z-10"
      id="contact"
    >
      <SectionLabel label="Get in touch" index={7} />
      <div ref={ref} className="max-w-5xl w-full flex-1 flex flex-col justify-center px-4 pt-20 pb-10 md:pb-8">
        {/* Header, matching the other sections */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <span className="min-[1360px]:hidden inline-block mb-6 px-4 py-2 bg-violet-900/50 border border-violet-700 rounded-full text-violet-300 text-sm font-semibold">
            GET IN TOUCH
          </span>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-4 md:mb-6">
            Let&apos;s Work Together
          </h2>

          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            My inbox is always open. Whether you have a question, an opportunity, or just want to say
            hi, I&apos;ll do my best to get back to you promptly.
          </p>
        </motion.div>

        {/* Contact cards, styled like the Current Work and Industry cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6"
          variants={cardContainerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {contactMethods.map((method) => {
            const Icon = method.icon;
            const isCopied = copied === method.key;
            return (
              <motion.div
                key={method.key}
                variants={cardVariants}
                className="cyber-card group relative overflow-hidden backdrop-blur-sm"
              >
                {/* Watermark icon, cropped by the card's bottom-right corner */}
                <Icon
                  aria-hidden
                  className="pointer-events-none absolute -bottom-5 -right-4 h-24 w-24 -rotate-12 text-violet-500/15 transition-all duration-500 ease-in-out group-hover:-rotate-6 group-hover:scale-110 group-hover:text-violet-400/25"
                />

                <a
                  href={method.href}
                  onClick={() => trackContactClick(method.key, "contact")}
                  className="relative flex flex-col justify-center gap-1 p-5 pr-20 md:min-h-[6.5rem] md:p-6 md:pr-24 focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-violet-400"
                >
                  <span className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-gray-400">
                    {method.label}
                    {method.hint}
                  </span>
                  <span className="truncate text-lg md:text-xl font-bold text-white transition-colors group-hover:text-violet-300">
                    {method.display}
                  </span>
                </a>

                <CyberButton
                  onClick={() => copyToClipboard(method)}
                  aria-label={`Copy ${method.label.toLowerCase()}`}
                  title={isCopied ? "Copied!" : `Copy ${method.label.toLowerCase()}`}
                  variant="link"
                  size="icon"
                  className="!absolute right-3 top-3 z-10"
                >
                  {isCopied ? (
                    <CheckIcon className="h-5 w-5 text-green-500" />
                  ) : (
                    <ClipboardDocumentIcon className="h-5 w-5" />
                  )}
                </CyberButton>
              </motion.div>
            );
          })}

          {/* Say hello: full-width card that opens an email, with the social links alongside */}
          <motion.div
            variants={cardVariants}
            className="cyber-card group relative flex flex-col overflow-hidden backdrop-blur-sm sm:flex-row sm:items-center md:col-span-2"
          >
            <PaperAirplaneIcon
              aria-hidden
              className="pointer-events-none absolute -bottom-5 -right-4 h-24 w-24 -rotate-12 text-violet-500/15 transition-all duration-500 ease-in-out group-hover:-rotate-6 group-hover:scale-110 group-hover:text-violet-400/25"
            />

            <a
              href={`mailto:${EMAIL}`}
              onClick={() => trackContactClick("email", "contact")}
              className="relative flex flex-1 flex-col justify-center gap-1 p-5 md:min-h-[6.5rem] md:p-6 focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-violet-400"
            >
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-400">
                Say hello
              </span>
              <span className="flex items-center gap-2 text-lg md:text-xl font-bold text-white transition-colors group-hover:text-violet-300">
                Send me a message
                <ArrowUpRightIcon
                  aria-hidden
                  className="h-5 w-5 flex-shrink-0 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </span>
            </a>

            {/* Kept clear of the watermark on the right */}
            <div className="relative flex items-center gap-1 px-2 pb-3 sm:mr-24 sm:p-0">
              {socialLinks.map((link) => (
                <CyberButton
                  key={link.name}
                  href={link.href}
                  onClick={link.track}
                  target="_blank"
                  rel={link.rel}
                  aria-label={`Gregory Garcia on ${link.name}`}
                  variant="link"
                  size="icon"
                >
                  <FontAwesomeIcon icon={link.icon} fontSize={20} />
                </CyberButton>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Footer */}
      <Footer />
    </section>
  );
}
