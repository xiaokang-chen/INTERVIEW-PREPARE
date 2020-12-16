const promise = new Promise((resolve, reject) => {
    console.log('1');
    setTimeout(() => {
        console.log('2');
        resolve('done');
        console.log('3');
    });
});

console.log('4');
promise.then(console.log);
console.log('5');


// 原因分析
// 先执行同步代码，容易判断 1 4 5
// 然后查看微任务，没有微任务，则执行宏任务
// 宏任务setTimeout中执行同步代码 2 3
// 最后执行宏任务中的微任务resolve(‘done’) 在外层的then中接收到，并输出

// 注： 这里的.then(console.log)和.then((value)=>{console.log(value)})执行结果一样