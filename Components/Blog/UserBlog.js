import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserBlogs } from "../../Actions/userAction";
import Blog from "./Blog";
import Loader from "../Layout/Loader";
import Error from "../Layout/Error";
import classes from "./UserBlog.module.css";
import { useNavigate } from "react-router-dom";
import MetaData from "../Layout/MetaData";

function UserBlog() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { blogs, loading, error } = useSelector((state) => state.userBlogs);

  const { user } = useSelector((state) => state.userInfo);

  useEffect(() => {
    if (user) {
      dispatch(getUserBlogs(user.handle));
    }
  }, [user]);

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, [user]);

  return (
    <>
      <MetaData title="Visualizer | Blogs" />
      <div className={classes.blogArea}>
        {!error && loading && <Loader />}
        {!error &&
          !loading &&
          blogs &&
          blogs.length > 0 &&
          blogs.map((blog) => <Blog key={blog.id} blog={blog} />)}
        {error && <Error error={error} />}
        {!error && !loading && blogs && blogs.length === 0 && (
          <h1>No Blogs Found</h1>
        )}
      </div>
    </>
  );
}

export default UserBlog;