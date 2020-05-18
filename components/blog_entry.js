import React from "react";
import Link from "next/link";
import Styles from "../styles/components/blog_entry.module.css";

const Entry = ({ datum }) => {
  return (
    <div className={Styles.entry}>
      <Link href={"/blog/" + datum.filepath}>
        <h3>{datum.title}</h3>
      </Link>
      <span>{datum.date}</span>
      <p>{datum.description}</p>
      <div>
        {datum.tags.map((tag) => {
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
    </div>
  );
};

export default Entry;
