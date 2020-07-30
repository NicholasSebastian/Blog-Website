import React from "react";
import Link from "next/link";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

import Template from "../components/template";
import Entry from "../components/blog_entry";
import Styles from "../styles/pages/index.module.css";

// TODO: Add media queries; make website responsive.

const Index = ({ data }) => {
  return (
    <Template title="Nicholas Sebastian - Home" description="Home Page">
      <div className={Styles.relative}>
        <div className={Styles.backdrop} />
        <div className={Styles.introduction}>
          <div>
            <h1>Hi, I'm Nicholas Sebastian.</h1>
            <p>
              I am a student pursuing a computer science degree from the
              University of Wollongong.
            </p>
            <p>
              Here I post random things, like the things I learned, the things I
              find interesting, etc.
            </p>
            <br />
            <Link href="/projects">
              <button>View Projects</button>
            </Link>
          </div>
        </div>
      </div>
      <div className={Styles.container}>
        <div className={Styles.left}>
          <h1>Latest Blog Posts</h1>
          {data.map((datum) => {
            return <Entry key={datum} datum={datum} />;
          })}
          <Link href="/blog">
            <button>View More Posts</button>
          </Link>
        </div>
        <div className={Styles.right}>
          <h2>Contact Me</h2>
          <form name="contact" method="POST" data-netlify="true">
            <label for="name">Name:</label>
            <br />
            <input name="name" type="text" />
            <br />
            <br />
            <label for="email">Email:</label>
            <br />
            <input name="email" type="email" />
            <br />
            <br />
            <label for="message">Message:</label>
            <br />
            <textarea name="message" />
            <br />
            <br />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </Template>
  );
};

export const getStaticProps = async () => {
  // Get all the files in the posts directory and their paths.
  const files = fs.readdirSync("posts");
  const filepaths = files.map((file) => {
    return {
      filename: file,
      filepath: path.join("posts", file),
    };
  });

  // Get the raw markdown content from each filepath.
  const rawMarkdowns = filepaths.map((filepath) => {
    return {
      filepath: filepath.filename.replace(".md", ""),
      markdown: fs.readFileSync(filepath.filepath).toString(),
    };
  });

  // Parse the front matter of each markdown.
  const parsedMarkdowns = rawMarkdowns.map((rawMarkdown) => {
    return {
      filepath: rawMarkdown.filepath,
      markdown: matter(rawMarkdown.markdown),
    };
  });

  // Convert the front matter into an object for each markdown.
  const data = parsedMarkdowns.map((parsedMarkdown) => {
    return {
      filepath: parsedMarkdown.filepath,
      title: parsedMarkdown.markdown.data.title,
      description: parsedMarkdown.markdown.data.description,
      date: new Date(parsedMarkdown.markdown.data.date),
      tags: parsedMarkdown.markdown.data.tags,
    };
  });

  // Sort the dates from newest to oldest.
  data.sort((data1, data2) => {
    if (data1.date > data2.date) return -1;
    if (data1.date < data2.date) return 1;
    return 0;
  });

  // Convert the date objects into strings.
  let dataString = data.map((info) => {
    return {
      filepath: info.filepath,
      title: info.title,
      description: info.description,
      date: info.date.toDateString().substring(3),
      tags: info.tags,
    };
  });

  // We only want 3 posts in this page.
  if (dataString.length > 3) dataString = dataString.slice(0, 3);

  return {
    props: {
      data: dataString,
    },
  };
};

export default Index;
