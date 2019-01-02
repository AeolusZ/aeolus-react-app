#安装react react-dom

#安装webpack webpack-dev-server wabpack-cli
webpack ---> 打包工具
webpack-dev-server ---> 辅助开发的服务器（该服务器可以加载热代码、自动刷新页面、代理服务器解决前端跨域问题）
webpack-cli ---> 之前和webpack在同一个包里，webpack3之后分开了

#安装cross-env
windows不支持 NODE_ENV=development 的设置方式，这个包能够提供一个设置环境变量的scripts，让你能够以unix方式设置环境变量，然后在windows上也能兼容运行。cross-env 让这一切变得简单，不同平台使用唯一指令，无需担心跨平台问题。
--progress 显示打包过程中的进度
--colors 打包信息带有颜色显示
--inline 自动刷新的配置
--mode development/production webpack 4引入了生产和开发模式，自动根据开发和生产两种模式进行优化
webpack --config ./webpack.production.config.js 制定webpack的配置文件，因为默认的是webpack.config.js，而这里是打包命令，应该使用webpack.production.config.js

#配置webpack.config.js
module.exports ---> 配置文件的内容需要通过module.exports暴露 {
  entry ---> 配置需要打包的入口文件，值可以是字符串、数组、对象
  output ---> 输出文件配置，output 输出有自己的一套规则 {
    path ---> 表示生成文件的根目录 需要一个**绝对路径** path仅仅告诉Webpack结果存储在哪里
    filename ---> 表示的是如何命名出来的入口文件
  }
  resolve ---> {
    extensions ---> 自动扩展文件后缀名，意味着我们require模块可以省略不写后缀名
    alias ---> 模块别名定义，方便后续直接引用别名，无须多写长长的地址
  }
  module ---> 这里就是Loader，通过Loader，webpack能够针对每一种特定的资源做出相应的处理 {
    rules ---> {
      test ---> 参数用来指示当前配置项针对哪些资源，该值应是一个条件值
      use ---> 来指示用哪个或哪些loader来处理目标资源
      exclude ---> 参数用来剔除掉需要忽略的资源，该值应是一个条件值
      include ---> 参数用来表示本loader配置仅针对哪些目录/文件，该值应是一个条件值
    }
  }
  plugins ---> 插件 {
    HtmlWebpackPlugin ---> html 模板插件
    webpack.HotModuleReplacementPlugin ---> 热加载插件
    OpenBrowserPlugin ---> 自动打开浏览器
    webpack.DefinePlugin ---> 判断是否是dev模式
  }
  devServer ---> 对webpack-dev-server进行配置 {
    contentBase ---> 本地服务器在哪个目录搭建页面，一般我们在当前目录即可
    historyApiFallback ---> 当我们搭建spa应用时非常有用，它使用的是HTML5 History Api，任意的跳转或404响应可以指向 index.html 页面
    inline ---> 用来支持dev-server自动刷新的配置，webpack有两种模式支持自动刷新，一种是iframe模式，一种是inline模式；使用iframe模式是不需要在devServer进行配置的，只需使用特定的URL格式访问即可；不过我们一般还是常用inline模式，在devServer中对inline设置为true后，当我们启动webpack-dev-server时仍要需要配置inline才能生效
    hot ---> 启动webpack热模块替换特性
    port ---> 配置服务端口号
    host ---> 服务器的IP地址，可以使用IP也可以使用localhost
    compress ---> 服务端压缩是否开启
  }
}
html-webpack-plugin ---> 在每次运行后生成对应的模板文件，同时所依赖的CSS/JS也都会被引入，如果CSS/JS中含有hash值，则html-webpack-plugin生成的模板文件也会引入正确版本的CSS/JS文件
webpack.HotModuleReplacementPlugin ---> 模块热替换(HMR - Hot Module Replacement)功能会在应用程序运行过程中替换、添加或删除模块，而无需重新加载整个页面。主要是通过以下几种方式，来显著加快开发速度：
保留在完全重新加载页面时丢失的应用程序状态。
只更新变更内容，以节省宝贵的开发时间。
调整样式更加快速 ，几乎相当于在浏览器调试器中更改样式。
open-browser-webpack-plugin ---> 在webpack 启动成功后会打开浏览器
webpack.DefinePlugin ---> 在业务 js 代码中使用 DEV 判断是否是dev模式

#配置路由(react-router 和 react-router-dom) HashRouter(只能有一个孩子节点) 和 Route(exact 严格匹配)
HashRouter和BrowserRouter区别 ：
在React项目中我们经常需要采用React-Router来配置我们的页面路由，React-Router 是建立在 history 之上的，常见的history路由方案有三种形式，分别是：
hashHistory ---> hashHistory 使用 URL 中的 hash（#）部分去创建路由
browserHistory ---> 使用 React-Router 的应用推荐的 history方案。它使用浏览器中的 History API 用于处理 URL，创建一个像example.com/list/123这样真实的 URL。在browserHistory 模式下，URL 是指向真实 URL 的资源路径，当通过真实 URL 访问网站的时候，由于路径是指向服务器的真实路径，但该路径下并没有相关资源，所以用户访问的资源不存在(需要配置historyApiFallback)
createMemoryHistory ---> Memory history 不会在地址栏被操作或读取。这就解释了我们是如何实现服务器渲染的。同时它也非常适合测试和其他的渲染环境（像 React Native ）。和另外两种history的一点不同是你必须创建它，这种方式便于测试。

#babel插件 (.babelrc配置文件)
babel-preset-env 与 babel-preset-latest（babel-preset-es2015，babel-preset-es2016和babel-preset-es2017一起）的行为完全相同
babel-preset-stage-x preset 中的任何转换都是对未被批准为 JavaScript 版本一部分的语言的变化(如 es6 / es2015 )
babel-preset-react 解析与react有关的一些组件

#父子组件传值（2019/1/2）




