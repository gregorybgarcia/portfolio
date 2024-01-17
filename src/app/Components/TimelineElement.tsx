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
  const { ref, inView } = useInView();

  return (
    <div ref={ref} className="vertical-timeline-element">
      <VerticalTimelineElement
        contentStyle={{
          background: "#4C1D95",
          boxShadow: "none",
          border: "1px solid rgba(0, 0, 0, 0.05)",
          textAlign: "left",
          padding: "1.3rem 2rem",
        }}
        contentArrowStyle={{
          borderRight: "0.4rem solid #F3F4F6",
        }}
        date={item.date}
        icon={item.icon}
        iconStyle={{
          background: "#1F2937",
          boxShadow: "0 0 0 4px #F3F4F6",
          fontSize: "1.5rem",
        }}
        visible={inView}
      >
        <h4 className="!font-bold text-2xl">{item.title}</h4>
        <p className="!mt-0 !font-semibold text-2xl">{item.location}</p>
        <p className="!mt-1 !font-normal text-zinc-700 dark:text-white/75">
          {item.description}
        </p>
      </VerticalTimelineElement>
    </div>
  );
}
