import { Outlet, NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

import profile from "/images/BJD-favicon.png";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [close, setClose] = useState(true);
  const toggleMenu = () => {
    setOpen(!open); //!false = true
  };
  const closeMenu = () => {
    setOpen(null);
  };
  console.log(open);
  console.log(close);
  const styling = ({ isActive }) =>
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
            <div className="md:ml-auto hidden md:block ">
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
            </div>
            <NavLink
              className="block md:hidden cursor-pointer"
              onClick={toggleMenu}
            >
              <FaBars />
            </NavLink>
          </div>
        </div>
      </div>
      {open ? (
        <div className="md:ml-auto md:hidden block bg-indigo-700 ">
          <div>
            <button className="md:hidden cursor-pointer" onClick={closeMenu}>
              <FaTimes />
            </button>
          </div>
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
        </div>
      ) : null}

      {/* {close ? null : (
        <div className="md:ml-auto md:hidden block bg-indigo-700 ">
          <div>
            <button className="md:hidden cursor-pointer" onClick={closeMenu}>
              <FaTimes />
            </button>
          </div>
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
        </div>
      )} */}
      <Outlet />
    </nav>
  );
}
export default Navbar;
