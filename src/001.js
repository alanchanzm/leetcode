/**
 * Given an array of integers,
 * return indices of the two numbers such that they add up to a specific target.
 * You may assume that each input would have exactly one solution,
 * and you may not use the same element twice.
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSum(nums, target) {
  const map = new Map();
  let result;

  for (let i = 0; i < nums.length; i += 1) {
    const rest = target - nums[i];
    if (map.has(rest)) {
      result = [map.get(rest), i];
      break;
    }
    map.set(nums[i], i);
  }

  return result;
}

export default twoSum;
