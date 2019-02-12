import React from "react";

const Timings = () => {
  const times = {
    Monday: "11:00AM - 9:00PM",
    Tuesday: "11:00AM - 9:00PM",
    Wedneday: "11:00AM - 9:00PM",
    Thursday: "11:00AM - 9:00PM",
    Friday: "11:00AM - 10:00PM",
    Saturday: "12:00AM - 10:00PM",
    Sunday: "12:00AM - 9:00PM"
  };

  let spans = [];

  for (let day in times) {
    spans.push(
      <div className="schedule__timings-row">
        <span className="day">{day}</span>
        <span className="time">{times[day]}</span>
      </div>
    );
  }

  return (
    <div className="schedule">
      <h5 className="schedule__heading">We are open</h5>
      <h5 className="schedule__subheading">7 days a week</h5>
      {/* <div className="schedule__timings"> */}
        {spans}
      {/* </div> */}
    </div>
  );
};

export default Timings;
