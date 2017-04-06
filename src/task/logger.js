import Logger, { configure as nightingaleConfigure, levels } from 'nightingale/src';
import ConsoleHandler from 'nightingale-console/src';

export { levels };

export const logger = new Logger('pobuild');
export const config = level => (
  [
    {
      pattern: /^pobuild/,
      handler: new ConsoleHandler(level),
    },
  ]
);

export const configure = level => nightingaleConfigure(config(level || levels.ERROR));


export default (name) => {
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
    },
  };
};
