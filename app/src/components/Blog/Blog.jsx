import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Plus } from 'lucide-react';

const BlogCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const blogPosts = [
    {
      id: 1,
      title: "DIGITAL SIGNAL PROCESSING IN OCEAN AND SPACE TECHNOLOGY",
      readTime: "3 min read",
      author: "Sneha Prasad",
      date: "Mar 23, 2025",
      excerpt: "Digital Signal Processing (DSP) uses digital processing with the help of devices like digital signal processors, computers to perform signal processing operations. In digital electronics a digital signal is represented as a pulse train. DSP is also used in digital technology like digital communication and wireless communications. DSP is used in aircrafts for noise reduction to ensure clear communication",
      category: "Technology"
    },
    {
      id: 2,
      title: "Electric Propulsion",
      readTime: "5 min read",
      author: "Sanskar Arora",
      date: "Jan 23, 2022",
      excerpt: "Electric propulsion is a technology aimed at achieving thrust with high exhaust velocities, which results in a reduction in the amount of propellant required for a given space mission or application compared to other conventional propulsion methods. Reduced propellant mass can significantly decrease the launch mass of a spacecraft or satellite, leading to lower costs from the use of smaller launch vehicles to deliver desired mass into a given orbit or to a deep-space target.",
      category: "Mechanics"
    },
    {
      id: 3,
      title: "CHIP MANUFACTURING : A DIVE INTO ONE OF HUMANITY’S GREATEST SCIENTIFIC FEATS IEEE Signal Processing Society-VIT",
      readTime: "3 min read",
      author: "Anusha Ghose",
      date: "April 1, 2025",
      excerpt: "What if I told you that there are components in your phone smaller than an average red blood cell? It is hard to believe or even envision such a thing, but today almost every chip works on this intriguing principle. The realm of electronics is a limitless one and the continuous innovations in this miniature world of chips is a driving factor towards revolutionizing how we use gadgets ,often defying the principles of physics. Presently, there are only 3 companies in the world capable of mass-producing chips, small and powerful enough, to fit today’s advanced mobile technologies.",
      category: "Electronics"
    },
    {
      id: 4,
      title: "THE POTENTIAL OF 5G MILLIMETER WAVE TECHNOLOGY",
      readTime: "3 min read",
      author: "Akshita",
      date: "Jul 21, 2024",
      excerpt: "We’ve all heard about 5G network and use it on daily basis today since its market boomed in 2019. But let us here explore one of its most growing and exciting aspect: 5G mmWave.",
      category: "Security"
    },
    {
      id: 5,
      title: "Future & Scope of IoT",
      readTime: "11 min read",
      author: "Ananya Ghosh",
      date: "Jun 21, 2022",
      excerpt: "Have you ever experienced such a situation where you went outside your house and suddenly remembered that you forgot to switch off your electronics, AC, fan, or light and felt helpless that you cannot return home to switch it off? Have you ever felt that there is a need for regular checkups of the elderly person at your home, but it is very inconvenient to take him out regularly? This is where IoT comes into the picture. Using the mobile/ web application, you can access your home appliances integrated with IoT from anywhere around the world. IoT can remind you of the essential tasks that you often forget to do. This technology reduces human efforts and saves a lot of time. All this is possible due to the connection of the IoT devices over the Internet servers that helps in sharing and exchanging the data.",
      category: "IoT"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % blogPosts.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + blogPosts.length) % blogPosts.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

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
          <div className="absolute -top-8 -left-8 text-blue-300/30 text-2xl">✦</div>
          <div className="absolute -top-4 -right-12 text-purple-300/30 text-xl">✦</div>
          <div className="absolute -bottom-8 left-16 text-blue-300/30 text-lg">✦</div>
          <div className="absolute -bottom-4 -right-8 text-purple-300/30 text-2xl">✦</div>

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
                style={{ transform: `translateX(calc(-${currentSlide * 100}% - ${currentSlide * 1.5}rem))` }}
              >
                {blogPosts.map((post, index) => (
                  <div
                    key={post.id}
                    className={`w-full flex-shrink-0 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl p-8 min-h-[400px] relative overflow-hidden transition-all duration-500 ${index === currentSlide
                      ? 'scale-110 opacity-100 z-10'
                      : 'scale-85 opacity-60 z-0'
                      }`}
                  >
                    {/* Content */}
                    <div className="relative z-10">
                      <div className="flex justify-between items-start mb-6">
                        <div className=" text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
                          {post.category}
                        </div>
                        <button className="text-gray-400 hover:text-gray-600 transition-colors">
                          <Plus className="w-5 h-5" />
                        </button>
                      </div>

                      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                        {post.title}
                      </h2>

                      <div className="flex items-center gap-4 text-sm text-gray-600 mb-6">
                        <span>{post.readTime}</span>
                        <span>•</span>
                        <span>{post.author}</span>
                        <span>•</span>
                        <span>{post.date}</span>
                      </div>

                      <p className="text-gray-700 text-lg leading-relaxed">
                        {post.excerpt}
                      </p>
                      {/* Read More Button - Only show on focused slide */}
                      {index === currentSlide && (
                        <button className="mt-6 inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 transform hover:scale-105">
                          Read More
                          <ChevronRight className="w-4 h-4" />
                        </button>
                      )}
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute top-8 right-8 text-gray-300/20 text-6xl">✦</div>
                    <div className="absolute bottom-8 left-8 text-gray-300/20 text-4xl">✦</div>
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
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide
                    ? 'bg-blue-400 shadow-lg shadow-blue-400/50'
                    : 'bg-white/30 hover:bg-white/50'
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
