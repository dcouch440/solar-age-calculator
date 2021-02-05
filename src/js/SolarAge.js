import * as utils from './utils.js';

export class SolarAge {
  constructor(years, death){
    this.years = years;
    this.death = death;
  }
  getEarthAge() {
    const {years, death} = this;
    return `Your age on Earth is ${years}. You have ${death - years} years to live.`;
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
    const age = Math.floor(years / 1.88);
    const adjustedDeath = Math.floor(death / 1.88 - age);
    return `Your age on Mars is ${age}. You have ${adjustedDeath} years to live.`;
  }
  getJupiterAge() {
    const {years, death} = this;
    const age = Math.floor(years / 11.86);
    const adjustedDeath = Math.floor(death / 11.86 - age);
    return `Your age on Jupiter is ${age}. You have ${adjustedDeath} years to live.`;
  }
}