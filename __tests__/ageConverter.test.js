import {ageConverter} from '../src/js/utils.js';

describe('ageConverter', () => {
  test("It will divide a given value by a given value. In this case, a float which is being used as a rate", () => {
    expect(ageConverter(18, 0.24)).toEqual(75);
  });
});

