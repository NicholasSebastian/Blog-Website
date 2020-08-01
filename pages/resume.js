import React from "react";

import Template from "../components/template";
import Styles from "../styles/pages/resume.module.css";

const Resume = () => {
  return (
    <Template title="Nicholas Sebastian - CV" description="Resume">
      <div className={Styles.heading}>CV / Resume</div>
      <div className={Styles.container}>
        <div className={Styles.left}>
          <p>
            <div>Name</div>Nicholas Sebastian Hendrata
            <br />
            <div>Email</div>nicholashendrata110900@gmail.com
            <br />
            <div>Phone</div>+6594458310 / +6281287996551
            <br />
            <div>LinkedIn</div>https://linkedin.com/in/nichsebastian/
            <br />
            <div>GitHub</div>https://github.com/NicholasSebastian
            <br />
            <br />
            <b>Programming Languages</b>
            <br />
            JavaScript - Python - C# - Java - C++
          </p>
          <h1>Education</h1>
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
          <h1>Co-Curricular Activities</h1>
          <p>
            <b>BTB Student Council</b>
            <br />
            <div>2016 - 2017</div>Member of the IT Division
          </p>
        </div>
        <div className={Styles.right}>
          <h1 style={{ marginTop: 0 }}>Skills</h1>
          <ul>
            <li>Full-stack Web Development with the MERN stack.</li>
            <li>Mobile App Development with React Native.</li>
            <li>
              Desktop App Development with JavaScript and Electron or C++ and
              WxWidgets.
            </li>
            <li>Desktop Game Development with C# and Unity Engine.</li>
            <li>
              Basic workflow automation and web scraping with Python and
              Selenium.
            </li>
            <li>Adept in the use of Bash and Zsh Terminals.</li>
            <li>Adept in the use of Microsoft Office applications.</li>
            <li>Basic knowledge in the use Adobe Photoshop.</li>
            <li>Fluent in English and the Indonesian Language.</li>
          </ul>
          <h1>Experience</h1>
          <p>
            <b>Shopee Code League 2020</b>
            <br />
            <div>Aug 2020</div>Ongoing
            <br />
            <br />
            <b>SIM Data Hackathon</b>
            <br />
            <div>Jan 2020</div>Third Place Winner / Best Demo
          </p>
        </div>
      </div>
    </Template>
  );
};

export default Resume;
