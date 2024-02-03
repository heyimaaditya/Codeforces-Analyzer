import React from "react";
import classes from "./Problem.module.css";
function Problem({ prob }) {
  const problemLink = `https://codeforces.com/contest/${prob.contestId}/problem/${prob.index}`;
  return (
    <tr className={classes.table_row}>
      <td>
        <a target="_blank" href={problemLink}>
          {prob.name}
        </a>
      </td>
      <td>{prob.rating}</td>
      <td>{prob.points || "-"}</td>
    </tr>
  );
}

export default Problem;