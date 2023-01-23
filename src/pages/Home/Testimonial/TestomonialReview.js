import React from "react";

const TestomonialReview = ({ data }) => {
  const { img, name, address, describe } = data;
  return (
    <div className="card  bg-base-100  mb-24 shadow-xl">
      <div className="card-body">
        <p>{describe}</p>
      </div>
      <div className="flex justify-start ml-6 items-center mb-9 gap-2 ">
        <div className="avatar">
          <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 w-16">
            <img src={img} className="" />
          </div>
        </div>
        <div>
          <p>{name}</p>
          <p>{address}</p>
        </div>
      </div>
    </div>
  );
};

export default TestomonialReview;
