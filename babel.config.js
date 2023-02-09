const babelConfig = {
  presets: [
    [
      "@babel/preset-env",
      {
        useBuiltIns: "entry", //如果用了@babel/polyfill的话，配置这个属性可以将@babel/polyfill按需引入
        corejs: 2,
      },
    ],
    "@babel/preset-react",
    "@babel/preset-typescript"
  ],
  plugins: ["@babel/plugin-syntax-dynamic-import", ["@babel/plugin-transform-runtime"]]   //就是在此处添加了两个@babel/runtime中的插件
};
module.exports = babelConfig;