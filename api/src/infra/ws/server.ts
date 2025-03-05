import logger from '../../logger';
import uWS, { TemplatedApp } from 'uWebSockets.js';

export class WebsocketServer {
  private readonly server: TemplatedApp;

  constructor(private readonly port: number) {
    this.server = uWS.App();
  }

  listen() {
    this.server.listen(this.port, (token) => {
      if (token) {
        logger.info(`🚀 Jolt websocket server is running on port ${this.port}`);
      } else {
        logger.error(
          `❌ Jolt websocket server failed to start to port ${this.port}`,
        );
      }
    });
  }
}
