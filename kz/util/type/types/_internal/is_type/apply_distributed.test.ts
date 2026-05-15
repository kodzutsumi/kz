// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import { describe, it } from '@std/testing/bdd';
import { assertType, type IsExact } from '@std/testing/types';
import type {
  AsDistributed,
  AsNullOption,
  AsUnified,
} from '@kz/util/capability';

import type { ApplyDistributed } from './apply_distributed.ts';

const IS_TRUE = true;

describe('ApplyDistributed', () => {
  it('should apply the distributed type when UseUnified is not present', () => {
    type Actual = ApplyDistributed<AsNullOption>;
    type Expected = AsNullOption & AsDistributed;

    assertType<IsExact<Actual, Expected>>(IS_TRUE);
  });

  it('should return the settings when UseUnified is present', () => {
    type Actual = ApplyDistributed<AsUnified>;
    type Expected = AsUnified;

    assertType<IsExact<Actual, Expected>>(IS_TRUE);
  });
});
