import React from "react";
import Link from "next/link";
import Styles from "../styles/components/navbar.module.css";

const Navbar = () => {
  return (
    <div className={Styles.navbar}>
      <div className={Styles.container}>
        <div className={Styles.left}>
          <h1>Nicholas Sebastian.</h1>
        </div>
        <div className={Styles.right}>
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/blog">
            <a>Blog</a>
          </Link>
          <Link href="/projects">
            <a>Projects</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
