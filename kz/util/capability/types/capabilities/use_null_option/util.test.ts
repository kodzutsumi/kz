// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import { describe, it } from '@std/testing/bdd';
import { assertType, type IsExact } from '@std/testing/types';
import type {
  AsLevel,
  AsNullOption,
  ConditionOf,
  Else,
  IsNullOption,
  Then,
} from '@kz/util/capability';

const IS_TRUE = true;

describe('UseNullOption - utilities', () => {
  describe('IsNullOption', () => {
    describe('AsCondition (default condition)', () => {
      it('should be true for AsNullOption', () => {
        type Actual = IsNullOption<AsNullOption>;
        type Expected = true;
        type Result = IsExact<Actual, Expected>;

        assertType<Result>(IS_TRUE);
      });

      it('should be false for anything else', () => {
        type Actual = IsNullOption<AsLevel<10>>;
        type Expected = false;
        type Result = IsExact<Actual, Expected>;

        assertType<Result>(IS_TRUE);
      });
    });

    describe('Then<ThenType>', () => {
      it('should be ThenType for AsNullOption', () => {
        type Actual = IsNullOption<AsNullOption, Then<string>>;
        type Expected = string;
        type Result = IsExact<Actual, Expected>;

        assertType<Result>(IS_TRUE);
      });

      it('should be false for anything else', () => {
        type Actual = IsNullOption<AsLevel<10>, Then<string>>;
        type Expected = false;
        type Result = IsExact<Actual, Expected>;

        assertType<Result>(IS_TRUE);
      });
    });

    describe('Else<ElseType>', () => {
      it('should be true for AsNullOption', () => {
        type Actual = IsNullOption<AsNullOption, Else<string>>;
        type Expected = true;
        type Result = IsExact<Actual, Expected>;

        assertType<Result>(IS_TRUE);
      });

      it('should be ElseType for anything else', () => {
        type Actual = IsNullOption<AsLevel<10>, Else<number>>;
        type Expected = number;
        type Result = IsExact<Actual, Expected>;

        assertType<Result>(IS_TRUE);
      });
    });

    describe('ConditionOf<ThenType, ElseType>', () => {
      it('should be ThenType for AsNullOption', () => {
        type Actual = IsNullOption<AsNullOption, ConditionOf<string, number>>;
        type Expected = string;
        type Result = IsExact<Actual, Expected>;

        assertType<Result>(IS_TRUE);
      });

      it('should be ElseType for anything else', () => {
        type Actual = IsNullOption<AsLevel<10>, ConditionOf<string, number>>;
        type Expected = number;
        type Result = IsExact<Actual, Expected>;

        assertType<Result>(IS_TRUE);
      });
    });
  });
});
