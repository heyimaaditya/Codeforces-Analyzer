import React, { useState, useEffect } from "react";
import classes from "./Problems.module.css";
import { Tags } from "./Tags";
import { useDispatch, useSelector } from "react-redux";
import { getProblemsByTag, sortProblems } from "../../Actions/userAction";
import Problem from "./Problem";
import Loader from "../Layout/Loader";
import Error from "../Layout/Error";
import MetaData from "../Layout/MetaData";

function Problems() {
  const { problems, loading, error } = useSelector(
    (state) => state.problemsInfo
  );
  const [tag, setTag] = useState("filter question by tag");
  const [order, setOrder] = useState("asc");

  const dispatch = useDispatch();
  const fetchProblemsByTags = () => {
    dispatch(getProblemsByTag(tag));
  };
  const tagHandler = (e) => {
    setTag(e.target.value);
  };
  const formHandler = (e) => {
    e.preventDefault();
    console.log(tag, " tag");
    if (tag === "filter question by tag") {
      return;
    }
    fetchProblemsByTags();
  };
  const getSortedProblems = () => {
    dispatch(sortProblems(problems, order));
    setOrder(order === "asc" ? "dec" : "asc");
  };
  return (
    <>
      <MetaData title="Analyzer | Problemset" />
      <section className={classes.problems}>
        <form className={classes.form} onSubmit={formHandler}>
          <select
            className={classes.selectTag}
            required
            value={tag}
            onChange={tagHandler}
          >
            <option value="filter question by tag">
              Filter Questions By Tag
            </option>
            {Tags.map((tag) => (
              <option key={tag.label} value={tag.label}>
                {tag.label}
              </option>
            ))}
          </select>
          <button>submit</button>
        </form>
        <div className={classes.probs}>
          {error && !problems && <Error error={error} />}
          {loading && <Loader />}
          <table className={classes.problems}>
            {!loading && problems && problems.length > 0 && (
              <tr>
                <th>Problem</th>
                <th className={classes.ratingTitle} onClick={getSortedProblems}>
                  Rating
                </th>
                <th>Points</th>
              </tr>
            )}
            {!loading &&
              problems &&
              problems.length > 0 &&
              problems.map((prob) => <Problem key={prob.id} prob={prob} />)}
          </table>
        </div>
      </section>
    </>
  );
}

export default Problems;