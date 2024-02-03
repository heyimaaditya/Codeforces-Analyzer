import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import User from "../UserInfo/User";
import Loader from "../Layout/Loader";
import Error from "../Layout/Error";
import { useNavigate } from "react-router-dom";
import MetaData from "../Layout/MetaData";

function UserInfo() {
  const navigate = useNavigate();
  const { user, loading, error } = useSelector((state) => state.userInfo);
  useEffect(() => {
    if (!user) {
      navigate("/Codeforces-Analyzer");
    }
  }, [user]);
  return (
    <>
      <MetaData title="Analyzer | User" />
      {loading && <Loader />}
      {!loading && user && <User user={user} />}
      {!loading && !user && error && <Error error={error} />}
    </>
  );
}

export default UserInfo;