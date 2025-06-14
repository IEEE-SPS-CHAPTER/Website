import Image from "next/image";
import CheckBlog from "./CheckBlog/CheckBlog";
import HeroGlobe from "./HeroGlobe/HeroGlobe";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex items-center justify-center px-8 overflow-hidden"
    >
      <div className="absolute inset-0 z-10 pointer-events-none bg-[radial-gradient(ellipse_at_center,transparent_20%,rgba(0,0,0,0.8)_100%)]" />

      <div className="w-2 flex-1 flex flex-col justify-center items-start h-full z-20">
        <h1
          className="text-6xl md:text-7xl font-bold mb-8 text-white drop-shadow-lg"
          style={{ fontFamily: "Orbitron" }}
        >
          WE ARE IEEE SPS
        </h1>
        <CheckBlog />
      </div>

      <div className="flex items-center justify-center h-full z-20 -translate-x-30">
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
