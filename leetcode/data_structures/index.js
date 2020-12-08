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

// let cq = new CircularQueue(5);      // 循环队列最多插入5个元素
// let names = new Array('John','Jack','Camila','Ingrid','Carl','Mike');
// names.forEach(element => {
//     cq.enQueue(element);
// });
// console.log(cq.items);      // 只能添加进前5个元素
// console.log(cq.drummingFlowers(7));


// ----------------------------------------------------------------------------------------------------------


// 1. 单向链表
// function Node(element){
//     this.element = element;
//     this.next = null;
// }

// ES6
// 链表节点类
class Node{
    constructor(element){
        this.element = element;
        this.next = null;
    }
}

//链表类 
class LinkedList {
    constructor() {
        this.length = 0;
        this.head = null;
    }

    // 打印链表情况
    print(){
        let currentNode = this.head;
        let res = 'head';
        while(currentNode){
            res += ' -> ' + currentNode.element;
            currentNode = currentNode.next;
        }
        res += ' -> null';
        return res;
    }

    /**
     * 1. 尾部插入数据
     * @param {*} element 插入的节点 
     */
    append(element){
        let node = new Node(element);
        let currentNode;
        // 判断链表是否为空，为空则直接将节点作为链表头
        // 如果不为空，则向最后一个节点后插入
        if(this.head === null){
            this.head = node;
        }else{
            currentNode = this.head;
            while(currentNode.next) {
                currentNode = currentNode.next;
            }
            // 遍历到最后，找到尾结点，将尾结点的
            // next置为node
            currentNode.next = node;
        }
        this.length++;
    }

    /**
     * 2. 向任意位置插入节点
     * @param {*} position 插入的位置
     * @param {*} element  插入的节点
     */
    insert(position, element){
        // 检查position的合法性
        if(position < 0 || position > this.length){
            return false;
        }
        let node = new Node(element);
        let currentNode = this.head;
        let index = 0;
        let previousNode;
        // 如果是空链表，那么head指向插入节点
        if(position === 0){
            this.head = node;
        }else{
            while(index++ < position){
                previousNode = currentNode;
                currentNode = currentNode.next;
            }
            // 找到位置，进行插入操作，插入操作的先后顺序无所谓（因为有两个确定的节点：previosNode、currentNode）
            // 关键一步
            previousNode.next = node;
            node.next = currentNode;
            // node.next = currentNode;
            // previousNode.next = node;
        }
        this.length++;
        return true;
    }

    /**
     * 3. 根据元素位置移除元素
     * @param {} position 元素位置，从0开始
     */
    removeAt(position){
        if(position < 0 || position >= this.length){
            return false;
        }
        let currentNode = this.head;
        let index = 0;
        let previousNode;
        if(position === 0){
            this.head = currentNode.next;
        }else{
            while(index++ < position){
                previousNode = currentNode;
                currentNode = currentNode.next;
            }
            // 执行删除操作----关键一步
            previousNode.next = currentNode.next;
        }
        this.length--;
        return true;
    }

    /**
     * 4. 根据元素值查找元素位置
     * @param {*} element 
     */
    indexOf(element){
        let currentNode = this.head;
        let index = 0;
        while(currentNode){
            if(currentNode.element === element){
                return index;
            }
            currentNode = currentNode.next;
            index++;
        }
        return -1;
    }

    /**
     * 5. 根据元素值移除元素
     * ps: 根据上述两个方法去实现（即先找元素对应位置，再删除，当然这个效率很差，可以遍历一次即删除）
     * @param {} element 元素值
     */
    remove(element){
        let index = this.indexOf(element);
        return this.removeAt(index);
    }

    remove_opt(element){
        let currentNode = this.head;
        let previousNode;
        while(currentNode){
            if(currentNode.element === element){
                if(!currentNode.prev){
                    // 删除头
                    this.head = currentNode.next;
                }else{
                    // 删除尾或中间
                    previousNode.next = currentNode.next;
                }
                this.length--;
                return true;
            }
            previousNode = currentNode;
            currentNode = currentNode.next;
        }
        return false;
    }

