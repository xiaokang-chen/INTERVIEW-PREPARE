# js学习笔记-js设计模式

[toc]

设计模式脑图：

![思维导图](./pic_book/1.png)

## 一、设计模式分类

## 二、创建型设计模式

### 2.1 Constructor设计模式

**构造器模式**是一种在内存已分配给新对象的情况下，初始化该对象的方法。

```js
function Car(model, year, miles) {
    this.model = model;
    this.year = year;
    this.miles = miles;
    this.toString = function(){
        return this.model + " has done " + this.miles + " miles";
    };
}

let civic = new Car("Honda Civic", 2009, 20000);
let mondeo = new Car("Ford Mondeo", 2010, 50000);
```

现在问题在于，对于对象公共的toString()方法，在创建对象时分别在对象内部重新定义。**这种公共函数应该在所有的Car实例之间共享**

js中的prototype属性可以使得我们将公共方法定义到原型对象上，从而在对象之间共享：

```js
// 注意，这里不要使用Object.prototype，会破坏prototype对象
// 在继承中可能会需要重新定义，这个后面再讲
Car.prototype.toString = function() {
    return this.model + " has done " + this.miles + " miles";
}
```

此时，toString存在Car实例的__proto__属性上，所有Car的实例共享。

### 2.1 Module设计模式

js中，模块有利于组织和分离项目中的代码单元。有几种用于实现模块的方法，包括：对象字面量、Modual模式、AMD模块、CommonJS模块、ECMAScript Harmony模块。

在了解模块模式之前，需要了解**对象字面量**。在对象中直接定义属性和函数：

```js
let obj = {
    myProperty: "someValue",

    myMethod: function(){
        return `the myProperty value is ${this.myProperty}`;
    }
}

obj.myMethod()  // "the myProperty value is someValue"
```

**模块模式**是一种为类提供私有和共有封装的方法。它能够使对象拥有共有/私有方法和变量，从而降低命名冲突的可能性。模块模式使用闭包封装“私有”属性，该模式除了返回的是一个对象而不是一个函数之外，非常类似于IIFE（函数立即调用）。

js中没有private和public来定义变量私有和公有，只能通过函数作用域来模拟这个概念。<font color='red'>由于闭包的存在，声明的变量和方法只在本模式内部使用，但在返回对象上定义的变量和方法，对外部都是可用的。</font>

```js
let counterModual = (
    function(){
        let counter = 0;
        return {
            incrementCounter: function(){
                return ++counter;
            },
            resetCounter: function(){
                console.log("counter value prior to reset: " + counter);
                counter = 0;
            }
        };
    }
)();

counterModual.incrementCounter();   // 1
counterModual.resetCounter();   // counter value prior to reset: 1
```

这个例子中，counter变量与全局作用域完全隔离，它的存在局限于模块的闭包内，因此唯一能访问counter的就是return的两个函数。

```js
let myNamespace = (
    function(){
        // 私有计数器变量
        let myPrivateVar = 0;
        // 记录参数的私有函数
        let myPrivateMethod = function(foo){
            console.log(foo);
        };

        return {
            // 公有变量
            myPublicVar: "foo",
            // 共有方法
            myPublicMethod: function(bar){
                // 操作私有属性、调用私有方法
                myPrivateVar++;
                myPrivateMethod(bar);
            }
        };
    }
)()

myNamespace.myPublicVar // foo
myNamespace.myPublicVar = "f"
myNamespace.myPublicVar // f
myNamespace.myPublicMethod("call private method")   // call private method
```

上面的例子表明了私有/共有变量和私有/共有方法的操作。公有属性可以被外界访问并改变；共有方法可以调用私有方法。

```js
let myModule = (
    function(jQ){
        function privateMethod(){
            console.log(jQ.fn.jquery);
        }
        return {
            publicMethod: function(){
                privateMethod();
            }
        };
    }
)(jQuery)
myModule.publicMethod();    // 1.10.2
```

上面的例子将全局变量当作模式的变量传入，并在私有函数中进行调用。

模块模式优点：相比于封装的思想，（面向对象的角度上）更加整洁；其次它可以防止全局作用域污染。
模块模式缺点：当希望改变属性可见性时，需要对每一处使用该属性的地方进行修改；私有方法很难进行扩展。

## 三、结构型设计模式

## 四、行为设计模式
