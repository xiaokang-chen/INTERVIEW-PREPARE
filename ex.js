// // function getTheNumber(n, str1, str2) {
// //   let arr2 = str2.split("");
// //   let res = arr2.sort((a, b) => a - b).join("");
// //   console.log("sortedStr2", res);
// //   for (let i = 0; i < n; i++){
// //     let curNumber1 = parseInt(str1[i]);
// //     let curNumber2 = parseInt(str2[i]);
// //     if (curNumber1 < curNumber2) {
// //       return res;
// //     }
// //     if (curNumber1 > curNumber2) {
// //       res =
// //     }
// //   }
// //   return -1;
// // }

// // console.log(getTheNumber(n, str1, str2));

// function permute(arr) {
//   let res = [];
//   function backtrack(arr, n, temp) {
//     if (arr.length === temp.length) {
//       res.push(parseInt([...temp].join("")));
//     }
//     for (let i = 0; i < arr.length; i++) {
//       if (temp.includes(arr[i])) {
//         continue;
//       }
//       temp.push(arr[i]);
//       backtrack(arr, n + 1, temp);
//       temp.pop();
//     }
//   }
//   backtrack(arr, 0, []);
//   return res;
// }

// // function getTheNumber(n, str1, str2) {
// //   let permuteArr = permute(str2.split(""));
// //   permuteArr.sort((a, b) => b - a);
// //   let num1 = parseInt(str1);
// //   if (permuteArr[0] < num1) {
// //     return -1;
// //   }
// //   let i = 0;
// //   while (permuteArr[i] >= num1) {
// //     i++;
// //   }
// //   return permuteArr[i - 1];
// // }

// function getTheNumber(n, str1, str2) {
//   let res = -1;
//   let arr2 = str2.split("");
//   back(arr2);
//   return res;
// }

// function back() {}

// let n = 3;
// let str1 = "213";
// let str2 = "432";
// // console.log(permute(str2.split("")));
// console.log(getTheNumber(n, str1, str2));

// function deepGet(object, path, defaultValue = 2) {
//   if (object === null) return defaultValue;
//   let arr = [];
//   for (let i = 0; i < path.length; i++) {
//     if (path[i] === "." || path[i] === "[" || path[i] === "]") {
//       continue;
//     }
//     arr.push(path[i]);
//   }
//   for (let item of arr) {
//     if (item in object) {
//       object = object[item];
//     } else {
//       return defaultValue;
//     }
//   }
//   return object;
// }

// let obj = { a: { b: { c: [1] } } };
// let item = "a";
// let path = "a.b.c[0]";
// console.log(deepGet(obj, path));

// function Solution(num) {
//   if (!Number.isNaN(num)) {
//     return false;
//   }
//   if (num % 63 === 0) {
//     return "fizzbuzz";
//   }
//   if (num % 7 === 0) {
//     return "fizz";
//   }
//   if (num % 9 === 0) {
//     return "buzz";
//   }
//   return num;
// }
// let arr = [7, 9, 14, -18, 19, null, 63, 126];
// for (let item of arr) {
//   console.log(Solution(item));
// }
// console.log(Solution(num));

// 检查字符串是否到达终点
function check(S) {
  for (let i = 0; i < S.length; i++) {
    if (S[i] === ".") {
      // 边界
      if (
        (i === 0 && S[i + 1] === "L") ||
        (i === S.length - 1 && S[i - 1] === "R")
      ) {
        return false;
      }
      // 中间
      if (
        (S[i - 1] === "R" && S[i + 1] === "L") ||
        (S[i - 1] === "L" && S[i + 1] === "R")
      ) {
        return true;
      } else if (S[i + 1] === "." || S[i - 1] === ".") {
        continue;
      } else {
        return false;
      }
    } else {
      continue;
    }
  }
  return true;
}

// 算法部分
function Solution(S) {
  // 如果已经到达最后，则直接返回
  if (check(S)) {
    return S;
  } else {
    let arr = S.split("");
    for (let i = 0; i < arr.length; i++) {
      // 边界
      if (
        (i === 0 && arr[i] === "L") ||
        (i === arr.length - 1 && arr[i] === "R")
      ) {
        continue;
      }
      if (arr[i] === "L" && arr[i - 1] === ".") {
        arr[i - 1] = "L";
      } else if (arr[i] === "R" && arr[i + 1] === ".") {
        arr[i + 1] = "R";
        i++;
      }
    }
    return Solution(arr.join(""));
  }
}

let S = ".L.R...LR..L.."; // LL.RR.LLRRLL..
console.log(Solution(S));
