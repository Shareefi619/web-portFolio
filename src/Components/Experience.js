import React, { useRef } from "react";
import { motion } from "framer-motion";
import { useScroll } from "framer-motion";
import LiIcon from "./LiIcon";
const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);

  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-3/5 mx-auto flex flex-col items-center justify-between md:w-4/5"
    >
      <LiIcon reference={ref} />
      {/* The below code not working */}
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <div>
          <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
            {position}&nbsp;
            <a
              aria-label={companyLink}
              href={companyLink}
              target="_blank"
              className=" text-primary dark:text-primaryDark capitalize "
            >
              @{company}
            </a>
          </h3>
          <span className=" capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
            {time} | {address}
          </span>
          <p className=" font-medium w-full md:text-sm">{work}</p>
        </div>
      </motion.div>
    </li>
  );
};
const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Experience
      </h2>
      <div ref={ref} className="w-[75%] relative mx-auto lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark dark:bg-light origin-top
          md:w-[1px] md:left-[30px] xs:left-[20px]"
        />
        <ul className="w-full flex flex-col ml-4 items-start justify-between sm:ml-2">
          <Details
            position="Intern"
            company="Geeks OF Kolachi"
            time="Summer 2023"
            address="7th floor Fortune Tower Sara-e-Failsal, karachi, Sindh "
            work="For the past month, I have been interning at GOK, where I have been immersed in
             a valuable learning experience with various web development tools such as React, Next.js, 
             Tailwind CSS, MongoDB, Express, and Node.js. This internship has been an excellent opportunity
              for me to enhance my skills and gain practical experience in the field of web development."
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
