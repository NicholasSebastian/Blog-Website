import React from "react";

import Template from "../components/template";
import Styles from "../styles/pages/projects.module.css";

const Projects = ({ data }) => {
  return (
    <Template title="Nicholas Sebastian - Projects" description="Projects Page">
      <div className={Styles.heading}>Projects</div>
      <div className={Styles.container}>
        <h1>Personal Projects</h1>
        <div>coming soon...</div>

        <h1>Software Repository</h1>
        <p>
          My public repositories taken straight from
          github.com/NicholasSebastian.
          <br />
          You can click on any of the entries to view their source code on
          GitHub.
        </p>
        <div className={Styles.repositories}>
          <div>
            <div className={Styles.repo_name}>
              <b>Repository Name</b>
            </div>
            <div className={Styles.repo_desc}>
              <b>Description</b>
            </div>
            <div className={Styles.repo_lang}>
              <b>Language</b>
            </div>
            <div className={Styles.repo_date}>
              <b>Created at</b>
            </div>
          </div>
          {data &&
            data.map((repo) => {
              return (
                <a key={repo} href={repo.html_url}>
                  <div className={Styles.repo_entry}>
                    <div className={Styles.repo_name}>{repo.name}</div>
                    <div className={Styles.repo_desc}>
                      {repo.description.length < 75
                        ? repo.description
                        : repo.description.substring(0, 75) + "..."}
                    </div>
                    <div className={Styles.repo_lang}>{repo.language}</div>
                    <div className={Styles.repo_date}>
                      {repo.created_at.substring(0, 10)}
                    </div>
                  </div>
                </a>
              );
            })}
        </div>
      </div>
    </Template>
  );
};

export const getStaticProps = async () => {
  // Fetch repositories from github API.
  const response = await fetch(
    "https://api.github.com/users/NicholasSebastian/repos?sort=created"
  );
  const data = await response.json();

  return {
    props: {
      data: data,
    },
  };
};

export default Projects;
