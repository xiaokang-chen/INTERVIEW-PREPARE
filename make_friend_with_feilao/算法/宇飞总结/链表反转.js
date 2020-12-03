// 这道题分析的关键点在于“从后向前”
// 进行递归的复盘，因为是栈操作，所以
// 链表操作一定是先操作链表尾部（pop）
function reverse(node){
    if(node.next === null){
        return node;
    }
    let nextNode = reverse(node.next);
    node.next.next = node;
    node.next = null;
    return nextNode;
}

const node = {
    value: 1,
    next: {
        value: 2,
        next: {
        value: 3,
        next: {
            value: 4,
            next: null
        }
        }
    }
}
  
console.log(reverse(node))