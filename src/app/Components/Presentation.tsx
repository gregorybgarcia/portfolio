"use client";
import ReactTyped from "react-typed";
import { motion, useInView, useAnimation } from "framer-motion";
import { useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faSquareGithub } from "@fortawesome/free-brands-svg-icons";

export default function Presentation() {
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
    <div
      ref={ref}
      className="z-10 flex items-center h-screen w-full text-center"
    >
      <motion.div
        className="mx-auto my-0"
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial={"hidden"}
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        <div className="p-2 bg-violet-900 rounded-full w-52 mx-auto my-0">
          
        <img
          className="rounded-full h-48"
          src="https://media.licdn.com/dms/image/D4D03AQF6Fgl80wagzA/profile-displayphoto-shrink_800_800/0/1702057556257?e=2147483647&v=beta&t=OWYpZFYzUluLLmqIQ-vSwJe22SqQ6ZTgwdb4HivoyiU"
          alt=""
        />
        </div>

        <p className="text-4xl font-bold border-b-2 p-4 m-4 text-center sm:text-5xl">
          Gregory Garcia
        </p>
        <h2>
          <ReactTyped
            className="text-2xl sm:text-3xl p-2"
            strings={[
              "I enjoy building and designing for the web.",
              "Front-End Specialist since 2018.",
            ]}
            typeSpeed={100}
            startDelay={1000}
          />
        </h2>
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
      </motion.div>
      <div className="absolute bottom-12 w-full text-center">
        <button
          className="bg-violet-900 hover:bg-violet-700 text-grey-100 font-semibold hover:text-white py-2 px-4 border border-violet-900 hover:border-transparent rounded"
          onClick={() => {
            const element = document.getElementById("about");
            element.scrollIntoView({ behavior: "smooth" });
          }}
        >
          About me
        </button>
      </div>
    </div>
  );
}
