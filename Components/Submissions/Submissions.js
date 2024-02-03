import React, { useState, useEffect } from "react";
import { getSubmissions } from "../../Actions/userAction";
import classes from "./Submissions.module.css";
import Submission from "./Submission";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../Layout/Loader";
import Error from "../Layout/Error";
import { useNavigate } from "react-router-dom";

import MetaData from "../Layout/MetaData";
function Submissions() {
  const navigate = useNavigate();
  const [count, setCount] = useState("Enter count of submissions");
  const dispatch = useDispatch();
  const { submissions, loading, error } = useSelector(
    (state) => state.userSubmissions
  );
  const { user } = useSelector((state) => state.userInfo);
  const fetchSubmissions = () => {
    if (count > 0)
      if (user) {
        dispatch(getSubmissions(user.handle, count));
      }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    fetchSubmissions();
    setCount("");
  };

  useEffect(() => {
    if (!user) {
      navigate("/Codeforces-Visualizer");
    }
  }, [user]);
  return (
    <>
      <MetaData title="Visualizer | Submissions" />
      <div className={classes.submissions}>
        {loading && <Loader />}
        {!loading && !error && (
          <form onSubmit={submitHandler}>
            <input
              onChange={(e) => setCount(e.target.value)}
              value={count}
              type="number"
              required
              placeholder="Enter count of submissions"
            />
            <button>submit</button>
          </form>
        )}

        <div className={classes.subs}>
          {error && !submissions && <Error error={error} />}
          {!loading &&
            submissions &&
            submissions.length > 0 &&
            submissions.map((sub) => <Submission key={sub.id} sub={sub} />)}
        </div>
      </div>{" "}
    </>
  );
}

export default Submissions;