export const plugins = new Map();
export const findByExtension = ext => plugins.get(ext);
export const register = plugin => plugins.set(plugin.extension, plugin);
