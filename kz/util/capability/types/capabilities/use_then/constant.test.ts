// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import { describe, it } from '@std/testing/bdd';
import { assertType, type IsExact } from '@std/testing/types';
import type { $UseThenKey, $UseThenKeyString } from '@kz/util/capability';

const IS_TRUE = true;

describe('UseThen - constants', () => {
  describe('$UseThenKeyString', () => {
    it('should be "kz.i11n:use_then"', () => {
      type Expected = 'kz.i11n:use_then';
      type Actual = typeof $UseThenKeyString;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
  });

  describe('$UseThenKey', () => {
    it('should be the type of $UseThenKeyString', () => {
      type Expected = typeof $UseThenKeyString;
      type Actual = $UseThenKey;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
  });
});
