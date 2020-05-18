import React from "react";
import Link from "next/link";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import marked from "marked";

import Template from "../../components/template";
import Styles from "../../styles/pages/post.module.css";
import MarkdownStyles from "../../styles/markdown.module.css";

// Template for page.
const Post = ({ data, contents }) => {
  return (
    <Template title={data.title} description={data.description}>
      <div className={Styles.container}>
        <h1>{data.title}</h1>
        <span>{data.date}</span>
        <div className={Styles.tags}>
          {data.tags.map((tag) => {
            return (
              <Link
                key={tag}
                href={"/blog/tag/" + tag.replace(" ", "-").toLowerCase()}
              >
                <div>{tag}</div>
              </Link>
            );
          })}
        </div>
        <div
          className={MarkdownStyles.markdown_body}
          dangerouslySetInnerHTML={{ __html: contents }}
        />
      </div>
    </Template>
  );
};

// Returns an array of objects with paths for fetching the data.
// Generates a page with every path object.
export const getStaticPaths = async () => {
  const files = fs.readdirSync("posts");
  const paths = files.map((filename) => {
    return {
      params: {
        post: filename.replace(".md", ""),
      },
    };
  });

  return {
    paths: paths,
    fallback: false,
  };
};

// Generates a props object to be used in the template.
export const getStaticProps = async ({ params: { post } }) => {
  const filepath = path.join("posts", post + ".md");
  const rawMarkdown = fs.readFileSync(filepath).toString();
  const parsedMarkdown = matter(rawMarkdown);
  const parsedContent = marked(parsedMarkdown.content);

  return {
    props: {
      data: parsedMarkdown.data,
      contents: parsedContent,
    },
  };
};

export default Post;
