// Copyright 2020 - present integereleven. All rights reserved. MIT license.


import type { AsReversed, AsUnified } from '@kz/util/capability';

import type { IsTypeCapSet, IsTypeDefaults } from './types.ts';

export type CheckOrdinary<
  OfType,
  TargetType,
  Settings extends IsTypeCapSet = IsTypeDefaults,
> = Settings extends AsUnified
  ? Settings extends AsReversed
    ? ([TargetType] extends [OfType] ? true : false) extends true ? true
    : false
  : ([OfType] extends [TargetType] ? true : false) extends true ? true
  : false
  : Settings extends AsReversed
    ? (TargetType extends OfType ? true : false) extends true ? true
    : false
  : (OfType extends TargetType ? true : false) extends never ? true
  : OfType extends TargetType ? true
  : false;
