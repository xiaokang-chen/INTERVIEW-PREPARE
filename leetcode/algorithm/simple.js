/*
 * @Author: your name
 * @Date: 2020-04-10 12:46:08
 * @LastEditTime: 2020-04-10 20:26:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \INTERVIEW-PREPARE\leetcode\algorithm\simple.js
 */

 /**
  * @description: 1. 找出数组中重复次数最多的元素
  * @param {Array[String]} arr 
  * @return: 出现最多的元素 
  * 
  * 例子： 
  * arr = ['192.168.1.1', '192.168.2.1', '192.168.1.1']      
  * return '192.168.1.1' 
  * 
  * 思路：
  * 用对象来处理，对象的键是元素，值是出现的次数。
  * 如果对象中没有该元素，则添加；如果有，则value值+1，同时与全局max进行比较
  */
 let highestFrequency = function(arr) {
    // 利用解构赋值
    let [max, res, obj] = [1, '', {}];
    for(let item of arr){
        if(obj[item]){
            // 对象中已经有值了，将值+1
            obj[item]++;
            // 如果加完后大于最大值，则更新
            if(max < obj[item]){
                max = obj[item];
                res = item;
            }
        }else{
            // 没有值，就初始化一个
            obj[item] = 1;
        }
    }
    return res;
 }

//  console.log(highestFrequency(['192.168.1.1', '192.168.1.2', '192.168.1.1', '192.168.1.1', '192.168.1.3']))

/**
 * @description: 2. 给定一个n，找出n位的所有水仙花数
 * @param {number} n 
 * @return: Array[Number] n位的水仙花数 
 * 
 * 例子：
 * 输入：n = 3
 * 输出：[153, 370, 371, 407]     因为 153=1**3 + 5**3 + 3**3，其余同理 
 * 
 * 思路：
 * 先写出判断一个数是否为水仙花的函数，再对给定n位的所有数字进行逐个筛查
 */
let findAllNumbers = function(n) {
    let res = [];
    // 在n为1的时候，min应该为0，并且0也是水仙花数
    let min = n === 1 ? 0 : Math.pow(10, n-1);
    let max = Math.pow(10, n);
    // 保证最大值不溢出
    if(n < 0 || max > Number.MAX_SAFE_INTEGER) return res;

    for(let i = min; i < max; i++){
        if(isTrue(i)){
            res.push(i);
        }
    }
    return res;
}

let isTrue = function(nums) {
    if(typeof nums !== 'number') return false;
    let sum = 0;
    const n = nums.toString().length;   // 数字的长度
    let remainder = 0;  // 余数
    let result = nums;     // 除法结果
    for(let i = 0; i < n; i++){
        remainder = result % 10;
        sum += Math.pow(remainder, n);
        result = Math.floor(result / 10);
    }
    return sum === nums; 
}

// console.log(isTrue(153));
// console.log(findAllNumbers(3));

/**
 * @description: 3. 反转一个只有3位数的整数
 * @param {Number} number 
 * @return: 反转的数字
 * 
 * 例子：
 * 123
 * 321
 * 
 * 思路：
 * 数字取余，再乘上
 */
let reverseInteger = function(number) {
    if(typeof number !== 'number' || number > Number.MAX_VALUE) return false;
    let res = 0;
    let n = number.toString().length;   // 获取数字的长度
    while(number){
        res += (number % 10) * Math.pow(10, --n);
        number = Math.floor(number / 10);
    }
    return res;
}

// 反转三位数
let reverseIntegerWithToString = function(number) {
    let str = number.toString();
    return parseInt(str.charAt(2) + str.charAt(1) + str.charAt(0));
}

// console.log(reverseInteger(4548155))

/**
 * @description: 4. 查找斐波那契数列中第n个数
 * @param {Number} n 
 * @return: 第n个斐波那契数列元素
 * 
 * 例子：
 * n = 6
 * 5    0 1 1 2 3 5 所以返回5
 * 
 * 思路：
 * 递归或循环
 */
