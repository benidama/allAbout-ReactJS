import React from "react";
import contact1 from "/images/contact/Icon10.png";
import contact2 from "/images/contact/Icon11.png";
import contact3 from "/images/contact/Icon12.png";

function Contact() {
  return (
    <div>
      <main className="flex flex-col justify-center">
        <div className="flex flex-col justify-center mt-5">
          <h1 className="font-bold text-[rgba(29,33,48,1)] text-[35px] leading-10 text-center">
            Get in touch with us
          </h1>
          <div className="bg-[rgba(240,242,254,1)] flex flex-row mt-10 justify-center relative items-center p-10 ml-36 mr-36 gap-16 rounded-3xl">
            <form>
              <h3 className="text-2xl font-bold">Drop us a message</h3>
              <p className="text-xs font-light">
                We will get back to you as soon as possible.
              </p>
              <div className="flex flex-col justify-center items-start relative gap-3 pt-6">
                <div className="flex flex-row gap-3">
                  <input
                    className="bg-[rgba(255,255,255,1)] text-[rgba(29,33,48,1)] font-medium text-xs w-[250px] h-8 pl-3 rounded-md"
                    type="text"
                    id="fullName"
                    placeholder="Full Name"
                  />
                  <input
                    className="bg-[rgba(255,255,255,1)] text-[rgba(29,33,48,1)] font-medium text-xs w-[250px] h-8 pl-3 rounded-md"
                    type="text"
                    id="company"
                    placeholder="Company Name"
                  />
                </div>
                <input
                  className="bg-[rgba(255,255,255,1)] text-[rgba(29,33,48,1)] font-medium text-xs w-[512px] h-8 pl-3 rounded-md"
                  type="text"
                  id="email"
                  placeholder="Work Email"
                />
                <input
                  className="bg-[rgba(255,255,255,1)] text-[rgba(29,33,48,1)] font-medium text-xs w-[512px] h-8 pl-3 rounded-md"
                  type="text"
                  id="subject"
                  placeholder="Subject"
                />
                <textarea
                  className="bg-[rgba(255,255,255,1)] text-[rgba(29,33,48,1)] text-left relative font-normal text-xs w-[512px] h-8 pl-3 rounded-md"
                  id=""
                  cols="30"
                  rows="50"
                >
                  Message
                </textarea>
                <button className="bg-[rgba(29,33,48,1)] text-center w-[512px] h-8 rounded-md text-xs text-[rgba(255,255,255,1)]">
                  Send
                </button>
              </div>
            </form>
            <div className="flex flex-col justify-center items-start mt-9 gap-4">
              <div className="flex flex-row justify-center items-start gap-3">
                <img src={contact1} alt="phone icon" />
                <div className="flex flex-col justify-center items-start">
                  <h4 className="text-sm text-[rgba(29,33,48,1)] font-bold">
                    + 1800 145 276
                  </h4>
                  <p className="text-xs text-[rgba(29,33,48,1)] font-normal">
                    Free support
                  </p>
                </div>
              </div>

              <div className="flex flex-row justify-center items-start gap-3">
                <img src={contact2} alt="phone icon" />
                <div className="flex flex-col justify-center items-start">
                  <h4 className="text-sm text-[rgba(29,33,48,1)] font-bold">
                    finsweet@gmail.com
                  </h4>
                  <p className="text-xs text-[rgba(29,33,48,1)] font-normal">
                    Help Email support
                  </p>
                </div>
              </div>

              <div className="flex flex-row justify-center items-start gap-3">
                <img src={contact3} alt="phone icon" />
                <div className="flex flex-col justify-center items-start">
                  <h4 className="text-sm text-[rgba(29,33,48,1)] font-bold">
                    sales@finsweet.com
                  </h4>
                  <p className="text-xs text-[rgba(29,33,48,1)] font-normal">
                    Sales Enquiry
                  </p>
                </div>
              </div>
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

export default Contact;
