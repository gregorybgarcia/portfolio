"use client";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navigation = [
  { name: "About", href: "#", current: false },
  { name: "Current Work", href: "#", current: false },
  { name: "Projects", href: "#", current: false },
  { name: "Skills", href: "#", current: false },
  { name: "Experience", href: "#", current: false },
  { name: "Contact", href: "#", current: false },
  { name: "My resume", href: "https://docs.google.com/document/d/13rLcqKHyb-6Nfvwa9FEwfcQJxwiM6AUeV7qwM1mHv-s/edit", current: false },
];

const scrollTo = (page: string, setVisible?: (value: boolean) => void) => {
  const elementId = page.toLowerCase().replace(/\s+/g, '-');
  console.log(elementId)
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

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

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
  const [headerOpen, setHeaderOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // Trigger initial animation
    const timer = setTimeout(() => setIsLoaded(true), 100);

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Track if page is scrolled for background styling
      setIsScrolled(currentScrollY > 50);

      // Show header when at the top of the page
      if (currentScrollY < 10) {
        setIsVisible(true);
      }
      // Hide header when scrolling down, show when scrolling up
      else if (currentScrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);


  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{
        y: isVisible ? 0 : -100,
        opacity: isVisible ? 1 : 0,
      }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className={`w-full z-20 fixed transition-colors duration-300 ${isScrolled || headerOpen ? "bg-gray-900/95 backdrop-blur-md border-b border-gray-800/50 shadow-lg shadow-black/10" : "bg-transparent border-b border-transparent"}`}
    >
      <Disclosure>
        {({ open }) => (
          <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-3 pb-1">
            <div className="relative flex items-center justify-between">
              <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" onClick={() => setHeaderOpen(!open)}/>
                  <span className="sr-only">Open main menu</span>
                  <AnimatePresence mode="wait">
                    {open ? (
                      <motion.div
                        key="close"
                        initial={{ rotate: -90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: 90, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                      </motion.div>
                    ) : (
                      <motion.div
                        key="open"
                        initial={{ rotate: 90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: -90, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
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
                  <span className="hidden md:block text-white font-bold text-lg">Gregory Garcia</span>
                </motion.button>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-2">
                    {navigation.map((item, index) => (
                      <motion.a
                        key={item.name}
                        href={item.href}
                        target={index + 1 === navigation.length ? "_blank" : ""}
                        custom={index}
                        variants={navItemVariants}
                        initial="hidden"
                        animate={isLoaded ? "visible" : "hidden"}
                        whileHover={{
                          scale: 1.05,
                          y: -2,
                        }}
                        whileTap={{ scale: 0.95 }}
                        className={classNames(
                          index + 1 === navigation.length
                            ? "bg-violet-900 hover:bg-violet-700 text-white font-semibold py-2 px-4 border border-violet-700 hover:border-violet-500 rounded-lg transition-all duration-300 shadow-lg shadow-violet-900/50"
                            : "text-gray-300 hover:text-violet-400 hover:bg-gray-800/50 transition-all duration-300",
                          "rounded-lg px-3 py-2 text-sm font-medium relative overflow-hidden"
                        )}
                        onClick={(e) => {
                          if (index + 1 !== navigation.length) {
                            e.preventDefault();
                            scrollTo(item.name.toLowerCase(), setIsVisible);
                          }
                        }}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {/* Hover underline effect for non-resume items */}
                        {index + 1 !== navigation.length && (
                          <motion.span
                            className="absolute bottom-1 left-3 right-3 h-0.5 bg-violet-500 origin-left"
                            initial={{ scaleX: 0 }}
                            whileHover={{ scaleX: 1 }}
                            transition={{ duration: 0.2 }}
                          />
                        )}
                        {item.name}
                      </motion.a>
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
                className="sm:hidden overflow-hidden"
              >
                <div className="space-y-1 px-2 pb-3 pt-2">
                  {navigation.map((item, index) => (
                    <motion.div
                      key={item.name}
                      variants={mobileItemVariants}
                    >
                      <Disclosure.Button
                        as="a"
                        href={item.href}
                        target={index + 1 === navigation.length ? "_blank" : ""}
                        className={classNames(
                          item.current
                            ? "bg-gray-900 text-white"
                            : "text-gray-300 hover:bg-gray-700 hover:text-white",
                          "block rounded-md px-3 py-2 text-base font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                        onClick={(e) => {
                          if (index + 1 !== navigation.length) {
                            e.preventDefault();
                            scrollTo(item.name.toLowerCase(), setIsVisible);
                          }
                        }}
                      >
                        {item.name}
                      </Disclosure.Button>
                    </motion.div>
                  ))}
                </div>
              </Disclosure.Panel>
            )}
          </AnimatePresence>
          </>
        )}
      </Disclosure>
    </motion.nav>
  );
}
