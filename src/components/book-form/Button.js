import React from "react";

const Button = ({ morning, afternoon, evening }) => {
  return (
    <div>
      <button className="btns2">{morning}</button>
      <button className="btns2">{afternoon}</button>
      <button className="btns2">{evening}</button>
    </div>
  );
};

export default Button;
