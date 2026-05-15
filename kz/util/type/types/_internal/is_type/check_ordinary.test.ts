// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import { describe, it } from '@std/testing/bdd';
import { assertType, type IsExact } from '@std/testing/types';
import type { AsReversed, AsUnified } from '@kz/util/capability';

import type { CheckOrdinary } from './check_ordinary.ts';

// deno-lint-ignore no-explicit-any
type AnyType = any;
type Nil = null | undefined;

const IS_TRUE = true;

describe('CheckOrdinary', () => {
  describe('string', () => {
    type OfType = string;

    describe('AsForward (default)', () => {
      describe('AsDistributed (default)', () => {
        it('should return boolean for any type', () => {
          type EffectiveResult = AnyType extends OfType ? true : false;
          type Actual = CheckOrdinary<AnyType, OfType>;
          type Expected = boolean;
          type Result = IsExact<Actual, Expected>;
          type ValidatedResult = IsExact<EffectiveResult, Expected>;

          assertType<ValidatedResult>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });

        it('should return true for never type', () => {
          type EffectiveResult = never extends OfType ? true : false;
          type Actual = CheckOrdinary<never, OfType>;
          type Expected = true;
          type Result = IsExact<Actual, Expected>;
          type ValidatedResult = IsExact<EffectiveResult, Expected>;

          assertType<ValidatedResult>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });

        it('should return false for void type', () => {
          type EffectiveResult = void extends OfType ? true : false;
          type Actual = CheckOrdinary<void, OfType>;
          type Expected = false;
          type Result = IsExact<Actual, Expected>;
          type ValidatedResult = IsExact<EffectiveResult, Expected>;

          assertType<ValidatedResult>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });

        it('should return false for unknown type', () => {
          type EffectiveResult = unknown extends OfType ? true : false;
          type Actual = CheckOrdinary<unknown, OfType>;
          type Expected = false;
          type Result = IsExact<Actual, Expected>;
          type ValidatedResult = IsExact<EffectiveResult, Expected>;

          assertType<ValidatedResult>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });

        it('should return true for string type', () => {
          type EffectiveResult = string extends OfType ? true : false;
          type Actual = CheckOrdinary<string, OfType>;
          type Expected = true;
          type Result = IsExact<Actual, Expected>;
          type ValidatedResult = IsExact<EffectiveResult, Expected>;

          assertType<ValidatedResult>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });
      });

      describe('AsUnified', () => {
        it('should return true for any type', () => {
          type EffectiveResult = [AnyType] extends [OfType] ? true : false;
          type Actual = CheckOrdinary<
            AnyType,
            OfType,
            AsUnified
          >;
          type Expected = true;
          type Result = IsExact<Actual, Expected>;
          type ValidatedResult = IsExact<EffectiveResult, Expected>;

          assertType<ValidatedResult>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });

        it('should return true for never type', () => {
          type EffectiveResult = [never] extends [OfType] ? true : false;
          type Actual = CheckOrdinary<never, OfType, AsUnified>;
          type Expected = true;
          type Result = IsExact<Actual, Expected>;
          type ValidatedResult = IsExact<EffectiveResult, Expected>;

          assertType<ValidatedResult>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });

        it('should return false for void type', () => {
          type EffectiveResult = [void] extends [OfType] ? true : false;
          type Actual = CheckOrdinary<void, OfType, AsUnified>;
          type Expected = false;
          type Result = IsExact<Actual, Expected>;
          type ValidatedResult = IsExact<EffectiveResult, Expected>;

          assertType<ValidatedResult>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });

        it('should return false for unknown type', () => {
          type EffectiveResult = [unknown] extends [OfType] ? true : false;
          type Actual = CheckOrdinary<unknown, OfType, AsUnified>;
          type Expected = false;
          type Result = IsExact<Actual, Expected>;
          type ValidatedResult = IsExact<EffectiveResult, Expected>;

          assertType<ValidatedResult>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });

        it('should return true for string type', () => {
          type EffectiveResult = [string] extends [OfType] ? true : false;
          type Actual = CheckOrdinary<string, OfType, AsUnified>;
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
          type EffectiveResult = OfType extends AnyType ? true : false;
          type Actual = CheckOrdinary<AnyType, OfType, AsReversed>;
          type Expected = true;
          type Result = IsExact<Actual, Expected>;
          type ValidatedResult = IsExact<EffectiveResult, Expected>;

          assertType<ValidatedResult>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });

        it('should return false for never type', () => {
          type EffectiveResult = OfType extends never ? true : false;
          type Actual = CheckOrdinary<never, OfType, AsReversed>;
          type Expected = false;
          type Result = IsExact<Actual, Expected>;
          type ValidatedResult = IsExact<EffectiveResult, Expected>;

          assertType<ValidatedResult>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });

        it('should return false for void type', () => {
          type EffectiveResult = OfType extends void ? true : false;
          type Actual = CheckOrdinary<void, OfType, AsReversed>;
          type Expected = false;
          type Result = IsExact<Actual, Expected>;
          type ValidatedResult = IsExact<EffectiveResult, Expected>;

          assertType<ValidatedResult>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });

        it('should return true for unknown type', () => {
          type EffectiveResult = OfType extends unknown ? true : false;
          type Actual = CheckOrdinary<unknown, OfType, AsReversed>;
          type Expected = true;
          type Result = IsExact<Actual, Expected>;
          type ValidatedResult = IsExact<EffectiveResult, Expected>;

          assertType<ValidatedResult>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });

        it('should return true for string type', () => {
          type EffectiveResult = OfType extends string ? true : false;
          type Actual = CheckOrdinary<string, OfType, AsReversed>;
          type Expected = true;
          type Result = IsExact<Actual, Expected>;
          type ValidatedResult = IsExact<EffectiveResult, Expected>;

          assertType<ValidatedResult>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });
      });

      describe('AsUnified', () => {
        it('should return true for any type', () => {
          type EffectiveResult = [OfType] extends [AnyType] ? true : false;
          type Actual = CheckOrdinary<
            OfType,
            AnyType,
            AsUnified & AsReversed
          >;
          type Expected = true;
          type Result = IsExact<Actual, Expected>;
          type ValidatedResult = IsExact<EffectiveResult, Expected>;

          assertType<ValidatedResult>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });

        it('should return false for never type', () => {
          type EffectiveResult = [OfType] extends [never] ? true : false;
          type Actual = CheckOrdinary<
            never,
            OfType,
            AsUnified & AsReversed
          >;
          type Expected = false;
          type Result = IsExact<Actual, Expected>;
          type ValidatedResult = IsExact<EffectiveResult, Expected>;

          assertType<ValidatedResult>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });

        it('should return false for void type', () => {
          type EffectiveResult = [OfType] extends [void] ? true : false;
          type Actual = CheckOrdinary<
            OfType,
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
          type EffectiveResult = [OfType] extends [unknown] ? true : false;
          type Actual = CheckOrdinary<
            unknown,
            OfType,
            AsUnified & AsReversed
          >;
          type Expected = true;
          type Result = IsExact<Actual, Expected>;
          type ValidatedResult = IsExact<EffectiveResult, Expected>;

          assertType<ValidatedResult>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });

        it('should return true for string type', () => {
          type EffectiveResult = [OfType] extends [string] ? true : false;
          type Actual = CheckOrdinary<
            OfType,
            string,
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

  describe('Nil', () => {
    type OfType = Nil;

    describe('AsForward (default)', () => {
      describe('AsDistributed (default)', () => {
        it('should return boolean for any type', () => {
          type EffectiveResult = AnyType extends Nil ? true : false;
          type Actual = CheckOrdinary<AnyType, OfType>;
          type Expected = boolean;
          type Result = IsExact<Actual, Expected>;
          type ValidatedResult = IsExact<EffectiveResult, Expected>;

          assertType<ValidatedResult>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });

        it('should return true for never type', () => {
          type EffectiveResult = never extends Nil ? true : false;
          type Actual = CheckOrdinary<never, OfType>;
          type Expected = true;
          type Result = IsExact<Actual, Expected>;
          type ValidatedResult = IsExact<EffectiveResult, Expected>;

          assertType<ValidatedResult>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });

        it('should return false for void type', () => {
          type EffectiveResult = void extends Nil ? true : false;
          type Actual = CheckOrdinary<void, OfType>;
          type Expected = false;
          type Result = IsExact<Actual, Expected>;
          type ValidatedResult = IsExact<EffectiveResult, Expected>;

          assertType<ValidatedResult>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });

        it('should return false for unknown type', () => {
          type EffectiveResult = unknown extends Nil ? true : false;
          type Actual = CheckOrdinary<unknown, OfType>;
          type Expected = false;
          type Result = IsExact<Actual, Expected>;
          type ValidatedResult = IsExact<EffectiveResult, Expected>;

          assertType<ValidatedResult>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });

        it('should return false for string type', () => {
          type EffectiveResult = string extends Nil ? true : false;
          type Actual = CheckOrdinary<string, OfType>;
          type Expected = false;
          type Result = IsExact<Actual, Expected>;
          type ValidatedResult = IsExact<EffectiveResult, Expected>;

          assertType<ValidatedResult>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });
      });

      describe('AsUnified', () => {
        it('should return true for any type', () => {
          type EffectiveResult = [AnyType] extends [OfType] ? true : false;
          type Actual = CheckOrdinary<
            OfType,
            AnyType,
            AsUnified
          >;
          type Expected = true;
          type Result = IsExact<Actual, Expected>;
          type ValidatedResult = IsExact<EffectiveResult, Expected>;

          assertType<ValidatedResult>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });

        it('should return true for never type', () => {
          type EffectiveResult = [never] extends [OfType] ? true : false;
          type Actual = CheckOrdinary<never, OfType, AsUnified>;
          type Expected = true;
          type Result = IsExact<Actual, Expected>;
          type ValidatedResult = IsExact<EffectiveResult, Expected>;

          assertType<ValidatedResult>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });

        it('should return false for void type', () => {
          type EffectiveResult = [void] extends [Nil] ? true : false;
          type Actual = CheckOrdinary<void, OfType, AsUnified>;
          type Expected = false;
          type Result = IsExact<Actual, Expected>;
          type ValidatedResult = IsExact<EffectiveResult, Expected>;

          assertType<ValidatedResult>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });

        it('should return false for unknown type', () => {
          type EffectiveResult = [unknown] extends [Nil] ? true : false;
          type Actual = CheckOrdinary<unknown, OfType, AsUnified>;
          type Expected = false;
          type Result = IsExact<Actual, Expected>;
          type ValidatedResult = IsExact<EffectiveResult, Expected>;

          assertType<ValidatedResult>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });

        it('should return false for string type', () => {
          type EffectiveResult = [string] extends [Nil] ? true : false;
          type Actual = CheckOrdinary<string, OfType, AsUnified>;
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
          type EffectiveResult = OfType extends AnyType ? true : false;
          type Actual = CheckOrdinary<AnyType, OfType, AsReversed>;
          type Expected = true;
          type Result = IsExact<Actual, Expected>;
          type ValidatedResult = IsExact<EffectiveResult, Expected>;

          assertType<ValidatedResult>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });

        it('should return false for never type', () => {
          type EffectiveResult = Nil extends never ? true : false;
          type Actual = CheckOrdinary<never, OfType, AsReversed>;
          type Expected = false;
          type Result = IsExact<Actual, Expected>;
          type ValidatedResult = IsExact<EffectiveResult, Expected>;

          assertType<ValidatedResult>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });

        it('should return false for void type', () => {
          type EffectiveResult = Nil extends void ? true : false;
          type Actual = CheckOrdinary<void, OfType, AsReversed>;
          type Expected = false;
          type Result = IsExact<Actual, Expected>;
          type ValidatedResult = IsExact<EffectiveResult, Expected>;

          assertType<ValidatedResult>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });

        it('should return true for unknown type', () => {
          type EffectiveResult = Nil extends unknown ? true : false;
          type Actual = CheckOrdinary<unknown, OfType, AsReversed>;
          type Expected = true;
          type Result = IsExact<Actual, Expected>;
          type ValidatedResult = IsExact<EffectiveResult, Expected>;

          assertType<ValidatedResult>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });

        it('should return false for string type', () => {
          type EffectiveResult = Nil extends string ? true : false;
          type Actual = CheckOrdinary<string, OfType, AsReversed>;
          type Expected = false;
          type Result = IsExact<Actual, Expected>;
          type ValidatedResult = IsExact<EffectiveResult, Expected>;

          assertType<ValidatedResult>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });
      });

      describe('AsUnified', () => {
        it('should return true for any type', () => {
          type EffectiveResult = [OfType] extends [AnyType] ? true : false;
          type Actual = CheckOrdinary<
            OfType,
            AnyType,
            AsUnified & AsReversed
          >;
          type Expected = true;
          type Result = IsExact<Actual, Expected>;
          type ValidatedResult = IsExact<EffectiveResult, Expected>;

          assertType<ValidatedResult>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });

        it('should return false for never type', () => {
          type EffectiveResult = [Nil] extends [never] ? true : false;
          type Actual = CheckOrdinary<
            never,
            OfType,
            AsUnified & AsReversed
          >;
          type Expected = false;
          type Result = IsExact<Actual, Expected>;
          type ValidatedResult = IsExact<EffectiveResult, Expected>;

          assertType<ValidatedResult>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });

        it('should return false for void type', () => {
          type EffectiveResult = [Nil] extends [void] ? true : false;
          type Actual = CheckOrdinary<
            OfType,
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
          type EffectiveResult = [Nil] extends [unknown] ? true : false;
          type Actual = CheckOrdinary<
            unknown,
            OfType,
            AsUnified & AsReversed
          >;
          type Expected = true;
          type Result = IsExact<Actual, Expected>;
          type ValidatedResult = IsExact<EffectiveResult, Expected>;

          assertType<ValidatedResult>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });

        it('should return false for string type', () => {
          type EffectiveResult = [Nil] extends [string] ? true : false;
          type Actual = CheckOrdinary<
            OfType,
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

  describe('Object', () => {
    type OfType = {
      a: number;
      b: string;
      c: boolean;
    };

    type Subtype =
      & OfType
      & {
        d: symbol;
      };

    describe('AsForward (default)', () => {
      describe('AsDistributed (default)', () => {
        it('should return boolean for any type', () => {
          type EffectiveResult = AnyType extends OfType ? true : false;
          type Actual = CheckOrdinary<AnyType, OfType>;
          type Expected = boolean;
          type Result = IsExact<Actual, Expected>;
          type ValidatedResult = IsExact<EffectiveResult, Expected>;

          assertType<ValidatedResult>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });

        it('should return true for never type', () => {
          type EffectiveResult = never extends OfType ? true : false;
          type Actual = CheckOrdinary<never, OfType>;
          type Expected = true;
          type Result = IsExact<Actual, Expected>;
          type ValidatedResult = IsExact<EffectiveResult, Expected>;

          assertType<ValidatedResult>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });

        it('should return false for void type', () => {
          type EffectiveResult = void extends OfType ? true : false;
          type Actual = CheckOrdinary<void, OfType>;
          type Expected = false;
          type Result = IsExact<Actual, Expected>;
          type ValidatedResult = IsExact<EffectiveResult, Expected>;

          assertType<ValidatedResult>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });

        it('should return false for unknown type', () => {
          type EffectiveResult = unknown extends OfType ? true : false;
          type Actual = CheckOrdinary<unknown, OfType>;
          type Expected = false;
          type Result = IsExact<Actual, Expected>;
          type ValidatedResult = IsExact<EffectiveResult, Expected>;

          assertType<ValidatedResult>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });

        it('should return false for string type', () => {
          type EffectiveResult = string extends OfType ? true : false;
          type Actual = CheckOrdinary<string, OfType>;
          type Expected = false;
          type Result = IsExact<Actual, Expected>;
          type ValidatedResult = IsExact<EffectiveResult, Expected>;

          assertType<ValidatedResult>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });

        it('should return true for Subtype', () => {
          type EffectiveResult = Subtype extends OfType ? true : false;
          type Actual = CheckOrdinary<Subtype, OfType>;
          type Expected = true;
          type Result = IsExact<Actual, Expected>;
          type ValidatedResult = IsExact<EffectiveResult, Expected>;

          assertType<ValidatedResult>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });
      });

      describe('AsUnified', () => {
        it('should return true for any type', () => {
          type EffectiveResult = [AnyType] extends [OfType] ? true : false;
          type Actual = CheckOrdinary<
            OfType,
            OfType,
            AsUnified
          >;
          type Expected = true;
          type Result = IsExact<Actual, Expected>;
          type ValidatedResult = IsExact<EffectiveResult, Expected>;

          assertType<ValidatedResult>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });

        it('should return true for never type', () => {
          type EffectiveResult = [never] extends [OfType] ? true : false;
          type Actual = CheckOrdinary<never, OfType, AsUnified>;
          type Expected = true;
          type Result = IsExact<Actual, Expected>;
          type ValidatedResult = IsExact<EffectiveResult, Expected>;

          assertType<ValidatedResult>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });

        it('should return false for void type', () => {
          type EffectiveResult = [void] extends [OfType] ? true : false;
          type Actual = CheckOrdinary<void, OfType, AsUnified>;
          type Expected = false;
          type Result = IsExact<Actual, Expected>;
          type ValidatedResult = IsExact<EffectiveResult, Expected>;

          assertType<ValidatedResult>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });

        it('should return false for unknown type', () => {
          type EffectiveResult = [unknown] extends [OfType] ? true : false;
          type Actual = CheckOrdinary<unknown, OfType, AsUnified>;
          type Expected = false;
          type Result = IsExact<Actual, Expected>;
          type ValidatedResult = IsExact<EffectiveResult, Expected>;

          assertType<ValidatedResult>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });

        it('should return false for string type', () => {
          type EffectiveResult = [string] extends [OfType] ? true : false;
          type Actual = CheckOrdinary<string, OfType, AsUnified>;
          type Expected = false;
          type Result = IsExact<Actual, Expected>;
          type ValidatedResult = IsExact<EffectiveResult, Expected>;

          assertType<ValidatedResult>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });

        it('should return true for Subtype', () => {
          type EffectiveResult = [Subtype] extends [OfType] ? true : false;
          type Actual = CheckOrdinary<Subtype, OfType, AsUnified>;
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
          type EffectiveResult = [OfType] extends [AnyType] ? true : false;
          type Actual = CheckOrdinary<AnyType, OfType, AsReversed>;
          type Expected = true;
          type Result = IsExact<Actual, Expected>;
          type ValidatedResult = IsExact<EffectiveResult, Expected>;

          assertType<ValidatedResult>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });

        it('should return false for never type', () => {
          type EffectiveResult = [OfType] extends [never] ? true : false;
          type Actual = CheckOrdinary<never, OfType, AsReversed>;
          type Expected = false;
          type Result = IsExact<Actual, Expected>;
          type ValidatedResult = IsExact<EffectiveResult, Expected>;

          assertType<ValidatedResult>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });

        it('should return false for void type', () => {
          type EffectiveResult = [OfType] extends [void] ? true : false;
          type Actual = CheckOrdinary<void, OfType, AsReversed>;
          type Expected = false;
          type Result = IsExact<Actual, Expected>;
          type ValidatedResult = IsExact<EffectiveResult, Expected>;

          assertType<ValidatedResult>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });

        it('should return true for unknown type', () => {
          type EffectiveResult = [OfType] extends [unknown] ? true : false;
          type Actual = CheckOrdinary<unknown, OfType, AsReversed>;
          type Expected = true;
          type Result = IsExact<Actual, Expected>;
          type ValidatedResult = IsExact<EffectiveResult, Expected>;

          assertType<ValidatedResult>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });

        it('should return false for string type', () => {
          type EffectiveResult = [OfType] extends [string] ? true : false;
          type Actual = CheckOrdinary<string, OfType, AsReversed>;
          type Expected = false;
          type Result = IsExact<Actual, Expected>;
          type ValidatedResult = IsExact<EffectiveResult, Expected>;

          assertType<ValidatedResult>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });

        it('should return false for Subtype', () => {
          type EffectiveResult = [OfType] extends [Subtype] ? true : false;
          type Actual = CheckOrdinary<
            Subtype,
            OfType,
            AsReversed
          >;
          type Expected = false;
          type Result = IsExact<Actual, Expected>;
          type ValidatedResult = IsExact<EffectiveResult, Expected>;

          assertType<ValidatedResult>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });
      });

      describe('AsUnified', () => {
        it('should return true for any type', () => {
          type EffectiveResult = [OfType] extends [AnyType] ? true : false;
          type Actual = CheckOrdinary<
            AnyType,
            OfType,
            AsUnified & AsReversed
          >;
          type Expected = true;
          type Result = IsExact<Actual, Expected>;
          type ValidatedResult = IsExact<EffectiveResult, Expected>;

          assertType<ValidatedResult>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });

        it('should return false for never type', () => {
          type EffectiveResult = [OfType] extends [never] ? true : false;
          type Actual = CheckOrdinary<
            never,
            OfType,
            AsUnified & AsReversed
          >;
          type Expected = false;
          type Result = IsExact<Actual, Expected>;
          type ValidatedResult = IsExact<EffectiveResult, Expected>;

          assertType<ValidatedResult>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });

        it('should return false for void type', () => {
          type EffectiveResult = [OfType] extends [void] ? true : false;
          type Actual = CheckOrdinary<
            OfType,
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
          type EffectiveResult = [OfType] extends [unknown] ? true : false;
          type Actual = CheckOrdinary<
            unknown,
            OfType,
            AsUnified & AsReversed
          >;
          type Expected = true;
          type Result = IsExact<Actual, Expected>;
          type ValidatedResult = IsExact<EffectiveResult, Expected>;

          assertType<ValidatedResult>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });

        it('should return false for string type', () => {
          type EffectiveResult = [OfType] extends [string] ? true : false;
          type Actual = CheckOrdinary<
            OfType,
            string,
            AsUnified & AsReversed
          >;
          type Expected = false;
          type Result = IsExact<Actual, Expected>;
          type ValidatedResult = IsExact<EffectiveResult, Expected>;

          assertType<ValidatedResult>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });

        it('should return false for Subtype', () => {
          type EffectiveResult = [OfType] extends [Subtype] ? true : false;
          type Actual = CheckOrdinary<
            Subtype,
            OfType,
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
