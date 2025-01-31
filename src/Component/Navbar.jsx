import React from "react";
import logo from "/images/BJD-favicon.png";

function Navbar() {
  return (
    <div>
      <nav className="flex flex-row justify-between items-center ml-20 mr-20 pt-3 pb-3">
        <div className="flex flex-row gap-3">
          <img className="w-[65px]" src={logo} alt="Company logo in letters" />
          <h3 className=" md:text-2xl md:block pt-3 sm:hidden">Company logo</h3>
        </div>

        <ul className="flex flex-row justify-center items-center gap-4">
          <li>
            <a
              className="text-[rgba(29,33,48,1)]"
              href="http://"
              target="_blank"
            >
              Home
            </a>
          </li>
          <li>
            <a
              className="text-[rgba(29,33,48,1)]"
              href="http://"
              target="_blank"
            >
              Product
            </a>
          </li>
          <li>
            <a
              className="text-[rgba(29,33,48,1)]"
              href="http://"
              target="_blank"
            >
              Pricing
            </a>
          </li>
          <li>
            <a
              className="text-[rgba(29,33,48,1)]"
              href="http://"
              target="_blank"
            >
              About Us
            </a>
          </li>
          <li>
            <a
              className="text-[rgba(29,33,48,1)]"
              href="http://"
              target="_blank"
            >
              Blog
            </a>
          </li>
          <li>
            <a
              className="text-[rgba(29,33,48,1)]"
              href="http://"
              target="_blank"
            >
              Contact
            </a>
          </li>
          <li>
            <button className="bg-[rgba(29,33,48,1)] w-28 h-9 rounded-md text-center text-[rgba(255,255,255,1)]">
              Free trial
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
