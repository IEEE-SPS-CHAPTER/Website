"use client";

import Image from "next/image";
import React, { forwardRef } from "react"; // Import forwardRef

// Use forwardRef to allow parent components to pass a ref to this component
const About = forwardRef((props, ref) => {
  return (
    <section
      id="about"
      ref={ref} // Attach the forwarded ref to the root section element
      className="flex items-center justify-center relative z-10 min-h-screen p-5
                text-white" /* Added bg-opacity for readability over blurred background */
    >
      {/* Removed the absolute inset-0 div with backdrop-blur-sm as global blur is handled by ScrollBlurBackground */}

      <div className="relative z-10 w-full max-w-screen-xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="flex items-center justify-center md:justify-end">
          <div
          /* Removed ref={ref} and className for useOnScreen animation.
             The ref passed to About is for ScrollBlurBackground to measure position. */
          >
            <Image
              src="/team.svg"
              alt="IEEE SPS Team"
              width={800}
              height={800}
              className="object-contain max-h-[400px] rounded-lg" /* Added rounded-lg for better aesthetics */
              draggable={false}
              priority
              style={{
                boxShadow: "25px 20px 15px rgb(225 216 216 / 30%)",
              }}
            />
          </div>
        </div>

        <div className="md:col-span-2 text-lg leading-relaxed space-y-5">
          <h2 className="text-4xl font-bold mb-4">About Us</h2> {/* Added a heading for clarity */}
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
});

export default About;
