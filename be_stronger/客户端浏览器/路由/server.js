const http = require('http');
const fs = require('fs')

// 创建一个http服务器
http.createServer((req,res) => {
    //控制台打印信息
    console.log("server is start");
    //设置头信息
    res.setHeader("Content-Type", "text/html; charset=utf-8");

    //读文件
    fs.readFile("./history_router.html", "utf-8", function(err, data){
        if(err) {
          console.log("index.html loading is failed :" + err);
        }
        else{
            //返回index.html页面
            res.end(data);
        }

    });
}).listen(8888);