# 第一步 
  1.npm init -y  初始化管理文件 package.json
  2.新建src 源代码目录
  3.新建 src=>index.html 
  4.安装jquery    npm install ... -S
#第二部
   1.npm install webpack webpack-cli -D  webpack的相关包
   2.创建 webpack.config.js 的webpack的配置文件
   3.webpack的配置文件中,初始化配置
        module.export = {
             mode: 'development' //production
        
        }
    4.package.json 
         "scripts": {
            "dev": "webpack"
            },
    (npm run dev 可以输出 dist文件 有main.js文件)
#第三部  webpack 的入口和出口(上一次运行的是webpack的默认配置)
   默认入口 src=>index.js  出口 dist=>main.js
   const path = require('path')

module.export = {
  entry: path.join(__dirname, '.src/index.js'),
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, './dist')
  }
}
第四部 webpack 的自动打包
1.npm install webpack-dev-server -D
2.修改package.json =>script 的dev
"scripts": {
    "dev": "webpack-dev-server"
  },
3.npm run dev  出来的是文件目录

第五步 生成预览文件
1.npm install html-webpack-plugin -D
2.修改 webpack.config.js 
  const HtmlWebpackPlugin = require('html-webpack-plugin')
const htmlPlugin = new HtmlWebpackPlugin({
  template: './src/index.html',
  filename: 'index.html'//根目录下,看不到
})
module.export = {
  plugins:['htmlPlugin']
}

第六步 webpack的相关参数
 package.json 
  "scripts": {
    "dev": "webpack-dev-server --open --host 127.0.0.1 --port 8888"
  }

第七部 webpack的加载器loader
1.css  npm install style-loader css-loader -D
2.webpack.config.js 中配置
rules: [
    { test: /\.css$/, use: ['style-loader', 'css-loader'] }
  ]
test 是文件 use是调用的loader (loader的调用顺序从后往前)

第八步 less文件
1.1.css  npm install less-loader less -D
2.webpack.config.js 中配置
rules: [
    { test: /\.less$/, use: ['style-loader', 'css-loader','less-loader'] }
  ]
 
 第九步 scss文件
1.1.css  npm install sass-loader node-sass -D
2.webpack.config.js 中配置
rules: [
    { test: /\.less$/, use: ['style-loader', 'css-loader','sass-loader'] }
  ]

 第九步 postcss自动添加css的兼容前缀
1.1.css  npm install postcss-loader autoprefixer -D
2.更目录文件 postcss.config.js文件,初始化配置
const autoprefixer = require('autoprefixer')
module.exports = {
  plugins: [autoprefixer]
}
3.webpack.config.js 中配置
rules: [
   加  { test: /\.css$/, use: ['style-loader', 'css-loader','postcss-loader'] },
  ]

 第十步 样式表中的图片和字体文件
1.1.css  npm install url-loader file-loader -D
2.webpack.config.js 中配置
rules: [
   { test: /\.jpg|png|gif|bmp|ttf|eot|svg|woff|woff2$/, use:'url-loader?limit=16940'},
  ]
   ? 之后是loader的参数

 第十一步 js文件的高级语法
1.1.css babel的转换器 npm install babel-loader @babel/core @babel/runtime -D
2.1.css babel语法插件 npm install @babel.... -D
3.根目录 创建配置文件 babel.config.js 
配置
module.exports = {
  presets: ['@babel/preset-env'],
  plugins: ['@babel/plugin-transform-runtime', '@babel/plugin-proposal-class-properties']
}
4.webpack.config.js 中配置
rules: [
    { test: /\.js$/, use: 'babel-loader',exclude:/node_modules/},
  ]
   exclude排除项

 第十二步 vue组件的配置
1.1.css babel的转换器 npm install vue-loader vue-template-compiler -D

2.webpack.config.js 中配置
const VueLoaderPlugin = require('vue-loader/lib/plugin')
  plugins: [其他文件,new VueLoaderPlugin()],
rules: [
{ test: /\.vue$/, use: 'vue-loader'},
  ]
   exclude排除项

 第十三步 webpack的打包
  package.json
   "scripts": {
    "dev": "webpack-dev-server --open --host 127.0.0.1 --port 8888",
    "build": "webpack -p"
}