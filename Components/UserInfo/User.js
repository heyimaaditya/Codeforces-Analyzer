import React from "react";
import classes from "./User.module.css";

function User({ user }) {
  const handleURL = `https://codeforces.com/profile/${user.handle}`;
  return (
    <>
      <section className={classes.userArea}>
        <div className={classes.userInfo}>
          <div className={classes.imgArea}>
            <img src={user.titlePhoto} alt="" />
            <h1>
              <span>{user.firstName}</span>
              <span> {user.lastName}</span>
            </h1>
          </div>
          <div className={classes.infoArea}>
            <h3>
              Codeforces Handle :
              <span>
                <a target="_blank" href={handleURL}>
                  {" "}
                  {user.handle}
                </a>
              </span>
            </h3>
            <h3>
              Country : <span>{user.country}</span>
            </h3>
            <h3>
              City : <span>{user.city}</span>
            </h3>
            <h3>
              Contributions : <span>{user.contribution}</span>
            </h3>
            <h3>
              Rating :<span>{user.rating}</span>
            </h3>
            <h3>
              Maximum Rating : <span>{user.maxRating}</span>
            </h3>
            <h3>
              Organization : <span>{user.organization}</span>
            </h3>
            <h3>
              Rank : <span>{user.rank}</span>
            </h3>
            <h3>
              Maximum Rank : <span>{user.maxRank}</span>
            </h3>
            <h3>
              Friends Count : <span>{user.friendOfCount}</span>
            </h3>
          </div>
        </div>
      </section>
    </>
  );
}

export default User;