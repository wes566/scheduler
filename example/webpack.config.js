var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: {
    'basic': [
      'webpack-dev-server/client?http://localhost:8080/',
      'webpack/hot/only-dev-server',
      './example/basic.jsx'
    ]
  },
  output: {
    path: __dirname,
    filename: "[name].js",
    publicPath: 'http://localhost:8080/',
    chunkFilename: '[id].chunk.js',
    sourceMapFilename: '[name].map'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.es6']
  },
  module: {
    loaders: [
      {
        test: /\.jsx$|\.es6$|\.js$/,
        loader: 'babel-loader',
        query: {
                    presets: ['es2015','react'],
                    plugins: ["transform-es2015-destructuring", "transform-object-rest-spread"]
                },
        exclude: /node_modules/
      },
      { test: /\.scss$|\.css$/, loader: 'style-loader!style!css!sass' },
      { test: /\.(jpe?g|png|gif)$/i, loader: 'url?limit=10000!img?progressive=true' },
      { test: /\.json/, loader: 'json-loader' }
    ]
  },
  plugins: [
    new webpack.NoEmitOnErrorsPlugin()
  ],
  devtool: "cheap-source-map"
};
