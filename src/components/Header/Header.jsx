import React, { useRef, useState } from "react";
import styles from "./Header.module.scss";
import "./../../styles/global.scss";
import { motion } from "framer-motion";
import { RiMenu3Fill } from "react-icons/ri";
import { headerVariants } from "../../utils/motion";
import useHeaderShadow from "../../hooks/useHeaderShadow";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const headerShadow = useHeaderShadow();
  return (
    <motion.div
      variants={headerVariants}
      initial="hidden"
      whileInView="show"
      className={`bg-primary paddings ${styles.wrapper}`}
      viewport={{ once: true, amount: 0.25 }}
      style={{ boxShadow: headerShadow }}
    >
      <div className={`innerWidth ${styles.container} flexCenter`}>
        <div className={`textCenter ${styles.name}`}> Hagras</div>
        <ul
          className={`flexCenter ${styles.menu}`}
          style={{ right: !menuOpen ? "-100%" : "" }}
        >
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
            <a href="#testimonials">Testimonials</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>

        <div
          className={styles.menuIcon}
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <RiMenu3Fill size={30} />
        </div>
      </div>
    </motion.div>
  );
}
