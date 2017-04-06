import { execSync } from 'child_process';
import glob from 'glob';
import Task from '../task/';

export default function clean(envs) {
  const task = new Task('clean');

  if (!envs) {
    execSync('rm -Rf lib-* test/node6 examples/node6');
    task.succeed();
    return;
  }

  const diff = glob.sync('lib*').filter(path => !envs.includes(path.substr('lib-'.length)));
  if (diff.length) {
    const log = `removing: ${diff.join(',')}`;
    const subtask = task.subtask(log);
    if (diff.some(diff => diff.startsWith('src'))) {
      throw new Error('Cannot contains src');
    }

    execSync(`rm -Rf ${diff.join(' ')}`);
    subtask.done();
  }

  task.succeed();
}
