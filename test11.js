// function changeArr(arr){
//     let hash = {};
//     for(let i = 0; i < arr.length; i++){
//         if(!(arr[i] in hash)){
//             hash[arr[i]] = 1;
//         }else{
//             hash[arr[i]] += 1;
//             arr[i] += hash[arr[i]];
//         }
//     }
//     return arr;
// }

// let arr = ['zhangsan', 'lisi', 'zhangsan', 'wangwu', 'zhangsan'];
// console.log(changeArr(arr));

function getTable(names, values){
    const res = [];
    for(let i = 0; i < values.length; i++){
        let obj = {};
        for(let j = 0; j < values[i].length; j++){
            obj[names[j]] = values[i][j];
        }
        res.push(obj);
    }
    return res;
}

const names = ['a', 'b', 'c'];
const values = [['a1', 'b1', 'c1'], ['a2', 'b2', 'c2']];
console.log(getTable(names, values));