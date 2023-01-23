import React from "react";

const AppointmentOption = ({ option, setTreatment }) => {
  const { name, slots } = option;
  return (
    <div className="card shadow-xl text-center sm:mx-auth p-10">
      <div className="card-body">
        <h2 className="text-2xl font-bold text-secondary text-center mb-1">
          {name}
        </h2>
        <p className="">{slots.length > 0 ? slots[0] : "Try Another Day"}</p>
        <p className="mb-8">
          {slots.length} {slots.length > 1 ? "spaces" : "space"} available
        </p>
        <div className="card-actions justify-center ">
          <label
            disabled={slots.length === 0}
            onClick={() => setTreatment(option)}
            htmlFor="booking-modal"
            className="btn btn-secondary text-white"
          >
            open modal
          </label>
        </div>
      </div>
    </div>
  );
};

export default AppointmentOption;
