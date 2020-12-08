var nextPermutation = function (nums) {
    if(nums.length <= 1){
        return;
    }
    let i = nums.length - 2;
    while(i >= 0 && nums[i] >= nums[i+1]){
        i--;
    }
    // 确保不是单调递减序列（这样的序列直接整体变为单挑递增返回）
    if(i >= 0){
        let j = nums.length - 1;
        while(j >= 0 && nums[i] >= nums[j]){
            j--;
        }
        [nums[i], nums[j]] = [nums[j], nums[i]];
    }
    // 从极大值起，其右侧变为递增序列
    let l = i + 1;
    let r = nums.length - 1;
    while(l < r){
        [nums[l], nums[r]] = [nums[r], nums[l]];
        l++;
        r--;
    }
    return nums;
};

let nums = [1, 2, 3, 8, 5, 7, 6, 4];
console.log(nextPermutation(nums));
