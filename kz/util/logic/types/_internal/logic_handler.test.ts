// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import { describe, it } from '@std/testing/bdd';
import { assertType, type IsExact } from '@std/testing/types';
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

import type { LogicHandler } from './mod.ts';

const IS_TRUE = true;

describe('LogicHandler', () => {
  describe('behavior matrix', () => {
    type ThenType = string;
    type ElseType = number;

    it('should be true: 1', () => {
      type Actual = LogicHandler<true, AsCondition & AsSafe & AsInitial>;
      type Expected = true;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });

    it('should be false: 2', () => {
      type Actual = LogicHandler<true, AsCondition & AsSafe & AsInverted>;
      type Expected = false;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });

    it('should be true: 3', () => {
      type Actual = LogicHandler<true, AsCondition & AsUnsafe & AsInitial>;
      type Expected = true;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });

    it('should be false: 4', () => {
      type Actual = LogicHandler<true, AsCondition & AsUnsafe & AsInverted>;
      type Expected = false;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });

    it('should be ThenType: 5', () => {
      type Actual = LogicHandler<true, Then<ThenType> & AsSafe & AsInitial>;
      type Expected = ThenType;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });

    it('should be false: 6', () => {
      type Actual = LogicHandler<true, Then<ThenType> & AsSafe & AsInverted>;
      type Expected = false;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });

    it('should be ThenType: 7', () => {
      type Actual = LogicHandler<true, Then<ThenType> & AsUnsafe & AsInitial>;
      type Expected = ThenType;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });

    it('should be false: 8', () => {
      type Actual = LogicHandler<true, Then<ThenType> & AsUnsafe & AsInverted>;
      type Expected = false;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });

    it('should be true: 9', () => {
      type Actual = LogicHandler<true, Else<ElseType> & AsSafe & AsInitial>;
      type Expected = true;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });

    it('should be ElseType: 10', () => {
      type Actual = LogicHandler<true, Else<ElseType> & AsSafe & AsInverted>;
      type Expected = ElseType;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });

    it('should be true: 11', () => {
      type Actual = LogicHandler<true, Else<ElseType> & AsUnsafe & AsInitial>;
      type Expected = true;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });

    it('should be ElseType: 12', () => {
      type Actual = LogicHandler<true, Else<ElseType> & AsUnsafe & AsInverted>;
      type Expected = ElseType;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });

    it('should be ThenType: 13', () => {
      type Actual = LogicHandler<
        true,
        ConditionOf<ThenType, ElseType> & AsSafe & AsInitial
      >;
      type Expected = ThenType;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });

    it('should be ElseType: 14', () => {
      type Actual = LogicHandler<
        true,
        ConditionOf<ThenType, ElseType> & AsSafe & AsInverted
      >;
      type Expected = ElseType;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });

    it('should be ThenType: 15', () => {
      type Actual = LogicHandler<
        true,
        ConditionOf<ThenType, ElseType> & AsUnsafe & AsInitial
      >;
      type Expected = ThenType;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });

    it('should be ElseType: 16', () => {
      type Actual = LogicHandler<
        true,
        ConditionOf<ThenType, ElseType> & AsUnsafe & AsInverted
      >;
      type Expected = ElseType;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });

    it('should be false: 17', () => {
      type Actual = LogicHandler<false, AsCondition & AsSafe & AsInitial>;
      type Expected = false;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });

    it('should be true: 18', () => {
      type Actual = LogicHandler<false, AsCondition & AsSafe & AsInverted>;
      type Expected = true;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });

    it('should be false: 19', () => {
      type Actual = LogicHandler<false, AsCondition & AsUnsafe & AsInitial>;
      type Expected = false;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });

    it('should be true: 20', () => {
      type Actual = LogicHandler<false, AsCondition & AsUnsafe & AsInverted>;
      type Expected = true;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });

    it('should be false: 21', () => {
      type Actual = LogicHandler<false, Then<ThenType> & AsSafe & AsInitial>;
      type Expected = false;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });

    it('should be ThenType: 22', () => {
      type Actual = LogicHandler<false, Then<ThenType> & AsSafe & AsInverted>;
      type Expected = ThenType;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });

    it('should be false: 23', () => {
      type Actual = LogicHandler<false, Then<ThenType> & AsUnsafe & AsInitial>;
      type Expected = false;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });

    it('should be ThenType: 24', () => {
      type Actual = LogicHandler<false, Then<ThenType> & AsUnsafe & AsInverted>;
      type Expected = ThenType;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });

    it('should be ElseType: 25', () => {
      type Actual = LogicHandler<false, Else<ElseType> & AsSafe & AsInitial>;
      type Expected = ElseType;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });

    it('should be true: 26', () => {
      type Actual = LogicHandler<false, Else<ElseType> & AsSafe & AsInverted>;
      type Expected = true;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });

    it('should be ElseType: 27', () => {
      type Actual = LogicHandler<false, Else<ElseType> & AsUnsafe & AsInitial>;
      type Expected = ElseType;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });

    it('should be true: 28', () => {
      type Actual = LogicHandler<false, Else<ElseType> & AsUnsafe & AsInverted>;
      type Expected = true;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });

    it('should be ElseType: 29', () => {
      type Actual = LogicHandler<
        false,
        ConditionOf<ThenType, ElseType> & AsSafe & AsInitial
      >;
      type Expected = ElseType;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });

    it('should be ThenType: 30', () => {
      type Actual = LogicHandler<
        false,
        ConditionOf<ThenType, ElseType> & AsSafe & AsInverted
      >;
      type Expected = ThenType;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });

    it('should be ElseType: 31', () => {
      type Actual = LogicHandler<
        false,
        ConditionOf<ThenType, ElseType> & AsUnsafe & AsInitial
      >;
      type Expected = ElseType;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });

    it('should be ThenType: 32', () => {
      type Actual = LogicHandler<
        false,
        ConditionOf<ThenType, ElseType> & AsUnsafe & AsInverted
      >;
      type Expected = ThenType;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });

    it('should be boolean: 33', () => {
      type Actual = LogicHandler<boolean, AsCondition & AsSafe & AsInitial>;
      type Expected = boolean;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });

    it('should be boolean: 34', () => {
      type Actual = LogicHandler<boolean, AsCondition & AsSafe & AsInverted>;
      type Expected = boolean;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });

    it('should be true: 35', () => {
      type Actual = LogicHandler<boolean, AsCondition & AsUnsafe & AsInitial>;
      type Expected = true;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });

    it('should be false: 36', () => {
      type Actual = LogicHandler<boolean, AsCondition & AsUnsafe & AsInverted>;
      type Expected = false;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });

    it('should be ThenType | false: 37', () => {
      type Actual = LogicHandler<boolean, Then<ThenType> & AsSafe & AsInitial>;
      type Expected = ThenType | false;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });

    it('should be string | false: 38', () => {
      type Actual = LogicHandler<boolean, Then<ThenType> & AsSafe & AsInverted>;
      type Expected = string | false;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });

    it('should be ThenType: 39', () => {
      type Actual = LogicHandler<
        boolean,
        Then<ThenType> & AsUnsafe & AsInitial
      >;
      type Expected = ThenType;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });

    it('should be false: 40', () => {
      type Actual = LogicHandler<
        boolean,
        Then<ThenType> & AsUnsafe & AsInverted
      >;
      type Expected = false;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });

    it('should be true | ElseType: 41', () => {
      type Actual = LogicHandler<boolean, Else<ElseType> & AsSafe & AsInitial>;
      type Expected = true | ElseType;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });

    it('should be true | ElseType: 42', () => {
      type Actual = LogicHandler<boolean, Else<ElseType> & AsSafe & AsInverted>;
      type Expected = true | ElseType;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });

    it('should be true: 43', () => {
      type Actual = LogicHandler<
        boolean,
        Else<ElseType> & AsUnsafe & AsInitial
      >;
      type Expected = true;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });

    it('should be ElseType: 44', () => {
      type Actual = LogicHandler<
        boolean,
        Else<ElseType> & AsUnsafe & AsInverted
      >;
      type Expected = ElseType;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });

    it('should be ThenType | ElseType: 45', () => {
      type Actual = LogicHandler<
        boolean,
        ConditionOf<ThenType, ElseType> & AsSafe & AsInitial
      >;
      type Expected = ThenType | ElseType;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });

    it('should be ThenType | ElseType: 46', () => {
      type Actual = LogicHandler<
        boolean,
        ConditionOf<ThenType, ElseType> & AsSafe & AsInverted
      >;
      type Expected = ThenType | ElseType;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });

    it('should be ThenType: 47', () => {
      type Actual = LogicHandler<
        boolean,
        ConditionOf<ThenType, ElseType> & AsUnsafe & AsInitial
      >;
      type Expected = ThenType;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });

    it('should be ElseType: 48', () => {
      type Actual = LogicHandler<
        boolean,
        ConditionOf<ThenType, ElseType> & AsUnsafe & AsInverted
      >;
      type Expected = ElseType;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
  });
});
