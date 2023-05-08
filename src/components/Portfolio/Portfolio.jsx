import React, { useState } from "react";
import { motion } from "framer-motion";
import styles from "./Portfolio.module.scss";
import {
  fadeIn,
  slideIn,
  slideInProjects,
  staggerChildren,
  staggerContainer,
  textVariant,
} from "../../utils/motion";
import { BsGithub } from "react-icons/bs";
import { portfolioExp } from "../../utils/data";

export default function Portfolio() {
  const [filter, setFilter] = useState(portfolioExp);
  //   console.log(portfolioExp);

  const filteredProducts = (categ) => {
    console.log("haha");
    const updatedList = portfolioExp.filter((exp) => exp.cat === categ);
    console.log(updatedList);
    setFilter(updatedList);
  };

  return (
    <motion.section
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`bg-primary paddings ${styles.wrapper}`}
    >
      <a href="" className="anchor" id="portfolio"></a>
      <div className={`${styles.container}`}>
        <motion.div
          variants={textVariant(0.4)}
          // initial={{ y: 100 }}
          // whileInView={{
          //   y: 0,
          // }}
          // transition={{
          //   type: "tween",
          //   stiffness: 260,
          //   damping: 20,
          //   delay: 0.3,
          //   duration: 0.5,
          // }}
          // variants={slideIn("down", "tween", 0.3, 0.3)}
          className={`${styles.portfolioHead}`}
        >
          <div className="textCenter">
            <span className="primaryText">My Latest Works</span>
            <p style={{ marginTop: "10px" }}>
              Perfect solution for digital experience
            </p>
          </div>
        </motion.div>
        {/* Filter Buttons */}
        <motion.div
          variants={slideIn("up", "tween", 0.3, 0.3)}
          className={`flexCenter ${styles.filterBtns}`}
        >
          <button
            className={`${styles.cardBtn}`}
            onClick={() => {
              setFilter(portfolioExp);
            }}
          >
            ALL
          </button>

          <button
            className={`${styles.cardBtn}`}
            onClick={() => {
              filteredProducts("react");
            }}
          >
            React
          </button>

          <button
            className={`${styles.cardBtn}`}
            onClick={() => {
              filteredProducts("next");
            }}
          >
            Next
          </button>

          <button
            className={`${styles.cardBtn}`}
            onClick={() => {
              filteredProducts("html");
            }}
          >
            HTML/SASS
          </button>
          {/* Projects */}
        </motion.div>
        <div className={` paddings ${styles.portfolioCards}`}>
          {filter.map((exp, idx) => (
            <motion.div
              variants={slideIn("up", "tween", 0.3, 0.3)}
              // initial={{ y: 100 }}
              // whileInView={{
              //   y: 0,
              // }}
              // transition={{
              //   type: "tween",
              //   stiffness: 260,
              //   damping: 20,
              //   delay: 0.3,
              //   duration: 0.3,
              // }}
              key={idx}
              className={`${styles.card}`}
            >
              <img src={exp.pic} className="" alt="" />
              <div className="card-body ">
                <h5 className={`${styles.cardTitle}`}>{exp.title}</h5>
                <p className={`${styles.cardText}`}>{exp.desc}</p>
                <a href={exp.link} className={`${styles.cardBtn}`}>
                  code & demo
                  <BsGithub size={25} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
