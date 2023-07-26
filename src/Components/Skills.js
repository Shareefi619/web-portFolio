import React from "react";
import { motion } from "framer-motion";

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full bg-dark font-semibold text-light px-6 py-3 shadow-dark cursor-pointer absolute"
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y }}
      transition={{ duration: 1.5 }}
      viewport={{once: true}}
    >
      {name}
    </motion.div>
  );
};

function Skills() {
  return (
    <>
      <h2 className="font-bold text-8xl mt-64 w-full text-center">Skills</h2>
      <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight">
        <motion.div
          className="flex items-center justify-center rounded-full bg-dark font-semibold text-light p-6 shadow-dark cursor-pointer"
          whileHover={{ scale: 1.05 }}
        >
          WEB
        </motion.div>
        <Skill name="HTML" x="13vw" y="4vw" />
        <Skill name="CSS" x="-13vw" y="-4vw" />
        <Skill name="JAVASCRIPT" x="17vw" y="-7vw" />
        <Skill name="TAILWINDCSS" x="-27vw" y="-16vw" />
        <Skill name="REACTJS" x="-5vw" y="10vw" />
        <Skill name="NEXTJS" x="-28vw" y="0vw" />
        <Skill name="MongoDB" x="-5vw" y="-10vw" />
        <Skill name="NODEJS" x="0vw" y="-18vw" />
        <Skill name="EXPRESS" x="30vw" y="0vw" />
        <Skill name="FRAMER MOTION" x="10vw" y="17vw" />
      </div>
    </>
  );
}

export default Skills;
