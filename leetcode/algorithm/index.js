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