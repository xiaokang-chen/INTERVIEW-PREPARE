// 单指针
function sortColors(nums){
    let swapIndex = 0;
    for(let i = 0; i < nums.length; i++){
        if(nums[i] === 0){
            // let temp = nums[i];
            // nums[i] = nums[swapIndex];
            // nums[swapIndex] = temp;
            [nums[i], nums[swapIndex]] = [nums[swapIndex], nums[i]];
            swapIndex++;
        }
    }
    for(let i = 0; i < nums.length; i++){
        if(nums[i] === 1){
            // let temp = nums[i];
            // nums[i] = nums[swapIndex];
            // nums[swapIndex] = temp;
            [nums[i], nums[swapIndex]] = [nums[swapIndex], nums[i]];
            swapIndex++;
        }
    }
    return nums;
}

// 双指针（p0，p1）
function sortColors2(nums){
    let p0 = 0;
    let p1 = 0;
    for(let i = 0; i < nums.length; i++){
        if(nums[i] === 1){
            [nums[i], nums[p1]] = [nums[p1], nums[i]];
            p1++;
        }else if(nums[i] === 0){
            [nums[i], nums[p0]] = [nums[p0], nums[i]];
            if(p0 !== p1){
                [nums[i], nums[p1]] = [nums[p1], nums[i]];
            }
            p0++;
            p1++;
        }
    }
    return nums;
}

// 双指针（p0, p2）
function sortColors3(nums){
    let p0 = 0;
    let p2 = nums.length - 1;
    for(let i = 0; i < p2; i++){
        while(i < p2 && nums[i] === 2){
            [nums[i], nums[p2]] = [nums[p2], nums[i]];
            p2--;
        }
        if(nums[i] === 0){
            [nums[i], nums[p0]] = [nums[p0], nums[i]];
            p0++;
        }
    }
    return nums;
}

let arr = [2,0,2,1,1,0];
console.log(sortColors3(arr));