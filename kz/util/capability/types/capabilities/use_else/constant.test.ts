// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import { describe, it } from '@std/testing/bdd';
import { assertType, type IsExact } from '@std/testing/types';
import type { $UseElseKey, $UseElseKeyString } from '@kz/util/capability';

const IS_TRUE = true;

describe('UseElse - constants', () => {
  describe('$UseElseKeyString', () => {
    it('should be "kz.i11n:use_else"', () => {
      type Expected = 'kz.i11n:use_else';
      type Actual = typeof $UseElseKeyString;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
  });

  describe('$UseElseKey', () => {
    it('should be the type of $UseElseKeyString', () => {
      type Expected = typeof $UseElseKeyString;
      type Actual = $UseElseKey;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
  });
});
