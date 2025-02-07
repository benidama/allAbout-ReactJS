import React from "react";
import { NavLink } from "react-router-dom";
import { FaTimes } from "react-icons/fa";

function Nav2() {
  const styling = ({ isActive }) =>
    isActive
      ? "bg-indigo-700 text-white hover:bg-pink-600 underline hover:text-white text-lg rounded-md px-3 py-2"
      : "text-white hover:bg-pink-600 hover:text-white hover:underline text-lg rounded-md px-3 py-2";
  return (
    <div className="md:ml-auto">
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
      <button className="hidden cursor-pointer">
        <FaTimes />
      </button>
    </div>
  );
}

export default Nav2;
