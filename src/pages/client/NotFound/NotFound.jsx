import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./NotFound.module.scss";

const NotFound = () => {
  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <h1>404</h1>
        <h2>Oops! You seem lost.</h2>
        <p>
          The page you're looking for doesn't exist.
          How about we head back to safety?
        </p>
        <NavLink to="/" className={styles.btn}>
          Take Me Home
        </NavLink>
      </div>
      <div className={styles.emoji}>
        <span role="img" aria-label="Confused face">
          🤔
        </span>
      </div>
    </div>
  );
};

export default NotFound;