let lastNode = null;
function reverseK(node, k){
    if(k === 1){
        // 找到了最后的连接点，与
        // 整个链表反转中的最后节点null同理
        // 只不过null已知，而lastNode未知
        lastNode = node.next;
        return node;
    }
    const nextNode = reverseK(node.next, k-1);
    node.next.next = node;
    node.next = lastNode;
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

console.log(reverseK(node, 3))
