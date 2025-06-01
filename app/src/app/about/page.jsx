export default function AboutPage() {
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center relative"
      style={{ backgroundImage: "url('/about-bg.svg')" }}
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm z-0" />

      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
        <div className="md:col-span-1 border-white border-r pr-6 justify-center flex items-center">
          <h1 className="text-5xl font-bold">About</h1>
        </div>

        <div className="md:col-span-2 text-lg leading-relaxed space-y-4">
          <p>
            Signal Processing Society (SPS), founded in 1948 under IEEE, is the
            premier global organization for signal processing professionals. The
            IEEE-SPS VIT Chapter, based at VIT University, hosts a range of
            educational events like webinars and hands-on sessions, fostering
            community outreach in Vellore.
          </p>
          <p>
            The chapter aims to create an empowering environment for engineers
            to explore signal processing, nurturing innovation and practical
            projects. It hosts global conferences to showcase the latest signal
            processing advancements and encourages member involvement in
            international roles.
          </p>
          <p>
            Members collaborate within regional chapters to drive innovation in
            signal processing. SPS provides leading publications, conferences,
            education, and leadership opportunities to keep members informed and
            contribute to society.
          </p>
        </div>
      </div>
    </div>
  );
}
