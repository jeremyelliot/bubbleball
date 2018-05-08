const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const config = {
    output: {
        filename: 'main.js'
    },
    watch: true,
    watchOptions: {
        ignored: /node_modules/
    },
    mode: 'development',
    plugins: [new UglifyJsPlugin()]
};

module.exports = config;