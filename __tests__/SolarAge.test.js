import {SolarAge} from '../src/js/SolarAge.js'

describe("SolarAge", () => {
  let age;
  beforeEach(() => {
    age = new SolarAge(18);
  });
  test("It will take an age (integer) and store its value in an object", () => {
    expect(age.earth).toEqual(18);
  });
  test("It will return the age in Earth earth years", () => {
    expect(age.getEarthAge()).toEqual(18);
  });
  test("It will return the age in Mercury years", () => {
    expect(age.getMercuryAge()).toEqual(75);
  });
});