import React from "react";
import overview from "/images/blog/1.png";
import post1 from "/images/blog/1.png";
import post2 from "/images/blog/2.png";
import post3 from "/images/blog/3.png";
import post4 from "/images/blog/4.png";
import post5 from "/images/blog/5.png";
import post6 from "/images/blog/6.png";

function Blog() {
  return (
    <div>
      <header className="flex flex-col justify-center items-center gap-5 bg-cyan-100/15 pb-12">
        <div className="flex flex-col justify-center items-center gap-4 pt-10">
          <h1 className="font-bold text-[rgba(29,33,48,1)] text-[35px] leading-10 text-center">
            Read our latest blogs
          </h1>
          <p className="font-normal text-[rgba(29,33,48,1)] text-xs leading-5 text-center w-[490px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare, eros dolor.
          </p>
        </div>

        <div className="flex flex-row justify-center items-start gap-3 border-[rgba(216,216,216,1)] border-[1px] p-7 rounded-xl">
          <div className="flex flex-col justify-center items-start gap-4">
            <h3 className="text-sm text-blue-200">Trending Post</h3>
            <h1 className="font-bold text-[rgba(29,33,48,1)] text-[35px] leading-10 text-left w-[470px]">
              New invoicing features to help you get paid faster
            </h1>
            <p className="font-normal text-[rgba(29,33,48,1)] text-xs leading-5 w-[410px]">
              Over the past few months, we’ve added several new features to SaaS
              Invoicing to help any business get paid faster and streamline
              their collection workflows.
            </p>
            <p className="font-normal text-[rgba(29,33,48,1)] text-xs leading-5 w-[510px]">
              Luke Matthews l November 8, 2021
            </p>
          </div>
          <div>
            <img
              className="w-[550px] h-[250px] rounded-2xl"
              src={overview}
              alt="overview of our project"
            />
          </div>
        </div>
      </header>
      <main className="flex flex-col justify-center">
        <div className="bg-cyan-100/15 pb-10">
          <h1 className="font-bold text-[rgba(29,33,48,1)] text-[35px] text-center">
            All posts
          </h1>
        </div>
        <div className="flex flex-col justify-center items-center gap-10 mb-12">
          <div className="flex flex-row justify-center items-center gap-4">
            <div className="flex flex-col justify-center items-start gap-2">
              <img
                className="w-[360px] h-[230px] rounded-xl"
                src={post1}
                alt="automaker post"
              />
              <h2 className="font-medium text-[rgba(29,33,48,1)] text-xl w-[360px] leading-5">
                7 Automation use cases that foster excellent CX
              </h2>
              <p className="font-normal text-[rgba(29,33,48,1)] text-xs leading-5 w-[360px]">
                Lorem ipsum dolor sit amet, auid kabd consectetur adipiscing
                elit, sed do eiusmod tempor incididunt.
              </p>
              <p className="font-normal text-[rgba(29,33,48,1)] text-xs leading-5">
                Luke Matthews l November 8, 2021
              </p>
            </div>

            <div className="flex flex-col justify-center items-start gap-2">
              <img
                className="w-[360px] h-[230px] rounded-xl"
                src={post2}
                alt="manager post"
              />
              <h2 className="font-medium text-[rgba(29,33,48,1)] text-xl w-[350px] leading-5">
                Managing Rails application secrets with encrypted credentials
              </h2>
              <p className="font-normal text-[rgba(29,33,48,1)] text-xs leading-5 w-[360px]">
                Lorem ipsum dolor sit amet, auid kabd consectetur adipiscing
                elit, sed do eiusmod tempor incididunt.
              </p>
              <p className="font-normal text-[rgba(29,33,48,1)] text-xs leading-5">
                Luke Matthews l November 8, 2021
              </p>
            </div>

            <div className="flex flex-col justify-center items-start gap-2">
              <img
                className="w-[360px] h-[230px] rounded-xl"
                src={post3}
                alt="accountant post"
              />
              <h2 className="font-medium text-[rgba(29,33,48,1)] text-xl w-[350px] leading-5">
                Account-based marketing: Data-driven selection for ABM success
              </h2>
              <p className="font-normal text-[rgba(29,33,48,1)] text-xs leading-5 w-[360px]">
                Lorem ipsum dolor sit amet, auid kabd consectetur adipiscing
                elit, sed do eiusmod tempor incididunt.
              </p>
              <p className="font-normal text-[rgba(29,33,48,1)] text-xs leading-5">
                Luke Matthews l November 8, 2021
              </p>
            </div>
          </div>

          <div className="flex flex-row justify-center items-center gap-4">
            <div className="flex flex-col justify-center items-start gap-2">
              <img
                className="w-[360px] h-[230px] rounded-xl"
                src={post4}
                alt="Finance post"
              />
              <h2 className="font-medium text-[rgba(29,33,48,1)] text-xl w-[350px] leading-5">
                How to Calculate Your SaaS Gross Margin
              </h2>
              <p className="font-normal text-[rgba(29,33,48,1)] text-xs leading-5 w-[360px]">
                Lorem ipsum dolor sit amet, auid kabd consectetur adipiscing
                elit, sed do eiusmod tempor incididunt.
              </p>
              <p className="font-normal text-[rgba(29,33,48,1)] text-xs leading-5">
                Luke Matthews l November 8, 2021
              </p>
            </div>

            <div className="flex flex-col justify-center items-start gap-2">
              <img
                className="w-[360px] h-[230px] rounded-xl"
                src={post5}
                alt="Auditor post"
              />
              <h2 className="font-medium text-[rgba(29,33,48,1)] text-xl w-[350px] leading-5">
                The Five Main Benefits of Automating your Accounts Receivable
                Process
              </h2>
              <p className="font-normal text-[rgba(29,33,48,1)] text-xs leading-5 w-[360px]">
                Lorem ipsum dolor sit amet, auid kabd consectetur adipiscing
                elit, sed do eiusmod tempor incididunt.
              </p>
              <p className="font-normal text-[rgba(29,33,48,1)] text-xs leading-5">
                Luke Matthews l November 8, 2021
              </p>
            </div>

            <div className="flex flex-col justify-center items-start gap-2">
              <img
                className="w-[360px] h-[230px] rounded-xl"
                src={post6}
                alt="analyst post"
              />
              <h2 className="font-medium text-[rgba(29,33,48,1)] text-xl w-[350px] leading-5">
                How to Make Data-driven Pricing Decisions
              </h2>
              <p className="font-normal text-[rgba(29,33,48,1)] text-xs leading-5 w-[360px]">
                Lorem ipsum dolor sit amet, auid kabd consectetur adipiscing
                elit, sed do eiusmod tempor incididunt.
              </p>
              <p className="font-normal text-[rgba(29,33,48,1)] text-xs leading-5">
                Luke Matthews l November 8, 2021
              </p>
            </div>
          </div>

          <div className="flex flex-row justify-center items-center gap-4">
            <div className="flex flex-col justify-center items-start gap-2">
              <img
                className="w-[360px] h-[230px] rounded-xl"
                src="/images/blog/7.png"
                alt="Recurring post"
              />
              <h2 className="font-medium text-[rgba(29,33,48,1)] text-xl w-[350px] leading-5">
                How to Make Recurring Invoicing More Efficient
              </h2>
              <p className="font-normal text-[rgba(29,33,48,1)] text-xs leading-5 w-[360px]">
                Lorem ipsum dolor sit amet, auid kabd consectetur adipiscing
                elit, sed do eiusmod tempor incididunt.
              </p>
              <p className="font-normal text-[rgba(29,33,48,1)] text-xs leading-5">
                Luke Matthews l November 8, 2021
              </p>
            </div>

            <div className="flex flex-col justify-center items-start gap-2">
              <img
                className="w-[360px] h-[230px] rounded-xl"
                src="/images/blog/8.png"
                alt="Conversions post"
              />
              <h2 className="font-medium text-[rgba(29,33,48,1)] text-xl w-[350px] leading-5">
                How to Reduce Checkout Abandonment for more Conversions
              </h2>
              <p className="font-normal text-[rgba(29,33,48,1)] text-xs leading-5 w-[360px]">
                Lorem ipsum dolor sit amet, auid kabd consectetur adipiscing
                elit, sed do eiusmod tempor incididunt.
              </p>
              <p className="font-normal text-[rgba(29,33,48,1)] text-xs leading-5">
                Luke Matthews l November 8, 2021
              </p>
            </div>

            <div className="flex flex-col justify-center items-start gap-2">
              <img
                className="w-[360px] h-[230px] rounded-xl"
                src="/images/blog/9.png"
                alt="automation post"
              />
              <h2 className="font-medium text-[rgba(29,33,48,1)] text-xl w-[350px] leading-5">
                10 Customer Retention Strategies for better Dwell time
              </h2>
              <p className="font-normal text-[rgba(29,33,48,1)] text-xs leading-5 w-[360px]">
                Lorem ipsum dolor sit amet, auid kabd consectetur adipiscing
                elit, sed do eiusmod tempor incididunt.
              </p>
              <p className="font-normal text-[rgba(29,33,48,1)] text-xs leading-5">
                Luke Matthews l November 8, 2021
              </p>
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
export default Blog;
