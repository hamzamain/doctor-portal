import React from "react";
import tritment from "../../../assets/images/treatment.png";
import PrimaryButton from "../../../Components/PrimaryButton/PrimaryButton";

const Tritment = () => {
  return (
    <div className="hero mx-auto mb-24">
      <div className="hero-content flex-col lg:flex-row justify-between gap-12 px-10">
        <img src={tritment} className="rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-5xl font-bold mb-3">
            Exceptional Dental Care, on Your Terms
          </h1>
          <p className=" mb-3">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <PrimaryButton>Get Tritment</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default Tritment;
