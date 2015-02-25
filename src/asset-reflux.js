/*
  assetReflux()
  returns a configured Engine instance
 */

'use strict';

const Engine = require('./engine');

// main exports
module.exports = function(options) {
  return new Engine(options);
};
module.exports.Engine = Engine;

// also export various utility deps, in case the wrapper lib wants to use them
module.exports.async = require('async');
module.exports.Promise = require('bluebird');
module.exports.chalk = require('chalk');
module.exports._ = require('lodash');
module.exports.Args = require('args-js');
module.exports.XFile = require('x-file');
