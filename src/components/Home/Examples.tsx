import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import { PERFUME_CATEGORIES } from "../../data/createPerfume";
const ExampleFragrances = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);

  // Flatten all perfumes from categories
  const allFragrances = Object.entries(PERFUME_CATEGORIES).flatMap(
    ([category, perfumes]) =>
      perfumes.map((perfume) => ({
        ...perfume,
        category: category,
      })),
  );

  // Get color based on category
  const getCategoryColor = (category: string) => {
    const colorMap: Record<string, string> = {
      "Çiçəkli və Zərif": "from-pink-100 to-rose-100",
      "Fresh & Citrusy": "from-blue-100 to-cyan-100",
      "Fruity & Delicious": "from-amber-100 to-yellow-100",
      "Green & Aromatic": "from-green-100 to-emerald-100",
      "Leathery & Distinctive": "from-gray-100 to-slate-100",
      "Spicy & Ambery": "from-orange-100 to-red-100",
      "Sweet & Gourmand": "from-purple-100 to-pink-100",
      "Woody & Profound": "from-amber-100 to-orange-100",
    };
    return colorMap[category] || "from-gray-100 to-gray-200";
  };

  // Responsive items per view
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerView(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2);
      } else {
        setItemsPerView(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev + itemsPerView >= allFragrances.length ? 0 : prev + 1,
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? allFragrances.length - itemsPerView : prev - 1,
    );
  };

  const visibleFragrances = allFragrances.slice(
    currentIndex,
    currentIndex + itemsPerView,
  );

  // Auto-play slider
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [currentIndex, itemsPerView]);

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Star className="w-4 h-4 fill-orange-600" />
            Populyar Qoxular
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Ən sevilən{" "}
            <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
              ətirlər
            </span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Müştərilərimizin ən çox seçdiyi unikal ətir kompozisiyaları
          </p>
        </div>

        {/* Slider Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 p-3 bg-white rounded-full shadow-lg hover:bg-gray-50 transition-all duration-300 hover:scale-110 group"
            aria-label="Previous"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700 group-hover:text-orange-500" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 p-3 bg-white rounded-full shadow-lg hover:bg-gray-50 transition-all duration-300 hover:scale-110 group"
            aria-label="Next"
          >
            <ChevronRight className="w-6 h-6 text-gray-700 group-hover:text-orange-500" />
          </button>

          {/* Slider Items */}
          <div className="overflow-hidden">
            <div className="flex gap-6 transition-transform duration-500 ease-in-out">
              {visibleFragrances.map((fragrance, index) => (
                <div
                  key={`${fragrance.name}-${currentIndex}-${index}`}
                  className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3"
                  style={{
                    animation: `fadeInSlide 0.6s ease-out ${index * 0.1}s both`,
                  }}
                >
                  {/* Card */}
                  <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 h-full">
                    {/* Image Section */}
                    <div
                      className={`bg-gradient-to-br ${getCategoryColor(fragrance.category)} p-8 relative overflow-hidden h-64`}
                    >
                      {/* Image */}
                      <div className="text-center relative z-10 h-full flex items-center justify-center">
                        <img
                          src={fragrance.image}
                          alt={fragrance.name}
                          className="w-full h-full object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-500"
                        />
                      </div>

                      {/* Decorative circles */}
                      <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-white/20 rounded-full blur-2xl"></div>
                      <div className="absolute -top-10 -left-10 w-32 h-32 bg-white/20 rounded-full blur-2xl"></div>
                    </div>

                    {/* Content Section */}
                    <div className="p-6">
                      {/* Category Badge */}
                      <div className="inline-block bg-gray-100 text-gray-600 text-xs font-semibold px-3 py-1 rounded-full mb-3">
                        {fragrance.category}
                      </div>

                      {/* Name */}
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {fragrance.name}
                      </h3>

                      {/* Description */}
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                        Premium keyfiyyətli təbii maddələrdən hazırlanmış unikal
                        ətir
                      </p>

                      {/* Rating */}
                      <div className="flex items-center gap-2">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className="w-4 h-4 fill-orange-500 text-orange-500"
                            />
                          ))}
                        </div>
                        <span className="text-sm text-gray-600">5.0</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({
            length: Math.ceil(allFragrances.length / itemsPerView),
          }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index * itemsPerView)}
              className={`h-2 rounded-full transition-all duration-300 ${
                Math.floor(currentIndex / itemsPerView) === index
                  ? "w-8 bg-gradient-to-r from-orange-500 to-red-500"
                  : "w-2 bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <a
            href="/scents"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white border-2 border-gray-900 text-gray-900 font-semibold rounded-xl hover:bg-gray-900 hover:text-white transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            Bütün Qoxuları Gör
            <ChevronRight className="w-5 h-5" />
          </a>
        </div>
      </div>

      <style>{`
        @keyframes fadeInSlide {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </section>
  );
};

export default ExampleFragrances;
