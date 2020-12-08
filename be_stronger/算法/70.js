var climbStairs = function(n) {
    let [a, b] = [1, 1];    // a代表dp[0] = 1, b代表dp[1] = 1
    for(let i = 2; i <= n; i++){
        [a, b] = [b, a + b];
    }
    return b;
};

let n = 4;
console.log(climbStairs(n));