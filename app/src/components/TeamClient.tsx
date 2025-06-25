"use client";

import dynamic from "next/dynamic";
import React, { useEffect } from "react";

const Team = dynamic(() => import("./Team/Team"), {
  loading: () => <div>Loading...</div>,
  ssr: false,
});

export default function TeamSection() {
  useEffect(() => {
    console.log("Team loaded");
  }, []);
  return <Team />;
}
