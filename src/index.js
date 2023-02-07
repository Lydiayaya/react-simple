import "./index.less";
import "./index02.css";
import "./assets/me.jpg";
import "./assets/earth.png";
import "./assets/background.png";

//测试文件用来测试文档是否打包成功
let xbeichen = () => {
  console.log("测试箭头函数");
};
xbeichen();
let promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(123);
  }, 1000);
});
promise.then((res) => {
  console.log(res);
});
