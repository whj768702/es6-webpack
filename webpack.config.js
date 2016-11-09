var path = require('path');

module.exports = {
    entry: './scripts/main.js',
    output: {
        path: __dirname,
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                test: path.join(__dirname, 'scripts'),
                query: {
                    presets: 'es2015'
                }
            }
        ]
    }
};