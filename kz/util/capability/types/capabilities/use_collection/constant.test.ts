// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import { describe, it } from '@std/testing/bdd';
import { assertType, type IsExact } from '@std/testing/types';
import type { UseCollectionKey, UseCollectionKeyString } from '@kz/util/capability';

const IS_TRUE = true;

describe('UseCollection - constants', () => {
  describe('UseCollectionKeyString', () => {
    it('should be "kz.i11n:use_collection"', () => {
      type Actual = typeof UseCollectionKeyString;
      type Expected = 'kz.i11n:use_collection';
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
  });

  describe('UseCollectionKey', () => {
    it('should be the type of UseCollectionKeyString', () => {
      type Actual = UseCollectionKey;
      type Expected = typeof UseCollectionKeyString;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
  });
});
