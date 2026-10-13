class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        let left, right;
  let result = [];
  nums = nums.sort((a, b) => a - b);
  //   console.log(nums);
  for (let i = 0; i < nums.length; i++) {
    left = i + 1;
    right = nums.length - 1;
    if (i === 0 || nums[i] !== nums[i - 1]) {
      while (left < right) {
        if (nums[i] + nums[left] + nums[right] == 0) {
          result.push([nums[i], nums[left], nums[right]]);
          (left++, right--);

          while (left < right && nums[left] === nums[left - 1]) left++;
          while (left < right && nums[right] === nums[right + 1]) right--;
        } else if (nums[left] + nums[right] + nums[i] < 0) {
          left++;
        } else {
          right--;
        }
      }
    }
  }
  return result;
    }
}
