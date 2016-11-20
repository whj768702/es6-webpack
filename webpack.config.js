var path = require('path');

module.exports = {
    entry: './app/main.js',
    output: {
        path: __dirname,
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                loader: 'babel',
                test: path.join(__dirname, 'app'),
                query: {
                    cacheDirectory: true,
                    plugins: ['transform-decorators-legacy'],
                    presets: ['es2015', 'stage-0']
                }
            },{
                test: /\.html$/,
                loader: 'html'
            }
        ]
    }
};