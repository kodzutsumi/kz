import { describe, it } from '@std/testing/bdd';
import { assertType, type Has, type IsExact } from '@std/testing/types';

import type {
  $AsCondition,
  $ConditionOf,
  $PickCondition,
  $UseCondition,
  $AsUnsafe,
  $UseElse,
  $UseThen,
  $AsStrict,
  $Then,
  $Else,
} from '@kz/util/capability';

const IS_TRUE = true;

describe('Capability $UseCondition', () => {
  describe('$UseCondition', () => {
    describe('$AsLoose (default/implied)', () => {
      it('should be an union of $UseThen and $UseElse by default', () => {
        type Expected = $UseThen | $UseElse;
        type Actual = $UseCondition;
        type Result = IsExact<Expected, Actual>;

        assertType<Result>(IS_TRUE);
      });
    });

    describe('$AsStrict', () => {
      it('should be an intersection of $UseThen and $UseElse when $AsStrict is used', () => {
        type Expected = $UseThen & $UseElse;
        type Actual = $UseCondition<$AsStrict>;
        type Result = IsExact<Expected, Actual>;

        assertType<Result>(IS_TRUE);
      });
    });
  });

  describe('$AsCondition', () => {
    it('should be an intersection of $Then<true> and $Else<false>', () => {
      type Expected = $Then<true> & $Else<false>;
      type Actual = $AsCondition;
      type Result = IsExact<Expected, Actual>;
      
      assertType<Result>(IS_TRUE);
    });
  });

  describe('$ConditionOf', () => {
    it('should be an intersection of $Then and $Else', () => {
      type Expected = $Then & $Else;
      type Actual = $ConditionOf;
      type Result = IsExact<Expected, Actual>;
      
      assertType<Result>(IS_TRUE);
    });

    it('should be assignable to $UseCondition', () => {
      type Expected = $UseCondition;
      type Actual = $ConditionOf;
      type Result = Has<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
  });

  describe('$ConditionOf<string>', () => {
    it('should be an intersection of $Then<string> and $Else', () => {
      type Expected = $Then<string> & $Else;
      type Actual = $ConditionOf<string>;
      type Result = IsExact<Expected, Actual>;
      
      assertType<Result>(IS_TRUE);
    });

    it('should be assignable to $UseCondition', () => {
      type Expected = $UseCondition;
      type Actual = $ConditionOf<string>;
      type Result = Has<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
  });

  describe('$ConditionOf<string, number>', () => {
    it('should be an intersection of $Then<string> and $Else<number>', () => {
      type Expected = $Then<string> & $Else<number>;
      type Actual = $ConditionOf<string, number>;
      type Result = IsExact<Expected, Actual>;
      
      assertType<Result>(IS_TRUE);
    });

    it('should be assignable to $UseCondition', () => {
      type Expected = $UseCondition;
      type Actual = $ConditionOf<string, number>;
      type Result = Has<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
  });

  describe('$PickCondition', () => {
    it('should pick the $UseCondition value from a settings object', () => {
      type Expected = $Then<string> & $Else<number>;
      type Settings = $ConditionOf<string, number> & $AsUnsafe;
      type Actual = $PickCondition<Settings>;
      type Result = IsExact<Expected, Actual>;

      assertType<Result>(IS_TRUE);
    });

    it('should default to $Then & $Else if the settings object does not have a $UseCondition value', () => {
      type Expected = $Then & $Else;
      type Settings = $AsUnsafe;
      type Actual = $PickCondition<Settings>;
      type Result = IsExact<Expected, Actual>;

      assertType<Result>(IS_TRUE);
    });

    it('should imply $Else if the settings object does not have an $Else value', () => {
      type Expected = $Then<string> & $Else;
      type Settings = $AsUnsafe & $Then<string>;
      type Actual = $PickCondition<Settings>;
      type Result = IsExact<Expected, Actual>;

      assertType<Result>(IS_TRUE);
    });

    it('should imply $Then if the settings object does not have an $Then value', () => {
      type Expected = $Then & $Else<number>;
      type Settings = $AsUnsafe & $Else<number>;
      type Actual = $PickCondition<Settings>;
      type Result = IsExact<Expected, Actual>;

      assertType<Result>(IS_TRUE);
    });
  });
});