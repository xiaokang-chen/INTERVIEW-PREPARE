function deepcopy(obj){
  // 对基本类型进行处理
}

console.log(deepcopy({"a":1, "b":{"b2":2, "b3": [3]}, "c":/a|b/, "d": new Date, "e":[1,2,{3:3, 4:4}, 5]}));