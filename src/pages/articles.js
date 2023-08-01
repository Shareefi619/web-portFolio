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
import TransitionEffect from "@/Components/TransitionEffect";

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
        className="z-10 w-96 h-auto hidden absolute rounded-lg md:!hidden sm:md:!hidden xs:md:!hidden"
        priority
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
      className="relative w-[85%] p-4 py-4 my-4 rounded-xl flex items-center justify-between
       bg-light text-dark dark:bg-dark dark:text-light first:mt-0 border border-solid border-dark
        dark:border-light border-r-4 border-b-4
         sm:flex-col"
    >
      <MovingImage title={title} img={img} link={link} />
      <span className="text-primary dark:text-primaryDark font-semibold pl-4 sm:self-start sm:pl-0 xs:text-sm">
        {date}
      </span>
    </motion.li>
  );
};

const FeaturedArticle = ({ title, time, link, summary, img }) => {
  return (
    <li className="relative col-span-1 w-[75%] h-[100%] ml-[12%] p-4  bg-light dark:bg-dark border border-solid border-dark dark:border-light rounded-2xl">
      <div className=" absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light  rounded-br-3xl" />

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
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </Link>
      <Link href={link} target="_blank">
        <h2 className="capitalize text-2xl font-bold my-2 mt-4  hover:underline xs:text-lg">
          {title}
        </h2>
        <p className="text-sm mb-2 ">{summary}</p>
        <span className="text-primary dark:text-primaryDark font-semibold">
          {time}
        </span>
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
      <TransitionEffect/>
      <main className="w-full mb-16 flex flex-col items-center justify-center overflow-hidden dark:text-light">
        <Layout className="pt-12 mb-36">
          <AnimatedText
            text="Words can change the world!"
            className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />
          <ul className=" grid grid-cols-2 gap-16 md:grid-cols-1 md:gap-y-16">
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
