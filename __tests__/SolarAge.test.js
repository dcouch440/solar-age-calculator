import {SolarAge} from '../src/js/SolarAge.js'

describe("SolarAge", () => {
  let age;
  beforeEach(() => {
    age = new SolarAge(18);
  });
  test("It will take an age (integer) and store its value in an object", () => {
    expect(age.earth).toEqual(18);
  })
})