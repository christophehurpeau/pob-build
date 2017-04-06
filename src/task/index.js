import cliSpinner from './cli-spinner';
import logger from './logger';
import { addNotifier, replaceNotifiers } from './Task';

export default from './Task';

addNotifier(cliSpinner);
export const useLogger = () => replaceNotifiers(logger);
