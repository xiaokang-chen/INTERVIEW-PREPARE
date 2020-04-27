// // 腾讯笔试输入输出
// while(line = readline()){
//     let list = line.split(" ");
//     console.log(parseInt(list[0]) + parseInt(list[1]));
// }

class Queue{
    constructor(){
        this.items = new Array();
    }
    // PUSH X
    enQueue(element){
         this.items.push(element);
         return element;
    }
    // POP
    deQueue(){
        if(this.isEmpty()) return false;
        return this.items.shift();
    }
    // TOP
    front(){
        if(this.isEmpty()) return false;
        return this.items[0]; 
    }
    // isEmpty
    isEmpty(){
        return this.items.length === 0;
    }
    // CLEAR
    clear(){
        return this.items = new Array();
    }
    // SIZE
    size(){
        return this.items.length;
    }
}

let queue = new Queue();
let t = 1;
for(let i = 0; i < t; i++){
    let q = 1;
    for(let j = 0; j < q; j++){
        let list = ["PUSH", "1"];
        if(list[0] == "PUSH"){
            console.log(queue.enQueue(parseInt(list[1])));
        }else if(list[0] == "TOP"){
            console.log(queue.front());
        }else if(list[0] == "POP"){
            console.log(queue.deQueue());
        }else if(list[0] == "SIZE"){
            console.log(queue.size());
        }else if(list[0] == "CLEAR"){
            console.log(queue.clear());
        }else{
            continue;
        }
    }
}

// let queue = new Queue();
// console.log(queue.enQueue(1));
// console.log(queue.enQueue(2));

// function isChildDomain(main, sub){
//     if(main.length <= sub.length){
//         return 'no';
//     }
//     let j = main.length - 1;
//     for(let i = sub.length-1; i >= 0; i--, j--){
//         if(sub[i] !== main[j]){
//             return "no";
//         }
//     }
//     if(main[j] !== "."){
//         return "no";
//     }
//     return 'yes';
// }
// console.log(isChildDomain("123.qq.com", "qq.com"));

// function agentResolve(str){
//     let i = 0;
//     let res = [];
//     for(let j = 1; j < str.length; j++){
//         if(str[j] === "/"){
//             res.push(str.slice(i, j));
//         }
//         if(str[j] === ")"){
//             i = j + 2;
//         }
//         if(str[j] === " "){
//             i = j + 1;
//         }
//     }
//     return res;
// }

// let str = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKt/537.36 (KHTML, Like Gecko) Chrome/80.0.3987.106 Safari/537.36";
// console.log(agentResolve(str));