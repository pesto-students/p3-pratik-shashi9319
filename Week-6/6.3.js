function sort(array) {
  let n = array.length;
  let temp;
  let i = 1;
  while (i < n - 1) {
    for (let index = 0; index < n; index++) {
      if (array[index + 1] < array[index]) {
        temp = array[index + 1];
        array[index + 1] = array[index];
        array[index] = temp;
      }
    }
    i++;
  }
  console.log(array);
}
//https://leetcode.com/submissions/detail/759905332/
