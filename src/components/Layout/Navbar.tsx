import { Link } from "react-router-dom"

const Navbar = () => {
  return (
         <div className="w-full flex items-center justify-center">
        <nav className="flex items-center justify-between px-12 py-6 w-4/5 bg-white/80 backdrop-blur-sm">
        <div className="text-2xl font-bold text-gray-900">
          Odore Perla<span className="text-amber-500">®</span>
        </div>
        

       
          <Link to={'/createperfume'} className="bg-black px-6 py-3 rounded-md text-white">
            Create Perfume 
          </Link>
      </nav>
      </div>

  )
}

export default Navbar
