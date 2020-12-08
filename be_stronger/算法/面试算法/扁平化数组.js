function flatArr(arr){
    const res = [];
    function flat(item){
        if(item.length === 0){
            return;
        }
        for(let i = 0; i < item.length; i++){
            // 如果不是数组，直接Push到结果
            if(!(item[i] instanceof Array)){
                res.push(item[i]);
            }else{
                flat(item[i]);
            }
        }
    }
    flat(arr);
    return res;
}

const arr = [[1, [2, 3], [4, 5, 6]], 7, 8];
console.log(flatArr(arr));