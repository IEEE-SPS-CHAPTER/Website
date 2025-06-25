"use client";

import React, { useEffect } from "react";
import dynamic from "next/dynamic";

const Events = dynamic(() => import("./Events/Events"), {
  loading: () => <div>Loading...</div>,
  ssr: false,
});

export default function EventsSection() {
  useEffect(() => {
    console.log("Events loaded");
  }, []);
  return <Events />;
}
