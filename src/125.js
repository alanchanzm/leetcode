/**
 * @param {string} s
 * @return {boolean}
 */
function isPalindrome(s) {
  const pureString = s.replace(/\W/g, '').toLowerCase();

  let left = 0;
  let right = pureString.length - 1;
  while (left < right) {
    if (pureString[left] === pureString[right]) {
      left += 1;
      right -= 1;
    } else {
      return false;
    }
  }
  return true;
}

export default isPalindrome;
