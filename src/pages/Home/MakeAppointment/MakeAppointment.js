import React from "react";
import doctor from "../../../assets/images/doctor.png";
import img from "../../../assets/images/appointment.png";
import PrimaryButton from "../../../Components/PrimaryButton/PrimaryButton";

const MakeAppointment = () => {
  //   const styles = {
  //     background: `url(${img})`,
  //   };
  return (
    <section
      className="mt-32 mb-24"
      style={{
        background: `url(${img})`,
      }}
    >
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={doctor}
            alt=""
            className="-mt-24 hidden md:block lg:block lg:w-1/2"
          />
          <div className="">
            <h3 className="text-primary font-bold mb-3">Appointment</h3>
            <h1 className="text-4xl text-white font-semibold">
              Make an appointment Today
            </h1>
            <p className="py-6 text-white text-xs">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsumis that it has a more-or-less normal
              distribution of letters,as opposed to using 'Content here, content
              here', making it look like readable English. Many desktop
              publishing packages and web page
            </p>
            <PrimaryButton>Appointment</PrimaryButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MakeAppointment;
