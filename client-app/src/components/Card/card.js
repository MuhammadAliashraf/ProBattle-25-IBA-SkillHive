import React from "react";
import "./card.css";

const Card = ({ name, handle, title, emoji }) => {
  return (
    <div className="card">
      <div className="content">
        <div className="name">{name}</div>
        <div className="handle">{handle}</div>
        <div className="title">
          <span className="emoji">{emoji}</span> {title}
        </div>
      </div>
      <div className="dots orange-dots"></div>
      <div className="dots pink-dots"></div>
    </div>
  );
};

export default Card;
