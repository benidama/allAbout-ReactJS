import React from "react";

function Product() {
  return (
    <div>
      <header className="flex flex-col justify-center">
        <div className="flex flex-col justify-center items-center gap-4 mt-12 mb-7">
          <h1 className="font-bold text-[rgba(29,33,48,1)] text-[35px] leading-10 text-center">
            We are proud of our products
          </h1>
          <p className="font-normal text-[rgba(29,33,48,1)] text-xs leading-5 text-center w-[490px]">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua.
          </p>
        </div>
        <div className="flex flex-row justify-center items-center gap-5">
          <img
            className="w-[350px] h-[250px] rounded-3xl"
            src="/images/about/cumputer.png"
            alt="our computers"
          />
          <img
            className="w-[350px] h-[250px] rounded-3xl"
            src="/images/about/officer.png"
            alt="head officer"
          />
          <img
            className="w-[350px] h-[250px] rounded-3xl"
            src="/images/about/room.png"
            alt="computer room"
          />
        </div>
      </header>
      <main className="relative">
        <div className="flex flex-col justify-center items-center gap-5 mt-12 mb-12">
          <h3 className="text-sm text-blue-200">About Us</h3>
          <h1 className="font-bold text-[rgba(29,33,48,1)] text-[35px] leading-10 text-center">
            We’re a team of data analysts
          </h1>
          <p className="font-normal text-[rgba(29,33,48,1)] text-xs leading-5 text-center w-[510px]">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum.
          </p>
        </div>
        <div className="flex flex-row justify-center items-center gap-9 pb-10 pt-12 bg-[rgba(240,242,254,1)]">
          <div className="flex flex-col justify-center items-start gap-3">
            <h3 className="text-sm text-blue-200">Our Goals</h3>
            <h1 className="font-bold text-[rgba(29,33,48,1)] text-[35px] leading-8 w-[430px] text-left">
              To upscale your business to the next level
            </h1>
            <p className="font-normal text-[rgba(29,33,48,1)] text-xs leading-5 w-[510px]">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum.
            </p>
          </div>
          <div className="flex flex-col justify-center items-start gap-3">
            <h3 className="text-sm text-blue-200">Our Vision</h3>
            <h1 className="font-bold text-[rgba(29,33,48,1)] text-[35px] leading-8 text-left w-[470px]">
              To provide solutions for growing companies
            </h1>
            <p className="font-normal text-[rgba(29,33,48,1)] text-xs leading-5 w-[510px]">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum.
            </p>
          </div>
        </div>

        <div div className="flex flex-col justify-center items-center w-screen">
          <div>
            <h1 className="font-bold text-[rgba(29,33,48,1)] text-[40px] mt-28 text-center">
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
              className="flex flex-row justify-center items-center gap-2"
            >
              <div className="flex flex-col gap-3">
                <img
                  className="w-10"
                  src="/images/about/Icon@1.png"
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
                  src="/images/about/Icon13.png"
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
                  src="/images/about/Icon14.png"
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
            <div className="flex flex-row justify-center items-center">
              <div className="flex flex-col gap-3">
                <img
                  className="w-10"
                  src="/images/about/Icon15.png"
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
                  src="/images/about/Icon16.png"
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
                  src="/images/about/Icon17.png"
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
        <div className="flex flex-row justify-center items-center gap-5 relative mt-14 mb-14">
          <div className="flex flex-col gap-3 justify-center items-start relative bottom-32">
            <h1 className="font-bold text-[rgba(29,33,48,1)] text-[35px] leading-4 text-left">
              Our talented Team
            </h1>
            <p className="font-normal text-[rgba(29,33,48,1)] text-xs leading-4 text-left w-[310px]">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore.
            </p>
          </div>

          <div className="flex flex-col justify-center items-center">
            <div className="flex flex-row justify-center items-center gap-3">
              <div className="flex flex-col w-36 gap-3">
                <img
                  className="w-36 h-32 rounded-xl relative top-5 bg-cover bg-center"
                  src="/images/about/1.jpg"
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
              <div className="flex flex-col w-36 gap-3">
                <img
                  className="w-36 h-32 rounded-xl relative top-5 bg-cover bg-center"
                  src="/images/about/2.png"
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
              <div className="flex flex-col w-36 gap-3">
                <img
                  className="w-36 h-32 rounded-xl relative top-5 bg-cover bg-center"
                  src="/images/about/3.png"
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
            <div className="flex flex-row justify-center items-center gap-3">
              <div className="flex flex-col w-36 gap-3">
                <img
                  className="w-36 h-32 rounded-xl relative top-5 bg-cover bg-center"
                  src="/images/about/4.png"
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
              <div className="flex flex-col w-36 gap-3">
                <img
                  className="w-36 h-32 rounded-xl relative top-5 bg-cover bg-center"
                  src="/images/about/5.png"
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
              <div className="flex flex-col w-36 gap-3">
                <img
                  className="w-36 h-32 rounded-xl relative top-5 bg-cover bg-center"
                  src="/images/about/6.png"
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
        <div className="flex flex-col justify-center items-center gap-5 w-screen pt-2 pb-14 bg-gradient-to-t from-cyan-50 to-yellow-50">
          <h1 className="font-bold text-[rgba(29,33,48,1)] text-[40px] text-center leading-10 w-[630px]">
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
