export class SolarAge {
  constructor(years, death){
    this.years = years;
    this.death = death;
  }
  getEarthAge() {
    return this.years;
  }
  getMercuryAge() {
    return this.years / .24;
  }
}