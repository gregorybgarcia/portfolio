"use client";
import ReactTyped from "react-typed";
import { motion } from "framer-motion";

export default function Presentation() {
  return (
    <div className="z-10 flex items-center h-screen w-full">
      <motion.div
      className="mx-auto my-0"
        animate={{
          scale: [0, 1],
          opacity: [0, 1],
        }}
        transition={{ duration: 3 }}
      >
        <img
          className="rounded-full h-48 mx-auto my-0"
          src="https://media.licdn.com/dms/image/D4D03AQF6Fgl80wagzA/profile-displayphoto-shrink_800_800/0/1702057556257?e=2147483647&v=beta&t=OWYpZFYzUluLLmqIQ-vSwJe22SqQ6ZTgwdb4HivoyiU"
          alt=""
        />

        <p className="text-6xl font-bold border-t-2 border-b-2 p-4 m-4 text-center">
          Hey, I'm Gregory.
        </p>
        <h2>
          <ReactTyped
            className="text-4xl"
            strings={[
              "I enjoy building and designing for the web.",
              "Front-End Specialist since 2018.",
            ]}
            typeSpeed={100}
            startDelay={3000}
          />
        </h2>
      </motion.div>
      <div className="absolute bottom-12 w-full text-center">
        <button 
            className="bg-transparent hover:bg-gray-800 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
            onClick={() => {
                const element = document.getElementById('about')
                element.scrollIntoView({ behavior: 'smooth' })
            }}>
          About me
        </button>
      </div>
    </div>
  );
}
