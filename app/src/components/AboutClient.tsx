"use client";

import dynamic from "next/dynamic";
import React, { useEffect } from "react";

const About = dynamic(() => import("./About/About"), {
  loading: () => <div>Loading...</div>,
  ssr: false,
});

export default function AboutSection() {
  useEffect(() => {
    console.log("About loaded");
  }, []);
  return <About />;
}
