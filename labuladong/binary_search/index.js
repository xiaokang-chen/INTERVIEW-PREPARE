// 标准二分查找写法
// function binarySearch(nums, target) {
//   if (nums.length === 0) return -1;
//   let left = 0;
//   let right = nums.length - 1;
//   while (left <= right) {
//     let mid = (left + right) >>> 1;
//     if (nums[mid] === target) {
//       return mid;
//     } else if (nums[mid] < target) {
//       left = mid + 1;
//     } else if (nums[mid] > target) {
//       right = mid - 1;
//     }
//   }
//   return -1;
// }

// console.log(binarySearch([1, 2, 3, 4, 4, 6], 4));

// 寻找左侧边界的二分查找
// function left_bound(nums, target) {
//   if (nums.length === 0) return -1;
//   let left = 0;
//   let right = nums.length - 1;
//   while (left <= right) {
//     let mid = (left + right) >>> 1;
//     if (nums[mid] === target) {
//       right = mid - 1;
//     } else if (nums[mid] < target) {
//       left = mid + 1;
//     } else if (nums[mid] > target) {
//       right = mid - 1;
//     }
//   }
//   if (left >= nums.length || nums[left] !== target) return -1;
//   return left;
// }

// console.log(left_bound([1, 1, 2, 2, 3, 4, 5], 2));

// 寻找右边界的二分查找
function right_bound(nums, target) {
  if (nums.length === 0) return -1;
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    let mid = (left + right) >>> 1;
    if (nums[mid] === target) {
      left = mid + 1;
    } else if (nums[mid] > target) {
      right = mid - 1;
    } else if (nums[mid] < target) {
      left = mid + 1;
    }
  }
  if (right < 0 || nums[right] !== target) return -1;
  return right;
}

console.log(right_bound([1, 1, 2, 2, 3, 4, 5], 2));
