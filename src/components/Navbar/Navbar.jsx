import Logo from "../../assets/logo.png";
import { FaShoppingCart } from "react-icons/fa";
import DarkMode from "./DarkMode.jsx"; 

const Navbar = () => {
  return (
    <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200">
      <div className="container mx-auto flex justify-between items-center py-4">
        
        {/* Left Side: Logo and Navigation Links */}
        <div className="flex items-center gap-8">
          <a href="#" className="flex items-center gap-2 text-2xl sm:text-3xl font-bold">
            <img src={Logo} alt="Food Zone" className="w-10" />
            Food Zone
          </a>
          <div className="flex items-center gap-4">

          </div>
          <div>
            <DarkMode /> {/* Correctly used */}
          </div>
          <ul className="hidden sm:flex gap-4">
            <li>
              <a href="#" className="inline-block py-4 px-4 hover:text-primary">Home</a>
            </li>
            <li>
              <a href="#" className="inline-block py-4 px-4 hover:text-primary">About</a>
            </li>
            <li>
              <a href="#" className="inline-block py-4 px-4 hover:text-primary">Contact</a>
            </li>
          </ul>
        </div>

        {/* Right Side: Order Button and Shopping Cart */}
        <div>
          <button
            className="bg-gradient-to-r from-primary to-secondary text-white px-4 py-1 rounded-full hover:scale-105 duration-300 flex items-center gap-2"
          >
            Order
            <FaShoppingCart className="text-xl text-white drop-shadow-sm cursor-pointer" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
