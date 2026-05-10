// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import { describe, it } from '@std/testing/bdd';
import { assertType, type IsExact } from '@std/testing/types';
import type {
  UseDistributedKey,
  UseDistributedKeyString,
} from '@kz/util/capability';

const IS_TRUE = true;

describe('UseDistributed - constants', () => {
  describe('UseDistributedKeyString', () => {
    it('should be "kz.i11n:use_distributed"', () => {
      type Actual = typeof UseDistributedKeyString;
      type Expected = 'kz.i11n:use_distributed';
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
  });

  describe('UseDistributedKey', () => {
    it('should be the type of UseDistributedKeyString', () => {
      type Actual = UseDistributedKey;
      type Expected = typeof UseDistributedKeyString;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
  });
});
