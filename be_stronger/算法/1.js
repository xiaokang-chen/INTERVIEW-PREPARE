var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length - 1; i++) {
    let sub = target - nums[i];
    for (let j = i + 1; j < nums.length; j++) {
      if (sub === nums[j]) {
        return [i, j];
      }
    }
  }
  return [-1, -1];
};

var twoSum1 = function (nums, target) {
  if (nums.length < 2) return [];
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    let sub = target - nums[i];
    if (map.has(sub)) {
      return [map.get(sub), i];
    } else {
      map.set(nums[i], i);
    }
  }
  return [];
};

var twoSum2 = function (nums, target) {
  if (nums.length < 2) return [];
  let obj = {};
  for (let i = 0; i < nums.length; i++) {
    let sub = target - nums[i];
    if (obj[sub] !== undefined) {
      return [obj[sub], i];
    } else {
      obj[nums[i]] = i;
    }
  }
  return [];
};

const arr = [2, 7, 11, 15];
const arr1 = [3, 2, 4];
const target = 6;
console.log(twoSum2(arr1, target));
