import React from "react";
import chair from "../../../assets/images/chair.png";
import PrimaryButton from "../../../Components/PrimaryButton/PrimaryButton";

const Banner = () => {
  const customStyle = {
    background: `url(${chair})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    width: "100%",
    height: "838px",
  };
  return (
    <div className="hero w-full mx-auto">
      <div className="bg-white opacity-5" style={customStyle}></div>
      <div className="hero-content justify-between flex-col lg:flex-row-reverse mx-7">
        <img src={chair} className="lg:max-w-sm rounded-lg shadow-2xl" />
        {/* multibrand workshop ltd; */}
        <div>
          <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <PrimaryButton>Get Started</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default Banner;
