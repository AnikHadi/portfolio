import { motion } from "framer-motion";
import React from "react";
import { technologies } from "../constants";
import SectionWrapper from "../hoc/SectionWrapper";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";
import { BallCanvas } from "./canvas";

// eslint-disable-next-line react-refresh/only-export-components
const Tech = () => {
  return (
    <React.Fragment>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What technology do I know?</p>
        <h2 className={styles.sectionHeadText}>Technology </h2>
      </motion.div>

      <div className="mt-20 flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((technology, i) => (
          <div key={i} className="w-28 h-28">
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    </React.Fragment>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default SectionWrapper(Tech, "");
