import React, { useState, useEffect } from 'react';

const BlogCardCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const blogPosts = [
    {
      id: 1,
      title: "DIGITAL SIGNAL PROCESSING IN OCEAN AND SPACE TECHNOLOGY",
      readTime: "3 min read",
      author: "Sneha Prasad",
      date: "Mar 23, 2025",
      content: "Digital Signal Processing (DSP) uses digital systems to analyze and manipulate signals for communication, radar, and data analysis. It filters, modulates, and compresses signals with high accuracy. From aircraft noise reduction to ocean tracking via radar altimeters, DSP plays a key role in modern electronic and satellite systems.",
      category: "Technology",
      link: "https://medium.com/@vitieeesps/digital-signal-processing-in-ocean-and-space-technology-987b08ad1b7c"
    },
    {
      id: 2,
      title: "Electric Propulsion",
      readTime: "5 min read",
      author: "Sanskar Arora",
      date: "Jan 23, 2022",
      content: "Electric propulsion uses electricity to accelerate propellants at high speeds, reducing fuel needs and launch costs for space missions. With types like ion and Hall thrusters, it offers high efficiency and specific impulse, making it ideal for deep space travel. This article explores its principles, types, and applications.",
      category: "Mechanics",
      link: "https://medium.com/ieee-signal-processing-society-vit/electric-propulsion-ae0e02080591"
    },
    {
      id: 3,
      title: "CHIP MANUFACTURING : A DIVE INTO ONE OF HUMANITY’S GREATEST SCIENTIFIC FEATS",
      readTime: "3 min read",
      author: "Anusha Ghose",
      date: "April 1, 2025",
      content: "Modern chips, smaller than a red blood cell, power today’s devices by packing billions of transistors into tiny spaces. With innovations like 3D structures and chiplet architecture, manufacturers overcome physical limits to boost performance. This article explores chip miniaturization, challenges, and future advancements in semiconductor technology.",
      category: "Electronics",
      link: "https://medium.com/@vitieeesps/chip-manufacturing-a-dive-into-one-of-humanitys-greatest-scientific-feats-c617b872600d"
    },
    {
      id: 4,
      title: "THE POTENTIAL OF 5G MILLIMETER WAVE TECHNOLOGY",
      readTime: "3 min read",
      author: "Akshita",
      date: "Jul 21, 2024",
      content: "5G mmWave is a high-frequency band in 5G offering ultra-fast data speeds, low latency, and massive capacity. Ideal for urban areas, AR/VR, and IoT, it enables next-gen connectivity. This article explores its features, benefits, challenges, and applications across industries like healthcare, automation, and emergency response systems.",
      category: "Security",
      link: "https://medium.com/@vitieeesps/the-potential-of-5g-millimeter-wave-technology-35d5e0874440"
    },
    {
      id: 5,
      title: "Future & Scope of IoT",
      readTime: "11 min read",
      author: "Ananya Ghosh",
      date: "Jun 21, 2022",
      content: "The Internet of Things (IoT) connects everyday devices to the internet, enabling smart automation and remote control. From managing home appliances to improving healthcare and agriculture, IoT simplifies life. This article explores IoT’s architecture, applications, challenges, security concerns, and future scope, highlighting its growing impact across various industries.",
      category: "IoT",
      link: "https://medium.com/ieee-signal-processing-society-vit/future-scope-of-iot-61981da29a91"
    }
  ];

  const nextCard = () => {
    setCurrentIndex((prev) => (prev + 1) % blogPosts.length);
  };

  const goToCard = (index) => {
    setCurrentIndex(index);
  };

  const getCardClass = (index) => {
    if (index === currentIndex) return 'active';
    if (index === (currentIndex + 1) % blogPosts.length) return 'next';
    return 'prev';
  };

  // Auto-advance cards
  useEffect(() => {
    const interval = setInterval(nextCard, 10000);
    return () => clearInterval(interval);
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        nextCard();
        e.preventDefault();
      } else if (e.key === 'ArrowLeft') {
        setCurrentIndex((prev) => (prev - 1 + blogPosts.length) % blogPosts.length);
        e.preventDefault();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const ArrowIcon = () => (
    <svg width="91" height="79" viewBox="0 0 91 79" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M36.3206 75.885C36.3206 75.885 -12.3863 53.5389 8.56987 29.0649C29.526 4.59089 86.4708 24.1295 86.4708 24.1295M86.4708 24.1295L72.0653 1.86156M86.4708 24.1295L64.1677 38.6132" stroke="#0C0642" strokeWidth="6" />
    </svg>
  );

  const Star = ({ className }) => (
    <div className={`absolute text-4xl text-black/30 animate-pulse ${className}`}>
      ✦
    </div>
  );

  return (
    <section className="w-full min-h-screen bg-white  flex items-center justify-center p-5 overflow-hidden z-10">
      <div className="max-w-6xl w-full relative">
        {/* Header */}
        <div className="text-left mb-16 relative">
          <h1 className="text-5xl md:text-6xl font-black text-gray-800 mb-4 drop-shadow-lg">
            Our latest blog
          </h1>
          <Star className="top-[-200px] right-48 animate-[twinkle_3s_ease-in-out_infinite_alternate]" />
          <Star className="top-120 right-12 animate-[twinkle_3s_ease-in-out_infinite_alternate_1s]" />
          <Star className="bottom-[-700px] left-5 animate-[twinkle_3s_ease-in-out_infinite_alternate_2s]" />
          <Star className="top-40 left-[-20px] animate-[twinkle_3s_ease-in-out_infinite_alternate_0.5s]" />
          <Star className="bottom-[-200px] right-28 animate-[twinkle_3s_ease-in-out_infinite_alternate]" />
          <Star className="bottom-12 right-12 animate-[twinkle_3s_ease-in-out_infinite_alternate_1s]" />
          <Star className="bottom-[-300px] left-10 animate-[twinkle_3s_ease-in-out_infinite_alternate_2s]" />
          <Star className="top-8 left-[-50px] animate-[twinkle_3s_ease-in-out_infinite_alternate_0.5s]" />
        </div>

        {/* Card Container */}
        <div className="relative h-[500px] flex items-center justify-center">
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className={`
                absolute w-full max-w-[800px] md:w-[900px] overflow-hidden h-[550px] bg-white/95 backdrop-blur-md 
                rounded-3xl p-10 shadow-2xl border border-white/20 transition-all duration-700 ease-out
                ${getCardClass(index) === 'active'
                  ? 'translate-x-0 scale-100 z-30 opacity-100'
                  : getCardClass(index) === 'next'
                    ? 'translate-x-12 scale-95 z-20 '
                    : 'translate-x-[-100px] scale-90 z-10 '
                }
              `}
            >
              <div className="mb-6">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 leading-tight">
                  {post.title}
                </h2>
                <div className="flex items-center gap-4 mb-5 text-sm text-gray-600">
                  <span className="bg-gray-200 px-3 py-1 rounded-full font-medium">
                    {post.readTime}
                  </span>
                  <div className="flex flex-col gap-1">
                    <span className="font-semibold text-gray-700">{post.author}</span>
                    <span className="text-xs">{post.date}</span>
                  </div>
                </div>
              </div>

              <div className="text-lg leading-relaxed text-gray-700 text-justify">
                {post.content}
              </div>

              <div className="text-lg bg-gray-500 p-3 font-semibold min-w rounded-3xl cursor-pointer transistion-all duration-200 hover:scale-110 hover:shadow-2xl shadow-lg z-40 absolute bottom-10">
                <a href={post.link}>Read more</a>
              </div>

              {/* Navigation Arrow */}
              <button
                onClick={nextCard}
                className="group absolute right-8 bottom-8 w-15 h-15 bg-gradient-to-r from-gray-400 to-gray-300 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-110 hover:shadow-2xl shadow-lg z-40"
                aria-label="Next blog post"
              >
                <ArrowIcon />
              </button>
            </div>
          ))}
        </div>

        {/* Progress Dots */}
        <div className="flex justify-center gap-3 mt-20">
          {blogPosts.map((_, index) => (
            <button
              key={index}
              onClick={() => goToCard(index)}
              className={`
                w-3 h-3 rounded-full transition-all duration-300 cursor-pointer
                ${index === currentIndex
                  ? 'bg-white scale-125'
                  : 'bg-white/30 hover:bg-white/50'
                }
              `}
              aria-label={`Go to blog post ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes twinkle {
          0% { opacity: 0.3; transform: scale(1); }
          100% { opacity: 0.8; transform: scale(1.2); }
        }
        
        @media (max-width: 768px) {
          .card {
            width: 90%;
            max-width: 400px;
            height: 350px;
            padding: 1.5rem;
          }
        }
      `}</style>
    </section>
  );
};

export default BlogCardCarousel;
