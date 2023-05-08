import React from "react";
import { motion } from "framer-motion";
import styles from "./Contact.module.scss";
import { fadeIn, staggerChildren } from "../../utils/motion";
import { footerVariants } from "../../utils/motion";
import { FaEnvelope } from "react-icons/fa";
import { BsGithub, BsLinkedin, BsWhatsapp } from "react-icons/bs";

export default function Contact() {
  return (
    <motion.section
      variants={staggerChildren}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={` ${styles.wrapper}`}
    >
      <a target="_blank" href="" className="anchor" id="contact"></a>

      <motion.div
        variants={footerVariants}
        className={`paddings  innerWidth  ${styles.container}`}
      >
        <div className={`${styles.contactHead}`}>
          <p className={`${styles.secondaryText}`}>Get In Touch</p>
          <p className={`${styles.primaryText}`}>Contact Me</p>
        </div>
        <div className={`${styles.contacts}`}>
          <motion.div
            variants={fadeIn("up", "tween", 0.3, 1)}
            className={`flexCenter ${styles.contactInfo}`}
          >
            <span>
              <FaEnvelope />
            </span>
            <span>
              <a target="_blank" href="mailto:muhammedhagras237@gmail.com">
                muhammedhagras237@gmail.com
              </a>
            </span>
          </motion.div>
          <motion.div
            variants={fadeIn("up", "tween", 0.3, 1)}
            className={`flexCenter ${styles.contactInfo}`}
          >
            <span>
              <BsLinkedin />
            </span>
            <span>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/muhammed-hagras/"
              >
                muhammed-hagras
              </a>
            </span>
          </motion.div>
        </div>
        <div className={`${styles.contacts}`}>
          <motion.div
            variants={fadeIn("up", "tween", 0.3, 1)}
            className={`flexCenter ${styles.contactInfo}`}
          >
            <span>
              <BsGithub />
            </span>
            <span>
              <a target="_blank" href="https://github.com/Muhammed-Hagras">
                Muhammed-Hagras
              </a>
            </span>
          </motion.div>
          <motion.div
            variants={fadeIn("up", "tween", 0.3, 1)}
            className={`flexCenter ${styles.contactInfo}`}
          >
            <span>
              <BsWhatsapp />
            </span>
            <span>
              <a target="_blank" href="https://wa.me/1279754053">
                (+20)1279754053
              </a>
            </span>
          </motion.div>
        </div>
        {/* Resume */}
        <div className={`${styles.contactsTwo}`}>
          <motion.div
            variants={fadeIn("up", "tween", 0.3, 1)}
            className={`flexCenter ${styles.contactInfo}`}
          >
            <span>
              <a
                className={styles.resume}
                href="https://drive.google.com/file/d/1_JDrkeWQaQhzCGHxczhdMtFSmUWc2o9m/view"
              >
                Resume
              </a>
            </span>
          </motion.div>
        </div>
        <div>
          <ul className={`flexCenter paddings ${styles.menu}`}>
            <li>
              <a target="_blank" href="#home">
                Home
              </a>
            </li>
            <li>
              <a target="_blank" href="#about">
                About
              </a>
            </li>
            <li>
              <a target="_blank" href="#portfolio">
                Portfolio
              </a>
            </li>
            <li>
              <a target="_blank" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <p className="">
          Copyright &#169; 2023 Muhammed Hagras. All Rights Reserved.
        </p>
      </motion.div>
    </motion.section>
  );
}
