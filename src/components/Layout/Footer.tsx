import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Sparkles } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Ana Səhifə", href: "/" },
    { name: "Mağaza", href: "/shop" },
    { name: "Qoxular", href: "/scents" },
    { name: "Ətir Yarat", href: "/create-perfume" },
    { name: "Haqqımızda", href: "/about" },
  ];

  const serviceLinks = [
    { name: "Əlaqə", href: "/contact" },
    { name: "Çatdırılma", href: "/delivery" },
    { name: "Geri Qaytarma", href: "/returns" },
    { name: "Məxfilik", href: "/privacy" },
  ];

  const bottomLinks = [
    { name: "Məxfilik", href: "/privacy" },
    { name: "Geri Qaytarma", href: "/returns" },
    { name: "Çatdırılma", href: "/delivery" },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand Section */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4 group w-fit">
              <span className="text-3xl font-bold text-white group-hover:text-orange-400 transition-colors duration-300">
                Perfumer
              </span>
              <Sparkles className="w-5 h-5 text-orange-500" />
            </Link>
            <p className="text-gray-400 mb-6 leading-relaxed text-sm">
              Öz unikal ətrinizi yaradın və fərqlənin. ZANA ilə hər an xüsusidir.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {[
                { Icon: Facebook, href: "#", color: "hover:text-blue-400 hover:border-blue-400" },
                { Icon: Instagram, href: "#", color: "hover:text-pink-400 hover:border-pink-400" },
                { Icon: Twitter, href: "#", color: "hover:text-sky-400 hover:border-sky-400" },
              ].map(({ Icon, href, color }, index) => (
                <a
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 bg-gray-800 border border-gray-700 rounded-lg transition-all duration-300 hover:scale-110 hover:bg-gray-700 ${color}`}
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-base mb-5">Keçidlər</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-orange-400 transition-all duration-300 hover:translate-x-1 inline-flex items-center gap-1.5 text-sm group"
                  >
                    <span className="w-1 h-1 bg-orange-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-white font-semibold text-base mb-5">Müştəri Xidməti</h3>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-orange-400 transition-all duration-300 hover:translate-x-1 inline-flex items-center gap-1.5 text-sm group"
                  >
                    <span className="w-1 h-1 bg-orange-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Newsletter mini */}
            <div className="mt-6">
              <p className="text-xs text-gray-500 mb-2">Yeniliklərdən xəbərdar olun</p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="E-poçtunuz"
                  className="flex-1 bg-gray-800 border border-gray-700 text-gray-300 text-xs px-3 py-2 rounded-lg focus:outline-none focus:border-orange-500 transition-colors placeholder-gray-600"
                />
                <button className="bg-orange-500 hover:bg-orange-600 text-white text-xs px-3 py-2 rounded-lg transition-colors font-medium">
                  Abunə
                </button>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold text-base mb-5">Əlaqə</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm leading-relaxed">
                  Bakı, Azərbaycan
                  <br />
                  28 May küçəsi
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-orange-500 flex-shrink-0" />
                <a
                  href="tel:+994501234567"
                  className="text-gray-400 hover:text-orange-400 transition-colors duration-300 text-sm"
                >
                  +994 50 123 45 67
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-orange-500 flex-shrink-0" />
                <a
                  href="mailto:info@zana.az"
                  className="text-gray-400 hover:text-orange-400 transition-colors duration-300 text-sm"
                >
                  info@zana.az
                </a>
              </li>
            </ul>

            {/* CTA */}
            <Link
              to="/create-perfume"
              className="inline-flex items-center gap-2 mt-6 px-5 py-2.5 bg-gradient-to-r from-orange-500 to-rose-500 text-white text-sm font-semibold rounded-xl hover:opacity-90 hover:scale-105 active:scale-95 transition-all duration-200 shadow-lg shadow-orange-900/30"
            >
              <Sparkles className="w-4 h-4" />
              Ətir Yarat
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © {currentYear}{" "}
              <span className="text-gray-400 font-medium">ZANA</span>. Bütün hüquqlar qorunur.
            </p>
            <div className="flex gap-6 text-sm">
              {bottomLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="text-gray-500 hover:text-orange-400 transition-colors duration-300"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;