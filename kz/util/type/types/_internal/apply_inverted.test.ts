// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import { describe, it } from '@std/testing/bdd';
import { assertType, type IsExact } from '@std/testing/types';
import type { $AsStrict, $AsInverted } from '@kz/util/capability';

import type { ApplyInverted } from './apply_inverted.ts';

const IS_TRUE = true;

describe('ApplyInverted', () => {
  describe('AsSafe (default)', () => {
    it('should retain boolean', () => {
      type Actual = ApplyInverted<boolean, $AsStrict>;
      type Expected = boolean;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });

    it('should retain true', () => {
      type Actual = ApplyInverted<true, $AsStrict>;
      type Expected = true;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });

    it('should retain false', () => {
      type Actual = ApplyInverted<false, $AsStrict>;
      type Expected = false;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
  });

  describe('$AsInverted', () => {
    it('should retain boolean', () => {
      type Actual = ApplyInverted<boolean, $AsStrict & $AsInverted>;
      type Expected = boolean;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });

    it('should change true to false', () => {
      type Actual = ApplyInverted<true, $AsStrict & $AsInverted>;
      type Expected = false;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });

    it('should change false to true', () => {
      type Actual = ApplyInverted<false, $AsStrict & $AsInverted>;
      type Expected = true;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
  });
});
