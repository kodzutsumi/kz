// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import { describe, it } from '@std/testing/bdd';
import { assertType, type IsExact } from '@std/testing/types';
import type { UseRecordKey, UseRecordKeyString } from '@kz/util/capability';

const IS_TRUE = true;

describe('UseRecord - constants', () => {
  describe('UseRecordKeyString', () => {
    it('should be "kz.i11n:use_record"', () => {
      type Actual = typeof UseRecordKeyString;
      type Expected = 'kz.i11n:use_record';
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
  });

  describe('UseRecordKey', () => {
    it('should be the type of UseRecordKeyString', () => {
      type Actual = UseRecordKey;
      type Expected = typeof UseRecordKeyString;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
  });
});
