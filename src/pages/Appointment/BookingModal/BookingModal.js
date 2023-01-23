import { format } from "date-fns/esm";
import React from "react";

const BookingModal = ({ selectedDate, treatment, setTreatment }) => {
  const date = format(selectedDate, "PP");
  const { name, slots } = treatment;
  console.log(treatment);
  const handleBooking = (e) => {
    e.preventDefault();
    const form = e.target;
    const userName = form.userName.value;
    const slot = form.slot.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const booking = {
      appointmentDate: date,
      treatment: name,
      patient: userName,
      slot,
      email,
      phone,
    };
    console.log(booking);
    setTreatment(null);
  };
  return (
    <>
      {/* Put this part before </body> tag */}
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">{name}</h3>
          <form
            onSubmit={handleBooking}
            className="grid grid-cols-1 gap-1 mt-10"
          >
            <input
              value={date}
              type="text"
              disabled
              className="input w-full input-bordered"
            />{" "}
            <br />
            <select name="slot" className="select select-bordered w-full ">
              {slots.map((slot, i) => (
                <option value={slot} key={i}>
                  {slot}
                </option>
              ))}
            </select>
            <br />
            <input
              type="text"
              name="userName"
              placeholder="Your Name"
              className="input w-full  input-bordered"
            />{" "}
            <br />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              className="input w-full  input-bordered"
            />{" "}
            <br />
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              className="input w-full  input-bordered"
            />{" "}
            <br />
            <input
              type="submit"
              value="Submit"
              className="lg:w-full  input-bordered btn-accent h-12 rounded-lg"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
