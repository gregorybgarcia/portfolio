"use client";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { useState } from "react";

const navigation = [
  { name: "About", href: "#", current: false },
  { name: "Experience", href: "#", current: false },
  { name: "Projects", href: "#", current: false },
  { name: "Contact", href: "#", current: false },
  { name: "My resume", href: "https://docs.google.com/document/d/13rLcqKHyb-6Nfvwa9FEwfcQJxwiM6AUeV7qwM1mHv-s/edit", current: false },
];

const scrollTo = (page: string) => {
  console.log(page)
  const element = document.getElementById(page);
  element?.scrollIntoView({ behavior: "smooth" });
};

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Header() {
  const [headerOpen, setHeaderOpen] = useState(false);


  return (
    <Disclosure as="nav" className={`${headerOpen && "bg-gray-900"} w-full z-20 absolute top-0`}>
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" onClick={() => setHeaderOpen(!headerOpen)}/>
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <Image src="/images/logo.webp" alt="" height={40} width={40} className="mr-auto"/>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item, index) => (
                      <a
                        key={item.name}
                        href={item.href}
                        target={index + 1 === navigation.length ? "_blank" : ""}
                        className={classNames(
                          index + 1 === navigation.length
                            ? "bg-violet-900 hover:bg-violet-700 text-grey-100 font-semibold hover:text-white py-2 px-4 border border-violet-900 hover:border-transparent rounded"
                            : "text-gray-100 hover:text-violet-600 font-bold hover:font-black",
                          "rounded-md px-3 py-2 text-sm font-medium"
                        )}
                        onClick={() => scrollTo(item.name.toLocaleLowerCase())}
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
                  onClick={() => scrollTo(item.name.toLocaleLowerCase())}
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
