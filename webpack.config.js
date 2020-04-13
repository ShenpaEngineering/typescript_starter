const path = require('path');

module.exports = {
    entry: './src/index.ts',
    watch: true,
    watchOptions: {
        ignored: /node_modules/
    },
    module: {
        rules: [
            {
                test: /\.ts?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ['.ts','.js'],
    },
    output: {
        filename: 'main.js', 
        path: path.resolve(__dirname, 'dist')
    }
};