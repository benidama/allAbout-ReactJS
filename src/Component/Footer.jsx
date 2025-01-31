import React from "react";
import fb from "/images/Facebook.png";
import ig from "/images/Instagram.png";
import x from "/images/Twitter.png";
import linkedIn from "/images/LinkedIn.png";
import footerlogo from "/images/footerlog.png";

function Footer() {
  return (
    <footer className="bg-[rgba(29,33,48,1)] flex flex-col gap-5 p-10 justify-center items-center">
      <div className="flex flex-row justify-between items-start gap-24">
        <div className="flex flex-col justify-between items-start">
          <ul className="flex flex-col justify-center items-start gap-1">
            <li>
              <h1 className="text-[rgba(255,255,255,1)] font-normal text-sm">
                Company
              </h1>
            </li>

            <li>
              <a
                className="text-[rgba(255,255,255,1)] font-light text-xs"
                href="http://"
                target="_blank"
              >
                Why Choose us
              </a>
            </li>
            <li>
              <a
                className="text-[rgba(255,255,255,1)] font-light text-xs"
                href="http://"
                target="_blank"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                className="text-[rgba(255,255,255,1)] font-light text-xs"
                href="http://"
                target="_blank"
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                className="text-[rgba(255,255,255,1)] font-light text-xs"
                href="http://"
                target="_blank"
              >
                Testimonial
              </a>
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
              <a
                className="text-[rgba(255,255,255,1)] font-light text-xs"
                href="http://"
                target="_blank"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                className="text-[rgba(255,255,255,1)] font-light text-xs"
                href="http://"
                target="_blank"
              >
                Terms and Condition
              </a>
            </li>
            <li>
              <a
                className="text-[rgba(255,255,255,1)] font-light text-xs"
                href="http://"
                target="_blank"
              >
                Blog
              </a>
            </li>
            <li>
              <a
                className="text-[rgba(255,255,255,1)] font-light text-xs"
                href="http://"
                target="_blank"
              >
                Contact Us
              </a>
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
              <a
                className="text-[rgba(255,255,255,1)] font-light text-xs"
                href="http://"
                target="_blank"
              >
                Project managment
              </a>
            </li>
            <li>
              <a
                className="text-[rgba(255,255,255,1)] font-light text-xs"
                href="http://"
                target="_blank"
              >
                Time tracker
              </a>
            </li>
            <li>
              <a
                className="text-[rgba(255,255,255,1)] font-light text-xs"
                href="http://"
                target="_blank"
              >
                Time schedule
              </a>
            </li>
            <li>
              <a
                className="text-[rgba(255,255,255,1)] font-normal text-xs"
                href="http://"
                target="_blank"
              >
                Lead generate
              </a>
            </li>
            <li>
              <a
                className="text-[rgba(255,255,255,1)] font-light text-xs"
                href="http://"
                target="_blank"
              >
                Remote Collaboration
              </a>
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
        <hr className="border-[rgba(136,136,136,1)] border-[1px] w-[350px]" />
        <h4 className="text-[rgba(255,255,255,1)] font-light text-xs">
          © Copyright Finsweet 2022
        </h4>
        <img src={fb} alt="Facebook logo" />
        <img src={x} alt="Twitter logo" />
        <img src={ig} alt="Instagram logo" />
        <img src={linkedIn} alt="LinkedIn logo" />
        <hr className="border-[rgba(136,136,136,1)] boInstagram logorder-[1px] w-[350px]" />
      </div>
    </footer>
  );
}

export default Footer;
