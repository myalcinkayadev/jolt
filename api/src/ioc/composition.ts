import { container } from 'tsyringe';
import { InjectionToken } from './token';

import { connectMongodb } from '../infra/mongodb';

export class CompositionRoot {
  static async register(): Promise<void> {
    await connectMongodb();

    this.verify();
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
