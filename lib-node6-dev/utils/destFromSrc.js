'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _path = require('path');

var _plugins = require('../plugins');

exports.default = function destFromSrc(relative, plugin) {
  if (plugin === undefined) {
    const extension = (0, _path.extname)(relative);
    if (extension && extension.length > 1) {
      plugin = (0, _plugins.findByExtension)(extension.substr(1));
    }
  }
  if (plugin) {
    if (plugin.destExtension) {
      return relative.slice(0, -plugin.extension.length) + plugin.destExtension;
    } else {
      return relative;
    }
  }

  if (relative.endsWith('jsx')) return relative.slice(0, -1);
  return relative;
};
//# sourceMappingURL=destFromSrc.js.map