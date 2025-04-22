import { NavLink } from "react-router-dom";
import fb from "/images/Facebook.png";
import ig from "/images/Instagram.png";
import x from "/images/Twitter.png";
import linkedIn from "/images/LinkedIn.png";
import footerlogo from "/images/footerlog.png";

function Footer() {
  return (
    <footer className="bg-[rgba(29,33,48,1)] flex flex-col gap-5 p-10 justify-center items-center">
      <div className="flex flex-col md:flex-row justify-between items-start md:gap-24 gap-8">
        <div className="flex flex-col justify-between items-start">
          <ul className="flex flex-col justify-center items-start gap-1">
            <li>
              <h1 className="text-[rgba(255,255,255,1)] font-normal text-sm">
                Company
              </h1>
            </li>

            <li>
              <NavLink
                className="text-[rgba(255,255,255,1)] font-light text-xs"
                to="/about"
              >
                Why Choose us
              </NavLink>
            </li>
            <li>
              <NavLink
                className="text-[rgba(255,255,255,1)] font-light text-xs"
                href="/about"
              >
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink
                className="text-[rgba(255,255,255,1)] font-light text-xs"
                to="/price"
              >
                Pricing
              </NavLink>
            </li>
            <li>
              <NavLink
                className="text-[rgba(255,255,255,1)] font-light text-xs"
                to="/blog"
              >
                Testimonial
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="flex flex-col justify-center items-start">
          <ul className="flex flex-col justify-center items-start gap-1">
            <li>
              <h1 className="text-[rgba(255,255,255,1)] font-normal text-sm">
                Resources
              </h1>
            </li>
            <li>
              <NavLink
                className="text-[rgba(255,255,255,1)] font-light text-xs"
                to="/about"
              >
                Privacy Policy
              </NavLink>
            </li>
            <li>
              <NavLink
                className="text-[rgba(255,255,255,1)] font-light text-xs"
                to="/about"
              >
                Terms and Condition
              </NavLink>
            </li>
            <li>
              <NavLink
                className="text-[rgba(255,255,255,1)] font-light text-xs"
                to="/blog"
              >
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink
                className="text-[rgba(255,255,255,1)] font-light text-xs"
                to="/contact"
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="flex flex-col justify-center items-start">
          <ul className="flex flex-col justify-center items-start gap-1">
            <li>
              <h1 className="text-[rgba(255,255,255,1)] font-normal text-sm">
                Product
              </h1>
            </li>
            <li>
              <NavLink
                className="text-[rgba(255,255,255,1)] font-light text-xs"
                to="/"
              >
                Project management
              </NavLink>
            </li>
            <li>
              <NavLink
                className="text-[rgba(255,255,255,1)] font-light text-xs"
                to="/post"
              >
                Time tracker
              </NavLink>
            </li>
            <li>
              <NavLink
                className="text-[rgba(255,255,255,1)] font-light text-xs"
                to="/post"
              >
                Time schedule
              </NavLink>
            </li>
            <li>
              <NavLink
                className="text-[rgba(255,255,255,1)] font-normal text-xs"
                to="/blog"
              >
                Lead generate
              </NavLink>
            </li>
            <li>
              <NavLink
                className="text-[rgba(255,255,255,1)] font-light text-xs"
                to="/blog"
              >
                Remote Collaboration
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="flex flex-col justify-center items-start gap-5">
          <img src={footerlogo} alt="company logo" />
          <h3 className="text-[rgba(255,255,255,1)] font-normal text-sm">
            Subscribe to our Newsletter
          </h3>
          <form
            action=""
            className="bg-[rgba(43,46,60,1)] flex justify-between items-center flex-row h-10 w-[270px] pl-3 pr-1 rounded-lg mb-7"
          >
            <input
              className="text-[rgba(255,255,255,1)] bg-[rgba(43,46,60,1)] font-light text-sm"
              type="text"
              id="inptForm"
              placeholder="Enter your Email"
            />

            <button className="bg-[rgba(255,255,255,1)] w-32 p-3 h-10 rounded-md text-center text-[rgba(29,33,48,1)] font-medium text-sm">
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className="flex flex-row justify-center items-center gap-3">
        <hr className="border-[rgba(136,136,136,1)] border-[1px] w-[55px] md:w-[350px]" />
        <h4 className="text-[rgba(255,255,255,1)] font-light text-xs">
          © Copyright Finsweet 2022
        </h4>
        <NavLink to="https://www.facebook.com/share/1HB7rqeN6Y/">
          <img src={fb} alt="Facebook logo" />
        </NavLink>
        <NavLink
          to="https://x.com/BenimanaJeanDa1?t=Yl_XBHHPZAWc8EXt7zr7Ag&s=09"
          target="_blank"
        >
          <img src={x} alt="Twitter logo" />
        </NavLink>
        <NavLink
          to="https://www.instagram.com/beni_dama?igsh=Y2ZwZTdtZGM1MTYw"
          target="_blank"
        >
          <img src={ig} alt="Instagram logo" />
        </NavLink>
        <NavLink
          to="https://www.linkedin.com/in/jean-damascene-benimana-9001b7209?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          target="_blank"
        >
          <img src={linkedIn} alt="LinkedIn logo" />
        </NavLink>
        <hr className="border-[rgba(136,136,136,1)] boInstagram border-[1px] w-[55px] md:w-[350px]" />
      </div>
    </footer>
  );
}

export default Footer;
