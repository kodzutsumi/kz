import { describe, it } from '@std/testing/bdd';
import { assertType, type Has, type IsExact } from '@std/testing/types';

import type {
  $AsCondition,
  $AsInitial,
  $AsInverted,
  $PickInverted,
  $UseInverted,
  $UseInvertedKey,
  $UseInvertedKeyString,
} from '@kz/util/capability';

const IS_TRUE = true;

describe('Capability $UseInverted', () => {
  describe('$UseInvertedKeyString', () => {
    it('should be "kz.i11n:use_inverted"', () => {
      type Expected = 'kz.i11n:use_inverted';
      type Actual = typeof $UseInvertedKeyString;
      type Result = IsExact<Expected, Actual>;

      assertType<Result>(IS_TRUE);
    });
  });

  describe('$UseInvertedKey', () => {
    it('should be "kz.i11n:use_inverted"', () => {
      type Expected = 'kz.i11n:use_inverted';
      type Actual = $UseInvertedKey;
      type Result = IsExact<Expected, Actual>;

      assertType<Result>(IS_TRUE);
    });
  });

  describe('$UseInverted', () => {
    it('should be a capability flag consumer', () => {
      // @ts-expect-error - should only accept boolean values
      type _TS_EXPECT_ERROR = $UseInverted<string>;
    });

    it('should be keyed by the $UseInvertedKey', () => {
      type Expected = $UseInvertedKey;
      type Actual = keyof $UseInverted;
      type Result = IsExact<Expected, Actual>;

      assertType<Result>(IS_TRUE);
    });

    it('should have a boolean value by default', () => {
      type Expected = {
        [$UseInvertedKeyString]: boolean;
      };
      type Actual = $UseInverted;
      type Result = IsExact<Expected, Actual>;

      assertType<Result>(IS_TRUE);
    });
  });

  describe('$AsInitial (default/implied)', () => {
    it('should be the false variant of $UseInverted', () => {
      type Expected = $UseInverted<false>;
      type Actual = $AsInitial;
      type Result = IsExact<Expected, Actual>;
      
      assertType<Result>(IS_TRUE);
    });

    it('should be assignable to $UseInverted', () => {
      type Expected = $UseInverted;
      type Actual = $AsInitial;
      type Result = Has<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
  });

  describe('$AsInverted', () => {
    it('should be the true variant of $UseInverted', () => {
      type Expected = $UseInverted<true>;
      type Actual = $AsInverted;
      type Result = IsExact<Expected, Actual>;
      
      assertType<Result>(IS_TRUE);
    });

    it('should be assignable to $UseInverted', () => {
      type Expected = $UseInverted;
      type Actual = $AsInitial;
      type Result = Has<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
  });

  describe('$PickInverted', () => {
    it('should pick the $UseInverted value from a settings object', () => {
      type Expected = $UseInverted<false>;
      type Settings = $AsInitial & $AsCondition;
      type Actual = $PickInverted<Settings>;
      type Result = IsExact<Expected, Actual>;

      assertType<Result>(IS_TRUE);
    });

    it('should default to $AsInitial if the settings object does not have a $UseInverted value', () => {
      type Expected = $AsInitial;
      type Settings = $AsCondition;
      type Actual = $PickInverted<Settings>;
      type Result = IsExact<Expected, Actual>;

      assertType<Result>(IS_TRUE);
    });
  });
});