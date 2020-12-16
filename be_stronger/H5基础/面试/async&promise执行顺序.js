async function async1(){
    console.log('async1 start');
    await async2();
    console.log('async1 end');
}

async function async2(){
    console.log('async2');
}

console.log('script start');

setTimeout(() => {
    console.log('setTimeout');
}, 0);

async1();

new Promise(function(resolve){
    console.log('promise1');
    resolve();
}).then(() => {
    console.log('promise2');
})

console.log('script end');

// script start
// async1 start
// async2
// promise1
// script end
// promise2
// async1 end
// setTimeout


// 关键点：带async关键字的函数返回值是一个promise
// 如果返回值是promise，则以promise为准
// 如果返回值不是promise，则会使用Promise.resolve()包装