import * as utils from './utils.js';

export class SolarAge {
  constructor(years, death){
    this.years = years;
    this.death = death;
  }
  getEarthAge() {
    const {years, death} = this;
    const rate = 1;
    const age = utils.ageConverter(years, rate);
    const adjustedDeath = utils.deathConverter(years, rate, death);
    return `Your age on Earth is ${age}. ${adjustedDeath}`;
  }
  getMercuryAge() {
    const {years, death} = this;
    const rate = 0.24;
    const age = utils.ageConverter(years, rate);
    const adjustedDeath = utils.deathConverter(years, rate, death);
    return `Your age on Mercury is ${age}. ${adjustedDeath}`;
  }
  getVenusAge() {
    const {years, death} = this;
    const rate = 0.62;
    const age = utils.ageConverter(years, rate);
    const adjustedDeath = utils.deathConverter(years, rate, death);
    return `Your age on Venus is ${age}. ${adjustedDeath}`;
  }
  getMarsAge() {
    const {years, death} = this;
    const rate = 1.88;
    const age = utils.ageConverter(years, rate);
    const adjustedDeath = utils.deathConverter(years, rate, death);
    return `Your age on Mars is ${age}. ${adjustedDeath}`;
  }
  getJupiterAge() {
    const {years, death} = this;
    const rate = 11.86;
    const age = utils.ageConverter(years, rate);
    const adjustedDeath = utils.deathConverter(years, rate, death);
    return `Your age on Jupiter is ${age}. ${adjustedDeath}`;
  }
}