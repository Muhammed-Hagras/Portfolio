import React from "react";
import { motion } from "framer-motion";
import styles from "./Portfolio.module.scss";
import {
  staggerChildren,
  staggerContainer,
  textVariant,
} from "../../utils/motion";
import { BsGithub } from "react-icons/bs";
import { portfolioExp } from "../../utils/data";

export default function Portfolio() {
  console.log(portfolioExp);
  return (
    <motion.section
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`bg-primary paddings ${styles.wrapper}`}
    >
      <div className={`${styles.container}`}>
        <motion.div variants={textVariant(0.4)} className={`flexCenter `}>
          <div className="textCenter">
            <span className="primaryText">My Latest Works</span>
            <p style={{ marginTop: "10px" }}>
              Perfect solution for digital experience
            </p>
          </div>
        </motion.div>
        <div className={`flexCenter paddings ${styles.portfolioCards}`}>
          {portfolioExp.map((exp, idx) => (
            <div key={idx} className={`${styles.card}`}>
              <img src={exp.pic} className="" alt="" />
              <div className="card-body ">
                <h5 className={`${styles.cardTitle}`}>Card title</h5>
                <p className={`${styles.cardText}`}>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" className={`${styles.cardBtn}`}>
                  Go somewhere
                  <BsGithub />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
