import React from "react";
import Layout from "./Layout";
import Link from "next/link";
const Footer = () => {
  return (
    <footer
      className="w-full h-4 border-t-2  border-solid border-dark font-small dark:text-light
     dark:border-light"
    >
      <Layout className="py-8 flex items-center justify-between lg:flex-col lg:py-6 sm:text-base sm:flex-row sm:items-center sm:text-[9px] xs:flex-row xs:text-[10px]">
        <span>{new Date().getFullYear()}&copy; All Rights Reserved</span>
        <div className="flex items-center  lg:py-2 xs:p-0 sm:p-0">
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
