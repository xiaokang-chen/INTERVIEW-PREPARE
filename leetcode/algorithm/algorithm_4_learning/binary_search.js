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

// 最后，low大于high，而middle
let binarySearch2 = function(target ,arr){
    let [low, high, middle] = [0, arr.length-1];
    while(low < high){
        middle = (low + high) >> 1;
        if(arr[middle] > target){
            left = middle + 1;
        }else {
            right = middle;
        }
    }
    return left;
}

console.log(binarySearch(9, [2,5,8,9,10,15]));