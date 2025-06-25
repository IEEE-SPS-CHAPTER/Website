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
      className="w-full min-h-screen flex flex-col items-center justify-start bg-cover bg-center px-4 sm:px-6 md:px-8 py-8 md:py-12"
      style={{
        backgroundImage: "url('/team-bg.svg')",
        backgroundBlendMode: "overlay",
      }}
    >
      <h2 className="text-center font-inter font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#EAEBED] drop-shadow-lg mb-8 sm:mb-10 md:mb-12">
        Meet the Team
      </h2>

      <div className="relative w-full max-w-7xl">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6 md:gap-8 auto-rows-auto lg:max-h-[70vh]">
          {teamMembers.map((member, idx) => (
            <motion.div
              key={member.name}
              className="flex flex-col items-center"
              custom={idx}
              variants={floatVariants}
              animate="animate"
              initial={false}
            >
              <div className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 xl:w-40 xl:h-40 rounded-full overflow-hidden border-4 border-[#23272f] shadow-2xl bg-gradient-to-br from-[#23272f] to-[#181b22]">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="(max-width: 640px) 96px, (max-width: 768px) 128px, (max-width: 1024px) 144px, 160px"
                  className="object-cover w-full h-full rounded-full"
                  style={{ objectPosition: member.objectPosition || "center" }}
                  priority={idx < 3}
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/50 text-center px-2">
                  <div className="text-xs sm:text-sm md:text-base text-white font-semibold truncate w-full">
                    {member.name}
                  </div>
                  <div className="text-[10px] sm:text-xs md:text-sm text-[#00d0ff] font-medium truncate w-full">
                    {member.designation}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
