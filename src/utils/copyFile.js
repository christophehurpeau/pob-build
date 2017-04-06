import { createReadStream, createWriteStream } from 'fs';
import { dirname } from 'path';
import mkdirp from 'mkdirp';

export default (source, target) => (
  new Promise((resolve, reject) => {
    mkdirp(dirname(target), () => {
      let rd = createReadStream(source);
      rd.on('error', err => reject(new Error(`failed to read file "${source}": ${err.message}`)));
      let wr = createWriteStream(target);
      wr.on('error', err => reject(new Error(`failed to write file "${target}": ${err.message}`)));
      wr.on('finish', resolve);
      wr.on('end', resolve);
      wr.on('close', resolve);
      rd.pipe(wr);
    });
  })
);
