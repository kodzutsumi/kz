// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import type { GetCapSetting } from '../../get_cap_setting.ts';

import type { AsCondition, UseCondition } from '../use_condition/mod.ts';
import type { UseThen } from '../use_then/mod.ts';
import type { UseElse } from '../use_else/mod.ts';

type Capabilities = UseCondition;
type Defaults = AsCondition;

/**
 * A special utility type that checks if a capability broker set satisfies the {@linkcode UseNullOption} capability.
 *
 * @template CapBrokerSet - The capability broker set to check.
 * @template Settings - The capability settings, which determines the type returned based on the result of the check.
 */
export type IsNullOption<
  CapBrokerSet,
  Settings extends Capabilities = Defaults,
> = [keyof CapBrokerSet, never] extends [never, keyof CapBrokerSet]
  ? GetCapSetting<Settings, UseThen, true>
  : GetCapSetting<Settings, UseElse, false>;
