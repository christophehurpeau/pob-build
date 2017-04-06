const notifiers = [];

export const addNotifier = notifier => notifiers.push(notifier);
export const replaceNotifiers = newNotifiers => {
  notifiers.splice(0, notifiers.length);
  notifiers.push(...newNotifiers);
};

export default class Task {
  constructor(name) {
    this._name = name;
    this._notifiers = notifiers.map(notifier => notifier(name));
  }

  subtask(name) {
    const callbacks = this._notifiers.map(notifier => notifier.subtask(name));
    return {
      done: () => {
        callbacks.forEach(callback => callback());
      },
    };
  }

  succeed() {
    this._notifiers.forEach(notifier => notifier.succeed());
  }
}
