// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import type { BaseCapSet } from './types.ts';

/**
 * Pick a capability (`Cap`) from a capability broker set (`Settings`), with a
 * fallback setting (`Fallback`) if the capability is not present in the broker
 * set.
 *
 * @template Settings - The capability broker set to pick the setting from.
 * @template Cap - The capability to pick from `Settings`.
 * @template Fallback - The fallback setting to use if the capability is not present in `Settings`.
 * @returns The capability from the broker set, or the capability with the fallback setting.
 */
export type PickCap<
  Settings extends BaseCapSet,
  Cap extends BaseCapSet,
  Fallback extends Cap[keyof Cap] = Cap[keyof Cap],
> = {
  [K in keyof Cap]: K extends keyof Settings ? Settings[K]
    : Fallback;
} extends infer Resolved extends Cap ? Resolved : never;
