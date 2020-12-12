var isSymmetric = function(root){
    function check(p, q){
        if(p === null && q === null){
            return true;
        }
        if(p === null || q === null){
            return false;
        }
        return p.val === q.val &&
        check(p.left, q.right) &&
        check(p.right, q.left);
    }
    return check(root, root);
}

function isSymmetric2(root){
    function check(p, q){
        let queue = [];
        queue.push(p);
        queue.push(q);
        while(queue.length > 0){
            let u = queue.shift();
            let v = queue.shift();
            if(u === null && v === null){
                continue;
            }
            if((u === null || v === null) || u.val !== v.val){
                return false;   
            }
            queue.push(u.left);
            queue.push(v.right);
            queue.push(u.right);
            queue.push(v.left);
        }
        return true;
    }
    return check(root, root);
}

function TreeNode(val){
    this.val = val;
    this.left = this.right = null;
}

let root = new TreeNode(1);
let p1 = new TreeNode(2);
let p2 = new TreeNode(2);
let p3 = new TreeNode(3);
let p4 = new TreeNode(4);
let p5 = new TreeNode(4);
let p6 = new TreeNode(3);
root.left = p1;
root.right = p2;
p1.left = p3;
p1.right = p4;
p2.left = p5;
p2.right = p6;

// console.log(isSymmetric(root));
console.log(isSymmetric2(root));

