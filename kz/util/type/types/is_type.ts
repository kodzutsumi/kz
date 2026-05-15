// Copyright 2020 - present integereleven. All rights reserved. MIT license.


import type {
  IsType as InternalIsType,
  IsTypeCapSet,
  IsTypeDefaults,
} from './_internal/mod.ts';

export type IsType<
  Type,
  OfType,
  Settings extends IsTypeCapSet = IsTypeDefaults,
> = InternalIsType<Type, OfType, Settings>;
