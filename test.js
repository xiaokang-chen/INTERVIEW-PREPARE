// // 生成一个对象
// var xhr = new XMLHttpRequest();
// // 请求类型：get
// // 请求地址：/hello.json
// // true：异步方式
// // false：同步方式
// xhr.open("GET", "./hello.json", true);
// // 发送
// xhr.send();

// function LastRemaining_Solution(n, m) {
//   // write code here
//   // 模拟环
//   if (n <= 0) return -1;
//   let arr = new Array();
//   for (let i = 0; i < n; i++) {
//     arr[i] = i;
//   }
//   let index = -1;
//   while (arr.length > 1) {
//     index = (index + m) % arr.length;
//     arr.splice(index, 1);
//   }
//   return arr[0];
// }

// console.log(LastRemaining_Solution(11, 3)); // 7

// const promise1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("success");
//     console.log("resolved");
//   }, 1000);
// });
// const promise2 = promise1.then(() => {
//   throw new Error("error!!!");
// });

// console.log("promise1", promise1);
// console.log("promise2", promise2);

// setTimeout(() => {
//   console.log("promise1", promise1);
//   console.log("promise2", promise2);
// }, 2000);

// Promise.resolve(1)
//   .then((res) => {
//     console.log(res); // 输出1，并且将2传递到下一个then中（不过.then会起一个新的promise）
//     return 2;
//   })
//   .catch((err) => {
//     return 3;
//   })
//   .then((res) => {
//     console.log(res);
//   });

// .then和.catch中return一个error对象（只要不是promise值就都不会抛出错误）不会抛出错误，所以不会被后续的.catch捕获，直接进.then
// Promise.resolve()
//   .then(() => {
//     return new Error("error!!!");    // 等同于return promise.resolve(new Error("error!!!"))
//   })
//   .then((res) => {
//     console.log("then: ", res);
//   })
//   .catch((err) => {
//     console.log("catch: ", err);
//   });

// resolve和reject会将结果传递给.then和.catch中
// const promise = new Promise((resolve, reject) => {
//   resolve("success1");
//   // reject("error");
//   // resolve("success2");
// });

// promise
//   .then((res) => {
//     console.log("then: ", res);
//   })
//   .catch((err) => {
//     console.log("catch: ", err);
//   });

// .then和.catch返回的值不能是promise本身，否则会造成死循环
// const promise = Promise.resolve().then(() => {
//   return promise;
// });
// promise.catch(console.error);
// TypeError: Chaining cycle detected for promise #<Promise>   检测到promise陷入循环

// .then和.catch参数希望是函数，传入非函数会发生值穿透r
// Promise.resolve(1)
//   .then(2)
//   .then(Promise.resolve(3))
//   .then((res) => {
//     console.log(res); // resolve的值穿透到后面
//   });

// Promise.resolve()
//   .then(
//     function success1(res) {
//       throw new Error("error");
//     },
//     function fail1(e) {
//       console.error("fail1: ", e);
//     }
//   )
//   .then(
//     function success2(res) {},
//     function fail2(e) {
//       console.error("fail2: ", e);
//     }
//   );

// process.nextTick(() => {
//   console.log('nextTick');
// })
// Promise.resolve()
//   .then(() => {
//     console.log('then');
//   })
// setImmediate(() => {
//   console.log('setImmediate');
// })
// console.log('end');

/**
 * 字符串转数字源码
 * @param {待转换字符串} str
 */
