/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  const arr = [
    "",
    "",
    "abc",
    "def",
    "ghi",
    "jkl",
    "mno",
    "pqrs",
    "tuv",
    "wxyz",
  ];
  const res = [];
  if (digits.length === 0) {
    return res;
  }
  function back_track(remain, path) {
    if (remain.length === 0) {
      res.push(path);
      return;
    }
    let str = arr[Number(remain[0])];
    for (let i = 0; i < str.length; i++) {
      path += str[i];
      back_track(remain.slice(1, remain.length), path);
      path = path.slice(0, -1);
    }
  }
  back_track(digits, "");
  return res;
};

const a = "23";
console.log(letterCombinations(a));
