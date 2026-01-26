import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Slide {
  id: number;
  image: string;
  title: string;
  subtitle?: string;
}

const PerfumeHeroSlider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);

  const slides: Slide[] = [
    {
      id: 1,
      image: "https://cdn.salla.sa/doPqe/da13fb25-4193-49ed-a5cd-67fd50255da0-1000x1000-JJKKO5W3Xc8xKSYO0n8IVULRtUhTWt778a9vpGiR.png",
      title: "SUITS",
      subtitle: "Classic Elegance"
    },
    {
      id: 2,
      image: "https://legendary.com.my/cdn/shop/files/Man_Website_735ae066-7f5b-4bf7-ba3a-ebc5b827c320.png?v=1766998669",
      title: "NOIR",
      subtitle: "Mysterious Allure"
    },
    {
      id: 3,
      image: "https://legendary.com.my/cdn/shop/files/Orchid_Website_ee1aa326-dfb9-424f-ba62-1b79d5113ccc.png?crop=center&height=740&v=1766394919&width=840",
      title: "ESSENCE",
      subtitle: "Pure Sophistication"
    }
  ];

  const nextSlide = () => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Auto-play slider
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(timer);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentSlide]);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8
    })
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  return (
    <div className=" pb-16 border px-4 md:px-8">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div 
          className="space-y-8"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div>
            <motion.h1 
              className="text-6xl md:text-7xl font-bold text-gray-900 mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Unikal ətirini
              <br />
              hazırla!
            </motion.h1>
            <motion.p 
              className="text-gray-500 text-lg leading-relaxed max-w-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Indulge in a fragrance crafted to transcend time—a symphony of
              elegance, mystery, and allure, designed for those who seek
              beauty in every breath.
            </motion.p>
          </div>

          <motion.div 
            className="flex gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <motion.button 
              className="px-8 py-3 bg-gray-900 hover:bg-gray-800 text-white font-medium rounded-lg transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              biz kimik?
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Right Content - Perfume Slider */}
        <div className="relative h-150 md:h-175">
          {/* Slider Container */}
          <div className="relative h-full overflow-hidden">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentSlide}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.3 },
                  scale: { duration: 0.4 }
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x);

                  if (swipe < -swipeConfidenceThreshold) {
                    nextSlide();
                  } else if (swipe > swipeConfidenceThreshold) {
                    prevSlide();
                  }
                }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="relative z-10">
                  <img
                    src={slides[currentSlide].image}
                    alt={slides[currentSlide].title}
                    className="w-auto object-cover h-125 md:h-150 max-w-md mx-auto drop-shadow-2xl"
                    draggable={false}
                  />
                  
                  {/* Product Name Badge */}
                  <motion.div
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                  >
                    <div className="text-center">
                      <div className="text-xl font-bold text-gray-900">
                        {slides[currentSlide].title}
                      </div>
                      {slides[currentSlide].subtitle && (
                        <div className="text-sm text-gray-500">
                          {slides[currentSlide].subtitle}
                        </div>
                      )}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* 30% OFF Badge */}
          <motion.div 
            className="absolute top-0 right-0 md:right-20 z-20"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 12 }}
            transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
          >
            <div className="relative">
              <motion.div 
                className="w-24 h-24 bg-orange-500 rounded-full flex items-center justify-center shadow-lg transform rotate-12"
                animate={{ 
                  rotate: [12, 18, 12],
                  scale: [1, 1.05, 1]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">30%</div>
                  <div className="text-sm font-semibold text-white">OFF</div>
                </div>
              </motion.div>
              <svg
                className="absolute -bottom-8 left-1/2 -translate-x-1/2"
                width="60"
                height="40"
              >
                <path
                  d="M 10 0 Q 30 20 50 0"
                  stroke="#d97706"
                  strokeWidth="2"
                  strokeDasharray="4,4"
                  fill="none"
                />
                <circle cx="50" cy="0" r="4" fill="#d97706" />
              </svg>
            </div>
          </motion.div>

          {/* Navigation Arrows */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-4 z-20">
            <motion.button
              onClick={prevSlide}
              className="w-12 h-12 rounded-full cursor-pointer bg-white shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-6 h-6 text-gray-900" />
            </motion.button>
            <motion.button
              onClick={nextSlide}
              className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Next slide"
            >
              <ChevronRight className="w-6 h-6 text-gray-900" />
            </motion.button>
          </div>

          {/* Slide Indicators */}
          <div className="absolute  left-1/2 -translate-x-1/2 flex gap-2 z-20">
            {slides.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => {
                  setDirection(index > currentSlide ? 1 : -1);
                  setCurrentSlide(index);
                }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'w-8 bg-gray-900' 
                    : 'w-2 bg-gray-400 hover:bg-gray-600'
                }`}
                whileHover={{ scale: 1.2 }}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Background Decoration */}
          <div className="absolute inset-0 bg-gradient-to-br from-orange-100/20 to-purple-100/20 rounded-3xl -z-10 blur-3xl" />
        </div>
      </div>
    </div>
  );
};

export default PerfumeHeroSlider;