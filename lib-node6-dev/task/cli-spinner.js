'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ora = require('ora');

var _ora2 = _interopRequireDefault(_ora);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function cliSpinner(name) {
  const spinner = (0, _ora2.default)({
    text: name,
    interval: 600
  }).start();

  return {
    subtask(name) {
      const text = `${this._name} → ${name}`;
      spinner.text = text;
      spinner.render();
      return () => {
        process.nextTick(() => {
          if (spinner.text === text) {
            spinner.text = this._name;
          }
        });
      };
    },

    succeed() {
      spinner.text = this._name;
      spinner.succeed();
    }
  };
};
//# sourceMappingURL=cli-spinner.js.map