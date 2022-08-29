import React from "react";

function Dots({ activeIndex, onclick, sliderImage }) {
  return (
    <div className="all-dots">
      {sliderImage.map((_, index) => (
        <span
          key={index}
          className={`${activeIndex === index ? "dot active-dot" : "dot"}`}
          onClick={() => onclick(index)}
        ></span>
      ))}
    </div>
  );
}

export default Dots;