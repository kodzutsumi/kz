// Copyright 2020 - present integereleven. All rights reserved. MIT license.


import type { AsLoose, AsReversed } from '@kz/util/capability';

import type { IsSpecial } from '../simple_is_special.ts';

import type { IsTypeCapSet, IsTypeDefaults } from './types.ts';
import type { CheckOrdinary } from './check_ordinary.ts';

export type CheckSpecial<
  Type,
  OfType,
  Settings extends IsTypeCapSet = IsTypeDefaults,
> = IsSpecial<Type> extends true
  ? [OfType, Type] extends [Type, OfType] ? true
  : Settings extends AsLoose
    ? Settings extends AsReversed ? [OfType] extends [Type] ? true : false
    : [Type] extends [OfType] ? true
    : false
  : false
  : CheckOrdinary<Type, OfType, Settings>;
