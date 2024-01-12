"use client";
import { RocketLaunchIPhocon } from "@heroicons/react/24/outline";
import { useAnimation, useInView, motion } from "framer-motion";
import { useEffect, useRef } from "react";

export default function Projects() {
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
    <div className="bg-violet-900 z-10 flex-col h-screen w-full" id="about">
      <div className="h-2/4 bg-gray-800 flex items-center">
        <div className="w-3/6 mx-auto my-0 text-center">
          <h2 className="text-6xl font-bold mb-6">My Recent Work</h2>

          <p className="text-4xl mb-24">
            Here are a few past design projects I've worked on.
          </p>
        </div>
      </div>
      <motion.div
        ref={ref}
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial={"hidden"}
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="h-2/4 bg-gray-100 w-3/6 mx-auto my-0 -mt-44 rounded text-center text-gray-800 p-6 block flex text-center"
      >
        <div className="w-2/6 p-4">
          <img
            className="rounded mx-auto my-0"
            width="160"
            height="160"
            src="data:image/png;base64,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"
            alt="Incentiv.me"
          />
          <h4 className="text-2xl font-semibold h-16 mt-2">Incentiv.me</h4>
          <p>
            Incentiv is a company that operates an ecosystem of solutions aimed
            at creating positive social impact by connecting businesses,
            individuals, and socio-environmental projects through fiscal
            incentive laws.
          </p>
        </div>
        <div className="w-2/6 border-4 border-t-0 border-b-0 border-gray-300 p-4">
          <img
            className="rounded mx-auto my-0"
            width="160"
            height="160"
            src="data:image/png;base64,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"
            alt="Santander Getnet"
          />
          <h4 className="text-2xl font-semibold h-16 mt-2">Santander Getnet</h4>
          <p>
            Working for Dexian (formerly Dysis), I was assigned to work at
            Pagonxt. PagoNxt is a one of a kind paytech business providing
            customers with a one-stop shop for innovative payments and
            integrated solutions.
          </p>
        </div>
        <div className="w-2/6 p-4">
          <img
            className="rounded mx-auto my-0"
            width="160"
            height="160"
            src="https://media.licdn.com/dms/image/C4D0BAQGSwqBTK2F9og/company-logo_200_200/0/1630499400914/dokfile_software_logo?e=2147483647&v=beta&t=B2u0J7S-WnOz2c0kKSvwgQDCfBw3VxyslkpJwg1lTcs"
            alt="QYON"
          />
          <h4 className="text-2xl font-semibold h-16 mt-2">QYON</h4>
          <p>
            Qyon is a company with advanced expertise in software technologies
            with the application of artificial intelligence in business
            management, designed to oversee and integrate all the processes and
            sectors that constitute your enterprise.
          </p>
        </div>
      </motion.div>
      <p className="font-bold text-6xl mt-16 text-center">Let's work together!</p>
    </div>
  );
}
