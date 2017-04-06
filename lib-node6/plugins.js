"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
const plugins = exports.plugins = new Map();
const findByExtension = exports.findByExtension = ext => plugins.get(ext);
const register = exports.register = plugin => plugins.set(plugin.extension, plugin);
//# sourceMappingURL=plugins.js.map