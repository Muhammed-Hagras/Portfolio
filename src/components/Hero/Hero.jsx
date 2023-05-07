import React from "react";
import styles from "./Hero.module.scss";
import { fadeIn, slideIn, staggerContainer } from "../../utils/motion";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className={`paddings ${styles.wrapper}`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`innerWidth ${styles.container}`}
      >
        <div className={styles.upperELements}>
          <motion.span
            className="primaryText"
            variants={fadeIn("right", "tween", 0.2, 1)}
          >
            Hey There,
            <br />
            I'm MO Hagras
          </motion.span>
          <motion.span
            className="secondaryText"
            variants={fadeIn("left", "tween", 0.4, 1)}
          >
            Frontend Developer,
            <br />
            Design beautiful things
          </motion.span>
        </div>
        {/* Person */}
        <motion.div
          variants={fadeIn("up", "tween", 0.3, 1)}
          className={styles.person}
        >
          <motion.img
            variants={slideIn("up", "tween", 0.5, 1.3)}
            src="./person222.png"
            alt="person"
          />
        </motion.div>
        <div className={styles.middleElements}>
          <motion.div
            variants={slideIn("up", "tween", 0.5, 2)}
            className={`flexCenter ${styles.heroCircle}`}
          >
            <img src="./typescript.png" alt="" />
          </motion.div>

          <motion.div
            variants={slideIn("up", "tween", 0.5, 2)}
            className={`flexCenter ${styles.heroCircle}`}
          >
            <img src="./redux.png" alt="" />
          </motion.div>
        </div>
        <div className={styles.lowerElements}>
          <motion.div
            variants={fadeIn("right", "tween", 0.5, 1)}
            className={`flexCenter ${styles.heroCircle}`}
          >
            <img src="./react.png" alt="" />
          </motion.div>

          <motion.div
            variants={fadeIn("left", "tween", 0.5, 1)}
            className={`flexCenter ${styles.heroCircle}`}
          >
            <img src="./javascript.png" alt="" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
