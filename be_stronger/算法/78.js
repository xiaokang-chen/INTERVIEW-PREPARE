function subsets(nums){
    const res = [];
    function helper(i, path){
        res.push(path);
        for(let j = i; j < nums.length; j++){
            // concat和push的区别在于
            // concat不会改变原数组，而push会改变原数组
            helper(j+1, path.concat(nums[j]));
        }
    }
    helper(0, []);
    return res;
}

let nums = [1,2,3];
console.log(subsets(nums));