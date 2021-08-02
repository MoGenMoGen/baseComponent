module.exports = {
  lintOnSave: false,
  css: {
    loaderOptions: {
      scss: {
        prependData: '@import "@/styles/echart.scss";'
      }
    }
  },
  devServer: {
    port: 1889,
    proxy: {
      '/api': {
        //本地服务接口地址
        target: 'http://localhost',
        //远程演示服务地址,可用于直接启动项目
        //target: 'https://saber.bladex.vip/api',
        ws: true,
        pathRewrite: {
          '^/api': '/'
        }
      }
    }
  },
  chainWebpack: (config) => {
    //忽略的打包文件
    config.externals({
      'vue': 'Vue',
      'vue-router': 'VueRouter',
      'vuex': 'Vuex',
      'axios': 'axios',
      'element-ui': 'ELEMENT',
    })
  }
}
