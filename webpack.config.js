// webpack生产环境配置
const path = require('path')
const webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');
module.exports = {
  devtool: 'source-map',
  entry: './index.js',
  output: {
    path : path.resolve(__dirname, 'dist'),
    filename : 'bundle.js'
  },
  resolve: {
    extensions: ['*', '.js', '.json', '.less', '.jsx'],
    alias: {
      '@': path.resolve(__dirname, 'src/components') 
    }
  },
  module: {
    rules: [  
      {
        test: /\.(js|jsx)$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['env', 'react', 'stage-0']
          }
        },
        exclude: /node_modules/
      },  {
        test: /\.(css|)$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: __dirname + '/index.html'
    }),
    // new webpack.HotModuleReplacementPlugin(),
    new OpenBrowserPlugin({
      url: 'http://localhost:1234'
    }),
  ],
  devServer: {
    contentBase: './',
    inline: true,
    port: '1234',
    host: 'localhost',
    historyApiFallback: true
  }
}