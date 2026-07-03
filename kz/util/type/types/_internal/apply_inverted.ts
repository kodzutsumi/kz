// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import type { $AsInverted } from '@kz/util/capability';

import type { IsTypeCapabilities } from './is_type/mod.ts';

/**
 * TODO(@ebntly) Document
 */
export type ApplyInverted<
  Result extends boolean,
  Settings extends IsTypeCapabilities,
> = Settings extends $AsInverted
  ? Result extends true
    ? false
    : Result extends false
      ? true
      : Result
  : Result;
