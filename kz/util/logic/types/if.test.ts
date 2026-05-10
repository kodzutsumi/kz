// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import { describe, it } from '@std/testing/bdd';
import { assertType, type IsExact } from '@std/testing/types';

import type { If } from '@kz/util/logic';
import type {
  AsCondition,
  AsInitial,
  AsInverted,
  AsSafe,
  AsUnsafe,
  ConditionOf,
  Else,
  Then,
} from '@kz/util/capability';

const IS_TRUE = true;

describe('If', () => {
  describe('examples', () => {
    type HasLength<Type> = If<
      Type extends { length: number } ? true : false
    >;

    it('should return true', () => {
      type Actual = HasLength<'hello world'>;
      type Expected = true;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });

    it('should return true', () => {
      type Actual = HasLength<['hello', 'world']>;
      type Expected = true;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });

    it('should return false', () => {
      type Actual = HasLength<30>;
      type Expected = false;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
  });

  describe('behavior matrix', () => {
    type ThenType = string;
    type ElseType = number;

    it('should be true: 1', () => {
      type Actual = If<true, AsCondition & AsSafe & AsInitial>;
      type Expected = true;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
    it('should be false: 2', () => {
      type Actual = If<true, AsCondition & AsSafe & AsInverted>;
      type Expected = false;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
    it('should be true: 3', () => {
      type Actual = If<true, AsCondition & AsUnsafe & AsInitial>;
      type Expected = true;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
    it('should be false: 4', () => {
      type Actual = If<true, AsCondition & AsUnsafe & AsInverted>;
      type Expected = false;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
    it('should be ThenType: 5', () => {
      type Actual = If<true, Then<ThenType> & AsSafe & AsInitial>;
      type Expected = ThenType;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
    it('should be false: 6', () => {
      type Actual = If<true, Then<ThenType> & AsSafe & AsInverted>;
      type Expected = false;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
    it('should be ThenType: 7', () => {
      type Actual = If<true, Then<ThenType> & AsUnsafe & AsInitial>;
      type Expected = ThenType;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
    it('should be false: 8', () => {
      type Actual = If<true, Then<ThenType> & AsUnsafe & AsInverted>;
      type Expected = false;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
    it('should be true: 9', () => {
      type Actual = If<true, Else<ElseType> & AsSafe & AsInitial>;
      type Expected = true;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
    it('should be ElseType: 10', () => {
      type Actual = If<true, Else<ElseType> & AsSafe & AsInverted>;
      type Expected = ElseType;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
    it('should be true: 11', () => {
      type Actual = If<true, Else<ElseType> & AsUnsafe & AsInitial>;
      type Expected = true;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
    it('should be ElseType: 12', () => {
      type Actual = If<true, Else<ElseType> & AsUnsafe & AsInverted>;
      type Expected = ElseType;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
    it('should be ThenType: 13', () => {
      type Actual = If<
        true,
        ConditionOf<ThenType, ElseType> & AsSafe & AsInitial
      >;
      type Expected = ThenType;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
    it('should be ElseType: 14', () => {
      type Actual = If<
        true,
        ConditionOf<ThenType, ElseType> & AsSafe & AsInverted
      >;
      type Expected = ElseType;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
    it('should be ThenType: 15', () => {
      type Actual = If<
        true,
        ConditionOf<ThenType, ElseType> & AsUnsafe & AsInitial
      >;
      type Expected = ThenType;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
    it('should be ElseType: 16', () => {
      type Actual = If<
        true,
        ConditionOf<ThenType, ElseType> & AsUnsafe & AsInverted
      >;
      type Expected = ElseType;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
    it('should be false: 17', () => {
      type Actual = If<false, AsCondition & AsSafe & AsInitial>;
      type Expected = false;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
    it('should be true: 18', () => {
      type Actual = If<false, AsCondition & AsSafe & AsInverted>;
      type Expected = true;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
    it('should be false: 19', () => {
      type Actual = If<false, AsCondition & AsUnsafe & AsInitial>;
      type Expected = false;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
    it('should be true: 20', () => {
      type Actual = If<false, AsCondition & AsUnsafe & AsInverted>;
      type Expected = true;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
    it('should be false: 21', () => {
      type Actual = If<false, Then<ThenType> & AsSafe & AsInitial>;
      type Expected = false;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
    it('should be ThenType: 22', () => {
      type Actual = If<false, Then<ThenType> & AsSafe & AsInverted>;
      type Expected = ThenType;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
    it('should be false: 23', () => {
      type Actual = If<false, Then<ThenType> & AsUnsafe & AsInitial>;
      type Expected = false;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
    it('should be ThenType: 24', () => {
      type Actual = If<false, Then<ThenType> & AsUnsafe & AsInverted>;
      type Expected = ThenType;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
    it('should be ElseType: 25', () => {
      type Actual = If<false, Else<ElseType> & AsSafe & AsInitial>;
      type Expected = ElseType;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
    it('should be true: 26', () => {
      type Actual = If<false, Else<ElseType> & AsSafe & AsInverted>;
      type Expected = true;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
    it('should be ElseType: 27', () => {
      type Actual = If<false, Else<ElseType> & AsUnsafe & AsInitial>;
      type Expected = ElseType;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
    it('should be true: 28', () => {
      type Actual = If<false, Else<ElseType> & AsUnsafe & AsInverted>;
      type Expected = true;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
    it('should be ElseType: 29', () => {
      type Actual = If<
        false,
        ConditionOf<ThenType, ElseType> & AsSafe & AsInitial
      >;
      type Expected = ElseType;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
    it('should be ThenType: 30', () => {
      type Actual = If<
        false,
        ConditionOf<ThenType, ElseType> & AsSafe & AsInverted
      >;
      type Expected = ThenType;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
    it('should be ElseType: 31', () => {
      type Actual = If<
        false,
        ConditionOf<ThenType, ElseType> & AsUnsafe & AsInitial
      >;
      type Expected = ElseType;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
    it('should be ThenType: 32', () => {
      type Actual = If<
        false,
        ConditionOf<ThenType, ElseType> & AsUnsafe & AsInverted
      >;
      type Expected = ThenType;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
    it('should be boolean: 33', () => {
      type Actual = If<boolean, AsCondition & AsSafe & AsInitial>;
      type Expected = boolean;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
    it('should be boolean: 34', () => {
      type Actual = If<boolean, AsCondition & AsSafe & AsInverted>;
      type Expected = boolean;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
    it('should be true: 35', () => {
      type Actual = If<boolean, AsCondition & AsUnsafe & AsInitial>;
      type Expected = true;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
    it('should be false: 36', () => {
      type Actual = If<boolean, AsCondition & AsUnsafe & AsInverted>;
      type Expected = false;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
    it('should be ThenType | false: 37', () => {
      type Actual = If<boolean, Then<ThenType> & AsSafe & AsInitial>;
      type Expected = ThenType | false;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
    it('should be string | false: 38', () => {
      type Actual = If<boolean, Then<ThenType> & AsSafe & AsInverted>;
      type Expected = string | false;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
    it('should be ThenType: 39', () => {
      type Actual = If<boolean, Then<ThenType> & AsUnsafe & AsInitial>;
      type Expected = ThenType;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
    it('should be false: 40', () => {
      type Actual = If<boolean, Then<ThenType> & AsUnsafe & AsInverted>;
      type Expected = false;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
    it('should be true | ElseType: 41', () => {
      type Actual = If<boolean, Else<ElseType> & AsSafe & AsInitial>;
      type Expected = true | ElseType;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
    it('should be true | ElseType: 42', () => {
      type Actual = If<boolean, Else<ElseType> & AsSafe & AsInverted>;
      type Expected = true | ElseType;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
    it('should be true: 43', () => {
      type Actual = If<boolean, Else<ElseType> & AsUnsafe & AsInitial>;
      type Expected = true;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
    it('should be ElseType: 44', () => {
      type Actual = If<boolean, Else<ElseType> & AsUnsafe & AsInverted>;
      type Expected = ElseType;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
    it('should be ThenType | ElseType: 45', () => {
      type Actual = If<
        boolean,
        ConditionOf<ThenType, ElseType> & AsSafe & AsInitial
      >;
      type Expected = ThenType | ElseType;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
    it('should be ThenType | ElseType: 46', () => {
      type Actual = If<
        boolean,
        ConditionOf<ThenType, ElseType> & AsSafe & AsInverted
      >;
      type Expected = ThenType | ElseType;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
    it('should be ThenType: 47', () => {
      type Actual = If<
        boolean,
        ConditionOf<ThenType, ElseType> & AsUnsafe & AsInitial
      >;
      type Expected = ThenType;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
    it('should be ElseType: 48', () => {
      type Actual = If<
        boolean,
        ConditionOf<ThenType, ElseType> & AsUnsafe & AsInverted
      >;
      type Expected = ElseType;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
  });
});
