const path = require("path"); //一个处理文件路径的工具
module.exports = {
  mode: "development", //此行表示我们webpack打包环境是开发环境
  entry: "./src/index.js", //项目的入口文件，是我们新建的index.js文件，他的路径是相对于项目
};
