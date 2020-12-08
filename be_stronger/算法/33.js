var search = function(nums, target) {
    if(nums.length === 1){
        return nums[0] === target ? 0 : -1;
    }
    let left = 0;
    let right = nums.length - 1;
    while(left <= right){
        let mid = (left + right) >>> 1;
        if(nums[mid] === target){
            return mid;
        }
        // 如果递增区间在mid左侧(需要把等于的情况也包含进去！！！！)
        if(nums[mid] >= nums[0]){
            // 如果nums[0] <= target < nums[mid]
            if(nums[0] <= target && target < nums[mid]){
                right = mid - 1;
            }else {
                left = mid + 1;
            }
        }else{
            // 如果nums[mid] < target <= nums[nums.length -1](等于的情况在外边已经处理了)
            if(nums[mid] < target && target <= nums[nums.length - 1]){
                left = mid + 1;
            }else{
                right = mid - 1;
            }
        }
    }
    return -1;
}

// const arr = [5, 1, 3];
const arr = [3, 1];
console.log(search(arr, 1));