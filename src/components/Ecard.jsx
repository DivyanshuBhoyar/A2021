import "../styles/ecard.css";
import { useState, useEffect } from "react";
import React from "react";
import { useScroll } from "./useScroll";
import { scrollReveal } from "../animations";
import { motion } from "framer-motion";

export default function ECard(props) {
  const [element, controls] = useScroll();
  const [isHovered, setHovered] = useState(false);

  return (
    <>
      <motion.div
        className="story-card"
        variants={scrollReveal}
        ref={element}
        animate={controls}
        initial="hidden"
      >
        <div
          className="image"
          style={{
            width: props.width,
            height: props.height
          }}
        >
          <div
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className="eimage_overlay"
          ></div>
          <div
            style={{
              width: props.width,
              height: props.height,
              overflow: "hidden"
            }}
          >
            <motion.img
              initial={false}
              animate={{ scale: isHovered ? 1.15 : 1 }}
              transition={{ ease: "easeOut", duration: 0.4 }}
              src={props.imgs}
              className="eimage"
              alt=""
            />
          </div>
          <div className="side_text">
            <h3>{props.deptt}</h3>
            <br />
            <h2>{props.eventName}</h2>
            <br />
            <p>{props.date}</p>
          </div>
        </div>
      </motion.div>
    </>
  );
}
