import { Outlet, NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

import profile from "/images/BJD-favicon.png";

function Navbar() {
  const showNavbar = () => {
    {
      styling2;
    }
  };

  const styling = ({ isActive }) =>
    isActive
      ? "bg-indigo-700 text-white hidden md:block hover:bg-pink-600 underline hover:text-white text-lg rounded-md px-3 py-2"
      : "text-white hover:bg-pink-600 hidden md:block hover:text-white hover:underline text-lg rounded-md px-3 py-2";
  const styling2 = ({ isActive }) =>
    isActive
      ? "bg-indigo-700 text-white  hover:bg-pink-600 underline hover:text-white text-lg rounded-md px-3 py-2"
      : "text-white hover:bg-pink-600  hover:text-white hover:underline text-lg rounded-md px-3 py-2";
  return (
    <nav className="bg-gray-800 text-white p-4 border-b border-indigo-500">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
            <NavLink className="flex flex-shrink-0 items-center mr-4" to="/">
              <img className="h-10 w-auto" src={profile} alt="BJD profile" />
              <span className=" text-white text-2xl font-bold ml-2">
                Company logo
              </span>
            </NavLink>
            <div className="md:ml-auto" ref={navRef}>
              <div className="flex space-x-2 flex-col md:flex-row h-80 md:h-10 justify-center items-center">
                <NavLink to="/" className={styling}>
                  Home
                </NavLink>
                <NavLink to="/about" className={styling}>
                  About
                </NavLink>

                <NavLink to="/product" className={styling}>
                  Product
                </NavLink>
                <NavLink to="/price" className={styling}>
                  Pricing
                </NavLink>
                <NavLink to="/blog" className={styling}>
                  Blog
                </NavLink>
                <NavLink to="/contact" className={styling}>
                  Contact
                </NavLink>
                <NavLink to="/post" className={styling}>
                  PostBlog
                </NavLink>
              </div>
              <button className="hidden cursor-pointer" onClick={showNavbar}>
                <FaTimes />
              </button>
            </div>
            <button
              className="block md:hidden cursor-pointer"
              onClick={showNavbar}
            >
              <FaBars />
            </button>
          </div>
        </div>
      </div>
      <Outlet />
    </nav>
  );
}
export default Navbar;
