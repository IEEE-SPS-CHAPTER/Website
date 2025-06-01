"use client";

import React from "react";
import styles from "./CheckBlog.module.css";

const CheckBlog = () => {
  const handleClick = () => {
    window.open("/blog", "_self");
  };

  return (
    <button className={styles.animatedButton} onClick={handleClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={styles.arr2}
        viewBox="0 0 24 24"
      >
        <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
      </svg>
      <span className={styles.text}>Check out our blog</span>
      <span className={styles.circle} />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={styles.arr1}
        viewBox="0 0 24 24"
      >
        <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
      </svg>
    </button>
  );
};

export default CheckBlog;
