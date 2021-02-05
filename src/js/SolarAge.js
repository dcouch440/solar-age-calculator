export class SolarAge {
  constructor(years, death){
    this.years = years;
    this.death = death;
  }
  getEarthAge() {
    const {years, death} = this;
    return `Your age on Earth is ${years}. You have ${death - years} years to live.`
  }
  getMercuryAge() {
    return this.years / .24;
  }
}