// import {BinarySearchTree} from '../data_structures/tree.mjs';
// const BinarySearchTree = require("../data_structures/tree");
const Tree = require("../data_structures/tree");

let isSame = function(s, t){
    // 这里判断的顺序很重要！！！ 
    // 必须先判断与再判断或（如果将!s || !t放到前面，当!s和!t都成立时(s=null、t=null)，
    // 直接返回false，而不经过!s && !t判断----实际在当s和t都为null时，我们希望程序返回true）
    if(!s && !t) return true;
    if(!s || !t) return false;
    if(s.val === t.val){
        return isSame(s.left, t.left) && isSame(s.right, t.right);
    }
    return false;
}
/**
 * 判断t是否是s的子树
 * @param {*} s 
 * @param {*} t 
 */
let isSubtree = function(s, t){
    if(!s) return false;
    if(isSame(s, t)){
        return true;
    }
    // 如果t不是s的子树结构，那么去t的左子树或右子树继续找与s匹配的结构
    return isSubtree(s.left, t) || isSubtree(s.right, t);
}

// 定义两棵树
const s = new Tree();
const t = new Tree();
s.createTree2([1,2,2,null,3,null,3]);
t.createTree2([2, null, 3]);
console.log('树S: ', s.root);
console.log('树T: ', t.root);
console.log(isSubtree(s.root, t.root));
