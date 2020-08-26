const UglifyPlugin = require('uglifyjs-webpack-plugin')
module.exports = {
    // 静态文件目录
    assetsDir: 'assets',
    // 编译后的地址，可以根据环境进行设置
    publicPath: './',
     // 是否开启编译时是否不符合eslint提示
    lintOnSave: true,
    // 基本路径
    publicPath: './',
    // 输出文件目录
    outputDir: 'programs-template-vue',
    // eslint-loader 是否在保存的时候检查
    lintOnSave: true,
    chainWebpack: () => {},
    configureWebpack: (config) => {
      if (process.env.NODE_ENV === 'production') {
        // 生产环境修改配置
        config.mode = 'production'
        // 将每个依赖包打包成单独的js文件
        const optimization = {
          minimizer: [new UglifyPlugin({
            uglifyOptions: {
              warnings: false,
              compress: {
                drop_console: true,
                drop_debugger: false,
                pure_funcs: ['console.log']
              }
            }
          })]
        }
        Object.assign(config, {
          optimization
        })
      } else {
        // 开发环境修改配置
        config.mode = 'development'
      }
    },
    devServer: {
        /* 自动打开浏览器 */
        open: true,
        port: 8080,
        hot: true,
        disableHostCheck: true,
        /* 使用代理 */
        proxy: {
            '/api': {
                target: 'http://192.168.0.1:8080',
            // 设置跨域
                changeOrigin: true
            }
        }
    }
}