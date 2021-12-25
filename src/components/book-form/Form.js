import React from "react";
import Button from "./Button";

import "./form.scss";

const time = [
  {
    Day: "Monday",

    time: {
      morning: "8:00 am",
      afternoon: " 12:30 pm",
      evening: "4: 00 pm",
    },
  },
  {
    Day: "Tuesday",

    time: {
      morning: "9:10 am",
      afternoon: " 1:30 pm",
      evening: "3: 00 pm",
    },
  },
  {
    Day: "Tuesday",

    time: {
      morning: "11:00 am",
      afternoon: " 2:00 pm",
      evening: "4: 30 pm",
    },
  },
];

const Form = () => {
  return (
    <div>
      <h3>Book Ticket</h3>
      <div className="tickets">
        {time.map((data) => {
          return (
            <Button
              morning={data.time.morning}
              afternoon={data.time.afternoon}
              evening={data.time.evening}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Form;
