import React from "react";
import Link from "next/link";
import Styles from "../styles/components/footer.module.css";

const Footer = () => {
  return (
    <div className={Styles.footer}>
      <div className={Styles.container}>
        <di className={Styles.left}>
          <span>N</span>
          <div>
            <span>Nicholas Sebastian Hendrata</span>
            <div className={Styles.links}>
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
        </di>
        <div className={Styles.right}>
          <div>2020 © Nicholas Sebastian. All rights reserved.</div>
          <div>Designed and written in Singapore.</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
