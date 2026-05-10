// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import { describe, it } from '@std/testing/bdd';
import { assertType, type IsExact } from '@std/testing/types';
import type { UseExcludedKey, UseExcludedKeyString } from '@kz/util/capability';

const IS_TRUE = true;

describe('UseExcluded - constants', () => {
  describe('UseExcludedKeyString', () => {
    it('should be "kz.i11n:use_excluded"', () => {
      type Actual = typeof UseExcludedKeyString;
      type Expected = 'kz.i11n:use_excluded';
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
  });

  describe('UseExcludedKey', () => {
    it('should be the type of UseExcludedKeyString', () => {
      type Actual = UseExcludedKey;
      type Expected = typeof UseExcludedKeyString;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
  });
});
