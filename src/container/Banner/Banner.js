/** @format */

import React from "react";
import Imgh from "../../Assets/Banner.png";

export default function Banner() {
  return (
    <div
      style={{
        backgroundImage: `url(${Imgh})`,
        width: "100%",
        height: "462px",
      }}
    ></div>
  );
}
