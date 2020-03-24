# HTTP---MDN学习

[toc]

## 一、HTTP概述

### 1.1 Http是无状态的

Http本身是无状态的，使用Cookie可以创建有状态的会话

### 1.2 Http连接

Http1.0短连接，每次发起http请求都需要建立一个tcp连接（三次握手很耗时）；而Http1.1则实现了长连接（Connection:keep-alive）

### 1.3 Http工作过程

1. 打开一个TCP连接
2. 发送一个HTTP报文（HTTP2之前报文是语义可读的，HTTP2将报文封装到了帧中，此时报文不可读），（Request）报文大致如下：
    GET / HTTP1.1
    Host: develop.mozilla.org
    Accept-Language: en
3. 读取服务端返回的报文信息（Response）
Http/1.1 200 OK
Date: Sat, 09 Oct 2010 14:28:02 GMT
Server: Apache
...
4. 关闭TCP连接或者为后续请求重用连接

### 1.4 基于THHP的API

基于HTTP的API最常用的就是XMLHttpRequest（Ajax基于此实现的，还有现在很火的axios）。现代提供了Fetch API提供了相同的功能，他是ES6出现的，使用了ES6中的Promise对象。

Fetch是非常底层的实现，在实际应用中，需要进行一层封装。而axios已经对XHR进行了很多的封装（支持并发），当之无愧现在网络请求的首选。

## 二、HTTP缓存

重用已获取的资源能够有效的提升网站的性能。Web缓存能减少延迟与网络阻塞，进而减少加载每个资源所需要的时间。

## 三、HTTP Cookie

## 四、HTTP跨域

## 五、