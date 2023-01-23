import { format } from "date-fns";
import React from "react";
import { DayPicker } from "react-day-picker";
import chair from "../../../assets/images/chair.png";

const AppointmentBanner = ({ setSelectedDate, selectedDate }) => {
  const customStyle = {
    background: `url(${chair})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    width: "100%",
    height: "838px",
  };
  return (
    <header className="hero">
      <div className="bg-white opacity-5" style={customStyle}></div>
      <div>
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={chair}
            alt="dentist chair"
            className="rounded-lg shadow-2xl"
          />
          <div className="mr-6">
            <DayPicker
              mode="single"
              selected={selectedDate}
              onSelect={setSelectedDate}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default AppointmentBanner;
