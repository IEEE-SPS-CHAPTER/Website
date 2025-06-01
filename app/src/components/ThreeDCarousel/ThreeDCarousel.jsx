"use client";

import React from "react";
import styled from "styled-components";

const cards = [
  { src: "/events/alumni-homecoming.svg", color: "17, 20, 42" },
  { src: "/events/anc-360.svg", color: "49, 1, 1" },
  { src: "/events/audio-sphere.svg", color: "81, 17, 86" },
  { src: "/events/casa.svg", color: "205, 198, 228" },
  { src: "/events/electrohive.svg", color: "85, 111, 20" },
  { src: "/events/green-horizon.svg", color: "205, 237, 234" },
  { src: "/events/pixel-power.svg", color: "73, 219, 194" },
];

const ThreeDCarousel = () => {
  return (
    <StyledWrapper>
      <div className="wrapper">
        <div className="inner" style={{ "--quantity": cards.length }}>
          {cards.map((card, i) => (
            <div
              key={i}
              className="card"
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
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .wrapper {
    width: 100%;
    height: 100vh;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: visible;
    perspective: 1200px;
  }

  .inner {
    --w: 160px;
    --h: 220px;
    --translateZ: 350px;
    --rotateX: -15deg;
    --perspective: 1200px;
    position: absolute;
    width: var(--w);
    height: var(--h);
    top: 25%;
    left: calc(50% - (var(--w) / 2) - 2.5px);
    z-index: 2;
    transform-style: preserve-3d;
    animation: rotating 20s linear infinite;
  }

  @keyframes rotating {
    from {
      transform: perspective(var(--perspective)) rotateX(var(--rotateX))
        rotateY(0);
    }
    to {
      transform: perspective(var(--perspective)) rotateX(var(--rotateX))
        rotateY(1turn);
    }
  }

  .card {
    position: absolute;
    width: var(--w);
    height: var(--h);
    border: 2px solid rgba(var(--color-card), 0.8);
    border-radius: 20px;
    overflow: hidden;
    inset: 0;
    background-color: rgba(var(--color-card), 0.15);
    box-shadow: 0 8px 16px rgba(var(--color-card), 0.3);
    cursor: pointer;
    transition: box-shadow 0.3s ease;
    transform: rotateY(calc((360deg / var(--quantity)) * var(--index)))
      translateZ(var(--translateZ));
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .card:hover {
    box-shadow: 0 16px 32px rgba(var(--color-card), 0.6);
  }

  .card img {
    max-width: 90%;
    max-height: 90%;
    object-fit: contain;
    border-radius: 12px;
  }
`;

export default ThreeDCarousel;
