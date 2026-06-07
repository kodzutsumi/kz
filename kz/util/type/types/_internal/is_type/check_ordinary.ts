// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import type { AsReversed, AsStrict, AsUnified } from '@kz/util/capability';

import type { IsTypeCapSet, IsTypeDefaults } from './types.ts';

/**
 * Checks if the type is of the specified type, with support for unified and
 * reversed capabilities.
 * 
 * @template Type - The type to check.
 * @template OfType - The type to check against.
 * @template Settings - The set of capabilities to apply to the type check.
 * @returns A boolean indicating whether the type is of the specified type, with support for unified and reversed capabilities.
 * @internal
 */
export type CheckOrdinary<
  Type,
  OfType,
  Settings extends IsTypeCapSet = IsTypeDefaults,
> = Settings extends AsStrict
  ? ([Type, OfType] extends [OfType, Type] ? true : false) extends true
      ? true
      : false
  : Settings extends AsUnified
    ? Settings extends AsReversed
      ? ([OfType] extends [Type] ? true : false) extends true
        ? true
        : false
      : ([Type] extends [OfType] ? true : false) extends true
        ? true
        : false
    : Settings extends AsReversed
      ? (OfType extends Type ? true : false) extends never
        ? true
        : OfType extends Type
          ? true
          : false
      : (Type extends OfType ? true : false) extends never
        ? true
        : Type extends OfType
          ? true
          : false;
