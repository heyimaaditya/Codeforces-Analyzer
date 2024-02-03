import React from "react";
import classes from "./Blog.module.css";
function Blog({ blog }) {
  const blogURL = `https://codeforces.com/blog/entry/${blog.id}`;
  const blogTitle = blog.title.slice(3, -4);
  let date = new Date(blog.creationTimeSeconds * 1000);

  return (
    <section href="#" className={classes.data_card_blogs}>
      <h2 className={classes.blogName}>{blogTitle}</h2>
      <h4 className={classes.date}>{date.toUTCString().slice(0, -12)}</h4>

      <p>Rating : {blog.rating}</p>
      <span className={classes.link_text}>
        <a className={classes.contestLink} target="_blank" href={blogURL}>
          View On Codeforces
        </a>
        <svg
          width="25"
          height="16"
          viewBox="0 0 25 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M17.8631 0.929124L24.2271 7.29308C24.6176 7.68361 24.6176 8.31677 24.2271 8.7073L17.8631 15.0713C17.4726 15.4618 16.8394 15.4618 16.4489 15.0713C16.0584 14.6807 16.0584 14.0476 16.4489 13.657L21.1058 9.00019H0.47998V7.00019H21.1058L16.4489 2.34334C16.0584 1.95281 16.0584 1.31965 16.4489 0.929124C16.8394 0.538599 17.4726 0.538599 17.8631 0.929124Z"
            fill="#753BBD"
          />
        </svg>
      </span>
    </section>
  );
}

export default Blog;