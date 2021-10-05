import React, { useState, useEffect } from "react";
import rgbToHex from "./utli";
const SingleColor = ({ rgb, weight, index }) => {
  const [alert, setalert] = useState(false);
  const bcg = rgb.join(",");
  console.log(bcg);
  const Hex = rgbToHex(...rgb);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setalert(false);
    }, 1000);

    return () => clearTimeout(timeout);
  }, [alert]);
  const handleClick = () => {
    setalert(true);
    navigator.clipboard.writeText(Hex);
  };
  return (
    <div
      className="col-4 col-md-2 align-items-center d-flex justify-content-center"
      id={`${index > 4 && "color-light"}`}
      onClick={handleClick}
      style={{ backgroundColor: `rgb(${bcg})`, height: "170px" }}
    >
      <div className="">
        <p className="">{weight}%</p>
        <p>{Hex}</p>
        {alert && <p> copied to clipboard </p>}
      </div>
    </div>
  );
};

export default SingleColor;
