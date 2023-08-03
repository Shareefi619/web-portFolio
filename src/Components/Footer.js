import React from "react";
import Layout from "./Layout";
import Link from "next/link";
const Footer = () => {
  return (
    <footer
      className="w-full h-4 border-t-2 border-solid border-dark font-small dark:text-light
     dark:border-light"
    >
      <Layout className="py-8 flex items-center justify-between xl:py-12 lg:py-10 sm:flex-row lg:flex-row lg:text-lg sm:items-center sm:text-[10px] xs:flex-row xs:text-[10px] xxs:flex-row xxs:text-[7px]">
        <span>{new Date().getFullYear()}&copy; All Rights Reserved</span>
        <div className="flex items-center lg:py-2 xs:p-0 sm:p-0">
          Build With{" "}
          <span className="text-primary dark:text-primaryDark text-2xl px-1">
            &#9825;
          </span>
          by &nbsp;
          <Link
            aria-label="home-page"
            href="/"
            className="underline underline-offset-2"
          >
            Irfan Haider
          </Link>
        </div>
      </Layout>
    </footer>
  );
};

export default Footer;
