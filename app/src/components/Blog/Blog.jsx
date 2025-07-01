import React, { useState, useRef, useEffect } from 'react';
// Removed ChevronLeft, ChevronRight from lucide-react as we're using custom SVGs
import { Plus } from 'lucide-react'; // Plus icon is still used for the card

const BlogGridCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselTrackRef = useRef(null); // Ref for the flex container that holds the cards
  const carouselContainerRef = useRef(null); // Ref for the overflow-hidden container
  const [cardWidth, setCardWidth] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);

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

  // Tailwind's default gap-4 is 1rem = 16px
  const GAP_PX = 16;

  // Effect to measure card and container widths
  useEffect(() => {
    const measureWidths = () => {
      if (carouselTrackRef.current && carouselContainerRef.current) {
        const firstCard = carouselTrackRef.current.children[0];
        if (firstCard) {
          setCardWidth(firstCard.offsetWidth);
        }
        setContainerWidth(carouselContainerRef.current.offsetWidth);
      }
    };

    // Measure initially
    measureWidths();

    // Add resize listener
    window.addEventListener('resize', measureWidths);
    return () => window.removeEventListener('resize', measureWidths);
  }, [blogPosts.length]); // Re-measure if blogPosts change

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % blogPosts.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + blogPosts.length) % blogPosts.length);
  };

  // Calculate translateX to center the currentSlide
  let translateX = 0;
  if (cardWidth > 0 && containerWidth > 0) {
    // Calculate the total width of cards up to the current slide (including gaps)
    const totalWidthBeforeCurrent = currentSlide * (cardWidth + GAP_PX);

    // Calculate the offset needed to center the current card
    const centeringOffset = (containerWidth / 2) - (cardWidth / 2);

    // The final translation is the negative of the total width before current,
    // plus the centering offset.
    translateX = -(totalWidthBeforeCurrent - centeringOffset);
  }

  return (
    <div className="min-h-screen flex items-center justify-center py-10 px-4 sm:px-6 lg:px-8 relative font-inter overflow-hidden bg-gray-950"
      style={{
        backgroundImage: 'radial-gradient(circle at 1px 1px, #ffffff33 1px, transparent 0)',
        backgroundSize: '20px 20px'
      }}>
      {/* Background stars - Placeholder images */}
      <div className="absolute inset-0 pointer-events-none">
        <img
          src="https://placehold.co/30x30/000000/FFFFFF?text=*"
          alt="Star"
          className="absolute top-10 right-20 w-8 h-8 opacity-70"
          onError={(e) => { e.target.onerror = null; e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolygon points='12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2'%3E%3C/polygon%3E%3C/svg%3E"; }}
        />
        <img
          src="https://placehold.co/20x20/000000/FFFFFF?text=*"
          alt="Star"
          className="absolute bottom-20 left-40 w-6 h-6 opacity-70"
          onError={(e) => { e.target.onerror = null; e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolygon points='12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2'%3E%3C/polygon%3E%3C/svg%3E"; }}
        />
        <img
          src="https://placehold.co/25x25/000000/FFFFFF?text=*"
          alt="Star"
          className="absolute top-1/4 left-1/4 w-7 h-7 opacity-70"
          onError={(e) => { e.target.onerror = null; e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolygon points='12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2'%3E%3C/polygon%3E%3C/svg%3E"; }}
        />
        <img
          src="https://placehold.co/35x35/000000/FFFFFF?text=*"
          alt="Star"
          className="absolute bottom-10 right-1/4 w-9 h-9 opacity-70"
          onError={(e) => { e.target.onerror = null; e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolygon points='12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2'%3E%3C/polygon%3E%3C/svg%3E"; }}
        />
      </div>

      <section className="w-full max-w-6xl relative z-10">
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-8 sm:mb-12 text-left px-4">
          Our latest blog
        </h2>

        <div className="relative w-full">
          {/* Main Carousel Container - overflow hidden to clip non-visible cards */}
          <div ref={carouselContainerRef} className="overflow-hidden rounded-3xl py-4">
            {/* Carousel Track - flex container that slides */}
            <div
              ref={carouselTrackRef}
              className="flex transition-transform duration-500 ease-in-out gap-4" // Using gap-4 for consistent spacing
              style={{ transform: `translateX(${translateX}px)` }}
            >
              {blogPosts.map((post, index) => (
                <div
                  key={post.id}
                  // Responsive widths: full on sm, 1/2 on md, then wider on lg and xl
                  // flex-shrink-0 to prevent cards from shrinking
                  className={`flex-none w-full sm:w-[calc(80%-0.5rem)] md:w-[calc(70%-0.5rem)] lg:w-[calc(60%-0.5rem)] xl:w-[calc(50%-0.5rem)] /* Adjusted for single dominant slide */
                             bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl p-8 max-h-[500px] relative overflow-hidden
                             transition-all duration-500 transform
                             ${index === currentSlide
                      ? 'opacity-100 z-10 shadow-lg' // Active slide: full opacity, higher z-index, shadow
                      : 'opacity-60 z-0' // Inactive slides: reduced opacity, lower z-index
                    }`}
                >
                  {/* Content */}
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="flex justify-between items-start mb-6">
                      <div className="text-blue-600 px-3 py-1 rounded-full text-sm font-medium bg-blue-100">
                        {post.category}
                      </div>
                      <button className="text-gray-400 hover:text-gray-600 transition-colors">
                        <Plus className="w-5 h-5" />
                      </button>
                    </div>

                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-tight">
                      {post.title}
                    </h3>

                    <div className="flex items-center gap-4 text-sm text-gray-600 mb-6">
                      <span>{post.readTime}</span>
                      <span>•</span>
                      <span>{post.author}</span>
                      <span>•</span>
                      <span>{post.date}</span>
                    </div>

                    <p className="text-gray-700 text-base leading-relaxed flex-grow line-clamp-5">
                      {post.excerpt}
                    </p>

                    {/* Read More Button */}
                    <button className="mt-6 inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 transform hover:scale-105 self-start">
                      Read More
                      {/* Removed ChevronRight here as it was causing the error */}
                    </button>
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute top-8 right-8 text-gray-300/20 text-6xl select-none">✦</div>
                  <div className="absolute bottom-8 left-8 text-gray-300/20 text-4xl select-none">✦</div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-300 border border-white/20"
            aria-label="Previous blog post"
          >
            {/* Custom SVG for left arrow */}
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="transform rotate-180">
              <path d="M5 12C5 12 8 15 12 15C16 15 19 12 19 12M19 12L15 8M19 12L15 16" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-300 border border-white/20"
            aria-label="Next blog post"
          >
            {/* Custom SVG for right arrow (from image) */}
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12C5 12 8 15 12 15C16 15 19 12 19 12M19 12L15 8M19 12L15 16" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        {/* Removed Pagination Dots */}
      </section>
    </div>
  );
};

export default BlogGridCarousel;
