import bg from "/images/homepage/image-2.png";
import arrow from "/images/homepage/Arrow.jpg";
// import divider from "/images/homepage/Divider.png";
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
    <div className="max-w-screen-2xl mx-auto">
      <header className="flex flex-col justify-center items-center p-4 md:p-10">
        <div className="flex flex-col justify-center items-center gap-5 bg-gradient-to-b from-white via-teal-100 border-teal-100 rounded-lg p-4 md:p-8">
          <h1 className="font-bold text-[rgba(29,33,48,1)] text-2xl md:text-4xl leading-tight text-center w-full">
            The Best Software to Grow your Sales and Services
          </h1>
          <p className="text-sm text-center w-full">
            Welcome to Quintus, we are ready to give you high-quality fashion,
            eco-friendly home goods, innovative tech gadgets, etc. At Quintus,
            we are passionate about providing our customers with exceptional
            products, affordable prices, sustainable options, or a seamless
            shopping experience.
          </p>
          <h2 className="font-bold text-[rgba(29,33,48,1)] text-xl md:text-2xl leading-tight text-center mt-4">
            Our mission
          </h2>
          <p className="text-sm text-center w-full">
            Our mission is to make premium products accessible to everyone,
            empower sustainable living, or revolutionize the way people shop
            online. We believe in core values, e.g., quality, customer
            satisfaction, innovation, or community and strive to reflect these
            values in everything we do.
          </p>
          <div className="w-full">
            <h2 className="font-bold text-[rgba(29,33,48,1)] text-xl md:text-2xl text-center my-6">
              Why Choose Us?
            </h2>
            <div className="space-y-4">
              <p className="text-sm">
                <span className="text-lg md:text-xl font-bold text-[rgba(29,33,48,1)]">
                  Quality Assurance:
                </span>{" "}
                Every product is carefully selected and tested to ensure it
                meets our standards.
              </p>
              <p className="text-sm">
                <span className="text-lg md:text-xl font-bold text-[rgba(29,33,48,1)]">
                  Affordable Prices:
                </span>{" "}
                We believe that great products should not come with a hefty
                price tag.
              </p>
              <p className="text-sm">
                <span className="text-lg md:text-xl font-bold text-[rgba(29,33,48,1)]">
                  Sustainability:
                </span>{" "}
                eco-friendly materials, carbon-neutral shipping, etc.
              </p>
              <p className="text-sm">
                <span className="text-lg md:text-xl font-bold text-[rgba(29,33,48,1)]">
                  Exceptional Customer Service:
                </span>{" "}
                Our team is always ready to assist you with any questions or
                concerns.
              </p>
            </div>
          </div>
          <form className="bg-white flex justify-between items-center w-full max-w-sm h-12 pl-3 pr-1 rounded-lg my-6 shadow-sm">
            <input
              className="text-[rgba(29,33,48,1 text-sm flex-1 h-8 pl-2 outline-none"
              type="email"
              id="inptForm"
              placeholder="Enter your Email"
            />
            <button className="bg-[rgba(29,33,48,1)] w-28 h-8 rounded-md text-center text-white">
              Get Free trial
            </button>
          </form>
        </div>
        <div className="flex justify-center items-center mt-7 w-full">
          <img
            className="w-full max-w-sm md:max-w-4xl h-auto border-2 border-[rgba(224,228,252,1)] rounded-2xl"
            src={bg}
            alt="dashboard overview"
          />
        </div>
      </header>

      <main>
        <div className="flex flex-col justify-center items-center gap-2 px-4 md:px-8 my-12">
          <div className="flex flex-col justify-center items-center gap-3 mb-6">
            <h3 className="text-gradient-[from-#373FFF-to-#3ACAF8] text-blue-600">
              High-quality
            </h3>
            <h2 className="font-bold text-[rgba(29,33,48,1)] text-2xl md:text-4xl leading-tight text-center w-full max-w-lg">
              We have the Best Solution for your Business
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 bg-[rgba(224,228,252,1)] p-6 md:p-10 rounded-xl w-full max-w-6xl">
            <div className="flex flex-col gap-3">
              <img
                className="w-10"
                src={solution1}
                alt="User first confirmation"
              />
              <h3 className="font-medium text-[rgba(29,33,48,1)] text-xl md:text-2xl leading-tight">
                High security to protect from piracy
              </h3>
              <p className="text-sm text-[rgba(29,33,48,1)]">
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
              <h3 className="font-medium text-[rgba(29,33,48,1)] text-xl md:text-2xl leading-tight">
                Premium quality performance
              </h3>
              <p className="text-sm text-[rgba(29,33,48,1)]">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <img className="w-10" src={solution3} alt="Icon of air phone" />
              <h3 className="font-medium text-[rgba(29,33,48,1)] text-xl md:text-2xl leading-tight">
                Full time customer support - 24/7
              </h3>
              <p className="text-sm text-[rgba(29,33,48,1)]">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 px-4 md:px-16 my-16">
          <div className="flex flex-col justify-center items-start gap-3 w-full max-w-md">
            <h3 className="text-left text-base text-blue-950">
              Why should you work with us?
            </h3>
            <h2 className="font-medium text-[rgba(29,33,48,1)] text-2xl leading-tight">
              To upscale your business to the next level
            </h2>
            <p className="text-sm text-[rgba(29,33,48,1)]">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua invidunt ut labore.
            </p>
          </div>
          <div className="flex flex-col justify-center items-start gap-4 w-full max-w-lg">
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 bg-[rgba(255,172,172,1)] rounded-full flex justify-center items-center">
                <img className="w-4 h-4" src={arrow} alt="Arrow logo" />
              </div>
              <p className="text-sm md:text-base text-[rgba(29,33,48,1)]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 bg-[rgba(255,172,172,1)] rounded-full flex justify-center items-center">
                <img className="w-4 h-4" src={arrow} alt="Arrow logo" />
              </div>
              <p className="text-sm md:text-base text-[rgba(29,33,48,1)]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 bg-[rgba(255,172,172,1)] rounded-full flex justify-center items-center">
                <img className="w-4 h-4" src={arrow} alt="Arrow logo" />
              </div>
              <p className="text-sm md:text-base text-[rgba(29,33,48,1)]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center py-12 bg-gradient-to-r from-blue-400 to-blue-200 px-4 md:px-16 gap-8">
          <div className="flex flex-col justify-center items-start gap-5 w-full max-w-md">
            <h2 className="font-medium text-[rgba(29,33,48,1)] text-2xl leading-tight">
              More impressions, more conversions
            </h2>
            <p className="text-sm text-[rgba(29,33,48,1)]">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua invidunt ut labore.
            </p>
            <button className="bg-[rgba(29,33,48,1)] w-28 h-8 rounded-md text-center text-white hover:bg-gray-800 transition-colors">
              Get Free trial
            </button>
          </div>

          <div className="w-full max-w-lg">
            <img
              className="w-full h-auto rounded-lg shadow-md"
              src={bg}
              alt="Dashboard demonstration"
            />
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-8 md:gap-12 items-center py-12 px-4 md:px-16">
          <img className="h-8 w-auto" src={logo1} alt="Partner logo" />
          <img className="h-8 w-auto" src={logo2} alt="Partner logo" />
          <img className="h-8 w-auto" src={logo3} alt="Partner logo" />
          <img className="h-8 w-auto" src={logo4} alt="Partner logo" />
          <img className="h-8 w-auto" src={logo5} alt="Partner logo" />
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 px-4 md:px-16 my-16">
          <div className="flex flex-col justify-center items-start gap-3 w-full max-w-md">
            <h3 className="text-left text-base text-blue-950">Discover More</h3>
            <h2 className="font-medium text-[rgba(29,33,48,1)] text-2xl leading-tight">
              Analyze your sales and marketing leads
            </h2>
            <p className="text-sm text-[rgba(29,33,48,1)]">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua invidunt ut labore.
            </p>
          </div>
          <div className="flex flex-col justify-center items-start gap-6 w-full max-w-lg">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-[rgba(244,245,247,1)] rounded-full flex justify-center items-center">
                <img className="w-4" src={more1} alt="Sales icon" />
              </div>
              <div>
                <h3 className="font-medium text-[rgba(29,33,48,1)] text-base">
                  Sales Tracking
                </h3>
                <p className="text-xs text-[rgba(29,33,48,1)]">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-[rgba(244,245,247,1)] rounded-full flex justify-center items-center">
                <img className="w-4" src={more2} alt="Project icon" />
              </div>
              <div>
                <h3 className="font-medium text-[rgba(29,33,48,1)] text-base">
                  Project Management
                </h3>
                <p className="text-xs text-[rgba(29,33,48,1)]">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-[rgba(244,245,247,1)] rounded-full flex justify-center items-center">
                <img className="w-4" src={more3} alt="Activity icon" />
              </div>
              <div>
                <h3 className="font-medium text-[rgba(29,33,48,1)] text-base">
                  Activity Report
                </h3>
                <p className="text-xs text-[rgba(29,33,48,1)]">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center px-4 md:px-16 my-16">
          <h2 className="font-bold text-[rgba(29,33,48,1)] text-2xl md:text-4xl text-center mb-8">
            Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 bg-[rgba(215,152,225,0.15)] p-6 md:p-10 rounded-xl w-full max-w-6xl">
            <div className="flex flex-col gap-3">
              <img className="w-8" src={feat1} alt="Encryption icon" />
              <h3 className="font-medium text-[rgba(29,33,48,1)] text-xl md:text-2xl leading-tight">
                Advanced 256-bit encryption
              </h3>
              <p className="text-xs text-[rgba(29,33,48,1)]">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor.
              </p>
            </div>
            <div className="hidden md:block border-l border-r border-gray-200 px-6">
              <div className="flex flex-col gap-3">
                <img className="w-8" src={feat2} alt="Collaboration icon" />
                <h3 className="font-medium text-[rgba(29,33,48,1)] text-xl md:text-2xl leading-tight">
                  Simple collaboration tools
                </h3>
                <p className="text-xs text-[rgba(29,33,48,1)]">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor.
                </p>
              </div>
            </div>

            {/* Mobile-only version of middle column without borders */}
            <div className="md:hidden flex flex-col gap-3">
              <img className="w-8" src={feat2} alt="Collaboration icon" />
              <h3 className="font-medium text-[rgba(29,33,48,1)] text-xl md:text-2xl leading-tight">
                Simple collaboration tools
              </h3>
              <p className="text-xs text-[rgba(29,33,48,1)]">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <img className="w-8" src={feat3} alt="AI icon" />
              <h3 className="font-medium text-[rgba(29,33,48,1)] text-xl md:text-2xl leading-tight">
                Customizable AI features
              </h3>
              <p className="text-xs text-[rgba(29,33,48,1)]">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor.
              </p>
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="flex flex-col justify-center items-center px-4 md:px-16 my-16">
          <h2 className="font-bold text-[rgba(29,33,48,1)] text-2xl md:text-4xl text-center mb-8 max-w-2xl">
            The stunning results our customers have experienced
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex flex-col justify-center items-center border-2 border-[rgba(97,153,237,0.26)] rounded-lg p-6 hover:shadow-md transition-shadow">
              <p className="text-xs text-[rgba(29,33,48,1)] text-center mb-4">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua.
              </p>
              <img
                className="w-10 h-10 rounded-full my-3"
                src={leader1}
                alt="Ron Wood profile"
              />
              <h3 className="font-medium text-[rgba(29,33,48,1)] text-sm text-center">
                Ron Wood
              </h3>
              <p className="text-xs text-[rgba(29,33,48,1)] text-center">CEO</p>
            </div>
            <div className="flex flex-col justify-center items-center border-2 border-[rgba(97,153,237,0.26)] rounded-lg p-6 hover:shadow-md transition-shadow">
              <p className="text-xs text-[rgba(29,33,48,1)] text-center mb-4">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua.
              </p>
              <img
                className="w-10 h-10 rounded-full my-3"
                src={leader2}
                alt="Sam Preston profile"
              />
              <h3 className="font-medium text-[rgba(29,33,48,1)] text-sm text-center">
                Sam Preston
              </h3>
              <p className="text-xs text-[rgba(29,33,48,1)] text-center">CTO</p>
            </div>
            <div className="flex flex-col justify-center items-center border-2 border-[rgba(97,153,237,0.26)] rounded-lg p-6 hover:shadow-md transition-shadow">
              <p className="text-xs text-[rgba(29,33,48,1)] text-center mb-4">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua.
              </p>
              <img
                className="w-10 h-10 rounded-full my-3"
                src={leader3}
                alt="Ron Wood profile"
              />
              <h3 className="font-medium text-[rgba(29,33,48,1)] text-sm text-center">
                Ron Wood
              </h3>
              <p className="text-xs text-[rgba(29,33,48,1)] text-center">CEO</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-5 py-16 px-4 bg-gradient-to-t from-cyan-50 to-yellow-50">
          <h2 className="font-bold text-[rgba(29,33,48,1)] text-2xl md:text-4xl text-center max-w-2xl">
            Are you ready to grow your business with us?
          </h2>
          <p className="text-xs text-[rgba(29,33,48,1)] text-center mb-4">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy.
          </p>
          <button className="bg-[rgba(29,33,48,1)] w-32 h-10 rounded-md text-center text-white hover:bg-gray-800 transition-colors">
            Free trial
          </button>
        </div>
      </main>
    </div>
  );
}

export default Home;
