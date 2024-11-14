/* calculateEmissions.js
 * Author: Jack Burton
 *
 * Purpose: Produce emissions in metric tons CO2 per pound for
 * each protein category.
*/


// Emission factors for each food item in kgCO2e/lb
export const EMISSION_FACTORS = {
        beef: 45.14,
        chicken: 4.81,
        pork: 6.00,
        tofu: 1.54,
        lamb: 19.38,
        cheese: 11.65,
        fish: 6.65,
        milk: 1.54,
        rice: 2.17,
        peas: 0.48, 
        nuts: 0.21,
      };
      
      // Function to calculate total emissions based on quantities
      export const calculateTotalEmissions = (quantities) => {
        return Object.entries(quantities).reduce((total, [key, value]) => {

          return total + (EMISSION_FACTORS[key] || 0) * value;
        }, 0);
      };
      