/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function search(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = (left + right) >> 1;
    if (target === nums[mid]) return mid;

    // 判断左侧是否有序
    if (nums[left] <= nums[mid]) {
      // 判断目标是否在左侧
      if (nums[left] <= target && target < nums[mid]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else if (nums[mid] < target && target <= nums[right]) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
}

export default search;
