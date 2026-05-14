// Copyright 2020 - present integereleven. All rights reserved. MIT license.


import type {
  IsType as InternalIsType,
  IsTypeCapSet,
  IsTypeDefaults,
} from './_internal/mod.ts';

export type IsType<
  TargetType,
  OfType,
  Settings extends IsTypeCapSet = IsTypeDefaults,
> = InternalIsType<TargetType, OfType, Settings>;
