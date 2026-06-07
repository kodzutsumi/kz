// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import type { ApplySafety } from '../apply_safety.ts';
import type { IsTypeCapSet, IsTypeDefaults } from './types.ts';

import type { CheckType } from './check_type.ts';
import type { ApplyInverted } from '../apply_inverted.ts';

/**
 * Determines if a type is of a specified type, with configurable capabilities
 * for how the check is performed.
 *
 * @template Type - The type to check.
 * @template OfType - The type to check against.
 * @template Settings - The set of capabilities to apply to the type check, with a default of IsTypeDefaults.
 * @returns A boolean indicating whether the type is of the specified type, with the applied capabilities.
 * @internal
 */
export type IsType<
  Type,
  OfType,
  Settings extends IsTypeCapSet = IsTypeDefaults,
> = ApplyInverted<
  ApplySafety<CheckType<Type, OfType, Settings>, Settings>,
  Settings
>;
