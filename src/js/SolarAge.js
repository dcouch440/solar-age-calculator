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
    const age = Math.floor(years / 0.24);
    const adjustedDeath = Math.floor(death / 0.24 - age);
    return `Your age on Mercury is ${age}. You have ${adjustedDeath} years to live.`;
  }
  getVenusAge() {
    const {years, death} = this;
    const age = Math.floor(years / 0.62);
    const adjustedDeath = Math.floor(death / 0.62 - age);
    return `Your age on Venus is ${age}. You have ${adjustedDeath} years to live.`;
  }
  getMarsAge() {
    const {years, death} = this;
    const age = Math.floor(years / 1.88);
    const adjustedDeath = Math.floor(death / 1.88 - age);
    return `Your age on Mars is ${age}. You have ${adjustedDeath} years to live.`;
  }
  getJupiterYears() {
    const {years, death} = this;
    const age = Math.floor(years / 11.86);
    const adjustedDeath = Math.floor(death / 11.86 - age);
    return `Your age on Jupiter is ${age}. You have ${adjustedDeath} years to live.`;
  }
}