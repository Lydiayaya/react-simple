const path = require("path"); //一个处理文件路径的工具
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); //首先引入我们新安装的依赖插件
const HtmlWebpackPlugin = require("html-webpack-plugin"); //引入html模板插件
const { CleanWebpackPlugin } = require("clean-webpack-plugin"); //引入clean-webpack-plugin插件
module.exports = {
  mode: "development", //此行表示我们webpack打包环境是开发环境
  optimization: {
    //添加抽离公共代码插件的配置
    splitChunks: {
      cacheGroups: {
        //打包公共模块
        commons: {
          chunks: "initial", //initial表示提取入口文件的公共部分
          minChunks: 2, //表示提取公共部分最少的文件数
          minSize: 0, //表示提取公共部分最小的大小
          name: "commons", //提取出来的文件命名
        },
      },
    },
  },
  entry: "./src/index.js", //项目的入口文件，是我们新建的index.js文件，他的路径是相对于项目根路径，所以谢的是”./src“,而不是../src
  // ./表示当前目录，../表示当前目录的上级目录
  output: {
    //配置输出信息
    filename: "bundle.js", //打包输出的文件名称，这里是一个写死的名称，后期可以改成按一定规则动态生成
    path: path.resolve(__dirname, "../dist"), //输出的路径，这里的路径针对的是当前目录，所以我们写成了"../dist"，而不是"./dist"
  },
  plugins: [
    //然后新建一个plugins属性来实例化这个依赖插件
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css",
      chunkFilename: "[id].[contenthash].css",
    }),
    //实例化Html模板模块
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "../index.html"),
    }),
    new CleanWebpackPlugin(), //实例化clean-webpack-plugin插件
  ],
  //通过moudle属性配置babel-loader
  module: {
    rules: [
      {
        test: /\.js/,
        use: ["babel-loader?cacheDirectory=true"],
        include: path.join(__dirname, "../src"),
      },
      {
        //最后添加这个依赖插件的配置信息
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: "../",
            },
          },
          "css-loader",
        ],
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
          },
          //   {
          //     //添加这段配置信息即可 配置css3前缀的这块有错误，不知道为啥
          //     loader: "postcss-loader",
          //     options: {
          //       plugins: [require("autoprefixer")],
          //     },
          //   },
          {
            loader: "less-loader",
          },
        ],
      },
      {
        //配置图片静态资源的打包信息
        test: /\.(jpg|png|jpeg|gif)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 1024,
              fallback: {
                loader: "file-loader",
                options: {
                  name: "img/[name].[hash:8].[ext]",
                },
              },
            },
          },
        ],
      },
      {
        //配置多媒体资源的打包信息
        test: /\.(mp4|webm|ogg|mp3|wav)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 1024,
              fallback: {
                loader: "file-loader",
                options: {
                  name: "media/[name].[hash:8].[ext]",
                },
              },
            },
          },
        ],
      },
    ],
  },
  //resolve核心配置
  resolve: {
    extensions: [".js", ".jsx", ".json"],
    alias: {
      pages: path.join(__dirname, "../src/pages"),
      components: path.join(__dirname, "../src/components"),
      actions: path.join(__dirname, "../src/redux/actions"),
      reducers: path.join(__dirname, "../src/redux/reducers"),
      images: path.join(__dirname, "../src/images"),
    },
  },
  //配置热更新模块
  devServer: {
    hot: true,
    open: true,
    port: 3500,
    static: "../dist",
    historyApiFallback: true,
  },
};
