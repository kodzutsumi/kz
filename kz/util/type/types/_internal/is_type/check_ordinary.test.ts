// Copyright 2020 - present integereleven. All rights reserved. MIT license.


import { describe, it } from '@std/testing/bdd';
import { assertType, type IsExact } from '@std/testing/types';
import type { AsReversed, AsStrict } from '@kz/util/capability';

import type { CheckOrdinary } from './check_ordinary.ts';

// deno-lint-ignore no-explicit-any
type AnyType = any;
type Nil = null | undefined;

const IS_TRUE = true;

describe('CheckOrdinary', () => {
  describe('string', () => {
    type TypeToCheck = string;

    describe('AsForward (default)', () => {
      describe('AsLoose (default)', () => {
        it('should return boolean for any type', () => {
          type EffectiveResult = AnyType extends TypeToCheck ? true : false;
          type Actual = CheckOrdinary<TypeToCheck, AnyType>;
          type Expected = boolean;
          type Result = IsExact<Actual, Expected>;
          type ValidatedResult = IsExact<EffectiveResult, Expected>;

          assertType<ValidatedResult>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });

        it('should return true for never type', () => {
          type EffectiveResult = never extends TypeToCheck ? true : false;
          type Actual = CheckOrdinary<TypeToCheck, never>;
          type Expected = true;
          type Result = IsExact<Actual, Expected>;
          type ValidatedResult = IsExact<EffectiveResult, Expected>;

          assertType<ValidatedResult>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });

        it('should return false for void type', () => {
          type EffectiveResult = void extends TypeToCheck ? true : false;
          type Actual = CheckOrdinary<TypeToCheck, void>;
          type Expected = false;
          type Result = IsExact<Actual, Expected>;
          type ValidatedResult = IsExact<EffectiveResult, Expected>;

          assertType<ValidatedResult>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });

        it('should return false for unknown type', () => {
          type EffectiveResult = unknown extends TypeToCheck ? true : false;
          type Actual = CheckOrdinary<TypeToCheck, unknown>;
          type Expected = false;
          type Result = IsExact<Actual, Expected>;
          type ValidatedResult = IsExact<EffectiveResult, Expected>;

          assertType<ValidatedResult>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });

        it('should return true for string type', () => {
          type EffectiveResult = string extends TypeToCheck ? true : false;
          type Actual = CheckOrdinary<TypeToCheck, string>;
          type Expected = true;
          type Result = IsExact<Actual, Expected>;
          type ValidatedResult = IsExact<EffectiveResult, Expected>;

          assertType<ValidatedResult>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });
      });

      describe('AsStrict', () => {
        it('should return true for any type', () => {
          type EffectiveResult = [AnyType] extends [TypeToCheck] ? true : false;
          type Actual = CheckOrdinary<
            AnyType,
            TypeToCheck,
            AsStrict
          >;
          type Expected = true;
          type Result = IsExact<Actual, Expected>;
          type ValidatedResult = IsExact<EffectiveResult, Expected>;

          assertType<ValidatedResult>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });

        it('should return true for never type', () => {
          type EffectiveResult = [never] extends [TypeToCheck] ? true : false;
          type Actual = CheckOrdinary<TypeToCheck, never, AsStrict>;
          type Expected = true;
          type Result = IsExact<Actual, Expected>;
          type ValidatedResult = IsExact<EffectiveResult, Expected>;

          assertType<ValidatedResult>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });

        it('should return false for void type', () => {
          type EffectiveResult = [void] extends [TypeToCheck] ? true : false;
          type Actual = CheckOrdinary<TypeToCheck, void, AsStrict>;
          type Expected = false;
          type Result = IsExact<Actual, Expected>;
          type ValidatedResult = IsExact<EffectiveResult, Expected>;

          assertType<ValidatedResult>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });

        it('should return false for unknown type', () => {
          type EffectiveResult = [unknown] extends [TypeToCheck] ? true : false;
          type Actual = CheckOrdinary<TypeToCheck, unknown, AsStrict>;
          type Expected = false;
          type Result = IsExact<Actual, Expected>;
          type ValidatedResult = IsExact<EffectiveResult, Expected>;

          assertType<ValidatedResult>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });

        it('should return true for string type', () => {
          type EffectiveResult = [string] extends [TypeToCheck] ? true : false;
          type Actual = CheckOrdinary<TypeToCheck, string, AsStrict>;
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
          type EffectiveResult = TypeToCheck extends AnyType ? true : false;
          type Actual = CheckOrdinary<TypeToCheck, AnyType, AsReversed>;
          type Expected = true;
          type Result = IsExact<Actual, Expected>;
          type ValidatedResult = IsExact<EffectiveResult, Expected>;

          assertType<ValidatedResult>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });

        it('should return false for never type', () => {
          type EffectiveResult = TypeToCheck extends never ? true : false;
          type Actual = CheckOrdinary<TypeToCheck, never, AsReversed>;
          type Expected = false;
          type Result = IsExact<Actual, Expected>;
          type ValidatedResult = IsExact<EffectiveResult, Expected>;

          assertType<ValidatedResult>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });

        it('should return false for void type', () => {
          type EffectiveResult = TypeToCheck extends void ? true : false;
          type Actual = CheckOrdinary<TypeToCheck, void, AsReversed>;
          type Expected = false;
          type Result = IsExact<Actual, Expected>;
          type ValidatedResult = IsExact<EffectiveResult, Expected>;

          assertType<ValidatedResult>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });

        it('should return true for unknown type', () => {
          type EffectiveResult = TypeToCheck extends unknown ? true : false;
          type Actual = CheckOrdinary<TypeToCheck, unknown, AsReversed>;
          type Expected = true;
          type Result = IsExact<Actual, Expected>;
          type ValidatedResult = IsExact<EffectiveResult, Expected>;

          assertType<ValidatedResult>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });

        it('should return true for string type', () => {
          type EffectiveResult = TypeToCheck extends string ? true : false;
          type Actual = CheckOrdinary<TypeToCheck, string, AsReversed>;
          type Expected = true;
          type Result = IsExact<Actual, Expected>;
          type ValidatedResult = IsExact<EffectiveResult, Expected>;

          assertType<ValidatedResult>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });
      });

      describe('AsStrict', () => {
        it('should return true for any type', () => {
          type EffectiveResult = [TypeToCheck] extends [AnyType] ? true : false;
          type Actual = CheckOrdinary<
            TypeToCheck,
            AnyType,
            AsStrict & AsReversed
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
            TypeToCheck,
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
          type EffectiveResult = [TypeToCheck] extends [void] ? true : false;
          type Actual = CheckOrdinary<
            TypeToCheck,
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
          type EffectiveResult = [TypeToCheck] extends [unknown] ? true : false;
          type Actual = CheckOrdinary<
            TypeToCheck,
            unknown,
            AsStrict & AsReversed
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

  describe('Nil', () => {
    type TypeToCheck = Nil;

    describe('AsForward (default)', () => {
      describe('AsLoose (default)', () => {
        it('should return boolean for any type', () => {
          type EffectiveResult = AnyType extends Nil ? true : false;
          type Actual = CheckOrdinary<TypeToCheck, AnyType>;
          type Expected = boolean;
          type Result = IsExact<Actual, Expected>;
          type ValidatedResult = IsExact<EffectiveResult, Expected>;

          assertType<ValidatedResult>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });

        it('should return true for never type', () => {
          type EffectiveResult = never extends Nil ? true : false;
          type Actual = CheckOrdinary<TypeToCheck, never>;
          type Expected = true;
          type Result = IsExact<Actual, Expected>;
          type ValidatedResult = IsExact<EffectiveResult, Expected>;

          assertType<ValidatedResult>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });

        it('should return false for void type', () => {
          type EffectiveResult = void extends Nil ? true : false;
          type Actual = CheckOrdinary<TypeToCheck, void>;
          type Expected = false;
          type Result = IsExact<Actual, Expected>;
          type ValidatedResult = IsExact<EffectiveResult, Expected>;

          assertType<ValidatedResult>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });

        it('should return false for unknown type', () => {
          type EffectiveResult = unknown extends Nil ? true : false;
          type Actual = CheckOrdinary<TypeToCheck, unknown>;
          type Expected = false;
          type Result = IsExact<Actual, Expected>;
          type ValidatedResult = IsExact<EffectiveResult, Expected>;

          assertType<ValidatedResult>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });

        it('should return false for string type', () => {
          type EffectiveResult = string extends Nil ? true : false;
          type Actual = CheckOrdinary<TypeToCheck, string>;
          type Expected = false;
          type Result = IsExact<Actual, Expected>;
          type ValidatedResult = IsExact<EffectiveResult, Expected>;

          assertType<ValidatedResult>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });
      });

      describe('AsStrict', () => {
        it('should return true for any type', () => {
          type EffectiveResult = [AnyType] extends [TypeToCheck] ? true : false;
          type Actual = CheckOrdinary<
            TypeToCheck,
            AnyType,
            AsStrict
          >;
          type Expected = true;
          type Result = IsExact<Actual, Expected>;
          type ValidatedResult = IsExact<EffectiveResult, Expected>;

          assertType<ValidatedResult>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });

        it('should return true for never type', () => {
          type EffectiveResult = [never] extends [Nil] ? true : false;
          type Actual = CheckOrdinary<TypeToCheck, never, AsStrict>;
          type Expected = true;
          type Result = IsExact<Actual, Expected>;
          type ValidatedResult = IsExact<EffectiveResult, Expected>;

          assertType<ValidatedResult>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });

        it('should return false for void type', () => {
          type EffectiveResult = [void] extends [Nil] ? true : false;
          type Actual = CheckOrdinary<TypeToCheck, void, AsStrict>;
          type Expected = false;
          type Result = IsExact<Actual, Expected>;
          type ValidatedResult = IsExact<EffectiveResult, Expected>;

          assertType<ValidatedResult>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });

        it('should return false for unknown type', () => {
          type EffectiveResult = [unknown] extends [Nil] ? true : false;
          type Actual = CheckOrdinary<TypeToCheck, unknown, AsStrict>;
          type Expected = false;
          type Result = IsExact<Actual, Expected>;
          type ValidatedResult = IsExact<EffectiveResult, Expected>;

          assertType<ValidatedResult>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });

        it('should return false for string type', () => {
          type EffectiveResult = [string] extends [Nil] ? true : false;
          type Actual = CheckOrdinary<TypeToCheck, string, AsStrict>;
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
          type EffectiveResult = TypeToCheck extends AnyType ? true : false;
          type Actual = CheckOrdinary<TypeToCheck, AnyType, AsReversed>;
          type Expected = true;
          type Result = IsExact<Actual, Expected>;
          type ValidatedResult = IsExact<EffectiveResult, Expected>;

          assertType<ValidatedResult>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });

        it('should return false for never type', () => {
          type EffectiveResult = Nil extends never ? true : false;
          type Actual = CheckOrdinary<TypeToCheck, never, AsReversed>;
          type Expected = false;
          type Result = IsExact<Actual, Expected>;
          type ValidatedResult = IsExact<EffectiveResult, Expected>;

          assertType<ValidatedResult>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });

        it('should return false for void type', () => {
          type EffectiveResult = Nil extends void ? true : false;
          type Actual = CheckOrdinary<TypeToCheck, void, AsReversed>;
          type Expected = false;
          type Result = IsExact<Actual, Expected>;
          type ValidatedResult = IsExact<EffectiveResult, Expected>;

          assertType<ValidatedResult>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });

        it('should return true for unknown type', () => {
          type EffectiveResult = Nil extends unknown ? true : false;
          type Actual = CheckOrdinary<TypeToCheck, unknown, AsReversed>;
          type Expected = true;
          type Result = IsExact<Actual, Expected>;
          type ValidatedResult = IsExact<EffectiveResult, Expected>;

          assertType<ValidatedResult>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });

        it('should return false for string type', () => {
          type EffectiveResult = Nil extends string ? true : false;
          type Actual = CheckOrdinary<TypeToCheck, string, AsReversed>;
          type Expected = false;
          type Result = IsExact<Actual, Expected>;
          type ValidatedResult = IsExact<EffectiveResult, Expected>;

          assertType<ValidatedResult>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });
      });

      describe('AsStrict', () => {
        it('should return true for any type', () => {
          type EffectiveResult = [TypeToCheck] extends [AnyType] ? true : false;
          type Actual = CheckOrdinary<
            TypeToCheck,
            AnyType,
            AsStrict & AsReversed
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
            TypeToCheck,
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
          type EffectiveResult = [Nil] extends [void] ? true : false;
          type Actual = CheckOrdinary<
            TypeToCheck,
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
          type EffectiveResult = [Nil] extends [unknown] ? true : false;
          type Actual = CheckOrdinary<
            TypeToCheck,
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
          type EffectiveResult = [Nil] extends [string] ? true : false;
          type Actual = CheckOrdinary<
            TypeToCheck,
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
      describe('AsLoose (default)', () => {
        it('should return boolean for any type', () => {
          type EffectiveResult = AnyType extends TypeToCheck ? true : false;
          type Actual = CheckOrdinary<TypeToCheck, AnyType>;
          type Expected = boolean;
          type Result = IsExact<Actual, Expected>;
          type ValidatedResult = IsExact<EffectiveResult, Expected>;

          assertType<ValidatedResult>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });

        it('should return true for never type', () => {
          type EffectiveResult = never extends TypeToCheck ? true : false;
          type Actual = CheckOrdinary<TypeToCheck, never>;
          type Expected = true;
          type Result = IsExact<Actual, Expected>;
          type ValidatedResult = IsExact<EffectiveResult, Expected>;

          assertType<ValidatedResult>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });

        it('should return false for void type', () => {
          type EffectiveResult = void extends TypeToCheck ? true : false;
          type Actual = CheckOrdinary<TypeToCheck, void>;
          type Expected = false;
          type Result = IsExact<Actual, Expected>;
          type ValidatedResult = IsExact<EffectiveResult, Expected>;

          assertType<ValidatedResult>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });

        it('should return false for unknown type', () => {
          type EffectiveResult = unknown extends TypeToCheck ? true : false;
          type Actual = CheckOrdinary<TypeToCheck, unknown>;
          type Expected = false;
          type Result = IsExact<Actual, Expected>;
          type ValidatedResult = IsExact<EffectiveResult, Expected>;

          assertType<ValidatedResult>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });

        it('should return false for string type', () => {
          type EffectiveResult = string extends TypeToCheck ? true : false;
          type Actual = CheckOrdinary<TypeToCheck, string>;
          type Expected = false;
          type Result = IsExact<Actual, Expected>;
          type ValidatedResult = IsExact<EffectiveResult, Expected>;

          assertType<ValidatedResult>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });

        it('should return true for Subtype', () => {
          type EffectiveResult = Subtype extends TypeToCheck ? true : false;
          type Actual = CheckOrdinary<TypeToCheck, Subtype>;
          type Expected = true;
          type Result = IsExact<Actual, Expected>;
          type ValidatedResult = IsExact<EffectiveResult, Expected>;

          assertType<ValidatedResult>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });
      });

      describe('AsStrict', () => {
        it('should return true for any type', () => {
          type EffectiveResult = [AnyType] extends [TypeToCheck] ? true : false;
          type Actual = CheckOrdinary<
            TypeToCheck,
            TypeToCheck,
            AsStrict
          >;
          type Expected = true;
          type Result = IsExact<Actual, Expected>;
          type ValidatedResult = IsExact<EffectiveResult, Expected>;

          assertType<ValidatedResult>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });

        it('should return true for never type', () => {
          type EffectiveResult = [never] extends [TypeToCheck] ? true : false;
          type Actual = CheckOrdinary<TypeToCheck, never, AsStrict>;
          type Expected = true;
          type Result = IsExact<Actual, Expected>;
          type ValidatedResult = IsExact<EffectiveResult, Expected>;

          assertType<ValidatedResult>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });

        it('should return false for void type', () => {
          type EffectiveResult = [void] extends [TypeToCheck] ? true : false;
          type Actual = CheckOrdinary<TypeToCheck, void, AsStrict>;
          type Expected = false;
          type Result = IsExact<Actual, Expected>;
          type ValidatedResult = IsExact<EffectiveResult, Expected>;

          assertType<ValidatedResult>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });

        it('should return false for unknown type', () => {
          type EffectiveResult = [unknown] extends [TypeToCheck] ? true : false;
          type Actual = CheckOrdinary<TypeToCheck, unknown, AsStrict>;
          type Expected = false;
          type Result = IsExact<Actual, Expected>;
          type ValidatedResult = IsExact<EffectiveResult, Expected>;

          assertType<ValidatedResult>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });

        it('should return false for string type', () => {
          type EffectiveResult = [string] extends [TypeToCheck] ? true : false;
          type Actual = CheckOrdinary<TypeToCheck, string, AsStrict>;
          type Expected = false;
          type Result = IsExact<Actual, Expected>;
          type ValidatedResult = IsExact<EffectiveResult, Expected>;

          assertType<ValidatedResult>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });

        it('should return true for Subtype', () => {
          type EffectiveResult = [Subtype] extends [TypeToCheck] ? true : false;
          type Actual = CheckOrdinary<TypeToCheck, Subtype, AsStrict>;
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
          type EffectiveResult = [TypeToCheck] extends [AnyType] ? true : false;
          type Actual = CheckOrdinary<TypeToCheck, AnyType, AsReversed>;
          type Expected = true;
          type Result = IsExact<Actual, Expected>;
          type ValidatedResult = IsExact<EffectiveResult, Expected>;

          assertType<ValidatedResult>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });

        it('should return false for never type', () => {
          type EffectiveResult = [TypeToCheck] extends [never] ? true : false;
          type Actual = CheckOrdinary<TypeToCheck, never, AsReversed>;
          type Expected = false;
          type Result = IsExact<Actual, Expected>;
          type ValidatedResult = IsExact<EffectiveResult, Expected>;

          assertType<ValidatedResult>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });

        it('should return false for void type', () => {
          type EffectiveResult = [TypeToCheck] extends [void] ? true : false;
          type Actual = CheckOrdinary<TypeToCheck, void, AsReversed>;
          type Expected = false;
          type Result = IsExact<Actual, Expected>;
          type ValidatedResult = IsExact<EffectiveResult, Expected>;

          assertType<ValidatedResult>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });

        it('should return true for unknown type', () => {
          type EffectiveResult = [TypeToCheck] extends [unknown] ? true : false;
          type Actual = CheckOrdinary<TypeToCheck, unknown, AsReversed>;
          type Expected = true;
          type Result = IsExact<Actual, Expected>;
          type ValidatedResult = IsExact<EffectiveResult, Expected>;

          assertType<ValidatedResult>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });

        it('should return false for string type', () => {
          type EffectiveResult = [TypeToCheck] extends [string] ? true : false;
          type Actual = CheckOrdinary<TypeToCheck, string, AsReversed>;
          type Expected = false;
          type Result = IsExact<Actual, Expected>;
          type ValidatedResult = IsExact<EffectiveResult, Expected>;

          assertType<ValidatedResult>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });

        it('should return false for Subtype', () => {
          type EffectiveResult = [TypeToCheck] extends [Subtype] ? true : false;
          type Actual = CheckOrdinary<
            TypeToCheck,
            Subtype,
            AsReversed
          >;
          type Expected = false;
          type Result = IsExact<Actual, Expected>;
          type ValidatedResult = IsExact<EffectiveResult, Expected>;

          assertType<ValidatedResult>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });
      });

      describe('AsStrict', () => {
        it('should return true for any type', () => {
          type EffectiveResult = [TypeToCheck] extends [AnyType] ? true : false;
          type Actual = CheckOrdinary<
            TypeToCheck,
            AnyType,
            AsStrict & AsReversed
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
            TypeToCheck,
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
          type EffectiveResult = [TypeToCheck] extends [void] ? true : false;
          type Actual = CheckOrdinary<
            TypeToCheck,
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
          type EffectiveResult = [TypeToCheck] extends [unknown] ? true : false;
          type Actual = CheckOrdinary<
            TypeToCheck,
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
          type EffectiveResult = [TypeToCheck] extends [string] ? true : false;
          type Actual = CheckOrdinary<
            TypeToCheck,
            string,
            AsStrict & AsReversed
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
            TypeToCheck,
            Subtype,
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
