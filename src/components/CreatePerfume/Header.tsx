import { ArrowLeft, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="relative bg-gradient-to-r from-white via-amber-50/30 to-rose-50/30 border-b border-gray-100">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-amber-100/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-rose-100/20 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-8 py-8">
        <div className="flex items-center justify-between">
          {/* Left side - Title with animation */}
          <div className="flex items-center gap-4 group">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-400/20 to-rose-400/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative bg-white/80 backdrop-blur-sm p-4 rounded-2xl shadow-sm group-hover:shadow-md transition-all duration-300 border border-gray-100">
                <Sparkles className="w-8 h-8 text-amber-500 animate-pulse" />
              </div>
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-900 via-amber-900 to-rose-900 bg-clip-text text-transparent animate-fadeIn">
                Unikal ətrini hazırla
              </h1>
              <p className="text-sm text-gray-600 mt-1 animate-slideUp">
                Öz ətir kolleksiyanı yarat
              </p>
            </div>
          </div>

          {/* Right side - Back button */}
          <Link
            to="/"
            className="group relative flex items-center gap-2 px-6 py-3 rounded-xl bg-white border-2 border-gray-200 hover:border-gray-900 transition-all duration-300 hover:shadow-lg hover:scale-105"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-amber-50 to-rose-50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            <ArrowLeft className="w-5 h-5 relative z-10 text-gray-700 group-hover:text-gray-900 transition-all duration-300 group-hover:-translate-x-1" />
            <span className="relative z-10 font-medium text-gray-700 group-hover:text-gray-900 hidden sm:inline">
              Geri
            </span>
          </Link>
        </div>

        {/* Progress indicator text */}
        <div className="mt-6 flex items-center gap-2 text-sm text-gray-500 animate-fadeIn">
          <div className="w-2 h-2 rounded-full bg-gradient-to-r from-amber-400 to-rose-400 animate-pulse"></div>
          <span>Addım-addım öz ətrinizi dizayn edin</span>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out;
        }

        .animate-slideUp {
          animation: slideUp 0.6s ease-out 0.2s both;
        }
      `}</style>
    </div>
  );
};

export default Header;