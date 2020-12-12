// 冒泡
function bubbleSort(arr){
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length - i - 1; j++){
            if(arr[j] > arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr;
}

// 选择
function selectionSort(arr){
    for(let i = 0; i < arr.length; i++){
        let minIndex = i;
        for(let j = i + 1; j < arr.length; j++){
            if(arr[j] < arr[minIndex]){
                minIndex = j;
            }
        }
        if(minIndex !== i){
            let temp = arr[minIndex];
            arr[minIndex] = arr[i];
            arr[i] = temp;
        }
    }
    return arr;
}

// 插入
function insertionSort(arr){
    for(let i = 1; i < arr.length; i++){
        let current = arr[i];
        let j = i - 1;
        while(j >= 0 && current < arr[j]){
            arr[j+1] = arr[j];
            j--;
        }
        arr[j+1] = current;
    }
    return arr;
}

// 快排
function partition(arr, left, right){
    let pivot = arr[left];
    while(left < right){
        while(left < right && pivot < arr[right]){
            right--;
        }
        arr[left] = arr[right];
        while(left < right && pivot > arr[left]){
            left++;
        }
        arr[right] = arr[left];
    }
    arr[left] = pivot;
    return left;
}

function quickSort(arr, left=0, right=arr.length-1){
    if(left < right){
        let pivot = partition(arr, left, right);
        quickSort(arr, left, pivot - 1);
        quickSort(arr, pivot + 1, right);
    }
    return arr;
}

const arr = [7,5,3,9,2,1,17,4];
// console.log(bubbleSort(arr));
// console.log(selectionSort(arr));
// console.log(insertionSort(arr));
console.log(quickSort(arr));