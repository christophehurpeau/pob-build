'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _fs = require('fs');

var _promiseCallbackFactory = require('promise-callback-factory');

var _promiseCallbackFactory2 = _interopRequireDefault(_promiseCallbackFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function copyChmod(source, target) {
  return (0, _promiseCallbackFactory2.default)(done => (0, _fs.stat)(source, done)).then(stat => (0, _promiseCallbackFactory2.default)(done => (0, _fs.chmod)(target, stat.mode, done)));
};
//# sourceMappingURL=copyChmod.js.map