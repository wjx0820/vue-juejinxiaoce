module.exports = {
  lintOnSave: false,
  // 基于proxy代理实现跨域
  devServer: {
    // sockjs-node/info请求抱错
    // sockHost: '127.0.0.1',
    proxy: {
      '/': {
        target: 'https://xiaoce-timeline-api-ms.juejin.im/v1',
        changeOrigin: true
      }
    }
  }
};