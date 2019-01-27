/**
 * Given a non-empty array of integers, every element appears twice except for one.
 * Find that single one.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
function singleNumber(nums) {
  return nums.reduce((a, b) => a ^ b); // 两次「异或」相互抵消
}
// function singleNumber(nums) {
//   const map = new Map();
//   nums.forEach(num => {
//     if (map.has(num)) map.delete(num);
//     else map.set(num, true);
//   });
//   return map.keys().next().value;
// }

export default singleNumber;
