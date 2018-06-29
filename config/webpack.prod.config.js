const webpack = require('webpack');
const merge = require('webpack-merge');

const baseConfig = require('./webpack.base.config');
const optimizationConfig = require('./webpack.opt.config');

const productionConfiguration = function (env) {
  const NODE_ENV = env.NODE_ENV ? env.NODE_ENV : 'development';
  // passing in my environment value, so webpack knows which I am running
  return {
    plugins: [
      new webpack.DefinePlugin({ 'process.env.NODE_ENV': JSON.stringify(NODE_ENV) }),
      // DefinePlugin is built in to webpack. Need to pass it a string.
    ]
  };
};

module.exports = merge.smart(baseConfig, optimizationConfig, productionConfiguration);
// merges all three of the configurations, to stay DRY