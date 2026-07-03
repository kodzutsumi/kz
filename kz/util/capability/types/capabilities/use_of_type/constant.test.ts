// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import { describe, it } from '@std/testing/bdd';
import { assertType, type IsExact } from '@std/testing/types';
import type { $UseOfTypeKey, $UseOfTypeKeyString } from '@kz/util/capability';

const IS_TRUE = true;

describe('UseOfType - constants', () => {
  describe('$UseOfTypeKeyString', () => {
    it('should be "kz.i11n:use_of_type"', () => {
      type Expected = 'kz.i11n:use_of_type';
      type Actual = typeof $UseOfTypeKeyString;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
  });

  describe('$UseOfTypeKey', () => {
    it('should be the type of $UseOfTypeKeyString', () => {
      type Expected = typeof $UseOfTypeKeyString;
      type Actual = $UseOfTypeKey;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
  });
});
