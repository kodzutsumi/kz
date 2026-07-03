// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import { describe, it } from '@std/testing/bdd';
import { assertType, type IsExact } from '@std/testing/types';
import type { $UseUnsafeKey, $UseUnsafeKeyString } from '@kz/util/capability';

const IS_TRUE = true;

describe('UseAsync - constants', () => {
  describe('$UseUnsafeKeyString', () => {
    it('should be "kz.i11n:use_unsafe"', () => {
      type Expected = 'kz.i11n:use_unsafe';
      type Actual = typeof $UseUnsafeKeyString;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
  });

  describe('$UseUnsafeKey', () => {
    it('should be the type of $UseUnsafeKeyString', () => {
      type Expected = typeof $UseUnsafeKeyString;
      type Actual = $UseUnsafeKey;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
  });
});
