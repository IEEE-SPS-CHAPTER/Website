import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="flex items-center justify-center bg-cover bg-center relative"
      style={{ backgroundImage: "url('/about-bg.svg')" }}
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm z-0" />

      <div className="relative z-10 w-full max-w-5xl mx-auto px-3 py-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
        <div className="md:col-span-1 border-white border-r pr-6 justify-center flex items-center">
          <Image
            src="/team.svg"
            alt="IEEE SPS Team"
            width={2016}
            height={1512}
            className="object-contain mb-4"
            draggable="false"
          />
        </div>

        <div className="md:col-span-2 text-lg leading-relaxed space-y-4">
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
            “HACKX 2.0” in 2023, successfully featured distinguished speakers
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
