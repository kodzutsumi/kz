// Copyright 2020 - present integereleven. All rights reserved. MIT license.


import type { AsUnsafe } from '@kz/util/capability';

import type { IsTypeCapSet } from './types.ts';

export type ApplySafety<
  Result extends boolean,
  Settings extends IsTypeCapSet,
> = Settings extends AsUnsafe ? [Result] extends [true] ? true
  : [Result] extends [false] ? false
  : true
  : Result;
