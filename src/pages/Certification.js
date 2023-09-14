import AnimatedText from "@/Components/AnimatedText";
import Layout from "@/Components/Layout";
import Head from "next/head";
import Link from "next/link";
import React, { useRef } from "react";
import javascript from "public/images/certificates/JavaScript.png";
import Image from "next/image";
import { motion, useMotionValue } from "framer-motion";

const FramerImage = motion(Image);
const MovingImage = ({ title, img, link }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const imgRef = useRef(null);

  const handleMouse = (event) => {
    imgRef.current.style.display = "inline-block";
    x.set(event.pageX);
    y.set(-10);
  };
  const handleMouseLeave = (event) => {
    imgRef.current.style.display = "none";
    x.set(0);
    y.set(0);
  };
  return (
    <Link
      href={link}
      target="_blank"
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}
    >
      <h2 className="capitalize text-xl font-semibold hover:underline">
        {title}
      </h2>
      <FramerImage
        style={{ x: x, y: y }}
        ref={imgRef}
        src={img}
        alt={title}
        initial={{ opacity: 0 }}
        className="w-96 h-auto hidden absolute rounded-lg z-10 md:!hidden"
        whileInView={{ opacity: 1, transition: { duration: 0.2 } }}
      />
    </Link>
  );
};

const Certificates = ({ img, title, date, link }) => {
  return (
    <motion.li
      initial={{ y: 200 }}
      whileInView={{ y: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
      viewport={{ once: true }}
      className="relative w-full p-4 py-6 my-4 rounded-xl flex items-center justify-between bg-light text-dark first:mt-0 border border-solid border-dark border-r-4 border-b-4 dark:border-light dark:bg-dark dark:text-light sm:flex-col" 
    >
      <MovingImage title={title} img={img} link={link} />
      <span className=" text-primary font-semibold pl-4 sm:pl-0 xs:text-sm sm:self-start dark:text-primaryDark">{date}</span>
    </motion.li>
  );
};
function Certification() {
  return (
    <>
      <Head>
        <title>Irfan Haider | Certification Page</title>
        <meta name="description" content="description"></meta>
      </Head>
      <main className="w-full mb-16 flex flex-col items-center justify-center overflow-hidden">
        <Layout className="pt-16 mb-16">
          <AnimatedText
            text="Certification"
            className="mb-8 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />
          <ul>
            <Certificates
              title="JavaScript Algorithms and Data Structures "
              date="September, 18 2022"
              link="https://www.freecodecamp.org/certification/IrfanHaiderShareefi/javascript-algorithms-and-data-structures"
              img={javascript}
            />
            <Certificates
              title="Front End Development Libraries"
              date="July, 04 2023"
              link="https://www.freecodecamp.org/certification/IrfanHaiderShareefi/front-end-development-libraries"
              img={javascript}
            />
          </ul>
        </Layout>
      </main>
    </>
  );
}

export default Certification;
