// 这种写法适合找特定的数字，但是数字不在序列中的时候不会返回“插入点”
let binarySearch = function(target, arr){
    let [left, right] = [0, arr.length-1];
    while(left <= right){
        let middle = (left + right) >> 1;
        if(arr[middle] < target){
            left = middle + 1;
        }else if(arr[middle] > target){
            right = middle - 1;
        }else{
            return middle;
        }
    }
    return -1;
}

// 这种写法主要用于插入点的寻找，即在序列中未找到target时，可以返回一个“插入点”
// 但是这种情况有个缺陷，它返回的是[left, right)左开右闭的下界，
// 即最后右侧的right是取不到的，比如对[2,5,8,9]传入一个target=10，
// 最后left==right，都等于3，等于不到4。
let binarySearch2 = function(target ,arr){
    let [left, right] = [0, arr.length-1];
    while(left < right){
        let middle = (left + right) >> 1;
        if(arr[middle] < target){
            left = middle + 1;
        }else {
            right = middle;
        }
    }
    return left;
}

console.log(binarySearch2(16, [2,5,8,9,10,15]));