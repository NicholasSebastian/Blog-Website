import React from "react";
import Head from "next/head";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import marked from "marked";

// Template for page.
const Post = ({ contents, data }) => {
  return (
    <>
      <Head>
        <title>{data.title}</title>
        <meta name="description" content={data.description}></meta>
        <meta name="author" content="Nicholas Sebastian Hendrata"></meta>
      </Head>
      <div dangerouslySetInnerHTML={{ __html: contents }} />
    </>
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
