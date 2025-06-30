import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Plus } from "lucide-react";

const BlogCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const res = await fetch("/api/medium");
        const data = await res.json();
        setBlogPosts(data);
      } catch (e) {
        setBlogPosts([]);
      } finally {
        setLoading(false);
      }
    }
    fetchPosts();
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % blogPosts.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + blogPosts.length) % blogPosts.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  if (loading) {
    return (
      <div className="text-center text-white py-20">Loading blog posts...</div>
    );
  }
  if (!blogPosts.length) {
    return (
      <div className="text-center text-white py-20">No blog posts found.</div>
    );
  }

  return (
    <div className="">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mt-12 mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
            Our latest blog
          </h1>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Decorative Stars */}
          <div className="absolute -top-8 -left-8 text-blue-300/30 text-2xl">
            ✦
          </div>
          <div className="absolute -top-4 -right-12 text-purple-300/30 text-xl">
            ✦
          </div>
          <div className="absolute -bottom-8 left-16 text-blue-300/30 text-lg">
            ✦
          </div>
          <div className="absolute -bottom-4 -right-8 text-purple-300/30 text-2xl">
            ✦
          </div>

          {/* Main Carousel */}
          <div className="relative backdrop-blur-lg rounded-3xl p-8">
            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-300 border border-white/20"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-300 border border-white/20"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>

            {/* Blog Cards Container */}
            <div className="relative overflow-visible rounded-2xl min-h-[400px] px-16">
              <div
                className="flex transition-transform duration-500 ease-in-out gap-6"
                style={{
                  transform: `translateX(calc(-${currentSlide * 100}% - ${
                    currentSlide * 1.5
                  }rem))`,
                }}
              >
                {blogPosts.map((post, index) => (
                  <div
                    key={post.id}
                    className={`w-full flex-shrink-0 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl p-8 min-h-[400px] relative overflow-hidden transition-all duration-500 ${
                      index === currentSlide
                        ? "scale-110 opacity-100 z-10"
                        : "scale-85 opacity-60 z-0"
                    }`}
                  >
                    {/* Content */}
                    <div className="relative z-10">
                      <div className="flex justify-between items-start mb-6">
                        <div className=" text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
                          {post.category}
                        </div>
                        <a
                          href={post.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-gray-600 transition-colors"
                        >
                          <Plus className="w-5 h-5" />
                        </a>
                      </div>

                      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                        {post.title}
                      </h2>

                      <div className="flex items-center gap-4 text-sm text-gray-600 mb-6">
                        <span>{post.readTime}</span>
                        <span>•</span>
                        <span>{post.author}</span>
                        <span>•</span>
                        <span>
                          {post.date &&
                            new Date(post.date).toLocaleDateString()}
                        </span>
                      </div>

                      <p className="text-gray-700 text-lg leading-relaxed">
                        {post.excerpt}
                      </p>
                      {/* Read More Button - Only show on focused slide */}
                      {index === currentSlide && (
                        <a
                          href={post.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-6 inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 transform hover:scale-105"
                        >
                          Read More
                          <ChevronRight className="w-4 h-4" />
                        </a>
                      )}
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute top-8 right-8 text-gray-300/20 text-6xl">
                      ✦
                    </div>
                    <div className="absolute bottom-8 left-8 text-gray-300/20 text-4xl">
                      ✦
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Pagination Dots */}
            <div className="flex justify-center mt-10 pt-10 gap-3">
              {blogPosts.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? "bg-blue-400 shadow-lg shadow-blue-400/50"
                      : "bg-white/30 hover:bg-white/50"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCarousel;
