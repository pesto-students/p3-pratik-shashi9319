/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function (n, trust) {
  if (n == 1 && trust.length == 0) {
    return 1;
  }
  let iTrust = {};
  let otherTrust = {};
  let townJudge = -1;
  for (let i = 0; i < trust.length; i++) {
    let trustee = trust[i][0];
    let trusted = trust[i][1];
    iTrust[trustee] = iTrust[trustee]
      ? iTrust[trustee].concat(trusted)
      : [trusted];
    otherTrust[trusted] = otherTrust[otherTrust]
      ? otherTrust[trusted].concat(trustee)
      : [trustee];
  }
  let keyArray = Object.keys(otherTrust);
  for (let i = 0; i < keyArray.length; i++) {
    let current = keyArray[i];
    if (
      otherTrust[current] &&
      otherTrust[current].length == n - 1 &&
      !iTrust[current]
    ) {
      townJudge = current;
    }
  }
  return townJudge;
};
