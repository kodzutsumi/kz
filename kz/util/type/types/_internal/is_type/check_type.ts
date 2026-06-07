// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import type { IsAny } from '@std/testing/types';
import type { AsStrict } from '@kz/util/capability';

import type { CheckOrdinary } from './check_ordinary.ts';
import type { IsTypeCapSet, IsTypeDefaults } from './types.ts';

/**
 * Checks if the type is of the specified type, with special handling for any
 * and special types, and support for various capabilities.
 * 
 * @template Type - The type to check.
 * @template OfType - The type to check against.
 * @template Settings - The set of capabilities to apply to the type check.
 * @returns A boolean indicating whether the type is of the specified type, with special handling for any and special types, and support for various capabilities.
 * @internal
 */
export type CheckType<
  Type,
  OfType,
  Settings extends IsTypeCapSet = IsTypeDefaults,
> = IsAny<OfType> extends true ? IsAny<Type> extends true ? true
  : Settings extends AsStrict
    ? false
    : CheckOrdinary<Type, OfType, Settings>
  : CheckOrdinary<Type, OfType, Settings>;

// - AsDistributed & AsLoose A extends B
// - AsUnified & AsLoose [A] extends [B]
// - AsStrict [A, B] extends [B, A]