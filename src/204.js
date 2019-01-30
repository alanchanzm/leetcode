/**
 * Count the number of prime numbers less than a non-negative number, n.
 */

/**
 * @param {number} n
 * @return {number}
 */
function countPrimes(n) {
  // 特殊处理，为了递增 j 的时候少进行一次判断
  if (n < 3) return 0;

  const result = [2];

  for (let i = 3; i < n; i += 2) {
    if (isPrime(i)) result.push(i);
  }

  return result.length;

  function isPrime(k, primes = result) {
    let i = 0;
    let a = primes[i];
    const limit = Math.sqrt(k);

    while (a <= limit) {
      // 只需验证是否能被素数整除
      if (k % a === 0) return false;
      i += 1;
      a = primes[i];
    }
    return true;
  }
}

export default countPrimes;
