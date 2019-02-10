import fn from '../src/046';

test(`${fn.name} --- [1,2,3] --- ans`, () => {
  const result = [
    [1, 2, 3],
    [1, 3, 2],
    [2, 1, 3],
    [2, 3, 1],
    [3, 1, 2],
    [3, 2, 1]
  ];
  expect(fn([1, 2, 3]).sort()).toEqual(result.sort());
});
