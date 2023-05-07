import React from "react";
import styles from "./About.module.scss";
import { motion } from "framer-motion";
import { abouts } from "../../utils/data";
import {
  staggerContainer,
  textVariant,
  slideIn,
  fadeIn,
  staggerChildren,
} from "../../utils/motion";

export default function About() {
  return (
    <section className={` ${styles.wrapper}`}>
      <motion.div
        variants={staggerChildren}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`innerWidth yPaddings paddings textCenter ${styles.container}`}
      >
        <motion.h2 variants={textVariant(0.5)} className="primaryText">
          Passion Fuels Purpose
        </motion.h2>
        <motion.div
          variants={fadeIn("up", "tween", 0.5, 1.3)}
          className={`${styles.aboutBoxes} flexCenter`}
        >
          {abouts.map((about, idx) => (
            <div className={`${styles.aboutBox}`} key={idx}>
              <img src={about.img} alt={about.head} />
              <h3>{about.head}</h3>
              <p>{about.paragraph}</p>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
