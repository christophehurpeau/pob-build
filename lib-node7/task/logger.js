'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.configure = exports.config = exports.logger = exports.levels = undefined;

var _nightingale = require('nightingale');

var _nightingale2 = _interopRequireDefault(_nightingale);

var _nightingaleConsole = require('nightingale-console');

var _nightingaleConsole2 = _interopRequireDefault(_nightingaleConsole);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.levels = _nightingale.levels;
const logger = exports.logger = new _nightingale2.default('pobuild');
const config = exports.config = level => [{
  pattern: /^pobuild/,
  handler: new _nightingaleConsole2.default(level)
}];

const configure = exports.configure = level => (0, _nightingale.configure)(config(level || _nightingale.levels.ERROR));

exports.default = name => {
  const _logger = logger.child(name, name);
  const startTime = _logger.infoTime('starting');

  return {
    subtask(name) {
      const startTimeSubtask = _logger.infoTime(name);
      return () => {
        _logger.infoSuccessTimeEnd(startTimeSubtask, `${name}: done.`);
      };
    },

    succeed() {
      _logger.infoSuccessTimeEnd(startTime, 'done.');
    }
  };
};
//# sourceMappingURL=logger.js.map