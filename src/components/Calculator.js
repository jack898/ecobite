/* Calculator.js
 * Author: Jack Burton
 *
 * Purpose: Calculate and store emissions per pound of each protein category.
*/

import React, { useState } from "react";
import { calculateTotalEmissions } from './calculateEmissions';
import SliderComponent from './SliderComponent';
import Breakdown from './Breakdown';

// Constants for step size and min/max quantities of each protein
const STEP_SIZE = 0.1;
const MIN_VALUE = 0;
const MAX_VALUE = 15;

function Calculator() {
  // Initializing quantities to 0
  const [quantities, setQuantities] = useState({
    beef: 0, chicken: 0, pork: 0, milk: 0, cheese: 0, rice: 0, fish: 0, 
    beans: 0, nuts: 0, tofu: 0, lamb: 0,
  });

  // Initially hiding detailed breakdown
  const [showBreakdown, setShowBreakdown] = useState(false);

  // Handles quantity changes for any items
  const handleSliderChange = (type, value) => {
    setQuantities({ ...quantities, [type]: parseFloat(value) });
  };

  // Limit total emissions to one decimal place
  const totalEmissions = calculateTotalEmissions(quantities).toFixed(1)

  // Emissions equivalents for easier understanding
  // See Research for sources for these factors.
  const milesEquiv = (totalEmissions / 0.400).toFixed(0); // result in miles
  const laptopHrsEquiv = (totalEmissions / (0.07 / 8)).toFixed(0); // result in hours



  return (
    <div className="parent-container calculator-container">
      <div className="child-box">
        <h3>Options</h3>
        {/* Creates quantity sliders for each protein category */}
        {Object.keys(quantities).map((key) => (
          <SliderComponent
            key={key}
            label={key.charAt(0).toUpperCase() + key.slice(1)}
            value={quantities[key]}
            onChange={(value) => handleSliderChange(key, value)}
            min={MIN_VALUE}
            max={MAX_VALUE}
            step={STEP_SIZE}
          />
        ))}
      </div>


      <div className="child-box">
        {/* Displays total and detailed breakdowns of emissions */}
        <h2>{totalEmissions}</h2>
        <h6><i>Kilograms CO₂e/week</i></h6>
        <h4>This is the equivalent of...</h4>
        <p>Driving {milesEquiv} miles in the average gasoline car.</p>
        <p>Using a desktop computer for {laptopHrsEquiv} hours.</p>
        <button onClick={() => setShowBreakdown(!showBreakdown)} className="basic-button">
          See Detailed Breakdown
        </button>
        {showBreakdown && <Breakdown quantities={quantities} />}
        <p><i>See Sources tab for more information.</i></p>
      </div>
    </div>
  );
}

export default Calculator;
