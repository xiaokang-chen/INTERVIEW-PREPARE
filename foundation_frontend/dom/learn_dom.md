# Dom学习笔记

## 一.js和DOM以及BOM之间的联系

js的实现包括以下三部分：
1、核心（ESMAScript）：描述了js的基本语法。
2、文档对象模型（DOM）：处理网页内容的方法和接口。
3、浏览器对象模型（BOM）：与浏览器交互的方法和接口。

## 二.BOM

### 由于BOM内容较少，所以不单起目录进行，直接归到DOM学习中

BOM: Browser Object Model是浏览器对象模型，浏览器对象模型提供了独立与浏览器窗口进行互动的对象结构。BOM中**window对象是顶层对象**，代表浏览器窗口，其他对象是该对象的子对象。

### 2.1、BOM对象

- window对象：是js的最顶层对象，其他BOM对象都是widow对象的属性；
- location对象：浏览器当前URL信息；
- navigator对象：浏览器本身信息；
- screen对象：客户端屏幕信息；
- history对象：浏览器访问历史信息；

#### 2.1.1 window对象

BOM的核心对象是window，它表示浏览器的一个实例。在浏览器中，window对象有双重角色，它既是通过js访问浏览器的一个接口，又是ESMAScript规定的Global对象。

1. 全局变量是window对象的属性，全局函数的window对象的方法。

2. window常用的方法包括弹窗（alert、confirm、setTimeout），调用这些方法时默认前面省略了window。

#### 2.1.2 location对象

window.location对象（方法调用时可不写window，下面几个对象同理）用于获取当前页面的地址（URL），并把浏览器重定向到新的页面。比如location.href返回当前页面的url地址；location.port返回url中指定的端口号；location.portocol返回页面所使用的协议（http或https）。

#### 2.1.3 navigator对象

window.navigator对象包含访问者（客户端）浏览器信息。比如navigator.platform返回操作系统类型；navigator.userAgent返回浏览器详细信息（同http请求头中的字段）；navigator.appName返回浏览器名称；navigator.language返回浏览器设置的语言。

#### 2.1.3 screen对象

window.screen对象包含有关用户屏幕的信息。screen.availHeight和screen.availWidth分别返回客户端屏幕的高度和宽度，以像素为单位，减去界面特性（比如Google的窗口任务栏）。

#### 2.1.3 history对象

window.history对象包括了浏览器的历史，history.back()会加载历史列表的前一个URL,即返回上一页；history.forward()加载历史列表的一下个URL,即返回下一页。这两个操作相当于浏览器上点击左箭头和右箭头。

#### 2.2、主流浏览器介绍（当作科普）

注意：**<font color='red'>BOM是与特定浏览器相关联的，比如同时打开一个网站，用Chrome和IE，在有些方法调用上是有区别的。</font>**

浏览器内核主要指的是浏览器的渲染引擎，2013 年以前，代表有 Trident（IE），Gecko（firefox），Webkit（Safari chrome 等）以及 Presto（opera)。2013 年，谷歌开始研发 blink 引擎，chrome 28 以后开始使用，而 opera 则放弃了自主研发的 Presto 引擎，投入谷歌怀抱，和谷歌一起研发 blink 引擎，国内各种 chrome系的浏览器（360、UC、QQ、2345 等等）也纷纷放弃 webkit，投入 blink 的怀抱。

移动端的浏览器内核主要说的是系统内置浏览器的内核。

目前移动设备浏览器上常用的内核有 Webkit，Blink，Trident，Gecko 等，其中 iPhone 和 iPad 等苹果 iOS 平台主要是 WebKit，Android 4.4 之前的 Android 系统浏览器内核是 WebKit，Android4.4 系统浏览器切换到了Chromium，内核是 Webkit 的分支 Blink，Windows Phone 8 系统浏览器内核是 Trident。

## 三.DOM