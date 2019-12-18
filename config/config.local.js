
/* eslint valid-jsdoc: "off" */
'use strict';

const EasyWebpack = require('easywebpack-vue');

module.exports = () => {
  exports.webpack = {
    port: 9000,
    webpackConfigList: EasyWebpack.getWebpackConfig(),
  };

  return exports;
};
