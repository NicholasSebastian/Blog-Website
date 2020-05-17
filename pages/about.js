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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            veniam nostrum libero ut saepe cupiditate reiciendis architecto
            velit, ullam temporibus pariatur esse debitis numquam inventore
            deserunt quaerat quas iure molestias sunt. Expedita laudantium ullam
            tenetur, debitis, labore dolore officiis eveniet nihil laboriosam
            eaque nam earum ad officia reiciendis veniam. Perferendis quod
            labore atque vitae necessitatibus nam odit reprehenderit neque nisi
            odio dignissimos possimus placeat repellendus iure ipsam, non dicta
            quia tenetur natus praesentium id fugiat rem.
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            veniam nostrum libero ut saepe cupiditate reiciendis architecto
            velit, ullam temporibus pariatur esse debitis numquam inventore
            deserunt quaerat quas iure molestias sunt. Expedita laudantium ullam
            tenetur, debitis, labore dolore officiis eveniet nihil laboriosam
            eaque nam earum ad officia reiciendis veniam. Perferendis quod
            labore atque vitae necessitatibus nam odit reprehenderit neque nisi
            odio dignissimos possimus placeat repellendus iure ipsam, non dicta
            quia tenetur natus praesentium id fugiat rem. Neque quia, iusto
            consectetur beatae obcaecati magnam velit fugit distinctio ad,
            delectus doloribus ea nulla earum nam corrupti quasi minima. Fugiat
            quaerat beatae error?
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
