const { defineConfig } = require('@vue/cli-service')
/*传递给node  commonjs规范 */

const BASE_URL = process.env.NODE_ENV === 'test1' ? "/" : "/";

/*node_modules里的依赖默认是不会编译的,会导致es6语法在ie中的语法报错,所以需要在vue.config.js中使用transpileDependencies属性配置node_modules中指定哪些文件夹或文件需要编译. */

module.exports = defineConfig({
  publicPath: BASE_URL,//公共路径
  /*
    test: /.ts$/,
  loader: 'ts-loader',
  options: { appendTsSuffixTo: [/.vue$/] },
  */
  /*node_modules里的依赖默认是不会编译的,会导致es6语法在ie中的语法报错,所以需要在vue.config.js中使用transpileDependencies属性配置node_modules中指定哪些文件夹或文件需要编译. */
  transpileDependencies: true,
  devServer: {
    //  host: "localhost",
    open: true,
    /*disableHostCheck: false,*devServer.disableHostCheck配置项用于配置是否关闭用于 DNS 重绑定的 HTTP 请求的 HOST 检查。 DevServer 默认只接受来自本地的请求，关闭后可以接受来自任何 HOST 的请求。 它通常用于搭配--host 0.0.0.0使用，因为你想要其它设备访问你本地的服务，但访问时是直接通过 IP 地址访问而不是 HOST 访问，所以需要关闭 HOST 检查。
    。 */
    // 处理跨域请求
    proxy: {
      '/api': {//遇见api前缀的请求，就会触发此代理配置
        target: 'http://localtp6/',//需要代理的后端接口地址
        ws: false,//如果要代理websocket,将此参数设为true
        secure: false,  //如果是https接口，将此参数设为true
        changeOrigin: true,//是否跨域,设成true表示允许跨域
        pathRewrite: {
          '^/api': ''//重写路径，在请求触发后将/api的路径删除改为空字符串，因为后端接口没有/api/xxx
        }
      },
      '/demo': {
        target: 'http://localtp6/',
        ws: false,
        changeOrigin: true,
        pathRewrite: {
          //'^/demo': ''
        }
      }
    }
  }
})
