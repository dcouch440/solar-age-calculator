import {SolarAge} from '../src/js/SolarAge.js'

describe("SolarAge", () => {
  let solarAge;
  beforeEach(() => {
    solarAge = new SolarAge(18, 80);
  });
  test("It will take an age (integer) and store its value in an object", () => {
    expect(solarAge).toEqual({years:18, death:80});
  });
  test("It will return the age in Earth earth years", () => {
    expect(solarAge.getEarthAge()).toEqual(18);
  });
  test("It will return the age in Mercury years", () => {
    expect(solarAge.getMercuryAge()).toEqual(75);
  });
});