import { ArrowRight, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";

const Intro = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const perfumeImages = [
    "https://manage.parfumbar.az/cdn/storage/products_images/oG5ofuyhFrydFtLgW/HD/oG5ofuyhFrydFtLgW.webp",
    "https://manage.parfumbar.az/cdn/storage/products_images/6e2niXqChz7pqvKvu/HD/6e2niXqChz7pqvKvu.webp",
    "https://manage.parfumbar.az/cdn/storage/products_images/ram8S2HRk8GZAfmNZ/HD/ram8S2HRk8GZAfmNZ.webp",
  ];

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % perfumeImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-amber-50 via-white to-rose-50 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-amber-200/30 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-rose-200/30 to-transparent rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-gradient-to-br from-orange-200/20 to-transparent rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-5">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-200px)]">
          {/* Left Content */}
          <div className="space-y-8 animate-fadeInLeft">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
              <Sparkles className="w-4 h-4 text-orange-500" />
              <span className="text-sm font-semibold text-gray-700">
                Premium Ətir Təcrübəsi
              </span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="text-gray-900">Öz unikal</span>
                <br />
                <span className="bg-gradient-to-r from-orange-500 via-amber-500 to-rose-500 bg-clip-text text-transparent">
                  ətrinizi düzəldin!
                </span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-xl">
                ZANA ilə ətrinizin qablaşdırılmasını, flakonunuz özün seçin, ətriniz üçün 
                qoxuları həmçinin gücləndiriciləri seçərək onu düzəldin
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/create-perfume"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-orange-500 to-rose-500 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-2xl hover:scale-105 relative overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-rose-500 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <span className="relative z-10">Ətir Yarat</span>
                <ArrowRight className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </a>

              <a
                href="/about"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-white border-2 border-gray-300 text-gray-900 font-semibold rounded-xl transition-all duration-300 hover:border-orange-500 hover:shadow-lg hover:scale-105"
              >
                <span className="group-hover:text-orange-500 transition-colors duration-300">
                  Haqqımızda Oxu
                </span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 group-hover:text-orange-500 transition-all duration-300" />
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              {[
                { number: "5000+", label: "Məmnun Müştəri" },
                { number: "10K+", label: "Unikal Ətirlər" },
                { number: "4.9/5", label: "Reytinq" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="text-center p-4 bg-white/60 backdrop-blur-sm rounded-xl"
                >
                  <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-orange-500 to-rose-500 bg-clip-text text-transparent mb-1">
                    {stat.number}
                  </div>
                  <div className="text-xs md:text-sm text-gray-600">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Slider */}
          <div className="relative animate-fadeInRight">
            {/* Main Slider Container */}
            <div className="relative w-full h-150 perspective-10">
              {perfumeImages.map((image, index) => {
                const isActive = index === currentSlide;
                const isPrev =
                  index === (currentSlide - 1 + perfumeImages.length) % perfumeImages.length;
                const isNext = index === (currentSlide + 1) % perfumeImages.length;

                return (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-all duration-700 ease-out ${
                      isActive
                        ? "opacity-100 z-30 scale-100 translate-x-0"
                        : isPrev
                        ? "opacity-40 z-20 scale-90 -translate-x-24 rotate-y-12"
                        : isNext
                        ? "opacity-40 z-20 scale-90 translate-x-24 -rotate-y-12"
                        : "opacity-0 z-10 scale-75"
                    }`}
                    style={{
                      transform: isActive
                        ? "translateX(0) scale(1) rotateY(0deg)"
                        : isPrev
                        ? "translateX(-100px) scale(0.9) rotateY(15deg)"
                        : isNext
                        ? "translateX(100px) scale(0.9) rotateY(-15deg)"
                        : "scale(0.75)",
                    }}
                  >
                    {/* Card with shadow and gradient border */}
                    <div className="relative w-full h-full rounded-3xl overflow-hidden bg-gradient-to-br from-white to-gray-50 p-2 shadow-2xl">
                      <div className="w-full h-full rounded-2xl overflow-hidden bg-gradient-to-br from-amber-50 to-rose-50 flex items-center justify-center">
                        <img
                          src={image}
                          alt={`Perfume ${index + 1}`}
                          className="w-full h-full object-contain p-8 drop-shadow-2xl"
                        />
                      </div>

                      {/* Glow effect */}
                      {isActive && (
                        <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/20 via-transparent to-rose-500/20 pointer-events-none animate-pulse"></div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Decorative circles */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-orange-300/30 to-rose-300/30 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-gradient-to-br from-amber-300/30 to-orange-300/30 rounded-full blur-3xl animate-pulse delay-1000"></div>

            {/* Slide Indicators */}
            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3">
              {perfumeImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`transition-all duration-300 rounded-full ${
                    index === currentSlide
                      ? "w-12 h-3 bg-gradient-to-r from-orange-500 to-rose-500"
                      : "w-3 h-3 bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-fadeInLeft {
          animation: fadeInLeft 1s ease-out;
        }

        .animate-fadeInRight {
          animation: fadeInRight 1s ease-out;
        }

        .delay-500 {
          animation-delay: 0.5s;
        }

        .delay-1000 {
          animation-delay: 1s;
        }

        .perspective-1000 {
          perspective: 1000px;
        }

        .rotate-y-12 {
          transform: rotateY(12deg);
        }

        .-rotate-y-12 {
          transform: rotateY(-12deg);
        }
      `}</style>
    </section>
  );
};

export default Intro;