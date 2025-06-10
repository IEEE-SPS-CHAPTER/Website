"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import teamMembers from "../../data/Team";

export default function Team() {
  const floatVariants = {
    animate: (i) => ({
      y: [0, -20, 0, 20, 0],
      x: [0, 10 * (i % 2 === 1 ? 1 : -1), 0, -10 * (i % 2 === 1 ? 1 : -1), 0],
      transition: {
        duration: 8 + (i % 3),
        repeat: Infinity,
        ease: "easeInOut",
      },
    }),
  };

  return (
    <section
      id="team"
      className="relative min-h-[950px]"
      style={{
        backgroundImage: "url('/team-bg.svg')",
        backgroundBlendMode: "overlay",
      }}
    >
      <h2 className="absolute right-0 mt-8 mr-12 font-inter font-bold text-[64px] leading-[77px] text-[#EAEBED] bg-transparent drop-shadow-lg">
        Meet the Team
      </h2>
      <div className="relative w-full h-full min-h-[950px]">
        {teamMembers.map((member, idx) => (
          <motion.div
            key={member.name}
            className={member.style + " flex flex-col items-center justify-end"}
            custom={idx}
            variants={floatVariants}
            animate="animate"
            initial={false}
          >
            <div className="rounded-full aspect-square overflow-hidden border-4 border-[#23272f] shadow-2xl w-full h-full flex items-center justify-center bg-gradient-to-br from-[#23272f] to-[#181b22]">
              <Image
                src={member.image}
                alt={member.name}
                width={225}
                height={225}
                className="object-cover w-full h-full rounded-full"
                style={{ objectPosition: member.objectPosition || "center" }}
                priority={idx < 3}
              />
            </div>
            <div className="backdrop-blur-md bg-[#181b22]/80 rounded-lg px-4 py-2 mt-2 text-center shadow-lg border border-[#23272f]">
              <div className="font-semibold text-lg text-gray-100 drop-shadow">
                {member.name}
              </div>
              <div className="text-sm text-[#00d0ff] font-medium tracking-wide">
                {member.designation}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