    isEmpty(){
        return this.length === 0;
    }

    size(){
        return this.length;
    }
}

// let linkedList = new LinkedList();
// linkedList.insert(0, 5);
// linkedList.append(3);
// linkedList.insert(1, 2);
// linkedList.insert(2, 7);
// console.log(linkedList.print());
// linkedList.remove_opt(5);
// linkedList.remove(5);
// console.log(linkedList.print());
// console.log(linkedList.head);


// 2. 双链表
class dNode extends Node{
    constructor(element){
        super(element)
        this.prev = null;
    }
}

class DoubleyLinkedList{
    constructor(){
        this.length = 0;
        this.head = null;
        this.tail = null;    // 保存对列表最后一项的引用
    }

    print(){
        let current = this.head;
        if(this.head === null){
            return 'head <-> tail';
        }
        let res = 'head -> ';
        while(current){
            res += current.element + ' <-> ';
            current = current.next;
        }
        res = res.slice(0, -5) + ' <- tail';
        // res = res.substring(0, -5) + ' <- tail';    
        return res;
    }

    /**
     * 向链表尾部添加元素
     * @param {*} element 添加的元素 
     */
    append(element){
        let dnode = new dNode(element);
        let current;
        if(this.head === null){
            // 空链表只需要将head和tail指向这个新节点即可
            this.head = dnode;
            this.tail = dnode;
        }else{
            // 1. 将当前节点标记为链表的tail（记为a）
            // 2. 将新节点的前驱和后继连到a
            // 3. 更新链表的tail
            // ***********其中步骤2中前驱和后继连接的顺序可打乱*************
            current = this.tail;
            current.next = dnode;
            dnode.prev = current;
            this.tail = dnode;
        }
        this.length++;
    }

    /**
     * 向双链表特定位置插入元素（*****重点******）
     * @param {*} position 位置
     * @param {*} element 元素值
     */
    insert(position, element){
        // 检查越界
        if(position < 0 || position > this.length){
            return false;
        }
        let dnode = new dNode(element);
        let current = this.head;
        let index = 0;
        let previous;
        if(position === 0){
            // 1）在首位添加的情况
            if(!this.head){
                // 如果链表为空
                this.head = dnode;
                this.tail = dnode;
            }else{
                // 先连接后继，再连接前驱
                dnode.next = current;
                current.prev = dnode;
                this.head = dnode;
            }
        }else if(position === this.length){
            // 2）在末尾添加的情况
            current = this.tail;
            current.next = dnode;
            dnode.prev = current;
            this.tail = dnode;
        }else{
            // 3）在中间的情况
            while(index++ < position){
                // current后移
                previous = current;
                current = current.next;
            }
            // 直到找到插入点后进行插入操作
            // 1）当前节点的后继连到current（current和previous不断链）
            // 2）current的前驱连到node上（此时后继节点的前驱断链），此时新节点的后方更新完毕
            // 3）previous的后继节点连到node上（此时先驱节点的后继断链）
            // 4）node的前驱连到previous上
            // 顺序可以是1234或者1243
            dnode.next = current;        // 1
            current.prev = dnode;        // 2
            dnode.prev = previous;       // 4
            previous.next = dnode;       // 3
        }
        this.length++;
        return true;
    }

