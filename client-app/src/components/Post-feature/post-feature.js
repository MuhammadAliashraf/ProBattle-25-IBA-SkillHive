import React from 'react';
const PosFeatures = () => {
  const featureItems = [
    {
      id: 1,
    //   img: Layer45,
      heading: 'Suitable For All Types of Businesses',
      desc: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
      Placeat quam ea numquam, temporibus quae doloremque enim totam cumque sint.`,
    },
    {
      id: 2,
    //   img: Layer46,
      heading: 'Cost Effective With  Affordable Price',
      desc: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
      Placeat quam ea numquam, temporibus quae doloremque enim totam cumque sint.`,
    },
    {
      id: 3,
    //   img: Layer47,
      heading: 'Easy to Setup & No IT  knowledge Need',
      desc: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
      Placeat quam ea numquam, temporibus quae doloremque enim totam cumque sint.`,
    },
    {
      id: 4,
    //   img: Layer48,
      heading: 'Modern & Attractive  User Dashboard',
      desc: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
      Placeat quam ea numquam, temporibus quae doloremque enim totam cumque sint.`,
    },
  ];
  return (
    <>
      <div className="container mx-auto py-20" id='features'>
        <div className="flex flex-col justify-center items-center gap-3 py-4">
          <p className="m-0 p-0 text-red-600 text-center  font-bold">
            Grow Your Business With Index POS
          </p>
          <h1 className=" text-black font-bold sm:w-[65%]  leading-snug text-center" style={{ fontSize: "clamp(20px, 4vw,45px)" }}>
            Delightfully Simple And Deceptively Our Point of Sale System
          </h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {featureItems.map((item) => (
            <div className=" shadow-xl px-4 py-20  bg-white rounded-md">
              <img
                src={item.img}
                alt=""
                className=" mb-4 rounded-md"
              />
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
