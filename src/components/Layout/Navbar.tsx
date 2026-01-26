import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <div className="w-full flex items-center justify-center">
      <nav className="flex items-center justify-between px-12 relative bottom-5 w-4/5 bg-white/80 backdrop-blur-sm">
        <div className="text-2xl font-bold text-gray-900">
          <img
            src={logo}
            className="w-40 h-auto object-cover relative right-10"
            alt="logo image of perfumer.az"
          />
        </div>

        <Link
          to={"/createperfume"}
          className="bg-black px-6 py-3 rounded-md text-white"
        >
          Parfum düzəlt
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
