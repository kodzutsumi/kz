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
    type TypeToCheck = string;

    describe('AsForward (default)', () => {
      describe('AsDistributed (default)', () => {
        it('should return boolean for any type', () => {
          type EffectiveResult = AnyType extends TypeToCheck ? true : false;
          type Actual = CheckOrdinary<AnyType, TypeToCheck>;
          type Expected = boolean;
          type Result = IsExact<Actual, Expected>;
          type ValidatedResult = IsExact<EffectiveResult, Expected>;

          assertType<ValidatedResult>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });

        it('should return true for never type', () => {
          type EffectiveResult = never extends TypeToCheck ? true : false;
          type Actual = CheckOrdinary<never, TypeToCheck>;
          type Expected = true;
          type Result = IsExact<Actual, Expected>;
          type ValidatedResult = IsExact<EffectiveResult, Expected>;

          assertType<ValidatedResult>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });

        it('should return false for void type', () => {
          type EffectiveResult = void extends TypeToCheck ? true : false;
          type Actual = CheckOrdinary<void, TypeToCheck>;
          type Expected = false;
          type Result = IsExact<Actual, Expected>;
          type ValidatedResult = IsExact<EffectiveResult, Expected>;

          assertType<ValidatedResult>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });

        it('should return false for unknown type', () => {
          type EffectiveResult = unknown extends TypeToCheck ? true : false;
          type Actual = CheckOrdinary<unknown, TypeToCheck>;
          type Expected = false;
          type Result = IsExact<Actual, Expected>;
          type ValidatedResult = IsExact<EffectiveResult, Expected>;

          assertType<ValidatedResult>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });

        it('should return true for string type', () => {
          type EffectiveResult = string extends TypeToCheck ? true : false;
          type Actual = CheckOrdinary<string, TypeToCheck>;
          type Expected = true;
          type Result = IsExact<Actual, Expected>;
          type ValidatedResult = IsExact<EffectiveResult, Expected>;

          assertType<ValidatedResult>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });
      });

      describe('AsUnified', () => {
        it('should return true for any type', () => {
          type EffectiveResult = [AnyType] extends [TypeToCheck] ? true : false;
          type Actual = CheckOrdinary<
            AnyType,
            TypeToCheck,
            AsUnified
          >;
          type Expected = true;
          type Result = IsExact<Actual, Expected>;
          type ValidatedResult = IsExact<EffectiveResult, Expected>;

          assertType<ValidatedResult>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });

        it('should return true for never type', () => {
          type EffectiveResult = [never] extends [TypeToCheck] ? true : false;
          type Actual = CheckOrdinary<never, TypeToCheck, AsUnified>;
          type Expected = true;
          type Result = IsExact<Actual, Expected>;
          type ValidatedResult = IsExact<EffectiveResult, Expected>;

          assertType<ValidatedResult>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });

        it('should return false for void type', () => {
          type EffectiveResult = [void] extends [TypeToCheck] ? true : false;
          type Actual = CheckOrdinary<void, TypeToCheck, AsUnified>;
          type Expected = false;
          type Result = IsExact<Actual, Expected>;
          type ValidatedResult = IsExact<EffectiveResult, Expected>;

          assertType<ValidatedResult>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });

        it('should return false for unknown type', () => {
          type EffectiveResult = [unknown] extends [TypeToCheck] ? true : false;
          type Actual = CheckOrdinary<unknown, TypeToCheck, AsUnified>;
          type Expected = false;
          type Result = IsExact<Actual, Expected>;
          type ValidatedResult = IsExact<EffectiveResult, Expected>;

          assertType<ValidatedResult>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });

        it('should return true for string type', () => {
          type EffectiveResult = [string] extends [TypeToCheck] ? true : false;
          type Actual = CheckOrdinary<string, TypeToCheck, AsUnified>;
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
          type EffectiveResult = TypeToCheck extends AnyType ? true : false;
          type Actual = CheckOrdinary<AnyType, TypeToCheck, AsReversed>;
          type Expected = true;
          type Result = IsExact<Actual, Expected>;
          type ValidatedResult = IsExact<EffectiveResult, Expected>;

          assertType<ValidatedResult>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });

        it('should return false for never type', () => {
          type EffectiveResult = TypeToCheck extends never ? true : false;
          type Actual = CheckOrdinary<never, TypeToCheck, AsReversed>;
          type Expected = false;
          type Result = IsExact<Actual, Expected>;
          type ValidatedResult = IsExact<EffectiveResult, Expected>;

          assertType<ValidatedResult>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });

        it('should return false for void type', () => {
          type EffectiveResult = TypeToCheck extends void ? true : false;
          type Actual = CheckOrdinary<void, TypeToCheck, AsReversed>;
          type Expected = false;
          type Result = IsExact<Actual, Expected>;
          type ValidatedResult = IsExact<EffectiveResult, Expected>;

          assertType<ValidatedResult>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });

        it('should return true for unknown type', () => {
          type EffectiveResult = TypeToCheck extends unknown ? true : false;
          type Actual = CheckOrdinary<unknown, TypeToCheck, AsReversed>;
          type Expected = true;
          type Result = IsExact<Actual, Expected>;
          type ValidatedResult = IsExact<EffectiveResult, Expected>;

          assertType<ValidatedResult>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });

        it('should return true for string type', () => {
          type EffectiveResult = TypeToCheck extends string ? true : false;
          type Actual = CheckOrdinary<string, TypeToCheck, AsReversed>;
          type Expected = true;
          type Result = IsExact<Actual, Expected>;
          type ValidatedResult = IsExact<EffectiveResult, Expected>;

          assertType<ValidatedResult>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });
      });

      describe('AsUnified', () => {
        it('should return true for any type', () => {
          type EffectiveResult = [TypeToCheck] extends [AnyType] ? true : false;
          type Actual = CheckOrdinary<
            TypeToCheck,
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
          type EffectiveResult = [TypeToCheck] extends [never] ? true : false;
          type Actual = CheckOrdinary<
            never,
            TypeToCheck,
            AsUnified & AsReversed
          >;
          type Expected = false;
          type Result = IsExact<Actual, Expected>;
          type ValidatedResult = IsExact<EffectiveResult, Expected>;

          assertType<ValidatedResult>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });

        it('should return false for void type', () => {
          type EffectiveResult = [TypeToCheck] extends [void] ? true : false;
          type Actual = CheckOrdinary<
            TypeToCheck,
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
          type EffectiveResult = [TypeToCheck] extends [unknown] ? true : false;
          type Actual = CheckOrdinary<
            unknown,
            TypeToCheck,
            AsUnified & AsReversed
          >;
          type Expected = true;
          type Result = IsExact<Actual, Expected>;
          type ValidatedResult = IsExact<EffectiveResult, Expected>;

          assertType<ValidatedResult>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });

        it('should return true for string type', () => {
          type EffectiveResult = [TypeToCheck] extends [string] ? true : false;
          type Actual = CheckOrdinary<
            TypeToCheck,
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
    type TypeToCheck = Nil;

    describe('AsForward (default)', () => {
      describe('AsDistributed (default)', () => {
        it('should return boolean for any type', () => {
          type EffectiveResult = AnyType extends Nil ? true : false;
          type Actual = CheckOrdinary<AnyType, TypeToCheck>;
          type Expected = boolean;
          type Result = IsExact<Actual, Expected>;
          type ValidatedResult = IsExact<EffectiveResult, Expected>;

          assertType<ValidatedResult>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });

        it('should return true for never type', () => {
          type EffectiveResult = never extends Nil ? true : false;
          type Actual = CheckOrdinary<never, TypeToCheck>;
          type Expected = true;
          type Result = IsExact<Actual, Expected>;
          type ValidatedResult = IsExact<EffectiveResult, Expected>;

          assertType<ValidatedResult>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });

        it('should return false for void type', () => {
          type EffectiveResult = void extends Nil ? true : false;
          type Actual = CheckOrdinary<void, TypeToCheck>;
          type Expected = false;
          type Result = IsExact<Actual, Expected>;
          type ValidatedResult = IsExact<EffectiveResult, Expected>;

          assertType<ValidatedResult>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });

        it('should return false for unknown type', () => {
          type EffectiveResult = unknown extends Nil ? true : false;
          type Actual = CheckOrdinary<unknown, TypeToCheck>;
          type Expected = false;
          type Result = IsExact<Actual, Expected>;
          type ValidatedResult = IsExact<EffectiveResult, Expected>;

          assertType<ValidatedResult>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });

        it('should return false for string type', () => {
          type EffectiveResult = string extends Nil ? true : false;
          type Actual = CheckOrdinary<string, TypeToCheck>;
          type Expected = false;
          type Result = IsExact<Actual, Expected>;
          type ValidatedResult = IsExact<EffectiveResult, Expected>;

          assertType<ValidatedResult>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });
      });

      describe('AsUnified', () => {
        it('should return true for any type', () => {
          type EffectiveResult = [AnyType] extends [TypeToCheck] ? true : false;
          type Actual = CheckOrdinary<
            TypeToCheck,
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
          type EffectiveResult = [never] extends [Nil] ? true : false;
          type Actual = CheckOrdinary<never, TypeToCheck, AsUnified>;
          type Expected = true;
          type Result = IsExact<Actual, Expected>;
          type ValidatedResult = IsExact<EffectiveResult, Expected>;

          assertType<ValidatedResult>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });

        it('should return false for void type', () => {
          type EffectiveResult = [void] extends [Nil] ? true : false;
          type Actual = CheckOrdinary<void, TypeToCheck, AsUnified>;
          type Expected = false;
          type Result = IsExact<Actual, Expected>;
          type ValidatedResult = IsExact<EffectiveResult, Expected>;

          assertType<ValidatedResult>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });

        it('should return false for unknown type', () => {
          type EffectiveResult = [unknown] extends [Nil] ? true : false;
          type Actual = CheckOrdinary<unknown, TypeToCheck, AsUnified>;
          type Expected = false;
          type Result = IsExact<Actual, Expected>;
          type ValidatedResult = IsExact<EffectiveResult, Expected>;

          assertType<ValidatedResult>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });

        it('should return false for string type', () => {
          type EffectiveResult = [string] extends [Nil] ? true : false;
          type Actual = CheckOrdinary<string, TypeToCheck, AsUnified>;
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
          type EffectiveResult = TypeToCheck extends AnyType ? true : false;
          type Actual = CheckOrdinary<AnyType, TypeToCheck, AsReversed>;
          type Expected = true;
          type Result = IsExact<Actual, Expected>;
          type ValidatedResult = IsExact<EffectiveResult, Expected>;

          assertType<ValidatedResult>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });

        it('should return false for never type', () => {
          type EffectiveResult = Nil extends never ? true : false;
          type Actual = CheckOrdinary<never, TypeToCheck, AsReversed>;
          type Expected = false;
          type Result = IsExact<Actual, Expected>;
          type ValidatedResult = IsExact<EffectiveResult, Expected>;

          assertType<ValidatedResult>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });

        it('should return false for void type', () => {
          type EffectiveResult = Nil extends void ? true : false;
          type Actual = CheckOrdinary<void, TypeToCheck, AsReversed>;
          type Expected = false;
          type Result = IsExact<Actual, Expected>;
          type ValidatedResult = IsExact<EffectiveResult, Expected>;

          assertType<ValidatedResult>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });

        it('should return true for unknown type', () => {
          type EffectiveResult = Nil extends unknown ? true : false;
          type Actual = CheckOrdinary<unknown, TypeToCheck, AsReversed>;
          type Expected = true;
          type Result = IsExact<Actual, Expected>;
          type ValidatedResult = IsExact<EffectiveResult, Expected>;

          assertType<ValidatedResult>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });

        it('should return false for string type', () => {
          type EffectiveResult = Nil extends string ? true : false;
          type Actual = CheckOrdinary<string, TypeToCheck, AsReversed>;
          type Expected = false;
          type Result = IsExact<Actual, Expected>;
          type ValidatedResult = IsExact<EffectiveResult, Expected>;

          assertType<ValidatedResult>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });
      });

      describe('AsUnified', () => {
        it('should return true for any type', () => {
          type EffectiveResult = [TypeToCheck] extends [AnyType] ? true : false;
          type Actual = CheckOrdinary<
            TypeToCheck,
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
            TypeToCheck,
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
            TypeToCheck,
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
            TypeToCheck,
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
            TypeToCheck,
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
    type TypeToCheck = {
      a: number;
      b: string;
      c: boolean;
    };

    type Subtype =
      & TypeToCheck
      & {
        d: symbol;
      };

    describe('AsForward (default)', () => {
      describe('AsDistributed (default)', () => {
        it('should return boolean for any type', () => {
          type EffectiveResult = AnyType extends TypeToCheck ? true : false;
          type Actual = CheckOrdinary<AnyType, TypeToCheck>;
          type Expected = boolean;
          type Result = IsExact<Actual, Expected>;
          type ValidatedResult = IsExact<EffectiveResult, Expected>;

          assertType<ValidatedResult>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });

        it('should return true for never type', () => {
          type EffectiveResult = never extends TypeToCheck ? true : false;
          type Actual = CheckOrdinary<never, TypeToCheck>;
          type Expected = true;
          type Result = IsExact<Actual, Expected>;
          type ValidatedResult = IsExact<EffectiveResult, Expected>;

          assertType<ValidatedResult>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });

        it('should return false for void type', () => {
          type EffectiveResult = void extends TypeToCheck ? true : false;
          type Actual = CheckOrdinary<void, TypeToCheck>;
          type Expected = false;
          type Result = IsExact<Actual, Expected>;
          type ValidatedResult = IsExact<EffectiveResult, Expected>;

          assertType<ValidatedResult>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });

        it('should return false for unknown type', () => {
          type EffectiveResult = unknown extends TypeToCheck ? true : false;
          type Actual = CheckOrdinary<unknown, TypeToCheck>;
          type Expected = false;
          type Result = IsExact<Actual, Expected>;
          type ValidatedResult = IsExact<EffectiveResult, Expected>;

          assertType<ValidatedResult>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });

        it('should return false for string type', () => {
          type EffectiveResult = string extends TypeToCheck ? true : false;
          type Actual = CheckOrdinary<string, TypeToCheck>;
          type Expected = false;
          type Result = IsExact<Actual, Expected>;
          type ValidatedResult = IsExact<EffectiveResult, Expected>;

          assertType<ValidatedResult>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });

        it('should return true for Subtype', () => {
          type EffectiveResult = Subtype extends TypeToCheck ? true : false;
          type Actual = CheckOrdinary<Subtype, TypeToCheck>;
          type Expected = true;
          type Result = IsExact<Actual, Expected>;
          type ValidatedResult = IsExact<EffectiveResult, Expected>;

          assertType<ValidatedResult>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });
      });

      describe('AsUnified', () => {
        it('should return true for any type', () => {
          type EffectiveResult = [AnyType] extends [TypeToCheck] ? true : false;
          type Actual = CheckOrdinary<
            TypeToCheck,
            TypeToCheck,
            AsUnified
          >;
          type Expected = true;
          type Result = IsExact<Actual, Expected>;
          type ValidatedResult = IsExact<EffectiveResult, Expected>;

          assertType<ValidatedResult>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });

        it('should return true for never type', () => {
          type EffectiveResult = [never] extends [TypeToCheck] ? true : false;
          type Actual = CheckOrdinary<never, TypeToCheck, AsUnified>;
          type Expected = true;
          type Result = IsExact<Actual, Expected>;
          type ValidatedResult = IsExact<EffectiveResult, Expected>;

          assertType<ValidatedResult>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });

        it('should return false for void type', () => {
          type EffectiveResult = [void] extends [TypeToCheck] ? true : false;
          type Actual = CheckOrdinary<void, TypeToCheck, AsUnified>;
          type Expected = false;
          type Result = IsExact<Actual, Expected>;
          type ValidatedResult = IsExact<EffectiveResult, Expected>;

          assertType<ValidatedResult>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });

        it('should return false for unknown type', () => {
          type EffectiveResult = [unknown] extends [TypeToCheck] ? true : false;
          type Actual = CheckOrdinary<unknown, TypeToCheck, AsUnified>;
          type Expected = false;
          type Result = IsExact<Actual, Expected>;
          type ValidatedResult = IsExact<EffectiveResult, Expected>;

          assertType<ValidatedResult>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });

        it('should return false for string type', () => {
          type EffectiveResult = [string] extends [TypeToCheck] ? true : false;
          type Actual = CheckOrdinary<string, TypeToCheck, AsUnified>;
          type Expected = false;
          type Result = IsExact<Actual, Expected>;
          type ValidatedResult = IsExact<EffectiveResult, Expected>;

          assertType<ValidatedResult>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });

        it('should return true for Subtype', () => {
          type EffectiveResult = [Subtype] extends [TypeToCheck] ? true : false;
          type Actual = CheckOrdinary<Subtype, TypeToCheck, AsUnified>;
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
          type EffectiveResult = [TypeToCheck] extends [AnyType] ? true : false;
          type Actual = CheckOrdinary<AnyType, TypeToCheck, AsReversed>;
          type Expected = true;
          type Result = IsExact<Actual, Expected>;
          type ValidatedResult = IsExact<EffectiveResult, Expected>;

          assertType<ValidatedResult>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });

        it('should return false for never type', () => {
          type EffectiveResult = [TypeToCheck] extends [never] ? true : false;
          type Actual = CheckOrdinary<never, TypeToCheck, AsReversed>;
          type Expected = false;
          type Result = IsExact<Actual, Expected>;
          type ValidatedResult = IsExact<EffectiveResult, Expected>;

          assertType<ValidatedResult>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });

        it('should return false for void type', () => {
          type EffectiveResult = [TypeToCheck] extends [void] ? true : false;
          type Actual = CheckOrdinary<void, TypeToCheck, AsReversed>;
          type Expected = false;
          type Result = IsExact<Actual, Expected>;
          type ValidatedResult = IsExact<EffectiveResult, Expected>;

          assertType<ValidatedResult>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });

        it('should return true for unknown type', () => {
          type EffectiveResult = [TypeToCheck] extends [unknown] ? true : false;
          type Actual = CheckOrdinary<unknown, TypeToCheck, AsReversed>;
          type Expected = true;
          type Result = IsExact<Actual, Expected>;
          type ValidatedResult = IsExact<EffectiveResult, Expected>;

          assertType<ValidatedResult>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });

        it('should return false for string type', () => {
          type EffectiveResult = [TypeToCheck] extends [string] ? true : false;
          type Actual = CheckOrdinary<string, TypeToCheck, AsReversed>;
          type Expected = false;
          type Result = IsExact<Actual, Expected>;
          type ValidatedResult = IsExact<EffectiveResult, Expected>;

          assertType<ValidatedResult>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });

        it('should return false for Subtype', () => {
          type EffectiveResult = [TypeToCheck] extends [Subtype] ? true : false;
          type Actual = CheckOrdinary<
            Subtype,
            TypeToCheck,
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
          type EffectiveResult = [TypeToCheck] extends [AnyType] ? true : false;
          type Actual = CheckOrdinary<
            AnyType,
            TypeToCheck,
            AsUnified & AsReversed
          >;
          type Expected = true;
          type Result = IsExact<Actual, Expected>;
          type ValidatedResult = IsExact<EffectiveResult, Expected>;

          assertType<ValidatedResult>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });

        it('should return false for never type', () => {
          type EffectiveResult = [TypeToCheck] extends [never] ? true : false;
          type Actual = CheckOrdinary<
            never,
            TypeToCheck,
            AsUnified & AsReversed
          >;
          type Expected = false;
          type Result = IsExact<Actual, Expected>;
          type ValidatedResult = IsExact<EffectiveResult, Expected>;

          assertType<ValidatedResult>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });

        it('should return false for void type', () => {
          type EffectiveResult = [TypeToCheck] extends [void] ? true : false;
          type Actual = CheckOrdinary<
            TypeToCheck,
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
          type EffectiveResult = [TypeToCheck] extends [unknown] ? true : false;
          type Actual = CheckOrdinary<
            unknown,
            TypeToCheck,
            AsUnified & AsReversed
          >;
          type Expected = true;
          type Result = IsExact<Actual, Expected>;
          type ValidatedResult = IsExact<EffectiveResult, Expected>;

          assertType<ValidatedResult>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });

        it('should return false for string type', () => {
          type EffectiveResult = [TypeToCheck] extends [string] ? true : false;
          type Actual = CheckOrdinary<
            TypeToCheck,
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
          type EffectiveResult = [TypeToCheck] extends [Subtype] ? true : false;
          type Actual = CheckOrdinary<
            Subtype,
            TypeToCheck,
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
