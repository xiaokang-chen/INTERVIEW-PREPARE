// 计算从起点start到终点target的最近距离
function BFS(start, target) {
  let queue = [];
  // 避免走回头路
  let visited = [];
  queue.push(start);
  visited.push(start);
  let step = 0;

  while (!queue.length) {
    let sz = queue.length;
    // 将当前队列中的所有节点向四周扩散
    for (let i = 0; i < sz; i++) {
      let cur = queue.shift();
      if (cur === target) {
        return step;
      }
      // 将cur相邻的节点加入到队列中
      for (let adjNode of cur.next) {
        if (visited.indexOf(adj) !== -1) {
          queue.push(adjNode);
          visited.push(adjNode);
        }
      }
    }
    step++;
  }
}

function TreeeNode(value) {
  this.val = value;
  this.left = null;
  this.right = null;
}

let node1 = new TreeeNode(3);
let node2 = new TreeeNode(9);
let node3 = new TreeeNode(20);
let node4 = new TreeeNode(15);
let node5 = new TreeeNode(7);
node1.left = node2;
node1.right = node3;
node3.left = node4;
node3.right = node5;

// leetcode求二叉树最小高度
// 例子：[3,9,20,null,null,15,7]，最小高度为2
// 分析：起点-root根节点，终点-靠近根节点的那个[叶子节点]
// 叶子节点的判断：cur.left === null && cur.right === null
let minDepth = function (root) {
  if (root === null) {
    return 0;
  }
  let queue = [];
  queue.push(root);
  let depth = 1;
  while (queue.length) {
    let sz = queue.length;
    for (let i = 0; i < sz; i++) {
      let cur = queue.shift();
      if (cur.left === null && cur.right === null) {
        return depth;
      }
      if (cur.left !== null) {
        queue.push(cur.left);
      }
      if (cur.right !== null) {
        queue.push(cur.right);
      }
    }
    depth++;
  }
  return depth;
};

console.log(minDepth(node1));
