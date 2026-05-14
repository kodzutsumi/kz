// Copyright 2020 - present integereleven. All rights reserved. MIT license.


import { describe, it } from '@std/testing/bdd';
import { assertType, type IsExact } from '@std/testing/types';
import type { AsReversed, AsUnified } from '@kz/util/capability';

import type { CheckSpecial } from './check_special.ts';

// deno-lint-ignore no-explicit-any
type AnyType = any;

const IS_TRUE = true;

describe('CheckSpecial', () => {
  describe('unknown', () => {
    type TargetType = unknown;

    describe('AsForward (default)', () => {
      describe('AsDistributed (default)', () => {
        it('should return true for any type', () => {
          type EffectiveResult = AnyType extends TargetType ? true : false;
          type Actual = CheckSpecial<AnyType, TargetType>;
          type Expected = true;
          type Result = IsExact<Actual, Expected>;
          type ValidatedResult = IsExact<EffectiveResult, Expected>;

          assertType<ValidatedResult>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });

        it('should return true for never type', () => {
          type EffectiveResult = never extends TargetType ? true : false;
          type Actual = CheckSpecial<never, TargetType>;
          type Expected = true;
          type Result = IsExact<Actual, Expected>;
          type ValidatedResult = IsExact<EffectiveResult, Expected>;

          assertType<ValidatedResult>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });

        it('should return true for void type', () => {
          type EffectiveResult = void extends TargetType ? true : false;
          type Actual = CheckSpecial<void, TargetType>;
          type Expected = true;
          type Result = IsExact<Actual, Expected>;
          type ValidatedResult = IsExact<EffectiveResult, Expected>;

          assertType<ValidatedResult>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });

        it('should return true for unknown type', () => {
          type EffectiveResult = unknown extends TargetType ? true : false;
          type Actual = CheckSpecial<unknown, TargetType>;
          type Expected = true;
          type Result = IsExact<Actual, Expected>;
          type ValidatedResult = IsExact<EffectiveResult, Expected>;

          assertType<ValidatedResult>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });

        it('should return true for string type', () => {
          type EffectiveResult = string extends TargetType ? true : false;
          type Actual = CheckSpecial<string, TargetType>;
          type Expected = true;
          type Result = IsExact<Actual, Expected>;
          type ValidatedResult = IsExact<EffectiveResult, Expected>;

          assertType<ValidatedResult>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });
      });

      describe('AsUnified', () => {
        it('should return true for any type', () => {
          type EffectiveResult = [TargetType, TargetType] extends
            [TargetType, TargetType] ? true : false;
          type Actual = CheckSpecial<
            TargetType,
            TargetType,
            AsUnified
          >;
          type Expected = true;
          type Result = IsExact<Actual, Expected>;
          type ValidatedResult = IsExact<EffectiveResult, Expected>;

          assertType<ValidatedResult>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });

        it('should return false for never type', () => {
          type EffectiveResult = [TargetType, never] extends [never, TargetType]
            ? true
            : false;
          type Actual = CheckSpecial<never, TargetType, AsUnified>;
          type Expected = false;
          type Result = IsExact<Actual, Expected>;
          type ValidatedResult = IsExact<EffectiveResult, Expected>;

          assertType<ValidatedResult>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });

        it('should return false for void type', () => {
          type EffectiveResult = [TargetType, void] extends [void, TargetType]
            ? true
            : false;
          type Actual = CheckSpecial<void, TargetType, AsUnified>;
          type Expected = false;
          type Result = IsExact<Actual, Expected>;
          type ValidatedResult = IsExact<EffectiveResult, Expected>;

          assertType<ValidatedResult>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });

        it('should return true for unknown type', () => {
          type EffectiveResult = [TargetType, unknown] extends
            [unknown, TargetType] ? true : false;
          type Actual = CheckSpecial<unknown, TargetType, AsUnified>;
          type Expected = true;
          type Result = IsExact<Actual, Expected>;
          type ValidatedResult = IsExact<EffectiveResult, Expected>;

          assertType<ValidatedResult>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });

        it('should return true for string type', () => {
          type EffectiveResult = [string] extends [TargetType] ? true : false;
          type Actual = CheckSpecial<string, TargetType, AsUnified>;
          type Expected = true;
          type Result = IsExact<Actual, Expected>;
          type ValidatedResult = IsExact<EffectiveResult, Expected>;

          assertType<ValidatedResult>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });
      });
    });

    describe('AsReversed', () => {
      describe('AsDistributed (default)', () => {
        it('should return true for any type', () => {
          type EffectiveResult = TargetType extends TargetType ? true : false;
          type Actual = CheckSpecial<TargetType, TargetType, AsReversed>;
          type Expected = true;
          type Result = IsExact<Actual, Expected>;
          type ValidatedResult = IsExact<EffectiveResult, Expected>;

          assertType<ValidatedResult>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });

        it('should return false for never type', () => {
          type EffectiveResult = TargetType extends never ? true : false;
          type Actual = CheckSpecial<never, TargetType, AsReversed>;
          type Expected = false;
          type Result = IsExact<Actual, Expected>;
          type ValidatedResult = IsExact<EffectiveResult, Expected>;

          assertType<ValidatedResult>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });

        it('should return false for void type', () => {
          type EffectiveResult = TargetType extends void ? true : false;
          type Actual = CheckSpecial<void, TargetType, AsReversed>;
          type Expected = false;
          type Result = IsExact<Actual, Expected>;
          type ValidatedResult = IsExact<EffectiveResult, Expected>;

          assertType<ValidatedResult>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });

        it('should return true for unknown type', () => {
          type EffectiveResult = TargetType extends unknown ? true : false;
          type Actual = CheckSpecial<unknown, TargetType, AsReversed>;
          type Expected = true;
          type Result = IsExact<Actual, Expected>;
          type ValidatedResult = IsExact<EffectiveResult, Expected>;

          assertType<ValidatedResult>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });

        it('should return false for string type', () => {
          type EffectiveResult = TargetType extends string ? true : false;
          type Actual = CheckSpecial<string, TargetType, AsReversed>;
          type Expected = false;
          type Result = IsExact<Actual, Expected>;
          type ValidatedResult = IsExact<EffectiveResult, Expected>;

          assertType<ValidatedResult>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });
      });

      describe('AsUnified', () => {
        it('should return true for any type', () => {
          type EffectiveResult = [TargetType, TargetType] extends
            [TargetType, TargetType] ? true : false;
          type Actual = CheckSpecial<
            TargetType,
            TargetType,
            AsUnified & AsReversed
          >;
          type Expected = true;
          type Result = IsExact<Actual, Expected>;
          type ValidatedResult = IsExact<EffectiveResult, Expected>;

          assertType<ValidatedResult>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });

        it('should return false for never type', () => {
          type EffectiveResult = [TargetType, never] extends [never, TargetType]
            ? true
            : false;
          type Actual = CheckSpecial<
            TargetType,
            never,
            AsUnified & AsReversed
          >;
          type Expected = false;
          type Result = IsExact<Actual, Expected>;
          type ValidatedResult = IsExact<EffectiveResult, Expected>;

          assertType<ValidatedResult>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });

        it('should return false for void type', () => {
          type EffectiveResult = [TargetType, void] extends [void, TargetType]
            ? true
            : false;
          type Actual = CheckSpecial<
            TargetType,
            void,
            AsUnified & AsReversed
          >;
          type Expected = false;
          type Result = IsExact<Actual, Expected>;
          type ValidatedResult = IsExact<EffectiveResult, Expected>;

          assertType<ValidatedResult>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });

        it('should return true for unknown type', () => {
          type EffectiveResult = [TargetType, unknown] extends
            [unknown, TargetType] ? true : false;
          type Actual = CheckSpecial<
            TargetType,
            unknown,
            AsUnified & AsReversed
          >;
          type Expected = true;
          type Result = IsExact<Actual, Expected>;
          type ValidatedResult = IsExact<EffectiveResult, Expected>;

          assertType<ValidatedResult>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });

        it('should return false for string type', () => {
          type EffectiveResult = [TargetType] extends [string] ? true : false;
          type Actual = CheckSpecial<
            TargetType,
            string,
            AsUnified & AsReversed
          >;
          type Expected = false;
          type Result = IsExact<Actual, Expected>;
          type ValidatedResult = IsExact<EffectiveResult, Expected>;

          assertType<ValidatedResult>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });
      });
    });
  });

  describe('never', () => {
    type TargetType = never;

    describe('AsForward (default)', () => {
      describe('AsDistributed (default)', () => {
        it('should return false for any type', () => {
          type EffectiveResult = [AnyType, TargetType] extends
            [TargetType, AnyType] ? true : false;
          type Actual = CheckSpecial<AnyType, TargetType>;
          type Expected = false;
          type Result = IsExact<Actual, Expected>;
          type ValidatedResult = IsExact<EffectiveResult, Expected>;

          assertType<ValidatedResult>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });

        it('should return true for never type', () => {
          type EffectiveResult = [never, TargetType] extends [TargetType, never]
            ? true
            : false;
          type Actual = CheckSpecial<never, TargetType>;
          type Expected = true;
          type Result = IsExact<Actual, Expected>;
          type ValidatedResult = IsExact<EffectiveResult, Expected>;

          assertType<ValidatedResult>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });

        it('should return false for void type', () => {
          type EffectiveResult = [void, TargetType] extends [TargetType, void]
            ? true
            : false;
          type Actual = CheckSpecial<void, TargetType>;
          type Expected = false;
          type Result = IsExact<Actual, Expected>;
          type ValidatedResult = IsExact<EffectiveResult, Expected>;

          assertType<ValidatedResult>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });

        it('should return false for unknown type', () => {
          type EffectiveResult = [unknown, TargetType] extends
            [TargetType, unknown] ? true : false;
          type Actual = CheckSpecial<unknown, TargetType>;
          type Expected = false;
          type Result = IsExact<Actual, Expected>;
          type ValidatedResult = IsExact<EffectiveResult, Expected>;

          assertType<ValidatedResult>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });

        it('should return false for string type', () => {
          type EffectiveResult = string extends TargetType ? true : false;
          type Actual = CheckSpecial<string, TargetType>;
          type Expected = false;
          type Result = IsExact<Actual, Expected>;
          type ValidatedResult = IsExact<EffectiveResult, Expected>;

          assertType<ValidatedResult>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });
      });

      describe('AsUnified', () => {
        it('should return true for any type', () => {
          type EffectiveResult = [TargetType, TargetType] extends
            [TargetType, TargetType] ? true : false;
          type Actual = CheckSpecial<
            TargetType,
            TargetType,
            AsUnified
          >;
          type Expected = true;
          type Result = IsExact<Actual, Expected>;
          type ValidatedResult = IsExact<EffectiveResult, Expected>;

          assertType<ValidatedResult>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });

        it('should return true for never type', () => {
          type EffectiveResult = [never, TargetType] extends [TargetType, never]
            ? true
            : false;
          type Actual = CheckSpecial<never, TargetType, AsUnified>;
          type Expected = true;
          type Result = IsExact<Actual, Expected>;
          type ValidatedResult = IsExact<EffectiveResult, Expected>;

          assertType<ValidatedResult>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });

        it('should return false for void type', () => {
          type EffectiveResult = [void, TargetType] extends [TargetType, void]
            ? true
            : false;
          type Actual = CheckSpecial<void, TargetType, AsUnified>;
          type Expected = false;
          type Result = IsExact<Actual, Expected>;
          type ValidatedResult = IsExact<EffectiveResult, Expected>;

          assertType<ValidatedResult>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });

        it('should return false for unknown type', () => {
          type EffectiveResult = [unknown, TargetType] extends
            [TargetType, unknown] ? true : false;
          type Actual = CheckSpecial<unknown, TargetType, AsUnified>;
          type Expected = false;
          type Result = IsExact<Actual, Expected>;
          type ValidatedResult = IsExact<EffectiveResult, Expected>;

          assertType<ValidatedResult>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });

        it('should return false for string type', () => {
          type EffectiveResult = [string] extends [TargetType] ? true : false;
          type Actual = CheckSpecial<string, TargetType, AsUnified>;
          type Expected = false;
          type Result = IsExact<Actual, Expected>;
          type ValidatedResult = IsExact<EffectiveResult, Expected>;

          assertType<ValidatedResult>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });
      });
    });

    describe('AsReversed', () => {
      describe('AsDistributed (default)', () => {
        it('should return true for any type', () => {
          type EffectiveResult = [TargetType, TargetType] extends
            [TargetType, TargetType] ? true : false;
          type Actual = CheckSpecial<TargetType, TargetType, AsReversed>;
          type Expected = true;
          type Result = IsExact<Actual, Expected>;
          type ValidatedResult = IsExact<EffectiveResult, Expected>;

          assertType<ValidatedResult>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });

        it('should return true for never type', () => {
          type EffectiveResult = [never, TargetType] extends [TargetType, never]
            ? true
            : false;
          type Actual = CheckSpecial<never, TargetType, AsReversed>;
          type Expected = true;
          type Result = IsExact<Actual, Expected>;
          type ValidatedResult = IsExact<EffectiveResult, Expected>;

          assertType<ValidatedResult>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });

        it('should return false for void type', () => {
          type EffectiveResult = [void, TargetType] extends [TargetType, void]
            ? true
            : false;
          type Actual = CheckSpecial<void, TargetType, AsReversed>;
          type Expected = false;
          type Result = IsExact<Actual, Expected>;
          type ValidatedResult = IsExact<EffectiveResult, Expected>;

          assertType<ValidatedResult>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });

        it('should return false for unknown type', () => {
          type EffectiveResult = [unknown, TargetType] extends
            [TargetType, unknown] ? true : false;
          type Actual = CheckSpecial<unknown, TargetType, AsReversed>;
          type Expected = false;
          type Result = IsExact<Actual, Expected>;
          type ValidatedResult = IsExact<EffectiveResult, Expected>;

          assertType<ValidatedResult>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });

        it('should return true for string type', () => {
          type EffectiveResult = TargetType extends string ? true : false;
          type Actual = CheckSpecial<string, TargetType, AsReversed>;
          type Expected = true;
          type Result = IsExact<Actual, Expected>;
          type ValidatedResult = IsExact<EffectiveResult, Expected>;

          assertType<ValidatedResult>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });
      });

      describe('AsUnified', () => {
        it('should return true for any type', () => {
          type EffectiveResult = [TargetType, TargetType] extends
            [TargetType, TargetType] ? true : false;
          type Actual = CheckSpecial<
            TargetType,
            TargetType,
            AsUnified & AsReversed
          >;
          type Expected = true;
          type Result = IsExact<Actual, Expected>;
          type ValidatedResult = IsExact<EffectiveResult, Expected>;

          assertType<ValidatedResult>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });

        it('should return true for never type', () => {
          type EffectiveResult = [never, TargetType] extends [TargetType, never]
            ? true
            : false;
          type Actual = CheckSpecial<
            TargetType,
            never,
            AsUnified & AsReversed
          >;
          type Expected = true;
          type Result = IsExact<Actual, Expected>;
          type ValidatedResult = IsExact<EffectiveResult, Expected>;

          assertType<ValidatedResult>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });

        it('should return false for void type', () => {
          type EffectiveResult = [void, TargetType] extends [TargetType, void]
            ? true
            : false;
          type Actual = CheckSpecial<
            TargetType,
            void,
            AsUnified & AsReversed
          >;
          type Expected = false;
          type Result = IsExact<Actual, Expected>;
          type ValidatedResult = IsExact<EffectiveResult, Expected>;

          assertType<ValidatedResult>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });

        it('should return false for unknown type', () => {
          type EffectiveResult = [unknown, TargetType] extends
            [TargetType, unknown] ? true : false;
          type Actual = CheckSpecial<
            TargetType,
            unknown,
            AsUnified & AsReversed
          >;
          type Expected = false;
          type Result = IsExact<Actual, Expected>;
          type ValidatedResult = IsExact<EffectiveResult, Expected>;

          assertType<ValidatedResult>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });

        it('should return true for string type', () => {
          type EffectiveResult = [TargetType] extends [string] ? true : false;
          type Actual = CheckSpecial<
            string,
            TargetType,
            AsUnified & AsReversed
          >;
          type Expected = true;
          type Result = IsExact<Actual, Expected>;
          type ValidatedResult = IsExact<EffectiveResult, Expected>;

          assertType<ValidatedResult>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });
      });
    });
  });

  describe('void', () => {
    type TargetType = void;

    describe('AsForward (default)', () => {
      describe('AsDistributed (default)', () => {
        it('should return true for any type', () => {
          type EffectiveResult = [AnyType] extends [TargetType] ? true : false;
          type Actual = CheckSpecial<AnyType, TargetType>;
          type Expected = true;
          type Result = IsExact<Actual, Expected>;
          type ValidatedResult = IsExact<EffectiveResult, Expected>;

          assertType<ValidatedResult>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });

        it('should return true for never type', () => {
          type EffectiveResult = never extends TargetType ? true : false;
          type Actual = CheckSpecial<never, TargetType>;
          type Expected = true;
          type Result = IsExact<Actual, Expected>;
          type ValidatedResult = IsExact<EffectiveResult, Expected>;

          assertType<ValidatedResult>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });

        it('should return true for void type', () => {
          type EffectiveResult = void extends TargetType ? true : false;
          type Actual = CheckSpecial<void, TargetType>;
          type Expected = true;
          type Result = IsExact<Actual, Expected>;
          type ValidatedResult = IsExact<EffectiveResult, Expected>;

          assertType<ValidatedResult>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });

        it('should return false for unknown type', () => {
          type EffectiveResult = unknown extends TargetType ? true : false;
          type Actual = CheckSpecial<unknown, TargetType>;
          type Expected = false;
          type Result = IsExact<Actual, Expected>;
          type ValidatedResult = IsExact<EffectiveResult, Expected>;

          assertType<ValidatedResult>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });

        it('should return false for string type', () => {
          type EffectiveResult = string extends TargetType ? true : false;
          type Actual = CheckSpecial<string, TargetType>;
          type Expected = false;
          type Result = IsExact<Actual, Expected>;
          type ValidatedResult = IsExact<EffectiveResult, Expected>;

          assertType<ValidatedResult>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });
      });

      describe('AsUnified', () => {
        it('should return true for any type', () => {
          type EffectiveResult = [TargetType, TargetType] extends
            [TargetType, TargetType] ? true : false;
          type Actual = CheckSpecial<
            TargetType,
            TargetType,
            AsUnified
          >;
          type Expected = true;
          type Result = IsExact<Actual, Expected>;
          type ValidatedResult = IsExact<EffectiveResult, Expected>;

          assertType<ValidatedResult>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });

        it('should return false for never type', () => {
          type EffectiveResult = [never, TargetType] extends [TargetType, never]
            ? true
            : false;
          type Actual = CheckSpecial<never, TargetType, AsUnified>;
          type Expected = false;
          type Result = IsExact<Actual, Expected>;
          type ValidatedResult = IsExact<EffectiveResult, Expected>;

          assertType<ValidatedResult>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });

        it('should return true for void type', () => {
          type EffectiveResult = [void, TargetType] extends [TargetType, void]
            ? true
            : false;
          type Actual = CheckSpecial<void, TargetType, AsUnified>;
          type Expected = true;
          type Result = IsExact<Actual, Expected>;
          type ValidatedResult = IsExact<EffectiveResult, Expected>;

          assertType<ValidatedResult>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });

        it('should return false for unknown type', () => {
          type EffectiveResult = [unknown, TargetType] extends
            [TargetType, unknown] ? true : false;
          type Actual = CheckSpecial<unknown, TargetType, AsUnified>;
          type Expected = false;
          type Result = IsExact<Actual, Expected>;
          type ValidatedResult = IsExact<EffectiveResult, Expected>;

          assertType<ValidatedResult>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });

        it('should return false for string type', () => {
          type EffectiveResult = [string, TargetType] extends
            [TargetType, string] ? true : false;
          type Actual = CheckSpecial<string, TargetType, AsUnified>;
          type Expected = false;
          type Result = IsExact<Actual, Expected>;
          type ValidatedResult = IsExact<EffectiveResult, Expected>;

          assertType<ValidatedResult>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });
      });
    });

    describe('AsReversed', () => {
      describe('AsDistributed (default)', () => {
        it('should return true for any type', () => {
          type EffectiveResult = [TargetType, TargetType] extends
            [TargetType, TargetType] ? true : false;
          type Actual = CheckSpecial<TargetType, TargetType, AsReversed>;
          type Expected = true;
          type Result = IsExact<Actual, Expected>;
          type ValidatedResult = IsExact<EffectiveResult, Expected>;

          assertType<ValidatedResult>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });

        it('should return false for never type', () => {
          type EffectiveResult = [never, TargetType] extends [TargetType, never]
            ? true
            : false;
          type Actual = CheckSpecial<never, TargetType, AsReversed>;
          type Expected = false;
          type Result = IsExact<Actual, Expected>;
          type ValidatedResult = IsExact<EffectiveResult, Expected>;

          assertType<ValidatedResult>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });

        it('should return true for void type', () => {
          type EffectiveResult = [void, TargetType] extends [TargetType, void]
            ? true
            : false;
          type Actual = CheckSpecial<void, TargetType, AsReversed>;
          type Expected = true;
          type Result = IsExact<Actual, Expected>;
          type ValidatedResult = IsExact<EffectiveResult, Expected>;

          assertType<ValidatedResult>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });

        it('should return false for unknown type', () => {
          type EffectiveResult = [unknown, TargetType] extends
            [TargetType, unknown] ? true : false;
          type Actual = CheckSpecial<unknown, TargetType, AsReversed>;
          type Expected = false;
          type Result = IsExact<Actual, Expected>;
          type ValidatedResult = IsExact<EffectiveResult, Expected>;

          assertType<ValidatedResult>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });

        it('should return false for string type', () => {
          type EffectiveResult = [string, TargetType] extends
            [TargetType, string] ? true : false;
          type Actual = CheckSpecial<string, TargetType, AsReversed>;
          type Expected = false;
          type Result = IsExact<Actual, Expected>;
          type ValidatedResult = IsExact<EffectiveResult, Expected>;

          assertType<ValidatedResult>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });
      });

      describe('AsUnified', () => {
        it('should return true for any type', () => {
          type EffectiveResult = [TargetType, TargetType] extends
            [TargetType, TargetType] ? true : false;
          type Actual = CheckSpecial<
            TargetType,
            TargetType,
            AsUnified & AsReversed
          >;
          type Expected = true;
          type Result = IsExact<Actual, Expected>;
          type ValidatedResult = IsExact<EffectiveResult, Expected>;

          assertType<ValidatedResult>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });

        it('should return false for never type', () => {
          type EffectiveResult = [never, TargetType] extends [TargetType, never]
            ? true
            : false;
          type Actual = CheckSpecial<
            TargetType,
            never,
            AsUnified & AsReversed
          >;
          type Expected = false;
          type Result = IsExact<Actual, Expected>;
          type ValidatedResult = IsExact<EffectiveResult, Expected>;

          assertType<ValidatedResult>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });

        it('should return true for void type', () => {
          type EffectiveResult = [void, TargetType] extends [TargetType, void]
            ? true
            : false;
          type Actual = CheckSpecial<
            TargetType,
            void,
            AsUnified & AsReversed
          >;
          type Expected = true;
          type Result = IsExact<Actual, Expected>;
          type ValidatedResult = IsExact<EffectiveResult, Expected>;

          assertType<ValidatedResult>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });

        it('should return false for unknown type', () => {
          type EffectiveResult = [unknown, TargetType] extends
            [TargetType, unknown] ? true : false;
          type Actual = CheckSpecial<
            TargetType,
            unknown,
            AsUnified & AsReversed
          >;
          type Expected = false;
          type Result = IsExact<Actual, Expected>;
          type ValidatedResult = IsExact<EffectiveResult, Expected>;

          assertType<ValidatedResult>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });

        it('should return false for string type', () => {
          type EffectiveResult = [string, TargetType] extends
            [TargetType, string] ? true : false;
          type Actual = CheckSpecial<
            TargetType,
            string,
            AsUnified & AsReversed
          >;
          type Expected = false;
          type Result = IsExact<Actual, Expected>;
          type ValidatedResult = IsExact<EffectiveResult, Expected>;

          assertType<ValidatedResult>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });
      });
    });
  });
});
