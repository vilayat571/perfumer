import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Sparkles, Droplets, MessageCircle, Phone } from "lucide-react";

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const WHATSAPP_NUMBER = "60176487917";
  const PHONE_NUMBER = "+994501234567";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const handleWhatsApp = () => {
    const message = encodeURIComponent("Salam! ZANA haqqında məlumat almaq istəyirəm.");
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
  };

  const handleCall = () => {
    window.location.href = `tel:${PHONE_NUMBER}`;
  };

  const navItems = [
    { name: "Mağaza", href: "/shop" },
    { name: "Qoxular", href: "/scents" },
    { name: "Biz kimik?", href: "/about" },
    { name: "Əlaqə", href: "/contact" },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">

          {/* Logo */}
          <div className="shrink-0 group">
            <Link
              to="/"
              className="flex items-center gap-2 text-3xl font-bold text-gray-900 transition-all duration-300 hover:scale-105"
            >
              <span className="relative">
                Perfumer
                <span className="absolute -top-1 -right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Sparkles className="w-4 h-4 text-orange-500" />
                </span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <Link
                key={item.name}
                to={item.href}
                className={`relative px-4 py-2 font-medium transition-all duration-300 group ${
                  isActive(item.href)
                    ? "text-orange-500"
                    : "text-gray-700 hover:text-gray-900"
                }`}
                style={{ animation: `slideDown 0.5s ease-out ${index * 0.1}s both` }}
              >
                <span className="relative z-10">{item.name}</span>
                <span
                  className={`absolute inset-0 bg-gradient-to-r from-orange-100 to-amber-100 rounded-lg transition-transform duration-300 ease-out ${
                    isActive(item.href) ? "scale-100" : "scale-0 group-hover:scale-100"
                  }`}
                />
                {isActive(item.href) && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-orange-500 rounded-full" />
                )}
              </Link>
            ))}
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-2">

            {/* WhatsApp */}
            <button
              onClick={handleWhatsApp}
              className="hidden lg:flex items-center gap-2 px-4 py-2 bg-orange-500 text-white font-semibold rounded-xl hover:bg-orange-600 active:scale-95 transition-all duration-200"
            >
              <MessageCircle className="w-5 h-5" />
              <span className="text-sm">Yaz</span>
            </button>

            {/* Call */}
            <button
              onClick={handleCall}
              className="hidden lg:flex items-center gap-2 px-4 py-2 bg-orange-500 text-white font-semibold rounded-xl hover:bg-orange-600 active:scale-95 transition-all duration-200"
            >
              <Phone className="w-5 h-5" />
              <span className="text-sm">Zəng et</span>
            </button>

            {/* CTA */}
            <Link
              to="/create-perfume"
              className="hidden md:flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-orange-500 to-rose-500 text-white font-semibold rounded-xl hover:scale-105 active:scale-95 transition-all duration-200 shadow-md shadow-orange-200"
            >
              <Droplets className="w-5 h-5" />
              <span>Ətrini hazırla</span>
            </Link>

            {/* Mobile Toggle */}
            <button
              className="md:hidden p-3 text-gray-700 hover:bg-gray-100 rounded-xl transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Menyunu aç/bağla"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ${
            isMobileMenuOpen ? "max-h-[500px]" : "max-h-0"
          }`}
        >
          <div className="py-4 border-t border-gray-100 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`flex items-center justify-between px-4 py-3 rounded-xl transition-colors ${
                  isActive(item.href)
                    ? "bg-orange-50 text-orange-500 font-medium"
                    : "text-gray-700 hover:bg-orange-50 hover:text-orange-500"
                }`}
              >
                {item.name}
                {isActive(item.href) && (
                  <span className="w-1.5 h-1.5 bg-orange-500 rounded-full" />
                )}
              </Link>
            ))}

            {/* Mobile Buttons */}
            <div className="px-0 pt-3 space-y-2 border-t border-gray-100 mt-3">
              <button
                onClick={handleWhatsApp}
                className="w-full flex justify-center items-center gap-2 px-5 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-xl transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp
              </button>
              <button
                onClick={handleCall}
                className="w-full flex justify-center items-center gap-2 px-5 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-xl transition-colors"
              >
                <Phone className="w-5 h-5" />
                Zəng vur
              </button>
              <Link
                to="/create-perfume"
                className="flex justify-center items-center gap-2 px-5 py-3 bg-gradient-to-r from-orange-500 to-rose-500 text-white font-semibold rounded-xl transition-all hover:opacity-90"
              >
                <Droplets className="w-5 h-5" />
                Ətrini hazırla
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;