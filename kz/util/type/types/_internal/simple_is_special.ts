// Copyright 2020 - present integereleven. All rights reserved. MIT license.


import type { SimpleIsVoid } from './simple_is_void.ts';
import type { IsAny, IsNever, IsUnknown } from '@std/testing/types';

export type IsSpecial<Type> = IsAny<Type> extends true ? true
  : IsNever<Type> extends true ? true
  : IsUnknown<Type> extends true ? true
  : SimpleIsVoid<Type> extends true ? true
  : false;
