/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function searchRange(nums, target) {
  const starting = find();
  const ending = ~starting ? find(false) : starting; // 若 head === -1，就不需要再找右边界了
  return [starting, ending];

  /**
   * @param {boolean} findStarting 标记寻找左边界还是右边界
   */
  function find(findStarting = true) {
    let left = 0;
    let right = nums.length - 1;
    let result = -1;
    while (left <= right) {
      const mid = (left + right) >> 1;
      if (target === nums[mid]) {
        result = mid;
        if (findStarting) right = mid - 1;
        else left = mid + 1;
        continue;
      }

      if (target > nums[mid]) left = mid + 1;
      else right = mid - 1;
    }

    return result;
  }
}

export default searchRange;
