var findMidianSortedArrays = function(nums1, nums2) {
    // {
    //     // 1. 合并数组，然后用sort重新排序排序
    //     let arr = [...nums1, ...nums2].sort((a, b) => a-b);
    //     let {length} = arr;
    //     return length % 2 ? arr[Math.floor(length/2)] : (arr[length/2-1] + arr[length/2])/2;
    //     // sort函数在数据量少的时候采用冒泡，数据量多的时候插入排序
    //     // 所以时间复杂度为O((m+n)log(m+n))
    // }

    // {
    //     // 2. 双指针排序法（暴力解法），时间复杂度为O（m+n）
    //     for(let [i, j] = [nums1.length-1, nums2.length-1]; i >= 0; i--){
    //         while(nums1[i] <= nums2[j] && j > -1){
    //             nums1.splice(i+1, 0, ...(nums2.splice(j--, 1)));
    //         }
    //     }
    //     // 防止一开始就有一个数组为空
    //     let arr = nums2.concat(nums1);
    //     const {length} = arr;
    //     return length % 2 ? arr[Math.floor(length/2)] : (arr[length/2-1] + arr[length/2])/2;
    // }

    {
        // 暴力解法的另一种写法
        let [m, n] = [nums1.length, nums2.length];
        // 创建一个容量为m+n的数组
        let nums = new Array(m+n);
        if(m === 0){
            return n % 2 === 0 ? (nums2[n/2-1] + nums2[n/2])/2 : nums2[Math.floor(n/2)];
        }
        if(n === 0){
            return m % 2 === 0 ? (nums1[m/2-1] + nums1[m/2])/2 : nums1[Math.floor(m/2)];
        }
        let [i, j, count] = [0, 0, 0];
        while(count !== m+n){
            // 当nums1已经走到头
            if(i === m){
                // nums2还没走到头，将nums2剩余的元素插入到最终数组
                while(j !== n){
                    nums[count++] = nums2[j++];
                }
                // 全部插入后一定要退出整个循环(不然还会在下面进行逻辑判断)
                break;
            }

            // 同理，当nums2走到头
            if(j === n){
                while(i !== m){
                    nums[count++] = nums1[i++];
                }
                break;
            }

            // 如果i和j都还没有走到尽头，则比较大小，将小的插入
            if(nums1[i] < nums2[j]){
                nums[count++] = nums1[i++];
            }else{
                nums[count++] = nums2[j++];
            }
        }

        return count % 2 === 0 ? (nums[count/2-1] + nums[count/2])/2 : nums[Math.floor(count/2)]; 
    }

    // {
    //     // 3. 二分查找法，时间复杂度O(log(min(m, n)))
    //     if(nums1.length > nums2.length) {
    //         [nums1, nums2] = [nums2, nums1];
    //     }
    //     // length1 > length2
    //     const length1 = nums1.length;
    //     const length2 = nums2.length;
    //     let min = 0;
    //     let max = length1;
    //     let middle = Math.floor((length1 + length2 + 1) / 2);
    //     while(min <= max) {
    //         let i = Math.floor((max+min)/2);
    //         let j = middle - 1;
    //         if(i > min && nums1[i-1] > nums2[j]){

    //         }
    //     }
    // }
}

console.log(findMidianSortedArrays([1,3,6,8,10,13],
    [2,12,48,100,102,138,158]));