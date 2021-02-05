import {deathConverter} from '../src/js/utils.js'

describe('deathConverter', () => {
  test("It should take three arguments and find if its value is negative or positive. It should return two different values depending on such. In addition to that it will return the value it used to calculate that.", () =>{
    expect(deathConverter(18, 1, 80)).toEqual('You have 62 years to live.');
    expect(deathConverter(1, 0.24, 0)).toEqual('You lived 4 years past expected!');
  });
});