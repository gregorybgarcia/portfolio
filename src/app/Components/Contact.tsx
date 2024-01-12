"use client";
import {
  PhoneIcon,
  AtSymbolIcon,
  ChatBubbleLeftRightIcon,
} from "@heroicons/react/24/outline";
import { useAnimation, useInView, motion } from "framer-motion";
import { useEffect, useRef } from "react";

export default function Contact() {
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
    <div className="z-10 flex h-screen w-full items-center" id="about">
      <motion.div
        ref={ref}
        variants={{
          hidden: { opacity: 0, scale: 0 },
          visible: { opacity: 1, scale: 1 },
        }}
        initial={"hidden"}
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <div className="rounded mx-auto my-0 bg-gray-800 text-gray-100 h-3/4 w-2/4 p-16">
          <ChatBubbleLeftRightIcon
            className="h-24 w-24 mx-auto my-0 bg-violet-900 rounded-full p-4 "
            aria-hidden="true"
          />
          <p className="text-4xl text-center font-bold mb-16 mt-16">
            Get in Touch - Connect with Me
          </p>
          <p className="text-2xl mb-16 text-center">
            My inbox is always open, so feel free to get in touch with me,
            whether it's about business, opportunities, or if you have any
            questions. I will do my best to promptly respond to your message!
          </p>
          <p className="flex text-2xl">
            <PhoneIcon className="h-8 w-8 mr-2" aria-hidden="true" />
            +353 83 432 9851
          </p>
          <p className="flex text-2xl">
            <AtSymbolIcon className="h-8 w-8 mr-2" aria-hidden="true" />
            gregory.barros@hotmail.com
          </p>
          <div className="flex mt-16">
            <button className="bg-violet-900 hover:bg-violet-700 text-grey-100 font-semibold hover:text-white py-2 px-4 border border-violet-900 hover:border-transparent rounded text-2xl mx-auto my-0">
              Say Hello!
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
