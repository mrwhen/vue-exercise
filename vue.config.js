const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig(
  {
  transpileDependencies: true,
  pages: {
    index: {
      entry: 'src/main.js'
    }
  },
  lintOnSave: false,
  // 开启代理：方式 1 不灵活，只能配置一个代理
  // devServer: {
  //   proxy: ""
  // }
  // 开启代理：方式 2，灵活，可以配置多个代理
  // devServer: {
  //   proxy: {
  //     '/api1': {
  //       target: '',
  //       pathRewrite: {'^/atguigu':''},
  //       ws: true, // 支持 websocket
  //       changeOrigin: true // 用于控制请求中的 host 值
  //     },
  //     '/api2': {
  //       target: '',
  //       pathRewrite: {'^/atguigu':''},
  //       ws: true, // 支持 websocket
  //       changeOrigin: true // 用于控制请求中的 host 值
  //     }
  //   }
  // }
  }
)