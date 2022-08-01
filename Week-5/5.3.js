const hasDuplicate = (array) => {
  const numberSet = new Set();
  for (let num of array) {
    if (numberSet.has(num)) {
      return true;
    }
    numberSet.add(num);
  }
  return false;
};
const array1 = [1, 5, -1, 4];
console.log(array1, hasDuplicate(array1));
const array2 = [2, 4, 2, 8];
console.log(array2, hasDuplicate(array2));
