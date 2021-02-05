import '../css/styles.css';
import {SolarAge} from './SolarAge.js';
import * as ui from './ui.js';

document.addEventListener(
  "DOMContentLoaded", () => {
    const output = document.getElementById('output');

    document.getElementById('submit').addEventListener(
      'click', () => {
        const dropDownValue = document.getElementById('options').value;
        const age = document.getElementById('age').value;
        const death = document.getElementById('death').value;
        const solarAge = new SolarAge(age, death);
        output.innerHTML = ui.valueDistributor(dropDownValue, solarAge);
      });
  }
);
