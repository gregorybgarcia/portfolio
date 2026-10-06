"use client";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { Fragment, useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { trackResumeClick } from "../utils/analytics";
import CyberButton from "./CyberButton";

const navigation = [
  { name: "About", href: "#about", current: false },
  { name: "Current Work", href: "#current-work", current: false },
  { name: "Projects", href: "#projects", current: false },
  { name: "Skills", href: "#skills", current: false },
  { name: "Experience", href: "#experience", current: false },
  { name: "Contact", href: "#contact", current: false },
  { name: "My resume", href: "https://docs.google.com/document/d/13rLcqKHyb-6Nfvwa9FEwfcQJxwiM6AUeV7qwM1mHv-s/edit", current: false },
];

const scrollTo = (page: string, setVisible?: (value: boolean) => void) => {
  const elementId = page.toLowerCase().replace(/\s+/g, '-');
  const element = document.getElementById(elementId);

  // Show header first if it's hidden
  if (setVisible) {
    setVisible(true);
  }

  // Small delay to ensure header is visible before scrolling
  setTimeout(() => {
    element?.scrollIntoView({ behavior: "smooth" });
  }, 100);
};

// Animation variants
const navItemVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.3,
      ease: "easeOut" as const,
    },
  }),
};

const mobileMenuVariants = {
  hidden: { opacity: 0, height: 0 },
  visible: {
    opacity: 1,
    height: "auto",
    transition: {
      duration: 0.3,
      ease: "easeInOut" as const,
      staggerChildren: 0.05,
    },
  },
  exit: {
    opacity: 0,
    height: 0,
    transition: {
      duration: 0.2,
      ease: "easeInOut" as const,
    },
  },
};

const mobileItemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.2 },
  },
  exit: { opacity: 0, x: -20 },
};

export default function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const closeMenuRef = useRef<(() => void) | null>(null);

  const closeMobileMenu = useCallback(() => {
    if (closeMenuRef.current) {
      closeMenuRef.current();
    }
    setMobileMenuOpen(false);
  }, []);

  useEffect(() => {
    // Trigger initial animation
    const timer = setTimeout(() => setIsLoaded(true), 100);

    let lastScroll = 0;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Close mobile menu on scroll
      if (mobileMenuOpen) {
        closeMobileMenu();
      }

      // Track if page is scrolled for background styling
      setIsScrolled(currentScrollY > 50);

      // Show header when at the top of the page
      if (currentScrollY < 10) {
        setIsVisible(true);
      }
      // Hide header when scrolling down, show when scrolling up
      else if (currentScrollY > lastScroll && currentScrollY > 100) {
        setIsVisible(false);
      } else if (currentScrollY < lastScroll) {
        setIsVisible(true);
      }

      lastScroll = currentScrollY;
    };

    // Close mobile menu when clicking outside
    const handleClickOutside = (event: MouseEvent) => {
      if (mobileMenuOpen && headerRef.current && !headerRef.current.contains(event.target as Node)) {
        closeMobileMenu();
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [mobileMenuOpen, closeMobileMenu]);


  return (
    <motion.nav
      ref={headerRef}
      initial={{ y: -100, opacity: 0 }}
      animate={{
        y: isVisible ? 0 : -100,
        opacity: isVisible ? 1 : 0,
      }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="w-full z-20 fixed"
    >
      <Disclosure>
        {({ open, close }) => {
          // Store the close function in ref so we can call it from outside
          closeMenuRef.current = close;

          // Sync the open state with our mobileMenuOpen state
          if (open !== mobileMenuOpen) {
            setTimeout(() => setMobileMenuOpen(open), 0);
          }

          return (
          <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-3 pb-2">
            <div className="relative flex items-center justify-between">
              <div className="absolute inset-y-0 right-0 flex items-center lg:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button as={Fragment}>
                  <CyberButton
                    variant="ghost"
                    size="icon"
                    icon={open ? XMarkIcon : Bars3Icon}
                    aria-label={open ? "Close main menu" : "Open main menu"}
                  />
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center lg:items-stretch lg:justify-start">
                <motion.button
                  onClick={() => scrollTo("home", setIsVisible)}
                  className="flex items-center gap-3 mr-auto hover:opacity-80 transition-opacity cursor-pointer"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isLoaded ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.4 }}
                  >
                    <Image src="/images/logo.webp" alt="Gregory Garcia" height={40} width={40} className="rounded-lg"/>
                  </motion.div>
                </motion.button>
                <div className="hidden lg:ml-6 lg:block">
                  <div className="flex items-center space-x-2">
                    {navigation.map((item, index) => index + 1 === navigation.length ? (
                      <CyberButton
                        key={item.name}
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        custom={index}
                        variants={navItemVariants}
                        initial="hidden"
                        animate={isLoaded ? "visible" : "hidden"}
                        variant="ghost"
                        size="sm"
                        onClick={() => trackResumeClick("header")}
                      >
                        Resume
                      </CyberButton>
                    ) : (
                      <CyberButton
                        key={item.name}
                        href={item.href}
                        custom={index}
                        variants={navItemVariants}
                        initial="hidden"
                        animate={isLoaded ? "visible" : "hidden"}
                        variant="link"
                        size="sm"
                        onClick={(e) => {
                          e.preventDefault();
                          scrollTo(item.name.toLowerCase(), setIsVisible);
                        }}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </CyberButton>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <AnimatePresence>
            {open && (
              <Disclosure.Panel static as={motion.div}
                variants={mobileMenuVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="lg:hidden overflow-hidden"
              >
                <div className="space-y-1 px-2 pb-3 pt-2">
                  {navigation.map((item, index) => (
                    <motion.div
                      key={item.name}
                      variants={mobileItemVariants}
                    >
                      <CyberButton
                        href={item.href}
                        target={index + 1 === navigation.length ? "_blank" : undefined}
                        rel={index + 1 === navigation.length ? "noopener noreferrer" : undefined}
                        variant={index + 1 === navigation.length ? "ghost" : "link"}
                        className="w-full"
                        aria-current={item.current ? "page" : undefined}
                        onClick={(e) => {
                          close();
                          if (index + 1 !== navigation.length) {
                            e.preventDefault();
                            scrollTo(item.name.toLowerCase(), setIsVisible);
                          } else {
                            trackResumeClick("header");
                          }
                        }}
                      >
                        {index + 1 === navigation.length ? "Resume" : item.name}
                      </CyberButton>
                    </motion.div>
                  ))}
                </div>
              </Disclosure.Panel>
            )}
          </AnimatePresence>
          </>
        );
        }}
      </Disclosure>

      {/* Background (10% transparent) */}
      <div
        aria-hidden
        className={`pointer-events-none absolute inset-0 -z-10 bg-black/90 transition-opacity duration-300 ${isScrolled || mobileMenuOpen ? "opacity-100" : "opacity-0"}`}
      />
      {/* Bottom fade */}
      <div
        aria-hidden
        className={`pointer-events-none absolute inset-x-0 top-full h-6 bg-gradient-to-b from-black/90 to-transparent transition-opacity duration-300 ${isScrolled || mobileMenuOpen ? "opacity-100" : "opacity-0"}`}
      />
    </motion.nav>
  );
}
