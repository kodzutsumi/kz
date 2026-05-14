// Copyright 2020 - present integereleven. All rights reserved. MIT license.


import type { AsLoose, AsReversed } from '@kz/util/capability';

import type { IsSpecial } from '../simple_is_special.ts';

import type { IsTypeCapSet, IsTypeDefaults } from './types.ts';
import type { CheckOrdinary } from './check_ordinary.ts';

export type CheckSpecial<
  OfType,
  TargetType,
  Settings extends IsTypeCapSet = IsTypeDefaults,
> = IsSpecial<OfType> extends true
  ? [TargetType, OfType] extends [OfType, TargetType] ? true
  : Settings extends AsLoose
    ? Settings extends AsReversed ? [TargetType] extends [OfType] ? true : false
    : [OfType] extends [TargetType] ? true
    : false
  : false
  : CheckOrdinary<OfType, TargetType, Settings>;
