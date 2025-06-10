"use client";

import React from "react";
import dynamic from "next/dynamic";

const Events = dynamic(() => import("./Events/Events"), {
  loading: () => <div>Loading...</div>,
  ssr: false,
});

export default function EventsSection() {
  return <Events />;
}
