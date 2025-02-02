import React from "react";
import divider from "/images/homepage/Divider.png";
import bg1 from "/images/product/75c046f145a6be2885be65e4235d2723.png";
import logo1 from "/images/homepage/Logo 1.jpg";
import logo2 from "/images/homepage/Logo 2.jpg";
import logo3 from "/images/homepage/Logo 3.jpg";
import logo4 from "/images/homepage/Logo 4.jpg";
import logo5 from "/images/homepage/Logo 5.jpg";
import icon1 from "/images/product/Icon.png";
import icon2 from "/images/product/Icon1.png";
import icon3 from "/images/product/Icon2.png";
import icon4 from "/images/product/Icon3.png";
import icon5 from "/images/product/Icon4.png";
import icon6 from "/images/product/Icon5.png";
import data1 from "/images/product/img2.png";
import data2 from "/images/product/img3.png";
import feat1 from "/images/homepage/feat1.jpg";
import feat2 from "/images/homepage/feat2.jpg";
import feat3 from "/images/homepage/feat3.jpg";

function Product() {
  return (
    <div>
      <header className="flex flex-col justify-center items-center pt-11 gap-11 bg-gradient-to-r from-yellow-50 to-cyan-100">
        <div className="flex flex-row justify-center items-center">
          <div className="flex flex-col justify-center items-start gap-5 w-[480px] text-left">
            <h1 className="font-bold text-[rgba(29,33,48,1)] text-[35px] leading-10 text-left w-[395px]">
              Grow your Sales and Services
            </h1>
            <p className="font-normal text-xs leading-4 w-[390px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="flex flex-row justify-center items-center gap-4">
              <button className="bg-[rgba(29,33,48,1)] text-center w-28 h-8 rounded-md text-xs text-[rgba(255,255,255,1)]">
                Get Started
              </button>
              <button className="border-[rgba(224,228,252,1)] border-[1px] w-28 h-8 rounded-md text-center text-[rgba(29,33,48,1)]">
                Contact us
              </button>
            </div>
          </div>
          <div className="flex justify-center items-center w-[650px]">
            <img
              className="w-[630px] h-[290px] border-[rgba(224,228,252,1)] border-[2px] rounded-2xl"
              src={bg1}
              alt="dashboard overview"
            />
          </div>
        </div>
        <div className="flex flex-row justify-between items-center gap-32 mb-14">
          <img
            className="w-28 h-8"
            src={logo1}
            alt="One of our company logos"
          />
          <img
            className="w-28 h-8"
            src={logo2}
            alt="One of our
          company logos"
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
      </header>
      <main className="flex flex-col justify-center items-center gap-2">
        <div
          div
          className="flex flex-col justify-center items-center bg-gradient-to-r from-cyan-50 to-slate-200 w-screen"
        >
          <div>
            <h1 className="font-bold text-[rgba(29,33,48,1)] text-[40px] mt-28 mb-11 leading-10 text-center w-[670px]">
              Get the best out of your company with our service
            </h1>
          </div>
          <div
            div
            className="flex flex-col justify-center items-center w-screen mr-[93px] gap-11 pt-14 pb-12 bg-[rgba(255,255,255,0.69)] rounded-tr-3xl"
          >
            <div
              div
              className="flex flex-row justify-center items-center gap-2"
            >
              <div className="flex flex-col gap-3">
                <img
                  className="w-10"
                  src={icon1}
                  alt="User first confirmation"
                />

                <h1 className="font-medium text-[rgba(29,33,48,1)] text-[18px] leading-5 text-left w-[310px]">
                  Security and privacy
                </h1>
                <p className="font-normal text-[rgba(29,33,48,1)] text-[12px] leading-4 text-left w-[285px]">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor.
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <img
                  className="w-10"
                  src={icon2}
                  alt="User first confirmation"
                />

                <h1 className="font-medium text-[rgba(29,33,48,1)] text-[18px] leading-5 text-left w-[310px]">
                  Built-in AI features
                </h1>
                <p className="font-normal text-[rgba(29,33,48,1)] text-[12px] leading-4 text-left w-[285px]">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor.
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <img
                  className="w-10"
                  src={icon3}
                  alt="User first confirmation"
                />

                <h1 className="font-medium text-[rgba(29,33,48,1)] text-[18px] leading-5 text-left w-[310px]">
                  Collaborate with others
                </h1>
                <p className="font-normal text-[rgba(29,33,48,1)] text-[12px] leading-4 text-left w-[285px]">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor.
                </p>
              </div>
            </div>
            <div className="flex flex-row justify-center items-center">
              <div className="flex flex-col gap-3">
                <img
                  className="w-10"
                  src={icon4}
                  alt="User first confirmation"
                />

                <h1 className="font-medium text-[rgba(29,33,48,1)] text-[18px] leading-5 text-left w-[310px]">
                  Real time sync
                </h1>
                <p className="font-normal text-[rgba(29,33,48,1)] text-[12px] leading-4 text-left w-[285px]">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor.
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <img
                  className="w-10"
                  src={icon5}
                  alt="User first confirmation"
                />

                <h1 className="font-medium text-[rgba(29,33,48,1)] text-[18px] leading-5 text-left w-[310px]">
                  Built-in AI features
                </h1>
                <p className="font-normal text-[rgba(29,33,48,1)] text-[12px] leading-4 text-left w-[285px]">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor.
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <img
                  className="w-10"
                  src={icon6}
                  alt="User first confirmation"
                />

                <h1 className="font-medium text-[rgba(29,33,48,1)] text-[18px] leading-5 text-left w-[310px]">
                  Easy notes organization
                </h1>
                <p className="font-normal text-[rgba(29,33,48,1)] text-[12px] leading-4 text-left w-[285px]">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-center items-center gap-16 pt-10 mb-10 mt-gradient-to-r from-cyan-50 to-slate-50">
          <div className="flex flex-col justify-center items-start w-[470px] gap-5">
            <h3 className="text-sm text-left">Marketing insights</h3>
            <h1 className="font-bold text-[rgba(29,33,48,1)] text-[35px] leading-8 text-left w-[395px]">
              Data-driven client feedback
            </h1>
            <p className="font-bold text-[rgba(29,33,48,1)] text-xs leading-4 text-left w-[435px]">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren.
            </p>
          </div>
          <div>
            <img
              className="w-[490px] h-[320px]"
              src={data1}
              alt="shape of our results"
            />
          </div>
        </div>
        <div className="flex flex-row justify-center items-center gap-16 pt-10 mb-10 mt-gradient-to-r from-cyan-50 to-slate-50">
          <div>
            <img
              className="w-[490px] h-[320px]"
              src={data2}
              alt="shape of our results"
            />
          </div>
          <div className="flex flex-col justify-center items-start w-[470px] gap-5">
            <h3 className="text-sm text-left">Time tracker</h3>
            <h1 className="font-bold text-[rgba(29,33,48,1)] text-[35px] leading-8 text-left w-[395px]">
              Track your project performance
            </h1>
            <p className="font-bold text-[rgba(29,33,48,1)] text-xs leading-4 text-left w-[435px]">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren.
            </p>
          </div>
        </div>

        <div className="flex flex-row justify-center items-center gap-16 pt-10 mb-10 mt-gradient-to-r from-cyan-50 to-slate-50">
          <div className="flex flex-col justify-center items-start w-[470px] gap-5">
            <h3 className="text-sm text-left">Lead Generation</h3>
            <h1 className="font-bold text-[rgba(29,33,48,1)] text-[35px] leading-8 text-left w-[395px]">
              More leads that convert
            </h1>
            <p className="font-bold text-[rgba(29,33,48,1)] text-xs leading-4 text-left w-[435px]">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren.
            </p>
          </div>
          <div>
            <img
              className="w-[490px] h-[320px]"
              src={data2}
              alt="shape of our results"
            />
          </div>
        </div>

        <div className="flex flex-row justify-center items-center gap-16 pt-10 mb-10 mt-gradient-to-r from-cyan-50 to-slate-50">
          <div>
            <img
              className="w-[490px] h-[320px]"
              src={data2}
              alt="shape of our results"
            />
          </div>
          <div className="flex flex-col justify-center items-start w-[470px] gap-5">
            <h3 className="text-sm text-left">Remote teams</h3>
            <h1 className="font-bold text-[rgba(29,33,48,1)] text-[35px] leading-8 text-left w-[395px]">
              Real-time collaboration
            </h1>
            <p className="font-bold text-[rgba(29,33,48,1)] text-xs leading-4 text-left w-[435px]">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren.
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-2">
          <div className="flex justify-center items-center">
            <h1 className="font-bold text-[rgba(29,33,48,1)] mb-2 text-[40px] text-center">
              Features
            </h1>
          </div>
          <div className="flex flex-row justify-center items-center bg-[rgba(215,152,225,0.15)] p-10 rounded-xl">
            <div className="flex flex-col gap-3">
              <img className="w-8" src={feat1} alt="feature logo" />

              <h1 className="font-medium text-[rgba(29,33,48,1)] text-[25px] leading-7 text-left w-[310px]">
                Advanced 256-bit encryption
              </h1>
              <p className="font-normal text-[rgba(29,33,48,1)] text-xs leading-4 text-left w-[235px]">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor.
              </p>
            </div>
            <img className="pr-6 h-36" src={divider} alt="Divider logo" />
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
            <img className="pr-6 h-36" src={divider} alt="Divider logo" />
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
        <div className="flex flex-col justify-center items-center gap-5 w-screen pt-10 pb-14 bg-gradient-to-t from-cyan-50 to-yellow-50">
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
