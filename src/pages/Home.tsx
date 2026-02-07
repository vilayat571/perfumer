import React from "react";
import { Sparkles } from "lucide-react";
import Navbar from "../components/Layout/Navbar";

const HeroSection: React.FC = () => {
  return (
    <section className="bg-gradient-to-br from-amber-50 via-white to-rose-50 relative overflow-hidden">
      <Navbar />
      <div className="absolute top-20 left-10 w-72 h-72 bg-amber-200/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-rose-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 relative z-10">
        {/* Discount Badge with Animation */}
        <div
          className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg mb-8 hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer"
          style={{ animation: "fadeInDown 0.6s ease-out" }}
        >
          <span className="bg-gradient-to-r from-gray-900 to-gray-700 text-white text-sm font-semibold px-3 py-1 rounded-full animate-pulse">
            10% OFF
          </span>
          <span className="text-gray-700 text-sm font-medium">
            Christmas Eve Discount
          </span>
          <Sparkles className="w-4 h-4 text-amber-500" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div style={{ animation: "fadeInLeft 0.8s ease-out" }}>
            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight mb-6">
              Bring right mood
              <br />
              <span className="bg-gradient-to-r from-amber-600 to-rose-600 bg-clip-text text-transparent">
                into every room.
              </span>
            </h1>
            <p className="text-lg text-gray-600 mb-12 max-w-md">
              ZANA Reed Diffuser complements your space and routine with lasting
              fragrance and playful design.
            </p>

            {/* Product Card with Enhanced Design */}
            <div
              className="inline-flex items-center gap-4 bg-white/80 backdrop-blur-sm rounded-3xl p-4 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 group"
              style={{ animation: "fadeInUp 1s ease-out" }}
            >
              <div className="w-20 h-20 bg-gradient-to-br from-amber-100 to-rose-100 rounded-2xl flex items-center justify-center overflow-hidden group-hover:scale-110 transition-transform duration-300">
                <img
                  src=""
                  alt=""
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-amber-600 group-hover:to-rose-600 group-hover:bg-clip-text transition-all duration-300">
                  Flower Fun
                </h3>
                <p className="text-lg text-gray-600 font-semibold">$120.00</p>
              </div>
              <button className="ml-4 w-12 h-12 bg-gradient-to-r from-amber-500 to-rose-500 hover:from-amber-600 hover:to-rose-600 text-white rounded-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:rotate-90 shadow-lg">
                <span className="text-2xl font-light">+</span>
              </button>
            </div>
          </div>

          {/* Right Content - Product Display */}
          <div className="relative" style={{ animation: "fadeInRight 0.8s ease-out" }}>
            <div className="grid grid-cols-3 gap-6 items-end">
              {/* Yellow Dragon Diffuser */}
              <div
                className="flex flex-col items-center"
                style={{ animation: "floatUp 1s ease-out 0.2s both" }}
              >
                <div className="w-full aspect-square bg-gradient-to-br from-amber-50 to-amber-100 rounded-3xl mb-4 overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 group">
                  <div className="w-full h-full bg-gradient-to-br from-amber-100 to-yellow-100 group-hover:from-amber-200 group-hover:to-yellow-200 transition-all duration-500"></div>
                </div>
              </div>

              {/* Center - Orange Playground Box and Diffuser */}
              <div
                className="flex flex-col items-center -mt-12"
                style={{ animation: "floatUp 1s ease-out 0.4s both" }}
              >
                <div className="w-full bg-gradient-to-br from-rose-50 to-orange-100 rounded-3xl mb-4 overflow-hidden aspect-[3/4] shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 group">
                  <div className="w-full h-full bg-gradient-to-br from-rose-100 to-orange-100 group-hover:from-rose-200 group-hover:to-orange-200 transition-all duration-500"></div>
                </div>
                <div className="w-full aspect-square bg-gradient-to-br from-orange-50 to-rose-100 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 group">
                  <div className="w-full h-full bg-gradient-to-br from-orange-100 to-rose-100 group-hover:from-orange-200 group-hover:to-rose-200 transition-all duration-500"></div>
                </div>
              </div>

              {/* Blue Hippo Diffuser */}
              <div
                className="flex flex-col items-center"
                style={{ animation: "floatUp 1s ease-out 0.6s both" }}
              >
                <div className="w-full aspect-square bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl mb-4 overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 group">
                  <div className="w-full h-full bg-gradient-to-br from-blue-100 to-cyan-100 group-hover:from-blue-200 group-hover:to-cyan-200 transition-all duration-500"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Add CSS animations */}
      <style>{`
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

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

        @keyframes floatUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;