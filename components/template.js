import React from "react";
import Head from "next/head";

import Navbar from "./navbar";
import Footer from "./footer";

const Template = ({ children, title, description }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description}></meta>
        <meta name="author" content="Nicholas Sebastian Hendrata"></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <Navbar />
      </header>

      <main>{children}</main>

      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Template;
