import Image from "next/image";
import teamMembers from "../../data/Team";

export default function Team() {
  return (
    <section
      id="team"
      className="relative min-h-[950px] bg-cover overflow-hidden"
      style={{ backgroundImage: "url('/team-bg.svg')" }}
    >
      <h2 className="absolute right-0 mt-8 mr-12 font-inter font-bold text-[64px] leading-[77px] text-[#EAEBED] bg-transparent">
        Meet the Team
      </h2>
      <div className="relative w-full h-full min-h-[950px]">
        {teamMembers.map((member, idx) => (
          <div
            key={member.name}
            className={member.style + " flex flex-col items-center justify-end"}
          >
            <div className="rounded-full aspect-square overflow-hidden border-4 border-white shadow-lg w-full h-full flex items-center justify-center">
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
            <div className="bg-white/80 rounded-lg px-4 py-2 mt-2 text-center shadow-md">
              <div className="font-semibold text-lg text-gray-900">
                {member.name}
              </div>
              <div className="text-sm text-gray-600">{member.designation}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
