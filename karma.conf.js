var webpack = require('webpack');

module.exports = function (config) {
  config.set({

    browsers: [ process.env.CONTINUOUS_INTEGRATION ? 'Firefox' : 'Chrome' ],

    singleRun: true,

    frameworks: [ 'mocha' ],

    files: [
      'tests.webpack.js'
    ],

    preprocessors: {
      'tests.webpack.js': [ 'webpack', 'sourcemap' ],
      'src/**/*.jsx': ['coverage']
    },

    reporters: [ 'progress', 'coverage'],

    coverageReporter: {
      type: 'html',
      dir: 'coverage/'
    },

    webpack: {
      devtool: 'inline-source-map',
      module: {
        loaders: [
          { test: /\.(js|jsx)$/, loader: 'babel-loader' }
        ],
        postLoaders: [ {
            test: /\.js$/,
            exclude: /(test|test\.js|node_modules)/,
            loader: 'istanbul-instrumenter'
        }]
      }
    },

    webpackServer: {
      noInfo: true
    }

  });
};
