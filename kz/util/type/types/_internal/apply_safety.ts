// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import type { $AsUnsafe } from '@kz/util/capability';

import type { IsTypeCapabilities } from './is_type/mod.ts';

/**
 * Applies the safety capability to the result if the unsafe capability is not
 * present.
 * 
 * @template Result - The result of the type check to apply the safety capability to.
 * @template Settings - The set of capabilities to apply the safety capability to.
 * @returns The modified result with the safety capability applied if the unsafe capability is not present.
 * @internal
 */
export type ApplySafety<
  Result extends boolean,
  Settings extends IsTypeCapabilities,
> = Settings extends $AsUnsafe ? [Result] extends [true] ? true
  : [Result] extends [false] ? false
  : true
  : Result;
