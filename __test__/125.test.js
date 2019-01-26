import fn from '../src/125';

test(`${fn.name} --- "0A man, a plan, a canal: Panama0" --- true`, () => {
  expect(fn('0A man, a plan, a canal: Panama0')).toBe(true);
});

test(`${fn.name} --- "race a car" --- false`, () => {
  expect(fn('race a car')).toBe(false);
});

test(`${fn.name} --- "" --- true`, () => {
  expect(fn('')).toBe(true);
});
