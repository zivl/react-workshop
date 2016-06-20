
var webpack = require('webpack');

function getEntrySources(sources) {
  if (process.env.NODE_ENV !== 'production') {
    sources.push('webpack-dev-server/client?http://localhost:8080');
    sources.push('webpack/hot/only-dev-server');
  }

  return sources;
}

module.exports = {
  devtool: process.env.NODE_ENV !== 'production' ? 'eval-source-map' : '',
  entry: {
    bundle: getEntrySources([
      './src/app.jsx'
    ])
  },
  output: {
    publicPath: 'http://localhost:8080/',
    filename: 'dist/[name].js'
  },
  devServer: {
    port: 8080,
    hot: true,
    progress: true,
    inline: true,
    debug: true
  },
  module: {
    preLoaders: [{
      test: /\.(js|jsx)$/,
      loader: 'source-map-loader'
    }],
    loaders: [{
      test: /\.(js|jsx)$/,
      loaders: ['react-hot', 'babel-loader'],
      exclude: /node_modules/
    }, {
      test: /\.scss$/,
      loaders: ['style', 'css', 'sass']
    }]
  },
  plugins: [
    new webpack.DefinePlugin({
      DEBUG: true
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
};
