'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _fs = require('fs');

exports.default = function readFile0(target) {
  return new Promise((resolve, reject) => {
    (0, _fs.readFile)(target, (err, content) => {
      if (err) {
        return reject(new Error(`Failed to read file "${target}": ${err.message || err}`));
      }

      resolve(content);
    });
  });
};
//# sourceMappingURL=readFile.js.map