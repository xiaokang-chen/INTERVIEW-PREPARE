/**
 * 解决回溯问题，实际就是一个决策树的遍历过程，可以看成是DFS的过程
 * 只需要考虑三个问题：路径、选择列表、结束条件
 * 回溯算法框架：
 * let res = [];
 * function backtrack(路径, 选择列表){
 *   if 满足条件:
 *     res.push(路径);
 *     return;
 *   for 选择 of 选择列表:
 *     做选择
 *     backtrack(路径, 选择列表)
 *     撤销选择
 * }
 * 核心：for循环中递归前的做选择和递归后的撤销选择
 */

/**
 * 全排列问题：O(N!)-O(N!)
 * @param {全排列的数字数组} nums
 */
function permute(nums) {
  const res = [];
  backtrack(nums, [], res);
  return res;
}

function backtrack(nums, track, res) {
  if (nums.length === track.length) {
    return res.push([...track]);
  }
  for (let i = 0; i < nums.length; i++) {
    // 排除不合法的选择
    if (track.includes(nums[i])) continue;
    // 做选择
    track.push(nums[i]);
    // 递归
    backtrack(nums, track, res);
    // 撤销选择
    track.pop();
  }
}

// let arr = [1, 2, 3];
// console.log(permute(arr));

/**
 * N皇后问题
 * @param {棋盘的边长} n 
 */
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

console.log(solveNQueens(1));