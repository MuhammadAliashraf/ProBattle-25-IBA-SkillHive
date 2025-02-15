import Card from "components/Card/card";
import React from "react";

function Collections(props) {
  const Data = [
    {
      name: "Alice Cooper",
      handle: "@AliceCooper",
      title: "Senior Web Developer",
      emoji: "👩‍💻",
    },
    {
      name: "Bob Marley",
      handle: "@BobMarley",
      title: "Music Producer",
      emoji: "🎶",
    },
    {
      name: "Charlie Brown",
      handle: "@CharlieBrown",
      title: "Creative Director",
      emoji: "🎨",
    },
    {
      name: "David Smith",
      handle: "@DavidSmith",
      title: "Digital Marketer",
      emoji: "📈",
    },
    {
      name: "Eva Green",
      handle: "@EvaGreen",
      title: "UX/UI Designer",
      emoji: "💻",
    },
  ];
  return (
    <>
      <div className="flex flex-wrap">
        {Data.map((user, index) => (
          <Card
            key={index}
            name={user.name}
            handle={user.handle}
            title={user.title}
            emoji={user.emoji}
          />
        ))}
      </div>
    </>
  );
}

export default Collections;
