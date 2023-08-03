import React from "react";
import { motion, useScroll } from "framer-motion";
const LiIcon = ({ reference }) => {
  const { scrollYProgress } = useScroll({
    target: reference,
    offset: ["center end", "center center"],
  });
  return (
    <figure className="absolute left-0 stroke-dark dark:stroke-light">
      <svg className="-rotate-90 md:w-3/5 md:h-3/5 xs:w-10 xs:h-10 " width="75" height="75" viewBox="0 0 100 100">
        <circle
          cx="75"
          cy="50"
          r="20"
          className="stroke-primary dark:stroke-primaryDark stoke-1 fill-none"
        />
        <motion.circle
          cx="75"
          cy="50"
          r="20"
          className="stroke-1.5 fill-light dark:fill-dark animate-pulse"
          style={{
            pathLength: scrollYProgress,
          }}
        />
        <circle cx="75" cy="50" r="10" className="stroke-1 fill-primary dark:fill-primaryDark" />
      </svg>
    </figure>
  );
};

export default LiIcon;
