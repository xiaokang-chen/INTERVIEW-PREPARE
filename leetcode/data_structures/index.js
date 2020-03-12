// 栈---es6语法
class Stack {
    constructor() {
        this.items = new Array();
    }
    // push
    push(element) {
        this.items.push(element);
    };
    // pop
    pop(){
        if(this.isEmpty()) return false;
        return this.items.pop();
    }
    // peek
    peek(){
        if(this.isEmpty()) return false;
        return this.items[this.items.length - 1];
    }
    // isEmpty
    isEmpty(){
        return this.items.length === 0;
    }
    // clear
    // 箭头函数只能定义函数，不能定义类中的方法
    clear(){
        return this.items = [];
    }
    // size
    size(){
        return this.items.length;
    }
}

// stack test
// let stack = new Stack();
// let arr = [1, 2, 3, 4];
// for(let item of arr){
//     stack.push(item);
// }
// console.log('After push: ', stack.items);
// stack.pop();
// console.log('After pop: ', stack.items);
// console.log('Stack peek: ', stack.peek());
// console.log('After peek: ', stack.items);
// stack.clear();
// console.log('After clear: ', stack.items);
// console.log('isEmpty: ', stack.isEmpty());

// 栈的应用
//1. 进制换算(10进制->2进制)
function baseConverter(number){
    let stack = new Stack();
    while(number){
        stack.push(number % 2);
        number = Math.floor(number/2);  // 向下取整
    }
    let baseString = "";
    while(!stack.isEmpty()){
        baseString += stack.pop();
    }
    return baseString;
} 

// console.log(baseConverter(8));

// 2. 判断字符串是否是回文串
function isPalindrome(word){
    let stack = new Stack();
    for(let i = 0; i < word.length; i++){
        stack.push(word[i]);
    }
    let newWord = "";
    while(stack.size() !== 0){
        newWord += stack.pop();
    }
    if(newWord == word){
        return true;
    }else{
        return false;
    }
}

// console.log(isPalindrome('abdcse'));    
// console.log(isPalindrome('abccba'));

// 3. 使用栈模拟递归
function factorial(n){
    if(n === 0){
        return 1;
    }else{
        return n * factorial(n-1);
    }
}
// console.log(factorial(100));

function stackFactorial(n){
    let stack = new Stack();
    while(n){
        stack.push(n--);
    }
    let res = 1;
    while(stack.size() !== 0){
        res *= stack.pop();
    }
    return res;
}
// console.log(stackFactorial(100));



// ----------------------------------------------------------------------------------------------------------


// 队列
class Queue{
    constructor(){
        this.items = new Array();
    }
    // enQueue
    enQueue(element){
        this.items.push(element);
    }
    // deQueue
    deQueue(){
        if(this.isEmpty()) return false;
        return this.items.shift();
    }
    // front
    front(){
        if(this.isEmpty()) return false;
        return this.items[0]; 
    }
    // Rear
    rear(){
        if(this.isEmpty()) return false;
        return this.items[this.items.length-1];  
    }
    // isEmpty
    isEmpty(){
        return this.items.length === 0;
    }
    // clear
    clear(){
        return this.items = new Array();
    }
    // size
    size(){
        return this.items.length;
    }
}

// 优先队列
class QueueElement{
   constructor(element, priority){
        this.element = element;
        this.priority = priority;
   }     
}

class PriorityQueue extends Queue{
    constructor(){
        super();    // 调用父类中的constructor()
    }
    
    // 重写父类enQueue----和Java不同，不需要特殊的override字段，而是直接和父类名字相同即可
    // 只要函数名相同，即便参数不同，也算重写
    enQueue(element, priority){
        let qe = new QueueElement(element, priority);
        // 队列为空时，元素直接放置；不为空时，先比较优先级
        if(this.isEmpty()){
            this.items.push(qe);
        }else{
            let added = false;
            for(let i = 0; i < this.items.length; i++){
                if(qe.priority > this.items[i].priority){
                    this.items.splice(i, 0, qe);    // 将元素插到下标为i的位置
                    added = true;
                    break;
                }
            }
            // 如果中间没有插入，那么代表其优先级很低，按照队列原则插入到队尾
            if(!added){
                this.items.push(qe);
            }
        }
    }
}

// let pq = new PriorityQueue();
// pq.enQueue(5, 1);
// pq.enQueue(3, 2);
// pq.enQueue('a', 1);
// pq.enQueue('b', 4);
// console.log(pq.items);

// 循环队列---顺序存储结构实现（给定队列大小）
/* 击鼓传花： 孩子们围一个圈，给定一个数k，从第一个人开始向后传花，传k次后，花到了谁的手里，谁就
             淘汰，淘汰的人从圈中离开；接着从淘汰的后面那个人重新向后传花，再传k次，花到了谁手里
             ，谁就淘汰...直到最后剩下一个人
*/
class CircularQueue extends Queue {
    constructor(maxSize){
        super();
        this.maxSize = maxSize;
    }
    // enQueue
    enQueue(element){
        if(this.isFull()) return false;
        this.items.push(element);
    }
    // deQueue、isEmpty、front、rear、size、clear都无需重写
    isFull(){
        return this.items.length === this.maxSize;
    }
    // 击鼓传花
    drummingFlowers(num){
        while(this.size() > 1){
            for(let i = 0; i < num; i++){
                this.enQueue(this.deQueue());
            }
            // 把“花”在的那个人弹出来
            this.deQueue();
        }
        return '胜利者： ' + this.deQueue();
    }
}

let cq = new CircularQueue(5);      // 循环队列最多插入5个元素
let names = new Array('John','Jack','Camila','Ingrid','Carl','Mike');
names.forEach(element => {
    cq.enQueue(element);
});
console.log(cq.items);      // 只能添加进前5个元素
console.log(cq.drummingFlowers(7));