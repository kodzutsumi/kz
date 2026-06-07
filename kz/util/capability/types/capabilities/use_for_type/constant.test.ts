// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import { describe, it } from '@std/testing/bdd';
import { assertType, type IsExact } from '@std/testing/types';
import type { UseForTypeKey, UseForTypeKeyString } from '@kz/util/capability';

const IS_TRUE = true;

describe('UseForType - constants', () => {
  describe('UseForTypeKeyString', () => {
    it('should be "kz.i11n:use_of_type"', () => {
      type Actual = typeof UseForTypeKeyString;
      type Expected = 'kz.i11n:use_for_type';
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
  });

  describe('UseForTypeKey', () => {
    it('should be the type of UseForTypeKeyString', () => {
      type Actual = UseForTypeKey;
      type Expected = typeof UseForTypeKeyString;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
  });
});
