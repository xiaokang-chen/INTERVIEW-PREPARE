function ListNode(val, next) {
  this.val = this.val === undefined ? 0 : this.val;
  this.next = this.next === undefined ? null : this.next;
}

var removeNthFromEnd = function (head, n) {
  let a = head;
  let b = head;
  for (let i = 0; i < n; i++) {
    b = b.next;
  }
  if (b === null) {
    return head.next;
  }
  while (b.next !== null) {
    b = b.next;
    a = a.next;
  }
  a.next = a.next.next;
  return head;
};

let node = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: {
        val: 4,
        next: {
          val: 5,
          next: null,
        },
      },
    },
  },
};
console.log(node);
console.log(removeNthFromEnd(node, 4));
