// Array.prototype.myReduce = function(fn, initValue){
//     const arr = this;
//     if(initValue){
//         arr.unshift(initValue);
//     }
//     let acc = 0;
//     for(let i = 0; i < arr.length; i++){
//         acc = fn(acc, this[i], i, this);
//     }
//     return acc;
// }

Array.prototype.myReduce = function (fn, initialValue) {
    const array = this
    let acc = initialValue || array[0]
    const startIndex = initialValue ? 0 : 1
    for (let i = startIndex; i < array.length; i++) {
      acc = fn(acc, array[i], i, array)
    }
    return acc
}

function flatArr(arr){
    return arr.myReduce((prev, currentValue) => {
        return [...prev, ...Array.isArray(currentValue) ? flatArr(currentValue) : [currentValue]];
    }, []);
}

const arr = [[1, [2, 3], [4, 5, 6]], 7, 8];
console.log(flatArr(arr));

// let arr = [1,2,3,4,5];
// console.log(arr.myReduce((acc, currentValue) => {return acc + currentValue}, 10));
