// Copyright 2020 - present integereleven. All rights reserved. MIT license.


import { describe, it } from '@std/testing/bdd';
import { assertType, type IsExact } from '@std/testing/types';
import type { AsReversed, AsStrict } from '@kz/util/capability';

import type { CheckSpecial } from './check_special.ts';

// deno-lint-ignore no-explicit-any
type AnyType = any;

const IS_TRUE = true;

describe('CheckSpecial', () => {
  describe('unknown', () => {
    type TargetType = unknown;

    describe('AsForward (default)', () => {
      describe('AsLoose (default)', () => {
        it('should return true for any type', () => {
          type EffectiveResult = AnyType extends TargetType ? true : false;
          type Actual = CheckSpecial<TargetType, AnyType>;
          type Expected = true;
          type Result = IsExact<Actual, Expected>;
          type ValidatedResult = IsExact<EffectiveResult, Expected>;

          assertType<ValidatedResult>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });

        it('should return true for never type', () => {
          type EffectiveResult = never extends TargetType ? true : false;
          type Actual = CheckSpecial<TargetType, never>;
          type Expected = true;
          type Result = IsExact<Actual, Expected>;
          type ValidatedResult = IsExact<EffectiveResult, Expected>;

          assertType<ValidatedResult>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });

        it('should return true for void type', () => {
          type EffectiveResult = void extends TargetType ? true : false;
          type Actual = CheckSpecial<TargetType, void>;
          type Expected = true;
          type Result = IsExact<Actual, Expected>;
          type ValidatedResult = IsExact<EffectiveResult, Expected>;

          assertType<ValidatedResult>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });

        it('should return true for unknown type', () => {
          type EffectiveResult = unknown extends TargetType ? true : false;
          type Actual = CheckSpecial<TargetType, unknown>;
          type Expected = true;
          type Result = IsExact<Actual, Expected>;
          type ValidatedResult = IsExact<EffectiveResult, Expected>;

          assertType<ValidatedResult>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });

        it('should return true for string type', () => {
          type EffectiveResult = string extends TargetType ? true : false;
          type Actual = CheckSpecial<TargetType, string>;
          type Expected = true;
          type Result = IsExact<Actual, Expected>;
          type ValidatedResult = IsExact<EffectiveResult, Expected>;

          assertType<ValidatedResult>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });
      });

      describe('AsStrict', () => {
        it('should return true for any type', () => {
          type EffectiveResult = [TargetType, TargetType] extends
            [TargetType, TargetType] ? true : false;
          type Actual = CheckSpecial<
            TargetType,
            TargetType,
            AsStrict
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
          type Actual = CheckSpecial<TargetType, never, AsStrict>;
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
          type Actual = CheckSpecial<TargetType, void, AsStrict>;
          type Expected = false;
          type Result = IsExact<Actual, Expected>;
          type ValidatedResult = IsExact<EffectiveResult, Expected>;

          assertType<ValidatedResult>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });

        it('should return true for unknown type', () => {
          type EffectiveResult = [TargetType, unknown] extends
            [unknown, TargetType] ? true : false;
          type Actual = CheckSpecial<TargetType, unknown, AsStrict>;
          type Expected = true;
          type Result = IsExact<Actual, Expected>;
          type ValidatedResult = IsExact<EffectiveResult, Expected>;

          assertType<ValidatedResult>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });

        it('should return true for string type', () => {
          type EffectiveResult = [string] extends [TargetType] ? true : false;
          type Actual = CheckSpecial<TargetType, string, AsStrict>;
          type Expected = true;
          type Result = IsExact<Actual, Expected>;
          type ValidatedResult = IsExact<EffectiveResult, Expected>;

          assertType<ValidatedResult>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });
      });
    });

    describe('AsReversed', () => {
      describe('AsLoose (default)', () => {
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
          type Actual = CheckSpecial<TargetType, never, AsReversed>;
          type Expected = false;
          type Result = IsExact<Actual, Expected>;
          type ValidatedResult = IsExact<EffectiveResult, Expected>;

          assertType<ValidatedResult>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });

        it('should return false for void type', () => {
          type EffectiveResult = TargetType extends void ? true : false;
          type Actual = CheckSpecial<TargetType, void, AsReversed>;
          type Expected = false;
          type Result = IsExact<Actual, Expected>;
          type ValidatedResult = IsExact<EffectiveResult, Expected>;

          assertType<ValidatedResult>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });

        it('should return true for unknown type', () => {
          type EffectiveResult = TargetType extends unknown ? true : false;
          type Actual = CheckSpecial<TargetType, unknown, AsReversed>;
          type Expected = true;
          type Result = IsExact<Actual, Expected>;
          type ValidatedResult = IsExact<EffectiveResult, Expected>;

          assertType<ValidatedResult>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });

        it('should return false for string type', () => {
          type EffectiveResult = TargetType extends string ? true : false;
          type Actual = CheckSpecial<TargetType, string, AsReversed>;
          type Expected = false;
          type Result = IsExact<Actual, Expected>;
          type ValidatedResult = IsExact<EffectiveResult, Expected>;

          assertType<ValidatedResult>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });
      });

      describe('AsStrict', () => {
        it('should return true for any type', () => {
          type EffectiveResult = [TargetType, TargetType] extends
            [TargetType, TargetType] ? true : false;
          type Actual = CheckSpecial<
            TargetType,
            TargetType,
            AsStrict & AsReversed
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
            AsStrict & AsReversed
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
            AsStrict & AsReversed
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
            AsStrict & AsReversed
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
            AsStrict & AsReversed
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
      describe('AsLoose (default)', () => {
        it('should return false for any type', () => {
          type EffectiveResult = [AnyType, TargetType] extends
            [TargetType, AnyType] ? true : false;
          type Actual = CheckSpecial<TargetType, AnyType>;
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
          type Actual = CheckSpecial<TargetType, never>;
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
          type Actual = CheckSpecial<TargetType, void>;
          type Expected = false;
          type Result = IsExact<Actual, Expected>;
          type ValidatedResult = IsExact<EffectiveResult, Expected>;

          assertType<ValidatedResult>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });

        it('should return false for unknown type', () => {
          type EffectiveResult = [unknown, TargetType] extends
            [TargetType, unknown] ? true : false;
          type Actual = CheckSpecial<TargetType, unknown>;
          type Expected = false;
          type Result = IsExact<Actual, Expected>;
          type ValidatedResult = IsExact<EffectiveResult, Expected>;

          assertType<ValidatedResult>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });

        it('should return false for string type', () => {
          type EffectiveResult = string extends TargetType ? true : false;
          type Actual = CheckSpecial<TargetType, string>;
          type Expected = false;
          type Result = IsExact<Actual, Expected>;
          type ValidatedResult = IsExact<EffectiveResult, Expected>;

          assertType<ValidatedResult>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });
      });

      describe('AsStrict', () => {
        it('should return true for any type', () => {
          type EffectiveResult = [TargetType, TargetType] extends
            [TargetType, TargetType] ? true : false;
          type Actual = CheckSpecial<
            TargetType,
            TargetType,
            AsStrict
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
          type Actual = CheckSpecial<TargetType, never, AsStrict>;
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
          type Actual = CheckSpecial<TargetType, void, AsStrict>;
          type Expected = false;
          type Result = IsExact<Actual, Expected>;
          type ValidatedResult = IsExact<EffectiveResult, Expected>;

          assertType<ValidatedResult>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });

        it('should return false for unknown type', () => {
          type EffectiveResult = [unknown, TargetType] extends
            [TargetType, unknown] ? true : false;
          type Actual = CheckSpecial<TargetType, unknown, AsStrict>;
          type Expected = false;
          type Result = IsExact<Actual, Expected>;
          type ValidatedResult = IsExact<EffectiveResult, Expected>;

          assertType<ValidatedResult>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });

        it('should return false for string type', () => {
          type EffectiveResult = [string] extends [TargetType] ? true : false;
          type Actual = CheckSpecial<TargetType, string, AsStrict>;
          type Expected = false;
          type Result = IsExact<Actual, Expected>;
          type ValidatedResult = IsExact<EffectiveResult, Expected>;

          assertType<ValidatedResult>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });
      });
    });

    describe('AsReversed', () => {
      describe('AsLoose (default)', () => {
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
          type Actual = CheckSpecial<TargetType, never, AsReversed>;
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
          type Actual = CheckSpecial<TargetType, void, AsReversed>;
          type Expected = false;
          type Result = IsExact<Actual, Expected>;
          type ValidatedResult = IsExact<EffectiveResult, Expected>;

          assertType<ValidatedResult>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });

        it('should return false for unknown type', () => {
          type EffectiveResult = [unknown, TargetType] extends
            [TargetType, unknown] ? true : false;
          type Actual = CheckSpecial<TargetType, unknown, AsReversed>;
          type Expected = false;
          type Result = IsExact<Actual, Expected>;
          type ValidatedResult = IsExact<EffectiveResult, Expected>;

          assertType<ValidatedResult>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });

        it('should return true for string type', () => {
          type EffectiveResult = TargetType extends string ? true : false;
          type Actual = CheckSpecial<TargetType, string, AsReversed>;
          type Expected = true;
          type Result = IsExact<Actual, Expected>;
          type ValidatedResult = IsExact<EffectiveResult, Expected>;

          assertType<ValidatedResult>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });
      });

      describe('AsStrict', () => {
        it('should return true for any type', () => {
          type EffectiveResult = [TargetType, TargetType] extends
            [TargetType, TargetType] ? true : false;
          type Actual = CheckSpecial<
            TargetType,
            TargetType,
            AsStrict & AsReversed
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
            AsStrict & AsReversed
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
            AsStrict & AsReversed
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
            AsStrict & AsReversed
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
            TargetType,
            string,
            AsStrict & AsReversed
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
      describe('AsLoose (default)', () => {
        it('should return true for any type', () => {
          type EffectiveResult = [AnyType] extends [TargetType] ? true : false;
          type Actual = CheckSpecial<TargetType, AnyType>;
          type Expected = true;
          type Result = IsExact<Actual, Expected>;
          type ValidatedResult = IsExact<EffectiveResult, Expected>;

          assertType<ValidatedResult>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });

        it('should return true for never type', () => {
          type EffectiveResult = never extends TargetType ? true : false;
          type Actual = CheckSpecial<TargetType, never>;
          type Expected = true;
          type Result = IsExact<Actual, Expected>;
          type ValidatedResult = IsExact<EffectiveResult, Expected>;

          assertType<ValidatedResult>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });

        it('should return true for void type', () => {
          type EffectiveResult = void extends TargetType ? true : false;
          type Actual = CheckSpecial<TargetType, void>;
          type Expected = true;
          type Result = IsExact<Actual, Expected>;
          type ValidatedResult = IsExact<EffectiveResult, Expected>;

          assertType<ValidatedResult>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });

        it('should return false for unknown type', () => {
          type EffectiveResult = unknown extends TargetType ? true : false;
          type Actual = CheckSpecial<TargetType, unknown>;
          type Expected = false;
          type Result = IsExact<Actual, Expected>;
          type ValidatedResult = IsExact<EffectiveResult, Expected>;

          assertType<ValidatedResult>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });

        it('should return false for string type', () => {
          type EffectiveResult = string extends TargetType ? true : false;
          type Actual = CheckSpecial<TargetType, string>;
          type Expected = false;
          type Result = IsExact<Actual, Expected>;
          type ValidatedResult = IsExact<EffectiveResult, Expected>;

          assertType<ValidatedResult>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });
      });

      describe('AsStrict', () => {
        it('should return true for any type', () => {
          type EffectiveResult = [TargetType, TargetType] extends
            [TargetType, TargetType] ? true : false;
          type Actual = CheckSpecial<
            TargetType,
            TargetType,
            AsStrict
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
          type Actual = CheckSpecial<TargetType, never, AsStrict>;
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
          type Actual = CheckSpecial<TargetType, void, AsStrict>;
          type Expected = true;
          type Result = IsExact<Actual, Expected>;
          type ValidatedResult = IsExact<EffectiveResult, Expected>;

          assertType<ValidatedResult>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });

        it('should return false for unknown type', () => {
          type EffectiveResult = [unknown, TargetType] extends
            [TargetType, unknown] ? true : false;
          type Actual = CheckSpecial<TargetType, unknown, AsStrict>;
          type Expected = false;
          type Result = IsExact<Actual, Expected>;
          type ValidatedResult = IsExact<EffectiveResult, Expected>;

          assertType<ValidatedResult>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });

        it('should return false for string type', () => {
          type EffectiveResult = [string, TargetType] extends
            [TargetType, string] ? true : false;
          type Actual = CheckSpecial<TargetType, string, AsStrict>;
          type Expected = false;
          type Result = IsExact<Actual, Expected>;
          type ValidatedResult = IsExact<EffectiveResult, Expected>;

          assertType<ValidatedResult>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });
      });
    });

    describe('AsReversed', () => {
      describe('AsLoose (default)', () => {
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
          type Actual = CheckSpecial<TargetType, never, AsReversed>;
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
          type Actual = CheckSpecial<TargetType, void, AsReversed>;
          type Expected = true;
          type Result = IsExact<Actual, Expected>;
          type ValidatedResult = IsExact<EffectiveResult, Expected>;

          assertType<ValidatedResult>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });

        it('should return false for unknown type', () => {
          type EffectiveResult = [unknown, TargetType] extends
            [TargetType, unknown] ? true : false;
          type Actual = CheckSpecial<TargetType, unknown, AsReversed>;
          type Expected = false;
          type Result = IsExact<Actual, Expected>;
          type ValidatedResult = IsExact<EffectiveResult, Expected>;

          assertType<ValidatedResult>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });

        it('should return false for string type', () => {
          type EffectiveResult = [string, TargetType] extends
            [TargetType, string] ? true : false;
          type Actual = CheckSpecial<TargetType, string, AsReversed>;
          type Expected = false;
          type Result = IsExact<Actual, Expected>;
          type ValidatedResult = IsExact<EffectiveResult, Expected>;

          assertType<ValidatedResult>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });
      });

      describe('AsStrict', () => {
        it('should return true for any type', () => {
          type EffectiveResult = [TargetType, TargetType] extends
            [TargetType, TargetType] ? true : false;
          type Actual = CheckSpecial<
            TargetType,
            TargetType,
            AsStrict & AsReversed
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
            AsStrict & AsReversed
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
            AsStrict & AsReversed
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
            AsStrict & AsReversed
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
            AsStrict & AsReversed
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
