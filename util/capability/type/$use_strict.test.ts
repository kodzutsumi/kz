import { describe, it } from '@std/testing/bdd';
import { assertType, type Has, type IsExact } from '@std/testing/types';

import type {
  $AsCondition,
  $AsLoose,
  $AsStrict,
  $PickStrict,
  $UseStrict,
  $UseStrictKey,
  $UseStrictKeyString,
} from '@kz/util/capability';

const IS_TRUE = true;

describe('Capability $UseStrict', () => {
  describe('$UseStrictKeyString', () => {
    it('should be "kz.i11n:use_strict"', () => {
      type Expected = 'kz.i11n:use_strict';
      type Actual = typeof $UseStrictKeyString;
      type Result = IsExact<Expected, Actual>;

      assertType<Result>(IS_TRUE);
    });
  });

  describe('$UseStrictKey', () => {
    it('should be "kz.i11n:use_strict"', () => {
      type Expected = 'kz.i11n:use_strict';
      type Actual = $UseStrictKey;
      type Result = IsExact<Expected, Actual>;

      assertType<Result>(IS_TRUE);
    });
  });

  describe('$UseStrict', () => {
    it('should be a capability flag consumer', () => {
      // @ts-expect-error - should only accept boolean values
      type _TS_EXPECT_ERROR = $UseStrict<string>;
    });

    it('should be keyed by the $UseStrictKey', () => {
      type Expected = $UseStrictKey;
      type Actual = keyof $UseStrict;
      type Result = IsExact<Expected, Actual>;

      assertType<Result>(IS_TRUE);
    });

    it('should have a boolean value by default', () => {
      type Expected = {
        [$UseStrictKeyString]: boolean;
      };
      type Actual = $UseStrict;
      type Result = IsExact<Expected, Actual>;

      assertType<Result>(IS_TRUE);
    });
  });

  describe('$AsLoose (default/implied)', () => {
    it('should be the false variant of $UseStrict', () => {
      type Expected = $UseStrict<false>;
      type Actual = $AsLoose;
      type Result = IsExact<Expected, Actual>;
      
      assertType<Result>(IS_TRUE);
    });

    it('should be assignable to $UseStrict', () => {
      type Expected = $UseStrict;
      type Actual = $AsLoose;
      type Result = Has<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
  });

  describe('$AsStrict', () => {
    it('should be the true variant of $UseStrict', () => {
      type Expected = $UseStrict<true>;
      type Actual = $AsStrict;
      type Result = IsExact<Expected, Actual>;
      
      assertType<Result>(IS_TRUE);
    });

    it('should be assignable to $UseStrict', () => {
      type Expected = $UseStrict;
      type Actual = $AsLoose;
      type Result = Has<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
  });

  describe('$PickStrict', () => {
    it('should pick the $UseStrict value from a settings object', () => {
      type Expected = $UseStrict<false>;
      type Settings = $AsLoose & $AsCondition;
      type Actual = $PickStrict<Settings>;
      type Result = IsExact<Expected, Actual>;

      assertType<Result>(IS_TRUE);
    });

    it('should default to $AsLoose if the settings object does not have a $UseStrict value', () => {
      type Expected = $AsLoose;
      type Settings = $AsCondition;
      type Actual = $PickStrict<Settings>;
      type Result = IsExact<Expected, Actual>;

      assertType<Result>(IS_TRUE);
    });
  });
});