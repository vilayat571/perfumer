import React, { useState, useEffect } from "react";
import { Menu, X, Sparkles, Droplets, MessageCircle, Phone } from "lucide-react";

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const WHATSAPP_NUMBER = "60176487917";
  const PHONE_NUMBER = "+994501234567";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleWhatsApp = () => {
    const message = encodeURIComponent("Salam! ZANA haqqında məlumat almaq istəyirəm.");
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
  };

  const handleCall = () => {
    window.location.href = `tel:${PHONE_NUMBER}`;
  };

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg"
          : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo with Animation */}
          <div className="shrink-0 group">
            <a
              href="/"
              className="flex items-center gap-2 text-3xl font-bold text-gray-900 transition-all duration-300 hover:scale-105"
            >
              <span className="relative">
                perfumer
                <span className="absolute -top-1 -right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Sparkles className="w-4 h-4 text-orange-500" />
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
                <span className="absolute inset-0 bg-gradient-to-r from-orange-100 to-amber-100 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 ease-out"></span>
              </a>
            ))}
          </div>

          {/* Right Side - Action Buttons */}
          <div className="flex items-center gap-2">
            {/* WhatsApp Button */}
            <button
              onClick={handleWhatsApp}
              className="hidden lg:flex items-center gap-2 px-4 py-2 bg-orange-500 text-white font-semibold rounded-xl transition-all duration-300 hover:bg-orange-600 hover:shadow-lg hover:scale-105 group"
              title="WhatsApp ilə yaz"
            >
              <MessageCircle className="w-5 h-5 transition-transform duration-300 group-hover:rotate-12" />
              <span className="text-sm">Yaz</span>
            </button>

            {/* Call Button */}
            <button
              onClick={handleCall}
              className="hidden lg:flex items-center gap-2 px-4 py-2 bg-orange-500 text-white font-semibold rounded-xl transition-all duration-300 hover:bg-orange-600 hover:shadow-lg hover:scale-105 group"
              title="Zəng et"
            >
              <Phone className="w-5 h-5 transition-transform duration-300 group-hover:rotate-12" />
              <span className="text-sm">Zəng et</span>
            </button>

            {/* Create Perfume CTA Button */}
            <a
              href="/create-perfume"
              className="hidden md:flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-orange-500 to-rose-500 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:scale-105 group relative overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-rose-500 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <Droplets className="w-5 h-5 relative z-10 transition-transform duration-300 group-hover:rotate-12" />
              <span className="relative z-10">Create Perfume</span>
            </a>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-3 text-gray-700 hover:text-gray-900 transition-all duration-300 hover:scale-110 hover:bg-orange-50 rounded-xl"
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
            isMobileMenuOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
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
                className="block px-4 py-3 text-gray-700 hover:text-gray-900 font-medium transition-all duration-300 hover:bg-orange-50 rounded-xl transform hover:translate-x-2"
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

            {/* Mobile Action Buttons */}
            <div className="px-4 pt-4 space-y-2">
              {/* WhatsApp Button */}
              <button
                onClick={handleWhatsApp}
                className="w-full flex items-center justify-center gap-2 px-5 py-3 bg-orange-500 text-white font-semibold rounded-xl transition-all duration-300 hover:bg-orange-600"
                style={{
                  animation: isMobileMenuOpen
                    ? `slideInLeft 0.3s ease-out 0.4s both`
                    : "none",
                }}
              >
                <MessageCircle className="w-5 h-5" />
                <span>WhatsApp ilə yaz</span>
              </button>

              {/* Call Button */}
              <button
                onClick={handleCall}
                className="w-full flex items-center justify-center gap-2 px-5 py-3 bg-orange-500 text-white font-semibold rounded-xl transition-all duration-300 hover:bg-orange-600"
                style={{
                  animation: isMobileMenuOpen
                    ? `slideInLeft 0.3s ease-out 0.5s both`
                    : "none",
                }}
              >
                <Phone className="w-5 h-5" />
                <span>Zəng et</span>
              </button>

              {/* Mobile Create Perfume Button */}
              <a
                href="/create-perfume"
                className="flex items-center justify-center gap-2 px-5 py-3 bg-gradient-to-r from-orange-500 to-rose-500 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-lg"
                onClick={() => setIsMobileMenuOpen(false)}
                style={{
                  animation: isMobileMenuOpen
                    ? `slideInLeft 0.3s ease-out 0.6s both`
                    : "none",
                }}
              >
                <Droplets className="w-5 h-5" />
                <span>Create Perfume</span>
              </a>
            </div>
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
            transform: translateY(0);
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;