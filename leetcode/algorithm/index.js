// 1.回溯法
/**
 * 八皇后问题
 * 
 * 思路：思路是按行来规定皇后，第一行放第一个皇后，第二行放第二个，
 * 然后通过遍历所有列，来判断下一个皇后能否放在该列。直到所有皇后都
 * 放完，或者放哪都不行。第一个皇后先放第一行第一列，然后第二个皇后
 * 放在第二行第一列、然后判断是否OK，然后第二列、第三列、依次把所有
 * 列都放完，找到一个合适继续第三个皇后，还是第一列、第二列……直到第
 * 8个皇后也能放在一个不冲突的位置，算是找到了一个正确解。然后回头继
 * 续第一个皇后放第二列，后面继续循环……
 */
const max = 8;
const resArray = new Array(max);
let count = 0;

function check(n){
    if(n === max){
        // print();
        count++;
        return;
    }

    for(let i = 0; i < max; i++){
        resArray[n] = i;
        if(judge(n)){
            check(n+1);
        }
    }
}

function judge(n){
    for(let i = 0; i < n; i++){
        // 判断是否在同一列或同一斜线
        if(resArray[i] === resArray[n] || Math.abs(n-i) === Math.abs(resArray[n] - resArray[i])){
            return false;
        }
    }
    return true;
}

// function print(){
//     console.log("第" + count + '种方法：' + resArray);
//     resArray = new Array(max);
// }

// check(0);
// console.log('总数：',count);


/******************************************排序******************************* */

// 测试数组初始化
const array = [3,44,38,5,47,15,36,26,27,2];
const array2 = [3,44,38,5,47,15,36,26,27,2,8,
                12,46,175,24,4,19,50,48,105,108,
                1,6,34,66,88,45,100
            ];


/**
 * 一、冒泡排序
 * @param {*} arr 
 */


//1. 简单版
function bubbleSort(arr){
    for(let i = 0; i < arr.length - 1; i++){
        for(let j = 0; j < arr.length-1-i; j++){
            if(arr[j] > arr[j+1]){
                let temp = arr[j+1];
                arr[j+1]= arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}

// 2. 进阶版
/**
 * 每一次循环都记录上一次排序的位置
 * 比如[1,13,6,8,15,16,18] -> [1,6,8,13,15,16,18]，
 * 在一轮排序后j=2，在这种情况下（后面大量元素已经排好了）
 * 下次循环只需要排1 6 8即可
 * 
 * 这个算法主要对数组末尾有大量已排好序元素进行优化
 */
function bubbleSort2(arr){
    let i = arr.length-1;
    while(i > 0){
        let pos = 0;
        for(let j = 0; j < i; j++){
            if(arr[j] > arr[j+1]){
                pos = j;
                let temp = arr[j+1];
                arr[j+1] = arr[j];
                arr[j] = temp;
            }
        }
        i = pos;
    }
    return arr;
}

// 3. 升级版
/**
 * 升级版可以每轮排序进行两次冒泡
 * 正向冒泡找出最大值，反向冒泡找出最小值
 */
//  function bubbleSort3(arr){
//     let [low, high, temp] = [0, arr.length-1];
//     let count = 0;
//     while(low < high){
//         // 两个相反方向的冒泡
//         let [pos1, pos2] = [0, 0];
//         for(let i = low; i < arr.length; i++){
//             if(arr[i] > arr[i+1]){
//                 pos1 = i;
//                 temp = arr[i];
//                 arr[i] = arr[i+1];
//                 arr[i+1] = temp;
//             }
//             count++;
//         }
//         high = pos1;
//         for(let j = high; j > 0; j--){
//             if(arr[j] < arr[j-1]){
//                 pos2 = j;
//                 temp = arr[j];
//                 arr[j] = arr[j-1];
//                 arr[j-1] = temp;
//             }
//             count++;
//         }
//         low = pos2;
//     }    
//     return [arr, count];
//  }


// console.log(bubbleSort(array2));     // 105次 406次
// console.log(bubbleSort2(array2));       // 77次  307次
// console.log(bubbleSort3(array2));    // 154次 307次


/**
 * 二、选择排序
 * @param {*} arr 
 */

function selectionSort(arr) {
    for(let i = 0; i < arr.length - 1; i++){
        let minIndex = i;
        for(let j = i + 1; j < arr.length; j++){
            if(arr[j] < arr[minIndex]){
                minIndex = j;
            }
        }
        if(minIndex !== i){
            let temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }
    }
    return arr;
}

// console.log(selectionSort(array2));


/**
 * 三、插入排序
 * @param {*} arr 
 */
function insertionSort(arr){
    for(let i = 1; i < arr.length; i++){
        let j = i-1;
        let key = arr[i];
        while(j >= 0 && key < arr[j]){
            arr[j+1] = arr[j];
            j--;
        }
        arr[j+1] = key;
    }
    return arr;
}


// 二分查找插入
function binaryInsertionSort(arr){
    for(let i = 1; i < arr.length; i++){
        let [left, right] = [0, i-1];
        let key = arr[i];
        while(left <= right){
            let middle = (left + right) >> 1;
            if(key < arr[middle]){
                right = middle - 1;
            }else{
                left = middle + 1;
            }
        }

        for(let j = i - 1; j >= left; j--){
            arr[j+1] = arr[j];
        }
        arr[left] = key;
    }
    return arr;
}

// console.log(binaryInsertionSort(array2));

/**
 * 四、希尔排序
 * @param {} arr 
 */
function shellSort(arr){
    let d = arr.length;
    while(d > 1){
        d = Math.floor(d/2);
        for(let i = 0; i < d; i++){
            
//             内层插入排序（插入排序也是从1开始的，这里从d开始）
            for(let j = i + d; j < arr.length; j += d){
//                 temp用于保存交换元素，相当于插入排序的key
                let key = arr[j];
                let k = j - d;    // 从key的前一个点开始
//                 在排好序的序列中寻找插入点
                while(k >= 0 && arr[k] > key){
                    arr[k + d] = arr[k];
                    k -= d;
                }
//                 同理，最后将点插入到对应位置
                arr[k+d] = key;
            }
        }
    }
    return arr;
}

// console.log(shellSort(array));

/**
 * 五、归并排序
 * @param {*} arr 
 */
function mergeSort(arr){
    if(arr.length < 2){
        return arr;
    }
    let middle = Math.floor(arr.length/2);
    let left = arr.slice(0, middle);
    let right = arr.slice(middle);
    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right){
    let result = [];
    while(left.length && right.length){
        if(left[0] < right[0]){
            result.push(left.shift());
        }else{
            result.push(right.shift());
        }
    }

    while(left.length){
        result.push(left.shift());
    }
    while(right.length){
        result.push(right.shift());
    }
    return result;
}

console.log(mergeSort(array));