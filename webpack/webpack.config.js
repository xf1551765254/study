const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const htmlPlugin = new HtmlWebpackPlugin({
  template: './src/index.html',
  filename: 'index.html'
})
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.export = {
  mode: 'development', //prodution
  entry: path.join(__dirname, '.src/index.js'),
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, './dist')
  },
  plugins: ['htmlPlugin', new VueLoaderPlugin()],
  rules: [
    { test: /\.css$/, use: ['style-loader', 'css-loader', 'postcss-loader'] },
    { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] },
    { test: /\.less$/, use: ['style-loader', 'css-loader', 'sass-loader'] },
    { test: /\.jpg|png|gif|bmp|ttf|eot|svg|woff|woff2$/, use: 'url-loader?limit=16940' },
    { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ },
    { test: /\.vue$/, use: 'vue-loader' }

  ]
}