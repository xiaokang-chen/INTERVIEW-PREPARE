# requestAnimationFrame详解

[toc]

一般的动画可以使用animation或者js去写，以js实现为例，会使用到setTimeout或者setInterval。**requestAnimationFrame**比起定时器的实现方式有两点优势：

1. requestAnimationFrame会把每一帧中所有DOM的操作集中起来，在一次回流或重绘中完成，并且回流或重绘的时间间隔和浏览器的刷新速率相同，一般为60帧/s。<font color='red'>回调函数在每次系统刷新前执行一次，防止丢帧</font>
2. 对于隐藏或不可见的元素，requestAnimationFrame将不会进行回流和重绘，这就会减少cpu、内存、gpu的占用。