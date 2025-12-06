"use client";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { useState, useEffect } from "react";

const navigation = [
  { name: "About", href: "#", current: false },
  { name: "Current Work", href: "#", current: false },
  { name: "Projects", href: "#", current: false },
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

export default function Header() {
  const [headerOpen, setHeaderOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

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
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);


  return (
    <Disclosure as="nav" className={`${headerOpen ? "bg-gray-900/95 backdrop-blur-md" : "bg-gray-900/80 backdrop-blur-md"} w-full z-20 fixed border-b border-gray-800/50 shadow-lg shadow-black/10 transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" onClick={() => setHeaderOpen(!open)}/>
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <button
                  onClick={() => scrollTo("home", setIsVisible)}
                  className="flex items-center gap-3 mr-auto hover:opacity-80 transition-opacity cursor-pointer"
                >
                  <Image src="/images/logo.webp" alt="Gregory Garcia" height={40} width={40} className="rounded-lg"/>
                  <span className="hidden md:block text-white font-bold text-lg">Gregory Garcia</span>
                </button>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-2">
                    {navigation.map((item, index) => (
                      <a
                        key={item.name}
                        href={item.href}
                        target={index + 1 === navigation.length ? "_blank" : ""}
                        className={classNames(
                          index + 1 === navigation.length
                            ? "bg-violet-900 hover:bg-violet-700 text-white font-semibold py-2 px-4 border border-violet-700 hover:border-violet-500 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg shadow-violet-900/50"
                            : "text-gray-300 hover:text-violet-400 hover:bg-gray-800/50 transition-all duration-300",
                          "rounded-lg px-3 py-2 text-sm font-medium"
                        )}
                        onClick={(e) => {
                          if (index + 1 !== navigation.length) {
                            e.preventDefault();
                            scrollTo(item.name.toLowerCase(), setIsVisible);
                          }
                        }}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item, index) => (
                <Disclosure.Button
                  key={item.name}
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
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
