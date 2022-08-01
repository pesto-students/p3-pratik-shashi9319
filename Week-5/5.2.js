function vowelCount(word) {
  let result = word.match(/[aeiou]/gi);
  count = result.length;
  let vowelCountMap = new Map();
  for (let i = 0; i < count; i++) {
    vowelCountMap.set(result[i], i + 1);
  }
  console.log(vowelCountMap);
  return vowelCountMap;
}

vowelCount("this has been great day for us");
