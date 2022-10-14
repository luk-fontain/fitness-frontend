import React from "react";
import { useState } from "react";

export function BookingBtn() {
  const [isSelected, setIsSelected] = useState(true);
  const btnClick = () => {
    setIsSelected(!isSelected);
  };

  const buttonStyle = isSelected
    ? { backgroundColor: "white", color: "black" }
    : { backgroundColor: "green", color: "white" };

  return (
    <>
      <button className="table-button" style={buttonStyle} onClick={btnClick}>
        {isSelected ? "Frei" : "Gebucht"}
      </button>
    </>
  );
};

<div id="root"></div>;
