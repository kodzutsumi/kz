// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import { describe, it } from '@std/testing/bdd';
import { assertType, type IsExact } from '@std/testing/types';
import type { $UseUnifiedKey, $UseUnifiedKeyString } from '@kz/util/capability';

const IS_TRUE = true;

describe('UseUnified - constants', () => {
  describe('$UseUnifiedKeyString', () => {
    it('should be "kz.i11n:use_unified"', () => {
      type Expected = 'kz.i11n:use_unified';
      type Actual = typeof $UseUnifiedKeyString;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
  });

  describe('$UseUnifiedKey', () => {
    it('should be the type of $UseUnifiedKeyString', () => {
      type Expected = typeof $UseUnifiedKeyString;
      type Actual = $UseUnifiedKey;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
  });
});
