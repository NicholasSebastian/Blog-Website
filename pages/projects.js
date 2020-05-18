import React, { useState, useEffect } from "react";

import Template from "../components/template";
import Styles from "../styles/pages/projects.module.css";

const Projects = () => {
  // State to store array of repositories.
  const [repoArray, setRepoArray] = useState(null);

  // Similar to componentDidMount and componentDidUpdate.
  useEffect(async () => {
    // Fetch repositories from github API.
    const response = await fetch(
      "https://api.github.com/users/NicholasSebastian/repos?sort=created"
    );
    const data = await response.json();
    setRepoArray(data);
  }, []); // Empty array as input so it will only be called once in the beginning.
  // So basically now its just like componentDidMount.

  return (
    <Template title="Nicholas Sebastian - Projects" description="Projects Page">
      <div className={Styles.heading}>Projects</div>
      <div className={Styles.container}>
        <h1>Featured Projects</h1>
        <div>coming soon...</div>

        <h1>Software Repository</h1>
        <p>
          My public repositories fetched straight from
          github.com/NicholasSebastian.
          <br />
          You can click on any of the entries to view their source code on
          GitHub.
          <br />
          I'm aware that current implementation isn't the best since it might
          spam GitHub with requests as a request is sent with every user that
          visits this page, but it gets the job done for now. I'll be sure to
          find a better way to do this in the future.
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
          {repoArray &&
            repoArray.map((repo) => {
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

export default Projects;
