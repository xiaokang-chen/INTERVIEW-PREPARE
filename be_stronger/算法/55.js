function canJump(nums){
    // 最远能到达的索引值
    let k = 0;
    for(let i = 0; i < nums.length; i++){
        // 如果当前索引位置超过了最大可达位置，则说明当前索引位不可达，那么后续无需再看
        if(i > k){
            return false;
        }
        k = Math.max(k, i + nums[i]);
    }
    return true;
}

const arr = [2,3,1,1,4];
console.log(canJump(arr));