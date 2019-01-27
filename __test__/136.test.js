import fn from '../src/136';

test(`${fn.name} --- [2,2,1] --- 1`, () => {
  expect(fn([2, 2, 1])).toBe(1);
});

test(`${fn.name} --- [4,1,2,1,2] --- 4`, () => {
  expect(fn([4, 1, 2, 1, 2])).toBe(4);
});
