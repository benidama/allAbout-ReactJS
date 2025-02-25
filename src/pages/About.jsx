import React from "react";
import team1 from "/images/about/1.jpg";
import team2 from "/images/about/2.png";
import team3 from "/images/about/3.png";
import team4 from "/images/about/4.png";
import team5 from "/images/about/5.png";
import team6 from "/images/about/6.png";
import icon1 from "/images/about/Icon@1.png";
import icon2 from "/images/about/Icon13.png";
import icon3 from "/images/about/Icon14.png";
import icon4 from "/images/about/Icon15.png";
import icon5 from "/images/about/Icon16.png";
import icon6 from "/images/about/Icon17.png";
import post1 from "/images/about/cumputer.png";
import post2 from "/images/about/officer.png";
import post3 from "/images/about/room.png";

function Product() {
  return (
    <div>
      <header className="flex flex-col justify-center">
        <div className="flex flex-col justify-center items-center gap-4 mt-12 mb-7 pl-5">
          <h1 className="font-bold text-[rgba(29,33,48,1)] text-[25px] md:text-[35px] leading-10 text-center">
            We are proud of our products
          </h1>
          <p className="font-normal text-[rgba(29,33,48,1)] text-xs leading-5 text-center md:w-[490px] p-2">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua to go ahead in all sides.
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-5">
          <img
            className="w-[350px] h-[250px] rounded-3xl"
            src={post3}
            alt="our computers"
          />
          <img
            className="w-[350px] h-[250px] rounded-3xl"
            src={post2}
            alt="computer room"
          />
          <img
            className="w-[350px] h-[250px] rounded-3xl"
            src={post1}
            alt="head officer"
          />
        </div>
      </header>
      <main className="relative">
        <div className="flex flex-col justify-center items-center gap-5 mt-12 mb-12">
          <h3 className="text-sm text-blue-200">About Us</h3>
          <h1 className="font-bold text-[rgba(29,33,48,1)] text-[25px] md:text-[35px] leading-10 text-center">
            We’re a team of data analysts
          </h1>
          <p className="font-normal text-[rgba(29,33,48,1)] text-xs leading-5 text-center w-[380px] pl-5 md:pl-1 md:w-[510px]">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum.
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center pl-5  gap-9 pb-10 pt-12 md:pl-1 w-[390px] bg-[rgba(240,242,254,1)]">
          <div className="flex flex-col justify-center items-start  gap-3">
            <h3 className="text-sm text-blue-200">Our Goals</h3>
            <h1 className="font-bold text-[rgba(29,33,48,1)] text-[25px] md:text-[35px] leading-8 md:w-[430px] text-left">
              To upscale your business to the next level
            </h1>
            <p className="font-normal text-[rgba(29,33,48,1)] text-xs leading-5 md:w-[510px]">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum.
            </p>
          </div>
          <div className="flex flex-col justify-center items-start gap-3">
            <h3 className="text-sm text-blue-200">Our Vision</h3>
            <h1 className="font-bold text-[rgba(29,33,48,1)] text-[25px] md:text-[35px] leading-8 text-left md:w-[470px]">
              To provide solutions for growing companies
            </h1>
            <p className="font-normal text-[rgba(29,33,48,1)] text-xs leading-5 md:w-[510px]">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum.
            </p>
          </div>
        </div>

        <div div className="flex flex-col justify-center items-center w-screen">
          <div>
            <h1 className="font-bold text-[rgba(29,33,48,1)] text-[40px] mt-8 text-center">
              Our corporate values
            </h1>
            <p className="font-normal text-[rgba(29,33,48,1)] text-xs mb-5 text-center">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center w-screen gap-11 pt-14 pb-12 bg-[rgba(249,240,251,1)]">
            <div
              div
              className="flex flex-col md:flex-row justify-center items-center gap-2"
            >
              <div className="flex flex-col gap-3">
                <img
                  className="w-10"
                  src={icon1}
                  alt="User first confirmation"
                />

                <h1 className="font-medium text-[rgba(29,33,48,1)] text-[18px] leading-5 text-left w-[310px]">
                  Best in Class
                </h1>
                <p className="font-normal text-[rgba(29,33,48,1)] text-[12px] leading-4 text-left w-[285px]">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy.
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <img
                  className="w-10"
                  src={icon2}
                  alt="User first confirmation"
                />

                <h1 className="font-medium text-[rgba(29,33,48,1)] text-[18px] leading-5 text-left w-[310px]">
                  Authenticity
                </h1>
                <p className="font-normal text-[rgba(29,33,48,1)] text-[12px] leading-4 text-left w-[285px]">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy.
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <img
                  className="w-10"
                  src={icon3}
                  alt="User first confirmation"
                />

                <h1 className="font-medium text-[rgba(29,33,48,1)] text-[18px] leading-5 text-left w-[310px]">
                  Email Support
                </h1>
                <p className="font-normal text-[rgba(29,33,48,1)] text-[12px] leading-4 text-left w-[285px]">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row justify-center items-center">
              <div className="flex flex-col gap-3">
                <img
                  className="w-10"
                  src={icon4}
                  alt="User first confirmation"
                />

                <h1 className="font-medium text-[rgba(29,33,48,1)] text-[18px] leading-5 text-left w-[310px]">
                  Discounts Available
                </h1>
                <p className="font-normal text-[rgba(29,33,48,1)] text-[12px] leading-4 text-left w-[285px]">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy.
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <img
                  className="w-10"
                  src={icon5}
                  alt="User first confirmation"
                />

                <h1 className="font-medium text-[rgba(29,33,48,1)] text-[18px] leading-5 text-left w-[310px]">
                  Powerful Marketing
                </h1>
                <p className="font-normal text-[rgba(29,33,48,1)] text-[12px] leading-4 text-left w-[285px]">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy.
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <img
                  className="w-10"
                  src={icon6}
                  alt="User first confirmation"
                />

                <h1 className="font-medium text-[rgba(29,33,48,1)] text-[18px] leading-5 text-left w-[310px]">
                  Inventory management
                </h1>
                <p className="font-normal text-[rgba(29,33,48,1)] text-[12px] leading-4 text-left w-[285px]">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center relative mt-5 mb-5">
          <div className="flex flex-col gap-3 justify-center items-start relative ">
            <h1 className="font-bold text-[rgba(29,33,48,1)] text-[35px] leading-4 text-left">
              Our talented Team
            </h1>
            <p className="font-normal text-[rgba(29,33,48,1)] text-xs leading-4 text-left w-[310px]">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore.
            </p>
          </div>

          <div className="flex flex-col justify-center items-center">
            <div className="flex flex-col md:flex-row justify-center items-center gap-3">
              <div className="flex flex-col  gap-3">
                <img
                  className="w-[250px] h-[200px] rounded-2xl relative top-5 bg-cover bg-center"
                  src={team1}
                  alt="User first confirmation"
                />

                <div className="bg-[rgba(224,228,252,1)] p-5 pb-3 pr-1 rounded-b-xl">
                  <h1 className="font-medium text-[rgba(29,33,48,1)] text-[15px] leading-5 text-left">
                    Blake Matthews
                  </h1>
                  <p className="font-normal text-[rgba(29,33,48,1)] text-[12px] leading-4 text-left">
                    CEO & Co-Founder
                  </p>
                </div>
              </div>
              <div className="flex flex-col  gap-3">
                <img
                  className="w-[250px] h-[200px] rounded-2xl relative top-5 bg-cover bg-center"
                  src={team2}
                  alt="User first confirmation"
                />

                <div className="bg-[rgba(224,228,252,1)] pr-1 p-5 pb-3 rounded-b-xl">
                  <h1 className="font-medium text-[rgba(29,33,48,1)] text-[15px] leading-5 text-left">
                    Jack Newman
                  </h1>
                  <p className="font-normal text-[rgba(29,33,48,1)] text-[12px] leading-4 text-left">
                    CTO
                  </p>
                </div>
              </div>
              <div className="flex flex-col  gap-3">
                <img
                  className="w-[250px] h-[200px] rounded-2xl relative top-5 bg-cover bg-center"
                  src={team3}
                  alt="User first confirmation"
                />

                <div className="bg-[rgba(224,228,252,1)] p-5 pb-3 pr-1 rounded-b-xl">
                  <h1 className="font-medium text-[rgba(29,33,48,1)] text-[15px] leading-5 text-left">
                    Sarinia Martins
                  </h1>
                  <p className="font-normal text-[rgba(29,33,48,1)] text-[12px] leading-4 text-left">
                    Marketing
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row justify-center items-center gap-3">
              <div className="flex flex-col  gap-3">
                <img
                  className="w-[250px] h-[200px] rounded-2xl relative top-5 bg-cover bg-center"
                  src={team4}
                  alt="User first confirmation"
                />

                <div className="bg-[rgba(224,228,252,1)] pr-1 p-5 pb-3 rounded-b-xl">
                  <h1 className="font-medium text-[rgba(29,33,48,1)] text-[15px] leading-5 text-left">
                    Spencer Wright
                  </h1>
                  <p className="font-normal text-[rgba(29,33,48,1)] text-[12px] leading-4 text-left">
                    Project management
                  </p>
                </div>
              </div>
              <div className="flex flex-col  gap-3">
                <img
                  className="w-[250px] h-[200px] rounded-2xl relative top-5 bg-cover bg-center"
                  src={team5}
                  alt="User first confirmation"
                />

                <div className="bg-[rgba(224,228,252,1)] pr-1 p-5 pb-3 rounded-b-xl">
                  <h1 className="font-medium text-[rgba(29,33,48,1)] text-[15px] leading-5 text-left">
                    Caroline Ming
                  </h1>
                  <p className="font-normal text-[rgba(29,33,48,1)] text-[12px] leading-4 text-left">
                    Sales
                  </p>
                </div>
              </div>
              <div className="flex flex-col  gap-3">
                <img
                  className="w-[250px] h-[200px] rounded-2xl relative top-5 bg-cover bg-center"
                  src={team6}
                  alt="User first confirmation"
                />

                <div className="bg-[rgba(224,228,252,1)] p-5 pb-3 rounded-b-xl">
                  <h1 className="font-medium text-[rgba(29,33,48,1)] text-[15px] leading-5 text-left">
                    Anna Mills
                  </h1>
                  <p className="font-normal text-[rgba(29,33,48,1)] text-[12px] leading-4 text-left">
                    Design lead
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center pl-2 gap-5 w-screen pt-2 pb-14 bg-gradient-to-t from-cyan-50 to-yellow-50">
          <h1 className="font-bold text-[rgba(29,33,48,1)] text-[25px] md:text-[40px] text-center leading-10 md:w-[630px]">
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

export default Product;
