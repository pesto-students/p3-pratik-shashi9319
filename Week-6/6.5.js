const pairWithDiff = (arr, diff) => {
  arr = arr.sort((a, b) => a - b);
  let arrLength = arr.length;

  if (arrLength < 2) {
    throw "not enough elements for subtraction";
  }
  if (arrLength >= 2) {
    for (let i = 0; i < arrLength; i++) {
      if (arr.indexOf(arr[i] + diff) >= 0) {
        return 1;
      }
    }
  }
  return 0;
};

// const A = [5, 10, 3, 2, 50, 80];
// const B = 78;
const A = [-10, 20];
const B = 30;

try {
  console.log(pairWithDiff(A, B));
} catch (err) {
  console.error(err);
}
