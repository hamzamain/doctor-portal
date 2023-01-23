import React from "react";

const InfoCard = ({ data }) => {
  const { discription, title, icon, bgColor } = data;
  return (
    <div
      className={`card card-side bg-base-100 w-full shadow-xl ${bgColor} text-white px-6 justify-center items-center`}
    >
      <figure>
        <img src={icon} alt="Movie" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{discription}</p>
      </div>
    </div>
  );
};

export default InfoCard;
