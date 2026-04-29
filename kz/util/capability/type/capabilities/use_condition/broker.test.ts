// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import { describe, it } from '@std/testing/bdd';
import { assertType, type Has, type IsExact } from '@std/testing/types';
import type {
  AsCondition,
  ConditionOf,
  Else,
  Then,
  UseCondition,
} from '@kz/util/capability';

const IS_TRUE = true;

describe('UseCondition - broker', () => {
  describe('ConditionOf', () => {
    it('should be have an unknown type for ThenType and ElseType', () => {
      type Actual = ConditionOf;
      type Expected = Then & Else;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });

    it('should be assignable to UseCondition', () => {
      type Actual = ConditionOf;
      type Expected = UseCondition;
      type Result = Has<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
  });

  describe('ConditionOf<ThenType, ElseType>', () => {
    it('should be a Then<ThenType> & Else<ElseType>', () => {
      type Actual = ConditionOf<string, number>;
      type Expected = Then<string> & Else<number>;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });

    it('should be assignable to UseCondition', () => {
      type Actual = ConditionOf<string, number>;
      type Expected = UseCondition;
      type Result = Has<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
  });

  describe('AsCondition', () => {
    it('should be a ConditionOf<true, false>', () => {
      type Actual = AsCondition;
      type Expected = ConditionOf<true, false>;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });

    it('should be assignable to UseCondition', () => {
      type Actual = AsCondition;
      type Expected = UseCondition;
      type Result = Has<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
  });
});
