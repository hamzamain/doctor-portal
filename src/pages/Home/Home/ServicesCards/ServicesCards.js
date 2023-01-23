import React from "react";
import flurid from "../../../../assets/images/fluoride.png";
import cavity from "../../../../assets/images/cavity.png";
import whiting from "../../../../assets/images/whitening.png";
import ServiceCard from "./ServiceCard";

const ServicesCards = () => {
  const serviceData = [
    {
      id: 1,
      title: "Fluoride Treatment",
      describe:
        "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
      icon: flurid,
    },
    {
      id: 2,
      title: "Cavity Filling",
      describe:
        "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
      icon: cavity,
    },
    {
      id: 3,
      title: "Teeth Whitening",
      describe:
        "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
      icon: whiting,
    },
  ];
  return (
    <div className="text-center w-full mx-auto my-24">
      <div className="mb-14">
        <h3 className="text-primary text-xl font-bold mb-1">OUR SERVICES</h3>
        <h2 className="text-3xl">Services We Provide</h2>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
        {serviceData.map((data) => (
          <ServiceCard data={data} key={data.id}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default ServicesCards;
