import React from "react";
import bg from "/images/homepage/image-2.png";
import arrow from "/images/homepage/Arrow.jpg";
import divider from "/images/homepage/Divider.png";
import solution1 from "/images/homepage/Icon 1.png";
import solution2 from "/images/homepage/Icon 2.png";
import solution3 from "/images/homepage/Icon 3.png";
import logo1 from "/images/homepage/Logo 1.jpg";
import logo2 from "/images/homepage/Logo 2.jpg";
import logo3 from "/images/homepage/Logo 3.jpg";
import logo4 from "/images/homepage/Logo 4.jpg";
import logo5 from "/images/homepage/Logo 5.jpg";
import more1 from "/images/homepage/More1.jpg";
import more2 from "/images/homepage/More2.jpg";
import more3 from "/images/homepage/More3.jpg";
import feat1 from "/images/homepage/feat1.jpg";
import feat2 from "/images/homepage/feat2.jpg";
import feat3 from "/images/homepage/feat3.jpg";
import leader1 from "/images/homepage/exper1.png";
import leader2 from "/images/homepage/exp2.png";
import leader3 from "/images/homepage/epx3.png";

function Home() {
  return (
    <div>
      <header className="flex flex-col justify-center items-center p-10">
        <div className="flex flex-col justify-center items-center gap-5 bg-gradient-to-b from-white via-teal-100 border-teal-100">
          <h1 className="font-bold text-[rgba(29,33,48,1)] md:text-[40px] text-[25px] leading-10 text-center md:w-[530px]  sm:w[385px]">
            The Best Software to Grow your Sales and Services
          </h1>
          <p className="text-sm pr-10  md:pl-40 text-start md:text-center pl-5">
            Welcome to Quintus, we are ready to give you high-quality fashion,
            eco-friendly home goods, innovative tech gadgets, etc. At Quintus,
            we are passionate about providing our customers with exceptional
            products, affordable prices, sustainable options, or a seamless
            shopping experience. Quintus was founded in 2021 by Joanes Quintus
            with a simple goal to create a platform for unique, handmade goods
            or provide innovative solutions for everyday needs. What started as
            a small idea has grown into a thriving online store, thanks to the
            support of our amazing customers.
          </p>
          <h1 className="font-bold text-[rgba(29,33,48,1)] pl-10 text-[25px] leading-10 text-center ">
            Our mission
          </h1>
          <p className="text-sm pr-10 md:pl-48 pl-10 text-start md:text-center">
            Our mission is to make premium products accessible to everyone,
            empower sustainable living, or revolutionize the way people shop
            online. We believe in core values, e.g., quality, customer
            satisfaction, innovation, or community and strive to reflect these
            values in everything we do.
          </p>
          <div className="text-sm pr-5 md:pr-10 md:pl-48 pl-5 flex flex-col justify-center items-start">
            <h1 className="font-bold p-10 text-[rgba(29,33,48,1)] text-[25px] md:pl-60 leading-10 text-center ">
              Why Choose Us?
            </h1>
            <p className="text-sm pr-5 md:pr-10 md:pl-48 pl-5 text-start md:text-center">
              <span className="text-xl font-bold text-[rgba(29,33,48,1)]">
                Quality Assurance:
              </span>
              Every product is carefully selected and tested to ensure it meets
              our standards.
            </p>
            <p className="text-sm pr-5 md:pl-48 pl-5 text-start md:text-center">
              <span className="text-xl font-bold text-[rgba(29,33,48,1)]">
                Affordable Prices:
              </span>
              We believe that great products shouldn’t come with a hefty price
              tag.
            </p>
            <p className="text-sm pr-5 md:pl-48 pl-5 text-start md:text-center">
              <span className="text-xl font-bold text-[rgba(29,33,48,1)]">
                Sustainability:
              </span>
              eco-friendly materials, carbon-neutral shipping, etc.
            </p>
            <p className="text-sm pr-5 md:pl-48 pl-5 text-start md:text-center">
              <span className="text-xl font-bold text-[rgba(29,33,48,1)]">
                Exceptional Customer Service:
              </span>
              Our team is always ready to assist you with any questions or
              concerns.
            </p>
          </div>

          <form
            action=""
            className="bg-[rgba(255,255,255,1)] flex justify-between items-center flex-row h-12 w-[390px] pl-3 pr-1 rounded-lg mb-7"
          >
            <input
              className="text-[rgba(29,33,48,1)] text-sm w-[265px] h-8 pl-2"
              type="text"
              id="inptForm"
              placeholder="Enter your Email"
            />
            <button className="bg-[rgba(29,33,48,1)] w-28 h-8 rounded-md text-center text-[rgba(255,255,255,1)]">
              Get Free trial
            </button>
          </form>
        </div>
        <div className="flex justify-center items-center mt-7">
          <img
            className="md:w-[890px] w-[380px] h-[450px] md:h-[646px] border-[rgba(224,228,252,1)] border-[2px] rounded-2xl"
            src={bg}
            alt="dashboard overview"
          />
        </div>
      </header>
      <main>
        <div className="flex flex-col justify-center items-center gap-2">
          <div className="flex flex-col justify-center items-center gap-3 mb-6">
            <h1 className="text-gradient-[from-#373FFF-to-#3ACAF8]">
              High-quality
            </h1>
            <h1 className="font-bold text-[rgba(29,33,48,1)] text-[30px] md:text-[40px] leading-10 text-center w-[380px] md:w-[530px]">
              We have the Best Solution for your Business
            </h1>
          </div>
          <div className="flex p-5 flex-col md:flex-row justify-center items-center bg-[rgba(224,228,252,1)] md:p-10 rounded-xl">
            <div className="flex flex-col gap-3">
              <img
                className="w-10"
                src={solution1}
                alt="User first confirmation"
              />

              <h1 className="font-medium text-[rgba(29,33,48,1)] text-[25px] leading-7 text-left w-[310px]">
                High security to protect from piracy
              </h1>
              <p className="font-normal text-[rgba(29,33,48,1)] text-[12px] leading-4 text-left w-[285px]">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <img
                className="w-10"
                src={solution2}
                alt="Icon of user confirmation"
              />

              <h1 className="font-medium text-[rgba(29,33,48,1)] text-[25px] leading-7 text-left w-[310px]">
                Premium quality performance
              </h1>
              <p className="font-normal text-[rgba(29,33,48,1)] text-[12px] leading-4 text-left w-[285px]">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <img className="w-10" src={solution3} alt="Icon of air phone" />

              <h1 className="font-medium text-[rgba(29,33,48,1)] text-[25px] leading-7 text-left w-[270px]">
                Full time customer support - 24/7
              </h1>
              <p className="font-normal text-[rgba(29,33,48,1)] text-[12px] leading-4 text-left w-[285px]">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center mt-14 mb-14">
          <div className="flex flex-col justify-center pl-10 md:pl-1 items-start gap-3 w-[380px] md:w-[500px]">
            <h3 className="text-left text-[16px] text-blue-950">
              Why should you work with us?
            </h3>
            <h1 className="font-medium text-[rgba(29,33,48,1)] text-[25px] leading-7 text-left w-[280px] md:w-[310px]">
              To upscale your business to the next level
            </h1>
            <p className="font-normal text-[rgba(29,33,48,1)] text-[12px] leading-4 text-left w-[280px] md:w-[415px]">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua invidunt ut labore.
            </p>
          </div>
          <div className="flex flex-col  justify-center items-center gap-4">
            <div className="flex flex-row justify-center items-center gap-2">
              <div className="w-6 bg-[rgba(255,172,172,1)] rounded-full justify-center flex items-center h-6">
                <img className="w-6 h-6" src={arrow} alt="Arrow logo" />
              </div>
              <p className="font-medium text-[rgba(29,33,48,1)] text-[14px] leading-5 text-left w-[280px] md:w-[415px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod.
              </p>
            </div>

            <div className="flex flex-row justify-center items-center gap-2">
              <div className="w-6 bg-[rgba(255,172,172,1)] rounded-full justify-center flex items-center h-6">
                <img className="w-6 h-6" src={arrow} alt="Arrow logo" />
              </div>
              <p className="font-medium text-[rgba(29,33,48,1)] text-[14px] leading-5 text-left w-[280px] md:w-[415px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod.
              </p>
            </div>

            <div className="flex flex-row justify-center items-center gap-2">
              <div className="w-6 bg-[rgba(255,172,172,1)] rounded-full justify-center flex items-center h-6">
                <img className="w-6 h-6" src={arrow} alt="Arrow logo" />
              </div>
              <p className="font-medium text-[rgba(29,33,48,1)] text-[14px] leading-5 text-left w-[280px] md:w-[415px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center pt-7 pb-7 bg-gradient-to-r from-blue-400 to-blue-200 gap-10">
          <div className="flex flex-col justify-center items-start gap-5">
            <h1 className="font-medium text-[rgba(29,33,48,1)] text-[25px] leading-7 text-left w-[280px] md:w-[310px]">
              More impressions, more conversions
            </h1>
            <p className="font-normal text-[rgba(29,33,48,1)] text-[12px] leading-5 text-left w-[280px] md:w-[415px]">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua invidunt ut labore.
            </p>
            <button className="bg-[rgba(29,33,48,1)] w-28 h-8 rounded-md ml-2 text-center text-[rgba(255,255,255,1)]">
              Get Free trial
            </button>
          </div>
          <div>
            <img
              className="md:w-[545px] h-[300px] w-[370px]"
              src={bg}
              alt="It shows why our company is the best"
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between gap-5 md:gap-1 items-center pt-8 pb-8 ml-10 md:ml-40 md:mr-20">
          <img
            className="w-28 h-8"
            src={logo1}
            alt="One of our company logos"
          />
          <img
            className="w-28 h-8"
            src={logo2}
            alt="One of our company logos"
          />
          <img
            className="w-28 h-8"
            src={logo3}
            alt="One of our company logos"
          />
          <img
            className="w-28 h-8"
            src={logo4}
            alt="One of our company logos"
          />
          <img
            className="w-28 h-8"
            src={logo5}
            alt="One of our company logos"
          />
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center mt-14 mb-14">
          <div className="flex flex-col justify-center items-start gap-3 pl-5 md:pl-1 w-[380px] md:w-[500px]">
            <h3 className="text-left text-[16px] text-blue-950">
              Discover More
            </h3>
            <h1 className="font-medium text-[rgba(29,33,48,1)] text-[25px] leading-7 text-left md:w-[310px]">
              Analyze your sales and marketing leads
            </h1>
            <p className="font-normal text-[rgba(29,33,48,1)] text-xs leading-4 text-left md:w-[415px]">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua invidunt ut labore.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-4">
            <div className="flex flex-row justify-center items-center gap-2">
              <div className="w-10 bg-[rgba(244,245,247,1)] rounded-full justify-center flex items-center h-10">
                <img className="w-4" src={more1} alt="logo represents sales" />
              </div>
              <div className="flex flex-col justify-center items-center">
                <h3 className="font-medium text-[rgba(29,33,48,1)] text-[14px] leading-5 text-left md:w-[415px]">
                  Sales Tracking
                </h3>
                <p className="font-normal text-[rgba(29,33,48,1)] text-xs leading-5 text-left md:w-[415px]">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
                </p>
              </div>
            </div>

            <div className="flex flex-row justify-center items-center gap-2">
              <div className="w-10 bg-[rgba(244,245,247,1)] rounded-full justify-center flex items-center h-10">
                <img
                  className="w-4"
                  src={more2}
                  alt="logo represents projects"
                />
              </div>
              <div className="flex flex-col justify-center items-center">
                <h3 className="font-medium text-[rgba(29,33,48,1)] text-[14px] leading-5 text-left md:w-[415px]">
                  Project Management
                </h3>
                <p className="font-normal text-[rgba(29,33,48,1)] text-xs leading-5 text-left md:w-[415px]">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
                </p>
              </div>
            </div>

            <div className="flex flex-row justify-center items-center gap-2">
              <div className="w-10 bg-[rgba(244,245,247,1)] rounded-full justify-center flex items-center h-10">
                <img
                  className="w-4"
                  src={more3}
                  alt="logo represents activities"
                />
              </div>
              <div className="flex flex-col justify-center items-center">
                <h3 className="font-medium text-[rgba(29,33,48,1)] text-[14px] leading-5 text-left md:w-[415px]">
                  Activity Report
                </h3>
                <p className="font-normal text-[rgba(29,33,48,1)] text-xs leading-5 text-left md:w-[415px]">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center gap-2">
          <div className="flex justify-center items-center">
            <h1 className="font-bold text-[rgba(29,33,48,1)] mb-2 text-[25px] md:text-[40px] text-center">
              Features
            </h1>
          </div>
          <div className="flex flex-col md:flex-row justify-center items-center bg-[rgba(215,152,225,0.15)] p-10 rounded-xl">
            <div className="flex flex-col gap-3 pl-12 md:pl-1">
              <img className="w-8" src={feat1} alt="feature logo" />

              <h1 className="font-medium text-[rgba(29,33,48,1)] text-[25px] leading-7 text-left w-[310px]">
                Advanced 256-bit encryption
              </h1>
              <p className="font-normal text-[rgba(29,33,48,1)] text-xs leading-4 text-left w-[235px]">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor.
              </p>
            </div>
            <img
              className="pr-6 h-36 hidden md:block"
              src={divider}
              alt="Divider logo"
            />
            <div className="flex flex-col gap-3">
              <img className="w-8" src={feat2} alt="feature logo" />
              <h1 className="font-medium text-[rgba(29,33,48,1)] text-[25px] leading-7 text-left w-[255px]">
                Simple collaboration tools
              </h1>
              <p className="font-normal text-[rgba(29,33,48,1)] text-[12px] leading-4 text-left w-[235px]">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor.
              </p>
            </div>
            <img
              className="pr-6 h-36 hidden md:block"
              src={divider}
              alt="Divider logo"
            />
            <div className="flex flex-col gap-3">
              <img className="w-8" src={feat3} alt="feature logo" />
              <h1 className="font-medium text-[rgba(29,33,48,1)] text-[25px] leading-7 text-left w-[270px]">
                Customizable AI features
              </h1>
              <p className="font-normal text-[rgba(29,33,48,1)] text-[12px] leading-4 text-left w-[235px]">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center mt-14 mb-14">
          <h1 className="font-bold text-[rgba(29,33,48,1)] mb-7 text-[25px] md:text-[40px] text-center leading-10 md:w-[630px]">
            The stunning results our customers have experienced
          </h1>
          <div className="flex flex-col md:flex-row justify-center items-center gap-10">
            <div className="flex flex-col justify-center items-center border-[2px] border-[rgba(97,153,237,0.26)] rounded-lg p-8">
              <p className="font-medium text-[rgba(29,33,48,1)] text-xs leading-4 text-center w-[199px]">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua.
              </p>
              <img
                className="w-7 h-6 rounded-full mt-3 mb-3"
                src={leader1}
                alt="user profile"
              />
              <h3 className="font-medium text-[rgba(29,33,48,1)] text-sm text-center">
                Ron Wood
              </h3>
              <p className="font-normal text-[rgba(29,33,48,1)] text-xs text-center">
                CEO
              </p>
            </div>

            <div className="flex flex-col justify-center items-center border-[2px] border-[rgba(97,153,237,0.26)] rounded-lg p-8">
              <p className="font-medium text-[rgba(29,33,48,1)] text-xs leading-4 text-center w-[199px]">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua.
              </p>
              <img
                className="w-7 h-6 rounded-full mt-3 mb-3"
                src={leader2}
                alt="user profile"
              />
              <h3 className="font-medium text-[rgba(29,33,48,1)] text-sm text-center">
                Sam Preston
              </h3>
              <p className="font-normal text-[rgba(29,33,48,1)] text-xs text-center">
                CTO
              </p>
            </div>
            <div className="flex flex-col justify-center items-center border-[2px] border-[rgba(97,153,237,0.26)] rounded-lg p-8">
              <p className="font-medium text-[rgba(29,33,48,1)] text-xs leading-4 text-center w-[199px]">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua.
              </p>
              <img
                className="w-7 h-6 rounded-full mt-3 mb-3"
                src={leader3}
                alt="user profile"
              />
              <h3 className="font-medium text-[rgba(29,33,48,1)] text-sm text-center">
                Ron Wood
              </h3>
              <p className="font-normal text-[rgba(29,33,48,1)] text-xs text-center">
                CEO
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center  gap-5 pb-14 bg-gradient-to-t from-cyan-50 to-yellow-50">
          <h1 className="font-bold text-[rgba(29,33,48,1)] text-[25px] md:text-[40px] text-center leading-10 w-[380px] md:w-[630px]">
            Are you ready to grow your business with us?
          </h1>
          <p className="font-normal text-[rgba(29,33,48,1)] text-xs text-center">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy.
          </p>
          <button className="bg-[rgba(29,33,48,1)] w-28 h-9 rounded-md text-center text-[rgba(255,255,255,1)]">
            Free trial
          </button>
        </div>
      </main>
    </div>
  );
}

export default Home;
