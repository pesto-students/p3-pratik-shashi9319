function maxSubArray(nums) {
  let max = -Infinity;
  let maxSumCount = 0;
  for (let i = 0; i < nums.length; i++) {
    maxSumCount = Math.max(nums[i], maxSumCount + nums[i]);
    max = Math.max(max, maxSumCount);
  }
  return max;
}
let arr = [4, -1, 2, 1];
maxSubArray(arr);

//https://leetcode.com/problems/maximum-subarray/submissions/
