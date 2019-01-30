import fn from '../src/204';

test(`${fn.name} --- 10 --- 4`, () => {
  expect(fn(10)).toBe(4);
});

test(`${fn.name} --- 11 --- 4`, () => {
  expect(fn(11)).toBe(4);
});

test(`${fn.name} --- 2 --- 0`, () => {
  expect(fn(2)).toBe(0);
});

test(`${fn.name} --- 999983 --- 78497`, () => {
  expect(fn(999983)).toBe(78497);
});
