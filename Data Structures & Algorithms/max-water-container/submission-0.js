class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
         let left = 0,
    right = heights.length - 1;
  let width,
    height,
    area,
    maxArea = 0;
  while (left < right) {
    width = right - left;
    height = Math.min(heights[left], heights[right]);
    area = width * height;
    if (area > maxArea) {
      maxArea = area;
    }
    if (heights[left] < heights[right]) {
      left++;
    } else {
      right--;
    }
  }
  return maxArea;
    }
}
