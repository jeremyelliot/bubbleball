const path = require('path');

const config = {
    output: {
        filename: 'main.js'
    },
    watch: true,
    watchOptions: {
        ignored: /node_modules/
    },
    mode: 'development'
};

module.exports = config;