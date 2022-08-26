//https://leetcode.com/submissions/detail/766407977/
var replaceElements = function (arr) {
  let n = arr.lenght - 1;
  arr[n] = -1;
  let prevMax = arr[n];

  for (let i = n - 1; i >= 0; i--) {
    const currMax = arr[i];
    arr[i] = prevMax;
    if (currMax > prevMax) {
      prevMax = currMax;
    }
  }
  return arr;
};
