module.exports = {
    lintOnSave: false,
    publicPath:'./',
    devServer: {
        open: true,
        host: '0.0.0.0',
        port: 8080,
        hotOnly: false,
        https: false,
        //以下后台接口或是模拟接口域名
        proxy: 'http://localhost:4000', // string | Object
        before: app => {}
    }
}
