/* Sources.js
 * Author: Jack Burton
 *
 * Purpose: Details the research for carbon emission calculations.
*/

import React from "react";

function Sources() {
  return (
    <div className="text-box">
      <h2>Information</h2>
      <p>The data EcoBite uses to calculate the impact of each food type comes 
        from the 2018 study done by Poore and 
        Nemecek which represents 38,7000 commercial farms in 119 countries, 
        ultimately representing 90% of global protein and calorie intake. The impact 
        is calculated in kilograms of carbon equivalent emitted per pound of each 
        food based on land use change, on farm impacts, animal feed, food processing, 
        transport, and packaging. This means that non-carbon gasses are weighted by the 
        amount of warming they cause over a 100-year time scale 
        (CO2eq over 100 years per gas = GWP (compared to CO2) * Time (years)). 
      </p>
      <p>To simplify calculations, we assumed beef comes 100% from beef herds. In reality ~10% comes from dairy herds. This would slightly reduce true emissions for beef, but it would still remain the largest emitter by far.</p>
      <p>For the comparison metrics (miles driven by car and hours using a laptop), we used sources from the U.S. Environmental Protection Agency and the University of Oxford, respectively.
         From these sources, we found that the average passenger vehicle emits about 400g of CO2 per mile, and using a desktop computer for 8 hours results in emissions equivalent to 70g of CO2.
      </p>
      <h2>Sources</h2>
      <p>J. Poore, T. Nemecek ,Reducing food’s environmental impacts through producers and consumers. <i>Science</i> <b>360</b>, 987-992 (2018). DOI: <a href="https://doi.org/10.1126/science.aaq0216">10.1126/science.aaq0216</a></p>
      <p>Moreira, Ligia C et al. "Beef production from cull dairy cows: a review from culling to consumption." <i>Journal of animal science</i> vol. 99,7 (2021): skab192. DOI:<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC8281100/">10.1093/jas/skab192</a></p>
      <p>"Greenhouse Gas Emissions from a Typical Passenger Vehicle." <i>US EPA</i>, Environmental Protection Agency, June 2023, <a href="https://www.epa.gov/greenvehicles/greenhouse-gas-emissions-typical-passenger-vehicle">www.epa.gov/greenvehicles/greenhouse-gas-emissions-typical-passenger-vehicle.</a></p>
      <p>"Environmental Impact of IT: Desktops, Laptops and Screens." <i>IT Services</i>, University of Oxford, 13 Apr. 2022, <a href="https://www.it.ox.ac.uk/article/environment-and-it">www.it.ox.ac.uk/article/environment-and-it.</a> </p>
    </div>

  );
}

export default Sources;
