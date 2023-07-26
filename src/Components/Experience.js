import React, { useRef } from "react";
import { motion } from "framer-motion";
import { useScroll } from "framer-motion";
import LiIcon from "./LiIcon";
const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);

  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between"
    >
      <LiIcon reference={ref} />
       {/* The below code not working */}
      <motion.div initial={{ y: 50 }} whileInView={{y:0}} transition={{duration: 0.5 , type:"spring"}}>
      <div>
        <h3 className="capitalize font-bold text-2xl">
          {position}&nbsp;
          <a
            href={companyLink}
            target="_blank"
            className=" text-primary capitalize "
          >
            @{company}
          </a>
        </h3>
        <span className=" capitalize font-medium text-dark/75 ">
          {time} | {address}
        </span>
        <p className=" font-medium w-full">{work}</p>
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
  const { scrollY } = useScroll();

  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center">
        Experience
      </h2>
      <div ref={ref} className="w-[75%] relative mx-auto">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top"
        />
        <ul className="w-full flex flex-col ml-4 items-start justify-between">
          <Details
            position="Intern"
            company="Geeks OF Kolachi"
            time="Summer 2023"
            address="7th floor Fortune Tower Sara-e-Failsal, karachi, Sindh "
            work="I commenced my work at GOK, where I was part of a team assigned to create user-friendly websites using React and Next.js.
               Additionally, we delved into developing hybrid mobile applications on the React Native platform."
          />
          <Details
            position="Web Developer"
            company="Geeks OF Kolachi"
            time="winter 2023"
            address="7th floor Fortune Tower Sara-e-Failsal, karachi, Sindh "
            work="As a junior developer, I began my journey at GOK, joining a team with the responsibility of building user-friendly websites using React and Next.js. During my time there, I also had the opportunity to contribute to the development of hybrid mobile applications on the React Native platform. It was an exciting learning experience, and
             I actively participated in various projects to enhance my skills and knowledge in web and mobile development."
          />
          <Details
            position="Web Developer"
            company="Geeks OF Kolachi"
            time="winter 2023"
            address="7th floor Fortune Tower Sara-e-Failsal, karachi, Sindh "
            work="As a junior developer, I began my journey at GOK, joining a team with the responsibility of building user-friendly websites using React and Next.js. During my time there, I also had the opportunity to contribute to the development of hybrid mobile applications on the React Native platform. It was an exciting learning experience, and
             I actively participated in various projects to enhance my skills and knowledge in web and mobile development."
          />
          <Details
            position="Web Developer"
            company="Geeks OF Kolachi"
            time="winter 2023"
            address="7th floor Fortune Tower Sara-e-Failsal, karachi, Sindh "
            work="As a junior developer, I began my journey at GOK, joining a team with the responsibility of building user-friendly websites using React and Next.js. During my time there, I also had the opportunity to contribute to the development of hybrid mobile applications on the React Native platform. It was an exciting learning experience, and
             I actively participated in various projects to enhance my skills and knowledge in web and mobile development."
          />
          <Details
            position="Web Developer"
            company="Geeks OF Kolachi"
            time="winter 2023"
            address="7th floor Fortune Tower Sara-e-Failsal, karachi, Sindh "
            work="As a junior developer, I began my journey at GOK, joining a team with the responsibility of building user-friendly websites using React and Next.js. During my time there, I also had the opportunity to contribute to the development of hybrid mobile applications on the React Native platform. It was an exciting learning experience, and
             I actively participated in various projects to enhance my skills and knowledge in web and mobile development."
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
