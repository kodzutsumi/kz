// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import { describe, it } from '@std/testing/bdd';
import { assertType, type IsExact } from '@std/testing/types';
import type { UseDepthKey, UseDepthKeyString } from '@kz/util/capability';

const IS_TRUE = true;

describe('UseDepth - constants', () => {
  describe('UseDepthKeyString', () => {
    it('should be "kz.i11n:use_depth"', () => {
      type Actual = typeof UseDepthKeyString;
      type Expected = 'kz.i11n:use_depth';
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
  });

  describe('UseDepthKey', () => {
    it('should be the type of UseDepthKeyString', () => {
      type Actual = UseDepthKey;
      type Expected = typeof UseDepthKeyString;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
  });
});
