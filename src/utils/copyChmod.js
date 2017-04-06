import { stat, chmod } from 'fs';
import promiseCallback from 'promise-callback-factory';

export default (source, target) => (
  promiseCallback(done => stat(source, done))
        .then(stat => promiseCallback(done => chmod(target, stat.mode, done)))
);
