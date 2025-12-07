import { VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { useInView } from "react-intersection-observer";
import React, { ReactNode, useState } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

type Iitem = {
  item: {
    date: string,
    icon: ReactNode,
    description: string;
    title: string;
    location: string;
    url?: string;
  }
};

export default function TimelineElement({ item }: Iitem) {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: false,
  });
  const [isExpanded, setIsExpanded] = useState(false);
  const TimelineItem = VerticalTimelineElement as any;

  return (
    <div ref={ref} className="vertical-timeline-element">
      <TimelineItem
        contentStyle={{
          background: "linear-gradient(135deg, rgba(76, 29, 149, 0.9) 0%, rgba(109, 40, 217, 0.8) 100%)",
          boxShadow: "0 10px 30px rgba(124, 58, 237, 0.3)",
          border: "1px solid rgba(167, 139, 250, 0.3)",
          borderRadius: "1rem",
          textAlign: "left",
          padding: "2rem 2.5rem",
          backdropFilter: "blur(10px)",
        }}
        contentArrowStyle={{
          borderRight: "0.5rem solid rgba(124, 58, 237, 0.8)",
        }}
        date={item.date}
        dateClassName="!text-violet-300 !font-bold !text-lg"
        icon={
          item.url ? (
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full h-full flex items-center justify-center hover:scale-110 transition-transform duration-300"
            >
              {item.icon}
            </a>
          ) : (
            item.icon
          )
        }
        iconStyle={{
          background: "linear-gradient(135deg, #1F2937 0%, #111827 100%)",
          boxShadow: "0 0 0 4px #7C3AED, 0 0 20px rgba(124, 58, 237, 0.4)",
          fontSize: "1.5rem",
          border: "2px solid #4C1D95",
          cursor: item.url ? "pointer" : "default",
        }}
        visible={inView}
      >
        <h3 className="!font-black !text-xl md:!text-2xl !text-white !mb-2">{item.title}</h3>
        <h4 className="!mt-0 !font-bold !text-base md:!text-lg !text-violet-200 !mb-4">{item.location}</h4>
        <motion.div
          initial={false}
          animate={{
            height: isExpanded ? "auto" : "3rem",
          }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
          }}
          className="overflow-hidden"
        >
          <p className="!mt-0 !font-normal !text-base !text-gray-100 !leading-relaxed">
            {item.description}
          </p>
        </motion.div>
        <motion.button
          onClick={() => setIsExpanded(!isExpanded)}
          className="mt-3 flex items-center gap-2 text-violet-300 hover:text-violet-200 font-semibold text-sm transition-colors duration-200"
          whileHover={{ x: 3 }}
          whileTap={{ scale: 0.95 }}
        >
          {isExpanded ? (
            <>
              <span>See less</span>
              <motion.div
                initial={false}
                animate={{ rotate: 0 }}
                transition={{ duration: 0.2 }}
              >
                <ChevronUpIcon className="w-4 h-4" />
              </motion.div>
            </>
          ) : (
            <>
              <span>See more</span>
              <motion.div
                initial={false}
                animate={{ rotate: 0 }}
                transition={{ duration: 0.2 }}
              >
                <ChevronDownIcon className="w-4 h-4" />
              </motion.div>
            </>
          )}
        </motion.button>
      </TimelineItem>
    </div>
  );
}
