'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _fs = require('fs');

var _path = require('path');

var _mkdirp = require('mkdirp');

var _mkdirp2 = _interopRequireDefault(_mkdirp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function writeFile0(target, content) {
  return new Promise((resolve, reject) => {
    (0, _mkdirp2.default)((0, _path.dirname)(target), () => {
      (0, _fs.writeFile)(target, content, err => {
        if (err) {
          return reject(new Error(`Failed to write file "${target}": ${err.message || err}`));
        }

        resolve();
      });
    });
  });
};
//# sourceMappingURL=writeFile.js.map