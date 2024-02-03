import React from "react";
import classes from "./Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
function Footer() {
  return (
    <footer>
      <div className={classes.footer}>
        <h3 className={classes.name}>| AAditya TYagi |</h3>
        <div className={classes.social_links}>
          <a href="https://github.com/heyimaaditya" target="_blank">
            <div className={classes.social_link}>
              <FontAwesomeIcon icon={faGithub} /> <span> Github</span>
            </div>
          </a>
          <a href="https://www.linkedin.com/in/aaditya27/" target="_blank">
            <div className={classes.social_link}>
              <FontAwesomeIcon icon={faLinkedin} /> <span>Linkedin</span>
            </div>
          </a>
          <a href="https://www.instagram.com/aaditya.tya6i/" target="_blank">
            <div className={classes.social_link}>
              <FontAwesomeIcon icon={faInstagram} /> <span>Instagram</span>
            </div>
          </a>
          <a href="mailto:tyagiaaditya693@gmail.com">
            <div className={classes.social_link}>
              <FontAwesomeIcon icon={faEnvelope} />
              <span>Mail</span>
            </div>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;