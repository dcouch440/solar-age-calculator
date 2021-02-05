import {SolarAge} from '../src/js/SolarAge.js'

describe("SolarAge", () => {
  let solarAge;
  beforeEach(() => {
    solarAge = new SolarAge(18, 80);
  });
  test("It will take an age (integer) and a persons life expectancy and store it in an object", () => {
    expect(solarAge).toEqual({years:18, death:80});
  });
  test("It will return the age in Earth earth years", () => {
    expect(solarAge.getEarthAge()).toEqual('Your age on earth is 18. You have 62 years to live.');
  });
  test("It will return the age in Mercury years", () => {
    expect(solarAge.getMercuryAge()).toEqual(75);
  });
});