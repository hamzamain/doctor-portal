import React from "react";
import img from "../../../assets/images/appointment.png";
import PrimaryButton from "../../../Components/PrimaryButton/PrimaryButton";

const ContactUs = () => {
  const styles = { background: `url(${img})` };
  return (
    <div className="text-center p-16" style={styles}>
      <div>
        <h4
          className="font-bold text-xl text-primary
        mb-2"
        >
          Contact Us
        </h4>
        <h2 className="text-3xl mb-10 text-white">Stay connected with us</h2>
      </div>
      <div>
        <input
          type="email"
          placeholder="Email Address"
          className="input input-bordered mb-4 w-3/5"
        />
        <br />
        <input
          type="text"
          placeholder="Subject"
          className="input input-bordered mb-4 w-3/5"
        />
        <br />
        <textarea
          className="textarea textarea-bordered mb-9 w-3/5"
          placeholder="Your Message"
        ></textarea>
        <br />
        <PrimaryButton>Submit</PrimaryButton>
      </div>
    </div>
  );
};

export default ContactUs;
