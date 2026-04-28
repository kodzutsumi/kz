import type { PickCapSetting } from './pick_cap_setting.ts';
import type { BaseCapConsumerSet } from './type.ts';

export type GetCapSetting<
  CapBrokerSet extends BaseCapConsumerSet,
  Capability extends BaseCapConsumerSet,
  DefaultSetting extends Capability[keyof Capability],
> = PickCapSetting<CapBrokerSet, Capability, DefaultSetting> extends
  infer PickedCap ? PickedCap[keyof PickedCap] extends never ? DefaultSetting
  : PickedCap[keyof PickedCap]
  : DefaultSetting;
