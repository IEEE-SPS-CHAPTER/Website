"use client";

import React, { useEffect } from "react";
import dynamic from "next/dynamic";

const Blog = dynamic(() => import("./Blog/Blog"), {
  loading: () => <div>Loading...</div>,
  ssr: false,
});

export default function BlogSection() {
  useEffect(() => {
    console.log("Blogs loaded");
  }, []);
  return <Blog />;
}
