class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
      let  str = s.replace(/[^a-zA-Z0-9]/g, "");
  str = str.toLowerCase();
  let left = 0,
    right = str.length - 1;
  // console.log(str, right, left, str[left], str[right]);

  while (left < right) {
    if (str[left] !== str[right]) return false;

    left++;
    right--;
  }
  return true;
    }
}
