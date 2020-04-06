function objectFactory(){
    // 创建新的空对象
    var obj = new Object();
    // 取第一个参数
    var Constructor = [].shift.call(arguments);
    // 绑定继承关系
    obj.__proto__ = Constructor.prototype;
    // 绑定this，并判断构造函数返回的是否是对象（globalThis.Person()返回字符串）
    var ret = Constructor.apply(obj, arguments);
    return typeof ret === 'object' ? ret||obj : obj;
  }

// class Person{
//     constructor(name, sex){
//         this.name = name;
//         this.sex = sex;
//     }
//     say(word){
//         console.log("hello" + word);
//     }
// }

// function Person(name, sex){
//     this.name = name;
//     this.sex = sex;
//     return {age: 18}
// }
// Person.prototype.say = function(word){
//     console.log("hello" + word);
// }

// let p = new Person('xiaoming', 'male');
// let q = objectFactory(Person, "xiaoming", "male");

function Employee(name, dept) {
    this.name = name || "";
    this.dept = dept || "general";
}

function WorkerBee(name, dept, projs) {
    this.base = Employee;
    this.base(name, dept);
    this.projects = projs || [];
}
WorkerBee.prototype = new Employee;

function Engineer(name, projs, mach) {
    this.base = WorkerBee;
    this.base(name, "engineer", projs);
    this.machine = mach || "";
}
Engineer.prototype = new WorkerBee;

let jane = new Engineer("Doe, Jane", ["navigator", "javascript"], "belau");
console.log("name: "+ jane.name)
console.log("dept: "+ jane.dept)
console.log("projects: "+ jane.projects)
console.log("machine: "+ jane.machine)