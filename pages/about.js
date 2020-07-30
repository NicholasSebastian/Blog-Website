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
            a second year undergraduate student{" "}
            <a href="https://www.simge.edu.sg/programme/bachelor-of-computer-science-game-and-mobile-development/">
              in Singapore
            </a>{" "}
            pursuing a degree in{" "}
            <a href="https://coursefinder.uow.edu.au/information/index.html?course=b-computer-science-game-and-mobile-dev">
              computer science
            </a>{" "}
            from the{" "}
            <a href="https://www.uow.edu.au/">University of Wollongong</a>.
            <br />
            <br />I know JavaScript ES6+, Java, C# and Python. HTML and CSS too
            if you consider them languages. I first started programming on my
            3rd year of middle school, when I made small games with C# through{" "}
            <a href="https://unity.com/">Unity</a>. I then took private classes
            to learn Python through my high school years. I also had HTML and
            CSS lessons throghout my school years if you count them in. These
            past two years I learned JavaScript by myself and Java in my college
            classes, and am now learning C++ by myself. I still learn more
            things everyday and I aspire to one day have a career that will
            allow me to channel my passion in programming and make the most out
            of my abilities.
            <br />
            <br />
            The purpose of this website? I honestly have no idea. I originally
            made this on a whim, but this blog turned out to be quite of use to
            me. I occassionally feel like sharing the things that I've learned
            or experienced and this is probably where I'll turn to.
          </p>
          <h2>Education</h2>
          <p>
            <b>Bachelors of Computer Science</b>
            <br />
            <div>2019 - 2022</div>University of Wollongong - SIM
            <br />
            <br />
            <b>Certificate of Higher Education in Social Sciences</b>
            <br />
            <div>2018 - 2019</div>University of London - SIM
            <br />
            <br />
            <b>International Baccalaureate</b>
            <br />
            <div>2016 - 2018</div>Bina Tunas Bangsa International School
            <br />
            <br />
            <b>Cambridge IGCSE</b>
            <br />
            <div>2014 - 2016</div>Bina Tunas Bangsa International School
          </p>
          <h2>Colophon</h2>
          <p>
            The front-end uses <a href="https://nextjs.org/">Next.js</a>, a
            framework built on top of the{" "}
            <a href="https://reactjs.org/">React</a> framework.
            <br />
            This website is hosted on{" "}
            <a href="https://www.netlify.com/">Netlify</a>, and its codebase is
            managed with Git and GitHub. <br />
            The font being used throughout the site is called{" "}
            <a href="https://fonts.google.com/specimen/swap">Swap</a>, served by
            Google Fonts. <br />
            The favicon is made by{" "}
            <a href="https://www.flaticon.com/authors/freepik">Freepik</a> from
            FlatIcon. <br />
            The backdrop used in the home page is an open source image from{" "}
            <a href="https://pixabay.com/">Pixabay</a>. <br />
            This site was built with modern browsers in mind so it might not
            look well in older ones.
          </p>
        </div>
        <div className={Styles.right}>
          <h2>Other Stuff</h2>
          <ul>
            <li>
              <h3>Email</h3>
              <div>nicholashendrata110900@gmail.com</div>
              <a href="mailto:nicholashendrata110900@gmail.com">
                <button>Go</button>
              </a>
            </li>
            <li>
              <h3>GitHub</h3>
              <div>NicholasSebastian</div>
              <a href="https://github.com/NicholasSebastian">
                <button>Go</button>
              </a>
            </li>
            <li>
              <h3>LinkedIn</h3>
              <div>nichsebastian</div>
              <a href="https://www.linkedin.com/in/nichsebastian">
                <button>Go</button>
              </a>
            </li>
            <li>
              <h3>Instagram</h3>
              <div>nicholashendrata</div>
              <a href="https://www.instagram.com/nicholashendrata">
                <button>Go</button>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </Template>
  );
};

export default About;
