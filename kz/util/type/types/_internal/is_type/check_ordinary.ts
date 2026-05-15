// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import type { AsReversed, AsUnified } from '@kz/util/capability';

import type { IsTypeCapSet, IsTypeDefaults } from './types.ts';

export type CheckOrdinary<
  Type,
  OfType,
  Settings extends IsTypeCapSet = IsTypeDefaults,
> = Settings extends AsUnified
  ? Settings extends AsReversed
    ? ([OfType] extends [Type] ? true : false) extends true ? true
    : false
  : ([Type] extends [OfType] ? true : false) extends true ? true
  : false
  : Settings extends AsReversed
    ? (OfType extends Type ? true : false) extends true ? true
    : false
  : (Type extends OfType ? true : false) extends never ? true
  : Type extends OfType ? true
  : false;
