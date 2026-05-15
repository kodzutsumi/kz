// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import type { IsAny } from '@std/testing/types';

import type { IsSpecial } from '../simple_is_special.ts';

import type { CheckOrdinary } from './check_ordinary.ts';
import type { CheckSpecial } from './check_special.ts';
import type { IsTypeCapSet, IsTypeDefaults } from './types.ts';

export type CheckType<
  Type,
  OfType,
  Settings extends IsTypeCapSet = IsTypeDefaults,
> = IsAny<OfType> extends true ? IsAny<Type> extends true ? true
  : false
  : IsSpecial<OfType> extends true ? CheckSpecial<Type, OfType, Settings>
  : CheckOrdinary<Type, OfType, Settings>;
