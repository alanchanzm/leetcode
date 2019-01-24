import threeSum from '../src/015';

test(`threeSum([-1, 0, 1, 2, -1, -4]) should be [[-1, 0, 1], [-1, -1, 2]]`, () => {
  expect(threeSum([-1, 0, 1, 2, -1, -4]).sort()).toEqual(
    [[-1, 0, 1], [-1, -1, 2]].sort()
  );
});
