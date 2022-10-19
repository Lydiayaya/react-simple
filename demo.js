//最简资源  -----以字符串形式返回
/*
1. 向服务器发送一个获取HTMl资源的请求  请求报文 Request Message
2.服务器相应一段HTMl资源 响应报文 Response Message
*/
var http = require("http"); //使用require 载入Http模块，并将实例化的HTTP赋值给变量http
const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title></title>
</head>
<body>
  hello, shanyue. 
</body>
</html>`;
const serve = http.createServer((res, rep) => {
  //http.createServer创建服务器
  /*
   1.发送HTTP头部
   2.HTTP状态值 200：OK 
   3.返回内容类型

   省略了，为什么?
   */

  //返回内容——服务器响应内容
  rep.end(html);
});
serve.listen(3000); //绑定端口
console.log("部署成功");
