import React from "react";
import quate from "../../../assets/icons/quote.svg";
import people1 from "../../../assets/images/people1.png";
import people2 from "../../../assets/images/people2.png";
import people3 from "../../../assets/images/people3.png";
import TestomonialReview from "./TestomonialReview";

const Testimonial = () => {
  const TestomonialData = [
    {
      id: 1,
      describe:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      img: people1,
      name: "Winson Herry",
      address: "California",
    },
    {
      id: 2,
      describe:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      img: people2,
      name: "Winson Herry",
      address: "California",
    },
    {
      id: 3,
      describe:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      img: people3,
      name: "Winson Herry",
      address: "California",
    },
  ];
  return (
    <section>
      <div className="flex justify-between items-center mb-10">
        <div>
          <h3 className="text-xl font-bold text-primary">Testimonial</h3>
          <h1 className="text-3xl">What Our Patients Says</h1>
        </div>
        <img src={quate} alt="" className="lg:w-48 w-24" />
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
        {TestomonialData.map((data) => (
          <TestomonialReview data={data} key={data.id}></TestomonialReview>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
