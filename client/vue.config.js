const path = require('path')

module.exports = {
    devServer: {
        proxy: {
            "/api": {
                target: "http://localhost:1002"
            }
        }
    },
    outputDir: path.resolve(__dirname, '../public'),
    publicPath: process.env.NODE_ENV === 'production' ? 'MyBlogs' : '/'
};