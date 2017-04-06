'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = clean;

var _child_process = require('child_process');

var _glob = require('glob');

var _glob2 = _interopRequireDefault(_glob);

var _task = require('../task/');

var _task2 = _interopRequireDefault(_task);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function clean(envs) {
  const task = new _task2.default('clean');

  if (!envs) {
    (0, _child_process.execSync)('rm -Rf lib-* test/node6 examples/node6');
    task.succeed();
    return;
  }

  const diff = _glob2.default.sync('lib*').filter(path => !envs.includes(path.substr('lib-'.length)));
  if (diff.length) {
    const log = `removing: ${diff.join(',')}`;
    const subtask = task.subtask(log);
    if (diff.some(diff => diff.startsWith('src'))) {
      throw new Error('Cannot contains src');
    }

    (0, _child_process.execSync)(`rm -Rf ${diff.join(' ')}`);
    subtask.done();
  }

  task.succeed();
}
//# sourceMappingURL=clean.js.map