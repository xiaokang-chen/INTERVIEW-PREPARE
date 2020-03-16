// 树的节点
export class Node{
    constructor(key){
        this.key = key;
        this.left = null;
        this.right = null;
    }
}

// 二叉搜索树
export class BinarySearchTree{
    constructor(){
        this.root = null;
    }
    
    // 输出树的结构
    print(){

    }
    // 向树中插入一个新的键
    insert(key){
        let node = new Node(key);
        if(this.root === null){
            this.root = node;
        }else{
            this.insertNode(this.root, node);
        }
    }
    // 在树中查找插入点
    insertNode(root, node){
        if(root.key > node.key){
            // 在左子树中寻找
            if(root.left === null){
                root.left = node;
            }else{
                this.insertNode(root.left, node);
            }
        }else{
            // 在右子树中寻找
            if(root.right === null){
                root.right = node;
            }else{
                this.insertNode(root.right, node);
            }
        }
    }
    // 在树中查找一个节点值
    search(key){
        return this.searchNode(this.root, key);
    }
    searchNode(root, key){
        if(root === null){
            return false;
        }
        if(key < root.key){
            // 在左子树寻找
            return this.searchNode(root.left, key);
        }else if(key > root.key){
            // 在右子树寻找
            return this.searchNode(root.right, key);
        }else{
            return true;
        }
    }
    // 返回树中最小的值(最左侧)
    min(){
        let node = this.root;
        if(!node){
            return null;
        }
        while(node.left){
            // “左移”
            node = node.left;
        }
        return node.key;
    }
    // 返回树中最大的值(最右侧)
    max(){
        let node = this.root;
        if(!node){
            return null;
        }
        while(node.right){
            node = node.right;
        }
        return node.key;
    }
    // 中序遍历
    inOrderTraverse(){
        let res = [];
        this.inOrder(this.root, res);
        return res;
    }
    inOrder(node, res){
        if(node){
            this.inOrder(node.left, res);
            res.push(node.key);
            this.inOrder(node.right, res);
        }
    }
    // 先序遍历
    preOrderTraverse(){
        let res = [];
        this.preOrder(this.root, res);
        return res;
    }
    preOrder(node, res){
        if(node){
            res.push(node.key);
            this.preOrder(node.left, res);
            this.preOrder(node.right, res);
        }
    }
    // 后续遍历
    postOrderTraverse(){
        let res = [];
        this.postOrder(this.root, res);
        return res;
    }
    postOrder(node, res){
        if(node){
            this.postOrder(node.left, res);
            this.postOrder(node.right, res);
            res.push(node.key);
        }
    }
    // 移除一个节点
    remove(key){
        return this.removeNode(this.root, key);
    }
    removeNode(node, key){
        if(node === null){
            return null;
        }
        if(key < node.key){
            // 左边
            node.left = this.removeNode(node.left, key);
        }else if(key > node.key){
            // 右边
            node.right = this.removeNode(node.right, key);
        }else{
            // 移除当前节点,需要选择左右节点中的一个
            // 作为根节点
            if(node.left === null && node.right === null){
                node = null;
            }else if(node.left === null){
                node = node.right;
            }else if(node.right === null){
                node = node.left;
            }else{
                // 两个子节点都存在的情况下
                // 取右侧的最左节点（或取左侧最右节点都行），将其值赋给根节点，再移除右子节点的那个最小节点
                let minNode = this.minNode(node.right);
                node.key = minNode.key;
                node.right = this.removeNode(node.right, minNode.key);
            }
        }
        // 最后一定要把计算出来的节点作为返回值返回，否则递归调用赋值将undefined
        return node;
    }
    minNode(node){
        // 返回当前节点下最小(最左)的节点
        while(node.left){
            node = node.left;
        }
        return node;
    }
}

let tree = new BinarySearchTree();
tree.insert(11); 
tree.insert(7);
tree.insert(15);
tree.insert(5);
tree.insert(3); 
tree.insert(9);
tree.insert(8);
tree.insert(10);
tree.insert(13);
tree.insert(12);
tree.insert(14);
tree.insert(20);
tree.insert(18);
tree.insert(25);
tree.insert(6);
// 中序
console.log(tree.inOrderTraverse());
// 前序
console.log(tree.preOrderTraverse());
// 后序
console.log(tree.postOrderTraverse());
// 找最大、最小
console.log(tree.min());
console.log(tree.max());
// 搜索
console.log(tree.search(1));
console.log(tree.search(8));
// 移除
tree.remove(15);
console.log(tree.inOrderTraverse());
