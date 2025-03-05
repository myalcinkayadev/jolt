import 'reflect-metadata';

import { loadEnv } from './env';
import { CompositionRoot } from './ioc/compositionRoot';
import logger from './logger';

async function main() {
  loadEnv();

  const { wss } = await CompositionRoot.register();

  wss.listen();
}

main().catch((err) => {
  logger.error('Main error:', err);
});
