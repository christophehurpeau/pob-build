import ora from 'ora';

export default (name) => {
  const spinner = ora({
    text: name,
    interval: 600,
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
    },
  };
};

