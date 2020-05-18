import React from "react";

import Template from "../components/template";
import Styles from "../styles/pages/projects.module.css";

const Projects = () => {
  return (
    <Template title="Nicholas Sebastian - Projects" description="Projects Page">
      <div className={Styles.heading}>Projects</div>
      <div className={Styles.container}>
        <h1>Projects Page</h1>
      </div>
    </Template>
  );
};

export default Projects;
