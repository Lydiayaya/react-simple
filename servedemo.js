const http = require("http");
const fs = require("node:fs"); //导入node的文件系统
const html = fs.readFileSync("./index.html"); //读取文件
const serve = http.createServer((res, rep) => {
  rep.end(html);
}); //这个serve 就将静态资源服务化了
serve.listen(3000);
console.log("去3000看看");

/*
 1.以上就是手写了一个简单的静态资源管理器
 2.但是对前端而言，会比较费时费力，所以一般使用专业的东西进行静态资源服务 比如 nginx
  
 以上是在本地本地部署好了html
 3.加入有一台拥有公共IP地址的服务器，在这台服务器使用node.js运行这个代码，那么别的人，可以通过这个IP：端口访问我们的页面，那么，这就是部署。
假设，将该服务器作为我的工作环境，通过npm start运行代码并通过，所有人都可以访问，即是部署成功。
*/
//serve
/**
 * 一款静态资源服务器
 */
//生产环境部署为什么需要nginx docker之类的东西
/*
 *1. 既然通过npm start可以启动服务并暴露端口对外提供服务，为什么需要nginx 对啊为什么捏
 */
