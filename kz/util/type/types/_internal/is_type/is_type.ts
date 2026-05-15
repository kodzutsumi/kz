// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import type { ApplySafety } from './apply_safety.ts';
import type { CheckType } from './check_type.ts';
import type { IsTypeCapSet, IsTypeDefaults } from './types.ts';

export type IsType<
  Type,
  OfType,
  Settings extends IsTypeCapSet = IsTypeDefaults,
> = ApplySafety<CheckType<Type, OfType, Settings>, Settings>;
