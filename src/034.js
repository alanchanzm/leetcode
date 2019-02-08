/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function searchRange(nums, target) {
  return [find(), find(false)];

  function find(low = true, arr = nums) {
    let left = 0;
    let right = arr.length - 1;
    let result = -1;
    while (left <= right) {
      const mid = (left + right) >> 1;
      if (target === arr[mid]) {
        result = mid;
        if (low) right = mid - 1;
        else left = mid + 1;
        continue;
      }

      if (target > arr[mid]) left = mid + 1;
      else right = mid - 1;
    }

    return result;
  }
}

export default searchRange;
