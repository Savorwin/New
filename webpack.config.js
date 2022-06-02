'use strict';

let path = require('path');

module.exports = {
  mode: 'development',
  entry: './test/script.js',
  output: {
    filename: 'bundle.js',
    path: __dirname + '/test'
  },
  watch: true,

  devtool: "source-map",

  module: {}
};
