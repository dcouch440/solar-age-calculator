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
    const age = Math.floor(years / .24);
    const adjustedDeath = Math.floor(death / .24 - age);
    return `Your age on Mercury is ${age}. You have ${adjustedDeath} years to live.`;
  }
  
}