import "./about.scss";
import { motion } from "framer-motion";

const leftvariants = {
  initial: {
    x: "-50%",
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      //   delay: 0.5,
    },
  },
};
const rightvariants = {
  initial: {
    // x: "+50%",
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      //   delay: 0.5,
      staggerChildren: 0.1,
    },
  },
};

const About = () => {
  return (
    <motion.div className="about">
      <motion.div
        className="left"
        variants={leftvariants}
        initial="initial"
        // animate="animate"
        whileInView="animate"
      >
        <p>
        I’m Abdallah Obeidat, a Computer Science graduate from Balqa Applied University with a GPA of 3.97/4.00.
        I’ve participated in the RL4ENG workshop in HBR-S, Germany,
        and the MENA ICT Forum in 2022.
        </p>
        <p>
        <span style={{
            color: "#ffa500",
            fontStyle: "bold",
            fontSize: "40 px"
          }}>Study</span>
          <br/>
          Bachelor's degree in CS from BAU
        </p>

        <span>
          <span style={{
            color: "#ffa500",
            fontStyle: "bold",
            fontSize: "40 px"
          }}>Experience</span>
          <br/>
          Quality Engineer <span style={{
            color: "#ffa500",
          }}>@</span> Inspire for Solutions Development &nbsp;| <span style={{
            color: "#ffa500",
          }}>Sep 2024</span>
          <br/>
          Software Engineer & DevOps Trainee <span style={{
            color: "#ffa500",
          }}>@</span> Atypon-Wiley | <span style={{
            color: "#ffa500",
          }}>Nov 2024</span>
        </span>
      </motion.div>
      <motion.div
        className="right"
        variants={rightvariants}
        initial="initial"
        // animate="animate"
        whileInView="animate"
      >
        <h1>Skills</h1>
        <motion.ul variants={rightvariants}>
          <motion.span variants={rightvariants}>
            Technical
            {/* <hr /> */}
          </motion.span>
          <motion.li variants={rightvariants}>Java - Spring boot</motion.li>
          <motion.li variants={rightvariants}>Javascript/NodeJS</motion.li>
          <motion.li variants={rightvariants}>React</motion.li>
          <motion.li variants={rightvariants}>SQL</motion.li>
          <motion.li variants={rightvariants}>Mongo</motion.li>
          <motion.span variants={rightvariants}>
            Tools
            {/* <hr /> */}
          </motion.span>
          <motion.li variants={rightvariants}>Git/GitHub</motion.li>
          <motion.li variants={rightvariants}>Docker</motion.li>
          <motion.li variants={rightvariants}>Kubernets</motion.li>
          <motion.li variants={rightvariants}>Jira | Confluence</motion.li>
          <motion.span variants={rightvariants}>
            Soft Skills
            {/* <hr /> */}
          </motion.span>
          <motion.li variants={rightvariants}>Teamwork</motion.li>
          <motion.li variants={rightvariants}>Linux</motion.li>
        </motion.ul>
      </motion.div>
    </motion.div>
  );
};

export default About;