const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: __dirname + "/src/js/index.js", //ビルドするファイル
    output: {
        path: path.join(__dirname, "src/js"),
        filename: "bundle.js" //ビルドした後のファイル名
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
                /*use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: ["css-loader", "sass-loader"]
                })*/
            }
        ]
    },
    plugins: [
        /*new webpack.optimize.UglifyJsPlugin({
            output: {
                comments: false
            }
        }),*/
        //new ExtractTextPlugin("index.css")
    ]
};
