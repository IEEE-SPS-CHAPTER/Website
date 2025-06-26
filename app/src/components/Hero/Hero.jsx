import Image from "next/image";
import CheckBlog from "./CheckBlog/CheckBlog";
import HeroGlobe from "./HeroGlobe/HeroGlobe";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex items-center justify-center px-8 overflow-hidden min-h-screen"
    >
      {/* Main content container */}
      <div style={{ zIndex: 1 }} className="w-full max-w-7xl mx-auto">
        {/* Desktop: flex-row (side by side), Mobile: flex-col (stacked) */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">

          {/* Left side - Text content */}
          <div className="flex-1 order-2 lg:order-1 text-center lg:text-left sm:ml-2">
            <div className="font-black text-left text-7xl sm:text-7xl md:text-9xl py-4">
              <h1> WE ARE <span className="italic">IEEE SPS</span> </h1>
            </div>
            <CheckBlog />
          </div>

          {/* Right side - 3D Globe */}
          <div className="flex-1 order-1 lg:order-2 flex justify-center lg:justify-end">
            <HeroGlobe />
          </div>

        </div>
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
