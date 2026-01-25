import React from 'react';
import { Sparkles, Leaf, Globe, Star } from 'lucide-react';

interface Feature {
  id: number;
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const WhyChooseUs: React.FC = () => {
  const features: Feature[] = [
    {
      id: 1,
      number: "01",
      title: "Artistic Design",
      description: "Every fragrance is a masterpiece, crafted with precision by world-class parfumers.",
      icon: <Sparkles className="text-amber-500" size={24} />
    },
    {
      id: 2,
      number: "02",
      title: "Organic Ingredients",
      description: "Sourced from nature's finest, each note embodies pure sophistication.",
      icon: <Leaf className="text-green-500" size={24} />
    },
    {
      id: 3,
      number: "03",
      title: "Sustainable Elegance",
      description: "Indulge guilt-free with fragrances designed to honour the planet.",
      icon: <Globe className="text-blue-500" size={24} />
    },
    {
      id: 4,
      number: "04",
      title: "Exclusive Collections",
      description: "Discover scents as rare and unique as the moments they inspire.",
      icon: <Star className="text-purple-500" size={24} />
    }
  ];

  const images = [
    {
      src: "data:image/svg+xml,%3Csvg width='400' height='400' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3ClinearGradient id='bg1' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23422006;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%2378350f;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='400' height='400' fill='url(%23bg1)'/%3E%3Cpath d='M 150 150 L 170 120 L 190 150 L 180 200 L 160 200 Z' fill='%23fbbf24'/%3E%3Crect x='160' y='200' width='20' height='100' fill='%23fbbf24'/%3E%3Crect x='155' y='180' width='30' height='30' fill='%23f59e0b'/%3E%3Ccircle cx='170' cy='160' r='15' fill='%23fcd34d'/%3E%3Cpath d='M 100 320 L 120 300 L 140 320 L 135 340 L 105 340 Z' fill='%231f2937' opacity='0.6'/%3E%3Cellipse cx='170' cy='280' rx='40' ry='15' fill='%231f2937' opacity='0.3'/%3E%3C/svg%3E",
      className: "rounded-3xl"
    },
    {
      src: "data:image/svg+xml,%3Csvg width='400' height='400' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3ClinearGradient id='bg2' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23f3f4f6;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%23e5e7eb;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='400' height='400' fill='url(%23bg2)'/%3E%3Cpath d='M 180 100 Q 200 110 200 130 L 200 250 Q 200 270 180 280 L 160 280 Q 140 270 140 250 L 140 130 Q 140 110 160 100 Z' fill='%23d97706'/%3E%3Crect x='150' y='120' width='40' height='100' fill='%23fbbf24' opacity='0.8'/%3E%3Cpath d='M 150 85 L 170 75 L 190 85 L 185 105 L 155 105 Z' fill='%23b45309'/%3E%3Ccircle cx='170' cy='90' r='8' fill='%23f59e0b'/%3E%3Ctext x='170' y='180' font-family='serif' font-size='16' text-anchor='middle' fill='white'%3ELUXE%3C/text%3E%3Cpath d='M 100 200 C 110 190 120 195 130 200 L 135 210 C 125 215 115 215 105 210 Z' fill='%23059669' opacity='0.3'/%3E%3Cpath d='M 240 180 C 250 170 260 175 270 180 L 275 190 C 265 195 255 195 245 190 Z' fill='%23059669' opacity='0.3'/%3E%3C/svg%3E",
      className: "rounded-3xl"
    },
    {
      src: "data:image/svg+xml,%3Csvg width='400' height='400' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3ClinearGradient id='bg3' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23064e3b;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%23065f46;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='400' height='400' fill='url(%23bg3)'/%3E%3Crect x='120' y='120' width='80' height='160' rx='8' fill='%23b45309'/%3E%3Crect x='135' y='135' width='50' height='130' rx='5' fill='%23f59e0b'/%3E%3Crect x='145' y='155' width='30' height='60' fill='white' rx='2'/%3E%3Crect x='140' y='100' width='40' height='30' rx='4' fill='%2378350f'/%3E%3Cpath d='M 220 140 L 240 120 L 260 140 L 250 180 L 230 180 Z' fill='%23b45309'/%3E%3Crect x='230' y='180' width='20' height='100' fill='%23b45309'/%3E%3Ccircle cx='240' cy='150' r='10' fill='%23f59e0b'/%3E%3Cpath d='M 80 240 C 85 235 95 235 100 240 L 90 250 Z' fill='%2310b981' opacity='0.4'/%3E%3Cpath d='M 300 200 C 305 195 315 195 320 200 L 310 210 Z' fill='%2310b981' opacity='0.4'/%3E%3C/svg%3E",
      className: "rounded-3xl"
    },
    {
      src: "data:image/svg+xml,%3Csvg width='400' height='400' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3ClinearGradient id='bg4' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%231f2937;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%23374151;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='400' height='400' fill='url(%23bg4)'/%3E%3Crect x='140' y='100' width='120' height='180' rx='12' fill='%23111827'/%3E%3Crect x='155' y='115' width='90' height='150' rx='8' fill='%23fbbf24'/%3E%3Crect x='170' y='140' width='60' height='80' fill='white' rx='3'/%3E%3Ctext x='200' y='170' font-family='serif' font-size='14' text-anchor='middle' fill='%23b45309'%3ENOIR%3C/text%3E%3Ctext x='200' y='195' font-family='serif' font-size='12' text-anchor='middle' fill='%23b45309'%3EELEGANCE%3C/text%3E%3Cpath d='M 175 80 L 200 65 L 225 80 L 218 105 L 182 105 Z' fill='%236b7280'/%3E%3Ccircle cx='200' cy='85' r='10' fill='%239ca3af'/%3E%3Cpath d='M 100 280 Q 100 270 110 270 Q 120 270 120 280' stroke='%23fbbf24' fill='none' stroke-width='2' opacity='0.3'/%3E%3Cpath d='M 280 200 Q 280 190 290 190 Q 300 190 300 200' stroke='%23fbbf24' fill='none' stroke-width='2' opacity='0.3'/%3E%3C/svg%3E",
      className: "rounded-3xl"
    }
  ];

  return (
    <div className="w-full bg-linear-to-br from-stone-100 via-neutral-100 to-gray-100 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Images Grid */}
          <div className="relative" style={{ animation: 'fadeInLeft 0.8s ease-out' }}>
            <div className="grid grid-cols-2 gap-4">
              {/* Top Left - Larger */}
              <div className="col-span-1 row-span-2">
                <div className="relative overflow-hidden rounded-3xl shadow-2xl h-full transform hover:scale-105 transition-transform duration-500">
                  <img
                    src={images[0].src}
                    alt="Luxury Perfume"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/30 to-transparent" />
                </div>
              </div>

              {/* Top Right */}
              <div className="col-span-1">
                <div className="relative overflow-hidden rounded-3xl shadow-xl transform hover:scale-105 transition-transform duration-500">
                  <img
                    src={images[1].src}
                    alt="Artisan Craftsmanship"
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent" />
                </div>
              </div>

              {/* Bottom Left */}
              <div className="col-span-1">
                <div className="relative overflow-hidden rounded-3xl shadow-xl transform hover:scale-105 transition-transform duration-500">
                  <img
                    src={images[2].src}
                    alt="Natural Ingredients"
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent" />
                </div>
              </div>

              {/* Bottom Right - Taller */}
              <div className="col-span-1 row-span-2">
                <div className="relative overflow-hidden rounded-3xl shadow-2xl h-full transform hover:scale-105 transition-transform duration-500">
                  <img
                    src={images[3].src}
                    alt="Elegant Design"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/30 to-transparent" />
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-amber-400 rounded-full blur-3xl opacity-20 animate-pulse" />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-orange-400 rounded-full blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }} />
          </div>

          {/* Right Side - Content */}
          <div className="space-y-8" style={{ animation: 'fadeInRight 0.8s ease-out' }}>
            {/* Header */}
            <div className="space-y-4">
              <h2 className="text-5xl md:text-6xl font-bold text-gray-900">
                Why Choose Us
              </h2>
              <p className="text-amber-600 text-lg font-medium italic">
                Luxury redefined—crafted for the exceptional
              </p>
            </div>

            {/* Features */}
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div
                  key={feature.id}
                  className="group relative bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
                  style={{ animation: `fadeInUp 0.6s ease-out ${index * 0.15}s both` }}
                >
                  {/* Number Badge */}
                  <div className="absolute -top-3 -left-3 w-12 h-12 bg-linear-to-br from-amber-400 to-orange-500 rounded-xl flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform">
                    <span className="text-white font-bold text-sm">{feature.number}</span>
                  </div>

                  <div className="flex items-start gap-4 ml-6">
                    {/* Icon */}
                    <div className="shrink-0 mt-1 p-3 bg-linear-to-br from-gray-50 to-gray-100 rounded-xl group-hover:scale-110 transition-transform">
                      {feature.icon}
                    </div>

                    {/* Content */}
                    <div className="flex-1 space-y-2">
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-amber-600 transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-gray-500 text-sm leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>

                  {/* Decorative Border on Hover */}
                  <div className="absolute inset-0 rounded-2xl border-2 border-amber-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <button className="group px-8 py-4 bg-linear-to-r from-amber-400 to-orange-500 hover:from-amber-500 hover:to-orange-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
                Explore Our Collections
                <svg 
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

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

export default WhyChooseUs;