// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import type { PickCap } from './pick_cap.ts';
import type { BaseCapSet } from './type.ts';

/**
 * Get the setting of a capability (`Cap`) from a capability broker set
 * (`Settings`), with a fallback setting (`Fallback`) if the capability is not
 * present in the broker set.
 *
 * @template Settings - The capability broker set to get the setting from.
 * @template Cap - The capability to get the setting of from `Settings`.
 * @template Fallback - The fallback setting to use if the capability is not present in `Settings`.
 * @returns The capability setting from the broker set, or the capability setting with the fallback setting.
 */
export type GetCapSetting<
  Settings extends BaseCapSet,
  Cap extends BaseCapSet,
  Fallback extends Cap[keyof Cap],
> = PickCap<Settings, Cap, Fallback> extends
  infer PickedCap ? PickedCap[keyof PickedCap] extends never ? Fallback
  : PickedCap[keyof PickedCap]
  : Fallback;
