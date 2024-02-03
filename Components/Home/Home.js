import React, { useState } from "react";
import classes from "./Home.module.css";
import { useDispatch } from "react-redux";
import { getUserInfo } from "../../Actions/userAction";
import { useNavigate } from "react-router-dom";
import Loader from "../Layout/Loader";
import MetaData from "../Layout/MetaData";

function Home() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [isWaiting, setIsWaiting] = useState(false);
  const dispatch = useDispatch();

  const fetchUserDetails = () => {
    dispatch(getUserInfo(username));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    fetchUserDetails();
    setUsername("");
    setIsWaiting(true);
    setTimeout(() => {
      navigate(`/Codeforces-Analyzer/user/${username}`);
      setIsWaiting(false);
    }, 2000);
  };
  return (
    <>
      <MetaData title="Analyzer | Home" />
      <section className={classes.search}>
        {isWaiting && <Loader />}
        {!isWaiting && (
          <form onSubmit={submitHandler}>
            <input
              onChange={(e) => setUsername(e.target.value)}
              value={username}
              type="text"
              placeholder="Enter Codeforces username"
            />
            <button>submit</button>
          </form>
        )}
      </section>
    </>
  );
}

export default Home;