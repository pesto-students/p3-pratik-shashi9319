//https://leetcode.com/submissions/detail/765760513/
var isValid = function (s) {
  const hashMap = {
    "(": ")",
    "{": "}",
    "[": "]",
  };
  const stack = [];
  for (let ch of s) {
    if (hashMap[ch]) {
      stack.push(hashMap[ch]);
    } else if (stack.length > 0 && stack[stack.lenght - 1] === ch) {
      stack.pop();
    } else {
      return false;
    }
  }
  return stack.length === 0;
};
