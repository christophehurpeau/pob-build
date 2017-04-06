"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
const notifiers = [];

const addNotifier = exports.addNotifier = notifier => notifiers.push(notifier);
const replaceNotifiers = exports.replaceNotifiers = newNotifiers => {
  notifiers.splice(0, notifiers.length);
  notifiers.push(...newNotifiers);
};

let Task = class {
  constructor(name) {
    this._name = name;
    this._notifiers = notifiers.map(notifier => notifier(name));
  }

  subtask(name) {
    const callbacks = this._notifiers.map(notifier => notifier.subtask(name));
    return {
      done: () => {
        callbacks.forEach(callback => callback());
      }
    };
  }

  succeed() {
    this._notifiers.forEach(notifier => notifier.succeed());
  }
};
exports.default = Task;
//# sourceMappingURL=Task.js.map