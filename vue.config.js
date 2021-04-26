const webpack = require('webpack')
module.exports={
    devServer:{
        proxy:{
            '/api':{
                target:'http://localhost:3000',
                changeOrigin:true
            }
        }
    },
    configureWebpack: {
        plugins: [
            new webpack.ProvidePlugin({
                $:"jquery",
                jQuery:"jquery",
                "windows.jQuery":"jquery"
            })
        ]
    }
}