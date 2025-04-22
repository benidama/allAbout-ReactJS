import { Outlet, NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import profile from "/images/BJD-favicon.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  const linkStyle = ({ isActive }) =>
    isActive
      ? "bg-indigo-700 text-white underline hover:bg-pink-600 text-lg rounded-md px-3 py-2"
      : "text-white hover:bg-pink-600 hover:text-white text-lg rounded-md px-3 py-2";

  return (
    <nav className="bg-gray-800 text-white border-b border-indigo-500 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-2">
            <img src={profile} alt="Logo" className="h-10 w-auto" />
            <span className="text-2xl font-bold">Company Logo</span>
          </NavLink>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-4">
            <NavLink to="/" className={linkStyle}>
              Home
            </NavLink>
            <NavLink to="/about" className={linkStyle}>
              About
            </NavLink>
            <NavLink to="/product" className={linkStyle}>
              Product
            </NavLink>
            <NavLink to="/price" className={linkStyle}>
              Pricing
            </NavLink>
            <NavLink to="/blog" className={linkStyle}>
              Blog
            </NavLink>
            <NavLink to="/contact" className={linkStyle}>
              Contact
            </NavLink>
            <NavLink to="/post" className={linkStyle}>
              PostBlog
            </NavLink>
          </div>

          {/* Hamburger Icon */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-2xl">
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <div className="md:hidden bg-indigo-700 px-4 pb-4 flex flex-col gap-3 items-start">
          <NavLink to="/" className={linkStyle} onClick={closeMenu}>
            Home
          </NavLink>
          <NavLink to="/about" className={linkStyle} onClick={closeMenu}>
            About
          </NavLink>
          <NavLink to="/product" className={linkStyle} onClick={closeMenu}>
            Product
          </NavLink>
          <NavLink to="/price" className={linkStyle} onClick={closeMenu}>
            Pricing
          </NavLink>
          <NavLink to="/blog" className={linkStyle} onClick={closeMenu}>
            Blog
          </NavLink>
          <NavLink to="/contact" className={linkStyle} onClick={closeMenu}>
            Contact
          </NavLink>
          <NavLink to="/post" className={linkStyle} onClick={closeMenu}>
            PostBlog
          </NavLink>
        </div>
      )}

      <Outlet />
    </nav>
  );
}

export default Navbar;
