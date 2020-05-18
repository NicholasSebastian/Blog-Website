import React from "react";

import Template from "../components/template";
import Styles from "../styles/pages/projects.module.css";

const Projects = () => {
  return (
    <Template title="Nicholas Sebastian - Projects" description="Projects Page">
      <div className={Styles.heading}>Projects</div>
      <div className={Styles.container}>
        <h1>Featured Projects</h1>
        <div>content goes here</div>
        <h1>Software Repository</h1>
        <div>content from GitHub API goes here</div>
      </div>
    </Template>
  );
};

export default Projects;
