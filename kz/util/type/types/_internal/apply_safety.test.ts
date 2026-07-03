// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import { describe, it } from '@std/testing/bdd';
import { assertType, type IsExact } from '@std/testing/types';
import type { $AsStrict, $AsUnsafe } from '@kz/util/capability';

import type { ApplySafety } from './apply_safety.ts';

const IS_TRUE = true;

describe('ApplySafety', () => {
  describe('AsSafe (default)', () => {
    it('should retain boolean', () => {
      type Actual = ApplySafety<boolean, $AsStrict>;
      type Expected = boolean;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });

    it('should retain true', () => {
      type Actual = ApplySafety<true, $AsStrict>;
      type Expected = true;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });

    it('should retain false', () => {
      type Actual = ApplySafety<false, $AsStrict>;
      type Expected = false;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
  });

  describe('$AsUnsafe', () => {
    it('should convert boolean to true', () => {
      type Actual = ApplySafety<boolean, $AsStrict & $AsUnsafe>;
      type Expected = true;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });

    it('should retain true', () => {
      type Actual = ApplySafety<true, $AsStrict & $AsUnsafe>;
      type Expected = true;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });

    it('should retain false', () => {
      type Actual = ApplySafety<false, $AsStrict & $AsUnsafe>;
      type Expected = false;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
  });
});
