import React from "react";
import { motion } from "framer-motion";
import styles from "./Contact.module.scss";
import { fadeIn, staggerChildren } from "../../utils/motion";
import { footerVariants } from "../../utils/motion";
import { FaEnvelope } from "react-icons/fa";
import { BsGithub, BsLinkedin } from "react-icons/bs";

export default function Contact() {
  return (
    <motion.section
      variants={staggerChildren}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={` ${styles.wrapper}`}
    >
      <a href="" className="anchor" id="contact"></a>

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
              <a href="mailto:muhammedhagras237@gmail.com">
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
              <a href="https://www.linkedin.com/in/muhammed-hagras/">
                muhammed-hagras
              </a>
            </span>
          </motion.div>
          <motion.div
            variants={fadeIn("up", "tween", 0.3, 1)}
            className={`flexCenter ${styles.contactInfo}`}
          >
            <span>
              <BsGithub />
            </span>
            <span>
              <a href="https://github.com/Muhammed-Hagras">Muhammed-Hagras</a>
            </span>
          </motion.div>
        </div>
        {/* <div className={`${styles.contactsTwo}`}>
         
        </div> */}
        <div>
          <ul className={`flexCenter paddings ${styles.menu}`}>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#portfolio">Portfolio</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
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
