// Copyright 2020 - present integereleven. All rights reserved. MIT license.


import { describe, it } from '@std/testing/bdd';
import { assertType, type IsExact } from '@std/testing/types';
import type { UseStreamKey, UseStreamKeyString } from '@kz/util/capability';

const IS_TRUE = true;

describe('UseStream - constants', () => {
  describe('UseStreamKeyString', () => {
    it('should be "kz.i11n:use_stream"', () => {
      type Actual = typeof UseStreamKeyString;
      type Expected = 'kz.i11n:use_stream';
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
  });

  describe('UseStream', () => {
    it('should be the type of UseStreamKeyString', () => {
      type Actual = UseStreamKey;
      type Expected = typeof UseStreamKeyString;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
  });
});
