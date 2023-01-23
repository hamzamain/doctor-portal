import React from "react";
import clock from "../../../assets/icons/clock.svg";
import marker from "../../../assets/icons/marker.svg";
import phohe from "../../../assets/icons/phone.svg";
import InfoCard from "./InfoCard";

const InfoCards = () => {
  const cardData = [
    {
      id: 1,
      title: "Opening Hours",
      discription: "Lorem Ipsum is simply dummy text of the pri",
      icon: clock,
      bgColor: "bg-gradient-to-r from-primary to-secondary",
    },
    {
      id: 2,
      title: "Visit our location",
      discription: "Brooklyn, NY 10036, United States",
      icon: marker,
      bgColor: "bg-accent",
    },
    {
      id: 3,
      title: "Contact us now",
      discription: "+000 123 456789",
      icon: phohe,
      bgColor: "bg-gradient-to-r from-primary to-secondary",
    },
  ];
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 mx-auto justify-center">
      {cardData.map((data) => (
        <InfoCard data={data} key={data.id}></InfoCard>
      ))}
    </div>
  );
};

export default InfoCards;