    /**
     * 根据位置(0开始)移除元素
     * @param {*} position 
     */
    removeAt(position){
        if(position < 0 || position >= this.length){
            return null;
        }
        let current = this.head;
        let index = 0;
        let previous;
        if(position === 0){
            this.head = current.next;
            if(this.length === 1){
                // 如果删除后没有元素，那么head和tail都指向null
                this.tail = null;
            }else{
                // 如果删除后还有元素，需要断掉删除后第一个元素的前驱节点
                this.head.prev = null;
            }
        }else if(position === this.length - 1){
            // 删除最后一个元素
            current = this.tail;
            previous = current.prev;
            this.tail = previous;
            previous.next = null;
        }else{
            // 删除中间的元素
            while(index++ < position){
                previous = current;
                current = current.next;
            }
            previous.next = current.next;
            current.next.prev = previous;
        }
        this.length--;
        return current.element;
    }

    /**
     * 返回第一个出现元素值的索引
     */
    indexOf(element){
        let current = this.head;
        let index = 0;
        while(current){
            if(current.element === element){
                return index;
            }
            current = current.next;
            index++;
        }
        return -1;
    }

    /**
     * 删除元素值对应的元素
     * @param {*} element 
     */
    remove(element){
        let index = this.indexOf(element);
        return this.removeAt(index);
    }

    /**
     * 改进版
     * @param {*} element 
     */
    remove_opt(element){
        let current = this.head;
        let previous;
        while(current){
            if(element === current.element){
                if(!current.prev){
                // 如果删除头元素
                    this.head = current.next;
                    current.next.prev = null;
                }else if(!current.next){
                // 如果删除尾元素
                    this.tail = current.prev;
                    current.prev.next = null;
                }else{
                // 如果删除中间元素
                    previous.next = current.next;
                    current.next.prev = previous;    
                }
                this.length--;
                return true;
            }
            previous = current;
            current = current.next;
        }
        return false;
    }

    isEmpty(){
        return this.length === 0;
    }

    size(){
        return this.length;
    }

    getHead(){
        return this.head;
    }
}

// let dLinkedList = new DoubleyLinkedList();
// dLinkedList.append(1);
// dLinkedList.insert(1, 2);
// dLinkedList.insert(2, 3);
// dLinkedList.insert(3, 4);
// console.log(dLinkedList.print());
// dLinkedList.remove_opt(1);
// console.log(dLinkedList.print());

// 循环链表的实现与单链表和双链表类似（只不过是多了一个末尾连接）
class CircularLinkedList extends LinkedList{
    constructor(){
        super();
    }

    print(){
        let current = this.head;
        let res = 'head';
        while(current.next !== this.head){
            res += ' -> ' + current.element;
            current = current.next;
        }
        res += ' -> '+ current.element + ' -> ' + this.head.element + '(re)';
        return res;
    }

    /**
     * 循环链表在末尾添加新元素
     * @param {*} element 
     */
    append(element){
        let node = new Node(element);
        let current = this.head;
        if(!this.head){
            this.head = node;
        }else{
            while(current.next !== this.head){
                current = current.next;
            }
            current.next = node;            
        }
        // 添加循环条件
        node.next = this.head;
        this.length++;
    }
}

// let cLinkedList = new CircularLinkedList();
// cLinkedList.append(1);
// cLinkedList.append(2);
// cLinkedList.append(3);
// console.log(cLinkedList.print());


// ----------------------------------------------------------------------------------------------------------

// 集合
class MySet{
    constructor(){
        // 这里可以用对象或者数组实现----对象实现：{1:1, 5:5, 8:8}；数组实现：[1, 5, 8]
        this.items = new Object();
    }

    has(value){
        // hasOwnProperty只会检测实例属性，如果使用(value in items)，则会检测原型属性和实例属性
        return this.items.hasOwnProperty(value); 
    }
    add(value){
        if(!this.has(value)){
            this.items[value] = value;
            return true;
        }
        return false;
    }
    remove(value){
        if(this.has(value)){
            // delete操作符用于删除对象的某个属性，如果没有指向这个属性的引用（key），那么对象会被释放
            delete this.items[value];
            return true;
        }
        return false;
    }
    clear(){
        this.items = new Object();
    }
    size(){
        let count = 0;
        for(let item in this.items){
            if(this.has(item)){
                count++;
            }
        }
        return count;
    }
    values(){
        let keys = [];
        for(let item in this.items){
            keys.push(item);
        }
        return keys;
    }
}

