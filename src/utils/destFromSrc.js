import { extname } from 'path';
import { findByExtension as findPluginByExtension } from '../plugins';

export default (relative, plugin) => {
  if (plugin === undefined) {
    const extension = extname(relative);
    if (extension && extension.length > 1) {
      plugin = findPluginByExtension(extension.substr(1));
    }
  }
  if (plugin) {
    if (plugin.destExtension) {
      return relative.slice(0, -(plugin.extension.length)) + plugin.destExtension;
    } else {
      return relative;
    }
  }

  if (relative.endsWith('jsx')) return relative.slice(0, -1);
  return relative;
};
