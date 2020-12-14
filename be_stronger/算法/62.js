// 超出时间
// var uniquePaths = function(m, n) {
//     if(m === 1){
//         return 1;
//     }
//     if(n === 1){
//         return 1; 
//     }
//     return uniquePaths(m-1, n) + uniquePaths(m, n-1);
// };

function uniquePaths(m, n){
    // dp的初始值(a是最终值的左侧，b的最终值的上侧)
    const arr = new Array(m).fill(0).map(() => new Array(n).fill(1));
    for(let i = 1; i < m; i++){
        for(let j = 1; j < n; j++){
            arr[i][j] = arr[i-1][j] + arr[i][j-1];
        }
    }
    return arr[m-1][n-1];
}

function uniquePaths2(m, n){
    let dp = new Array(n).fill(1);
    for(let i = 1; i < m; i++){
        for(let j = 1; j < n; j++){
            dp[j] = dp[j] + dp[j-1];
        }
    }
    return dp[n - 1];
}

const m = 2;
const n = 2;
console.log(uniquePaths(m, n));