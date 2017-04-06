'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useLogger = exports.default = undefined;

var _cliSpinner = require('./cli-spinner');

var _cliSpinner2 = _interopRequireDefault(_cliSpinner);

var _logger = require('./logger');

var _logger2 = _interopRequireDefault(_logger);

var _Task = require('./Task');

var _Task2 = _interopRequireDefault(_Task);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Task2.default;


(0, _Task.addNotifier)(_cliSpinner2.default);
const useLogger = exports.useLogger = () => (0, _Task.replaceNotifiers)(_logger2.default);
//# sourceMappingURL=index.js.map