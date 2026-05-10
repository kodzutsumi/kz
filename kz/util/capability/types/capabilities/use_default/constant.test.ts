// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import { describe, it } from '@std/testing/bdd';
import { assertType, type IsExact } from '@std/testing/types';
import type { UseDefaultKey, UseDefaultKeyString } from '@kz/util/capability';

const IS_TRUE = true;

describe('UseDefault - constants', () => {
  describe('UseDefaultKeyString', () => {
    it('should be "kz.i11n:use_default"', () => {
      type Actual = typeof UseDefaultKeyString;
      type Expected = 'kz.i11n:use_default';
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
  });

  describe('UseDefaultKey', () => {
    it('should be the type of UseDefaultKeyString', () => {
      type Actual = UseDefaultKey;
      type Expected = typeof UseDefaultKeyString;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
  });
});
