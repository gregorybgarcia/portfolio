import { VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { useInView } from "react-intersection-observer";
import React, { ReactNode, useState } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import CyberButton from "./CyberButton";

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
          // The card chrome lives on the inner .cyber-card
          background: "transparent",
          boxShadow: "none",
          border: "none",
          textAlign: "left",
          padding: 0,
        }}
        contentArrowStyle={{
          borderRight: "0.5rem solid rgba(139, 92, 246, 0.45)",
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
          // Thin violet ring around the company logo (replaces the library's default white ring)
          boxShadow: "0 0 0 2px #7C3AED",
          fontSize: "1.5rem",
          border: "none",
          cursor: item.url ? "pointer" : "default",
        }}
        visible={inView}
      >
        <div className="cyber-card px-7 py-6 backdrop-blur-sm">
          <h3 className="!font-bold !text-xl !text-white !mb-1">{item.title}</h3>
          <h4 className="!mt-0 !font-semibold !text-base !text-violet-300 !mb-4">{item.location}</h4>
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
            <p className="!mt-0 !font-normal !text-base !text-gray-400 !leading-relaxed">
              {item.description}
            </p>
          </motion.div>
          <CyberButton
            onClick={() => setIsExpanded(!isExpanded)}
            aria-expanded={isExpanded}
            variant="link"
            size="sm"
            icon={isExpanded ? ChevronUpIcon : ChevronDownIcon}
            className="-ml-4 mt-3"
          >
            {isExpanded ? "See less" : "See more"}
          </CyberButton>
        </div>
      </TimelineItem>
    </div>
  );
}
