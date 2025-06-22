import Image from "next/image";
import CheckBlog from "./CheckBlog/CheckBlog";
import HeroGlobe from "./HeroGlobe/HeroGlobe";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex items-center justify-center px-8 overflow-hidden min-h-screen"
    >
      <div className="absolute inset-0 z-10 pointer-events-none bg-[radial-gradient(ellipse_at_center,transparent_20%,rgba(0,0,0,0.8)_100%)]" />

      {/* Globe positioning: Top-center on mobile, Right side on desktop */}
      <div className="absolute top-20 left-1/2 transform -translate-x-1/2 md:top-1/2 md:right-8 md:left-auto md:transform md:-translate-y-1/2 md:translate-x-0 z-20">
        <HeroGlobe />
      </div>

      {/* Text content: Bottom-center on mobile, Left side on desktop */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 md:bottom-auto md:top-1/2 md:left-8 md:transform md:-translate-y-1/2 md:translate-x-0 z-20 text-center md:text-left max-w-lg">
        <h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8 text-white drop-shadow-lg"
          style={{ fontFamily: "Orbitron" }}
        >
          WE ARE IEEE SPS
        </h1>
        <CheckBlog />
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
