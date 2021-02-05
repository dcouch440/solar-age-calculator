import '../css/styles.css';
import {SolarAge} from './SolarAge.js';

const valueLogger = (value, solar) => {
  const currentValue = 
  {
    Earth: () =>  solar.getEarthAge(),
    Mercury: () => solar.getMercuryAge(),
    Venus: () => solar.getVenusAge(),
    Mars: () => solar.getMarsAge(),
    Jupiter: () => solar.getJupiterAge(),
    Default: () => null
  };
  return (currentValue[value]() || currentValue['Default']());
};
document.addEventListener("DOMContentLoaded", () => {
  const output = document.getElementById('output');
  
  document.getElementById('submit').addEventListener('click', () => 
  {
    const dropDownValue = document.getElementById('options').value;
    const age = document.getElementById('age').value;
    const death = document.getElementById('death').value;
    const solarAge = new SolarAge(age, death);
    output.innerHTML = valueLogger(dropDownValue, solarAge);
  });
});
