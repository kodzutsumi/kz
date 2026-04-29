// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import type { BaseCapConsumerSet } from './type.ts';

/**
 * Pick the setting for a capability from a capability broker set, with a default fallback if the capability is not present in the broker set.
 *
 * @template CapBrokerSet - The capability broker set to pick the setting from.
 * @template Capability - The capability to pick the setting for.
 * @template DefaultSetting - The default setting to use if the capability is not present in the broker set.
 * @returns The setting for the capability from the broker set, or the default setting if the capability is not present in the broker set.
 */
export type PickCapSetting<
  CapBrokerSet extends BaseCapConsumerSet,
  Capability extends BaseCapConsumerSet,
  DefaultSetting extends Capability[keyof Capability],
> = {
  [K in keyof Capability]: K extends keyof CapBrokerSet ? CapBrokerSet[K]
    : DefaultSetting;
};
