import React from "react";
import "./header.css";

const Header = () => {
  return (
    <>
      <section className=" bg-primary pt-[70px] md:pt-16" id="home">
        <div className="">
          <div className="row">
            <div className="col-lg-12">
              <div
                className=" mb-8 text-center wow fadeInUp"
                data-wow-delay=".2s"
              >
                <h1
                  className="text-black font-bold text-center mb-8"
                  style={{ fontSize: "clamp(20px, 4vw, 45px)" }}
                >
                  Unlock Your Potential – Share, Learn, & Grow!
                </h1>
                <p
                  className="text-black opacity-80 text-center mb-8"
                  style={{ fontSize: "clamp(12px, 2vw, 20px)" }}
                >
                  Create, manage, and explore skill-based collections filled
                  with valuable resources. Whether you're a learner or a mentor,
                  SkillSwap makes knowledge sharing effortless!
                </p>
                <ul className="flex justify-center items-center space-x-4">
                  <li>
                    <a
                      href=""
                      rel="nofollow noopener"
                      target="_blank"
                      className="px-6 py-4 bg-white text-heading-color rounded-lg font-medium transition duration-300 hover:shadow-lg"
                    >
                      Product Demo
                    </a>
                  </li>
                  <li>
                    <a
                      href=""
                      rel="nofollow noopener"
                      target="_blank"
                      className="px-6 py-4 bg-red-500 text-white rounded-lg font-medium transition duration-300 hover:bg-white hover:text-red-500"
                    >
                      Start Free Trial
                    </a>
                  </li>
                </ul>
              </div>
              <div
                className="max-w-[845px] mx-auto text-center relative z-10 wow fadeInUp"
                data-wow-delay=".25s"
              >
                {/* <img src={HeaderImg} alt="hero-image" />
                <img src={dotted} alt="shape" className="absolute bottom-0 left-[-30px] z-[-1]" />
                <img src={dotted} alt="shape" className="absolute top-[-20px] right-[-20px] z-[-1]" /> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
