module.exports = [
    {test: /\.ts(x?)$/, loader: 'ts-loader'},
    {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader', // 'babel-loader' is also a valid name to reference
        query: {
            presets: ['es2015']
        }
    },
    {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
    },
    {
        test: /\.scss$/,
        loader: 'style!css!sass'
    }, {
        test: /\.html$/,
        exclude: /node_modules/,
        loader: 'raw'
    }, {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader?limit=10000&mimetype=application/font-woff'
    }, {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader'
    }, {
        test: '\.jpg$',
        exclude: /node_modules/,
        loader: 'file'
    }, {
        test: '\.png$',
        exclude: /node_modules/,
        loader: 'url'
    }
];
