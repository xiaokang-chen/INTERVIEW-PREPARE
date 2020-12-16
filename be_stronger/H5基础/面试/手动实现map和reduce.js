// IIFE是为了防止对全局作用域污染
// 比如全局作用域下已经有一个selfMap变量，如果没有IIFE，selfMap"函数"就会覆盖它
(function(){
    let selfMap = function(fn, context){  
        let arr = [].slice.call(this);  
        // 遍历调用者
        let arrMap = [];
        for(let i = 0; i < arr.length; i++){
            // 防止稀疏数组
            if(!arr.hasOwnProperty(i)){
                continue;
            }
            // context默认为undefined，fn的调用者默认即为window
            // callback(currentValue, index, array)
            arrMap.push(fn.call(context, arr[i], i , this));
        }
        return arrMap;
    }
    let selfReduce = function(fn, initialValue){
        let arr = [].slice.call(this);
        if(arguments.length === 2){
            // 如果有初始值，则压入数组的头部
            arr.unshift(initialValue);
        }
        // 初始值
        let res = arr[0];
        for(let i = 1; i < arr.length; i++){
            // 防止稀疏数组
            if(!arr.hasOwnProperty(i)){
                continue;
            }
            res = fn(res, arr[i], i, this);
        }
        // callback(accumulator, currentValue, index, array)
        // 其中accumulator代表当前元素之前计算的和
        return res;
    }
    Array.prototype['selfMap'] = selfMap;
    Array.prototype['selfReduce'] = selfReduce;
})();

let array = [1,2,3,4,5];

let thinArr = new Array(10);
let res1 = array.selfMap((currentValue) => {return currentValue*2});
let res2 = array.selfReduce((accumulator, currentValue) => {return accumulator + currentValue});
console.log(res1);
console.log(res2);