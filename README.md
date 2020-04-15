# INTERVIEW-PREPARE

该项目是为了找实习（前端）而创建的，主要对相关知识的学习进行记录。
前端学习包括以下几个方面：

1. 算法及数据结构（leetcode）
2. 计算机网络（HTTP图解、TCP/IP详解）
3. 操作系统（现代操作系统第4版、Linux鸟哥私房菜）
4. 前端基础（MDN，主要熟悉Dom、Js语法、css知识等）
5. Node（Nodejs实战、深入浅出Node.js）
6. TypeScript（官网handbook+runoob.com/）
7. 单元测试（Jest）
8. 代码检测（eslint）
9. 打包工具（webpack）

## React Native启动流程

1. 程序启动会调用MainActivity（安卓程序入口），它继承自ReactActivity，ReactActivity全权委托给ReactActivityDelegate，调用onCreat()方法，去初始化一些设置，比如RN应用页面渲染需要的上下文环境、ReactRootView的创建。以及启动RN流程，比如调用C++库加载JS Bundle文件
2. 后台任务完成后，调用创建好的ReactContext，将ReactRootView加载进来，并调用RN应用额JS入口AppRegistry来启动应用
3. JS层找到已注册的启动组件，执行renderApplication()来渲染整个应用
