import { readFile } from 'fs';

export default (target) => (
  new Promise((resolve, reject) => {
    readFile(target, (err, content) => {
      if (err) {
        return reject(new Error(`Failed to read file "${target}": ${err.message || err}`));
      }

      resolve(content);
    });
  })
);
