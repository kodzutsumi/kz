// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import { describe, it } from '@std/testing/bdd';
import { assertType, type IsExact } from '@std/testing/types';
import type { $UseReversedKey, $UseReversedKeyString } from '@kz/util/capability';

const IS_TRUE = true;

describe('UseReversed - constants', () => {
  describe('$UseReversedKeyString', () => {
    it('should be "kz.i11n:use_reversed"', () => {
      type Expected = 'kz.i11n:use_reversed';
      type Actual = typeof $UseReversedKeyString;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
  });

  describe('$UseReversedKey', () => {
    it('should be the type of $UseReversedKeyString', () => {
      type Expected = typeof $UseReversedKeyString;
      type Actual = $UseReversedKey;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
  });
});
