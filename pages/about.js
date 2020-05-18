import React from "react";

import Template from "../components/template";
import Styles from "../styles/pages/about.module.css";

const About = () => {
  return (
    <Template title="Nicholas Sebastian - About" description="About Page">
      <div className={Styles.heading}>About me</div>
      <div className={Styles.container}>
        <div className={Styles.left}>
          <h1>Introduction</h1>
          <p>
            I'm Nicholas Sebastian, a hobbyist programmer, and I usually spend
            my time working on personal projects to learn new things and learn
            of all the things that I can accomplish with software. I'm currently
            a second year undergraduate student in Singapore pursuing a degree
            in computer science from the University of Wollongong.
            <br />
            <br />
            I am relatively fluent in C# and JavaScript ES6+, HTML and CSS too
            if you consider them as programming languages, and I also have
            confidence in writing Java and Python. I first started programming
            on my 3rd year of middle school, when I made small games with C#
            through Unity. I then took private classes in Python programming
            through my high school years. I also had HTML and CSS lessons
            throghout my whole life in school if you count them in. I recently
            learned JavaScript by myself and now take Java classes in my college
            classes. I still learn more things everyday and I aspire to have a
            career that will allow me to channel my passion in programming and
            make the most out of my abilities.
            <br />
            <br />I originally made this website simply because I randomly
            thought of making a personal blogging website when I was looking for
            ideas to start a personal project on, but then not only that, I then
            remembered all the times I had so much in my mind, like from the
            things I've learned, to random opinions and concepts I have in my
            head. I learn new things everyday and the idea is that with the
            blogs, I can occassionally share the things I've learned or
            experienced.
          </p>
          <h2>My setup</h2>
          <ul>
            <li>
              <div>
                <b>Laptop :</b>
              </div>
              13" Macbook Pro
            </li>
            <li>
              <div>
                <b>Code Editor :</b>
              </div>
              Visual Studio Code
            </li>
            <li>
              <div>
                <b>Shell :</b>
              </div>
              Zsh Terminal
            </li>
          </ul>
          <h2>Colophon</h2>
          <p>
            Like any website, this website was written in HTML, CSS and
            JavaScript. But in addition, it was written with the Next.js
            framework, which is a framework built on top of the React front-end
            framework. Although its normally used for dynamic, server-rendered
            React applications and websites, it also supports static site
            generation, which is what I used for this website. Initially I had
            difficulty choosing between Gatsby and Next, but then I finally
            decided on Next because of its greater versatility among other
            things.
            <br />
            <br />
            This website is hosted on the Netlify CDN, and its codebase is
            managed with Git and GitHub. The font being used throughout the site
            is called Swap, served by Google Fonts. The backdrop used in the
            home page is an open source image from Pixabay. This site was built
            in with modern standards so it might not look well in older
            browsers.
          </p>
        </div>
        <div className={Styles.right}>
          <h2>Languages I use</h2>
          <div style={{ backgroundColor: "#ffff00" }}>
            HTML / CSS / JavaScript
          </div>
          <div style={{ backgroundColor: "#ff4000", color: "white" }}>Java</div>
          <div style={{ backgroundColor: "#bf00ff", color: "white" }}>
            C Sharp
          </div>
          <div style={{ backgroundColor: "#0040ff", color: "white" }}>
            Python
          </div>
        </div>
      </div>
    </Template>
  );
};

export default About;
