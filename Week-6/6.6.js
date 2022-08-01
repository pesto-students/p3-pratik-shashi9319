var threeSumClosest = function (nums, target) {
  nums.sort((a, b) => a - b);
  let min = Infinity;
  for (let i = 0; i < nums.length; i++) {
    let left = i + 1,
      right = nums.length - 1;
    while (left < right) {
      let sum = nums[i] + nums[left] + nums[right];
      if (Math.abs(sum - target) < Math.abs(min - target)) min = sum;
      if (sum > target) {
        right--;
      } else {
        left++;
      }
    }
  }
  return min;
};

var nums = [-1, 2, 1, -4];

var target = 1;

console.log(
  "The sum that is closest to the target is " + threeSumClosest(nums, target)
); // The sum that is closest to the target is 2
