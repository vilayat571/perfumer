import React, { useState, useEffect } from "react";
import { ShoppingCart, Bell, Menu, X, Sparkles } from "lucide-react";

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [cartCount] = useState(0);
  const [hasNotifications] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`sticky bg-wh top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white backdrop-blur-md shadow-lg"
          : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo with Animation */}
          <div className="flex-shrink-0 group">
            <a
              href="/"
              className="flex items-center gap-2 text-3xl font-bold text-gray-900 transition-all duration-300 hover:scale-105"
            >
              <span className="relative">
                zana
                <span className="absolute -top-1 -right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Sparkles className="w-4 h-4 text-amber-500" />
                </span>
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {[
              { name: "Shop", href: "/shop" },
              { name: "Scents", href: "/scents" },
              { name: "About zana", href: "/about" },
              { name: "Contact", href: "/contact" },
            ].map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                className="relative px-4 py-2 text-gray-700 font-medium transition-all duration-300 hover:text-gray-900 group"
                style={{
                  animation: `slideDown 0.5s ease-out ${index * 0.1}s both`,
                }}
              >
                <span className="relative z-10">{item.name}</span>
                <span className="absolute inset-0 bg-gradient-to-r from-amber-100 to-rose-100 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 ease-out"></span>
              </a>
            ))}
          </div>

          {/* Right Side Icons */}
          <div className="flex items-center space-x-2">
            {/* Cart Icon with Badge */}
            <button
              className="relative p-3 text-gray-700 hover:text-gray-900 transition-all duration-300 hover:scale-110 hover:bg-gradient-to-r hover:from-amber-50 hover:to-rose-50 rounded-xl group"
              aria-label="Shopping cart"
            >
              <ShoppingCart className="w-6 h-6 transition-transform duration-300 group-hover:rotate-12" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-gradient-to-r from-amber-500 to-rose-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full font-bold animate-bounce">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Notification Icon with Indicator */}
            <button
              className="relative p-3 text-gray-700 hover:text-gray-900 transition-all duration-300 hover:scale-110 hover:bg-gradient-to-r hover:from-amber-50 hover:to-rose-50 rounded-xl group"
              aria-label="Notifications"
            >
              <Bell className="w-6 h-6 transition-transform duration-300 group-hover:rotate-12" />
              {hasNotifications && (
                <span className="absolute top-2 right-2 bg-rose-500 w-2 h-2 rounded-full animate-pulse"></span>
              )}
            </button>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-3 text-gray-700 hover:text-gray-900 transition-all duration-300 hover:scale-110 hover:bg-gradient-to-r hover:from-amber-50 hover:to-rose-50 rounded-xl"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu with Animation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="py-4 border-t border-gray-200 space-y-2">
            {[
              { name: "Shop", href: "/shop" },
              { name: "Scents", href: "/scents" },
              { name: "About zana", href: "/about" },
              { name: "Contact", href: "/contact" },
            ].map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                className="block px-4 py-3 text-gray-700 hover:text-gray-900 font-medium transition-all duration-300 hover:bg-gradient-to-r hover:from-amber-50 hover:to-rose-50 rounded-xl transform hover:translate-x-2"
                onClick={() => setIsMobileMenuOpen(false)}
                style={{
                  animation: isMobileMenuOpen
                    ? `slideInLeft 0.3s ease-out ${index * 0.1}s both`
                    : "none",
                }}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Add CSS animations */}
      <style>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;