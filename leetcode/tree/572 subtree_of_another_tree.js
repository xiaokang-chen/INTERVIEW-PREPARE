import {BinarySearchTree} from '../data_structures/tree';

let isSame = function(s, t){
    if(!s || !t) return false;
    if(!s && !t) return true;
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
    return isSubtree(s.left, t) || isSubtree(s.right, t);
}

// 定义两棵树
const s = new BinarySearchTree();
const t = new BinarySearchTree();
s.insert(5);
s.insert(4);
s.insert(2);
s.insert(3);

t.insert(2);
t.insert(3);
console.log(isSubtree(s, t));
