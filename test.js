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

process.nextTick(() => { 
  console.log('nextTick');
})
Promise.resolve()
  .then(() => { 
    console.log('then');
  })
setImmediate(() => { 
  console.log('setImmediate');
})
console.log('end');

end 
