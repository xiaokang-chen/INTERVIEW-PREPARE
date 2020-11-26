var generateParenthesis = function (n) {
  const res = [];
  function dfs(l, r, path) {
    if (l === 0 && r === 0) {
      res.push(path);
      return;
    }
    // 因为每次都是先消耗左括号，所以l一定小于或者等于r，如果出现l大于r的情况，则明显错误，需要剪枝
    if (l > r) {
      return;
    }
    // 关键点
    if (l > 0) {
      dfs(l - 1, r, path + "(");
    }
    if (r > 0) {
      dfs(l, r - 1, path + ")");
    }
  }
  dfs(n, n, "");
  return res;
};

console.log(generateParenthesis(3));