// 集合操作
// union-并；intersection-交；difference-差；subset-子
MySet.prototype.union = function(otherSet){
    let unionSet = new MySet();
    let values = this.values();
    for(let i = 0; i < values.length; i++){
        unionSet.add(values[i]);
    } 
    values = otherSet.values();
    for(let i = 0; i < values.length; i++){
        unionSet.add(values[i]);    // add会去重
    }
    return unionSet;
}

MySet.prototype.intersection = function(otherSet){
    let intersectionSet = new MySet();
    let values = this.values();
    for(let i = 0; i < values.length; i++){
        if(otherSet.has(values[i])){
            intersectionSet.add(values[i]);
        }
    }
    return intersectionSet;
}

MySet.prototype.difference = function(otherSet){
    let differenceSet = new MySet();
    let values = this.values();
    for(let i = 0; i < values.length; i++){
        if(!otherSet.has(values[i])){
            differenceSet.add(values[i]);
        }
    }
    return differenceSet;
}

MySet.prototype.subset = function(mainSet){
    if(this.size() > mainSet.size()){
        return false;
    }
    let values = this.values();
    for(let i = 0; i < values.length; i++){
        if(! mainSet.has(values[i])){
            return false;
        }
    }
    return true;
}

// let set1 = new MySet();
// set1.add(1);
// set1.add(6);
// set1.add(2);
// console.log(set1.values());
// let set2 = new MySet();
// set2.add(1);
// set2.add(3);
// set2.add(5);
// console.log(set2.values());
// console.log(set1.union(set2).values());
// console.log(set1.intersection(set2).values());
// console.log(set1.difference(set2).values());
// let set3 = new MySet();
// set3.add(1);
// console.log(set2.subset(set1));
// console.log(set3.subset(set1));



// ----------------------------------------------------------------------------------------------------------



// 字典
class Dictionary{
    constructor(){
        this.items = new Object();
    }

    has(key){
        return this.items.hasOwnProperty(key);
    }
    set(key, value){
        this.items[key] = value;    // 添加或更新
    }
    remove(key){
        if(this.has(key)){
            delete this.items[key];
            return true;
        }
        return false;
    }
    get(key){
        return this.has(key) ? this.items[key] : undefined;
    }
    keys(){
        let keys = [];
        for(let key in this.items){
            if(this.has(key)){
                keys.push(key);
            }
        }
        return keys;
    }
    values(){
        let values = [];
        for(let key in this.items){
            if(this.has(key)){
                values.push(this.items[key]);
            }
        }
        return values;
    }
    size(){
        // return this.values().length;
        let count = 0;
        for(let key in this.items){
            if(this.has(key)){
                count++;
            }
        }
        return count;
    }
    clear(){
        this.items = new Object();
    }
}

// let dic = new Dictionary();
// dic.set('first', '1');
// dic.set('second', '2');
// dic.set('third', '3');
// console.log(dic.has('first'));
// console.log(dic.has('forth'));
// console.log(dic.size());
// console.log(dic.keys());
// console.log(dic.values());
// console.log(dic.get('first'));
// console.log(dic.remove('second'));
// console.log(dic.items);


// 散列表--HashTable
class HashTable{
    constructor(){
        // 基于数组进行设计
        this.table = new Array();
    }
    // 散列函数
    hashFunction(key){
        let hash = 0;
        for(let i = 0; i < key.length; i++){
            hash += key.charCodeAt(i); 
        }
        return hash % 37;   // 37为table的长度，余数为0-36
    }
    put(key, value){
        let position = this.hashFunction(key);
        console.log(position + ':' + key);
        this.table[position] = value;
    }
    get(key){
        let position = this.hashFunction(key);
        return this.table[position];
    }
    remove(key){
        let position = this.hashFunction(key);
        this.table[position] = undefined;
    }
}

