"use client";

import React from "react";
import styles from "./Events.module.css";

const cards = [
  { src: "/events/alumni-homecoming.svg", color: "17, 20, 42" },
  { src: "/events/anc-360.svg", color: "49, 1, 1" },
  { src: "/events/audio-sphere.svg", color: "81, 17, 86" },
  { src: "/events/casa.svg", color: "205, 198, 228" },
  { src: "/events/electrohive.svg", color: "51, 179, 96" },
  { src: "/events/green-horizon.svg", color: "205, 237, 234" },
  { src: "/events/pixel-power.svg", color: "73, 219, 194" },
];

const Events = () => {
  return (
    <section id="events">
      <h2
        style={{
          fontFamily: "'Inter'",
          fontStyle: "normal",
          fontWeight: 700,
          fontSize: "64px",
          lineHeight: "77px",
          color: "#EAEBED",
          background: "transparent",
          textAlign: "center",
          width: "100%",
        }}
      >
        Events
      </h2>
      <div className={styles.wrapper}>
        <div className={styles.inner} style={{ "--quantity": cards.length }}>
          {cards.map((card, i) => (
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
