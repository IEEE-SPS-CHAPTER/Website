"use client";

import Image from "next/image";
import { useRef } from "react";
import useOnScreen from "../../hooks/useOnScreen";

export default function About() {
  const ref = useRef(null);
  const isVisible = useOnScreen(ref, { threshold: 0.3 });

  return (
    <section
      id="about"
      className="flex items-center justify-center bg-cover bg-center relative"
      style={{ backgroundImage: "url('/about-bg.svg')" }}
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm z-0" />

      <div className="relative z-10 w-full max-w-screen-xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-3 gap-12 text-white">
        <div className="flex items-center justify-center md:justify-end">
          <div
            ref={ref}
            className={`transition-all duration-700 transform ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "-translate-x-20 opacity-0"
            }`}
          >
            <Image
              src="/team.svg"
              alt="IEEE SPS Team"
              width={800}
              height={800}
              className="object-contain max-h-[400px]"
              draggable={false}
              priority
              style={{
                boxShadow: "25px 20px 15px rgb(225 216 216 / 30%)",
              }}
            />
          </div>
        </div>

        <div className="md:col-span-2 text-lg leading-relaxed space-y-5">
          <p>
            The Signal Processing Society (SPS), founded in 1948 under IEEE, is
            a leading global organization for signal processing professionals.
          </p>
          <p>
            The IEEE SPS VIT Chapter at VIT University in Vellore actively works
            towards connecting this global network with students, hosting
            various events such as webinars, hands-on sessions, and hackathons.
          </p>
          <p>
            Our flagship event, “HACKX,” launched in 2019 and was followed by
            “HACKX 2.0” in 2023, successfully featuring distinguished speakers
            and participants from top universities. We are dedicated to
            fostering an environment where engineers can explore key areas, such
            as signal processing, IoT, and machine learning, encouraging
            innovation and collaboration within our regional chapter to drive
            impactful projects.
          </p>
        </div>
      </div>
    </section>
  );
}
