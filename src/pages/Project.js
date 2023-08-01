import React from "react";
import Head from "next/head";
import Layout from "@/Components/Layout";
import AnimatedText from "@/Components/AnimatedText";
import Link from "next/link";
import Image from "next/image";
import { GithubIcon } from "@/Components/Icons";
import project1 from "../../public/images/projects/forkify.PNG";
import { motion } from "framer-motion";

const FramerImage = motion(Image);
const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article className="w-[75%] mx-[15%] flex items-center justify-center rounded-br-2xl rounded-3xl relative border border-solid border-dark bg-light shadow-2xl p-6">
      <div className=" absolute top-0 -right-3 -z-10 w-[102%] h-[103%]  rounded-[2.5rem] bg-dark rounded-br-3xl" />

      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-[350px] ml-12"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
      </Link>
      <div className="w-1/2 flex flex-col items-start justify-between pl-6">
        <span className="text-primary font-medium text-xl">{type}</span>
        <Link
          href={link}
          target="_blank"
          className=" hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold">{title}</h2>
        </Link>
        <p className="py-2 font-medium text-dark">{summary}</p>
        <div className="mt-2 flex items-center ">
          <Link href={github} alt={title} className="w-10">
            <GithubIcon />
          </Link>
          <Link
            href={link}
            alt={title}
            className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold"
          >
            Visit Project!
          </Link>
        </div>
      </div>
    </article>
  );
};

const Projects = ({ type, title, img, link, github }) => {
  return (
    <article className="w-[75%] mx-[15%] flex  flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative">
      <div className=" absolute top-0 -right-3 -z-10 w-[101%] h-[102%]  rounded-[2rem] bg-dark rounded-br-1xl" />

      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-[250px]"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
      </Link>
      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary font-medium text-xl">{type}</span>
        <Link
          href={link}
          target="_blank"
          className=" hover:underline underline-offset-2"
        >
          <h2 className="w-full my-2 text-left text-3xl font-bold">{title}</h2>
        </Link>
        <div className="w-full mt-2 flex items-center justify-between">
          <Link
            href={link}
            alt={title}
            className="text-lg font-semibold underline"
          >
            Visit!
          </Link>
          <Link href={github} alt={title} className="w-8">
            <GithubIcon />
          </Link>
        </div>
      </div>
    </article>
  );
};
const Project = () => {
  return (
    <>
      <Head>
        <title>Irfan Haider | Project Page</title>
        <meta name="description" content="description"></meta>
      </Head>
      <main className="w-full mb-16 flex flex-col items-center justify-center">
        <Layout className="pt-16 ">
          <AnimatedText text="Imagination Trumps Knowledge" className="mb-16" />
          <div className="grid grid-cols-12 gap-24">
            <div className=" col-span-12">
              <FeaturedProject
                type="Featured Project"
                title="Food Recipe Website"
                summary="A User-Friendly Food Recipe Website that provides different recipes from all around the world to their users."
                link="https://myrecipes-irfan.netlify.app/"
                github="https://github.com/Shareefi619/Forkify-App"
                img={project1}
              />
            </div>
            <div className="col-span-6">
              <Projects
                type="Project 1"
                title="Food Recipe Website"
                link="https://myrecipes-irfan.netlify.app/"
                github="https://github.com/Shareefi619/Forkify-App"
                img={project1}
              />
            </div>
            <div className="col-span-6">
              <Projects
                type="Project 1"
                title="Food Recipe Website"
                link="https://myrecipes-irfan.netlify.app/"
                github="https://github.com/Shareefi619/Forkify-App"
                img={project1}
              />
            </div>
            <div className=" col-span-12">
              <FeaturedProject
                type="Featured Project"
                title="Food Recipe Website"
                summary="A User-Friendly Food Recipe Website that provides different recipes from all around the world to their users."
                link="https://myrecipes-irfan.netlify.app/"
                github="https://github.com/Shareefi619/Forkify-App"
                img={project1}
              />
            </div>
            <div className="col-span-6">
              <Projects
                type="Project 1"
                title="Food Recipe Website"
                link="https://myrecipes-irfan.netlify.app/"
                github="https://github.com/Shareefi619/Forkify-App"
                img={project1}
              />
            </div>
            <div className="col-span-6">
              <Projects
                type="Project 1"
                title="Food Recipe Website"
                link="https://myrecipes-irfan.netlify.app/"
                github="https://github.com/Shareefi619/Forkify-App"
                img={project1}
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default Project;
