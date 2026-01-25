import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  color: string;
}

const Products: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const products: Product[] = [
    {
      id: 1,
      name: "Celestial Blossom",
      description: "A floral symphony of gardenia, jasmine for lasting elegance.",
      price: 250,
      image:"https://rituals.scene7.com/is/image/rituals/1110007_eaudeparfum-15ml?resMode=sharp2&fmt=png-alpha&crop=1250,750,4500,4500&wid=1000",
      color: "from-pink-100 to-pink-200"
    },
    {
      id: 2,
      name: "Noir Elixir",
      description: "A bold blend of blackcurrant and musk for irresistible allure.",
      price: 299,
      image:"https://rituals.scene7.com/is/image/rituals/1109871-eaudeparfum-15ml?resMode=sharp2&fmt=png-alpha&crop=1250,750,4500,4500&wid=1000",
      color: "from-gray-200 to-gray-300"
    },
    {
      id: 3,
      name: "Mystic Dawn",
      description: "A bold blend of blackcurrant and musk for irresistible allure.",
      price: 175,
      image:"https://id.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-imagination--LP0219_PM2_Front%20view.jpg",
      color: "from-blue-100 to-blue-200"
    },
    {
      id: 4,
      name: "Golden Amber",
      description: "Rich amber notes with vanilla and sandalwood warmth.",
      price: 320,
      image: "data:image/svg+xml,%3Csvg width='300' height='300' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3ClinearGradient id='grad4' x1='0%25' y1='0%25' x2='0%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23fef3c7;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%23fde68a;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='300' height='300' fill='url(%23grad4)' rx='20'/%3E%3Crect x='100' y='60' width='100' height='160' rx='8' fill='%23f59e0b' opacity='0.4'/%3E%3Crect x='110' y='70' width='80' height='140' rx='6' fill='%23fbbf24'/%3E%3Crect x='120' y='90' width='60' height='70' fill='white' rx='3'/%3E%3Ctext x='150' y='120' font-family='serif' font-size='11' text-anchor='middle' fill='%23b45309'%3EGOLDEN%3C/text%3E%3Ctext x='150' y='135' font-family='serif' font-size='11' text-anchor='middle' fill='%23b45309'%3EAMBER%3C/text%3E%3Crect x='130' y='40' width='40' height='30' rx='3' fill='%23b45309'/%3E%3Ccircle cx='150' cy='55' r='3' fill='%23f59e0b'/%3E%3C/svg%3E",
      color: "from-amber-100 to-amber-200"
    },
    {
      id: 5,
      name: "Velvet Rose",
      description: "Luxurious rose petals with hints of bergamot and patchouli.",
      price: 285,
      image: "data:image/svg+xml,%3Csvg width='300' height='300' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3ClinearGradient id='grad5' x1='0%25' y1='0%25' x2='0%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23fce7f3;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%23fbcfe8;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='300' height='300' fill='url(%23grad5)' rx='20'/%3E%3Crect x='95' y='55' width='110' height='170' rx='10' fill='%23be185d' opacity='0.3'/%3E%3Crect x='105' y='65' width='90' height='150' rx='8' fill='%23db2777'/%3E%3Crect x='115' y='85' width='70' height='80' fill='white' rx='3'/%3E%3Ctext x='150' y='115' font-family='serif' font-size='12' text-anchor='middle' fill='%23831843'%3EVELVET%3C/text%3E%3Ctext x='150' y='135' font-family='serif' font-size='12' text-anchor='middle' fill='%23831843'%3EROSE%3C/text%3E%3Crect x='125' y='35' width='50' height='30' rx='4' fill='%239d174d'/%3E%3Ccircle cx='150' cy='50' r='4' fill='%23be185d'/%3E%3C/svg%3E",
      color: "from-pink-100 to-pink-200"
    }
  ];

  const itemsPerPage = 3;
  const maxIndex = Math.max(0, products.length - itemsPerPage);

  const nextSlide = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const visibleProducts = products.slice(currentIndex, currentIndex + itemsPerPage);

  return (
    <div className="w-full bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2 flex items-center gap-3">
              Featured Collection
              <Sparkles className="text-amber-500" size={32} />
            </h2>
            <p className="text-gray-500 text-lg">Discover our most exquisite fragrances</p>
          </div>
        </div>

        {/* Products Carousel */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            disabled={currentIndex === 0}
            className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center transition-all hover:scale-110 ${
              currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-50'
            }`}
          >
            <ChevronLeft size={24} className="text-gray-700" />
          </button>

          <button
            onClick={nextSlide}
            disabled={currentIndex >= maxIndex}
            className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center transition-all hover:scale-110 ${
              currentIndex >= maxIndex ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-50'
            }`}
          >
            <ChevronRight size={24} className="text-gray-700" />
          </button>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {visibleProducts.map((product, index) => (
              <div
                key={product.id}
                className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
                }}
              >
                {/* Product Image */}
                <div className={`relative overflow-hidden bg-gradient-to-br ${product.color} p-8`}>
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-5 transition-opacity duration-300" />
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-contain transform group-hover:scale-110 transition-transform duration-500"
                  />
                  
                  {/* Floating Badge */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-gray-700 shadow-md">
                    Premium
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-amber-600 transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {product.description}
                    </p>
                  </div>

                  {/* Price and CTA */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="text-3xl font-bold text-gray-900">
                      ${product.price}
                    </div>
                    <button className="px-6 py-3 bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-500 hover:to-orange-600 text-white font-semibold rounded-xl transition-all duration-300 shadow-md hover:shadow-xl transform hover:scale-105">
                      Shop Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {[...Array(maxIndex + 1)].map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === currentIndex ? 'w-8 bg-amber-500' : 'w-2 bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default Products;