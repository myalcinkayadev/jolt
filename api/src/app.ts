import 'core-js'

import { CompositionRoot } from './ioc/composition';
import logger from './logger';

async function main() {
  await CompositionRoot.register();
}

main().catch((err) => {
  logger.error('Main error:', err);
});
