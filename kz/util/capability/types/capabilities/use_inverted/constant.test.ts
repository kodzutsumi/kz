// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import { describe, it } from '@std/testing/bdd';
import { assertType, type IsExact } from '@std/testing/types';
import type { $UseInvertedKey, $UseInvertedKeyString } from '@kz/util/capability';

const IS_TRUE = true;

describe('UseInverted - constants', () => {
  describe('$UseInvertedKeyString', () => {
    it('should be "kz.i11n:use_inverted"', () => {
      type Expected = 'kz.i11n:use_inverted';
      type Actual = typeof $UseInvertedKeyString;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
  });

  describe('$UseInvertedKey', () => {
    it('should be the type of $UseInvertedKeyString', () => {
      type Expected = typeof $UseInvertedKeyString;
      type Actual = $UseInvertedKey;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
  });
});
