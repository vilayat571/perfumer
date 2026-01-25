import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-white py-7 shadow-sm">
      <div className="max-w-7xl mx-auto px-8 py-6 flex items-center justify-between">
        <div className="">
          <h1 className="text-4xl font-bold text-gray-900">Hazırlanma:</h1>
          <p className="text-gray-600 mt-2">
            Zövqünə uyğun və unikal ətirini özün seç.
          </p>
        </div>
        <Link to={'/'} className="flex border px-4 py-3 rounded-md transition duration-200 hover:bg-black hover:text-white">
           <ArrowLeft />
        </Link>
      </div>
    </div>
  );
};

export default Header;
