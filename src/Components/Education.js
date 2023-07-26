import React, { useRef } from "react";
import { motion } from "framer-motion";
import { useScroll } from "framer-motion";
import LiIcon from "./LiIcon";
const Details = ({ type, time, place, info }) => {
  const ref = useRef(null);

  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between"
    >
      <LiIcon reference={ref} />
      {/* The below code not working */}
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <div>
          <h3 className="capitalize font-bold text-2xl">{type}</h3>
          <span className=" capitalize font-medium text-dark/75 ">
            {time} | {place}
          </span>
          <p className=" font-medium w-full">{info}</p>
        </div>
      </motion.div>
    </li>
  );
};
const Education = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  const { scrollY } = useScroll();

  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center">Education</h2>
      <div ref={ref} className="w-[75%] relative mx-auto">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top"
        />
        <ul className="w-full flex flex-col ml-4 items-start justify-between">
          <Details
            type="Bachelor Of Science In Computer Science"
            time="2019-2023"
            place="Sindh Madhressatul Islam University (SMIU)"
            info="Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, and Artificial 
            Intelligence. "
          />

          <Details
            type="Online Coursework"
            time="2022-2023"
            place="Udemy And FreeCodeCamp"
            info="Completed Coursework in Advanced JavaScript, React, Frontend JavaScript Libraries, Redux"
          />
        </ul>
      </div>
    </div>
  );
};

export default Education;
