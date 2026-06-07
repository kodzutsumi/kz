// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import type { OfType, UseOfType } from '@kz/util/capability';

import type {  
  IsType,
  IsTypeCapSet,
  IsTypeDefaults,
} from './_internal/mod.ts';

import type { Any } from './any.ts';

type AnyType =Any<'#i11n:permit.any/Is'>;

export type IsCapabilities = IsTypeCapSet | UseOfType;

export type IsDefaultSettings = IsTypeDefaults;

/**
 * Determines if a type is of a specified type, with configurable capabilities
 * for how the check is performed.
 * 
 * @template Type - The type to check.
 * @template OfType - The type to check against.
 * @template Settings - The set of capabilities to apply to the type check, with a default of IsTypeDefaults.
 * @returns A boolean indicating whether the type is of the specified type, with the applied capabilities.
 */
export type Is<
  Type,
  Settings extends IsCapabilities = IsDefaultSettings,
> = Settings extends OfType<infer Compare>
  ? IsType<Type, Compare, Settings>
  : IsType<Type, AnyType, Settings>;
