// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import { describe, it } from '@std/testing/bdd';
import { assertType, type IsExact } from '@std/testing/types';
import type { $AsNullSetting, $AsReversed, $AsStrict, $AsUnified } from '@kz/util/capability';

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
          type Settings = $AsNullSetting;

          it('should return boolean for any', () => {
            type TargetType = AnyType;
            type Expected = boolean;
            type EffectiveResult = TargetType extends OfType ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Settings>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return true for never', () => {
            type TargetType = never;
            type Expected = true;
            type EffectiveResult = TargetType extends OfType ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Settings>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return false for void', () => {
            type TargetType = void;
            type Expected = false;
            type EffectiveResult = TargetType extends OfType ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Settings>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return false for unknown', () => {
            type TargetType = unknown;
            type Expected = false;
            type EffectiveResult = TargetType extends OfType ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Settings>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return true for self', () => {
            type TargetType = OfType;
            type Expected = true;
            type EffectiveResult = TargetType extends OfType ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Settings>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return true for literal', () => {
            type TargetType = "hello, world";
            type Expected = true;
            type EffectiveResult = TargetType extends OfType ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Settings>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });
        });
        
        describe('$AsUnified', () => {
          type Settings = $AsUnified;

          it('should return true for any', () => {
            type TargetType = AnyType;
            type Expected = true;
            type EffectiveResult = [TargetType] extends [OfType] ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Settings>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return true for never', () => {
            type TargetType = never;
            type Expected = true;
            type EffectiveResult = [TargetType] extends [OfType] ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Settings>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return false for void', () => {
            type TargetType = void;
            type Expected = false;
            type EffectiveResult = [TargetType] extends [OfType] ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Settings>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return false for unknown', () => {
            type TargetType = unknown;
            type Expected = false;
            type EffectiveResult = [TargetType] extends [OfType] ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Settings>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return true for self', () => {
            type TargetType = OfType;
            type Expected = true;
            type EffectiveResult = [TargetType] extends [OfType] ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Settings>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return true for literal', () => {
            type TargetType = "hello, world";
            type Expected = true;
            type EffectiveResult = [TargetType] extends [OfType] ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Settings>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });
        });
      });

      describe('$AsReversed', () => {
        describe('AsDistributed (default)', () => {
          type Settings = $AsReversed;

          it('should return true for any', () => {
            type TargetType = AnyType;
            type Expected = true;
            type EffectiveResult = OfType extends TargetType ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Settings>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return false for never', () => {
            type TargetType = never;
            type Expected = false;
            type EffectiveResult = OfType extends TargetType ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Settings>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return false for void', () => {
            type TargetType = void;
            type Expected = false;
            type EffectiveResult = OfType extends TargetType ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Settings>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return true for unknown', () => {
            type TargetType = unknown;
            type Expected = true;
            type EffectiveResult = OfType extends TargetType ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Settings>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return true for self', () => {
            type TargetType = OfType;
            type Expected = true;
            type EffectiveResult = OfType extends TargetType ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Settings>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return false for literal', () => {
            type TargetType = "hello, world";
            type Expected = false;
            type EffectiveResult = OfType extends TargetType ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Settings>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });
        });
        
        describe('$AsUnified', () => {
          type Settings = $AsUnified & $AsReversed;

          it('should return true for any', () => {
            type TargetType = AnyType;
            type Expected = true;
            type EffectiveResult = [OfType] extends [TargetType] ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Settings>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return false for never', () => {
            type TargetType = never;
            type Expected = false;
            type EffectiveResult = [OfType] extends [TargetType] ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Settings>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return false for void', () => {
            type TargetType = void;
            type Expected = false;
            type EffectiveResult = [OfType] extends [TargetType] ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Settings>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return true for unknown', () => {
            type TargetType = unknown;
            type Expected = true;
            type EffectiveResult = [OfType] extends [TargetType] ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Settings>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return true for self', () => {
            type TargetType = OfType;
            type Expected = true;
            type EffectiveResult = [OfType] extends [TargetType] ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Settings>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return false for literal', () => {
            type TargetType = "hello, world";
            type Expected = false;
            type EffectiveResult = [OfType] extends [TargetType] ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Settings>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });
        });
      });
    });

    describe('$AsStrict', () => {
      type Settings = $AsStrict;

      it('should return true for any', () => {
        type TargetType = AnyType;
        type Expected = true;
        type EffectiveResult = [OfType, TargetType] extends [TargetType, OfType] ? true : false;
        type Actual = CheckOrdinary<TargetType, OfType, Settings>;
        type Result = IsExact<Actual, Expected>;
        type ValidatedResult = IsExact<EffectiveResult, Expected>;

        assertType<Result>(IS_TRUE);
        assertType<ValidatedResult>(IS_TRUE);
      });

      it('should return false for never', () => {
        type TargetType = never;
        type Expected = false;
        type EffectiveResult = [OfType, TargetType] extends [TargetType, OfType] ? true : false;
        type Actual = CheckOrdinary<TargetType, OfType, Settings>;
        type Result = IsExact<Actual, Expected>;
        type ValidatedResult = IsExact<EffectiveResult, Expected>;

        assertType<Result>(IS_TRUE);
        assertType<ValidatedResult>(IS_TRUE);
      });

      it('should return false for void', () => {
        type TargetType = void;
        type Expected = false;
        type EffectiveResult = [OfType, TargetType] extends [TargetType, OfType] ? true : false;
        type Actual = CheckOrdinary<TargetType, OfType, Settings>;
        type Result = IsExact<Actual, Expected>;
        type ValidatedResult = IsExact<EffectiveResult, Expected>;

        assertType<Result>(IS_TRUE);
        assertType<ValidatedResult>(IS_TRUE);
      });

      it('should return false for unknown', () => {
        type TargetType = unknown;
        type Expected = false;
        type EffectiveResult = [OfType, TargetType] extends [TargetType, OfType] ? true : false;
        type Actual = CheckOrdinary<TargetType, OfType, Settings>;
        type Result = IsExact<Actual, Expected>;
        type ValidatedResult = IsExact<EffectiveResult, Expected>;

        assertType<Result>(IS_TRUE);
        assertType<ValidatedResult>(IS_TRUE);
      });

      it('should return true for self', () => {
        type TargetType = OfType;
        type Expected = true;
        type EffectiveResult = [OfType, TargetType] extends [TargetType, OfType] ? true : false;
        type Actual = CheckOrdinary<TargetType, OfType, Settings>;
        type Result = IsExact<Actual, Expected>;
        type ValidatedResult = IsExact<EffectiveResult, Expected>;

        assertType<Result>(IS_TRUE);
        assertType<ValidatedResult>(IS_TRUE);
      });

      it('should return false for literal', () => {
        type TargetType = "hello, world";
        type Expected = false;
        type EffectiveResult = [OfType, TargetType] extends [TargetType, OfType] ? true : false;
        type Actual = CheckOrdinary<TargetType, OfType, Settings>;
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
          type Settings = $AsNullSetting;

          it('should return boolean for any', () => {
            type TargetType = AnyType;
            type Expected = boolean;
            type EffectiveResult = TargetType extends OfType ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Settings>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return true for never', () => {
            type TargetType = never;
            type Expected = true;
            type EffectiveResult = TargetType extends OfType ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Settings>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return false for void', () => {
            type TargetType = void;
            type Expected = false;
            type EffectiveResult = TargetType extends OfType ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Settings>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return false for unknown', () => {
            type TargetType = unknown;
            type Expected = false;
            type EffectiveResult = TargetType extends OfType ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Settings>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return true for self', () => {
            type TargetType = OfType;
            type Expected = true;
            type EffectiveResult = TargetType extends OfType ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Settings>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return true for subtype', () => {
            type TargetType = number;
            type Expected = true;
            type EffectiveResult = TargetType extends OfType ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Settings>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return true for literal', () => {
            type TargetType = "hello, world";
            type Expected = true;
            type EffectiveResult = TargetType extends OfType ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Settings>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });
        });
        
        describe('$AsUnified', () => {
          type Settings = $AsUnified;

          it('should return true for any', () => {
            type TargetType = AnyType;
            type Expected = true;
            type EffectiveResult = [TargetType] extends [OfType] ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Settings>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return true for never', () => {
            type TargetType = never;
            type Expected = true;
            type EffectiveResult = [TargetType] extends [OfType] ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Settings>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return false for void', () => {
            type TargetType = void;
            type Expected = false;
            type EffectiveResult = [TargetType] extends [OfType] ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Settings>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return false for unknown', () => {
            type TargetType = unknown;
            type Expected = false;
            type EffectiveResult = [TargetType] extends [OfType] ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Settings>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return true for self', () => {
            type TargetType = OfType;
            type Expected = true;
            type EffectiveResult = [TargetType] extends [OfType] ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Settings>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return true for subtype', () => {
            type TargetType = number;
            type Expected = true;
            type EffectiveResult = [TargetType] extends [OfType] ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Settings>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return true for literal', () => {
            type TargetType = "hello, world";
            type Expected = true;
            type EffectiveResult = [TargetType] extends [OfType] ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Settings>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });
        });
      });

      describe('$AsReversed', () => {
        describe('AsDistributed (default)', () => {
          type Settings = $AsReversed;

          it('should return true for any', () => {
            type TargetType = AnyType;
            type Expected = true;
            type EffectiveResult = OfType extends TargetType ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Settings>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return false for never', () => {
            type TargetType = never;
            type Expected = false;
            type EffectiveResult = OfType extends TargetType ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Settings>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return false for void', () => {
            type TargetType = void;
            type Expected = false;
            type EffectiveResult = OfType extends TargetType ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Settings>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return true for unknown', () => {
            type TargetType = unknown;
            type Expected = true;
            type EffectiveResult = OfType extends TargetType ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Settings>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return true for self', () => {
            type TargetType = OfType;
            type Expected = true;
            type EffectiveResult = OfType extends TargetType ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Settings>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return false for subtype', () => {
            type TargetType = number;
            type Expected = false;
            type EffectiveResult = [OfType] extends TargetType ? true : false;
            type Actual = CheckOrdinary<TargetType, [OfType], Settings>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return false for literal', () => {
            type TargetType = "hello, world";
            type Expected = false;
            type EffectiveResult = OfType extends TargetType ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Settings>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });
        });
        
        describe('$AsUnified', () => {
          type Settings = $AsUnified & $AsReversed;

          it('should return true for any', () => {
            type TargetType = AnyType;
            type Expected = true;
            type EffectiveResult = [OfType] extends [TargetType] ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Settings>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return false for never', () => {
            type TargetType = never;
            type Expected = false;
            type EffectiveResult = [OfType] extends [TargetType] ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Settings>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return false for void', () => {
            type TargetType = void;
            type Expected = false;
            type EffectiveResult = [OfType] extends [TargetType] ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Settings>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return true for unknown', () => {
            type TargetType = unknown;
            type Expected = true;
            type EffectiveResult = [OfType] extends [TargetType] ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Settings>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return true for self', () => {
            type TargetType = OfType;
            type Expected = true;
            type EffectiveResult = [OfType] extends [TargetType] ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Settings>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return false for subtype', () => {
            type TargetType = number;
            type Expected = false;
            type EffectiveResult = [OfType] extends [TargetType] ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Settings>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return false for literal', () => {
            type TargetType = "hello, world";
            type Expected = false;
            type EffectiveResult = [OfType] extends [TargetType] ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Settings>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });
        });
      });
    });

    describe('$AsStrict', () => {
      type Settings = $AsStrict;

      it('should return true for any', () => {
        type TargetType = AnyType;
        type Expected = true;
        type EffectiveResult = [OfType, TargetType] extends [TargetType, OfType] ? true : false;
        type Actual = CheckOrdinary<TargetType, OfType, Settings>;
        type Result = IsExact<Actual, Expected>;
        type ValidatedResult = IsExact<EffectiveResult, Expected>;

        assertType<Result>(IS_TRUE);
        assertType<ValidatedResult>(IS_TRUE);
      });

      it('should return false for never', () => {
        type TargetType = never;
        type Expected = false;
        type EffectiveResult = [OfType, TargetType] extends [TargetType, OfType] ? true : false;
        type Actual = CheckOrdinary<TargetType, OfType, Settings>;
        type Result = IsExact<Actual, Expected>;
        type ValidatedResult = IsExact<EffectiveResult, Expected>;

        assertType<Result>(IS_TRUE);
        assertType<ValidatedResult>(IS_TRUE);
      });

      it('should return false for void', () => {
        type TargetType = void;
        type Expected = false;
        type EffectiveResult = [OfType, TargetType] extends [TargetType, OfType] ? true : false;
        type Actual = CheckOrdinary<TargetType, OfType, Settings>;
        type Result = IsExact<Actual, Expected>;
        type ValidatedResult = IsExact<EffectiveResult, Expected>;

        assertType<Result>(IS_TRUE);
        assertType<ValidatedResult>(IS_TRUE);
      });

      it('should return false for unknown', () => {
        type TargetType = unknown;
        type Expected = false;
        type EffectiveResult = [OfType, TargetType] extends [TargetType, OfType] ? true : false;
        type Actual = CheckOrdinary<TargetType, OfType, Settings>;
        type Result = IsExact<Actual, Expected>;
        type ValidatedResult = IsExact<EffectiveResult, Expected>;

        assertType<Result>(IS_TRUE);
        assertType<ValidatedResult>(IS_TRUE);
      });

      it('should return true for self', () => {
        type TargetType = OfType;
        type Expected = true;
        type EffectiveResult = [OfType, TargetType] extends [TargetType, OfType] ? true : false;
        type Actual = CheckOrdinary<TargetType, OfType, Settings>;
        type Result = IsExact<Actual, Expected>;
        type ValidatedResult = IsExact<EffectiveResult, Expected>;

        assertType<Result>(IS_TRUE);
        assertType<ValidatedResult>(IS_TRUE);
      });

      it('should return false for subtype', () => {
        type TargetType = number;
        type Expected = false;
        type EffectiveResult = [OfType, TargetType] extends [TargetType, OfType] ? true : false;
        type Actual = CheckOrdinary<TargetType, OfType, Settings>;
        type Result = IsExact<Actual, Expected>;
        type ValidatedResult = IsExact<EffectiveResult, Expected>;

        assertType<Result>(IS_TRUE);
        assertType<ValidatedResult>(IS_TRUE);
      });

      it('should return false for literal', () => {
        type TargetType = "hello, world";
        type Expected = false;
        type EffectiveResult = [OfType, TargetType] extends [TargetType, OfType] ? true : false;
        type Actual = CheckOrdinary<TargetType, OfType, Settings>;
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
          type Settings = $AsNullSetting;

          it('should return boolean for any', () => {
            type TargetType = AnyType;
            type Expected = boolean;
            type EffectiveResult = TargetType extends OfType ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Settings>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return true for never', () => {
            type TargetType = never;
            type Expected = true;
            type EffectiveResult = TargetType extends OfType ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Settings>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return false for void', () => {
            type TargetType = void;
            type Expected = false;
            type EffectiveResult = TargetType extends OfType ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Settings>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return false for unknown', () => {
            type TargetType = unknown;
            type Expected = false;
            type EffectiveResult = TargetType extends OfType ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Settings>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return true for self', () => {
            type TargetType = OfType;
            type Expected = true;
            type EffectiveResult = TargetType extends OfType ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Settings>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return true for subtype', () => {
            type TargetType = Subtype;
            type Expected = true;
            type EffectiveResult = TargetType extends OfType ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Settings>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return true for literal', () => {
            type TargetType = Literal;
            type Expected = true;
            type EffectiveResult = TargetType extends OfType ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Settings>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });
        });
        
        describe('$AsUnified', () => {
          type Settings = $AsUnified;

          it('should return true for any', () => {
            type TargetType = AnyType;
            type Expected = true;
            type EffectiveResult = [TargetType] extends [OfType] ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Settings>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return true for never', () => {
            type TargetType = never;
            type Expected = true;
            type EffectiveResult = [TargetType] extends [OfType] ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Settings>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return false for void', () => {
            type TargetType = void;
            type Expected = false;
            type EffectiveResult = [TargetType] extends [OfType] ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Settings>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return false for unknown', () => {
            type TargetType = unknown;
            type Expected = false;
            type EffectiveResult = [TargetType] extends [OfType] ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Settings>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return true for self', () => {
            type TargetType = OfType;
            type Expected = true;
            type EffectiveResult = [TargetType] extends [OfType] ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Settings>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return true for subtype', () => {
            type TargetType = Subtype;
            type Expected = true;
            type EffectiveResult = [TargetType] extends [OfType] ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Settings>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return true for literal', () => {
            type TargetType = Literal;
            type Expected = true;
            type EffectiveResult = [TargetType] extends [OfType] ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Settings>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });
        });
      });

      describe('$AsReversed', () => {
        describe('AsDistributed (default)', () => {
          type Settings = $AsReversed;

          it('should return true for any', () => {
            type TargetType = AnyType;
            type Expected = true;
            type EffectiveResult = OfType extends TargetType ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Settings>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return false for never', () => {
            type TargetType = never;
            type Expected = false;
            type EffectiveResult = OfType extends TargetType ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Settings>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return false for void', () => {
            type TargetType = void;
            type Expected = false;
            type EffectiveResult = OfType extends TargetType ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Settings>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return true for unknown', () => {
            type TargetType = unknown;
            type Expected = true;
            type EffectiveResult = OfType extends TargetType ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Settings>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return true for self', () => {
            type TargetType = OfType;
            type Expected = true;
            type EffectiveResult = OfType extends TargetType ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Settings>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return false for subtype', () => {
            type TargetType = Subtype;
            type Expected = false;
            type EffectiveResult = OfType extends TargetType ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Settings>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return false for literal', () => {
            type TargetType = Literal;
            type Expected = false;
            type EffectiveResult = OfType extends TargetType ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Settings>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });
        });
        
        describe('$AsUnified', () => {
          type Settings = $AsUnified & $AsReversed;

          it('should return true for any', () => {
            type TargetType = AnyType;
            type Expected = true;
            type EffectiveResult = [OfType] extends [TargetType] ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Settings>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return false for never', () => {
            type TargetType = never;
            type Expected = false;
            type EffectiveResult = [OfType] extends [TargetType] ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Settings>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return false for void', () => {
            type TargetType = void;
            type Expected = false;
            type EffectiveResult = [OfType] extends [TargetType] ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Settings>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return true for unknown', () => {
            type TargetType = unknown;
            type Expected = true;
            type EffectiveResult = [OfType] extends [TargetType] ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Settings>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return true for self', () => {
            type TargetType = OfType;
            type Expected = true;
            type EffectiveResult = [OfType] extends [TargetType] ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Settings>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return false for subtype', () => {
            type TargetType = Subtype;
            type Expected = false;
            type EffectiveResult = [OfType] extends [TargetType] ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Settings>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return false for literal', () => {
            type TargetType = Literal;
            type Expected = false;
            type EffectiveResult = [OfType] extends [TargetType] ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Settings>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });
        });
      });
    });

    describe('$AsStrict', () => {
      type Settings = $AsStrict;

      it('should return true for any', () => {
        type TargetType = AnyType;
        type Expected = true;
        type EffectiveResult = [OfType, TargetType] extends [TargetType, OfType] ? true : false;
        type Actual = CheckOrdinary<TargetType, OfType, Settings>;
        type Result = IsExact<Actual, Expected>;
        type ValidatedResult = IsExact<EffectiveResult, Expected>;

        assertType<Result>(IS_TRUE);
        assertType<ValidatedResult>(IS_TRUE);
      });

      it('should return false for never', () => {
        type TargetType = never;
        type Expected = false;
        type EffectiveResult = [OfType, TargetType] extends [TargetType, OfType] ? true : false;
        type Actual = CheckOrdinary<TargetType, OfType, Settings>;
        type Result = IsExact<Actual, Expected>;
        type ValidatedResult = IsExact<EffectiveResult, Expected>;

        assertType<Result>(IS_TRUE);
        assertType<ValidatedResult>(IS_TRUE);
      });

      it('should return false for void', () => {
        type TargetType = void;
        type Expected = false;
        type EffectiveResult = [OfType, TargetType] extends [TargetType, OfType] ? true : false;
        type Actual = CheckOrdinary<TargetType, OfType, Settings>;
        type Result = IsExact<Actual, Expected>;
        type ValidatedResult = IsExact<EffectiveResult, Expected>;

        assertType<Result>(IS_TRUE);
        assertType<ValidatedResult>(IS_TRUE);
      });

      it('should return false for unknown', () => {
        type TargetType = unknown;
        type Expected = false;
        type EffectiveResult = [OfType, TargetType] extends [TargetType, OfType] ? true : false;
        type Actual = CheckOrdinary<TargetType, OfType, Settings>;
        type Result = IsExact<Actual, Expected>;
        type ValidatedResult = IsExact<EffectiveResult, Expected>;

        assertType<Result>(IS_TRUE);
        assertType<ValidatedResult>(IS_TRUE);
      });

      it('should return true for self', () => {
        type TargetType = OfType;
        type Expected = true;
        type EffectiveResult = [OfType, TargetType] extends [TargetType, OfType] ? true : false;
        type Actual = CheckOrdinary<TargetType, OfType, Settings>;
        type Result = IsExact<Actual, Expected>;
        type ValidatedResult = IsExact<EffectiveResult, Expected>;

        assertType<Result>(IS_TRUE);
        assertType<ValidatedResult>(IS_TRUE);
      });

      it('should return false for subtype', () => {
        type TargetType = Subtype;
        type Expected = false;
        type EffectiveResult = [OfType, TargetType] extends [TargetType, OfType] ? true : false;
        type Actual = CheckOrdinary<TargetType, OfType, Settings>;
        type Result = IsExact<Actual, Expected>;
        type ValidatedResult = IsExact<EffectiveResult, Expected>;

        assertType<Result>(IS_TRUE);
        assertType<ValidatedResult>(IS_TRUE);
      });

      it('should return false for literal', () => {
        type TargetType = Literal;
        type Expected = false;
        type EffectiveResult = [OfType, TargetType] extends [TargetType, OfType] ? true : false;
        type Actual = CheckOrdinary<TargetType, OfType, Settings>;
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
          type Settings = $AsNullSetting;

          it('should return true for any', () => {
            type TargetType = AnyType;
            type Expected = true;
            type EffectiveResult = TargetType extends OfType ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Settings>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return true for never', () => {
            type TargetType = never;
            type Expected = true;
            type EffectiveResult = TargetType extends OfType ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Settings>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return true for void', () => {
            type TargetType = void;
            type Expected = true;
            type EffectiveResult = TargetType extends OfType ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Settings>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return true for unknown', () => {
            type TargetType = unknown;
            type Expected = true;
            type EffectiveResult = TargetType extends OfType ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Settings>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return true for self', () => {
            type TargetType = OfType;
            type Expected = true;
            type EffectiveResult = TargetType extends OfType ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Settings>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return true for literal', () => {
            type TargetType = "hello, world";
            type Expected = true;
            type EffectiveResult = TargetType extends OfType ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Settings>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });
        });
        
        describe('$AsUnified', () => {
          type Settings = $AsUnified;

          it('should return true for any', () => {
            type TargetType = AnyType;
            type Expected = true;
            type EffectiveResult = [TargetType] extends [OfType] ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Settings>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return true for never', () => {
            type TargetType = never;
            type Expected = true;
            type EffectiveResult = [TargetType] extends [OfType] ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Settings>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return true for void', () => {
            type TargetType = void;
            type Expected = true;
            type EffectiveResult = [TargetType] extends [OfType] ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Settings>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return true for unknown', () => {
            type TargetType = unknown;
            type Expected = true;
            type EffectiveResult = [TargetType] extends [OfType] ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Settings>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return true for self', () => {
            type TargetType = OfType;
            type Expected = true;
            type EffectiveResult = [TargetType] extends [OfType] ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Settings>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return true for literal', () => {
            type TargetType = "hello, world";
            type Expected = true;
            type EffectiveResult = [TargetType] extends [OfType] ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Settings>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });
        });
      });

      describe('$AsReversed', () => {
        describe('AsDistributed (default)', () => {
          type Settings = $AsReversed;

          it('should return true for any', () => {
            type TargetType = AnyType;
            type Expected = true;
            type EffectiveResult = OfType extends TargetType ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Settings>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return boolean for never', () => {
            type TargetType = never;
            type Expected = boolean;
            type EffectiveResult = OfType extends TargetType ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Settings>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return boolean for void', () => {
            type TargetType = void;
            type Expected = boolean;
            type EffectiveResult = OfType extends TargetType ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Settings>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return true for unknown', () => {
            type TargetType = unknown;
            type Expected = true;
            type EffectiveResult = OfType extends TargetType ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Settings>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return true for self', () => {
            type TargetType = OfType;
            type Expected = true;
            type EffectiveResult = OfType extends TargetType ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Settings>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return boolean for literal', () => {
            type TargetType = "hello, world";
            type Expected = boolean;
            type EffectiveResult = OfType extends TargetType ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Settings>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });
        });
        
        describe('$AsUnified', () => {
          type Settings = $AsUnified & $AsReversed;

          it('should return true for any', () => {
            type TargetType = AnyType;
            type Expected = true;
            type EffectiveResult = [OfType] extends [TargetType] ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Settings>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return false for never', () => {
            type TargetType = never;
            type Expected = false;
            type EffectiveResult = [OfType] extends [TargetType] ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Settings>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return true for void', () => {
            type TargetType = void;
            type Expected = true;
            type EffectiveResult = [OfType] extends [TargetType] ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Settings>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return true for unknown', () => {
            type TargetType = unknown;
            type Expected = true;
            type EffectiveResult = [OfType] extends [TargetType] ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Settings>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return true for self', () => {
            type TargetType = OfType;
            type Expected = true;
            type EffectiveResult = [OfType] extends [TargetType] ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Settings>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return true for literal', () => {
            type TargetType = "hello, world";
            type Expected = true;
            type EffectiveResult = [OfType] extends [TargetType] ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Settings>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });
        });
      });
    });

    describe('$AsStrict', () => {
      type Settings = $AsStrict;

      it('should return true for any', () => {
        type TargetType = AnyType;
        type Expected = true;
        type EffectiveResult = [OfType, TargetType] extends [TargetType, OfType] ? true : false;
        type Actual = CheckOrdinary<TargetType, OfType, Settings>;
        type Result = IsExact<Actual, Expected>;
        type ValidatedResult = IsExact<EffectiveResult, Expected>;

        assertType<Result>(IS_TRUE);
        assertType<ValidatedResult>(IS_TRUE);
      });

      it('should return false for never', () => {
        type TargetType = never;
        type Expected = false;
        type EffectiveResult = [OfType, TargetType] extends [TargetType, OfType] ? true : false;
        type Actual = CheckOrdinary<TargetType, OfType, Settings>;
        type Result = IsExact<Actual, Expected>;
        type ValidatedResult = IsExact<EffectiveResult, Expected>;

        assertType<Result>(IS_TRUE);
        assertType<ValidatedResult>(IS_TRUE);
      });

      it('should return true for void', () => {
        type TargetType = void;
        type Expected = true;
        type EffectiveResult = [OfType, TargetType] extends [TargetType, OfType] ? true : false;
        type Actual = CheckOrdinary<TargetType, OfType, Settings>;
        type Result = IsExact<Actual, Expected>;
        type ValidatedResult = IsExact<EffectiveResult, Expected>;

        assertType<Result>(IS_TRUE);
        assertType<ValidatedResult>(IS_TRUE);
      });

      it('should return true for unknown', () => {
        type TargetType = unknown;
        type Expected = true;
        type EffectiveResult = [OfType, TargetType] extends [TargetType, OfType] ? true : false;
        type Actual = CheckOrdinary<TargetType, OfType, Settings>;
        type Result = IsExact<Actual, Expected>;
        type ValidatedResult = IsExact<EffectiveResult, Expected>;

        assertType<Result>(IS_TRUE);
        assertType<ValidatedResult>(IS_TRUE);
      });

      it('should return true for self', () => {
        type TargetType = OfType;
        type Expected = true;
        type EffectiveResult = [OfType, TargetType] extends [TargetType, OfType] ? true : false;
        type Actual = CheckOrdinary<TargetType, OfType, Settings>;
        type Result = IsExact<Actual, Expected>;
        type ValidatedResult = IsExact<EffectiveResult, Expected>;

        assertType<Result>(IS_TRUE);
        assertType<ValidatedResult>(IS_TRUE);
      });

      it('should return true for literal', () => {
        type TargetType = "hello, world";
        type Expected = true;
        type EffectiveResult = [OfType, TargetType] extends [TargetType, OfType] ? true : false;
        type Actual = CheckOrdinary<TargetType, OfType, Settings>;
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
          type Settings = $AsNullSetting;

          it('should return true for any', () => {
            type TargetType = AnyType;
            type Expected = true;
            type EffectiveResult = TargetType extends OfType ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Settings>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return true for never', () => {
            type TargetType = never;
            type Expected = true;
            type EffectiveResult = TargetType extends OfType ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Settings>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return true for void', () => {
            type TargetType = void;
            type Expected = true;
            type EffectiveResult = TargetType extends OfType ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Settings>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return true for unknown', () => {
            type TargetType = unknown;
            type Expected = true;
            type EffectiveResult = TargetType extends OfType ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Settings>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return true for self', () => {
            type TargetType = OfType;
            type Expected = true;
            type EffectiveResult = TargetType extends OfType ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Settings>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return true for literal', () => {
            type TargetType = "hello, world";
            type Expected = true;
            type EffectiveResult = TargetType extends OfType ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Settings>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });
        });
        
        describe('$AsUnified', () => {
          type Settings = $AsUnified;

          it('should return true for any', () => {
            type TargetType = AnyType;
            type Expected = true;
            type EffectiveResult = [TargetType] extends [OfType] ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Settings>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return true for never', () => {
            type TargetType = never;
            type Expected = true;
            type EffectiveResult = [TargetType] extends [OfType] ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Settings>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return true for void', () => {
            type TargetType = void;
            type Expected = true;
            type EffectiveResult = [TargetType] extends [OfType] ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Settings>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return true for unknown', () => {
            type TargetType = unknown;
            type Expected = true;
            type EffectiveResult = [TargetType] extends [OfType] ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Settings>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return true for self', () => {
            type TargetType = OfType;
            type Expected = true;
            type EffectiveResult = [TargetType] extends [OfType] ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Settings>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return true for literal', () => {
            type TargetType = "hello, world";
            type Expected = true;
            type EffectiveResult = [TargetType] extends [OfType] ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Settings>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });
        });
      });

      describe('$AsReversed', () => {
        describe('AsDistributed (default)', () => {
          type Settings = $AsReversed;

          it('should return true for any', () => {
            type TargetType = AnyType;
            type Expected = true;
            type EffectiveResult = OfType extends TargetType ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Settings>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return false for never', () => {
            type TargetType = never;
            type Expected = false;
            type EffectiveResult = OfType extends TargetType ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Settings>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return false for void', () => {
            type TargetType = void;
            type Expected = false;
            type EffectiveResult = OfType extends TargetType ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Settings>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return true for unknown', () => {
            type TargetType = unknown;
            type Expected = true;
            type EffectiveResult = OfType extends TargetType ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Settings>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return true for self', () => {
            type TargetType = OfType;
            type Expected = true;
            type EffectiveResult = OfType extends TargetType ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Settings>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return false for literal', () => {
            type TargetType = "hello, world";
            type Expected = false;
            type EffectiveResult = OfType extends TargetType ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Settings>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });
        });
        
        describe('$AsUnified', () => {
          type Settings = $AsUnified & $AsReversed;

          it('should return true for any', () => {
            type TargetType = AnyType;
            type Expected = true;
            type EffectiveResult = [OfType] extends [TargetType] ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Settings>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return false for never', () => {
            type TargetType = never;
            type Expected = false;
            type EffectiveResult = [OfType] extends [TargetType] ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Settings>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return false for void', () => {
            type TargetType = void;
            type Expected = false;
            type EffectiveResult = [OfType] extends [TargetType] ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Settings>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return true for unknown', () => {
            type TargetType = unknown;
            type Expected = true;
            type EffectiveResult = [OfType] extends [TargetType] ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Settings>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return true for self', () => {
            type TargetType = OfType;
            type Expected = true;
            type EffectiveResult = [OfType] extends [TargetType] ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Settings>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return false for literal', () => {
            type TargetType = "hello, world";
            type Expected = false;
            type EffectiveResult = [OfType] extends [TargetType] ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Settings>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });
        });
      });
    });

    describe('$AsStrict', () => {
      type Settings = $AsStrict;

      it('should return true for any', () => {
        type TargetType = AnyType;
        type Expected = true;
        type EffectiveResult = [OfType, TargetType] extends [TargetType, OfType] ? true : false;
        type Actual = CheckOrdinary<TargetType, OfType, Settings>;
        type Result = IsExact<Actual, Expected>;
        type ValidatedResult = IsExact<EffectiveResult, Expected>;

        assertType<Result>(IS_TRUE);
        assertType<ValidatedResult>(IS_TRUE);
      });

      it('should return false for never', () => {
        type TargetType = never;
        type Expected = false;
        type EffectiveResult = [OfType, TargetType] extends [TargetType, OfType] ? true : false;
        type Actual = CheckOrdinary<TargetType, OfType, Settings>;
        type Result = IsExact<Actual, Expected>;
        type ValidatedResult = IsExact<EffectiveResult, Expected>;

        assertType<Result>(IS_TRUE);
        assertType<ValidatedResult>(IS_TRUE);
      });

      it('should return false for void', () => {
        type TargetType = void;
        type Expected = false;
        type EffectiveResult = [OfType, TargetType] extends [TargetType, OfType] ? true : false;
        type Actual = CheckOrdinary<TargetType, OfType, Settings>;
        type Result = IsExact<Actual, Expected>;
        type ValidatedResult = IsExact<EffectiveResult, Expected>;

        assertType<Result>(IS_TRUE);
        assertType<ValidatedResult>(IS_TRUE);
      });

      it('should return true for unknown', () => {
        type TargetType = unknown;
        type Expected = true;
        type EffectiveResult = [OfType, TargetType] extends [TargetType, OfType] ? true : false;
        type Actual = CheckOrdinary<TargetType, OfType, Settings>;
        type Result = IsExact<Actual, Expected>;
        type ValidatedResult = IsExact<EffectiveResult, Expected>;

        assertType<Result>(IS_TRUE);
        assertType<ValidatedResult>(IS_TRUE);
      });

      it('should return true for self', () => {
        type TargetType = OfType;
        type Expected = true;
        type EffectiveResult = [OfType, TargetType] extends [TargetType, OfType] ? true : false;
        type Actual = CheckOrdinary<TargetType, OfType, Settings>;
        type Result = IsExact<Actual, Expected>;
        type ValidatedResult = IsExact<EffectiveResult, Expected>;

        assertType<Result>(IS_TRUE);
        assertType<ValidatedResult>(IS_TRUE);
      });

      it('should return false for literal', () => {
        type TargetType = "hello, world";
        type Expected = false;
        type EffectiveResult = [OfType, TargetType] extends [TargetType, OfType] ? true : false;
        type Actual = CheckOrdinary<TargetType, OfType, Settings>;
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
          type Settings = $AsNullSetting;

          it('should return boolean for any', () => {
            type TargetType = AnyType;
            type Expected = boolean;
            type EffectiveResult = TargetType extends OfType ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Settings>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return true for never', () => {
            type TargetType = never;
            type Expected = true;
            type EffectiveResult = TargetType extends OfType ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Settings>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return false for void', () => {
            type TargetType = void;
            type Expected = false;
            type EffectiveResult = TargetType extends OfType ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Settings>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return false for unknown', () => {
            type TargetType = unknown;
            type Expected = false;
            type EffectiveResult = TargetType extends OfType ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Settings>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return true for self', () => {
            type TargetType = OfType;
            type Expected = true;
            type EffectiveResult = TargetType extends OfType ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Settings>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return false for literal', () => {
            type TargetType = "hello, world";
            type Expected = false;
            type EffectiveResult = TargetType extends OfType ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Settings>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });
        });
        
        describe('$AsUnified', () => {
          type Settings = $AsUnified;

          it('should return false for any', () => {
            type TargetType = AnyType;
            type Expected = false;
            type EffectiveResult = [TargetType] extends [OfType] ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Settings>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return true for never', () => {
            type TargetType = never;
            type Expected = true;
            type EffectiveResult = [TargetType] extends [OfType] ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Settings>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return false for void', () => {
            type TargetType = void;
            type Expected = false;
            type EffectiveResult = [TargetType] extends [OfType] ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Settings>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return false for unknown', () => {
            type TargetType = unknown;
            type Expected = false;
            type EffectiveResult = [TargetType] extends [OfType] ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Settings>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return true for self', () => {
            type TargetType = OfType;
            type Expected = true;
            type EffectiveResult = [TargetType] extends [OfType] ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Settings>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return false for literal', () => {
            type TargetType = "hello, world";
            type Expected = false;
            type EffectiveResult = [TargetType] extends [OfType] ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Settings>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });
        });
      });

      describe('$AsReversed', () => {
        describe('AsDistributed (default)', () => {
          type Settings = $AsReversed;

          it('should return true for any', () => {
            type TargetType = AnyType;
            type Expected = true;
            type EffectiveResult = OfType extends TargetType ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Settings>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return true for never', () => {
            type TargetType = never;
            type Expected = true;
            type EffectiveResult = OfType extends TargetType ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Settings>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return true for void', () => {
            type TargetType = void;
            type Expected = true;
            type EffectiveResult = OfType extends TargetType ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Settings>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return true for unknown', () => {
            type TargetType = unknown;
            type Expected = true;
            type EffectiveResult = OfType extends TargetType ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Settings>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return true for self', () => {
            type TargetType = OfType;
            type Expected = true;
            type EffectiveResult = OfType extends TargetType ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Settings>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return true for literal', () => {
            type TargetType = "hello, world";
            type Expected = true;
            type EffectiveResult = OfType extends TargetType ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Settings>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });
        });
        
        describe('$AsUnified', () => {
          type Settings = $AsUnified & $AsReversed;

          it('should return true for any', () => {
            type TargetType = AnyType;
            type Expected = true;
            type EffectiveResult = [OfType] extends [TargetType] ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Settings>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return true for never', () => {
            type TargetType = never;
            type Expected = true;
            type EffectiveResult = [OfType] extends [TargetType] ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Settings>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return true for void', () => {
            type TargetType = void;
            type Expected = true;
            type EffectiveResult = [OfType] extends [TargetType] ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Settings>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return true for unknown', () => {
            type TargetType = unknown;
            type Expected = true;
            type EffectiveResult = [OfType] extends [TargetType] ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Settings>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return true for self', () => {
            type TargetType = OfType;
            type Expected = true;
            type EffectiveResult = [OfType] extends [TargetType] ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Settings>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return true for literal', () => {
            type TargetType = "hello, world";
            type Expected = true;
            type EffectiveResult = [OfType] extends [TargetType] ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Settings>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });
        });
      });
    });

    describe('$AsStrict', () => {
      type Settings = $AsStrict;

      it('should return false for any', () => {
        type TargetType = AnyType;
        type Expected = false;
        type EffectiveResult = [OfType, TargetType] extends [TargetType, OfType] ? true : false;
        type Actual = CheckOrdinary<TargetType, OfType, Settings>;
        type Result = IsExact<Actual, Expected>;
        type ValidatedResult = IsExact<EffectiveResult, Expected>;

        assertType<Result>(IS_TRUE);
        assertType<ValidatedResult>(IS_TRUE);
      });

      it('should return true for never', () => {
        type TargetType = never;
        type Expected = true;
        type EffectiveResult = [OfType, TargetType] extends [TargetType, OfType] ? true : false;
        type Actual = CheckOrdinary<TargetType, OfType, Settings>;
        type Result = IsExact<Actual, Expected>;
        type ValidatedResult = IsExact<EffectiveResult, Expected>;

        assertType<Result>(IS_TRUE);
        assertType<ValidatedResult>(IS_TRUE);
      });

      it('should return false for void', () => {
        type TargetType = void;
        type Expected = false;
        type EffectiveResult = [OfType, TargetType] extends [TargetType, OfType] ? true : false;
        type Actual = CheckOrdinary<TargetType, OfType, Settings>;
        type Result = IsExact<Actual, Expected>;
        type ValidatedResult = IsExact<EffectiveResult, Expected>;

        assertType<Result>(IS_TRUE);
        assertType<ValidatedResult>(IS_TRUE);
      });

      it('should return false for unknown', () => {
        type TargetType = unknown;
        type Expected = false;
        type EffectiveResult = [OfType, TargetType] extends [TargetType, OfType] ? true : false;
        type Actual = CheckOrdinary<TargetType, OfType, Settings>;
        type Result = IsExact<Actual, Expected>;
        type ValidatedResult = IsExact<EffectiveResult, Expected>;

        assertType<Result>(IS_TRUE);
        assertType<ValidatedResult>(IS_TRUE);
      });

      it('should return true for self', () => {
        type TargetType = OfType;
        type Expected = true;
        type EffectiveResult = [OfType, TargetType] extends [TargetType, OfType] ? true : false;
        type Actual = CheckOrdinary<TargetType, OfType, Settings>;
        type Result = IsExact<Actual, Expected>;
        type ValidatedResult = IsExact<EffectiveResult, Expected>;

        assertType<Result>(IS_TRUE);
        assertType<ValidatedResult>(IS_TRUE);
      });

      it('should return false for literal', () => {
        type TargetType = "hello, world";
        type Expected = false;
        type EffectiveResult = [OfType, TargetType] extends [TargetType, OfType] ? true : false;
        type Actual = CheckOrdinary<TargetType, OfType, Settings>;
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
          type Settings = $AsNullSetting;

          it('should return boolean for any', () => {
            type TargetType = AnyType;
            type Expected = boolean;
            type EffectiveResult = TargetType extends OfType ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Settings>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return true for never', () => {
            type TargetType = never;
            type Expected = true;
            type EffectiveResult = TargetType extends OfType ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Settings>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return true for void', () => {
            type TargetType = void;
            type Expected = true;
            type EffectiveResult = TargetType extends OfType ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Settings>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return false for unknown', () => {
            type TargetType = unknown;
            type Expected = false;
            type EffectiveResult = TargetType extends OfType ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Settings>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return true for self', () => {
            type TargetType = OfType;
            type Expected = true;
            type EffectiveResult = TargetType extends OfType ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Settings>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return false for literal', () => {
            type TargetType = "hello, world";
            type Expected = false;
            type EffectiveResult = TargetType extends OfType ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Settings>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });
        });
        
        describe('$AsUnified', () => {
          type Settings = $AsUnified;

          it('should return true for any', () => {
            type TargetType = AnyType;
            type Expected = true;
            type EffectiveResult = [TargetType] extends [OfType] ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Settings>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return true for never', () => {
            type TargetType = never;
            type Expected = true;
            type EffectiveResult = [TargetType] extends [OfType] ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Settings>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return true for void', () => {
            type TargetType = void;
            type Expected = true;
            type EffectiveResult = [TargetType] extends [OfType] ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Settings>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return false for unknown', () => {
            type TargetType = unknown;
            type Expected = false;
            type EffectiveResult = [TargetType] extends [OfType] ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Settings>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return true for self', () => {
            type TargetType = OfType;
            type Expected = true;
            type EffectiveResult = [TargetType] extends [OfType] ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Settings>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return false for literal', () => {
            type TargetType = "hello, world";
            type Expected = false;
            type EffectiveResult = [TargetType] extends [OfType] ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Settings>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });
        });
      });

      describe('$AsReversed', () => {
        describe('AsDistributed (default)', () => {
          type Settings = $AsReversed;

          it('should return true for any', () => {
            type TargetType = AnyType;
            type Expected = true;
            type EffectiveResult = OfType extends TargetType ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Settings>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return false for never', () => {
            type TargetType = never;
            type Expected = false;
            type EffectiveResult = OfType extends TargetType ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Settings>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return true for void', () => {
            type TargetType = void;
            type Expected = true;
            type EffectiveResult = OfType extends TargetType ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Settings>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return true for unknown', () => {
            type TargetType = unknown;
            type Expected = true;
            type EffectiveResult = OfType extends TargetType ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Settings>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return true for self', () => {
            type TargetType = OfType;
            type Expected = true;
            type EffectiveResult = OfType extends TargetType ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Settings>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return false for literal', () => {
            type TargetType = "hello, world";
            type Expected = false;
            type EffectiveResult = OfType extends TargetType ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Settings>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });
        });
        
        describe('$AsUnified', () => {
          type Settings = $AsUnified & $AsReversed;

          it('should return true for any', () => {
            type TargetType = AnyType;
            type Expected = true;
            type EffectiveResult = [OfType] extends [TargetType] ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Settings>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return false for never', () => {
            type TargetType = never;
            type Expected = false;
            type EffectiveResult = [OfType] extends [TargetType] ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Settings>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return true for void', () => {
            type TargetType = void;
            type Expected = true;
            type EffectiveResult = [OfType] extends [TargetType] ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Settings>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return true for unknown', () => {
            type TargetType = unknown;
            type Expected = true;
            type EffectiveResult = [OfType] extends [TargetType] ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Settings>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return true for self', () => {
            type TargetType = OfType;
            type Expected = true;
            type EffectiveResult = [OfType] extends [TargetType] ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Settings>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });

          it('should return false for literal', () => {
            type TargetType = "hello, world";
            type Expected = false;
            type EffectiveResult = [OfType] extends [TargetType] ? true : false;
            type Actual = CheckOrdinary<TargetType, OfType, Settings>;
            type Result = IsExact<Actual, Expected>;
            type ValidatedResult = IsExact<EffectiveResult, Expected>;

            assertType<Result>(IS_TRUE);
            assertType<ValidatedResult>(IS_TRUE);
          });
        });
      });
    });

    describe('$AsStrict', () => {
      type Settings = $AsStrict;

      it('should return true for any', () => {
        type TargetType = AnyType;
        type Expected = true;
        type EffectiveResult = [OfType, TargetType] extends [TargetType, OfType] ? true : false;
        type Actual = CheckOrdinary<TargetType, OfType, Settings>;
        type Result = IsExact<Actual, Expected>;
        type ValidatedResult = IsExact<EffectiveResult, Expected>;

        assertType<Result>(IS_TRUE);
        assertType<ValidatedResult>(IS_TRUE);
      });

      it('should return false for never', () => {
        type TargetType = never;
        type Expected = false;
        type EffectiveResult = [OfType, TargetType] extends [TargetType, OfType] ? true : false;
        type Actual = CheckOrdinary<TargetType, OfType, Settings>;
        type Result = IsExact<Actual, Expected>;
        type ValidatedResult = IsExact<EffectiveResult, Expected>;

        assertType<Result>(IS_TRUE);
        assertType<ValidatedResult>(IS_TRUE);
      });

      it('should return true for void', () => {
        type TargetType = void;
        type Expected = true;
        type EffectiveResult = [OfType, TargetType] extends [TargetType, OfType] ? true : false;
        type Actual = CheckOrdinary<TargetType, OfType, Settings>;
        type Result = IsExact<Actual, Expected>;
        type ValidatedResult = IsExact<EffectiveResult, Expected>;

        assertType<Result>(IS_TRUE);
        assertType<ValidatedResult>(IS_TRUE);
      });

      it('should return false for unknown', () => {
        type TargetType = unknown;
        type Expected = false;
        type EffectiveResult = [OfType, TargetType] extends [TargetType, OfType] ? true : false;
        type Actual = CheckOrdinary<TargetType, OfType, Settings>;
        type Result = IsExact<Actual, Expected>;
        type ValidatedResult = IsExact<EffectiveResult, Expected>;

        assertType<Result>(IS_TRUE);
        assertType<ValidatedResult>(IS_TRUE);
      });

      it('should return true for self', () => {
        type TargetType = OfType;
        type Expected = true;
        type EffectiveResult = [OfType, TargetType] extends [TargetType, OfType] ? true : false;
        type Actual = CheckOrdinary<TargetType, OfType, Settings>;
        type Result = IsExact<Actual, Expected>;
        type ValidatedResult = IsExact<EffectiveResult, Expected>;

        assertType<Result>(IS_TRUE);
        assertType<ValidatedResult>(IS_TRUE);
      });

      it('should return false for literal', () => {
        type TargetType = "hello, world";
        type Expected = false;
        type EffectiveResult = [OfType, TargetType] extends [TargetType, OfType] ? true : false;
        type Actual = CheckOrdinary<TargetType, OfType, Settings>;
        type Result = IsExact<Actual, Expected>;
        type ValidatedResult = IsExact<EffectiveResult, Expected>;

        assertType<Result>(IS_TRUE);
        assertType<ValidatedResult>(IS_TRUE);
      });
    });
  });
});
