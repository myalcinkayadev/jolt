import { container } from 'tsyringe';
import { InjectionToken } from './injectionToken';

import { connectMongodb } from '../infra/mongodb';
import { WebsocketServer } from '../infra/ws/server';

type CompositionRootRegisterResult = {
  wss: WebsocketServer;
};

export class CompositionRoot {
  static async register(): Promise<CompositionRootRegisterResult> {
    await connectMongodb();

    const wssPort = parseInt(process.env.WSS_PORT || '9000');
    const wss = new WebsocketServer(wssPort);

    this.verify();

    return {
      wss,
    };
  }

  private static verify(): void {
    Object.keys(InjectionToken).forEach((token) => {
      if (!container.isRegistered(token)) {
        throw new Error(
          `${token} is not registered as dependency on composition root 🧗‍`,
        );
      }
    });
  }
}