// let hashTable = new HashTable();
// hashTable.put('javascript', 'a');
// hashTable.put('node', 'b');
// hashTable.put('typescript', 'c');
// hashTable.put('react-native', 'd');
// console.log(hashTable.get('node'));
// hashTable.remove('node');
// console.log(hashTable.table);

// 散列碰撞会使得当不同值经过散列函数处理之后得出相同的位置，从而造成后填到数组的值覆盖前面对应位置的值
/**
 * 线性探测法(LD-Linear Detection)---直接检测数组后面的位置是否为空，如果为空就直接将数据存到该位置；
 * 如果不为空，则继续检查一下位置，直到找到空位
 */
class HashTableLD{
    constructor(){
        // dataStore存储键
        this.dataStore = [];
        this.table = [];
    }
    hashFunction(key){
        let hash = 0;
        for(let i = 0; i < key.length; i++){
            // 将所有的Ascll码相加
            hash += key.charCodeAt(i);
        }
        return hash % 37;
    }
    put(key, value){
        let position = this.hashFunction(key);
        while(this.dataStore[position] !== undefined){
            position++;
        }
        console.log(position + ':' + key);
        this.dataStore[position] = key;
        this.table[position] = value;
    }
    get(key){
        let position = this.hashFunction(key);
        // 前半句保证table中确有这个key；后半句在确定在table的基础上依次向后线性寻找，来找到key
        while(this.dataStore[position] !== undefined && this.dataStore[position] !== key){
            position++;
        }
        return this.table[position];
    }
    remove(key){
        let position = this.hashFunction(key);
        while(this.dataStore[position] !== undefined && this.dataStore[position] !== key){
            position++;
        }
        this.table[position] = undefined;
    }
}

// let hashTable = new HashTableLD();
// hashTable.put('javascript', 'a');
// hashTable.put('node', 'b1');
// hashTable.put('noed', 'b2');
// hashTable.put('typescript', 'c');
// hashTable.put('react-native', 'd');
// console.log(hashTable.get('node'));
// hashTable.remove('node');
// console.log(hashTable.dataStore);

/**
 * 拉链法：将哈希值相同的记录存储在同一个线性链表中
 */
class LinkedListElement{
    constructor(key, value){
        this.key = key;
        this.value = value;
    }
}
class HashTableLL{
    constructor(){
        this.table = [];
    }

    // hash计算函数
    hashFunction(key){
        let hash = 0;
        for(let i = 0; i < key.length; i++){
            hash += key.charCodeAt(i);
        }
        return hash % 37;
    }

    put(key, value){
        let position = this.hashFunction(key);
        if(this.table[position] === undefined){
            // 如果不存在，则建立一个新链表
            this.table[position] = new LinkedList();
        }
        // 如果存在，那么直接append
        this.table[position].append(new LinkedListElement(key, value));
        console.log(position + ':' + key);
    }

    get(key){
        let position = this.hashFunction(key);
        if(this.table[position] !== undefined){
            // 遍历链表
            let current = this.table[position].head;
            while(current){
                if(current.element.key === key){
                    return current.element.value;
                }
                current = current.next;
            }
        }
        return undefined;
    }

    remove(key){
        let position = this.hashFunction(key);
        if(this.table[position] !== undefined){
            let current = this.table[position].head;
            while(current){
                if(current.element.key === key){
                    this.table[position].remove_opt(current.element);
                    return true;
                }
                current = current.next;
            }
        }
        return false;
    }
}

// let hashTable = new HashTableLL();
// hashTable.put('javascript', 'a');
// hashTable.put('node', 'b1');
// hashTable.put('noed', 'b2');
// hashTable.put('typescript', 'c');
// hashTable.put('react-native', 'd');
// console.log(hashTable.get('node'));
// hashTable.remove('node');
// console.log(hashTable.table);