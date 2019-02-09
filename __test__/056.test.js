import fn from '../src/056';
import { genIntervals } from '../util/interval';

const intervals1 = genIntervals([[1, 3], [2, 6], [8, 10], [15, 18]]);
const result1 = genIntervals([[1, 6], [8, 10], [15, 18]]);
const intervals2 = genIntervals([[1, 4], [4, 5]]);
const result2 = genIntervals([[1, 5]]);

test(`${fn.name} --- params --- ans`, () => {
  expect(fn(intervals1)).toEqual(result1);
});
test(`${fn.name} --- params --- ans`, () => {
  expect(fn(intervals2)).toEqual(result2);
});
