'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _fs = require('fs');

var _path = require('path');

var _mkdirp = require('mkdirp');

var _mkdirp2 = _interopRequireDefault(_mkdirp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (source, target) => new Promise((resolve, reject) => {
  (0, _mkdirp2.default)((0, _path.dirname)(target), () => {
    let rd = (0, _fs.createReadStream)(source);
    rd.on('error', err => reject(new Error(`failed to read file "${source}": ${err.message}`)));
    let wr = (0, _fs.createWriteStream)(target);
    wr.on('error', err => reject(new Error(`failed to write file "${target}": ${err.message}`)));
    wr.on('finish', resolve);
    wr.on('end', resolve);
    wr.on('close', resolve);
    rd.pipe(wr);
  });
});
//# sourceMappingURL=copyFile.js.map