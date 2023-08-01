import React, { useRef } from "react";
import Head from "next/head";
import Layout from "@/Components/Layout";
import AnimatedText from "@/Components/AnimatedText";
import Link from "next/link";
import Image from "next/image";
import article1 from "../../public/images/articles/pagination component in reactjs.jpg";
import article2 from "../../public/images/articles/form validation in reactjs using custom react hook.png";
import article3 from "../../public/images/articles/smooth scrolling in reactjs.png";
import article4 from "../../public/images/articles/create modal component in react using react portals.png";
import article5 from "../../public/images/articles/todo list app built using react redux and framer motion.png";

import { motion, useMotionValue } from "framer-motion";

const FramerImage = motion(Image);

const MovingImage = ({ title, img, link }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const imgRef = useRef(null);

  function handleMouse(event) {
    imgRef.current.style.display = "inline-block";
    x.set(event.pageX);
    y.set(-10);
  }
  function handleMouseLeave(event) {
    imgRef.current.style.display = "none";
    x.set(0);
    y.set(0);
  }
  return (
    <Link
      href={link}
      target="_blank"
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}
    >
      <h2 className="capitalize text-lg font-semibold hover:underline">
        {title}
      </h2>
      <FramerImage
        style={{ x: x, y: y }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 0.2 } }}
        ref={imgRef}
        src={img}
        alt={title}
        className="z-10 w-96 h-auto hidden absolute rounded-lg"
      />
    </Link>
  );
};
const Article = ({ img, title, date, link }) => {
  return (
    <motion.li
      initial={{ y: 200 }}
      whileInView={{ y: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
      viewport={{ once: true }}
      className="relative w-[85%] p-4 py-4 my-4 rounded-xl flex items-center justify-between bg-light text-dark first:mt-0 border border-solid border-dark border-r-4 border-b-4"
    >
      <MovingImage title={title} img={img} link={link} />
      <span className="text-primary font-semibold pl-4">{date}</span>
    </motion.li>
  );
};

const FeaturedArticle = ({ title, time, link, summary, img }) => {
  return (
    <li className="relative col-span-1 w-[75%] h-[100%] ml-[12%] p-4  bg-light border border-solid border-dark rounded-2xl">
      <div className=" absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl" />

      <Link
        href={link}
        target="_blank"
        className="w-full inline-block cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
      </Link>
      <Link href={link} target="_blank">
        <h2 className="capitalize text-2xl font-bold my-2 mt-4  hover:underline">
          {title}
        </h2>
        <p className="text-sm mb-2 ">{summary}</p>
        <span className="text-primary font-semibold">{time}</span>
      </Link>
    </li>
  );
};

const articles = () => {
  return (
    <>
      <Head>
        <title>Irfan Haider | Articles Page</title>
        <meta name="description" content="description"></meta>
      </Head>
      <main className="w-full mb-16 flex flex-col items-center justify-center overflow-hidden">
        <Layout className="pt-12 mb-36">
          <AnimatedText text="Words can change the world!" className="mb-16 " />
          <ul className=" grid grid-cols-2 items-center">
            <FeaturedArticle
              title="Build A Custom Pagination Component In Reactjs From Scratch"
              summary="Learn how to build a custom pagination component in ReactJS from scratch. 
            Follow this step-by-step guide to integrate Pagination component in your ReactJS project."
              time="9 min read"
              link="/"
              img={article1}
            />

            <FeaturedArticle
              title="Build A Custom Pagination Component In Reactjs From Scratch"
              summary="Learn how to build a custom pagination component in ReactJS from scratch. 
            Follow this step-by-step guide to integrate Pagination component in your ReactJS project."
              time="9 min read"
              link="/"
              img={article1}
            />
          </ul>
          <h2 className="font-bold text-4xl w-full text-center my-16 mt-32">
            All Articles
          </h2>
          <ul className="flex flex-col items-center">
            <Article
              title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
              date="1st August 2023"
              link="/"
              img={article2}
            />
            <Article
              title="Silky Smooth Scrolling In Reactjs: A Step-By-Step Guide For React Developers"
              date="1st August 2023"
              link="/"
              img={article3}
            />
            <Article
              title="Creating An Efficient Modal Component In React Using Hooks And Portals"
              date="1st August 2023"
              link="/"
              img={article4}
            />
            <Article
              title="Build A Fabulous Todo List App With React, Redux And Framer-Motion"
              date="1st August 2023"
              link="/"
              img={article5}
            />
            <Article
              title="Build A Fabulous Todo List App With React, Redux And Framer-Motion"
              date="1st August 2023"
              link="/"
              img={article5}
            />
            <Article
              title="Build A Fabulous Todo List App With React, Redux And Framer-Motion"
              date="1st August 2023"
              link="/"
              img={article5}
            />
            <Article
              title="Build A Fabulous Todo List App With React, Redux And Framer-Motion"
              date="1st August 2023"
              link="/"
              img={article5}
            />
            <Article
              title="Build A Fabulous Todo List App With React, Redux And Framer-Motion"
              date="1st August 2023"
              link="/"
              img={article5}
            />
          </ul>
        </Layout>
      </main>
    </>
  );
};

export default articles;
