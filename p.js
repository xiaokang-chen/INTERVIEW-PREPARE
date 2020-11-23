const dependency = {
  A: ["B"],
  B: ["C", "D"],
};

const res = [];
function getPath(key, path = "") {
  path += path ? "->" + key : key;
  if (!dependency[key]) {
    return res.push(path);
  } else {
    dependency[key].forEach((x) => {
      return getPath(x, path);
    });
  }
  // for (let item in dependency) {
  //   if (key === itemKey) {
  //     res.push(getStr(key));
  //   }
  // }
  return res;
}

console.log(getPath("A"));

// function Node(val) {
//   this.val = val;
//   this.children = [];
// }

// // 二叉树节点
// function BinaryNode(val) {
//   this.val = val;
//   this.left = null;
//   this.right = null;
// }

// // 二叉树情况下的遍历
// function binaryTreePaths(node) {
//   if (node === null) {
//     return [];
//   }
//   if (node.left === null && node.right === null) {
//     return [node.val];
//   }
//   const left = binaryTreePaths(node.left);
//   const right = binaryTreePaths(node.right);
//   return left.concat(right).map((x) => node.val + "->" + x);
// }

// let node1 = new BinaryNode("A");
// let node2 = new BinaryNode("B");
// let node3 = new BinaryNode("C");
// let node4 = new BinaryNode("D");
// node1.left = node2;
// node2.left = node3;
// node2.right = node4;
// console.log(binaryTreePaths(node1));

// console.log(getPath(b));

// function deepTraversal(node) {
//   let nodes = [];
//   if (node != null) {
//     nodes.push[node];
//     let childrens = node.children;
//     for (let i = 0; i < childrens.length; i++){
//       deepTraversal(childrens[i]);
//     }
//   }
//   return nodes;
// }

// console.log(deepTraversal('A'));
