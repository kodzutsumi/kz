import type { BaseCapConsumerSet } from './type.ts';

export type PickCapSetting<
  CapBrokerSet extends BaseCapConsumerSet,
  Capability extends BaseCapConsumerSet,
  DefaultSetting extends Capability[keyof Capability],
> = CapBrokerSet extends Capability ? Extract<CapBrokerSet, Capability>
  : { [K in keyof Capability]: DefaultSetting };
