// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import { describe, it } from '@std/testing/bdd';
import { assertType, type IsExact } from '@std/testing/types';
import type { UseSetterKey, UseSetterKeyString } from '@kz/util/capability';

const IS_TRUE = true;

describe('UseSetter - constants', () => {
  describe('UseSetterKeyString', () => {
    it('should be "kz.i11n:use_setter"', () => {
      type Actual = typeof UseSetterKeyString;
      type Expected = 'kz.i11n:use_setter';
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
  });

  describe('UseSetterKey', () => {
    it('should be the type of UseSetterKeyString', () => {
      type Actual = UseSetterKey;
      type Expected = typeof UseSetterKeyString;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
  });
});
