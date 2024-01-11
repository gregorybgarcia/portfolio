"use client";
import { RocketLaunchIcon as WorkIcon } from "@heroicons/react/24/outline";
import React, { useEffect, useRef } from "react";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { motion, useAnimation, useInView } from "framer-motion";

export default function Timeline() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  const mainControls = useAnimation()

  useEffect(() => {
    console.log(isInView);
    if(isInView) {
      mainControls.start("visible")
    } else {
      mainControls.start("hidden")
    }
  }, [isInView]);

  return (
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

    <VerticalTimeline animate={true}>
  <VerticalTimelineElement
    visible={true}
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="2011 - present"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<WorkIcon />}
    >
    <h3 className="vertical-timeline-element-title">Creative Director</h3>
    <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
    <p>
      Creative Direction, User Experience, Visual Design, Project Management, Team Leading
    </p>
  </VerticalTimelineElement>
  
</VerticalTimeline>
    </motion.div>
  )
}