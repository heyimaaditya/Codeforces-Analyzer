import React, { useState } from "react";
import classes from "./Header.module.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faCircleInfo,
  faSquarePollVertical,
  faBookmark,
  faBlog,
  faCode,
  faUser,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
function Header() {
  const [navStatus, setNavStatus] = useState(false);
  const { user } = useSelector((state) => state.userInfo);
  let username = "/Codeforces-Analyzer/user";
  let accountURL;
  if (user) {
    username = `/Codeforces-Analyzer/user/${user.handle}`;
    accountURL = `https://codeforces.com/profile/${user.handle}`;
  }

  const toggleNavbar = () => {
    setNavStatus((navStatus) => !navStatus);
  };

  const navOpen = "navOpen";
  const navClose = "navClose";
  return (
    <>
      <section className={classes.navbar}>
        <nav className={classes.nav}>
          <div className={classes.mainHeader}>
            <div className={classes.logos}>
              <div className={classes.github_logo}>
                <a
                  target="_blank"
                  href="https://github.com/21omkarsase/Codeforces-Analyzer/"
                >
                  <FontAwesomeIcon
                    className={classes.githubLogo}
                    icon={faGithub}
                  />
                </a>
              </div>
              <Link to="/Codeforces-Analyzer">
                <span className={classes.logoTitle}>Codeforces Analyzer</span>
              </Link>{" "}
            </div>
            <div onClick={toggleNavbar} className={classes.bars}>
              <FontAwesomeIcon className={classes.barIcon} icon={faBars} />
            </div>
          </div>{" "}
          <div
            className={`${navStatus ? classes.navOpen : classes.navClose} ${
              classes.nav_links
            }`}
          >
            <Link
              className={classes.nav_link}
              to={user ? username : "/Codeforces-Analyzer"}
            >
              <span>
                <FontAwesomeIcon icon={faCircleInfo} />
              </span>
              <span>User Info</span>
            </Link>
            <Link
              className={classes.nav_link}
              to={user ? "/Codeforces-Analyzer/rating" : "/Codeforces-Analyzer"}
            >
              <span>
                <FontAwesomeIcon icon={faSquarePollVertical} />
              </span>
              <span>Contests</span>{" "}
            </Link>
            <Link
              className={classes.nav_link}
              to={
                user
                  ? "/Codeforces-Analyzer/submissions"
                  : "/Codeforces-Analyzer"
              }
            >
              <span>
                <FontAwesomeIcon icon={faBookmark} />
              </span>{" "}
              <span>Submissions</span>
            </Link>
            <Link
              className={classes.nav_link}
              to={
                user ? "/Codeforces-Analyzer/problems" : "/Codeforces-Analyzer"
              }
            >
              <span>
                <FontAwesomeIcon icon={faCode} />
              </span>{" "}
              <span>Problems</span>
            </Link>
            <Link
              className={classes.nav_link}
              to={user ? "/Codeforces-Analyzer/blogs" : "/Codeforces-Analyzer"}
            >
              <span>
                <FontAwesomeIcon icon={faBlog} />
              </span>{" "}
              <span>User Blogs</span>
            </Link>
            <div className={classes.account}>
              {user && (
                <>
                  <span>
                    <FontAwesomeIcon icon={faUser} />
                  </span>
                  <span>
                    <a target="_blank" href={accountURL}>
                      {user.handle}
                    </a>
                  </span>
                </>
              )}
            </div>
          </div>
        </nav>
      </section>
    </>
  );
}

export default Header;