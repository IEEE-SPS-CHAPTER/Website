import Image from "next/image";

export default function Team() {
  return (
    <section id="team" style={{ position: "relative" }}>
      <Image
        src="/team-bg.svg"
        alt="Team Background"
        width={1920}
        height={1080}
        priority
      />
      <h2
        style={{
          position: "absolute",
          top: 100,
          right: 0,
          margin: "32px 48px 0 0",
          fontFamily: "'Inter'",
          fontStyle: "normal",
          fontWeight: 700,
          fontSize: "64px",
          lineHeight: "77px",
          color: "#EAEBED",
          background: "transparent",
        }}
      >
        Meet the Team
      </h2>
    </section>
  );
}
