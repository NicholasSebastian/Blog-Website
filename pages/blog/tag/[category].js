import React from "react";
import Link from "next/link";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

import Template from "../../../components/template";
import Styles from "../../../styles/pages/blog.module.css";

const Blog = ({ data, categories, currentCategory }) => {
  return (
    <Template
      title={"Nicholas Sebastian - " + currentCategory + " Posts"}
      description="Blog Posts"
    >
      <div className={Styles.heading}>{currentCategory}</div>
      <div className={Styles.container}>
        <div className={Styles.left}>
          <h3>Showing results for: {currentCategory}</h3>
          {data.map((datum) => {
            return (
              <div key={datum}>
                <Link href={"/blog/" + datum.filepath}>
                  <h3>{datum.title}</h3>
                </Link>
                <span>{datum.date}</span>
                <p>{datum.description}</p>
                <div>
                  {datum.tags.map((tag) => {
                    return <div key={tag}>{tag}</div>;
                  })}
                </div>
              </div>
            );
          })}
        </div>
        <div className={Styles.right}>
          <h2>Filter by tag</h2>
          <ul>
            {categories.map((category) => {
              return (
                <Link
                  href={"/blog/tag/" + category.replace(" ", "-").toLowerCase()}
                >
                  <li>{category}</li>
                </Link>
              );
            })}
          </ul>
        </div>
      </div>
    </Template>
  );
};

export const categories = [
  "Technical",
  "Personal",
  "Code",
  "Design",
  "Web Development",
  "Game Development",
];

export const getStaticPaths = async () => {
  const paths = categories.map((category) => {
    return {
      params: {
        category: category.replace(" ", "-").toLowerCase(),
      },
    };
  });

  return {
    paths: paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params: { category } }) => {
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
  const dataStrings = data.map((info) => {
    return {
      filepath: info.filepath,
      title: info.title,
      description: info.description,
      date: info.date.toDateString().substring(3),
      tags: info.tags,
    };
  });

  // Filter out posts with no tags that match the category name.
  let result = dataStrings.filter((dataString) =>
    dataString.tags
      .map((tag) => tag.replace(" ", "-").toLowerCase())
      .includes(category)
  );

  // Get the current category name.
  const categoryName =
    category.substring(0, 1).toUpperCase() +
    category.substring(1).replace("-", " ");

  return {
    props: {
      data: result,
      categories: categories,
      currentCategory: categoryName,
    },
  };
};

export default Blog;
