// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import type { AsInverted } from '@kz/util/capability';

import type { IsTypeCapSet } from './is_type/mod.ts';

/**
 */
export type ApplyInverted<
  Result extends boolean,
  Settings extends IsTypeCapSet,
> = Settings extends AsInverted
  ? Result extends true
    ? false
    : Result extends false
      ? true
      : Result
  : Result;
