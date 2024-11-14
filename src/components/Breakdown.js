/* Breakdown.js
 * Author: Jack Burton
 *
 * Purpose: Show detailed breakdown of emissions per protein category
*/

import React from "react";
import { EMISSION_FACTORS } from "./calculateEmissions";


function Breakdown({ quantities }) {
  return (
    <div>
      {Object.entries(quantities).map(([key, value]) => {
        const emissions = (EMISSION_FACTORS[key] || 0) * value; // Calculate emissions
        return (
          <p key={key}>
            {key.charAt(0).toUpperCase() + key.slice(1)}: {emissions.toFixed(1)} kgCO₂e
          </p>
        );
      })}
    </div>
  );
}

export default Breakdown;