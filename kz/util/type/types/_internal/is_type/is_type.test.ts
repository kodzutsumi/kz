// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import { describe, it } from '@std/testing/bdd';
import { assertType, type IsExact } from '@std/testing/types';
import type { AsInverted, AsUnsafe } from '@kz/util/capability';

import type { IsType } from './is_type.ts';

// deno-lint-ignore no-explicit-any
type AnyType = any;

const IS_TRUE = true;

describe('CheckType', () => {
  describe('AsInitial (default)', () => {
    describe('AsSafe (default)', () => {
      it('should retain boolean result', () => {
        type EffectiveResult = AnyType extends string ? true : false;
        type Actual = IsType<AnyType, string>;
        type Expected = boolean;
        type Result = IsExact<Actual, Expected>;
        type ValidatedResult = IsExact<EffectiveResult, Expected>;

        assertType<ValidatedResult>(IS_TRUE);
        assertType<Result>(IS_TRUE);
      });
    });

    describe('AsUnsafe', () => {
      it('should convert to boolean result', () => {
        type EffectiveResult = boolean extends
          (AnyType extends string ? true : false) ? true : false;
        type Actual = IsType<AnyType, string, AsUnsafe>;
        type Expected = true;
        type Result = IsExact<Actual, Expected>;
        type ValidatedResult = IsExact<EffectiveResult, Expected>;

        assertType<ValidatedResult>(IS_TRUE);
        assertType<Result>(IS_TRUE);
      });
    });
  });
  
  describe('AsInverted', () => {
    describe('AsSafe (default)', () => {
      it('should retain boolean result', () => {
        type EffectiveResult = AnyType extends string ? true : false;
        type Actual = IsType<AnyType, string, AsInverted>;
        type Expected = boolean;
        type Result = IsExact<Actual, Expected>;
        type ValidatedResult = IsExact<EffectiveResult, Expected>;

        assertType<ValidatedResult>(IS_TRUE);
        assertType<Result>(IS_TRUE);
      });
    });

    describe('AsUnsafe', () => {
      it('should convert to boolean result and invert it', () => {
        type EffectiveResult = boolean extends
          (AnyType extends string ? true : false) ? false : true;
        type Actual = IsType<AnyType, string, AsUnsafe & AsInverted>;
        type Expected = false;
        type Result = IsExact<Actual, Expected>;
        type ValidatedResult = IsExact<EffectiveResult, Expected>;

        assertType<ValidatedResult>(IS_TRUE);
        assertType<Result>(IS_TRUE);
      });
    });
  });
});
