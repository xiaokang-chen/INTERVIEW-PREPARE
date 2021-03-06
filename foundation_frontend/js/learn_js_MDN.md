# js学习笔记-MDN

[toc]

## 一、初级

js的标准称为ECMAScript，ES6在2015年被发布，所以也称为ECMAScript 2015。现在最新的标准是ECMAScript 2020，标准链接[点击这里](https://tc39.es/ecma262/)。

该学习分以下章节：**1.介绍、2.语法和数据类型、3.控制流和错误处理、4.循环与迭代、5.函数、6.表达式和运算符、7.数字与日期、8.文本格式化、9.索引集合、10.带键集合、11.处理对象、12.对象模型的细节、13.Promises、14.迭代器与生成器、15.元编程、16.js模块**

### 1.1 介绍

#### 1.1.1 js用途

js的核心部分可通过添加对象来扩展功能，主要可用在客户端和服务端

1. 客户端js
**通常依靠v8等客户端js引擎来运行**。客户端js通过提供对象，控制BOM和DOM。例如，客户端js支持在Web上的鼠标点击、表单提交、页面导航等。
2. 服务端js
**通常依靠nodejs等服务端js引擎来运行**。服务端js通过在提供在服务器上运行的js对象来扩展功能。例如，服务端js支持应用和数据库通信、在服务器上进行文件操作等。

#### 1.1.1 js与java的区别

js是一种基于原型而不是基于类的面向对象语言。而java是基于类的面向对象语言。基于类的语言是构建在类和实例两个概念之上的（例如学生这个类，和小明同学这个实例）；基于原型的的语言只有对象，原型是一个模板，新对象可以从中获取原始的属性和方法，在此基础之上添加自己的属性，**既可以是创建时声明也可以是运行时声明**（这一点java是不支持的，java类中的属性在创建后就不能改变）。

主要区别如下：
|javascript|java|
|-|-|
|基于原型实现面向对象，可以动态添加属性|基于类实现面向对象，不能动态添加属性|
|变量不需要声明类型（动态类型）|变量需要声明类型（静态类型）|
|不能直接自动写入硬盘|可以直接自动写入硬盘|

#### 1.1.2 hello world

```js
function first(str){
    alert('Hello ' + str);
}

first('World!');
```

### 1.2 语法和数据类型

#### 1.2.1 基础

1. js区分大小写、并使用Unicode字符集。每一行js代码末尾要有分号（可以不加，不报错，但是不建议这么做，会出现不可预料的Bug）。
2. 注释和java及c++类似，都是单行//或多行/**/。
3. js声明有三种，包括var、let、const。其中不建议再使用var了，var全部使用let代替来声明变量（var声明会导致作用域问题），而常量用const声明。也可不加声明关键字直接声明，但是在strict模式下会出错。

#### 1.2.2 变量

1、**undefined和null**

1） undefined来判断一个变量是否被赋值

```js
let input;
if(input === undefined){
    console.log(1);
}else{
    console.log(2);
}
```

上面这段程序会输出1，因为input没有被定义

2）布尔值环境中undefined == false
![布尔值环境中undefined == false](./pic/1.png)

3）数值环境中undefined被转化为NaN
![数值环境中undefined被转化为NaN](./pic/2.png)

4）null在求值时作为0；在布尔环境中作为false
![null在求值时作为0；在布尔环境中作为false](./pic/3.png)

2、**变量提升**

ES6中引入let后，变量提升就不存在了。变量提升就是在使用var声明变量时，先执行、后声明是不会报错的，它会将变量提升到语句最前面。
![变量提升](./pic/4.png)

3、**函数提升**

对于函数来说，只有函数声明会被提升到顶部，而函数表达式不会：
![函数提升](./pic/5.png)

4、**全局变量**

全部变量是全局对象的属性。网页中，全局对象就是window。可以通过形如window.variable访问全局变量。在window下声明的属性都可以通过全局对象window访问：
![全局变量](./pic/6.png)

5、**常量**

常量使用const关键字定义。常量只读，不可改变（对于数值、字符串和函数等）：
![常量被保护](./pic/7.png)
常量对于对象和数组是不受保护的（也就是说可写）：
![常量不被保护](./pic/8.png)

#### 1.2.3 数据结构和类型

最新的ECMAScript标准定义了8种数据类型

- 七种基本数据类型
1）Boolean（布尔值）
2）null
3）undefined
4）Number（数字）
5）BigInt（任意精度的整数）
6）String（字符串）
7）Symbol（代表）- 一种实例是唯一且不可改变的数据类型
- 非基本数据类型（引用类型）
8）Object（对象）

<font color='red'>基本数据类型指的是简单的数据段，他们的值以键值对的形式保存在栈中</font>

-**数据类型的转换**
数字转化为字符串：

```js
let x1 = "The answer is " + 1;
// x1输出为"The answer is 1"
let x2 = "37" + 3;
// x2输出为"373"
```

字符串转化为数字：

```js
let y1 = "37" - 7;
// y1输出为30
let y2 = +"1.1";
// y2输出为1.1
let y3 = parseInt("123");
// y3输出为123
let y4 = parseFloat("123.123");
// y4输出为123.123
```

-**字面量**
正则：/ab+c/
字符串中的转义字符：\

### 1.3 控制流和错误处理

#### 1.3.1 if...else

如果需要在条件中赋值，那么就对赋值语句前后加一对括号：
![if...else](./pic/9.png)
注意：如下代码是错的：

```js
if(1 = 2){
    // statements here
}
```

if括号里面跟的是条件判断，需要用==或者===

<font color='red'>在条件语句中，如下值被视为false:</font>

- false
- undefined
- null
- 0
- NaN
- ""

#### 1.3.2 switch

```js
// 每个case后的break都是可选的
switch(expression){
    case label_1:
        statements_1;
        break;
    case label_2:
        statements_2;
        break;
    ...
    default:
        statements_def;
        break;
}
```

#### 1.3.3 try/catch/throw

throw: 用来抛出一个异常
try...catch: 捕获异常并处理
finally: 无论异常与否都会执行

案例：
![try...catch](./pic/10.png)

#### 1.3.4 Error对象

根据抛出的错误类型，可以用'name'和'message'获取错误的详细信息。
![try...catch](./pic/38.png)

#### 1.3.5 Promises

ES6增加了Promise对象，用来对异步流程进行控制
Promise有以下几种状态：

- pending：初始状态，表示正在执行。
- fulfilled：成功完成操作
- rejected：失败，没有完成操作

具体细节到promise章节再详细讲

### 1.4 循环与迭代

js提供了以下方式用来循环：

- for
- do...while
- while
- for...in
- for...of
其中还有labeled、break、continue语句用来辅助控制循环。

#### 1.4.1 for

for语句是最简单的循环控制语句。包括了初始化表达式（let i = 0）、条件表达式（i<nums.length）、运算表达式（i++）。

```js
for(let i = 0; i < nums.length; i++){
    ...
}
```

#### 1.4.2 do...while

do...while语句一直重复直到条件表达式为false：

```js
let i = 3;
do{
    ...
    i--;
}while(i > 0)
```

语句会先执行do内的语句，再去判断while条件。所以do...while至少可以执行一次。

#### 1.4.3 while

while是for循环的一个变种，也和do...while类似，只不过是先判断条件，再去执行语句。

```js
let i = 3;
while(i > 0){
    ...
    i--;
}
```

#### 1.4.4 label、break、continue

label可以标记一个循环，之后用break、continue来指出程序是否停止或继续循环。

```js
markLoop:
    while(true){
        ...
    }
```

上面的markLoop就标记了一个循环。下面举个例子来演示一下label的用法：

```js
let num = 0;
for(let i = 0; i < 10; i++){
    for(let j = 0; j < 10; j++){
        if(i === 5 && j === 5){
            //break默认终止的循环是当前break语句的直接上
            //层循环，所以在i和j等于5之后，j的循环结束，
            // 外层i的循环从6继续
            break;
        }
        num++;
    }
}
// 输出95（0加到99一共100个数，56到60这5个数没加上）
console.log(num);
```

```js
let num = 0;
// label
outPonit:
    for(let i = 0; i < 10; i++){
        for(let j = 0; j < 10; j++){
            if(i === 5 && j === 5){
                // break后加上中断区域，在符合条件时，直接中断
                // 外层循环，直接返回（此时i和j都等于55）
                break outPonit;
            }
            num++;
        }
    }
// 输出为55（0加到54一共55）
console.log(num);
```

```js
let i = 0;
let j = 0;
while(i < 5){
    i++;
    if(i === 3){
        // 当i等于3的时候，终止当前循环，继续下次循环，
        // 所以最后输出的时候少输出一个数。
        continue;
    }
    n += i;
    console.log(n);
}
// 输出1, 3, 7, 12
```

```js
// 检查22 21 12 11这四个数
let i = 2;
checkiandj:
    while(i > 0){
        let j = 2;
        let sum = 0;
        checkj:
            while(j > 0){
                sum = 10*i + j;
                j -= 1;
                // 22
                // 由于查到12的时候，满足条件，直接从外层循环中
                // 跳出，所以就进不到数字为11的循环判断了
                if((sum % 3) == 0){
                    i -= 1;
                    continue checkiandj;
                }

                // 22 11
                // 等同于continue，直接跳出代码块的剩余部分
                // 到下次循环（内层）继续执行
                // if((sum % 3) == 0){
                //     continue checkj;
                // }
                console.log(sum + '不能被三整除');
            }
        i -= 1;
    }
```

#### 1.4.5 for...in

for...in以**任意顺序**遍历一个对象的除Symbol以外的可枚举属性（包括原型链上的，如果不想遍历原型链属性，则加上hasOwnProperty判断）。主要用于遍历对象，<font color='red'>而不太适合遍历数组（因为对于数组来说，遍历顺序很重要）</font>。

```js
let obj = {"1":1, "2":2, "3":3};
function Person(name) {
    this.name = name;
}
Person.prototype = obj;
let person = new Person('xiaoming');
for(let key in person){
    console.log(person[key]);
}
// 输出xiaoming,1,2,3,

// 遍历中去除原型链属性
for(let key in person){
    if(person.hasOwnProperty(key)){
        console.log(person[key]);
    }
}
// 输出为xiaoming
```

#### 1.4.6 for...of

for...of用于可迭代对象（String、Array、Map、Set等）的循环。对象不属于可迭代对象，不能使用for...of循环。

```js
let arr = [1,2,3];
// 因为js中数组也是对象（键为数字的对象），
// 所以也可以通过对象的方式进行赋值
arr.foo = "hello"

for(let item of foo){
    console.log(item);
}
// 输出结果为1,2,3。只会遍历数组元素，数组中自己定义的
// 对象元素不会显示
```

### 1.5 函数

#### 1.5.1 this的用法

this代表**当前执行代码的环境对象**。在非严格模式下，总是指向一个对象，；在严格模式下可以是任何值。

在全局中，this指向globalThis（全局对象）。这个属性在浏览器中代表window，在node中代表global。

```js
function Person(){
    // The Person() constructor defines 'this' as itself.
    this.age = 0;

    setInterval(function growUp(){
    // In nonstrict mode, the growUp() function defines 'this' as the global object, which is different from the 'this' defined by Person() constructor.
    this.age++;
    }, 1000);
}
```

在ES5中，通过把this的值赋给一个变量来修复这个问题：

```js
// 将Person内的this赋值给一个self变量
// 其他地方再用self时，其实就是用的Person内的this
function Person(){
    // Some choose 'that' instead of 'self'
    let self = this;
    // choose one and be consistent
    self.age = 0;

    setInterval(function growUp(){
        // The callback refers to 'self' variable of which the value is the expected object.
        self.age++;
    }, 1000);
}
```

或者可以使用箭头函数来确定this指向

```js
// 箭头函数的this与其父函数（setInterval）的this相同-指向Person
function Person(){
    this.age = 0;

    setInterval(() => {
        this.age++;
    }, 1000);
}
```

#### 1.5.2 this指向问题

需要记住：**this的指向在函数定义的时候是确定不了的，只有函数执行的时候才能确定this到底指向谁。**<font color='red'>this最终指向调用它的那个对象！</font>

1. 如下图，可以看到test()调用（省略了调用的全局对象window）时，this指向调用对象window。
![this指向1](./pic/11.png)

2. 如下图，调用y函数的对象是b，所以y函数中的this指向b。
![this指向2](./pic/12.png)

3. 如下图，直接调用着是c对象，所以this指向的是c。
![this指向3](./pic/13.png)

4. 如下图，a.c.x被赋给了y，**这时候函数x还没执行**，在下一句y()时才执行，y()相当于window.y()，所以，this指向window。
![this指向4](./pic/14.png)

5. 构造函数中this指向：new关键字会改变this指向，将this指向实例化的对象a。
![this指向5](./pic/15.png)

6. 当this碰到return时：如果返回值是一个对象，那么this指向的就是那个返回的对象；如果返回值不是一个对象，那么this还是指向函数的实例化对象。
![this指向6](./pic/16.png)
<font color='red'>PS：虽然null也是对象，但是它比较特殊，return null时，返回的还是函数的实例。</font>

7. 箭头函数this指向：箭头函数里的this指向与箭头函数上下文的this相同：
![this指向7](./pic/17.png)
下述b函数的上下文没有函数对象，所以默认为window，window对象里没有num属性，所以为undefined。
![this指向8](./pic/18.png)

<font color='red'>总结：
</font>
一、普通函数中this：
1）总是代表它的直接调用者，如a.b.c()，那么c函数中的this指向为b。
2）没有直接调用者，则指向window。
3）严格模式下（use strict），this为undefined
4）当使用call、apply、bind绑定时，this指向绑定对象

二、箭头函数中this：
1）与上下文的函数对象（外层函数）中this指向一致，上下文中没有函数对象，则指向window。
2）call、apply、bind无法改变箭头函数中this指向

#### 1.5.3 几个预定义函数

- eval()
将传入的字符串当作js代码执行
- isNaN()
判断一个值是否是NaN
- parseInt()
解析字符串，返回一个整数
![几个预定义函数](./pic/19.png)

#### 1.5.4 闭包（重要）

js允许函数嵌套，内部的函数除了可以访问自己定义的变量和函数，还可以访问外部函数所能访问到的所有变量和函数。<font color='red'>当内部函数以某一种方式被外部函数作用域访问时（常见外部函数return内部函数），一个闭包就产生了</font>

```js
let Func = function(name){
    let getName = function(){
        return name;
    }
    return getName;
}
let myPet = Func('dog');
// myPet是一个函数，即主函数return的getName
sizeof myPet;
// 由于getName可以访问外部函数属性，所以name被返回
myPet();
```

<font color='red'>闭包的使用场景</font>

1、setTimeout传参

```js
// IE9之前原生setTimeout的处理函数中不能带有额外参数，以下在IE中会出错
setTimeout(function(param){
    console.log(param);
}, 1000)

// 可以通过闭包实现传参
function func(param){
    return function(){
        console.log(param);
    }
}
let f = func(1);
setTimeout(f, 1000);
```

<p id="jump2">2、为节点绑定循环click事件</p>

```html
<p id="info">123</p>
    <p>E-mail: <input type="text" id="email" name="email"></p>
    <p>Name: <input type="text" id="name" name="name"></p>
    <p>Age: <input type="text" id="age" name="age"></p>
```

```js
function showContent(content){
    document.getElementById('info').innerHTML = content;
};

function setContent(){
    var infoArr = [
        {'id':'email','content':'your email address'},
        {'id':'name','content':'your name'},
        {'id':'age','content':'your age'}
    ];
    for (var i = 0; i < infoArr.length; i++) {
        var item = infoArr[i];
        document.getElementById(item.id).onfocus = function(){
            showContent(item.content)
        }
    }
}
setContent();
```

循环中创建了三个闭包，他们的词法环境都是item。在onfocus动作发生之前，只是将函数进行绑定，而并没有执行。但是当onfocus触发时（异步操作在同步之后），循环早已结束，执行回调函数时，函数的item.content参数都指向数组中最后一个（'your age'）。
上述的绑定明显不是我们想要得到的结构。所以这里有两种方法解决DOM元素循环绑定事件的问题：

- 使用ES6的let，避免声明提前，作用域只在当前块内

```js
for (var i = 0; i < infoArr.length; i++) {
        let item = infoArr[i];
        document.getElementById(item.id).onfocus = function(){
            showContent(item.content)
        }
}
```

- 将绑定事件放到**函数工厂**（闭包）中，为函数的每一次回调都创建一个新的环境（每一次循环到会将item.content放到callBack中。

```js
function callBack(content){
    return function(){
        document.getElementById('info').innerHTML = content;
    }
}
for (var i = 0; i < infoArr.length; i++) {
        var item = infoArr[i];
        document.getElementById(item.id).onfocus = callBack(item.content);
}
```

- 绑定事件放到立即执行函数中

```js
for(let i = 0; i < infoArr.length; i++){
    (
        function(){
            var item = infoArr[i];
            document.getElementById(item.id).onfocus = function(){
                showContent(item.content);
            }
        }
    )();    // 放到立即执行函数上，每次循环得到的item.content值会立刻绑定到事件上
}
```

<font color='red'>这里需要注意一下立即执行函数：</font>声明一个匿名函数，并立即调用的函数，称为**立即执行函数**。

```js
// 写法1
(
    function(){
        ...
    }
)();

// 写法2
(
    function(){

    }()
)
```

#### 1.5.5 arguments对象

函数的传参是会被保存到一个类似数组的arguments对象中，这一点，对于我们来说是透明的。我们可以在函数内使用arguments对象来获取我们传入到函数中的变量。

```js
// 其中separator永远等于第一个参数，它等同于arguments[0]
function myConcat(separator){
    let result = '';
    let i;
    for(i = 1; i < arguments.length; i++){
        result += arguments[i] + separator;
    }
    return result;
}

// 输出："red.green.blue"
myConcat(".", "red", "green", "blue");
```

注意：arguments只是**类数组对象**，它并没有数组的全部方法。此外argumnets与显式参数的关系如下：
![argumnets与显式参数的关系](./pic/39.png)

#### 1.5.7 函数参数

ES6之后，函数有两个类型的参数：默认参数、剩余参数

1、默认参数

```js
// 使用默认参数，就不需要在函数体中进行undefined判断了
function multiply(a, b = 1){
    return a*b;
}
// 返回5，b已经被赋默认值1
multiply(5);
```

2、剩余参数
剩余参数允许将不确定数量的参数表示为**数组**。

```js
function multiply(multiplier, ...args){
    return args.map(x => multiplier * x);
}

// [2,4,6]
console.log(multiply(2, 1, 2, 3));
```

### 1.6 表达式和运算符

#### 1.6.1 运算符

1. 赋值运算符：x=y、x+=y、x>>=y...
复杂赋值-**解构**

    ```js
    let foo = ["one", "two", "three"]
    let [one, two, three] = foo;
    ```

2. 比较运算符：>=、===、!=、!==...

    ```js
    // 严格相等在相等的基础上加上了类型检查
    3 != '3'    // false，3与'3'操作数相等
    3 !== '3'   // true，3与'3'类型不同
    ```

3. 算数运算符：+、%、++、**（指数）...

    ```js
    // 与java等语言不同，除法返回结果是小数，而非整数
    1 / 2   //0.5
    1.0 / 3.0 === 1.0 / 3.0  // true
    2**3    // 8
    ```

4. 位运算符：&、~、^（异或）、>>（算数右移）、>>>（无符号右移）...

    ```js
    // 9:1001   15:1111
    9 >> 2  // 2    1001带符号（正补0）右移两位变为0010
    // 100...1111（首位符号位）无符号（补0）右移两位变为111...1100
    -15 >>> 2   // 1073741820
    ```

5. 逻辑运算符：&&、||、!
6. 字符串运算符：+、+=

    ```js
    "my " + "string";  // "my string"
    let myString = "hel";
    myString += "lo";   // "hello"
    ```

7. 条件（三元）运算符：condition ? value1 : value2

    ```js
    let status = (age >= 18) ? "adult" : "minor";
    ```

8. 逗号运算符：

    ```js
    var x = [1,2,3,4,5]
    var a = [x, x, x, x, x];

    for (var i = 0, j = 4; j >= 0; i++, j--)
    console.log('a[' + i + '][' + j + ']= ' + a[i][j]);
    // 输出二维矩阵a的斜对角线元素
    // a[0][4] = 5 ... a[4][0] = 1
    ```

9. 一元运算符：delete、typeof、void

    ```js
    // delete删除数组元素
    let colors = ["red", "green", "blue"];
    delete colors[1];
    // 删除数组元素后，对应位置为空，但是数组整体长度不变
    colors  // ["red", empty, "blue"];
    colors.length   // 3
    1 in colors  // false

    // 如果想使对应索引还在colors中，对其赋值undefined即可
    colors[1] = undefined;
    1 in colors   // true
    ```

    ```js
    // typeof返回操作数的类型
    typeof Date;    // function
    typeof Math;    // object
    typeof null;    // object
    typeof undefined;   // undefined
    ```

    ```html
    <!-- void表示运算没有返回值 -->
    <a href="javascript:void(0)">Click</a>
    ```

10. 关系运算符：

关系运算符对操作进行比较，返回相应的布尔类型。

```js
// in操作符判断指定的属性是否存在于所指定的对象
let colors = new Array("red", "green", "blue");
1 in colors   // true   索引1在数组中
3 in colors   // false  索引3不在数组中
'red' in colors    // false  in前的属性应指定为数组的索引（键）

let animal = {type: 'dog', year: 2015};
'type' in animal    // true   type在animal中
'sex' in animal     // false   sex不在animal中
```

```js
// instanceof判断对象是否是所指定的类型
let date = new Date();
date instanceof Date;
// 值得注意的是，如果a对象的构造函数A继承自B构造函数。a instanceof B将判别为true
```

#### 1.6.2 表达式

表达式包括this、new、super、扩展所引领的语句

1、this
this关键字指代当前对象，this在函数章节已详细介绍，这里介绍this改变。
注意：改变this指向有**call、apply、bind**三个函数：

利用call来改变this指向：
![call改变this指向](./pic/45.png)

三者区别：
call：function.call(this, arg1, arg2)   return函数的立即调用
apply：function.apply(this, [arg1, arg2])   return函数的立即调用
bind：function.bind(this)   return函数的拷贝，以便稍后调用

<font color='blue'>一些需要注意的地方：</font>
首先创建一个Person类，并创建一个实例化对象p1：
![call改变this指向](./pic/46.png)

1. call方法和apply的唯一区别在于其接受的第二个参数。apply接受的是**参数数组**，而call接受的是**参数列表**；此外bind也只接受**参数列表**
2. bind返回的是函数的拷贝，所以最后比call和apply多一个()
![call改变this指向](./pic/47.png)
3. 多次bind是无效的，这是因为bind的实现，相当于使用函数在内部包含了一个apply/call。

2、new
new用来创建一个自定义或预置类型的对象实例。

```js
let num = new Number()  // 预置类型
let person = new Person()   // 自定义类型（构造函数）
```

<font color='red'>new创建一个用户定义类型的对象实例会进行如下操作：</font>

```js
function Person(name, sex){
    this.name = name;
    this.sex = sex;
    this.getInfo = function(){
        console.log(this.name + ':' + this.sex);
    }
}
let person1 = new Person('xiaoming', 'male');
```

- 创建一个空的js对象（即{}）

    ```js
        let person1 = {};
    ```

- 设置继承关系：设置新对象的__proto__属性指向构造函数的prototype对象（将空对象继承自构造函数的原型对象）

    ```js
        person1 .__proto__ =  Person.prototype;
    ```

- 绑定this：将新创建的对象作为this的上下文

    ```js
        Person.call(person1)
    ```

- 变量初始化：将要给对象初始化的值赋给对象中对应变量

    ```js
        person1.name = 'xiaoming';
        person1.sex = 'male';
    ```

全部代码：

```js
function objectFactory(){
  var obj = new Object();
  // 取参数中第一个
  var Constructor = [].shift.call(arguments);
  obj.__proto__ = Constructor.prototype;
  //  ret是在构造函数有返回值时，等于其返回值
  // 1. 构造函数返回对象时，实例中只能访问返回的对象
  // 2. 构造函数返回基本类型时，相当于没返回
  var ret = Constructor.apply(obj, arguments);
  return typeof ret === 'object' ? ret || obj : obj;
}
```

下面图文来观察new对象的**步骤**：
通过new的方式创建对象person1：
![new对象的过程1](./pic/40.png)
通过细化操作创建对象person2：
![new对象的过程2](./pic/41.png)
可以看到两种方式创建结果相同：
![new对象的过程3](./pic/42.png)

3、super
super关键字用于调用一个对象的父对象上的函数。
语法：
1）调用 父对象/父类 的构造函数
super([arguments]);
在调用父对象构造函数前，<font color='red'>super必须在使用关键字this之前</font>
2）调用 父对象/父类 的方法
super.functionOnParent([arguments]);
![super](./pic/43.png)
可以看到：
![super](./pic/44.png)

4、扩展语句
扩展语句通常用在函数调用中，等同于apply：

```js
function myFunc(x, y, z){}
let args = [0, 1, 2];
// 相当于在没有改变this指向的前提下，传递了变量数组
myFunc.apply(null, args)
```

上面的写法很不方便，可以用扩展语句来写：

```js
myFunc(...args)
```

值得注意的是...与Object.assign一样，都是**浅拷贝**，只能拷贝属性值，而无法拷贝对象引用：

![扩展语句](./pic/48.png)

### 1.7 数字与日期

#### 1.7.1 数字

在js中，数字均为双精度浮点类型。二进制用0b表示；十六进制用0x表示；多0的数用指数表示。

```js
0b101   // 5
0x10    // 16
2e3     // 2000
```

#### 1.7.2 数字对象

JS有很多内置数字对象：

```js
Number.MAX_VALUE    // 最大值
Number.MIN_VALUE    // 最小值
Number.NaN      // 非数字，等于NaN
// **-------整数数字在以下范围内是准确的-------**
Number.MAX_SAFE_INTEGER     // 最大安全数字
Number.MIN_SAFE_INTEGER     // 最小安全数字
// **----------------------------------------**
Number.POSITIVE_INFINITY    // 正无穷，等于Infinity
Number.NEGATIVE_INFINITY   // 负无穷，等于-Infinity

Math.PI     // π
Math.E      // e
```

还有常用的一些内置函数

```js
Number.parseInt()   // 字符串解析成整型
Number.isSafeInteger()    // 判断传递的值是否为安全数

// **----------------Math方法------------**
Math.floor(a)    // 将小数向下取整
Math.ceil(a)     // 将小数向上取整
Math.pow(a, b)  // 返回a的b次方幂  
Math.sqrt(a)     // 返回a的平方根
Math.round(a)   // 对a进行四舍五入
Math.trunc(a)   // 将a的小数点去掉，保留整数部分
```

#### 1.7.3 日期对象

基于日期Date的实例，是呈现时间中的某个时刻。Date对象是基于Unix Time Stamp（1970年1月1往后算毫秒）

Date()构造函数有4种基本形式。

1. 没有参数

    ```js
    // 新创建的now代表对象实例化时刻的时间
    let now = new Date();
    now     // Sat Apr 04 2020 22:24:59 GMT+0800 (中国标准时间)
    ```

2. Unix时间戳

    ```js
    // 新创建一个以时间戳作为参数的时间对象
    let time = new Date(1000000000000)
    time     // Sun Sep 09 2001 09:46:40 GMT+0800 (中国标准时间)
    ```

3. 时间戳字符串（不推荐！！！存在浏览器差异）

    ```js
    // 传入符合标准（能被Date.parse()正确识别）的字符串
    let time = new Date('01 01 2020')
    time    // Wed Jan 01 2020 00:00:00 GMT+0800 (中国标准时间)
    ```

4. 具体日期+时间
具体时间+日期的形式应该为：
<font color='red'>new Date(**year, monthIndex**[, day [, hours [, minutes [, seconds [, milliseconds]]]]])</font>

    ```js
    // 年和月的索引（0-11）是必选参数，其余是可选
    let date = new Date(2020, 0)
    date    // Wed Jan 01 2020 00:00:00 GMT+0800 (中国标准时间)
    ```

日期对象还有一些方法，分为：

- get：getDate()、getDay()...
- set：setDate()、setMonth()...
- to：toJSON()...
- parse：parse()、now()...

### 1.8 文本格式化

#### 1.8.1 字符串字面量

```js
'foo'
// \x之后的被认为是一个16进制数转义序列
'\xA9'      // "©"
// \u之后的被认为是一个unicode转义序列
'\u00A9'    // "©"
```

#### 1.8.2 字符串对象

```js
let s = new String("foo");
s   // String {"foo"}
typeof s    // 'object'
```

在String字面量上可以使用String对象的所有方法。由于String对象在有的时候执行与我们的直觉并不一样(如eval(new String("1+1")))，所以不建议用，直接用字面量就可以了。

#### 1.8.3 字符串方法

![String方法](./pic/49.png)

#### 1.8.4 模板字符串

1. 字符串多行

    ```js
    // 如果用引号，则必须加上换行符，行末尾还要加上结束符\
    console.log("string line 1\n\
    string line 2")

    // 用反勾号``包裹的字符串直接换行，无需多余操作
    console.log(`string line 1
    string line 2`)
    ```

2. 嵌入表达式

    ```js
    let a = 5;
    let b = 10;
    // 使用引号，则需要通过加号来连接字符串和数字计算值
    console.log
    ("Fifteen is " + (a + b) + " and\nnot " + (2*a+b) + '.')

    // 使用反勾号可以直接将变量和计算放到${}中
    console.log(`Fifteen is ${a+b} and\nnot ${2*a+b}.`)
    ```

### 1.9 索引集合

索引集合即以索引进行排序的数据集合，包括数组以及类数组结构。

#### 1.9.1 数组对象

创建数组可以通过Array对象或者数组字面量[]来创建。

```js
// 以下均创建了一个包含1 2 3三个数字的数组
let arr1 = new Array(1,2,3);
let arr2 = [1,2,3]

// 当数组对象中只有一个数字类型参数时，代表数组长度
let arr = new Array(3);     // (3) [empty × 3]

let arr3 = new Array("3")   // ["3"]
```

#### 1.9.2 数组填充

数组可以看成是一个键为数字（0~length-1）的对象，数组的键没有要求必须是数字，所以类似于对象的赋值也是可以的。

```js
let arr = [];
arr[0] = 1;
arr[1] = '1';
arr['pi'] = 3.14;

arr     // (2) [1, "1", 2.5: 2.5, pi: 3.14]
arr.length      // 2，对象方式赋值不作为数组内的元素，只作为对象的属性

// arr中默认是empty，代表空；如果给数组元素赋undefined，也会占位
arr = [];
arr.length;     // 0
arr[0] = undefined;
arr.length      // 1
```

#### 1.9.3 数组遍历

```js
let colors = ['red', 'green', 'blue'];

// 第一种方法：使用for循环（或while）
for(let i = 0: i < colors.length; i++){
    ...
}
// 第二种方法：使用foreach()
colors.forEach(function(color){
    ...
})
// 第三种方法：使用for...of
for(let item of colors){
    ...
}
```

<font color='red'>注意：不要使用for...in遍历数组。因为for...in是用来遍历对象的，遍历数组的话会将数组中的所有键（在非索引集合的元素也会遍历）都遍历出来</font>

#### 1.9.4 类数组对象

像document.getElementByTagName()返回的NodeList或者函数内部的arguments对象，它们表面看起来像数组，但是却没有数组的一些属性和方法。可以通过Array的原生方法去处理这些对象：

```js
function printArguments() {
    Array.prototype.forEach.call(arguments, function(item){
        console.log(item);
    })
}
```

arguments不是数组，所以无法直接用forEach：
![类数组对象1](./pic/50.png)
通过Array的prototype（原型）方法可以处理arguments：
![类数组对象2](./pic/51.png)

#### 1.9.5 二进制数组-ArrayBuffer

ArrayBuffer对象、TypedArray视图、DataView视图是js用来操作二进制数据的一套接口。很多API都使用了二进制数组来操作二进制数据，包括File、XMLHttpRequest、Fetch、Websockets、Canvas等。
<font color='red'>需要注意的是：二进制数组与arguments一样，也是类数组对象，不是真正的数组。</font>

- ArrayBuffer对象
代表内存中的一段二进制数据，**不能直接操作**，可以通过视图进行操作。视图实现了数组接口，所以，可以使用数组的方法操作内存。
- TypedArray视图
包括9种类型视图，如Int16Array（16位整数）、Unit8Array（无符号8位整数）、Float32Array（32位浮点数）等。
- DataView视图
根据TypedArray基本视图进行自定义组合。比如第一个字节是8位整数，第二个事16位浮点数...

总的来说：<font color='red'>ArrayBuffer用来表示原始的二进制数据；TypedArray用来读写简单类型的二进制数据，DataView用来读写复杂类型的二进制数据</font>

下面简单写一个例子：

![二进制数组](./pic/52.png)

### 1.10 带键集合

#### 1.10.1 Map

Map是一个存储键值对的集合，可以**按照数据插入的顺序遍历所有元素**。

```js
let person = new Map();
person.set('name', 'xiaoming');
person.set('sex', 'male');
person.set('age', 20);

person.get('age');      // 20
person.has('habit');    // false
person.delete('name')   // true
person.size;        // 2

// 用for...of遍历Map对象
for(let [key, value] of person){
    console.log(key + ":" + value);
}
//   sex:male
//   age:20

person.clear();     // 清空
```

Map和Object很像，但是相较于Object来说有更多的优势：

1. Object的键均为String类型，Map的键可以是任意类型。
2. Object的大小没有属性可以直接获得，需要手动去算，而Map直接使用size属性获得
3. 在遍历Map时是有序的（按照插入Map的顺序）

特别在需要将原始值存储为键的时候（比如数字为键），**必须用Map**。因为Object的键只能存储字符串。

<font color='red'>WeakMap对象（ES6）：</font>
WeakMap 对象是一组键/值对的集合，其中的键是弱引用的。其键必须是**对象**。

具体内容以后再研究。

#### 1.10.2 Set

Set是值不重复的集合，和数组“类似”。

```js
let set = new Set();
set.add(1);
set.add('foo');
set.add(2);

set.delete('foo')   //true
set.size    // 2

for(let item of set){
    console.log(item);
}
// 1
// 2

set.clear();    // 清除
```

<font color='red'>Set和Array的转换：</font>

1. Set => Array
使用Array.from或者展开操作符（...）来将Set转换为Array

    ```js
    let set = new Set();
    set.add(1);
    set.add(2);
    set.add(3);

    let arr1 = Array.from(set);     // (3) [1, 2, 3]
    let arr2 = [...set];    // (3) [1, 2, 3]
    ```

2. Array => Set
将数组对象作为参数放到Set的构造器中来将Array转换为Set

    ```js
    let arr = new Array(1,2,2,3);   // arr = [1,2,2,3]
    let set = new Set(arr);
    set     // Set(3) {1, 2, 3}
    ```

### 1.11 处理对象

js的设计是一个简单的基于对象的范式。一个对象是一系列属性的集合，一个属性包括一个键和一个值。属性的值可以是函数，这个时候属性被称为方法。

#### 1.11.1 对象属性

1、对象元素没赋值时为undefined，而不是null

![对象1](./pic/20.png)

2、对象的赋值与取值

对象的**赋值**，有两种方法，一种是对象后边跟一个点接一个变量（在此时，这个变量被创建到对象中）；另一种方法是类数组的赋值方法。

![赋值](./pic/obj1.png)

用类数组的方式赋值可以接受已经定义好的变量或者字符串（甚至一个空串）。需要注意的是**对象中的键全是字符串**。

![赋值结果](./pic/obj2.png)

如果是点赋值的属性，在访问的时候，直接[对象.键]即可；如果是类数组赋值方式，**取值**的时候可以通过  对象[变量]  的方式或者  对象.变量值  的方式。如果后续改变变量的值，那么  对象[变量]这种访问方式就会被破坏，取值会变成undefined：

![取值](./pic/obj3.png)

#### 1.11.2 for...in语句来遍历对象

![对象2](./pic/21.png)

<font color='red'>注意：for...of无法循环遍历对象，因为对象不是iterable（可迭代）的</font>

#### 1.11.3 列出对象属性的方法

ES5之后，有3种原生方法：

- for...in循环
![对象3](./pic/22.png)
- Object.keys(o)
![对象4](./pic/23.png)
- Object.getOwnPropertyNames(o)
![对象5](./pic/24.png)

#### 1.11.4 创建类的方法

类也是对象（语法糖）：
1）对象初始化器
![对象8](./pic/27.png)
<font color='red'>2）通过构造函数</font>
![对象6](./pic/25.png)
通过构造函数创建对象（new），创建的对象是将属性添加到自身实例下的
3）通过Object.create()---es6语法
![对象7](./pic/26.png)
通过Object.create(proto, [propertiesObject])创建的对象是通过继承原对象实现的，**而无需定义构造函数**。即将新对象的原型（\_\_proto__）设置为原对象：
![Object.create()](./pic/proto.png)
<font color='red'>4）es6的class</font>
![对象9](./pic/class.png)
注意：上面的run是Car的原型方法。在es5中，如果Car是构造函数，那么等同于Car.prototype.run = function(){console.log('...')}

#### 1.11.5 继承

所有js对象继承与至少一个对象，被继承的对象称为**原型**，并且继承的属性可通过构造函数的prototype对象找到。

1）每个实例对象都有一个私有属性（称为__proto__）指向它的构造函数的原型对象（prototype），该原型对象也有也有__proto__。继承时，层层向上直到一个对象的原型对象是null。根据定义null没有原型，并作为**原型链**的最后一个环节。
<font color='red'>注：几乎所有对象都是原型链顶端的<font color='blue'>Object</font>的实例</font>

- 继承属性
当试图访问一个对象的属性时，js会先在当前对象上找，没找到的话会继续像上一层（父对象）寻找。。最后直到找到匹配的属性名或者到达末尾。
![继承属性](./pic/28.png)
上例的原型链：<font color='red'>{a:1, b:2} --> {b:3, c:4} --> Object.prototype --> null</font>
&emsp;属性a、b在对象中已定义，直接取得1和2；而c在父对象定义，取得4；而父对象的b:3，由于对象中已定义，可以认为父对象的属性b被对象所“覆盖”；在原型链上找到最后也没找到d的定义，所以返回undefined。
<br>
- 继承方法
当继承的函数被调用时，this指向的是当前继承的对象，而不是被继承对象（原型）。
![继承方法](./pic/29.png)

![原型表示](./pic/30.png)
<font color='red'>注意：</font>**对象的原型表示用__proto__；函数（function）的原型用prototype表示**

#### 1.11.6 constructor与prototype的关系

先看下面一幅图：
![constructor与prototype](./pic/31.png)

```js
function Person(name){
    this.name = name;
    this.showMe = function(){
        console.log(this.name);
    }
}

Person.prototype.from = function(){
    console.log('来自原型链');
}

let one = new Person('js');
```

实际结果如下：
![constructor与prototype](./pic/32.png)
可以看到经过new实例化后的对象one，它里面的属性__proto__属性包含着Person原型链中的方法。也就是说实例化后的对象可以通过原型链去调用这条链上的任意一个属性或方法（类似于java实例化后的对象调用父类方法）。
![__proto__](./pic/33.png)
要明白原因，必须先要了解new形式创建对象的过程：

```js
let one = new Person('js');
// 等价于
let one = {};
Person.call(one, 'js');
```

1. 首先，js引擎开辟一块内存，创建一个空对象叫作one，并将this指向这个对象。
2. 接着，执行构造函数Person()，对空对象one进行构造（构造函数的属性和方法都赋给one，这也是为什么Person叫作构造函数的原因）
3. 最后，给one添加一个叫__proto__的属性，这个属性指向Person的prototype对象，也就是上面的one.\_\_proto\_\_ == Person.prototype。

最终：
![new](./pic/36.png)

#### 1.11.6 getters与setters

一个getter用于获取特定属性值，而一个setter用于设置特定属性的值。

需要注意，<font color='red'>getter和setter后面虽然跟着类似函数的形式，但是它们却不是函数</font>，而是**属性**。如下图，o.a是一个数字属性；o.b是一个getter，它返回一个数字（o.a+1），可以称之为可读；o.c是一个setter，它设置o.a的值，可以称之为可写（单纯调用o.c是undefined）。
![getter和setter](./pic/53.png)

对于已经创建好的对象，如果想向其添加getter和setter，可以通过Object.defineProperties(object, properties)
![Object.defineProperties()](./pic/54.png)

### 1.12 对象模型的细节

js是基于原型的语言而非基于类的语言， 理解这一点非常重要！！！

- 基于类的语言：java、c++等
一个类定义了某一对象集合的特征属性（比如动物类），类是抽象的；而一个实例是一个类的具体化，比如猫，代表一个动物类的特定个体。实例具有和类**完全一致**的属性，不多也不少。
- 基于原型的语言：js
只有对象的概念。基于原型的语言有**原型对象**的概念。原型对象作为一个模板，新对象可以从中获取到属性，也可以定义自己的属性，既可以在创建的时候定义也可以在运行的时候定义。

<font color='red'>在js中，不像基于类的语言，有专门的类定义（Class不是类定义，只是构造函数的语法糖！！！），而是使用构造函数来创建一系列有着特定初始值和方法的对象。</font>

#### 1.12.1 书写继承关系

<p id="jump">这一小节通过代码实现下述类和类的关系：</p>

![继承关系1](./pic/55.png)

下面是实现代码：

1. 创建Employee、Manager、WorkerBee（通过组合继承）
![继承关系2](./pic/56.png)
2. 创建SalesPerson、Engineer，并定义五个类的对象
![继承关系3](./pic/57.png)
3. 可以看到对象的属性值符合我们的预期，实现了继承。
![继承关系3](./pic/58.png)

上面提到了组合继承，这种继承方式是集<font color='red'>借助构造函数实现继承（Parent.call(this)</font>和<font color='red'>借助原型链实现继承（Child.prototype = new Parent()</font>组合而成。它解决了这两个继承各自出现的问题：

- 借助构造函数实现继承
![借助构造函数实现继承](./pic/59.png)
可以看到这种方式实现的继承，**子类无法调用到父类原型链上的属性和方法**。
- 借助原型链实现继承
![借助原型链实现继承1](./pic/60.png)
可以看到这种方式解决了子类无法调用父类原型链上的属性和方法的问题，但是这种方式也有新的问题：
![借助原型链实现继承2](./pic/61.png)
所以，使用这种方法，解决了原型链调用问题，但是**当我们通过子类实例去修改父类上的属性和方法，所有的子类实例对象上的属性和方法都会跟着改变**。

<font color='blue'>所以通过组合的方式来实现继承：</font>
![借助组合方式实现继承](./pic/62.png)

其实这里还有一个问题，就是constructor指向问题，设置一下即可：

```js
// 确保实例化对象可以通过constructor找到自己的构造函数
Parent.prototype.constructor = Parent;
Child.prototype.constructor = Child;
```

#### 1.12.2 一些其他问题

1. js继承是没有多继承的，它只能在一条原型链上添加继承。
2. 在构造函数中引入全局变量时，需要注意一些不太明显的调用构造函数。

### 1.13 Promises

Promise是一个对象，它代表了一个异步操作的最终完成或失败。不同于“老式”的函数传参回调，使用Promise时，会有以下约定：

- 在本轮事件循环运行完成之前，回调函数是不会被调用的。
- 异步操作完成后，这之后通过then添加的回调函数继续被调用。
- then()可以多次添加，支持**链式调用**。

#### 1.13.1 链式调用

连续执行两个以上的异步操作（函数），上一个执行完之后再执行下一个，并且后边的操作带着上一个操作返回的结果。

```js
const promise = doSomething();  // doSomething是某个异步函数
const promise2 = promise.then(successCallback, failureCallback);
```

promise2代表了doSomething()的完成，也代表传入的successCallback或者failureCallback函数的完成。每一个promise都代表了调用链上另一个异步操作的完成。
&emsp;&emsp;没有promise之前，多重调用可以会出现**回调地狱**：

```js
doSomething(function(result) {
    doSomethingElse(result, function(newResult) {
        doThirdThing(newResult, function(finalResult){
            conosle.log('The final result: ' + finalResult);
        }, failureCallback)
    }, failureCallback)
}, failureCallback)
```

现在可以通过Promise链：

```js
doSomething().then(function(result){
    return doSomethingElse(result);
})
.then(function(newResult){
    return doThirdThing(newResult);
})
.then(function(finalResult){
    console.log('The final result: ' + finalResult);
})
.catch(failureCallback);
```

使用箭头函数更一步简化

```js
doSomething()
.then(result => doSomethingElse())
.then(newResult => doThirdThing())
.then(finalResult => {
    console.log('The final result: ' + finalResult);
})
.catch(failureCallback);
```

需要注意，catch并不一定是链式调用的结尾，其后面依然可以跟着then():

```js
new Promise((resolve, reject) => {
    console.log('初始化');
    resolve();
})
.then(() => {
    throw new Error('有哪里不对了');
    console.log('执行这个');
})
.catch(() => {
    console.log('执行那个');
})
.then(() => {
    console.log("无论前面发生什么都执行");
})
```

执行结果：
![链式调用](./pic/63.png)

#### 1.13.2 错误传递

在前面的回调地狱中，一共调用了三次回调失败函数；而promise链式调用，只需要在尾部调用一次。promise在遇到异常时，会顺着promise链寻找下一个onRejected失败回调函数或者是.catch()指定的回调函数。这一点，和同步代码很像：

```js
// 其中sync代表函数必须得是同步函数
try{
    let result = syncDoSomething();
    let newResult = syncDoSomethingElse(result);
    let finalResult = syncDoThirdThing(newResult);
    console.log('Get the final result: ' + finalResult);
}catch(error){
    failureCallback(error);
}
```

```js
// 如果是异步函数，需要同步执行，则使用async/await语法
async function foo(){
    try{
        let result = await doSomething();
        let newResult = await doSomethingElse(result);
        let finalResult = await doThirdThing(newResult);
        console.log('Get the final result: ' + finalResult);
    }catch(error){
        console.log(error);
    }
}
```

#### 1.13.3 Promise组合

Promise的方法包括resolve()、reject()、all()、race()。

- resolve：返回一个成功状态的Promise对象

```js
// 创建一个成功态的Promise对象，并在then中返回它(then会获取resolve的值)
let a = Promise.resolve('success');
let b = a.then(function(){
    console.log("成功了");
}, function(){
    console.log("失败了")
})
```

![resolve](./pic/64.png);

- reject：返回一个失败状态的Promise对象

```js
// 创建一个失败态的Promise对象，并在then中返回它
let c = Promise.reject('failure');
let d = c.then(function(){
    console.log("成功了");
}, function(){
    console.log("失败了")
})
```

![reject](./pic/65.png);

- all：对多个promise对象的状态进行判断。如果全都是成功态，则返回resolve，否则返回reject，失败时，返回第一个失败的Promise的原因。

![all](./pic/66.png);

- race：参数为多个promise。对多个promise进行“竞速”，返回最先处理完的promise对象（不管成功或失败）

```js
let p1 = new Promise(function(resolve, reject){
    setTimeout(resolve, 200)
});
let p2 = new Promise(function(resolve, reject){
    setTimeout(reject, 100)
});
let p = Promise.race([p1,p2]);      // reject


let p3 = new Promise(function(resolve, reject){
    setTimeout(resolve, 300)
});
let p4 = new Promise(function(resolve, reject){
    setTimeout(reject, 500)
});
let q = Promise.race([p3,p4]);      // resolve
```

![race](./pic/67.png);

#### 1.13.4 Promise时序问题

Promise是一个微任务。其构造函数接收一个执行函数（executor），构造函数创建时，**立即调用执行函数**。如下：

```js
new Promise(function(resolve, reject){
    // 等待2毫秒之后再放到宏队列中
    setTimeout(function(){
        console.log(1)
    }, 2)
    console.log(2);
    resolve(3);
}).then(function(value){
    console.log(value);
})
// 不用等待时间，直接放到宏队列中
setTimeout(function(){
    console.log(4)
})
console.log(5)
```

![Promise时序问题](./pic/68.png)

#### 1.13.5 Promise嵌套

嵌套Promise会导致代码复杂化，会因为粗心导致错误。所以建议Promise“扁平化”编程。

```js
doSomethingCritical()
.then(
    // 嵌套promise
    result => doSomethingOptional()
        .then(optionalResult => doSomethingExtraNice(optionalResult))
        .catch(e => { console.log(e) })
    )
    .then(() => moreCriticalStuff())
    .catch(e => console.log("Critical failure: " + e.message));
```

值得注意的是上述的内层catch只能捕获到doSomethingOptional和doSomethingExtraNice的失败，之后的then中的moreCriticalStuff会继续执行。而外层的catch只会捕获到dosomethingCritical和moreCriticalStuff的失败。

可以看到，这种嵌套会使得逻辑很复杂，难以判断。会出现以下**常见错误**：

```js
// 错误示例
doSomething().then(
    function(result){
        doSomethingElse(result)
            .then(newResult => doThirdThing(newResult));
    }
).then(() => doFourthThing());
```

该嵌套promise有三个错误：

- 第一个错误是没有正确的将函数连接，**then()创建了新的Promise却没有返回**。这会导致doFourthThing和doSomethingElse是两个独立的promise链条，他们会并行运行。<font color='red'>注意：() => x是() => { return x; }的缩写；而() => {x}是没有返回的</font>
![第一个错误](./pic/69.png)
- 第二个错误是不必要的嵌套，导致了第一个错误。
- 第三个错误是在Promise链上没有catch语句去捕获异常

修改成“扁平化”代码后：

```js
doSomething()
.then(function(result){
    return doSomethingElse(result);
})
.then(newResult => doThirdThing(newResult))
.then(() => doFourthThing())
.catch(error => console.log(error));
```

### 1.14 迭代器与生成器

处理集合中的每一项是很常见的操作，比如map()、filter()v、for...of、展开语法等。
迭代方式（语法或方法）都遵循[迭代协议](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Iteration_protocols)。可迭代对象包括：String、Array、TypesArray、Set、Map，他们的原型都实现了**@@iterator方法**。

#### 1.14.1 迭代器

迭代器是一个特殊对象，所有迭代对象都有一个next()方法，用来返回一个对象结果，这个对象结果包含两个属性：vlue：返回的值；done：布尔类型，表示后面是否还有值。迭代器内部保存了一个指针，指向当前迭代对象的爹地啊位置，迭代对象只能迭代一次。

创建一个迭代器：

```js
function createIterator(items){
    let i = 0;
    return {
        next: function(){
            let done = (i >= items.length);
            let value = !done ? items[i++] : undefined;
            return {
                done: done,
                value: value
            };
        }
    };
}
```

![迭代器](./pic/70.png)

#### 1.14.2 生成器

ES6推出了更为强大的生成器（generator）。它允许你自定义一个迭代算法函数，并且它可以自己自动的维护状态。生成器函数用**function**\*来定义。第一次调用方法时，会返回一个Generator对象（生成器），随后使用next()去调用生成器对象以遍历可迭代对象。

![生成器](./pic/71.png)

<font color='red'>每个生成器对象只会迭代一次，如果想多次迭代，只能多次调用生成器函数赋给对象进行调用。</font>

#### 1.14.3 可迭代对象



### 1.15 元编程

### 1.16 js模块

## 二、中级

### 2.1 客户端 Web API

### 2.2 重新介绍JS

### 2.3 JS数据结构

### 2.4 如何使用比较操作符

### 2.5 闭包

闭包可以让内部函数通过预先绑定好的词法环境去访问外部函数。在js中，每当函数被创建，就会在函数执行时生成闭包。

#### 2.5.1 词法作用域

词法作用域就是内部的函数可以访问外部函数的中声明的变量，但是反过来却不行。**嵌套函数可访问声明于他们外部作用域的变量**。

#### 2.5.2 闭包

**闭包**是由函数以及声明该函数的词法环境组合而成。

```js
function makeFunc(){
    let name = 'Mozilla';
    function displayName() {
        console.log(name);
    }
    return displayName;
}

let myFunc = makeFunc();
myFunc();
```

js中函数会形成闭包。在这个例子中，myFunc是执行makeFunc时创建的displayName函数实例的引用。displayName实例（因为主函数已经设定了特定的值，可能是预先设定，也可能是参数传入）维持了一个词法环境，这个环境中包括nam='Mozilla'。因此myFunc被调用时，displayName函数实例可以从词法环境中获取到父函数myFunc定义的name值。

<font color='red'>当给主函数传入参数时：</font>

```js
function makeAdder(x) {
    return function(y){
        return x + y;
    }
}

let add5 = makeAddr(5);     // add5是内层函数实例的一个引用，语法环境为x=5
let add10 = makeAddr(10);   // add10语法环境为x=10

console.log(addr5(2))  // 5 + 2 = 7
console.log(addr10(2))  // 10 + 2 = 12
```

从本质上讲，makeAdder函数是一个**函数工厂**，它用于创建特定语法环境的函数。

#### 2.5.3 实用的闭包

闭包很有用，因为它将函数和函数内部所需的特定数据（环境）关联起来，这就类似于面向对象编程。如果**一个对象中只有一个方法，那么就可以使用闭包**。最常见的应用场景是<font color='red'>事件绑定</font>，闭包解决了其中异步操作（事件）作用域的问题，参考[第一章节](#jump2)：

#### 2.5.4 用闭包模拟私有方法

私有方法对于模块化具有重要意义，它可以防止全局的命名空间污染。

```js
// 用闭包实现一个数据隐藏和封装的计数器
let makeCounter = function(){
    let privateCounter = 0;
    function changeBy(val) {
        privateCounter += val;
    }
    return {
        increment: function() {
            changeBy(1);
        },
        decrement: function() {
            changeBy(-1);
        },
        value: function() {
            return privateCounter;
        }
    }
}

let Counter1 = makeCounter();   // Counter1创建了属于自己的词法环境，是返回的函数对象的实例
let Counter2 = makeCounter();   // 与Counter1完全不同，且独立的词法环境

console.log(Counter1.value())   // 0
Counter.increment();
Counter.increment();
console.log(Counter1.value())   // 2
Counter.decrement();
console.log(Counter1.value())   // 1
console.log(Counter2.value())   // 0
```

以这种方式使用闭包，可以提供面向对象编程的好处，包括数据隐藏（外层函数内的变量只供内层函数使用）和封装（功能模块化，比如本例模块化了一个计数器，它与外界高度解耦）。

#### 2.5.4 循环中使用闭包

在上面已经说过，循环中如果有异步操作，使用闭包的话，会导致作用域问题。

#### 2.5.5 性能考量

闭包都会增加额外处理速度和内存消耗。所以如果不是特定任务（比如循环绑定事件），尽量不要在函数中创建函数。这也是为什么给对象创建方法时，将方法写到构造函数的原型上：

```js
function MyObject(name) {
    this.name = name;
    this.getName = function(){
        return this.name;
    }
}
```

在这里，没有用到闭包所带来的便利，因为变量name直接通过this获得了，不需要再去指定词法环境。所以标准的写法是将方法写到原型上：

```js
function MyObject(name) {
    this.name = name;
}
// 直接在原型上添加属性，而不要破坏它
// 不要直接MyObject.prototype = {...}
// 这样会使得原本存在的constrcutor属性丢失
MyObject.prototype.getName = function(){
    return this.name;
}
```

## 三、高级

### 3.1 继承和原型链

js在ES6引入了Class关键字，但它只是语法糖，并不是真正意义上类的实现，js仍然是基于原型的。
谈到继承时，js只有对象结构，每个对象都有一个私有属性（\_\_proto\_\_）指向它的构造函数的原型对象（prototype）。该原型对象也有一个自己的原型对象（\_\_proto\_\_），层层向上直到一个对象的原型是null，null没有原型，作为**原型链**的最后一个环节。
<font color='red'>几乎所有js中的对象都是位于原型链顶端的Object对象的实例</font>

#### 3.1.1 基于原型链的继承

1、继承属性

```js
function f(){
    this.a = 1;
    this.b = 2;
}
let o = new f();

// 在构造函数f的原型上定义b和c
f.prototype.b = 3;
f.prototype.c = 4;

//整个原型链如下
// o {a:1, b:2} => o.__proto__ {b:3, c:4, constructor: f()} =>
// o.__proto__.__proto__也就是Object.prototype => null

o.a;    // 1    a是o的属性直接返回
o.b;    // 2    b是o的属性直接返回（不再向上找原型对象的属性了，所以原型对象中的b被“屏蔽”）
o.c;    // 4    c不是o的属性，继续向上找，o.__proto__中有属性c，直接返回
o.d;    // undefined    c不是o的属性，随着继承链一直找到null也没找到，返回undefined
```

2、继承方法

```js
// 函数调用时，this指向调用对象
let o = {
    a: 1,
    m: function(){
        return this.a + 1;
    }
}

o.m();      // 2
let p = Object.create(o);
p.__proto__ === o;      // p继承自o
p.a = 2;
p.m();      // 3   m函数中this指向p，所以此时this.a = 2
```

#### 3.1.2 在JS中使用原型

```js
function doSomething(){};
```

打印输出doSomething.prototype可以看到doSomething函数的原型对象是一个仅有constructor（代表该原型对象的构造函数，也就是doSomething自己）属性的“空对象”。

![在JS中使用原型1](./pic/72.png)

```js
// 在构造函数原型上创建一个属性
doSomething.prototype.foo = "bar";

// 基于原型对象创建一个实例
let doSome = new doSomething();
doSome.foo1 = 'bar1';
```

![在JS中使用原型2](./pic/73.png)

#### 3.1.3 使用不同的方法创建对象和原型链

1. 使用语法结构

    ```js
    let o = {a: 1};
    // 对象字面量方式，其实是let o = new Object({a:1})的缩写
    // o继承了以Object为构造函数的原型对象（Object.prototype）上所有属性
    // 原型链如下：
    // o => Object.prototype => null

    let a = [1,2,3];
    // 数组字面量方式，其实是let a = new Array(1,2,3)的缩写
    // a继承了Array.prototype，而Array.prototype又是由new Object()创建（即数组对象是基于Object的）
    // 原型链如下：
    // a => Array.prototype => Object.prototype => null

    function f(){
        return 0;
    }
    // 函数字面量方式是let f = function(){return 0;}的缩写
    // 同理原型链如下：
    // f => Function.prototype => Object.prototype => null
    ```

2. 使用构造器

    ```js
    function Fn(a){
        this.a = a;
        this.b = [];
    }
    Fn.prototype.Fn1 = function(x){
        this.b.push(x);
    }

    let f = new Fn(1);
    // f是实例化对象，它的属性有a和b，其中a=1，b=[]
    // f从原型上继承了Fn1方法

    f.Fn(6)     // 调用该方法，this指向f
    f.b         // [6]  调用后改变了对象f中的属性b
    ```

3. 使用Object.create()

    ```js
    // Object.create()创建一个新对象，新对象的原型就是create方法传入的第一个参数
    let a = {a: 1};
    // a => Object.prototype => null

    let b = Object.create(a);
    // b => a => Object.prototype => null

    let c = Object.create(b);
    // c => b => a => Object.create() => null

    let d = Object.create(null);
    // d => null
    console.log(d.hasOwnProperty);
    // undefined，因为d没有继承Object.prototype
    ```

4. 使用class关键字

    ```js
    class Animal {
        constructor(type, color){
            this.type = type;
            this.color = color;
        }
    }

    class Dog extends Animal {
        constructor(type, color, a){
            super(type, color);
            this.a = a;
            this.b = 0;
        }

        get c() {
            return this.a + this.b;
        }
        // 注意：set方法只能接受一个参数
        set d(x) {
            this.b = x*2;
        }
    }

    let dog = new Dog('A', 'red', 1);
    ```

<font color='red'>性能问题：</font>
在**原型链上遍历属性会比较耗时**，在对性能要求较高时这一点很重要（访问不存在的属性时会遍历整个原型链）。
&emsp;&emsp;Object.keys()和hasOwnProperty()只会处理遍历当前对象的属性，而不会遍历整条原型链。除此之外的方法都会遍历原型链。

![性能问题](./pic/74.png)

PS: **还需要注意，检查属性是否为undefined不能够确定其是否存在。该属性可能存在，但其值恰好被设置为undefined。**<font color='red'>还要切忌扩展内置的原型，比如往Object.prototype上添加属性或方法。</font>
上面几种继承各自的缺陷可以查看[书写继承关系](#jump)。

### 3.2 严格模式

### 3.3 JavaScript 类型数组

### 3.4 内存管理

js在创建变量时自动进行了分配内存，并且在不使用他们时“自动”释放，释放的过程称为垃圾回收。

#### 3.4.1 内存生命周期

不管什么语言，内存的生命周期基本一致：

1. 分配你所需要的内存
2. 使用分配到的内存（读、写）
3. 不需要时将其释放

<font color='darkblack'>内存分配：</font>

```js
// 值的初始化会自动分配内存
let a = 1;
let o = {a:1, b:null}   // 给对象及其包含的值分配内存
let arr = [1, null, 'a']    // 给数组及其包含的值分配内存

// 通过函数调用分配内存
let d = new Date();     // 分配一个Date对象（一直存在于内存）
let e = document.createElement('div');  // 分配一个DOM元素（DOM元素是DOM树在内存的存在形式）

// 基本类型相同的内容就分配一片内存，对象（引用类型）每次都分配新的内存
let a = 1;
let b = 1;
a === b;    // true 1这个数在栈内存中只有一个
let c = {num:1}
let d = {num:1}
c == d      // 引用对象会在堆内存中创建多个“相同”的对象量
```

![内存分配](./pic/75.png)
需要注意的是**null**也是一个对象，但是其之所以能存在于栈内存中，是因为其大小固定，而堆内存中的object都是不固定大小的。

<font color='darkblack'>使用分配内存：</font>
使用内存分配的值是对分配内存写入或读取，比如算数运算、函数传值等。

<font color='darkblack'>释放内存：</font>
大部分内存管理的问题都出在这里。**开发人员需要确定哪些内存已经不再需要，然后进行释放**。高级语言解释器中已经嵌入了“垃圾回收器”（GC），但是回收的过程这是一个近似回收，因为要知道在后续操作中是否还需要某块内存是无法通过算法进行判定的。

#### 3.4.2 垃圾回收

垃圾回收算法是建立在**引用**概念上的，引用分为**隐式引用**（对象引用原型属性）和**显式引用**（对象引用自身属性）。

<font color='red'>垃圾回收算法:</font>

1. 引用计数垃圾收集
这是最初的垃圾收集算法，判定一个对象是否释放的条件是它是否还被其他对象所引用。

    ```js
    // 创建两个对象（一个称为外层对象-赋给变量o，一个称为内层对象-赋给变量a）
    // 内层对象作为外层对象的属性被引用
    let o = {
        a: {
            b: 1;
        }
    }
    // 创建一个变量o2，引用外层对象（此时外层对象有两个引用）
    let o2 = o;

    o = 1;  // 堆内存中的“外层对象”的原始引用a已经没了，现在只有o2还在引用
    let oa = o2.a;  // 变量oa通过o2引用“内层对象”，内层对象现在有引用oa

    o2 = "yo"   // 断开o2的引用，虽然外层对象此时是零引用，可以被垃圾回收
                // 可是内层对象还存在着引用，所以无法回收

    oa = null;  // 内层对象的引用被释放，两个对象都被回收（现在没有变量可以访问它们了）
    ```

    算法限制：在循环引用情况下，会出现问题

    ```js
    function f(){
        // 他们相互至少有一次引用，所以计数法无法回收
        let o = {}
        let o2 = {}
        o.a = o2;
        o2.a = o;

        return 0;
    }
    // 函数中的两个对象在函数调用后离开了函数作用域，这个时候他们就没用了，
    // 本应该被回收，但是由于计数算法考虑到他们存在引用，所以不会回收它们。
    f();
    ```

    在使用计数方式对DOM对象进行垃圾回收的时候，如果出现对象循环引用，就会导致**内存泄漏**。

    ```js
    let div;
    window.onload = function(){
        // myDivElement这个DOM元素中的circularReference引用了它本身，造成了循环引用
        // 如果该引用么有设置为null，或者显式移除，引用就会一直保持在内存的DOM元素上
        // 即使将DOM元素从DOM树删除，DOM元素的数据（对象下的大量属性）也不会被删除
        // 这一点，就像上边第一个例子一样，引用（包括子对象的）不清零，数据就不会删除
        div = document.getElemntById("myDivElement");
        div.circularReference = div;
    }
    ```

2. 标记-清除算法
2012年起，所有浏览器用的垃圾回收算法全是基于**标记-清除算法**。零引用对象总是不可获得，但是不可获得的对象却不一定是零引用（循环引用）。这个算法解决了循环引用的问题。<font color='red'>它会从根对象（全局对象），找到所有根对象引用的对象，然后再找这些对象引用的对象...，从根开始，GC会找到所有可以获得的对象并收集**所有不可获得的对象（垃圾）**</font>

在上边的函数例子中，函数调用返回之后，两个对象从根向下遍历获取不到，所以他们会被GC回收。而第二个例子，一旦div从根无法获取到，他们就会被GC回收。

### 3.5 并发模型以及事件循环
