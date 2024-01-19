"use client";
import { faLinkedin, faSquareGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  PhoneIcon,
  AtSymbolIcon,
  ChatBubbleLeftRightIcon,
} from "@heroicons/react/24/outline";
import { useAnimation, useInView, motion } from "framer-motion";
import { useEffect, useRef } from "react";
import Footer from "./Footer";

export default function Contact() {
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
    <div className="z-10 flex flex-col w-full items-center min-h-screen" id="contact">
            <p className="font-bold text-3xl p-8 text-center lg:p-12 2xl:p-16">
        {"Let's work together!"}
      </p>
      <motion.div
        ref={ref}
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial={"hidden"}
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        <div className="rounded-xl mx-auto my-0 bg-gray-900 text-gray-100 p-8 sm:w-4/5 lg:w-3/5 xl:text-2xl 2xl:w-2/4 2xl:p-12">
          <ChatBubbleLeftRightIcon
            className="h-20 w-20 mx-auto my-0 bg-violet-900 rounded-full p-4 xl:h-24 xl:w-24"
            aria-hidden="true"
          />
          <p className="text-2xl text-center font-bold mb-8 mt-8 xl:text-3xl">
            Get in Touch - Connect with Me
          </p>
          <p className="mb-8 text-center">
            {
              "My inbox is always open, so feel free to get in touch with me, whether it's about business, opportunities, or if you have any questions. I will do my best to promptly respond to your message!"
            }
          </p>
          <p className="flex">
            <PhoneIcon className="h-8 w-8 mr-2" aria-hidden="true" />
            +353 83 432 9851
          </p>
          <p className="flex">
            <AtSymbolIcon className="h-8 w-8 mr-2" aria-hidden="true" />
            gregory.barros@hotmail.com
          </p>
          <div className="mt-4">
            <button>
              <FontAwesomeIcon
                className="mr-2"
                icon={faLinkedin}
                fontSize={40}
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/gregory-barros-garcia-4160b2157"
                  )
                }
              />
            </button>
            <button>
              <FontAwesomeIcon
                icon={faSquareGithub}
                fontSize={40}
                onClick={() => window.open("https://github.com/gregorybarros")}
              />
            </button>
          </div>
          <div className="flex mt-8">
            <a
              className="bg-violet-900 hover:bg-violet-700 text-grey-100 font-semibold hover:text-white py-2 px-4 border border-violet-900 hover:border-transparent rounded text-1xl mx-auto my-0"
              href="mailto:gregory.barros@hotmail.com"
            >
              Say Hello!
            </a>
          </div>
        </div>
      </motion.div>
                <Footer/>
    </div>
  );
}
