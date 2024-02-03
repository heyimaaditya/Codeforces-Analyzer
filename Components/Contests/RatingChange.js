import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserContests } from "../../Actions/userAction";
import classes from "./RatingChange.module.css";
import Contest from "./Contests.js";
import Loader from "../Layout/Loader";
import Error from "../Layout/Error";
import { useNavigate } from "react-router-dom";
import MetaData from "../Layout/MetaData";

function RatingChange() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { contests, loading, error } = useSelector(
    (state) => state.contestsInfo
  );

  const { user } = useSelector((state) => state.userInfo);

  useEffect(() => {
    if (user) {
      dispatch(getUserContests(user.handle));
    }
  }, [user]);

  useEffect(() => {
    if (!user) {
      navigate("/Codeforces-Analyzer");
    }
  }, [user]);

  return (
    <>
      <MetaData title="Analyzer | Contests" />
      <div title="Analyzer | Contests" className={classes.contests}>
        {!error && loading && <Loader />}
        {!error &&
          !loading &&
          contests &&
          contests.length > 0 &&
          contests.map((contest) => (
            <Contest key={contest.contestId} contest={contest} />
          ))}
        {!error && !loading && contests && contests.length === 0 && (
          <h1 className={classes.noContest}>No Contests Found</h1>
        )}
        {error && <Error error={error} />}
      </div>
    </>
  );
}

export default RatingChange;