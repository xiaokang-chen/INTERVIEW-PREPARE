var minPathSum = function(grid) {
    const m = grid.length;
    const n = grid[0].length;
    let arr = new Array(m).fill(0).map(() => new Array(n).fill(0));
    for(let i = 0; i < m; i++){
        for(let j = 0; j < n; j++){
            if(i === 0 && j === 0){
                arr[i][j] = grid[i][j];
            }else if(i === 0 || j === 0){
                arr[i][j] = grid[i][j] + (i === 0 ? arr[i][j-1] : arr[i-1][j]);
            }else{
                arr[i][j] = Math.min(arr[i-1][j], arr[i][j-1]) + grid[i][j];
            }
        }
    }
    return arr[m-1][n-1];
};

const grid = [[1,3,1],[1,5,1],[4,2,1]];
console.log(minPathSum(grid));