import {SolarAge} from '../src/js/SolarAge.js'

describe("SolarAge", () => {
  let solarAge;
  beforeEach(() => {
    solarAge = new SolarAge(18, 80);
  });
  test("It will take an age (integer) and a persons life expectancy and store it in an object.", () => {
    expect(solarAge).toEqual({years:18, death:80});
  });
  test("It will return the age in Earth earth years. It will also return the years to live.", () => {
    expect(solarAge.getEarthAge()).toEqual('Your age on Earth is 18. You have 62 years to live.');
  });
  test("It will return the age in Mercury years. It will also return the years to live.", () => {
    expect(solarAge.getMercuryAge()).toEqual('Your age on Mercury is 75. You have 258 years to live.'); 
  });
  test("It will return the age in Venus years. It will also return the years to live", () => {
    expect(solarAge.getVenusAge()).toEqual('Your age on Venus is 29. You have 100 years to live.')
  });
  test("It will return the age in Mars years. It will also return the years to live", () => {
    expect(solarAge.getMarsAge()).toEqual('Your age on Mars is 9. You have 33 years to live.')
  });
});