let fibonacciWithRecursive = function(n) {
    if(n === 1) return 0;
    if(n === 2) return 1;
    return fibonacciWithRecursive(n-1) + fibonacciWithRecursive(n-2);
}

let fibonacciWithCycle = function(n) {
    let a = 0;
    let b = 1;
    // let temp;
    if(n === 1) return a;
    if(n === 2) return b;
    for(let i = 2; i < n; i++){
        // temp = b;
        // b = a + b;
        // a = temp;

        //利用解构赋值 
        [a, b] = [b, a+b];
    }
    return b;
}

// 一次遍历，推导所有元素，最佳方案！！！
let fibonacci = function(n) {
    let arr = new Array(n).fill(0);
    arr[1] = 1;
    for(let i = 2; i < n; i++){
        arr[i] = arr[i-1] + arr[i-2];
    }
    return arr[n-1];
}

// console.log(fibonacciWithRecursive(10));
// console.log(fibonacciWithCycle(10));
// console.log(fibonacci(10))

/**
 * @description: 5. 判断一个字符串s，是否在最多删除一个字母（本身是回文也返回true）后能成为“回文”
 * @param {String} s 
 * @return: 是或否
 * 
 * 例子：
 * asba
 * true     因为asba删除s变为aba，是回文
 * 
 * 思路：
 * 先写出判断回文的函数
 * 再写允许忍受一次的情况
 */

//  检查是否为回文
let validPalindrom = function(s) {
    for(let i = 0, j = s.length - 1; i < j; i++, j--){
        if(s.charAt(i) !== s.charAt(j)){
            // 当出现不同时，判断字串是否为回文(删除i或删除j)
            return isSubStringPalindrom(s, i+1, j) || isSubStringPalindrom(s, i, j-1);
        }
    }
    return true;
}

let isSubStringPalindrom = function(s, left, right) {
    while(left < right){
        if(s[left] !== s[right]){
            return false;
        }
        left++;
        right--;
    }
    return true;
}

// 递归做法
let validPalindromWithRecursive = function(s, left = 0, right = s.length-1, type = 'first') {
    while(left < right){
        if(s.charAt(left) !== s.charAt(right)){
            return type == 'second' ? false : validPalindromWithRecursive(s, left+1, right, 'second') ||
                   validPalindromWithRecursive(s, left, right-1, 'second');
        }
        left++;
        right--;
    }
    return true;
} 

// 设置一个变量允许一次不同
let validPalindromWithOneVariable = function(s) {
    let removed = false;
    for(let [i, j] = [0, s.length-1]; i < j; i++, j--){
        if(s[i] !== s[j]){
            if(removed){
                return false;
            }else{
                // 如果没有removed的话，那么往后看一步，继续比较
                if(s[i+1] === s[j]){
                    // 如果后面的元素可以“对上”，则还有“挽救”的余地
                    i++;
                    removed = true;
                }else if(s[i] === s[j-1]){
                    j--;
                    removed = true;
                }else{
                    // GG
                    return false;
                }
            }
        }
    }
    return true;
}

// console.log(checkPalindrom('abaccba'));
// console.log(
//     '回文验证：',
//     validPalindrom('avshahsaq'),
//     validPalindrom('asda')
// );
// console.log(
//     '回文验证:',
//     validPalindromWithOneVariable('abaacaaa'),
//     validPalindromWithOneVariable('ab'),
//     validPalindromWithOneVariable('abc'),
//     validPalindromWithOneVariable('aabsjdbaa')
//   );
 
/**
 * @description 反转整数
 * @param {Number} nums 
 * @return  翻转后的数字
 */
let reverseInt = function(nums) {
    let res = Number.parseInt(Math.abs(nums).toString().split('').reverse().join(''));
    if(res > 2**31-1 || res < -(2**31)) return 0;
    return  nums < 0 ?  -res : res;
}

console.log(reverseInt(156));
console.log(reverseInt(-156));
