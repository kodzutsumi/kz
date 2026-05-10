// Copyright 2020 - present integereleven. All rights reserved. MIT license.


import type { IsAny } from '@std/testing/types';

import type { IsSpecial } from '../simple_is_special.ts';

import type { CheckOrdinary } from './check_ordinary.ts';
import type { CheckSpecial } from './check_special.ts';
import type { IsTypeCapSet, IsTypeDefaults } from './types.ts';

export type CheckType<
  TargetType,
  OfType,
  Settings extends IsTypeCapSet = IsTypeDefaults,
> = IsAny<TargetType> extends true ? IsAny<OfType> extends true ? true
  : false
  : IsSpecial<TargetType> extends true
    ? CheckSpecial<TargetType, OfType, Settings>
  : CheckOrdinary<TargetType, OfType, Settings>;
