"use client";

import React from "react";
import styles from "./CheckBlog.module.css";

const Button = () => {
  return (
    <div>
      <button className={styles.button}>
        <span className={styles.buttonSpan}>Check out our blog</span>
      </button>
    </div>
  );
};

export default Button;
