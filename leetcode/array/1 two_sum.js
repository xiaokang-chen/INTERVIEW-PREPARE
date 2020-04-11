/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    if(nums.length < 2) return [];
    // {
    //     // 1. 借助map
    //     let map = new Map();
    //     for(let i = 0; i < nums.length; i++){
    //         // 如果map中含有当前数字的减数，则返回结果[减数索引, 当前索引]
    //         if(map.has(target-nums[i])){
    //             return [map.get(target-nums[i]), i];
    //         }
    //         // 如果map中没有，则把当前元素及其索引添加到map中
    //         map.set(nums[i], i);
    //     }
    //     return [];
    // }
    {
        // 2. 借助array
        let arr = [];   // 该数组数值为索引，与arr互为反数组
        for(let i = 0; i < nums.length; i++){
            // 如果数组中有当前元素的减数，则返回
            if(arr[target-nums[i]] !== undefined){
                return [arr[target-nums[i]], i];
            }
            // 如果不在数组中，则将其值作为索引插入数组
            // 比如第一个2，将其插入：[empty,empty,0]，即第2个位置的为0（与原数组颠倒）
            arr[nums[i]] = i;
        }
        return [];
    }
};

console.log(twoSum([2,7,11,15], 9));



/***********************************************************************************
 * 总结：利用Array或Map，来将原数组中元素的索引保存下来（这一步很关键）。Array是通过“索引位
 *      置”去存储值，通过值去存储索引；Map是通过键值对去存储值和索引（这个比较直观）
 */

