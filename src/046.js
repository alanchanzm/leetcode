/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function permute(nums) {
  const N = nums.length;
  if (!N) return [];

  let current = [[nums[0]]]; // 一个数的全排列等于自身

  for (let i = 1; i < N; i += 1) {
    const next = [];
    // 在已有的全排列基础上加一个数
    // 等于在每种排列的每一个位置上插入该数
    // [[1]] ---> [[2,1],[1,2]]
    // [[2,1],[1,2]] ---> [[3,2,1],[2,3,1],[2,1,3],[3,1,2],[1,3,2],[1,2,3]]
    current.forEach(p => {
      for (let j = 0; j <= p.length; j += 1) {
        next.push(p.slice(0, j).concat(nums[i], p.slice(j)));
      }
    });
    current = next;
  }

  return current;
}

export default permute;
