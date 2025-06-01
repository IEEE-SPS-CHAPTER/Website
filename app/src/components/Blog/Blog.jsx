export default function Blog() {
  return (
    <div
      className="fixed inset-0 bg-white w-screen h-screen overflow-auto"
      style={{
        backgroundImage: 'url("/blog-bg.svg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="relative z-10 max-w-4xl mx-auto py-12 px-4">
        <h1 className="text-4xl font-bold mb-8 text-center text-black">
          Our Latest Blogs
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Sample Blog Card 1 */}
          <div className="bg-white rounded-lg shadow p-6 flex flex-col">
            <h2 className="text-2xl font-semibold mb-2 text-black">
              Understanding Signal Processing
            </h2>
            <p className="text-black mb-4">
              Dive into the basics of signal processing and its real-world
              applications.
            </p>
            <a
              href="#"
              className="text-black font-medium mt-auto hover:underline"
            >
              Read More
            </a>
          </div>
          {/* Sample Blog Card 2 */}
          <div className="bg-white rounded-lg shadow p-6 flex flex-col">
            <h2 className="text-2xl font-semibold mb-2 text-black">
              AI in Audio Engineering
            </h2>
            <p className="text-black mb-4">
              Explore how artificial intelligence is revolutionizing the field
              of audio engineering.
            </p>
            <a
              href="#"
              className="text-black font-medium mt-auto hover:underline"
            >
              Read More
            </a>
          </div>
          {/* Sample Blog Card 3 */}
          <div className="bg-white rounded-lg shadow p-6 flex flex-col">
            <h2 className="text-2xl font-semibold mb-2 text-black">
              Latest Trends in DSP
            </h2>
            <p className="text-black mb-4">
              Stay updated with the latest trends and technologies in digital
              signal processing.
            </p>
            <a
              href="#"
              className="text-black font-medium mt-auto hover:underline"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
