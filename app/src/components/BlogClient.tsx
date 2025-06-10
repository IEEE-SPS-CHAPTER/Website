"use client";

import React from "react";
import dynamic from "next/dynamic";

const Blog = dynamic(() => import("./Blog/Blog"), {
  loading: () => <div>Loading...</div>,
  ssr: false,
});

export default function BlogSection() {
  return <Blog />;
}
