/* SliderComponent.js
 * Author: Jack Burton
 *
 * Purpose: Builds quantity sliders for each protein category.
*/

import React from "react";

function SliderComponent({ label, value, onChange, min, max, step }) {
  return (
    <div className="slider-item">
      <span>{label}: {value} lbs</span>
      <input
        type="range"
        className="clean-slider-input"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      <br></br>
    </div>
  );
}

export default SliderComponent;
