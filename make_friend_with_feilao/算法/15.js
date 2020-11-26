// 排序+双指针
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  const res = [];
  nums.sort((a, b) => a - b);
  // 如果同号，没有结果
  if (nums[0] * nums[nums.length - 1] > 0) {
    return res;
  }
  for (let i = 0; i < nums.length - 2; i++) {
    // 去重（如果当前的首选值和前一次一样，则向后移）
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }
    let j = i + 1;
    let k = nums.length - 1;
    while (j < k) {
      const sum = nums[i] + nums[j] + nums[k];
      if (sum < 0) {
        j++;
        while (j < k && nums[j] === nums[j - 1]) {
          j++;
        }
      } else if (sum > 0) {
        k--;
        while (j < k && nums[k] === nums[k + 1]) {
          k--;
        }
      } else {
        res.push([nums[i], nums[j], nums[k]]);
        j++;
        k--;
        while (j < k && nums[j] === nums[j - 1]) {
          j++;
        }
        while (j < k && nums[k] === nums[k + 1]) {
          k--;
        }
      }
    }
  }
  return res;
};

const nums = [-1, 0, 1, 2, -1, -4];
console.log(threeSum(nums));
