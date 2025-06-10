import React from "react";
import dynamic from "next/dynamic";

const Contact = dynamic(() => import("./Contact/Contact"), {
  loading: () => <div>Loading...</div>,
  ssr: false,
});

export default function ContactSection() {
  return <Contact />;
}
