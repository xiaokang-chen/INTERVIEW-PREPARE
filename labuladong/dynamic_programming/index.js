/**
 * 1：斐波那切数列
 * @param {元素个数} n
 */

// BF：O(N*2)-O(1)
function fib(n) {
  if (n <= 0) return 0;
  if (n === 1 || n === 2) return 1;
  return fib(n - 1) + fib(n - 2);
}

// 带备忘录memo的自顶向下解法：O(N)-O(N)
function fibWithMemo(n) {
  if (n <= 0) return 0;
  if (n === 1 || n === 2) return 1;
  const memo = new Array(n + 1).fill(0);
  return helper(memo, n);
}

function helper(memo, n) {
  if (n === 1 || n === 2) return 1;
  // 剪枝操作：如果已经计算过，则直接返回
  if (memo[n] !== 0) return memo[n];
  memo[n] = helper(memo, n - 1) + helper(memo, n - 2);
  return memo[n];
}

// 动态规划-自底向上解法：O(N)-O(N)
function fibWithDp1(n) {
  if (n <= 0) return 0;
  if (n === 1 || n === 2) return 1;
  const dp = new Array(n + 1).fill(0);
  dp[1] = dp[2] = 1;
  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
}

// 动态规划空间优化-状态压缩：O(N)-O(1)
function fibWithDp2(n) {
  if (n <= 0) return 0;
  if (n === 1 || n === 2) return 1;
  let prev = 1;
  let curr = 1;
  for (let i = 3; i <= n; i++) {
    // let sum = prev + curr;
    // prev = curr;
    // curr = sum;
    [prev, curr] = [curr, prev + curr];
  }
  return curr;
}

// 1 1 2 3 5 ...
// console.log(fib(15));
// console.log(fibWithMemo(15));
// console.log(fibWithDp1(15));
// console.log(fibWithDp1(15));

/**
 * 2：凑零钱问题
 * @param {可选硬币面值数组} coins
 * @param {目标金额} amount
 */

// 暴力解法-深度优先遍历(DFS)：O(k*n^k)-O(1)
function coinChange(coins, amount) {
  // n代表金额
  function dp(n) {
    if (n === 0) return 0;
    // -1代表无法凑出零钱
    if (n < 0) return -1;
    // 数量的初始值先定义为正无穷
    let res = Infinity;
    for (let coin of coins) {
      let subproblem = dp(n - coin);
      // 金额小于0，则需要回溯
      if (subproblem === -1) continue;
      res = Math.min(res, 1 + subproblem);
    }
    return res === Infinity ? -1 : res;
  }
  return dp(amount);
}

// 带备忘录的递归解法
function coinChangeWithMemo(coins, amount) {
  // 创建一个对象，以键值对的方式存储【金额:数量】
  const memo = {};
  function dp(n) {
    // base case
    if (n === 0) return 0;
    if (n < 0) return -1;
    // 剪枝
    if (n in memo) return memo[n];
    let res = Infinity;
    for (let coin of coins) {
      let subproblem = dp(n - coin);
      if (subproblem === -1) continue;
      res = Math.min(res, subproblem + 1);
    }
    memo[n] = res === Infinity ? -1 : res;
    return memo[n];
  }
  return dp(amount);
}

// dp数组的迭代解法-自底向上
function coinChangeWithDp(coins, amount) {
  const dp = new Array(amount + 1).fill(amount + 1);
  dp[0] = 0;
  for (let i = 0; i < dp.length; i++) {
    // 内层for循环查找所有选择中最小的
    for (let coin of coins) {
      if (i - coin < 0) continue;
      dp[i] = Math.min(dp[i], dp[i - coin] + 1);
    }
  }
  return dp[amount] === amount + 1 ? -1 : dp[amount];
}

const coins = [1, 2, 5];
const amount = 11;
// console.log(coinChange(coins, amount));
// console.log(coinChangeWithMemo(coins, amount));
// console.log(coinChangeWithDp(coins, amount));
