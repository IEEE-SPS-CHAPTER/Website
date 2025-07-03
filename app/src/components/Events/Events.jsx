"use client";

import React from "react";
import styles from "./Events.module.css";
import events from "../../data/Events";

const Events = () => {
  return (
    <section id="events" className="bg-[url('/gradient-bg-dark.svg')] bg-cover">
      <h2
        style={{
          fontFamily: "Inter",
          fontStyle: "normal",
          fontWeight: 700,
          lineHeight: "77px",
          color: "#EAEBED",
          background: "transparent",
          textAlign: "left",
          width: "100%",
        }} className="ml-[20%] text-7xl"
      >
        Events
      </h2>
      <div className={styles.wrapper}>
        <div className={styles.inner} style={{ "--quantity": events.length }}>
          {events.map((card, i) => (
            <div
              key={i}
              className={styles.card}
              style={{
                "--index": i,
                "--color-card": card.color,
              }}
            >
              <img src={card.src} alt={`Card ${i + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