function StrToInt(str) {
  // write code here
  if (str === null) return 0;
  let result = 0;
  let negative = false; // 是否为负数
  let i = 0;
  let len = str.length;
  // limit初始值为负的最大整数
  // 假如字符串表示的是正整数，那么result就必须和这个负数比较，判断是否溢出
  let limit = -Number.MAX_SAFE_INTEGER;
  let multmin;
  let digit;

  if (len > 0) {
    let firstChar = str.charAt(0); // 首先看第一位
    if (firstChar < "0") {
      // 第一位可能是+或者-
      if (firstChar === "-") {
        negative = true;
        limit = Number.MIN_SAFE_INTEGER; // 负数的时候判断的溢出条件改变，变成整数的最小负数
      } else if (firstChar !== "+") {
        // 第一位不是+或者-的其他字符，则不是数字
        return 0;
      }
      if (len === 1) {
        // 只有一个+的情况
        return 0;
      }
      i++;
    }
    multmin = parseInt(limit / 10);
    while (i < len) {
      digit = str.charAt(i++) - "0";
      if (Number.isNaN(digit)) {
        return 0;
      }
      // 判断溢出
      if (result < multmin) {
        return 0;
      }
      result *= 10;
      if (result < limit + digit) {
        return 0;
      }
      result -= digit;
    }
  } else {
    return 0;
  }
  return negative ? result : -result; // 由于result一直是负数，如果negative的话，则取正数
}

// let str = "1a33";
// console.log(StrToInt(str));

function duplicate(numbers, duplication) {
  // write code here
  //这里要特别注意~找到任意重复的一个值并赋值到duplication[0]
  //函数返回True/False
  let obj = {};
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] in obj) {
      duplication.push(numbers[i]);
      return true;
    }
    obj[numbers[i]] = 1;
  }
  return false;
}

// console.log(duplicate([2, 1, 3, 1, 4], []));

function multiply(array) {
  // write code here
  if (array === null) {
    return 0;
  }
  let arr = [];
  for (let i = 0; i < array.length; i++) {
    let arrTemp = array.filter(function (val, index) {
      return index !== i;
    });
    let temp = 1;
    arrTemp.map(function (val) {
      temp *= val;
    });
    arr.push(temp);
  }
  return arr;
}

// console.log(multiply([1, 2, 3, 4, 5]));

var longestPalindrome = function (s) {
  if (s === null || s.length < 1) return "";
  let maxLen = 1;
  let res = s.substring(0, 1);
  for (let i = 0; i < s.length; i++) {
    let oddStr = expandAroundCenter(s, i, i);
    let evenStr = expandAroundCenter(s, i, i + 1);
    let maxLenStr = oddStr.length > evenStr.length ? oddStr : evenStr;
    if (maxLenStr.length > maxLen) {
      maxLen = maxLenStr.length;
      res = maxLenStr;
    }
  }
  return res;
};

var expandAroundCenter = function (s, left, right) {
  let len = s.length;
  let i = left;
  let j = right;
  while (i >= 0 && j < len) {
    if (s[i] === s[j]) {
      i--;
      j++;
    } else {
      break;
    }
  }
  return s.substring(i + 1, j);
};

let s = "ccc";
// console.log(longestPalindrome(s));


let res = [];
function solveNQueens(n) {
  res = [];
  let board = new Array(n);
  for(let i = 0; i < n; i ++){
    board[i] = new Array(n).fill('.');
  }
  backtrack1(board, 0);
  return res;
}

function backtrack1(board, row){
  if(row === board.length){
    let arr = [];
    board.forEach((item)=>{arr.push(item.join(""))})
    return res.push(arr);
  }
  let col = board[row].length;
  for(let i = 0; i < col; i++){
    if(!isValid(board, row, i)) continue;
    // 做选择
    board[row][i] = 'Q';
    // 进行下一次决策
    backtrack1(board, row + 1);
    // 撤销选择
    board[row][i] = '.';
  }
}

function isValid(board, row, col) {
  let n = board.length;
  // 由于每一次都走到下一行，所以无需检查行
  // 检查列
  for(let i = 0; i < n; i++){
    if(board[i][col] === 'Q'){
      return false;
    }
  }
  // 检查左上方
  for(let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--){
    if(board[i][j] === 'Q'){
      return false;
    }
  }
  // 检查右上方
  for(let i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++){
    if(board[i][j] === 'Q'){
      return false;
    }
  }
  return true;
}

// console.log(solveNQueens(4));
// console.log(solveNQueens(1));
