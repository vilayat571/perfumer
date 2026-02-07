import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Sparkles } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-3xl font-bold text-white">zana</span>
              <Sparkles className="w-5 h-5 text-orange-500" />
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Öz unikal ətrinizi yaradın və fərqlənin. ZANA ilə hər an xüsusidir.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {[
                { Icon: Facebook, href: "#", color: "hover:text-blue-500" },
                { Icon: Instagram, href: "#", color: "hover:text-pink-500" },
                { Icon: Twitter, href: "#", color: "hover:text-sky-500" },
              ].map(({ Icon, href, color }, index) => (
                <a
                  key={index}
                  href={href}
                  className={`p-2 bg-gray-800 rounded-lg transition-all duration-300 hover:scale-110 ${color}`}
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Keçidlər</h3>
            <ul className="space-y-3">
              {[
                { name: "Ana Səhifə", href: "/" },
                { name: "Mağaza", href: "/shop" },
                { name: "Qoxular", href: "/scents" },
                { name: "Ətir Yarat", href: "/create-perfume" },
                { name: "Haqqımızda", href: "/about" },
              ].map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-orange-500 transition-colors duration-300 hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">
              Müştəri Xidməti
            </h3>
            <ul className="space-y-3">
              {[
                { name: "Əlaqə", href: "/contact" },
                { name: "FAQ", href: "/faq" },
                { name: "Çatdırılma", href: "/shipping" },
                { name: "Geri Qaytarma", href: "/returns" },
                { name: "Məxfilik", href: "/privacy" },
              ].map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-orange-500 transition-colors duration-300 hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Əlaqə</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-orange-500 flex-shrink-0 mt-1" />
                <span className="text-gray-400">
                  Bakı, Azərbaycan
                  <br />
                  28 May küçəsi
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-orange-500 flex-shrink-0" />
                <a
                  href="tel:+994501234567"
                  className="text-gray-400 hover:text-orange-500 transition-colors duration-300"
                >
                  +994 50 123 45 67
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-orange-500 flex-shrink-0" />
                <a
                  href="mailto:info@zana.az"
                  className="text-gray-400 hover:text-orange-500 transition-colors duration-300"
                >
                  info@zana.az
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {currentYear} ZANA. Bütün hüquqlar qorunur.
            </p>
            <div className="flex gap-6 text-sm">
              <a
                href="/terms"
                className="text-gray-400 hover:text-orange-500 transition-colors duration-300"
              >
                Şərtlər
              </a>
              <a
                href="/privacy"
                className="text-gray-400 hover:text-orange-500 transition-colors duration-300"
              >
                Məxfilik
              </a>
              <a
                href="/cookies"
                className="text-gray-400 hover:text-orange-500 transition-colors duration-300"
              >
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;