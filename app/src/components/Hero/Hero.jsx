import Image from "next/image";
import CheckBlog from "./CheckBlog/CheckBlog";

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
        <div
          className="flex items-center justify-center rounded-full overflow-hidden"
          style={{
            width: 600,
            height: 600,
            minWidth: 300,
            minHeight: 300,
            zIndex: 10,
          }}
        >
          <video
            src="/globe.webm"
            autoPlay
            loop
            muted
            playsInline
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
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
