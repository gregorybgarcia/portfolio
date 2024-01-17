import { VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { useInView } from "react-intersection-observer";
import React from "react";

export default function TimelineElement({ item }) {
  const { ref, inView } = useInView();

  const theme = "dark";

  return (
    <div ref={ref} className="vertical-timeline-element">
      <VerticalTimelineElement
        contentStyle={{
          background: theme === "light" ? "#F3F4F6" : "#4C1D95",
          boxShadow: "none",
          border: "1px solid rgba(0, 0, 0, 0.05)",
          textAlign: "left",
          padding: "1.3rem 2rem",
        }}
        contentArrowStyle={{
          borderRight:
            theme === "light" ? "0.4rem solid #9ca3af" : "0.4rem solid #F3F4F6",
        }}
        date={item.date}
        icon={item.icon}
        iconStyle={{
          background: theme === "light" ? "white" : "#1F2937",
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
