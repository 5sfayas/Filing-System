const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { mode } = require('./webpack.config');

module.exports = {
    entry:{
        main: path.join(__dirname, 'client/src/index.js')
    },
    output:{
        path: path.join(__dirname, 'build'),
        filename: 'bundle.js'
    },
    plugins: [new HtmlWebpackPlugin({
        title: 'Filing System',
        template: path.join(__dirname, 'client/templates/index.ejs'),
        filename: 'index.html'
    })],
    mode:"production",
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|express)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            { 
                test: /\.txt$/,
                use: 'raw-loader' 
            }
        ]
    },
    resolve: {
        extensions: ["*", ".js", ".jsx"]
    },
    resolveLoader: {
        moduleExtensions: ["babel-loader"]
    }

}