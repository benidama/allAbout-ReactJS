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
    <div className="px-4 sm:px-6 lg:px-8">
      <header className="flex flex-col items-center gap-4 mt-12 mb-7">
        <h1 className="font-bold text-[25px] md:text-[35px] text-center text-[rgba(29,33,48,1)] leading-10">
          We are proud of our products
        </h1>
        <p className="text-xs md:text-sm text-center md:w-[490px] text-[rgba(29,33,48,1)]">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua to go ahead in all sides.
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center gap-5">
          {[post3, post2, post1].map((post, index) => (
            <img
              key={index}
              className="w-[300px] md:w-[350px] h-[200px] md:h-[250px] rounded-3xl object-cover"
              src={post}
              alt={`post-${index}`}
            />
          ))}
        </div>
      </header>

      <main>
        <section className="text-center mb-12">
          <h3 className="text-sm text-blue-200">About Us</h3>
          <h1 className="font-bold text-[25px] md:text-[35px] text-[rgba(29,33,48,1)] leading-10">
            We’re a team of data analysts
          </h1>
          <p className="text-xs md:text-sm text-[rgba(29,33,48,1)] md:w-[510px] mx-auto">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua.
          </p>
        </section>

        <section className="bg-[rgba(240,242,254,1)] px-4 py-10 rounded-xl flex flex-col md:flex-row gap-8 justify-center items-start">
          {[
            {
              title: "Our Goals",
              subtitle: "To upscale your business to the next level",
            },
            {
              title: "Our Vision",
              subtitle: "To provide solutions for growing companies",
            },
          ].map(({ title, subtitle }, index) => (
            <div key={index} className="flex flex-col gap-3 max-w-md">
              <h3 className="text-sm text-blue-200">{title}</h3>
              <h1 className="font-bold text-[25px] md:text-[35px] text-[rgba(29,33,48,1)] leading-8">
                {subtitle}
              </h1>
              <p className="text-xs md:text-sm text-[rgba(29,33,48,1)]">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor.
              </p>
            </div>
          ))}
        </section>

        <section className="text-center py-10">
          <h1 className="font-bold text-[35px] md:text-[40px] text-[rgba(29,33,48,1)]">
            Our corporate values
          </h1>
          <p className="text-xs md:text-sm text-[rgba(29,33,48,1)] mb-5">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy.
          </p>

          <div className="bg-[rgba(249,240,251,1)] p-6 rounded-xl">
            {[icon1, icon2, icon3, icon4, icon5, icon6].map((icon, i) => (
              <div
                key={i}
                className="inline-block w-full sm:w-[280px] md:w-[310px] p-3 align-top"
              >
                <div className="flex flex-col gap-2">
                  <img src={icon} className="w-10" alt={`icon-${i}`} />
                  <h1 className="font-medium text-[18px] text-[rgba(29,33,48,1)]">
                    {
                      [
                        "Best in Class",
                        "Authenticity",
                        "Email Support",
                        "Discounts Available",
                        "Powerful Marketing",
                        "Inventory management",
                      ][i]
                    }
                  </h1>
                  <p className="text-[12px] text-[rgba(29,33,48,1)]">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="flex flex-col items-center my-16 px-4 md:px-8 lg:px-20">
          <div className="w-full max-w-4xl text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-[rgba(29,33,48,1)] mb-4">
              Our Talented Team
            </h1>
            <p className="text-base md:text-lg text-[rgba(29,33,48,0.8)] max-w-xl mx-auto">
              We bring together top talent from across industries to deliver
              innovative solutions with passion and expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 lg:gap-12 w-full max-w-6xl">
            {[
              { img: team1, name: "Blake Matthews", role: "CEO & Co-Founder" },
              { img: team2, name: "Jack Newman", role: "CTO" },
              { img: team3, name: "Sarinia Martins", role: "Marketing" },
              {
                img: team4,
                name: "Spencer Wright",
                role: "Project Management",
              },
              { img: team5, name: "Caroline Ming", role: "Sales" },
              { img: team6, name: "Kyle Brown", role: "Support" },
            ].map(({ img, name, role }, i) => (
              <div
                key={i}
                className="flex flex-col items-center bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <img
                  src={img}
                  alt={`Photo of ${name}`}
                  className="w-full h-[240px] object-cover rounded-t-2xl"
                />
                <div className="bg-[rgba(224,228,252,1)] w-full p-5 rounded-b-2xl text-left">
                  <h2 className="text-lg font-semibold text-[rgba(29,33,48,1)]">
                    {name}
                  </h2>
                  <p className="text-sm text-[rgba(29,33,48,0.8)]">{role}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default Product;
