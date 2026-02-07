import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Mail, Sparkles } from "lucide-react";
import logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <div className="w-full flex items-center justify-center">
      <motion.nav
        className="flex items-center justify-between w-full max-w-7xl"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Logo */}
        <Link to="/" className="shrink-0">
          <img
            src={logo}
            className="w-32 sm:w-36 md:w-44 h-auto relative right-12 object-cover"
            alt="logo image of perfumer.az"
          />
        </Link>

        <div className="flex gap-6">
          <Link to={"/contact"}>
            <span className="text-xs sm:text-sm md:text-base">About</span>
          </Link>
           <Link to={"/contact"}>
            <span className="text-xs sm:text-sm md:text-base">Contact</span>
          </Link>
        </div>

        {/* Navigation Buttons */}
        <div className="flex gap-2 sm:gap-3">
          {/* Write a Message Button */}
          <Link
            to={"/contact"}
            className="px-3 sm:px-4 md:px-6 py-2 md:py-2.5 rounded-lg border-2 border-gray-900 text-gray-900 font-medium hover:bg-gray-900 hover:text-white transition-colors duration-200 flex items-center gap-1.5 sm:gap-2"
          >
            <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span className="text-xs sm:text-sm md:text-base">Message</span>
          </Link>

          {/* Create Perfume Button */}
          <Link
            to={"/createperfume"}
            className="px-3 sm:px-4 md:px-6 py-2 md:py-2.5 rounded-lg bg-[#030303] text-white font-medium hover:bg-[#f0b100] transition-colors duration-200 flex items-center gap-1.5 sm:gap-2"
          >
            <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span className="text-xs sm:text-sm md:text-base">Create</span>
          </Link>
        </div>
      </motion.nav>
    </div>
  );
};

export default Navbar;
