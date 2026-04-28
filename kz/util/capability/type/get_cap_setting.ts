// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import type { PickCapSetting } from './pick_cap_setting.ts';
import type { BaseCapConsumerSet } from './type.ts';

/**
 * Get the setting for a capability from a capability broker set, with a default fallback if the capability is not present in the broker set.
 *
 * @template CapBrokerSet - The capability broker set to get the setting from.
 * @template Capability - The capability to get the setting for.
 * @template DefaultSetting - The default setting to use if the capability is not present in the broker set.
 * @returns The setting for the capability from the broker set, or the default setting if the capability is not present in the broker set.
 */
export type GetCapSetting<
  CapBrokerSet extends BaseCapConsumerSet,
  Capability extends BaseCapConsumerSet,
  DefaultSetting extends Capability[keyof Capability],
> = PickCapSetting<CapBrokerSet, Capability, DefaultSetting> extends
  infer PickedCap ? PickedCap[keyof PickedCap] extends never ? DefaultSetting
  : PickedCap[keyof PickedCap]
  : DefaultSetting;
