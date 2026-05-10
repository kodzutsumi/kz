// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import { describe, it } from '@std/testing/bdd';
import { assertType, type IsExact } from '@std/testing/types';
import type {
  AsAsync,
  AsCondition,
  AsReversed,
  AsSafe,
  AsStrict,
  UseReversed,
  UseStrict,
  UseUnsafe,
} from '@kz/util/capability';

import type { PickCapSet } from './pick_cap_set.ts';

const IS_TRUE = true;

describe('PickCapSet', () => {
  it('should pick capabilities from settings', () => {
    type Settings =
      & AsStrict
      & AsSafe
      & AsReversed
      & AsAsync
      & AsCondition;
    type CapSet = UseStrict | UseUnsafe | UseReversed;
    type Actual = PickCapSet<Settings, CapSet>;
    type Expected =
      & AsStrict
      & AsSafe
      & AsReversed;
    type Result = IsExact<Actual, Expected>;

    assertType<Result>(IS_TRUE);
  });
});
