import {deathConverter} from '../src/js/utils.js';

describe('deathConverter', () => {
  test("It should return the years the person has to live and convert it to the solar age.", () =>{
    expect(deathConverter(18, 1, 80)).toEqual('You have 62 years to live.');
  });
  test("It should return an alternate sentence if the person is living past their expected life span", () => {
    expect(deathConverter(1, 0.24, 0)).toEqual('You lived 4 years past expected!');
  });
});