export class SolarAge {
  constructor(age){
    this.years = age;
  }
  getEarthAge() {
    return this.years;
  }
  getMercuryAge() {
    return this.years / .24;
  }
}