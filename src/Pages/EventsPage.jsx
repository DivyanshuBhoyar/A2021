import React, { useState, useEffect } from "react";
import ECard from "../components/Ecard";
import { useAnimation } from "framer-motion";

import "../styles/eventpage.css";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function EventsPage() {
  return (
    <>
      <motion.div className="c0">
        <ECard
          imgs="https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
          deptt="CODING"
          date="3 Jan 2020"
          eventName="CODE-A-THON"
          width="280px"
          height="350px"
        />{" "}
      </motion.div>
      <motion.div className="c1">
        <ECard
          imgs="https://images.unsplash.com/photo-1476725994324-6f6833ea0631?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTN8fGJyaWRnZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
          deptt="CIVIL"
          date="3 Jan 2020"
          eventName="BRIDGE-O-CRAFT"
          className="cv"
          text=""
          width="260px"
          height="280px"
        />
      </motion.div>
      <motion.div className="c2">
        <ECard
          imgs="https://images.unsplash.com/photo-1475721027785-f74eccf877e2?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjR8fGludGVydmlld3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
          deptt="MANAGEMENT"
          date="3 Jan 2020"
          eventName="VIRTUAL PLACEMENT"
          width="330px"
          height="350px"
          text=""
        />
      </motion.div>
      <motion.div className="c3">
        <ECard
          imgs="https://images.unsplash.com/photo-1548497557-5c4e6cb1cafd?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFuYWdlbWVudCUyMHNraWxsc3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
          deptt="FUN"
          date="3 Jan 2020"
          eventName="BOUNTY HUNT"
          className="f"
          width="360px"
          height="390px"
          text=""
        />{" "}
      </motion.div>
      <motion.div className="c4">
        <ECard
          imgs="https://images.unsplash.com/photo-1567027757540-7b572280fa22?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDExfEo5eXJQYUhYUlFZfHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
          deptt="DOR AMET"
          date="3 Jan 2020"
          eventName="LOREM IPSUM"
          className="l0"
          width="350px"
          height="380px"
          text=""
        />{" "}
      </motion.div>
      <motion.div className="c5">
        <ECard
          imgs="https://images.unsplash.com/photo-1606559512256-8c528e646804?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8YkRvNDhjVWh3bll8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
          deptt="DOR AMET"
          date="3 Jan 2020"
          eventName="LOREM IPSUM"
          className="l1"
          width="300px"
          height="350px"
          text=""
        />{" "}
      </motion.div>
      <motion.div className="c6">
        <ECard
          imgs="https://images.unsplash.com/photo-1608699565448-9492aaf3c708?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDEyfEo5eXJQYUhYUlFZfHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
          deptt="DOR AMET"
          date="3 Jan 2020"
          eventName="LOREM IPSUM"
          className="l2"
          width="380px"
          height="420px"
          text=""
        />
      </motion.div>{" "}
    </>
  );
}
