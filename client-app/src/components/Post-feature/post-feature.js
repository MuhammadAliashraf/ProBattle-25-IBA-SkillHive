import React from "react";
import BookStack from "../../assets/books_1546982.png";
import GlobalNetwork from "../../assets/global-network_17872521.png";
import Tag from "../../assets/tag_9470619.png";
import Idea from "../../assets/idea-development_18055395.png";
const PosFeatures = () => {
  const featureItems = [
    {
      id: 1,
      img: BookStack,
      heading: "Structured Learning, Made Easy",
      desc: `Easily organize resources into collections for step-by-step learning. No more scattered notes—everything stays in one place!`,
    },
    {
      id: 2,
      img: GlobalNetwork,
      heading: "Share Knowledge, Empower Others",
      desc: `Create public collections to share your expertise or explore others' curated resources to level up your skills.`,
    },
    {
      id: 3,
      img: Tag,
      heading: " Find Exactly What You Need",
      desc: `Search collections by skill, topic, or creator to discover valuable tutorials, templates, and guides in seconds.`,
    },
    {
      id: 4,
      img: Idea,
      heading: "Learn, Adapt & Grow",
      desc: `Fork and customize collections to create your own personalized learning experience. Keep evolving with SkillSwap!`,
    },
  ];
  return (
    <>
      <div className="container mx-auto py-20" id="features">
        <div className="flex flex-col justify-center items-center gap-3 py-4">
          <p className="m-0 p-0 text-red-600 text-center  font-bold">
            Organize, Share & Learn with SkillSwap Collections
          </p>
          <h1
            className=" text-black font-bold sm:w-[65%]  leading-snug text-center"
            style={{ fontSize: "clamp(20px, 4vw,45px)" }}
          >
            Why Collections Matter?
          </h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {featureItems.map((item) => (
            <div className=" shadow-xl px-4 py-20  bg-white rounded-md">
              <img src={item.img} alt="" className=" mb-4 rounded-md w-10" />
              <h1 className="font-bold text-black text-lg mb-2">
                {item.heading}
              </h1>
              <p className="text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default PosFeatures;
