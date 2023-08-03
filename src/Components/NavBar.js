import React, { useState } from "react";
import Link from "next/link";
import Logo from "./Logo";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { GithubIcon, LinkedInIcon, SunIcon, MoonIcon } from "./Icons";
import useThemeSwitcher from "./hooks/useThemeSwitcher";

const CustomLink = ({
  href,
  title,
  className = "https://www.linkedin.com/in/irfan-haider-shareefi-09907424b/",
}) => {
  const router = useRouter();

  return (
    <Link
      aria-label={href}
      href={href}
      className={`${className} relative group`}
    >
      {title}
      <span
        className={`h-0.5 inline-block bg-dark absolute left-0 -bottom-0.5  group-hover:w-full transition-[width] ease duration-300 ${
          router.asPath === href ? "w-full" : "w-0"
        } dark:bg-light`}
      >
        &nbsp;
      </span>
    </Link>
  );
};
const CustomMobileLink = ({ href, title, className = "", toggle }) => {
  const router = useRouter();
  const handleClick = () => {
    toggle();
    router.push(href);
  };
  return (
    <button
      href={href}
      aria-label={href}
      className={`${className} relative group text-light dark:text-dark my-2`}
      onClick={handleClick}
    >
      {title}
      <span
        className={`h-0.5 inline-block bg-light absolute left-0 -bottom-0.5  group-hover:w-full transition-[width] ease duration-300 ${
          router.asPath === href ? "w-full" : "w-0"
        } dark:bg-dark`}
      >
        &nbsp;
      </span>
    </button>
  );
};
const NavBar = () => {
  const [mode, setmode] = useThemeSwitcher(0);
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className="w-full px-32 py-8 font-medium flex items-center justify-between dark:text-light relative z-10 lg:px-16 md:px-12 sm:px-8">
      <button
        aria-label="home-page"
        className="flex-col justify-center items-center hidden lg:flex"
        onClick={handleClick}
      >
        <span
          className={`bg-dark dark:bg-light transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm -translate-y-0.5 ${
            isOpen ? "rotate-45 !translate-y-2.5" : "-translate-y-0.5"
          }`}
        ></span>
        <span
          className={`bg-dark dark:bg-light transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm my-0.5 ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        ></span>
        <span
          className={`bg-dark dark:bg-light transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm translate-y-0.5  ${
            isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
          }`}
        ></span>
      </button>
      <div className="w-full flex justify-between items-center lg:hidden">
        <nav>
          <CustomLink
            aria-label="home-page"
            href="/"
            title="Home"
            className="mr-4"
          />
          <CustomLink
            aria-label="about-page"
            href="/About"
            title="About"
            className="mx-4"
          />
          <CustomLink
            aria-label="project-page"
            href="/Project"
            title="Projects"
            className="mx-4"
          />
        </nav>
        <nav className="flex items-center justify-center flex-wrap">
          <motion.a
            aria-label="github"
            href="https://github.com/Shareefi619?tab=repositories"
            target="_blank"
            className="w-6 mr-3"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
          >
            <GithubIcon />
          </motion.a>
          <motion.a
            aria-label="linkdin"
            href="https://www.linkedin.com/in/irfan-haider-shareefi-09907424b/"
            target="_blank"
            className="w-6 mr-3"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
          >
            <LinkedInIcon />
          </motion.a>
          <div className="h-5 w-9">
          <button
            aria-label="dark-mode"
            onClick={() => setmode(mode === "light" ? "dark" : "light")}
            className={`ml-3 flex items-center justify-center rounded-full !p-1 ${
              mode === "light" ? "bg-dark text-light" : "bg-light text-dark"
            }`}
          >
            {mode === "dark" ? (
              
                <SunIcon className={"fill-dark"} />
              
            ) : (
              
                <MoonIcon className={"fill-dark"} />
              
            )}
          </button>
          </div>
        </nav>
      </div>
      {isOpen ? (
        <motion.div
          initial={{ scale: 0, opacity: 0, x: "-50", y: "-50" }}
          animate={{ scale: 1, opacity: 1 }}
          className="min-w-[70vw] w- flex flex-col justify-between z-30 items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32"
        >
          <nav className="flex flex-col items-center justify-center ">
            <CustomMobileLink
              aria-label="home-page"
              href="/"
              title="Home"
              className=""
              toggle={handleClick}
            />
            <CustomMobileLink
              aria-label="about-page"
              href="/About"
              title="About"
              className=""
              toggle={handleClick}
            />
            <CustomMobileLink
              aria-label="project-page"
              href="/Project"
              title="Projects"
              className=""
              toggle={handleClick}
            />
          </nav>
          <nav className="flex !items-center justify-center flex-wrap mt-2">
            <motion.a
              aria-label="github"
              href="https://github.com/Shareefi619?tab=repositories"
              target="_blank"
              className="w-6 mr-3 bg-light rounded-full dark:bg-dark sm:mx-1"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <GithubIcon />
            </motion.a>
            <motion.a
              aria-label="LinkeIn"
              href="https://www.linkedin.com/in/irfan-haider-shareefi-09907424b/"
              target="_blank"
              className="w-6 mr-3 sm:mx-1"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <LinkedInIcon />
            </motion.a>

            <div className="w-9 h-8">
              <button
                aria-label="dark-mode"
                onClick={() => setmode(mode === "light" ? "dark" : "light")}
                className={`ml-3 flex items-center justify-center rounded-full p-1 sm:mx-1 ${
                  mode === "light" ? "bg-dark text-light" : "bg-light text-dark"
                }`}
              >
                {mode === "dark" ? (
                  <SunIcon className={"fill-dark"} />
                ) : (
                  <MoonIcon className={"fill-dark"} />
                )}
              </button>
            </div>
          </nav>
        </motion.div>
      ) : null}
      <div className=" absolute left-1/2 top-2 -translate-x-1/2">
        <Logo />
      </div>
    </header>
  );
};

export default NavBar;
