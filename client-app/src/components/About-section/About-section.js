import React from "react";
// import BackgroundImage from '../../assets/Rectangle32.png';
// style={{ backgroundImage: `url(${BackgroundImage})` }}

const AboutIndexPos = () => {
  const AboutItem = [
    {
      id: 1,
      heading: "Inventory Management",
      desc: `Lorem, ipsum dolor sit amet consectetur adipisicing elit.Quidem, reiciendis praesentium architecto
      `,
    },
    {
      id: 2,
      heading: "Sales & Payment Process",
      desc: `Lorem, ipsum dolor sit amet consectetur adipisicing elit.Quidem, reiciendis praesentium architecto
      `,
    },
    {
      id: 3,
      heading: "Report and Analysis",
      desc: `Lorem, ipsum dolor sit amet consectetur adipisicing elit.Quidem, reiciendis praesentium architecto
      `,
    },
    {
      id: 4,
      heading: "Secure Fast Transaction",
      desc: `Lorem, ipsum dolor sit amet consectetur adipisicing elit.Quidem, reiciendis praesentium architecto
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
              About <span className="text-red-700">Index POS</span>
            </h1>
            <p className="mt-4 text-black text-center text-lg md:w-[80%] mx-auto">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
              autem optio similique? Ipsa sunt aliquam quia atque dolor dicta
              consequuntur mollitia repellat deserunt, numquam corrupti
              distinctio accusamus saepe asperiores, harum ad amet commodi
              inventore, recusandae porro delectus similique et dignissimos.
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
