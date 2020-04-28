// 生成一个对象
var xhr = new XMLHttpRequest();
// 请求类型：get
// 请求地址：/hello.json
// true：异步方式
// false：同步方式
xhr.open("GET", "./hello.json", true);
// 发送
xhr.send();