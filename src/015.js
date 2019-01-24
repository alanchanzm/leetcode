/**
 * Given an array nums of n integers,
 * are there elements a, b, c in nums
 * such that a + b + c = 0?
 * Find all unique triplets in the array which gives the sum of zero.
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function threeSum(nums) {
  const N = nums.length;
  let result = [];

  // 数组从小到大排列
  nums.sort((a, b) => a - b);

  // 先假定一个数
  let point = 0;
  // point >= N-2 时，不足3个数
  // nums[point] > 0 时，sum必大于0
  while (point < N - 2 && nums[point] <= 0) {
    const target = -nums[point];
    let left = point + 1;
    let right = N - 1;

    while (left < right) {
      const twoSum = nums[left] + nums[right];

      // 相等即为一组解
      if (twoSum === target) {
        result = [...result, [nums[point], nums[left], nums[right]]];
      }

      // 移动 right 指针
      if (twoSum >= target) {
        right = ifSameThenMove(right, -1);
      }
      // 移动 left 指针
      if (twoSum <= target) {
        left = ifSameThenMove(left, 1);
      }
    }

    // 移动 point 指针
    point = ifSameThenMove(point, 1);
  }
  return result;

  function ifSameThenMove(i, step, arr = nums) {
    do {
      i += step;
    } while (arr[i] === arr[i - step]);
    return i;
  }
}

export default threeSum;
