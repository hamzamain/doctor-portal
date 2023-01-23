import React from "react";
import Banner from "../Banner/Banner";
import ContactUs from "../ContactUs/ContactUs";
import InfoCards from "../InfoCards/InfoCards";
import MakeAppointment from "../MakeAppointment/MakeAppointment";
import Testimonial from "../Testimonial/Testimonial";
import Tritment from "../Tritment/Tritment";
import ServicesCards from "./ServicesCards/ServicesCards";

const Home = () => {
  return (
    <div className="mx-5">
      <Banner></Banner>
      <InfoCards></InfoCards>
      <ServicesCards></ServicesCards>
      <Tritment></Tritment>
      <MakeAppointment></MakeAppointment>
      <Testimonial></Testimonial>
      <ContactUs></ContactUs>
    </div>
  );
};

export default Home;
