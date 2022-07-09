import { FactoryProvider as IFactoryProvider } from '@nestjs/common';
import { InjectToken } from '@typings/*';

class Provider {
  public readonly provider: FactoryProvider[];
  public constructor(...provider: FactoryProvider[]) {
    this.provider = provider;
  }
}

export interface FactoryProvider extends IFactoryProvider {
  provide: InjectToken
  inject?: InjectToken[]
}
export default Provider;