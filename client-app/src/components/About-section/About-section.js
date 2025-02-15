import React from "react";
// import BackgroundImage from '../../assets/Rectangle32.png';
// style={{ backgroundImage: `url(${BackgroundImage})` }}

const AboutIndexPos = () => {
  const AboutItem = [
    {
      id: 1,
      heading: " Easy Collection Management",
      desc: `Create and organize your own skill-based collections effortlessly. Add tutorials, templates, and resources in one place.
      `,
    },
    {
      id: 2,
      heading: "Smart Search & Discovery",
      desc: `Find the best resources quickly using tags, categories, and skill-based recommendations.
      `,
    },
    {
      id: 3,
      heading: "Community Collaboration",
      desc: `Fork, improve, and share collections with others. Get feedback and engage with a learning-focused community.
      `,
    },
    {
      id: 4,
      heading: "Fast & Secure Access",
      desc: `Download resources instantly and keep your learning journey smooth with secure and reliable access.
      `,
    },
  ];
  return (
    <>
      <div
        className="bg-cover bg-center  w-full py-20 flex items-center flex-col gap-10 justify-center"
        id="about"
      >
        <div className="w-[80%]">
          <div className="text-center text-black">
            <h1
              className="text-4xl font-bold"
              style={{ fontSize: "clamp(20px, 4vw,45px)" }}
            >
              What is <span className="text-red-700">Skill Hive?</span>
            </h1>
            <p className="mt-4 text-black text-center text-lg md:w-[80%] mx-auto">
              SkillHive is a platform where people can share and learn new
              skills easily. You can find useful resources, create your own
              collections, and help others learn. Whether you're a beginner or
              an expert, SkillSwap makes learning simple and fun.
            </p>
          </div>
        </div>

        <div className="container mx-auto p-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
            {AboutItem.map((items) => (
              <div className="bg-transparent border-2 text-center  border-red-600 shadow-md px-6 py-16 flex flex-col gap-3 rounded-lg">
                <h3 className="text-2xl font-bold text-black">
                  {items.heading}
                </h3>
                <p className=" text-sm text-black">{items.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutIndexPos;
