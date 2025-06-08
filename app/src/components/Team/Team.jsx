import Image from "next/image";

export default function Team() {
  return (
    <section
      id="team"
      style={{
        position: "relative",
        backgroundImage: "url('/team-bg.svg')",
        backgroundSize: "cover",
        height: "100vh",
      }}
    >
      <h2
        style={{
          position: "absolute",

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
