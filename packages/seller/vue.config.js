'use strict'
const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}

const name = '' // page title

// If your port is set to 80,
// use administrator privileges to execute the command line.
// For example, Mac: sudo npm run
// You can change the port by the following methods:
// port = 9528 npm run dev OR npm run dev --port = 9528
const port = process.env.port || process.env.npm_config_port || 9528 // dev port

// All configuration item explanations can be find in https://cli.vuejs.org/config/
module.exports = {
  /**
   * You will need to set publicPath if you plan to deploy your site under a sub path,
   * for example GitHub Pages. If you plan to deploy your site to https://foo.github.io/bar/,
   * then publicPath should be set to "/bar/".
   * In most cases please use '/' !!!
   * Detail: https://cli.vuejs.org/config/#publicpath
   */
  publicPath: process.env.NODE_ENV === 'development' ? process.env.BASE_URL : '/',
  outputDir: 'dist',
  assetsDir: 'static',
  filenameHashing: false,
  lintOnSave: process.env.NODE_ENV === 'development',
  productionSourceMap: false,
  devServer: {
    port: port,
    open: true,
    overlay: {
      warnings: false,
      errors: true
    }
    // before: require('./mock/mock-server.js')
  },
  configureWebpack: {
    // provide the app's title in webpack's name field, so that
    // it can be accessed in index.html to inject the correct title.
    name: name,
    resolve: {
      alias: {
        '@': resolve('src')
      }
    },
    plugins: [
      // new BundleAnalyzerPlugin(),
      // new MiniCssExtractPlugin({
      //   filename: `css/app.css`,
      //   chunkFilename: 'css/[name].css'
      // })
      // new CompressionPlugin({
      //   algorithm: 'gzip',
      //   test: new RegExp('\\.(js|css)$'),
      //   // 只处理大于xx字节 的文件，默认：0
      //   threshold: 10240,
      //   // 示例：一个1024b大小的文件，压缩后大小为768b，minRatio : 0.75
      //   // 是否删除源文件，默认: false
      //   deleteOriginalAssets: false
      // })
    ]
    // output: { // 输出重构  打包编译后的 文件名称  【模块名称.版本号.js】
    //   filename: `js/app.js`,
    //   chunkFilename: `js/[name].js`
    // }
  },
  chainWebpack(config) {
    // when there are many pages, it will cause too many meaningless requests
    config.plugins.delete('prefetch')

    // set preserveWhitespace
    config.module
      .rule('vue')
      .use('vue-loader')
      .loader('vue-loader')
      .tap(options => {
        options.compilerOptions.preserveWhitespace = true
        return options
      })
      .end()
  }
}
