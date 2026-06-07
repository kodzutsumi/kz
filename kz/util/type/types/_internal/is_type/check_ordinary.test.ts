// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import { describe, it } from '@std/testing/bdd';
import { assertType, type IsExact } from '@std/testing/types';
import type { AsNullOption, AsReversed, AsStrict, AsUnified } from '@kz/util/capability';

import type { CheckOrdinary } from './check_ordinary.ts';

// deno-lint-ignore no-explicit-any
type AnyType = any;

const IS_TRUE = true;

describe('CheckOrdinary', () => {
  describe('string', () => {
    type OfType = string;

    describe('AsLoose (default)', () => {
      describe('AsForward (default)', () => {
        describe('AsDistributed (default)', () => {
          type Options = AsNullOption;

          it('should return boolean for any', () => {
            type TargetType = AnyType;
            type Expected = boolean;
            type EffectiveResult = TargetType extends OfType ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Options>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return true for never', () => {
            type TargetType = never;
            type Expected = true;
            type EffectiveResult = TargetType extends OfType ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Options>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return false for void', () => {
            type TargetType = void;
            type Expected = false;
            type EffectiveResult = TargetType extends OfType ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Options>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return false for unknown', () => {
            type TargetType = unknown;
            type Expected = false;
            type EffectiveResult = TargetType extends OfType ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Options>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return true for self', () => {
            type TargetType = OfType;
            type Expected = true;
            type EffectiveResult = TargetType extends OfType ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Options>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return true for literal', () => {
            type TargetType = "hello, world";
            type Expected = true;
            type EffectiveResult = TargetType extends OfType ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Options>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });
        });
        
        describe('AsUnified', () => {
          type Options = AsUnified;

          it('should return true for any', () => {
            type TargetType = AnyType;
            type Expected = true;
            type EffectiveResult = [TargetType] extends [OfType] ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Options>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return true for never', () => {
            type TargetType = never;
            type Expected = true;
            type EffectiveResult = [TargetType] extends [OfType] ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Options>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return false for void', () => {
            type TargetType = void;
            type Expected = false;
            type EffectiveResult = [TargetType] extends [OfType] ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Options>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return false for unknown', () => {
            type TargetType = unknown;
            type Expected = false;
            type EffectiveResult = [TargetType] extends [OfType] ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Options>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return true for self', () => {
            type TargetType = OfType;
            type Expected = true;
            type EffectiveResult = [TargetType] extends [OfType] ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Options>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return true for literal', () => {
            type TargetType = "hello, world";
            type Expected = true;
            type EffectiveResult = [TargetType] extends [OfType] ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Options>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });
        });
      });

      describe('AsReversed', () => {
        describe('AsDistributed (default)', () => {
          type Options = AsReversed;

          it('should return true for any', () => {
            type TargetType = AnyType;
            type Expected = true;
            type EffectiveResult = OfType extends TargetType ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Options>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return false for never', () => {
            type TargetType = never;
            type Expected = false;
            type EffectiveResult = OfType extends TargetType ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Options>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return false for void', () => {
            type TargetType = void;
            type Expected = false;
            type EffectiveResult = OfType extends TargetType ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Options>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return true for unknown', () => {
            type TargetType = unknown;
            type Expected = true;
            type EffectiveResult = OfType extends TargetType ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Options>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return true for self', () => {
            type TargetType = OfType;
            type Expected = true;
            type EffectiveResult = OfType extends TargetType ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Options>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return false for literal', () => {
            type TargetType = "hello, world";
            type Expected = false;
            type EffectiveResult = OfType extends TargetType ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Options>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });
        });
        
        describe('AsUnified', () => {
          type Options = AsUnified & AsReversed;

          it('should return true for any', () => {
            type TargetType = AnyType;
            type Expected = true;
            type EffectiveResult = [OfType] extends [TargetType] ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Options>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return false for never', () => {
            type TargetType = never;
            type Expected = false;
            type EffectiveResult = [OfType] extends [TargetType] ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Options>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return false for void', () => {
            type TargetType = void;
            type Expected = false;
            type EffectiveResult = [OfType] extends [TargetType] ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Options>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return true for unknown', () => {
            type TargetType = unknown;
            type Expected = true;
            type EffectiveResult = [OfType] extends [TargetType] ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Options>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return true for self', () => {
            type TargetType = OfType;
            type Expected = true;
            type EffectiveResult = [OfType] extends [TargetType] ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Options>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return false for literal', () => {
            type TargetType = "hello, world";
            type Expected = false;
            type EffectiveResult = [OfType] extends [TargetType] ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Options>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });
        });
      });
    });

    describe('AsStrict', () => {
      type Options = AsStrict;

      it('should return true for any', () => {
        type TargetType = AnyType;
        type Expected = true;
        type EffectiveResult = [OfType, TargetType] extends [TargetType, OfType] ? true : false;
        type Actual = CheckOrdinary<TargetType, OfType, Options>;
        type Result = IsExact<Actual, Expected>;
        type ValidatedResult = IsExact<EffectiveResult, Expected>;

        assertType<Result>(IS_TRUE);
        assertType<ValidatedResult>(IS_TRUE);
      });

      it('should return false for never', () => {
        type TargetType = never;
        type Expected = false;
        type EffectiveResult = [OfType, TargetType] extends [TargetType, OfType] ? true : false;
        type Actual = CheckOrdinary<TargetType, OfType, Options>;
        type Result = IsExact<Actual, Expected>;
        type ValidatedResult = IsExact<EffectiveResult, Expected>;

        assertType<Result>(IS_TRUE);
        assertType<ValidatedResult>(IS_TRUE);
      });

      it('should return false for void', () => {
        type TargetType = void;
        type Expected = false;
        type EffectiveResult = [OfType, TargetType] extends [TargetType, OfType] ? true : false;
        type Actual = CheckOrdinary<TargetType, OfType, Options>;
        type Result = IsExact<Actual, Expected>;
        type ValidatedResult = IsExact<EffectiveResult, Expected>;

        assertType<Result>(IS_TRUE);
        assertType<ValidatedResult>(IS_TRUE);
      });

      it('should return false for unknown', () => {
        type TargetType = unknown;
        type Expected = false;
        type EffectiveResult = [OfType, TargetType] extends [TargetType, OfType] ? true : false;
        type Actual = CheckOrdinary<TargetType, OfType, Options>;
        type Result = IsExact<Actual, Expected>;
        type ValidatedResult = IsExact<EffectiveResult, Expected>;

        assertType<Result>(IS_TRUE);
        assertType<ValidatedResult>(IS_TRUE);
      });

      it('should return true for self', () => {
        type TargetType = OfType;
        type Expected = true;
        type EffectiveResult = [OfType, TargetType] extends [TargetType, OfType] ? true : false;
        type Actual = CheckOrdinary<TargetType, OfType, Options>;
        type Result = IsExact<Actual, Expected>;
        type ValidatedResult = IsExact<EffectiveResult, Expected>;

        assertType<Result>(IS_TRUE);
        assertType<ValidatedResult>(IS_TRUE);
      });

      it('should return false for literal', () => {
        type TargetType = "hello, world";
        type Expected = false;
        type EffectiveResult = [OfType, TargetType] extends [TargetType, OfType] ? true : false;
        type Actual = CheckOrdinary<TargetType, OfType, Options>;
        type Result = IsExact<Actual, Expected>;
        type ValidatedResult = IsExact<EffectiveResult, Expected>;

        assertType<Result>(IS_TRUE);
        assertType<ValidatedResult>(IS_TRUE);
      });
    });
  });

  describe('PropertyKey', () => {
    type OfType = PropertyKey;

    describe('AsLoose (default)', () => {
      describe('AsForward (default)', () => {
        describe('AsDistributed (default)', () => {
          type Options = AsNullOption;

          it('should return boolean for any', () => {
            type TargetType = AnyType;
            type Expected = boolean;
            type EffectiveResult = TargetType extends OfType ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Options>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return true for never', () => {
            type TargetType = never;
            type Expected = true;
            type EffectiveResult = TargetType extends OfType ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Options>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return false for void', () => {
            type TargetType = void;
            type Expected = false;
            type EffectiveResult = TargetType extends OfType ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Options>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return false for unknown', () => {
            type TargetType = unknown;
            type Expected = false;
            type EffectiveResult = TargetType extends OfType ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Options>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return true for self', () => {
            type TargetType = OfType;
            type Expected = true;
            type EffectiveResult = TargetType extends OfType ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Options>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return true for subtype', () => {
            type TargetType = number;
            type Expected = true;
            type EffectiveResult = TargetType extends OfType ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Options>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return true for literal', () => {
            type TargetType = "hello, world";
            type Expected = true;
            type EffectiveResult = TargetType extends OfType ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Options>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });
        });
        
        describe('AsUnified', () => {
          type Options = AsUnified;

          it('should return true for any', () => {
            type TargetType = AnyType;
            type Expected = true;
            type EffectiveResult = [TargetType] extends [OfType] ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Options>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return true for never', () => {
            type TargetType = never;
            type Expected = true;
            type EffectiveResult = [TargetType] extends [OfType] ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Options>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return false for void', () => {
            type TargetType = void;
            type Expected = false;
            type EffectiveResult = [TargetType] extends [OfType] ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Options>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return false for unknown', () => {
            type TargetType = unknown;
            type Expected = false;
            type EffectiveResult = [TargetType] extends [OfType] ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Options>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return true for self', () => {
            type TargetType = OfType;
            type Expected = true;
            type EffectiveResult = [TargetType] extends [OfType] ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Options>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return true for subtype', () => {
            type TargetType = number;
            type Expected = true;
            type EffectiveResult = [TargetType] extends [OfType] ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Options>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return true for literal', () => {
            type TargetType = "hello, world";
            type Expected = true;
            type EffectiveResult = [TargetType] extends [OfType] ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Options>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });
        });
      });

      describe('AsReversed', () => {
        describe('AsDistributed (default)', () => {
          type Options = AsReversed;

          it('should return true for any', () => {
            type TargetType = AnyType;
            type Expected = true;
            type EffectiveResult = OfType extends TargetType ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Options>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return false for never', () => {
            type TargetType = never;
            type Expected = false;
            type EffectiveResult = OfType extends TargetType ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Options>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return false for void', () => {
            type TargetType = void;
            type Expected = false;
            type EffectiveResult = OfType extends TargetType ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Options>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return true for unknown', () => {
            type TargetType = unknown;
            type Expected = true;
            type EffectiveResult = OfType extends TargetType ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Options>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return true for self', () => {
            type TargetType = OfType;
            type Expected = true;
            type EffectiveResult = OfType extends TargetType ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Options>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return false for subtype', () => {
            type TargetType = number;
            type Expected = false;
            type EffectiveResult = [OfType] extends TargetType ? true : false;
            type Actual = CheckOrdinary<TargetType, [OfType], Options>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return false for literal', () => {
            type TargetType = "hello, world";
            type Expected = false;
            type EffectiveResult = OfType extends TargetType ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Options>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });
        });
        
        describe('AsUnified', () => {
          type Options = AsUnified & AsReversed;

          it('should return true for any', () => {
            type TargetType = AnyType;
            type Expected = true;
            type EffectiveResult = [OfType] extends [TargetType] ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Options>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return false for never', () => {
            type TargetType = never;
            type Expected = false;
            type EffectiveResult = [OfType] extends [TargetType] ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Options>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return false for void', () => {
            type TargetType = void;
            type Expected = false;
            type EffectiveResult = [OfType] extends [TargetType] ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Options>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return true for unknown', () => {
            type TargetType = unknown;
            type Expected = true;
            type EffectiveResult = [OfType] extends [TargetType] ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Options>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return true for self', () => {
            type TargetType = OfType;
            type Expected = true;
            type EffectiveResult = [OfType] extends [TargetType] ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Options>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return false for subtype', () => {
            type TargetType = number;
            type Expected = false;
            type EffectiveResult = [OfType] extends [TargetType] ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Options>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return false for literal', () => {
            type TargetType = "hello, world";
            type Expected = false;
            type EffectiveResult = [OfType] extends [TargetType] ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Options>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });
        });
      });
    });

    describe('AsStrict', () => {
      type Options = AsStrict;

      it('should return true for any', () => {
        type TargetType = AnyType;
        type Expected = true;
        type EffectiveResult = [OfType, TargetType] extends [TargetType, OfType] ? true : false;
        type Actual = CheckOrdinary<TargetType, OfType, Options>;
        type Result = IsExact<Actual, Expected>;
        type ValidatedResult = IsExact<EffectiveResult, Expected>;

        assertType<Result>(IS_TRUE);
        assertType<ValidatedResult>(IS_TRUE);
      });

      it('should return false for never', () => {
        type TargetType = never;
        type Expected = false;
        type EffectiveResult = [OfType, TargetType] extends [TargetType, OfType] ? true : false;
        type Actual = CheckOrdinary<TargetType, OfType, Options>;
        type Result = IsExact<Actual, Expected>;
        type ValidatedResult = IsExact<EffectiveResult, Expected>;

        assertType<Result>(IS_TRUE);
        assertType<ValidatedResult>(IS_TRUE);
      });

      it('should return false for void', () => {
        type TargetType = void;
        type Expected = false;
        type EffectiveResult = [OfType, TargetType] extends [TargetType, OfType] ? true : false;
        type Actual = CheckOrdinary<TargetType, OfType, Options>;
        type Result = IsExact<Actual, Expected>;
        type ValidatedResult = IsExact<EffectiveResult, Expected>;

        assertType<Result>(IS_TRUE);
        assertType<ValidatedResult>(IS_TRUE);
      });

      it('should return false for unknown', () => {
        type TargetType = unknown;
        type Expected = false;
        type EffectiveResult = [OfType, TargetType] extends [TargetType, OfType] ? true : false;
        type Actual = CheckOrdinary<TargetType, OfType, Options>;
        type Result = IsExact<Actual, Expected>;
        type ValidatedResult = IsExact<EffectiveResult, Expected>;

        assertType<Result>(IS_TRUE);
        assertType<ValidatedResult>(IS_TRUE);
      });

      it('should return true for self', () => {
        type TargetType = OfType;
        type Expected = true;
        type EffectiveResult = [OfType, TargetType] extends [TargetType, OfType] ? true : false;
        type Actual = CheckOrdinary<TargetType, OfType, Options>;
        type Result = IsExact<Actual, Expected>;
        type ValidatedResult = IsExact<EffectiveResult, Expected>;

        assertType<Result>(IS_TRUE);
        assertType<ValidatedResult>(IS_TRUE);
      });

      it('should return false for subtype', () => {
        type TargetType = number;
        type Expected = false;
        type EffectiveResult = [OfType, TargetType] extends [TargetType, OfType] ? true : false;
        type Actual = CheckOrdinary<TargetType, OfType, Options>;
        type Result = IsExact<Actual, Expected>;
        type ValidatedResult = IsExact<EffectiveResult, Expected>;

        assertType<Result>(IS_TRUE);
        assertType<ValidatedResult>(IS_TRUE);
      });

      it('should return false for literal', () => {
        type TargetType = "hello, world";
        type Expected = false;
        type EffectiveResult = [OfType, TargetType] extends [TargetType, OfType] ? true : false;
        type Actual = CheckOrdinary<TargetType, OfType, Options>;
        type Result = IsExact<Actual, Expected>;
        type ValidatedResult = IsExact<EffectiveResult, Expected>;

        assertType<Result>(IS_TRUE);
        assertType<ValidatedResult>(IS_TRUE);
      });
    });
  });

  describe('Object', () => {
    type OfType = {
      a: number;
      b: string;
      c: boolean;
    };
    
    type Literal = {
      a: 42;
      b: 'hello, world!';
      c: false;
    };
    
    type Subtype =
      & OfType
      & {
        d: symbol;
      };

    describe('AsLoose (default)', () => {
      describe('AsForward (default)', () => {
        describe('AsDistributed (default)', () => {
          type Options = AsNullOption;

          it('should return boolean for any', () => {
            type TargetType = AnyType;
            type Expected = boolean;
            type EffectiveResult = TargetType extends OfType ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Options>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return true for never', () => {
            type TargetType = never;
            type Expected = true;
            type EffectiveResult = TargetType extends OfType ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Options>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return false for void', () => {
            type TargetType = void;
            type Expected = false;
            type EffectiveResult = TargetType extends OfType ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Options>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return false for unknown', () => {
            type TargetType = unknown;
            type Expected = false;
            type EffectiveResult = TargetType extends OfType ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Options>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return true for self', () => {
            type TargetType = OfType;
            type Expected = true;
            type EffectiveResult = TargetType extends OfType ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Options>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return true for subtype', () => {
            type TargetType = Subtype;
            type Expected = true;
            type EffectiveResult = TargetType extends OfType ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Options>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return true for literal', () => {
            type TargetType = Literal;
            type Expected = true;
            type EffectiveResult = TargetType extends OfType ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Options>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });
        });
        
        describe('AsUnified', () => {
          type Options = AsUnified;

          it('should return true for any', () => {
            type TargetType = AnyType;
            type Expected = true;
            type EffectiveResult = [TargetType] extends [OfType] ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Options>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return true for never', () => {
            type TargetType = never;
            type Expected = true;
            type EffectiveResult = [TargetType] extends [OfType] ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Options>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return false for void', () => {
            type TargetType = void;
            type Expected = false;
            type EffectiveResult = [TargetType] extends [OfType] ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Options>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return false for unknown', () => {
            type TargetType = unknown;
            type Expected = false;
            type EffectiveResult = [TargetType] extends [OfType] ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Options>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return true for self', () => {
            type TargetType = OfType;
            type Expected = true;
            type EffectiveResult = [TargetType] extends [OfType] ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Options>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return true for subtype', () => {
            type TargetType = Subtype;
            type Expected = true;
            type EffectiveResult = [TargetType] extends [OfType] ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Options>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return true for literal', () => {
            type TargetType = Literal;
            type Expected = true;
            type EffectiveResult = [TargetType] extends [OfType] ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Options>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });
        });
      });

      describe('AsReversed', () => {
        describe('AsDistributed (default)', () => {
          type Options = AsReversed;

          it('should return true for any', () => {
            type TargetType = AnyType;
            type Expected = true;
            type EffectiveResult = OfType extends TargetType ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Options>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return false for never', () => {
            type TargetType = never;
            type Expected = false;
            type EffectiveResult = OfType extends TargetType ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Options>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return false for void', () => {
            type TargetType = void;
            type Expected = false;
            type EffectiveResult = OfType extends TargetType ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Options>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return true for unknown', () => {
            type TargetType = unknown;
            type Expected = true;
            type EffectiveResult = OfType extends TargetType ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Options>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return true for self', () => {
            type TargetType = OfType;
            type Expected = true;
            type EffectiveResult = OfType extends TargetType ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Options>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return false for subtype', () => {
            type TargetType = Subtype;
            type Expected = false;
            type EffectiveResult = OfType extends TargetType ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Options>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return false for literal', () => {
            type TargetType = Literal;
            type Expected = false;
            type EffectiveResult = OfType extends TargetType ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Options>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });
        });
        
        describe('AsUnified', () => {
          type Options = AsUnified & AsReversed;

          it('should return true for any', () => {
            type TargetType = AnyType;
            type Expected = true;
            type EffectiveResult = [OfType] extends [TargetType] ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Options>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return false for never', () => {
            type TargetType = never;
            type Expected = false;
            type EffectiveResult = [OfType] extends [TargetType] ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Options>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return false for void', () => {
            type TargetType = void;
            type Expected = false;
            type EffectiveResult = [OfType] extends [TargetType] ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Options>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return true for unknown', () => {
            type TargetType = unknown;
            type Expected = true;
            type EffectiveResult = [OfType] extends [TargetType] ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Options>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return true for self', () => {
            type TargetType = OfType;
            type Expected = true;
            type EffectiveResult = [OfType] extends [TargetType] ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Options>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return false for subtype', () => {
            type TargetType = Subtype;
            type Expected = false;
            type EffectiveResult = [OfType] extends [TargetType] ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Options>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return false for literal', () => {
            type TargetType = Literal;
            type Expected = false;
            type EffectiveResult = [OfType] extends [TargetType] ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Options>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });
        });
      });
    });

    describe('AsStrict', () => {
      type Options = AsStrict;

      it('should return true for any', () => {
        type TargetType = AnyType;
        type Expected = true;
        type EffectiveResult = [OfType, TargetType] extends [TargetType, OfType] ? true : false;
        type Actual = CheckOrdinary<TargetType, OfType, Options>;
        type Result = IsExact<Actual, Expected>;
        type ValidatedResult = IsExact<EffectiveResult, Expected>;

        assertType<Result>(IS_TRUE);
        assertType<ValidatedResult>(IS_TRUE);
      });

      it('should return false for never', () => {
        type TargetType = never;
        type Expected = false;
        type EffectiveResult = [OfType, TargetType] extends [TargetType, OfType] ? true : false;
        type Actual = CheckOrdinary<TargetType, OfType, Options>;
        type Result = IsExact<Actual, Expected>;
        type ValidatedResult = IsExact<EffectiveResult, Expected>;

        assertType<Result>(IS_TRUE);
        assertType<ValidatedResult>(IS_TRUE);
      });

      it('should return false for void', () => {
        type TargetType = void;
        type Expected = false;
        type EffectiveResult = [OfType, TargetType] extends [TargetType, OfType] ? true : false;
        type Actual = CheckOrdinary<TargetType, OfType, Options>;
        type Result = IsExact<Actual, Expected>;
        type ValidatedResult = IsExact<EffectiveResult, Expected>;

        assertType<Result>(IS_TRUE);
        assertType<ValidatedResult>(IS_TRUE);
      });

      it('should return false for unknown', () => {
        type TargetType = unknown;
        type Expected = false;
        type EffectiveResult = [OfType, TargetType] extends [TargetType, OfType] ? true : false;
        type Actual = CheckOrdinary<TargetType, OfType, Options>;
        type Result = IsExact<Actual, Expected>;
        type ValidatedResult = IsExact<EffectiveResult, Expected>;

        assertType<Result>(IS_TRUE);
        assertType<ValidatedResult>(IS_TRUE);
      });

      it('should return true for self', () => {
        type TargetType = OfType;
        type Expected = true;
        type EffectiveResult = [OfType, TargetType] extends [TargetType, OfType] ? true : false;
        type Actual = CheckOrdinary<TargetType, OfType, Options>;
        type Result = IsExact<Actual, Expected>;
        type ValidatedResult = IsExact<EffectiveResult, Expected>;

        assertType<Result>(IS_TRUE);
        assertType<ValidatedResult>(IS_TRUE);
      });

      it('should return false for subtype', () => {
        type TargetType = Subtype;
        type Expected = false;
        type EffectiveResult = [OfType, TargetType] extends [TargetType, OfType] ? true : false;
        type Actual = CheckOrdinary<TargetType, OfType, Options>;
        type Result = IsExact<Actual, Expected>;
        type ValidatedResult = IsExact<EffectiveResult, Expected>;

        assertType<Result>(IS_TRUE);
        assertType<ValidatedResult>(IS_TRUE);
      });

      it('should return false for literal', () => {
        type TargetType = Literal;
        type Expected = false;
        type EffectiveResult = [OfType, TargetType] extends [TargetType, OfType] ? true : false;
        type Actual = CheckOrdinary<TargetType, OfType, Options>;
        type Result = IsExact<Actual, Expected>;
        type ValidatedResult = IsExact<EffectiveResult, Expected>;

        assertType<Result>(IS_TRUE);
        assertType<ValidatedResult>(IS_TRUE);
      });
    });
  });
  
  describe('any', () => {
    type OfType = AnyType;

    describe('AsLoose (default)', () => {
      describe('AsForward (default)', () => {
        describe('AsDistributed (default)', () => {
          type Options = AsNullOption;

          it('should return true for any', () => {
            type TargetType = AnyType;
            type Expected = true;
            type EffectiveResult = TargetType extends OfType ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Options>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return true for never', () => {
            type TargetType = never;
            type Expected = true;
            type EffectiveResult = TargetType extends OfType ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Options>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return true for void', () => {
            type TargetType = void;
            type Expected = true;
            type EffectiveResult = TargetType extends OfType ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Options>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return true for unknown', () => {
            type TargetType = unknown;
            type Expected = true;
            type EffectiveResult = TargetType extends OfType ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Options>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return true for self', () => {
            type TargetType = OfType;
            type Expected = true;
            type EffectiveResult = TargetType extends OfType ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Options>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return true for literal', () => {
            type TargetType = "hello, world";
            type Expected = true;
            type EffectiveResult = TargetType extends OfType ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Options>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });
        });
        
        describe('AsUnified', () => {
          type Options = AsUnified;

          it('should return true for any', () => {
            type TargetType = AnyType;
            type Expected = true;
            type EffectiveResult = [TargetType] extends [OfType] ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Options>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return true for never', () => {
            type TargetType = never;
            type Expected = true;
            type EffectiveResult = [TargetType] extends [OfType] ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Options>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return true for void', () => {
            type TargetType = void;
            type Expected = true;
            type EffectiveResult = [TargetType] extends [OfType] ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Options>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return true for unknown', () => {
            type TargetType = unknown;
            type Expected = true;
            type EffectiveResult = [TargetType] extends [OfType] ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Options>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return true for self', () => {
            type TargetType = OfType;
            type Expected = true;
            type EffectiveResult = [TargetType] extends [OfType] ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Options>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return true for literal', () => {
            type TargetType = "hello, world";
            type Expected = true;
            type EffectiveResult = [TargetType] extends [OfType] ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Options>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });
        });
      });

      describe('AsReversed', () => {
        describe('AsDistributed (default)', () => {
          type Options = AsReversed;

          it('should return true for any', () => {
            type TargetType = AnyType;
            type Expected = true;
            type EffectiveResult = OfType extends TargetType ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Options>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return boolean for never', () => {
            type TargetType = never;
            type Expected = boolean;
            type EffectiveResult = OfType extends TargetType ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Options>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return boolean for void', () => {
            type TargetType = void;
            type Expected = boolean;
            type EffectiveResult = OfType extends TargetType ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Options>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return true for unknown', () => {
            type TargetType = unknown;
            type Expected = true;
            type EffectiveResult = OfType extends TargetType ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Options>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return true for self', () => {
            type TargetType = OfType;
            type Expected = true;
            type EffectiveResult = OfType extends TargetType ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Options>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return boolean for literal', () => {
            type TargetType = "hello, world";
            type Expected = boolean;
            type EffectiveResult = OfType extends TargetType ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Options>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });
        });
        
        describe('AsUnified', () => {
          type Options = AsUnified & AsReversed;

          it('should return true for any', () => {
            type TargetType = AnyType;
            type Expected = true;
            type EffectiveResult = [OfType] extends [TargetType] ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Options>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return false for never', () => {
            type TargetType = never;
            type Expected = false;
            type EffectiveResult = [OfType] extends [TargetType] ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Options>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return true for void', () => {
            type TargetType = void;
            type Expected = true;
            type EffectiveResult = [OfType] extends [TargetType] ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Options>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return true for unknown', () => {
            type TargetType = unknown;
            type Expected = true;
            type EffectiveResult = [OfType] extends [TargetType] ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Options>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return true for self', () => {
            type TargetType = OfType;
            type Expected = true;
            type EffectiveResult = [OfType] extends [TargetType] ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Options>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return true for literal', () => {
            type TargetType = "hello, world";
            type Expected = true;
            type EffectiveResult = [OfType] extends [TargetType] ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Options>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });
        });
      });
    });

    describe('AsStrict', () => {
      type Options = AsStrict;

      it('should return true for any', () => {
        type TargetType = AnyType;
        type Expected = true;
        type EffectiveResult = [OfType, TargetType] extends [TargetType, OfType] ? true : false;
        type Actual = CheckOrdinary<TargetType, OfType, Options>;
        type Result = IsExact<Actual, Expected>;
        type ValidatedResult = IsExact<EffectiveResult, Expected>;

        assertType<Result>(IS_TRUE);
        assertType<ValidatedResult>(IS_TRUE);
      });

      it('should return false for never', () => {
        type TargetType = never;
        type Expected = false;
        type EffectiveResult = [OfType, TargetType] extends [TargetType, OfType] ? true : false;
        type Actual = CheckOrdinary<TargetType, OfType, Options>;
        type Result = IsExact<Actual, Expected>;
        type ValidatedResult = IsExact<EffectiveResult, Expected>;

        assertType<Result>(IS_TRUE);
        assertType<ValidatedResult>(IS_TRUE);
      });

      it('should return true for void', () => {
        type TargetType = void;
        type Expected = true;
        type EffectiveResult = [OfType, TargetType] extends [TargetType, OfType] ? true : false;
        type Actual = CheckOrdinary<TargetType, OfType, Options>;
        type Result = IsExact<Actual, Expected>;
        type ValidatedResult = IsExact<EffectiveResult, Expected>;

        assertType<Result>(IS_TRUE);
        assertType<ValidatedResult>(IS_TRUE);
      });

      it('should return true for unknown', () => {
        type TargetType = unknown;
        type Expected = true;
        type EffectiveResult = [OfType, TargetType] extends [TargetType, OfType] ? true : false;
        type Actual = CheckOrdinary<TargetType, OfType, Options>;
        type Result = IsExact<Actual, Expected>;
        type ValidatedResult = IsExact<EffectiveResult, Expected>;

        assertType<Result>(IS_TRUE);
        assertType<ValidatedResult>(IS_TRUE);
      });

      it('should return true for self', () => {
        type TargetType = OfType;
        type Expected = true;
        type EffectiveResult = [OfType, TargetType] extends [TargetType, OfType] ? true : false;
        type Actual = CheckOrdinary<TargetType, OfType, Options>;
        type Result = IsExact<Actual, Expected>;
        type ValidatedResult = IsExact<EffectiveResult, Expected>;

        assertType<Result>(IS_TRUE);
        assertType<ValidatedResult>(IS_TRUE);
      });

      it('should return true for literal', () => {
        type TargetType = "hello, world";
        type Expected = true;
        type EffectiveResult = [OfType, TargetType] extends [TargetType, OfType] ? true : false;
        type Actual = CheckOrdinary<TargetType, OfType, Options>;
        type Result = IsExact<Actual, Expected>;
        type ValidatedResult = IsExact<EffectiveResult, Expected>;

        assertType<Result>(IS_TRUE);
        assertType<ValidatedResult>(IS_TRUE);
      });
    });
  });
  
  describe('unknown', () => {
    type OfType = unknown;

    describe('AsLoose (default)', () => {
      describe('AsForward (default)', () => {
        describe('AsDistributed (default)', () => {
          type Options = AsNullOption;

          it('should return true for any', () => {
            type TargetType = AnyType;
            type Expected = true;
            type EffectiveResult = TargetType extends OfType ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Options>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return true for never', () => {
            type TargetType = never;
            type Expected = true;
            type EffectiveResult = TargetType extends OfType ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Options>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return true for void', () => {
            type TargetType = void;
            type Expected = true;
            type EffectiveResult = TargetType extends OfType ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Options>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return true for unknown', () => {
            type TargetType = unknown;
            type Expected = true;
            type EffectiveResult = TargetType extends OfType ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Options>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return true for self', () => {
            type TargetType = OfType;
            type Expected = true;
            type EffectiveResult = TargetType extends OfType ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Options>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return true for literal', () => {
            type TargetType = "hello, world";
            type Expected = true;
            type EffectiveResult = TargetType extends OfType ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Options>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });
        });
        
        describe('AsUnified', () => {
          type Options = AsUnified;

          it('should return true for any', () => {
            type TargetType = AnyType;
            type Expected = true;
            type EffectiveResult = [TargetType] extends [OfType] ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Options>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return true for never', () => {
            type TargetType = never;
            type Expected = true;
            type EffectiveResult = [TargetType] extends [OfType] ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Options>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return true for void', () => {
            type TargetType = void;
            type Expected = true;
            type EffectiveResult = [TargetType] extends [OfType] ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Options>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return true for unknown', () => {
            type TargetType = unknown;
            type Expected = true;
            type EffectiveResult = [TargetType] extends [OfType] ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Options>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return true for self', () => {
            type TargetType = OfType;
            type Expected = true;
            type EffectiveResult = [TargetType] extends [OfType] ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Options>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return true for literal', () => {
            type TargetType = "hello, world";
            type Expected = true;
            type EffectiveResult = [TargetType] extends [OfType] ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Options>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });
        });
      });

      describe('AsReversed', () => {
        describe('AsDistributed (default)', () => {
          type Options = AsReversed;

          it('should return true for any', () => {
            type TargetType = AnyType;
            type Expected = true;
            type EffectiveResult = OfType extends TargetType ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Options>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return false for never', () => {
            type TargetType = never;
            type Expected = false;
            type EffectiveResult = OfType extends TargetType ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Options>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return false for void', () => {
            type TargetType = void;
            type Expected = false;
            type EffectiveResult = OfType extends TargetType ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Options>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return true for unknown', () => {
            type TargetType = unknown;
            type Expected = true;
            type EffectiveResult = OfType extends TargetType ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Options>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return true for self', () => {
            type TargetType = OfType;
            type Expected = true;
            type EffectiveResult = OfType extends TargetType ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Options>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return false for literal', () => {
            type TargetType = "hello, world";
            type Expected = false;
            type EffectiveResult = OfType extends TargetType ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Options>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });
        });
        
        describe('AsUnified', () => {
          type Options = AsUnified & AsReversed;

          it('should return true for any', () => {
            type TargetType = AnyType;
            type Expected = true;
            type EffectiveResult = [OfType] extends [TargetType] ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Options>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return false for never', () => {
            type TargetType = never;
            type Expected = false;
            type EffectiveResult = [OfType] extends [TargetType] ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Options>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return false for void', () => {
            type TargetType = void;
            type Expected = false;
            type EffectiveResult = [OfType] extends [TargetType] ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Options>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return true for unknown', () => {
            type TargetType = unknown;
            type Expected = true;
            type EffectiveResult = [OfType] extends [TargetType] ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Options>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return true for self', () => {
            type TargetType = OfType;
            type Expected = true;
            type EffectiveResult = [OfType] extends [TargetType] ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Options>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return false for literal', () => {
            type TargetType = "hello, world";
            type Expected = false;
            type EffectiveResult = [OfType] extends [TargetType] ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Options>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });
        });
      });
    });

    describe('AsStrict', () => {
      type Options = AsStrict;

      it('should return true for any', () => {
        type TargetType = AnyType;
        type Expected = true;
        type EffectiveResult = [OfType, TargetType] extends [TargetType, OfType] ? true : false;
        type Actual = CheckOrdinary<TargetType, OfType, Options>;
        type Result = IsExact<Actual, Expected>;
        type ValidatedResult = IsExact<EffectiveResult, Expected>;

        assertType<Result>(IS_TRUE);
        assertType<ValidatedResult>(IS_TRUE);
      });

      it('should return false for never', () => {
        type TargetType = never;
        type Expected = false;
        type EffectiveResult = [OfType, TargetType] extends [TargetType, OfType] ? true : false;
        type Actual = CheckOrdinary<TargetType, OfType, Options>;
        type Result = IsExact<Actual, Expected>;
        type ValidatedResult = IsExact<EffectiveResult, Expected>;

        assertType<Result>(IS_TRUE);
        assertType<ValidatedResult>(IS_TRUE);
      });

      it('should return false for void', () => {
        type TargetType = void;
        type Expected = false;
        type EffectiveResult = [OfType, TargetType] extends [TargetType, OfType] ? true : false;
        type Actual = CheckOrdinary<TargetType, OfType, Options>;
        type Result = IsExact<Actual, Expected>;
        type ValidatedResult = IsExact<EffectiveResult, Expected>;

        assertType<Result>(IS_TRUE);
        assertType<ValidatedResult>(IS_TRUE);
      });

      it('should return true for unknown', () => {
        type TargetType = unknown;
        type Expected = true;
        type EffectiveResult = [OfType, TargetType] extends [TargetType, OfType] ? true : false;
        type Actual = CheckOrdinary<TargetType, OfType, Options>;
        type Result = IsExact<Actual, Expected>;
        type ValidatedResult = IsExact<EffectiveResult, Expected>;

        assertType<Result>(IS_TRUE);
        assertType<ValidatedResult>(IS_TRUE);
      });

      it('should return true for self', () => {
        type TargetType = OfType;
        type Expected = true;
        type EffectiveResult = [OfType, TargetType] extends [TargetType, OfType] ? true : false;
        type Actual = CheckOrdinary<TargetType, OfType, Options>;
        type Result = IsExact<Actual, Expected>;
        type ValidatedResult = IsExact<EffectiveResult, Expected>;

        assertType<Result>(IS_TRUE);
        assertType<ValidatedResult>(IS_TRUE);
      });

      it('should return false for literal', () => {
        type TargetType = "hello, world";
        type Expected = false;
        type EffectiveResult = [OfType, TargetType] extends [TargetType, OfType] ? true : false;
        type Actual = CheckOrdinary<TargetType, OfType, Options>;
        type Result = IsExact<Actual, Expected>;
        type ValidatedResult = IsExact<EffectiveResult, Expected>;

        assertType<Result>(IS_TRUE);
        assertType<ValidatedResult>(IS_TRUE);
      });
    });
  });
  
  describe('never', () => {
    type OfType = never;

    describe('AsLoose (default)', () => {
      describe('AsForward (default)', () => {
        describe('AsDistributed (default)', () => {
          type Options = AsNullOption;

          it('should return boolean for any', () => {
            type TargetType = AnyType;
            type Expected = boolean;
            type EffectiveResult = TargetType extends OfType ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Options>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return true for never', () => {
            type TargetType = never;
            type Expected = true;
            type EffectiveResult = TargetType extends OfType ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Options>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return false for void', () => {
            type TargetType = void;
            type Expected = false;
            type EffectiveResult = TargetType extends OfType ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Options>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return false for unknown', () => {
            type TargetType = unknown;
            type Expected = false;
            type EffectiveResult = TargetType extends OfType ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Options>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return true for self', () => {
            type TargetType = OfType;
            type Expected = true;
            type EffectiveResult = TargetType extends OfType ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Options>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return false for literal', () => {
            type TargetType = "hello, world";
            type Expected = false;
            type EffectiveResult = TargetType extends OfType ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Options>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });
        });
        
        describe('AsUnified', () => {
          type Options = AsUnified;

          it('should return false for any', () => {
            type TargetType = AnyType;
            type Expected = false;
            type EffectiveResult = [TargetType] extends [OfType] ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Options>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return true for never', () => {
            type TargetType = never;
            type Expected = true;
            type EffectiveResult = [TargetType] extends [OfType] ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Options>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return false for void', () => {
            type TargetType = void;
            type Expected = false;
            type EffectiveResult = [TargetType] extends [OfType] ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Options>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return false for unknown', () => {
            type TargetType = unknown;
            type Expected = false;
            type EffectiveResult = [TargetType] extends [OfType] ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Options>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return true for self', () => {
            type TargetType = OfType;
            type Expected = true;
            type EffectiveResult = [TargetType] extends [OfType] ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Options>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return false for literal', () => {
            type TargetType = "hello, world";
            type Expected = false;
            type EffectiveResult = [TargetType] extends [OfType] ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Options>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });
        });
      });

      describe('AsReversed', () => {
        describe('AsDistributed (default)', () => {
          type Options = AsReversed;

          it('should return true for any', () => {
            type TargetType = AnyType;
            type Expected = true;
            type EffectiveResult = OfType extends TargetType ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Options>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return true for never', () => {
            type TargetType = never;
            type Expected = true;
            type EffectiveResult = OfType extends TargetType ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Options>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return true for void', () => {
            type TargetType = void;
            type Expected = true;
            type EffectiveResult = OfType extends TargetType ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Options>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return true for unknown', () => {
            type TargetType = unknown;
            type Expected = true;
            type EffectiveResult = OfType extends TargetType ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Options>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return true for self', () => {
            type TargetType = OfType;
            type Expected = true;
            type EffectiveResult = OfType extends TargetType ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Options>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return true for literal', () => {
            type TargetType = "hello, world";
            type Expected = true;
            type EffectiveResult = OfType extends TargetType ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Options>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });
        });
        
        describe('AsUnified', () => {
          type Options = AsUnified & AsReversed;

          it('should return true for any', () => {
            type TargetType = AnyType;
            type Expected = true;
            type EffectiveResult = [OfType] extends [TargetType] ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Options>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return true for never', () => {
            type TargetType = never;
            type Expected = true;
            type EffectiveResult = [OfType] extends [TargetType] ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Options>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return true for void', () => {
            type TargetType = void;
            type Expected = true;
            type EffectiveResult = [OfType] extends [TargetType] ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Options>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return true for unknown', () => {
            type TargetType = unknown;
            type Expected = true;
            type EffectiveResult = [OfType] extends [TargetType] ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Options>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return true for self', () => {
            type TargetType = OfType;
            type Expected = true;
            type EffectiveResult = [OfType] extends [TargetType] ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Options>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return true for literal', () => {
            type TargetType = "hello, world";
            type Expected = true;
            type EffectiveResult = [OfType] extends [TargetType] ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Options>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });
        });
      });
    });

    describe('AsStrict', () => {
      type Options = AsStrict;

      it('should return false for any', () => {
        type TargetType = AnyType;
        type Expected = false;
        type EffectiveResult = [OfType, TargetType] extends [TargetType, OfType] ? true : false;
        type Actual = CheckOrdinary<TargetType, OfType, Options>;
        type Result = IsExact<Actual, Expected>;
        type ValidatedResult = IsExact<EffectiveResult, Expected>;

        assertType<Result>(IS_TRUE);
        assertType<ValidatedResult>(IS_TRUE);
      });

      it('should return true for never', () => {
        type TargetType = never;
        type Expected = true;
        type EffectiveResult = [OfType, TargetType] extends [TargetType, OfType] ? true : false;
        type Actual = CheckOrdinary<TargetType, OfType, Options>;
        type Result = IsExact<Actual, Expected>;
        type ValidatedResult = IsExact<EffectiveResult, Expected>;

        assertType<Result>(IS_TRUE);
        assertType<ValidatedResult>(IS_TRUE);
      });

      it('should return false for void', () => {
        type TargetType = void;
        type Expected = false;
        type EffectiveResult = [OfType, TargetType] extends [TargetType, OfType] ? true : false;
        type Actual = CheckOrdinary<TargetType, OfType, Options>;
        type Result = IsExact<Actual, Expected>;
        type ValidatedResult = IsExact<EffectiveResult, Expected>;

        assertType<Result>(IS_TRUE);
        assertType<ValidatedResult>(IS_TRUE);
      });

      it('should return false for unknown', () => {
        type TargetType = unknown;
        type Expected = false;
        type EffectiveResult = [OfType, TargetType] extends [TargetType, OfType] ? true : false;
        type Actual = CheckOrdinary<TargetType, OfType, Options>;
        type Result = IsExact<Actual, Expected>;
        type ValidatedResult = IsExact<EffectiveResult, Expected>;

        assertType<Result>(IS_TRUE);
        assertType<ValidatedResult>(IS_TRUE);
      });

      it('should return true for self', () => {
        type TargetType = OfType;
        type Expected = true;
        type EffectiveResult = [OfType, TargetType] extends [TargetType, OfType] ? true : false;
        type Actual = CheckOrdinary<TargetType, OfType, Options>;
        type Result = IsExact<Actual, Expected>;
        type ValidatedResult = IsExact<EffectiveResult, Expected>;

        assertType<Result>(IS_TRUE);
        assertType<ValidatedResult>(IS_TRUE);
      });

      it('should return false for literal', () => {
        type TargetType = "hello, world";
        type Expected = false;
        type EffectiveResult = [OfType, TargetType] extends [TargetType, OfType] ? true : false;
        type Actual = CheckOrdinary<TargetType, OfType, Options>;
        type Result = IsExact<Actual, Expected>;
        type ValidatedResult = IsExact<EffectiveResult, Expected>;

        assertType<Result>(IS_TRUE);
        assertType<ValidatedResult>(IS_TRUE);
      });
    });
  });
  
  describe('void', () => {
    type OfType = void;

    describe('AsLoose (default)', () => {
      describe('AsForward (default)', () => {
        describe('AsDistributed (default)', () => {
          type Options = AsNullOption;

          it('should return boolean for any', () => {
            type TargetType = AnyType;
            type Expected = boolean;
            type EffectiveResult = TargetType extends OfType ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Options>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return true for never', () => {
            type TargetType = never;
            type Expected = true;
            type EffectiveResult = TargetType extends OfType ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Options>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return true for void', () => {
            type TargetType = void;
            type Expected = true;
            type EffectiveResult = TargetType extends OfType ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Options>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return false for unknown', () => {
            type TargetType = unknown;
            type Expected = false;
            type EffectiveResult = TargetType extends OfType ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Options>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return true for self', () => {
            type TargetType = OfType;
            type Expected = true;
            type EffectiveResult = TargetType extends OfType ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Options>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return false for literal', () => {
            type TargetType = "hello, world";
            type Expected = false;
            type EffectiveResult = TargetType extends OfType ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Options>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });
        });
        
        describe('AsUnified', () => {
          type Options = AsUnified;

          it('should return true for any', () => {
            type TargetType = AnyType;
            type Expected = true;
            type EffectiveResult = [TargetType] extends [OfType] ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Options>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return true for never', () => {
            type TargetType = never;
            type Expected = true;
            type EffectiveResult = [TargetType] extends [OfType] ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Options>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return true for void', () => {
            type TargetType = void;
            type Expected = true;
            type EffectiveResult = [TargetType] extends [OfType] ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Options>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return false for unknown', () => {
            type TargetType = unknown;
            type Expected = false;
            type EffectiveResult = [TargetType] extends [OfType] ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Options>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return true for self', () => {
            type TargetType = OfType;
            type Expected = true;
            type EffectiveResult = [TargetType] extends [OfType] ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Options>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return false for literal', () => {
            type TargetType = "hello, world";
            type Expected = false;
            type EffectiveResult = [TargetType] extends [OfType] ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Options>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });
        });
      });

      describe('AsReversed', () => {
        describe('AsDistributed (default)', () => {
          type Options = AsReversed;

          it('should return true for any', () => {
            type TargetType = AnyType;
            type Expected = true;
            type EffectiveResult = OfType extends TargetType ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Options>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return false for never', () => {
            type TargetType = never;
            type Expected = false;
            type EffectiveResult = OfType extends TargetType ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Options>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return true for void', () => {
            type TargetType = void;
            type Expected = true;
            type EffectiveResult = OfType extends TargetType ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Options>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return true for unknown', () => {
            type TargetType = unknown;
            type Expected = true;
            type EffectiveResult = OfType extends TargetType ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Options>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return true for self', () => {
            type TargetType = OfType;
            type Expected = true;
            type EffectiveResult = OfType extends TargetType ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Options>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return false for literal', () => {
            type TargetType = "hello, world";
            type Expected = false;
            type EffectiveResult = OfType extends TargetType ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Options>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });
        });
        
        describe('AsUnified', () => {
          type Options = AsUnified & AsReversed;

          it('should return true for any', () => {
            type TargetType = AnyType;
            type Expected = true;
            type EffectiveResult = [OfType] extends [TargetType] ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Options>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return false for never', () => {
            type TargetType = never;
            type Expected = false;
            type EffectiveResult = [OfType] extends [TargetType] ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Options>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return true for void', () => {
            type TargetType = void;
            type Expected = true;
            type EffectiveResult = [OfType] extends [TargetType] ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Options>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return true for unknown', () => {
            type TargetType = unknown;
            type Expected = true;
            type EffectiveResult = [OfType] extends [TargetType] ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Options>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return true for self', () => {
            type TargetType = OfType;
            type Expected = true;
            type EffectiveResult = [OfType] extends [TargetType] ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Options>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return false for literal', () => {
            type TargetType = "hello, world";
            type Expected = false;
            type EffectiveResult = [OfType] extends [TargetType] ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Options>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });
        });
      });
    });

    describe('AsStrict', () => {
      type Options = AsStrict;

      it('should return true for any', () => {
        type TargetType = AnyType;
        type Expected = true;
        type EffectiveResult = [OfType, TargetType] extends [TargetType, OfType] ? true : false;
        type Actual = CheckOrdinary<TargetType, OfType, Options>;
        type Result = IsExact<Actual, Expected>;
        type ValidatedResult = IsExact<EffectiveResult, Expected>;

        assertType<Result>(IS_TRUE);
        assertType<ValidatedResult>(IS_TRUE);
      });

      it('should return false for never', () => {
        type TargetType = never;
        type Expected = false;
        type EffectiveResult = [OfType, TargetType] extends [TargetType, OfType] ? true : false;
        type Actual = CheckOrdinary<TargetType, OfType, Options>;
        type Result = IsExact<Actual, Expected>;
        type ValidatedResult = IsExact<EffectiveResult, Expected>;

        assertType<Result>(IS_TRUE);
        assertType<ValidatedResult>(IS_TRUE);
      });

      it('should return true for void', () => {
        type TargetType = void;
        type Expected = true;
        type EffectiveResult = [OfType, TargetType] extends [TargetType, OfType] ? true : false;
        type Actual = CheckOrdinary<TargetType, OfType, Options>;
        type Result = IsExact<Actual, Expected>;
        type ValidatedResult = IsExact<EffectiveResult, Expected>;

        assertType<Result>(IS_TRUE);
        assertType<ValidatedResult>(IS_TRUE);
      });

      it('should return false for unknown', () => {
        type TargetType = unknown;
        type Expected = false;
        type EffectiveResult = [OfType, TargetType] extends [TargetType, OfType] ? true : false;
        type Actual = CheckOrdinary<TargetType, OfType, Options>;
        type Result = IsExact<Actual, Expected>;
        type ValidatedResult = IsExact<EffectiveResult, Expected>;

        assertType<Result>(IS_TRUE);
        assertType<ValidatedResult>(IS_TRUE);
      });

      it('should return true for self', () => {
        type TargetType = OfType;
        type Expected = true;
        type EffectiveResult = [OfType, TargetType] extends [TargetType, OfType] ? true : false;
        type Actual = CheckOrdinary<TargetType, OfType, Options>;
        type Result = IsExact<Actual, Expected>;
        type ValidatedResult = IsExact<EffectiveResult, Expected>;

        assertType<Result>(IS_TRUE);
        assertType<ValidatedResult>(IS_TRUE);
      });

      it('should return false for literal', () => {
        type TargetType = "hello, world";
        type Expected = false;
        type EffectiveResult = [OfType, TargetType] extends [TargetType, OfType] ? true : false;
        type Actual = CheckOrdinary<TargetType, OfType, Options>;
        type Result = IsExact<Actual, Expected>;
        type ValidatedResult = IsExact<EffectiveResult, Expected>;

        assertType<Result>(IS_TRUE);
        assertType<ValidatedResult>(IS_TRUE);
      });
    });
  });


  // describe('Object', () => {
  //   type OfType = {
  //     a: number;
  //     b: string;
  //     c: boolean;
  //   };

  //   type Subtype =
  //     & OfType
  //     & {
  //       d: symbol;
  //     };

  //   describe('AsLoose (default)', () => {
  //     describe('AsForward (default)', () => {
  //       describe('AsDistributed (default)', () => {
  //         it('should return boolean for any type', () => {
  //           type EffectiveResult = AnyType extends OfType ? true : false;
  //           type Actual = CheckOrdinary<AnyType, OfType>;
  //           type Expected = boolean;
  //           type Result = IsExact<Actual, Expected>;
  //           type ValidatedResult = IsExact<EffectiveResult, Expected>;

  //           assertType<ValidatedResult>(IS_TRUE);
  //           assertType<Result>(IS_TRUE);
  //         });

  //         it('should return true for never type', () => {
  //           type EffectiveResult = never extends OfType ? true : false;
  //           type Actual = CheckOrdinary<never, OfType>;
  //           type Expected = true;
  //           type Result = IsExact<Actual, Expected>;
  //           type ValidatedResult = IsExact<EffectiveResult, Expected>;

  //           assertType<ValidatedResult>(IS_TRUE);
  //           assertType<Result>(IS_TRUE);
  //         });

  //         it('should return false for void type', () => {
  //           type EffectiveResult = void extends OfType ? true : false;
  //           type Actual = CheckOrdinary<void, OfType>;
  //           type Expected = false;
  //           type Result = IsExact<Actual, Expected>;
  //           type ValidatedResult = IsExact<EffectiveResult, Expected>;

  //           assertType<ValidatedResult>(IS_TRUE);
  //           assertType<Result>(IS_TRUE);
  //         });

  //         it('should return false for unknown type', () => {
  //           type EffectiveResult = unknown extends OfType ? true : false;
  //           type Actual = CheckOrdinary<unknown, OfType>;
  //           type Expected = false;
  //           type Result = IsExact<Actual, Expected>;
  //           type ValidatedResult = IsExact<EffectiveResult, Expected>;

  //           assertType<ValidatedResult>(IS_TRUE);
  //           assertType<Result>(IS_TRUE);
  //         });

  //         it('should return false for string type', () => {
  //           type EffectiveResult = string extends OfType ? true : false;
  //           type Actual = CheckOrdinary<string, OfType>;
  //           type Expected = false;
  //           type Result = IsExact<Actual, Expected>;
  //           type ValidatedResult = IsExact<EffectiveResult, Expected>;

  //           assertType<ValidatedResult>(IS_TRUE);
  //           assertType<Result>(IS_TRUE);
  //         });

  //         it('should return true for Subtype', () => {
  //           type EffectiveResult = Subtype extends OfType ? true : false;
  //           type Actual = CheckOrdinary<Subtype, OfType>;
  //           type Expected = true;
  //           type Result = IsExact<Actual, Expected>;
  //           type ValidatedResult = IsExact<EffectiveResult, Expected>;

  //           assertType<ValidatedResult>(IS_TRUE);
  //           assertType<Result>(IS_TRUE);
  //         });
  //       });

  //       describe('AsUnified', () => {
  //         it('should return true for any type', () => {
  //           type EffectiveResult = [AnyType] extends [OfType] ? true : false;
  //           type Actual = CheckOrdinary<
  //             OfType,
  //             OfType,
  //             AsUnified
  //           >;
  //           type Expected = true;
  //           type Result = IsExact<Actual, Expected>;
  //           type ValidatedResult = IsExact<EffectiveResult, Expected>;

  //           assertType<ValidatedResult>(IS_TRUE);
  //           assertType<Result>(IS_TRUE);
  //         });

  //         it('should return true for never type', () => {
  //           type EffectiveResult = [never] extends [OfType] ? true : false;
  //           type Actual = CheckOrdinary<never, OfType, AsUnified>;
  //           type Expected = true;
  //           type Result = IsExact<Actual, Expected>;
  //           type ValidatedResult = IsExact<EffectiveResult, Expected>;

  //           assertType<ValidatedResult>(IS_TRUE);
  //           assertType<Result>(IS_TRUE);
  //         });

  //         it('should return false for void type', () => {
  //           type EffectiveResult = [void] extends [OfType] ? true : false;
  //           type Actual = CheckOrdinary<void, OfType, AsUnified>;
  //           type Expected = false;
  //           type Result = IsExact<Actual, Expected>;
  //           type ValidatedResult = IsExact<EffectiveResult, Expected>;

  //           assertType<ValidatedResult>(IS_TRUE);
  //           assertType<Result>(IS_TRUE);
  //         });

  //         it('should return false for unknown type', () => {
  //           type EffectiveResult = [unknown] extends [OfType] ? true : false;
  //           type Actual = CheckOrdinary<unknown, OfType, AsUnified>;
  //           type Expected = false;
  //           type Result = IsExact<Actual, Expected>;
  //           type ValidatedResult = IsExact<EffectiveResult, Expected>;

  //           assertType<ValidatedResult>(IS_TRUE);
  //           assertType<Result>(IS_TRUE);
  //         });

  //         it('should return false for string type', () => {
  //           type EffectiveResult = [string] extends [OfType] ? true : false;
  //           type Actual = CheckOrdinary<string, OfType, AsUnified>;
  //           type Expected = false;
  //           type Result = IsExact<Actual, Expected>;
  //           type ValidatedResult = IsExact<EffectiveResult, Expected>;

  //           assertType<ValidatedResult>(IS_TRUE);
  //           assertType<Result>(IS_TRUE);
  //         });

  //         it('should return true for Subtype', () => {
  //           type EffectiveResult = [Subtype] extends [OfType] ? true : false;
  //           type Actual = CheckOrdinary<Subtype, OfType, AsUnified>;
  //           type Expected = true;
  //           type Result = IsExact<Actual, Expected>;
  //           type ValidatedResult = IsExact<EffectiveResult, Expected>;

  //           assertType<ValidatedResult>(IS_TRUE);
  //           assertType<Result>(IS_TRUE);
  //         });
  //       });
  //     });

  //     describe('AsReversed', () => {
  //       describe('AsDistributed (default)', () => {
  //         it('should return true for any type', () => {
  //           type EffectiveResult = [OfType] extends [AnyType] ? true : false;
  //           type Actual = CheckOrdinary<AnyType, OfType, AsReversed>;
  //           type Expected = true;
  //           type Result = IsExact<Actual, Expected>;
  //           type ValidatedResult = IsExact<EffectiveResult, Expected>;

  //           assertType<ValidatedResult>(IS_TRUE);
  //           assertType<Result>(IS_TRUE);
  //         });

  //         it('should return false for never type', () => {
  //           type EffectiveResult = [OfType] extends [never] ? true : false;
  //           type Actual = CheckOrdinary<never, OfType, AsReversed>;
  //           type Expected = false;
  //           type Result = IsExact<Actual, Expected>;
  //           type ValidatedResult = IsExact<EffectiveResult, Expected>;

  //           assertType<ValidatedResult>(IS_TRUE);
  //           assertType<Result>(IS_TRUE);
  //         });

  //         it('should return false for void type', () => {
  //           type EffectiveResult = [OfType] extends [void] ? true : false;
  //           type Actual = CheckOrdinary<void, OfType, AsReversed>;
  //           type Expected = false;
  //           type Result = IsExact<Actual, Expected>;
  //           type ValidatedResult = IsExact<EffectiveResult, Expected>;

  //           assertType<ValidatedResult>(IS_TRUE);
  //           assertType<Result>(IS_TRUE);
  //         });

  //         it('should return true for unknown type', () => {
  //           type EffectiveResult = [OfType] extends [unknown] ? true : false;
  //           type Actual = CheckOrdinary<unknown, OfType, AsReversed>;
  //           type Expected = true;
  //           type Result = IsExact<Actual, Expected>;
  //           type ValidatedResult = IsExact<EffectiveResult, Expected>;

  //           assertType<ValidatedResult>(IS_TRUE);
  //           assertType<Result>(IS_TRUE);
  //         });

  //         it('should return false for string type', () => {
  //           type EffectiveResult = [OfType] extends [string] ? true : false;
  //           type Actual = CheckOrdinary<string, OfType, AsReversed>;
  //           type Expected = false;
  //           type Result = IsExact<Actual, Expected>;
  //           type ValidatedResult = IsExact<EffectiveResult, Expected>;

  //           assertType<ValidatedResult>(IS_TRUE);
  //           assertType<Result>(IS_TRUE);
  //         });

  //         it('should return false for Subtype', () => {
  //           type EffectiveResult = [OfType] extends [Subtype] ? true : false;
  //           type Actual = CheckOrdinary<
  //             Subtype,
  //             OfType,
  //             AsReversed
  //           >;
  //           type Expected = false;
  //           type Result = IsExact<Actual, Expected>;
  //           type ValidatedResult = IsExact<EffectiveResult, Expected>;

  //           assertType<ValidatedResult>(IS_TRUE);
  //           assertType<Result>(IS_TRUE);
  //         });
  //       });

  //       describe('AsUnified', () => {
  //         it('should return true for any type', () => {
  //           type EffectiveResult = [OfType] extends [AnyType] ? true : false;
  //           type Actual = CheckOrdinary<
  //             AnyType,
  //             OfType,
  //             AsUnified & AsReversed
  //           >;
  //           type Expected = true;
  //           type Result = IsExact<Actual, Expected>;
  //           type ValidatedResult = IsExact<EffectiveResult, Expected>;

  //           assertType<ValidatedResult>(IS_TRUE);
  //           assertType<Result>(IS_TRUE);
  //         });

  //         it('should return false for never type', () => {
  //           type EffectiveResult = [OfType] extends [never] ? true : false;
  //           type Actual = CheckOrdinary<
  //             never,
  //             OfType,
  //             AsUnified & AsReversed
  //           >;
  //           type Expected = false;
  //           type Result = IsExact<Actual, Expected>;
  //           type ValidatedResult = IsExact<EffectiveResult, Expected>;

  //           assertType<ValidatedResult>(IS_TRUE);
  //           assertType<Result>(IS_TRUE);
  //         });

  //         it('should return false for void type', () => {
  //           type EffectiveResult = [OfType] extends [void] ? true : false;
  //           type Actual = CheckOrdinary<
  //             OfType,
  //             void,
  //             AsUnified & AsReversed
  //           >;
  //           type Expected = false;
  //           type Result = IsExact<Actual, Expected>;
  //           type ValidatedResult = IsExact<EffectiveResult, Expected>;

  //           assertType<ValidatedResult>(IS_TRUE);
  //           assertType<Result>(IS_TRUE);
  //         });

  //         it('should return true for unknown type', () => {
  //           type EffectiveResult = [OfType] extends [unknown] ? true : false;
  //           type Actual = CheckOrdinary<
  //             unknown,
  //             OfType,
  //             AsUnified & AsReversed
  //           >;
  //           type Expected = true;
  //           type Result = IsExact<Actual, Expected>;
  //           type ValidatedResult = IsExact<EffectiveResult, Expected>;

  //           assertType<ValidatedResult>(IS_TRUE);
  //           assertType<Result>(IS_TRUE);
  //         });

  //         it('should return false for string type', () => {
  //           type EffectiveResult = [OfType] extends [string] ? true : false;
  //           type Actual = CheckOrdinary<
  //             OfType,
  //             string,
  //             AsUnified & AsReversed
  //           >;
  //           type Expected = false;
  //           type Result = IsExact<Actual, Expected>;
  //           type ValidatedResult = IsExact<EffectiveResult, Expected>;

  //           assertType<ValidatedResult>(IS_TRUE);
  //           assertType<Result>(IS_TRUE);
  //         });

  //         it('should return false for Subtype', () => {
  //           type EffectiveResult = [OfType] extends [Subtype] ? true : false;
  //           type Actual = CheckOrdinary<
  //             Subtype,
  //             OfType,
  //             AsUnified & AsReversed
  //           >;
  //           type Expected = false;
  //           type Result = IsExact<Actual, Expected>;
  //           type ValidatedResult = IsExact<EffectiveResult, Expected>;

  //           assertType<ValidatedResult>(IS_TRUE);
  //           assertType<Result>(IS_TRUE);
  //         });
  //       });
  //     });
  //   });
  // });
});
