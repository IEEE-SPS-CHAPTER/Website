import Image from "next/image";
import CheckBlog from "./CheckBlog/CheckBlog";
import HeroGlobe from "./HeroGlobe/HeroGlobe";

export default function Hero() {
  return (
    <section className="relative w-full h-screen min-h-[600px] flex items-center justify-center px-8">
      <div className="flex-1 flex flex-col justify-center items-start h-full z-10">
        <h1
          className="text-6xl md:text-7xl font-bold mb-8 text-white drop-shadow-lg"
          style={{ fontFamily: "Orbitron" }}
        >
          WE ARE IEEE SPS
        </h1>
        <CheckBlog />
      </div>
      <div className="flex items-center justify-center h-full">
        <HeroGlobe />
      </div>
      <Image
        src="/hero-bg.svg"
        alt="Hero Background"
        fill
        style={{ objectFit: "cover", zIndex: 0 }}
        priority
      />
    </section>
  );
}
