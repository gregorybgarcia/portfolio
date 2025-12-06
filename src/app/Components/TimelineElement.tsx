import { VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { useInView } from "react-intersection-observer";
import React, { ReactNode } from "react";

type Iitem = {
  item: {
    date: string,
    icon: ReactNode,
    description: string;
    title: string;
    location: string;
  }
};

export default function TimelineElement({ item }: Iitem) {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: false,
  });
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
        icon={item.icon}
        iconStyle={{
          background: "linear-gradient(135deg, #1F2937 0%, #111827 100%)",
          boxShadow: "0 0 0 4px #7C3AED, 0 0 20px rgba(124, 58, 237, 0.4)",
          fontSize: "1.5rem",
          border: "2px solid #4C1D95",
        }}
        visible={inView}
      >
        <h3 className="!font-black !text-3xl !text-white !mb-2">{item.title}</h3>
        <h4 className="!mt-0 !font-bold !text-xl !text-violet-200 !mb-4">{item.location}</h4>
        <p className="!mt-0 !font-normal !text-base !text-gray-100 !leading-relaxed">
          {item.description}
        </p>
      </TimelineItem>
    </div>
  );
}
