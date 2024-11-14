/* App.js
 * Author: Jack Burton
 *
 * Purpose: Details the research for carbon emission calculations.
*/

import React from "react";

function Sources() {
  return (
    <div className="parent-container">
      <h2>Sources/paper? to go here</h2>
      <p>The data EcoBite uses to calculate the impact of each food type comes from the 2018 study done by Poore and Nemecek which represents 38,7000 commercial farms in 119 countries, ultimately representing 90% of global protein and calorie intake. The impact is calculated in kilograms of carbon equivalent emitted per pound of each food based on land use change, on farm impacts, animal feed, food processing, transport, and packaging. This means that non-carbon gasses are weighted by the amount of warming they cause over a 100-year time scale (CO2eq over 100 years per gas = GWP (compared to CO2) * Time (years)). </p>
    </div>
  );
}

export default Sources;
