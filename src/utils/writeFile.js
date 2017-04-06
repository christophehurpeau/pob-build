import { writeFile } from 'fs';
import { dirname } from 'path';
import mkdirp from 'mkdirp';

export default (target, content) => (
  new Promise((resolve, reject) => {
    mkdirp(dirname(target), () => {
      writeFile(target, content, (err) => {
        if (err) {
          return reject(new Error(`Failed to write file "${target}": ${err.message || err}`));
        }

        resolve();
      });
    });
  })
);
