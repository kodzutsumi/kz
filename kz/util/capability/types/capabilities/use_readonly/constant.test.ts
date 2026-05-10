// Copyright 2020 - present integereleven. All rights reserved. MIT license.


import { describe, it } from '@std/testing/bdd';
import { assertType, type IsExact } from '@std/testing/types';
import type { UseReadonlyKey, UseReadonlyKeyString } from '@kz/util/capability';

const IS_TRUE = true;

describe('UseReadonly - constants', () => {
  describe('UseReadonlyKeyString', () => {
    it('should be "kz.i11n:use_readonly"', () => {
      type Actual = typeof UseReadonlyKeyString;
      type Expected = 'kz.i11n:use_readonly';
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
  });

  describe('UseReadonlyKey', () => {
    it('should be the type of UseReadonlyKeyString', () => {
      type Actual = UseReadonlyKey;
      type Expected = typeof UseReadonlyKeyString;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
  });
});
