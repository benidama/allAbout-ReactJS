import React from "react";
import divider from "/images/price/Divider.jpg";
import reg6 from "/images/price/Icon6.png";
import reg8 from "/images/price/Icon8.png";
import reg9 from "/images/price/Icon9.png";
import icon from "/images/price/Icon7.png";
import expander1 from "/images/price/Expander +.jpg";
import expander2 from "/images/price/Expander-.jpg";

function Pricing() {
  return (
    <div>
      <header className="flex flex-col justify-center items-center gap-5 text-left">
        <h1 className="font-bold text-[rgba(29,33,48,1)] text-[35px] leading-10 text-center w-[395px]">
          Pricing plans that suit you
        </h1>
        <p className="font-normal text-xs text-center leading-4 w-[390px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor.
        </p>
      </header>
      <main className="flex flex-col justify-center">
        <div className="flex flex-col justify-center items-center bg-cyan-50">
          <div className="flex flex-row justify-center items-center m-5 gap-4 bg-violet-100 h-10 rounded-md w-56">
            <button className="bg-[rgba(29,33,48,1)] text-center w-28 h-8 rounded-md text-xs text-[rgba(255,255,255,1)]">
              Monthly
            </button>
            <button className="border-[rgba(224,228,252,1)] text-xs border-[1px] w-28 h-8 rounded-md text-center text-[rgba(29,33,48,1)]">
              Yearly
            </button>
          </div>
          <div className="flex flex-row justify-center items-center">
            <div className="flex flex-col justify-center items-center">
              <div className="flex flex-col justify-center items-start rounded-2xl p-5 m-8 w-[251px] bg-[rgba(255,255,255,1)] gap-4">
                <div className="flex flex-row justify-center items-center gap-3">
                  <img className="w-10" src={reg6} alt="Regular icon" />
                  <div className="flex flex-col justify-center items-start">
                    <h3 className="text-2xl font-bold">Regular</h3>
                    <p className="text-xs font-light text-left">Starter Plan</p>
                  </div>
                </div>
                <img src={divider} alt="Divider" />
                <div className="flex flex-col justify-center items-start w-[251px]">
                  <div className="flex flex-row justify-center items-center gap-2">
                    <img src={icon} alt="price icon" />
                    <p className="text-xs font-light text-left">
                      Limited Projects
                    </p>
                  </div>

                  <div className="flex flex-row justify-center items-center gap-2">
                    <img src={icon} alt="price icon" />
                    <p className="text-xs font-light text-left">
                      Regular Support Business
                    </p>
                  </div>
                  <div className="flex flex-row justify-center items-center gap-2">
                    <img src={icon} alt="price icon" />
                    <p className="text-xs font-light text-left">
                      1 month Free Trial
                    </p>
                  </div>
                  <div className="flex flex-row justify-center items-center gap-2">
                    <img src={icon} alt="price icon" />
                    <p className="text-xs font-light text-left">3GB storage</p>
                  </div>
                  <div className="flex flex-row justify-center items-center gap-2">
                    <img src={icon} alt="price icon" />
                    <p className="text-xs font-light text-left">Ads Preview</p>
                  </div>

                  <p className="text-[11px] pr-5 text-[rgba(29,33,48,1)] text-center mt-4 pl-6 font-light w-[230px]">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
                  </p>
                  <div className="flex flex-col justify-center items-center w-[241px] gap-4 mt-6">
                    <div className="flex flex-col justify-center items-center">
                      <h1 className="text-2xl font-bold">Free</h1>
                      <p className="text-xs font-light">For Limited Period</p>
                    </div>
                    <button className="bg-[rgba(29,33,48,1)] text-xs border-[1px] w-28 h-8 rounded-md text-center text-[rgba(255,255,255,1)]">
                      Get started
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center items-center">
              <div className="flex flex-col justify-center items-start p-5 m-8 w-[251px] rounded-2xl bg-[rgba(240,242,254,1)] gap-4">
                <div className="flex flex-row justify-center items-center gap-3">
                  <img className="w-10" src={reg8} alt="Regular icon" />
                  <div className="flex flex-col justify-center items-start">
                    <h3 className="text-2xl font-bold">Plantinum</h3>
                    <p className="text-xs font-light text-left">
                      For the best results
                    </p>
                  </div>
                </div>
                <img src={divider} alt="Divider" />
                <div className="flex flex-col justify-center items-start w-[251px]">
                  <div className="flex flex-row justify-center items-center gap-2">
                    <img src={icon} alt="price icon" />
                    <p className="text-xs font-light text-left">
                      Limited Projects
                    </p>
                  </div>

                  <div className="flex flex-row justify-center items-center gap-2">
                    <img src={icon} alt="price icon" />
                    <p className="text-xs font-light text-left">
                      Regular Support Business
                    </p>
                  </div>
                  <div className="flex flex-row justify-center items-center gap-2">
                    <img src={icon} alt="price icon" />
                    <p className="text-xs font-light text-left">
                      1 month Free Trial
                    </p>
                  </div>
                  <div className="flex flex-row justify-center items-center gap-2">
                    <img src={icon} alt="price icon" />
                    <p className="text-xs font-light text-left">3GB storage</p>
                  </div>
                  <div className="flex flex-row justify-center items-center gap-2">
                    <img src={icon} alt="price icon" />
                    <p className="text-xs font-light text-left">Ads Preview</p>
                  </div>

                  <p className="text-[11px] pr-5 text-[rgba(29,33,48,1)] text-center mt-4 pl-6 font-light w-[230px]">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
                  </p>
                  <div className="flex flex-col justify-center items-center w-[241px] gap-4 mt-6">
                    <div className="flex flex-col justify-center items-center">
                      <h1 className="text-2xl font-bold">$342</h1>
                      <p className="text-xs font-light">For Limited Period</p>
                    </div>
                    <button className="bg-[rgba(29,33,48,1)] text-xs border-[1px] w-28 h-8 rounded-md text-center text-[rgba(255,255,255,1)]">
                      Get started
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center items-center">
              <div className="flex flex-col justify-center p-5 items-start m-8 w-[251px] rounded-2xl bg-[rgba(255,255,255,1)] gap-4">
                <div className="flex flex-row justify-center items-center gap-3">
                  <img className="w-10" src={reg9} alt="Regular icon" />
                  <div className="flex flex-col justify-center items-start">
                    <h3 className="text-2xl font-bold">Standard</h3>
                    <p className="text-xs font-light text-left">Most popular</p>
                  </div>
                </div>
                <img src={divider} alt="Divider" />
                <div className="flex flex-col justify-center items-start w-[251px]">
                  <div className="flex flex-row justify-center items-center gap-2">
                    <img src={icon} alt="price icon" />
                    <p className="text-xs font-light text-left">
                      Limited Projects
                    </p>
                  </div>

                  <div className="flex flex-row justify-center items-center gap-2">
                    <img src={icon} alt="price icon" />
                    <p className="text-xs font-light text-left">
                      Regular Support Business
                    </p>
                  </div>
                  <div className="flex flex-row justify-center items-center gap-2">
                    <img src={icon} alt="price icon" />
                    <p className="text-xs font-light text-left">
                      1 month Free Trial
                    </p>
                  </div>
                  <div className="flex flex-row justify-center items-center gap-2">
                    <img src={icon} alt="price icon" />
                    <p className="text-xs font-light text-left">3GB storage</p>
                  </div>
                  <div className="flex flex-row justify-center items-center gap-2">
                    <img src={icon} alt="price icon" />
                    <p className="text-xs font-light text-left">Ads Preview</p>
                  </div>

                  <p className="text-[11px] text-[rgba(29,33,48,1)] text-center pr-5 mt-4 pl-6 font-light w-[230px]">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
                  </p>
                  <div className="flex flex-col justify-center items-center w-[241px] gap-4 mt-6">
                    <div className="flex flex-col justify-center items-center">
                      <h1 className="text-2xl font-bold">$234</h1>
                      <p className="text-xs font-light">Billing Monthly</p>
                    </div>
                    <button className="bg-[rgba(29,33,48,1)] text-xs border-[1px] w-28 h-8 rounded-md text-center text-[rgba(255,255,255,1)]">
                      Get started
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[rgba(240,242,254,1)] flex flex-row justify-center relative items-center p-10 ml-36 mr-36 rounded-3xl">
          <div className="flex flex-col justify-start gap-5 relative bottom-28 items-start w-[428px]">
            <h1 className="font-bold text-[rgba(29,33,48,1)] text-[35px] leading-8 text-left w-[395px]">
              Frequestly Asked Questions
            </h1>
            <p className="font-normal text-xs leading-4 w-[390px] text-[rgba(29,33,48,1)]">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt.
            </p>
          </div>
          <div className="flex flex-col justify-between w-[485px] gap-2">
            <div className="flex flex-col justify-between gap-3 rounded-2xl p-5 bg-[rgba(255,255,255,1)]">
              <div className="flex flex-row justify-between">
                <h3 className="font-medium text-xl text-[rgba(29,33,48,1)]">
                  How do I grow my business?
                </h3>
                <img className="h-4" src={expander1} alt="Expander sign" />
              </div>
              <p className="font-normal text-xs leading-4 w-[465px] text-[rgba(29,33,48,1)]">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua.
              </p>
            </div>
            <div className="flex flex-row justify-between rounded-2xl p-5 bg-[rgba(255,255,255,1)]">
              <h3 className="font-medium text-xl text-[rgba(29,33,48,1)]">
                Can I cancel my subscription?
              </h3>
              <img className="h-1" src={expander2} alt="Expander sign" />
            </div>
            <div className="flex flex-row justify-between rounded-2xl p-5 bg-[rgba(255,255,255,1)]">
              <h3 className="font-medium text-xl text-[rgba(29,33,48,1)]">
                How do I contact the support?
              </h3>
              <img className="h-4" src={expander1} alt="Expander sign" />
            </div>
            <div className="flex flex-row justify-between rounded-2xl p-5 bg-[rgba(255,255,255,1)]">
              <h3 className="font-medium text-xl text-[rgba(29,33,48,1)]">
                Is a credit card required?
              </h3>
              <img className="h-4" src={expander1} alt="Expander sign" />
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

export default Pricing;
