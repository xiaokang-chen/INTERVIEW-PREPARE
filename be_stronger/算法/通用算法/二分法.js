// 标准二分法
function binarySearch(nums, target){
    if(nums.length == 1){
        return -1;
    }
    let left = 0;
    let right = nums.length - 1;
    while(left <= right){
        let mid = (left + right) >>> 1;
        if(target === nums[mid]){
            return mid;
        }else if(target < nums[mid]){
            right = mid - 1;
        }else if(target > nums[mid]){
            left = mid + 1;
        }
    }
    return -1;
}

// console.log(binarySearch([1,2,3,4,5,6,6,7,8], 6))

// 寻找左边界的二分查找
function left_bound(nums, target){
    if(nums.length === 1){
        return -1;
    }
    let left = 0;
    let right = nums.length - 1;
    while(left <= right){
        let mid = (left + right) >>> 1;
        if(target === nums[mid]){
            right = mid - 1;
        }else if(target < nums[mid]){
            right = mid -1;
        }else if(target > nums[mid]){
            left = mid + 1;
        }
    }
    if(left >= nums.length || nums[left] !== target) return -1;
    return left;
}

// console.log(left_bound([1,2,3,4,5,6,6,7,8], 6))


function right_bound(nums, target){
    if(nums.length === 1) {
        return -1;
    }
    let left = 0;
    let right = nums.length - 1;
    while(left <= right){
        let mid = (left + right) >>> 1;
        if(target === nums[mid]){
            left = mid + 1;
        }else if(target > nums[mid]){
            left = mid + 1;
        }else if(target < nums[mid]){
            right = mid - 1;
        }
    }
    if(right < 0 || nums[right] !== target) return -1;
    return right;
}

// console.log(right_bound([1,2,3,4,5,6,6,7,8], 6))
